<script setup>
import { asBlob } from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';


let htmlCopy = '';
let fileName = '接口文档';

const enableDownload = localStorage.getItem('download');

const handleHTML = () => {
  htmlCopy = document.querySelector('main');  // .cloneNode(true);
  fileName = document.querySelector('main h1:first-of-type').textContent.split(/\s/)[0];

  htmlCopy.querySelectorAll('div.line-numbers-mode').forEach((item) => {
    item.querySelector('pre.vp-code-dark')?.remove();
    item.querySelector('.line-numbers-mode')?.remove();
    item.querySelector('.lang')?.remove();
    item.querySelector('.line-numbers-wrapper')?.remove();
  });

  // htmlCopy.querySelector('.download')?.remove();

}

const downloadWord = () => {
  console.log('Download.vue:26');
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
  })

}

const convertImagesToBase64 = () => {
  const regularImages = htmlCopy.querySelectorAll("img");
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');


  [].forEach.call(regularImages, function (imgElement) {
   
    // preparing canvas for drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const {width, height} = imgElement;
      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(imgElement, 0, 0, width, height);
      imgElement.src = canvas.toDataURL();
  })
  canvas.remove();
}


</script>

<template>
    <button class="download-word" @click="downloadWord" v-if="enableDownload == 1">下载(.docx)</button>

</template>
<style>

.download-word {
  font-size: 14px;
    font-weight: 500;
    color: #0078d4;
}

</style>
