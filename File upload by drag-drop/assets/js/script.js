"use strict";
var dropArea = document.getElementById('drop-area');
var fileInput = document.getElementById('fileElem');
var gallery = document.getElementById('gallery');


function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight() {
  dropArea.classList.add('highlight')
}

function unhighlight() {
  dropArea.classList.remove('highlight')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files

  handleFiles(files)
}

function handleFiles(files) {
  files = [...files]
  files.forEach(uploadFile)
  files.forEach(previewFile)
}

function uploadFile(file) {
  var url = 'YOUR_UPLOAD_URL'
  var formData = new FormData()

  formData.append('file', file)

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(() => { console.log('File uploaded') })
  .catch(() => { console.error('File upload failed') })
}

function previewFile(file) {
  var reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    var img = document.createElement('img')
    img.src = reader.result
    gallery.appendChild(img)
  }
}


['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)
})

dropArea.addEventListener('dragenter', highlight, false)
dropArea.addEventListener('dragover', highlight, false)
dropArea.addEventListener('dragleave', unhighlight, false)
dropArea.addEventListener('drop', handleDrop, false)


fileInput.addEventListener('change', function(){
  handleFiles(fileInput.files)
})
