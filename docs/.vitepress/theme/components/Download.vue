<script setup>
import { asBlob } from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';

// const downloadDoc = () => {
//       // e.preventDefault();
//       convertImagesToBase64()

//       const content = '<!DOCTYPE html>' + document.querySelector('head').innerHTML + '<body>' + document.querySelector('main').innerHTML + '</body>';
//       // querySelector('main')

// //       body.querySelectorAll('table').forEach(table => {
// //     table.style.borderCollapse = table.style.borderCollapse || 'collapse';
// //     table.border = table.border || '1';
// //   });

//   //   const domParser = new DOMParser();

//   //   const newContent = domParser.parseFromString(content, 'text/html');
//   // // add styles for tables by default
//   // newContent.body.querySelectorAll('table').forEach(table => {
//   //     table.style.borderCollapse = table.style.borderCollapse || 'collapse';
//   //     table.border = table.border || '1';
//   //   });

//   // console.log('Download.vue:25', content);

//      const fileName = document.querySelector('main h1:first-of-type').textContent;

//       asBlob(content).then(data => {
//         saveAs(data, `${fileName}.docx`) // save as docx file
//       }) 


//       // for demo purposes only we are using below workaround with getDoc() and manual
//       // HTML string preparation instead of simple calling the .getContent(). Becasue
//       // .getContent() returns HTML string of the original document and not a modified
//       // one whereas getDoc() returns realtime document - exactly what we need.
//       // var contentDocument = tinymce.get('content').getDoc();

//       // var orientation = document.querySelector('.page-orientation input:checked').value;
//     //   var converted = asBlob(content);

//     //   saveAs(converted, 'test.docx');

//     //   var link = document.createElement('a');
//     //   link.href = URL.createObjectURL(converted);
//     //   link.download = 'document.docx';
//     //   link.appendChild(
//     //     document.createTextNode('Click here if your download has not started automatically'));
//     //   var downloadArea = document.getElementById('download-area');
//     //   downloadArea.innerHTML = '';
//     //   downloadArea.appendChild(link);
// }


const downloadWord = () => {

  const mainCopy = document.querySelector('main').cloneNode(true);

  convertImagesToBase64(mainCopy);
  mainCopy.querySelectorAll('div.line-numbers-mode').forEach((item) => {
    item.querySelector('pre.vp-code-dark')?.remove();
    item.querySelector('.line-numbers-mode')?.remove();
    item.querySelector('.lang')?.remove();
    item.querySelector('.line-numbers-wrapper')?.remove();
  });


  const mainContent = mainCopy.innerHTML;


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

  const fileName = document.querySelector('main h1:first-of-type').textContent;
  asBlob(content).then(data => {
    saveAs(data, `${fileName}.docx`) // save as docx file
  })
}


const convertImagesToBase64 = (mainCopy) => {
  var regularImages = mainCopy.querySelectorAll("img");
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

const downloadPDF = () => {
  console.log('Download.vue:175,   downloadPDF');
}


</script>

<template>
  <div class="download">

    <span class="word" @click="downloadWord">word </span>

    <span class="pdf" @click="downloadPDF">PDF </span>

  </div>

</template>
<style>
.download {
  float: right;
}

.download span {
  cursor: pointer;
  font-size: 14px;
  line-height: 28px;
  padding: 4px 8px;
}

.word {
  color: rgb(52, 145, 250);
  background-color: rgb(232, 247, 255);
  margin-right: 10px;
}

.pdf {
  color: rgb(245, 63, 63);
  background-color: rgb(255, 236, 232);
}
</style>
