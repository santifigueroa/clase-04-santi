class myVideo {
     constructor(name, source, width, height) {
         this.name = name;
         this.source = source;
         this.width = width;
         this.height = height;
     }
 };

class myAudio {
     constructor(name, source) {
         this.name = name;
         this.source = source;
     }
 };

class myButton {
     constructor(name, label, target) {
         this.name = name;
         this.label = label;
         this.target = target;
     }
 };

class myList {
     constructor(orderType, elements) {
         this.orderType = orderType;
         this.elements = elements;
     }
 };

const myVideo1 = new myVideo('video1','video-01.mp4', 720, 480);
const myAudio1 = new myAudio('audio1','audio-01.mp4');
const myButton1 = new myButton('button1','Button 1', '_blank');
const myList1 = new myList('ul', ['Elemento 1', 'Elemento 2', 'Elemento 3']);

console.log(myVideo1);
console.log(myAudio1);
console.log(myButton1);
console.log(myList1);