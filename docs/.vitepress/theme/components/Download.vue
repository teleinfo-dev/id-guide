<script setup>
import {asBlob} from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';

const downloadDoc = () => {
      // e.preventDefault();
      convertImagesToBase64()

      const content = '<!DOCTYPE html>' + document.querySelector('.VPDoc').innerHTML;


//       body.querySelectorAll('table').forEach(table => {
//     table.style.borderCollapse = table.style.borderCollapse || 'collapse';
//     table.border = table.border || '1';
//   });

      asBlob(content).then(data => {
        saveAs(data, 'file.docx') // save as docx file
      }) 


      // for demo purposes only we are using below workaround with getDoc() and manual
      // HTML string preparation instead of simple calling the .getContent(). Becasue
      // .getContent() returns HTML string of the original document and not a modified
      // one whereas getDoc() returns realtime document - exactly what we need.
      // var contentDocument = tinymce.get('content').getDoc();
     
      // var orientation = document.querySelector('.page-orientation input:checked').value;
    //   var converted = asBlob(content);

    //   saveAs(converted, 'test.docx');

    //   var link = document.createElement('a');
    //   link.href = URL.createObjectURL(converted);
    //   link.download = 'document.docx';
    //   link.appendChild(
    //     document.createTextNode('Click here if your download has not started automatically'));
    //   var downloadArea = document.getElementById('download-area');
    //   downloadArea.innerHTML = '';
    //   downloadArea.appendChild(link);
}


const convertImagesToBase64 = () => {
    //   contentDocument = tinymce.get('content').getDoc();
      var regularImages = document.querySelectorAll("img");
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      [].forEach.call(regularImages, function (imgElement) {
        // preparing canvas for drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = imgElement.width;
        canvas.height = imgElement.height;

        ctx.drawImage(imgElement, 0, 0);
        // by default toDataURL() produces png image, but you can also export to jpeg
        // checkout function's documentation for more details
        var dataURL = canvas.toDataURL();
        imgElement.setAttribute('src', dataURL);
      })
      canvas.remove();
    }


</script>

<template>
 <button  @click="downloadDoc">下载</button>
</template>
