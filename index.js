// Write your code here!

//Remove main
const weremoveMain = document.getElementById('main');

weremoveMain.remove();

//NewHeader 'h1#victory'
const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');

//newHeader variable that points to node 'h1#victory'

newHeader.innerHTML = "Elvis Munene is the champion";
