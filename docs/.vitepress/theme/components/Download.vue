<script setup>
import { asBlob } from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';
import { jsPDF } from "jspdf";

import html2canvas from "html2canvas";

let htmlCopy = '';
let fileName = '接口文档';
let loading = false;

const handleHTML = () => {
  htmlCopy = document.querySelector('main').cloneNode(true);
  fileName = document.querySelector('main h1:first-of-type').textContent.split(/\s/)[0];


  htmlCopy.querySelectorAll('div.line-numbers-mode').forEach((item) => {
    item.querySelector('pre.vp-code-dark')?.remove();
    item.querySelector('.line-numbers-mode')?.remove();
    item.querySelector('.lang')?.remove();
    item.querySelector('.line-numbers-wrapper')?.remove();
  });

  htmlCopy.querySelector('.download')?.remove();

}

const downloadWord = () => {
  try {
  if (loading) return; 

  loading = true;
  handleHTML();
  
  convertImagesToBase64();
 
  const mainContent = htmlCopy.innerHTML;

  // 将样式嵌入到HTML中
  const content = `<!DOCTYPE html>
                    <html lang="en">
                      <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Document</title>
                    <style>
                        table {
                          border-collapse: collapse;
                        }

                        table,
                        th,
                        td {
                          border: 1px solid black;
                        }

                        td {
                          padding: 8px 16px;
                          text-align: right;
                        }

                        th {
                          color: rgba(60, 60, 67, 0.78);
                          background-color: #f6f6f7;
                        }
                    </style>
                    </head>

                    <body>
                      ${mainContent}
                    </body>
                    </html>`;

  asBlob(content).then(data => {
    saveAs(data, `${fileName}.docx`) // save as docx file
  }).finally(() => loading = false)

} catch(e) {
    loading = false;
  }
}

const convertImagesToBase64 = () => {
  var regularImages = htmlCopy.querySelectorAll("img");
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  [].forEach.call(regularImages, function (imgElement) {
    // preparing canvas for drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;

    console.log('Download.vue:145', imgElement.width, imgElement.height);

    ctx.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);
    var dataURL = canvas.toDataURL();
    imgElement.setAttribute('src', dataURL);
  })
}


const exportPdf  = (element, filename = '未命名', callback = () => {}) => {
  if (!element) {
    callback();
    return;
  }

  // 尺寸的确定
  const originWidth = element.offsetWidth || 700;

  // 创建一个容器，用于克隆元素
  const container = document.createElement('div');
  // 16px是为了生成的PDF有安全边距
  container.style.cssText = `position:fixed;left: ${-2 * originWidth}px; top:0;padding:32px;width:${originWidth}px;box-sizing:content-box;`;
  // 插入到body中
  document.body.appendChild(container);
  // 克隆元素
  container.appendChild(element.cloneNode(true));


  // 为了保证显示质量，2倍PDF尺寸
  const scale = 3;
  const width = originWidth + 32;

  //  首先确定好页面中容器元素的宽度，假设是700px，则PDF的尺寸可以设置为2倍，也就是1400px，而竖版PDF的高宽比是根号二，也就是1.414，所以PDF的高度就是1400*1.414=1979.6像素。
  const PDF_WIDTH = width * scale;
  const PDF_HEIGHT = width * 1.414 * scale;

  // 渲染方法
  const render = function () {
    // 渲染为图片并下载
    html2canvas(container, {
      scale: scale
    }).then(function(canvas) {
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;

      // 一页pdf显示html页面生成的canvas高度
      const pageHeight = contentWidth / PDF_WIDTH * PDF_HEIGHT;

      // canvas图像在画布上的尺寸
      const imgWidth = PDF_WIDTH;
      const imgHeight = PDF_WIDTH / contentWidth * contentHeight;

      let leftHeight = contentHeight;
      let position = 0;

      const doc = new jsPDF('p', 'px', [PDF_WIDTH, PDF_HEIGHT]);

      // 不足一页
      if (leftHeight < pageHeight) {
        doc.addImage(canvas, 'webp', 0, 0, imgWidth, imgHeight);
      } else {
        // 多页, 将canvas图像分隔成一页一页的，分别塞在PDF中
        while (leftHeight > 0) {
          doc.addImage(canvas, 'webp', 0, position, imgWidth, imgHeight)
          leftHeight -= pageHeight;
          position -= PDF_HEIGHT + 5;
          //避免添加空白页
          if (leftHeight > 0) {
            doc.addPage();
          }
        }
      }

      doc.save(filename + '.pdf');

      // 移除创建的元素
      container.remove();

      // 隐藏全局loading提示
      callback();
    });
  }

  // 图像地址替换成base64地址
  const eleImgs = container.querySelectorAll('img');
  const length = eleImgs.length;
  let start = 0;
  container.querySelectorAll('img').forEach(ele => {
    let src = ele.src;

    if (!src) {
      return;
    }

    // 事件处理，必须成功或失败
    ele.onload = function () {
      if (!/^http/.test(ele.src)) {
        start++;
        if (start == length) {
          render();
        }
      }
    };

    // 请求图片并转为base64地址
    fetch(src).then(res => res.blob()).then(blob => {
      var reader = new FileReader() ;
      reader.onload = function () {
        ele.src = this.result;
      };
      reader.readAsDataURL(blob) ;
    }).catch(() => {
      // 请求异常处理
      start++;
      if (start == length) {
        render();
      }
    });
  });
}

const downloadPDF = () => {
  try {
  if (loading) return;

  loading = true;

  handleHTML();
  exportPdf(htmlCopy, fileName, () => loading = false);
} catch(e) {
    loading = false;
  }
}


</script>

<template>
  <div class="download">
    <button class="word" @click="downloadWord" :disabled="loading">Word</button>
    <button class="pdf" @click="downloadPDF" :disabled="loading">PDF</button>
  </div>

</template>
<style>

.word {
  color: #0078d4;
  background-color: rgb(232, 247, 255);
  margin-right: 10px;
}

.pdf {
  color: #c43e1c;
  background-color: rgb(255, 236, 232);
}


.download {
  float: right;
}

.download > button {
  display: inline-block;
  /* cursor: pointer; */
  font-size: 14px;
  line-height: 28px;
  padding: 0 6px;
}

</style>
