function fullDisplay(folderName, imageName) {
  let oldFullDisplayImage = document.querySelector("#fullDisplay img");
  let fullDisplayImage = document.createElement("img");
  fullDisplayImage.src = `../images/${folderName}/full/${imageName}`;
  fullDisplayImage.setAttribute('onclick', 'closeImage()');
  document.querySelector("#fullDisplay").replaceChild(fullDisplayImage, oldFullDisplayImage);
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function closeImage() {
  let oldFullDisplayImage = document.querySelector("#fullDisplay img");
  let closeFullDisplayImage = document.createElement("img");
  document.querySelector("#fullDisplay").replaceChild(closeFullDisplayImage, oldFullDisplayImage);
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}