const outputFrame = document.getElementById('output').contentWindow.document;
const outputFrameHead = outputFrame.head;
const outputFrameBody = outputFrame.body;

const tellMeMore = document.getElementById('tell-me-more');
const ecommerce = document.getElementById('e-commerce');

const importedHead = document.importNode(document.querySelector('head'), true);
const importedButton = document.importNode(tellMeMore, true);

outputFrameBody.append(importedButton);

console.log(importedHead);

outputFrameHead.replaceWith(importedHead);
