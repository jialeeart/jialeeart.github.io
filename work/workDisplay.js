currentImageName = '';
blackAndWhite = ['Frog.jpg', 'Snake_korean.jpg', 'Streets.jpg'];
childrens = ['miss-muffet-spider.png', 'shrubs_w_feet_1.jpg', 'shrubs_w_feet_2.jpg', 'shrubs_w_feet_3.jpg'];
graduationShow = ['broken_vase.jpg', 'lace_and_feathers.jpg', 'lace_diamonds.jpg', 'pants.jpg', 'pink_vase.jpg', 'pool_tiles.jpg', 'rabbit.jpg', 'shells.jpg', 'sock.jpg', 'tassel.jpg', 'vase_blue.jpg', 'white_vase.jpg'];
PS2019 = ['dive_training.png', 'launch_space.png', 'roadmap.png'];
summitLogoBranding = ['ppt_roadmap_1.png', 'ppt_roadmap_2.png', 'ppt_roadmap_3.png', 'ppt_roadmap_4.png', 'summit_logo.png'];
Motion = ['goldfish.gif', 'banner.gif', 'succulent.gif'];

function fullDisplay(folderName, imageName) {
  let oldFullDisplayImage = document.querySelector("#fullDisplay img");
  let fullDisplayImage = document.createElement("img");
  fullDisplayImage.src = `../images/${folderName}/full/${imageName}`;
  fullDisplayImage.setAttribute('onclick', 'closeImage()');
  document.querySelector("#fullDisplay").replaceChild(fullDisplayImage, oldFullDisplayImage);

  currentImageName = imageName;

  $('.fullDisplayArrow').css("display", "initial");

  $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function closeImage() {
  let oldFullDisplayImage = document.querySelector("#fullDisplay img");
  let closeFullDisplayImage = document.createElement("img");
  document.querySelector("#fullDisplay").replaceChild(closeFullDisplayImage, oldFullDisplayImage);

  $('.fullDisplayArrow').css("display", "none");

  $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function prevImage(folderName) {
  let prevImageIndex;
  if ((eval(folderName).indexOf(currentImageName)) == 0) {
    prevImageIndex = eval(folderName).length - 1;
  }
  else {
    prevImageIndex = eval(folderName).indexOf(currentImageName) - 1;
  }

  let oldFullDisplayImage = document.querySelector("#fullDisplay img");
  let fullDisplayImage = document.createElement("img");
  fullDisplayImage.src = `../images/${folderName}/full/${eval(folderName)[prevImageIndex]}`;
  fullDisplayImage.setAttribute('onclick', 'closeImage()');
  document.querySelector("#fullDisplay").replaceChild(fullDisplayImage, oldFullDisplayImage);

  currentImageName = `${eval(folderName)[prevImageIndex]}`;

  $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function nextImage(folderName) {
  let nextImageIndex;
  if ((eval(folderName).indexOf(currentImageName) + 1) >= eval(folderName).length) {
    nextImageIndex = 0;
  }
  else {
    nextImageIndex = eval(folderName).indexOf(currentImageName) + 1;
  }

  let oldFullDisplayImage = document.querySelector("#fullDisplay img");
  let fullDisplayImage = document.createElement("img");
  fullDisplayImage.src = `../images/${folderName}/full/${eval(folderName)[nextImageIndex]}`;
  fullDisplayImage.setAttribute('onclick', 'closeImage()');
  document.querySelector("#fullDisplay").replaceChild(fullDisplayImage, oldFullDisplayImage);

  currentImageName = `${eval(folderName)[nextImageIndex]}`;

  $('html, body').animate({ scrollTop: 0 }, 'fast');
}