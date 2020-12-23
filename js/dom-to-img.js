import domToImage from 'dom-to-image';

const outputDiv = document.getElementById('dom-to-img-output');

const tellMeMore = document.getElementById('tell-me-more');
const ecommerce = document.getElementById('e-commerce');

const displayImage = (dataUrl) => {
  const img = new Image();
  img.src = dataUrl;
  outputDiv.appendChild(img);
};

domToImage.toPng(tellMeMore).then(displayImage);
domToImage.toPng(ecommerce).then(displayImage);
