function fullDisplay(folderName, imageName) {
  let oldFullDisplayImage = document.querySelector("#fullDisplay img");
  let fullDisplayImage = document.createElement("img");
  fullDisplayImage.src = `../images/${folderName}/full/${imageName}`;
  document.querySelector("#fullDisplay").replaceChild(fullDisplayImage, oldFullDisplayImage);
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}