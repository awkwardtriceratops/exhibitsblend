 //this is the javascript that will blend the images
 var oncedone = 0;

 function blend() {
     var randomint = Math.floor(Math.random() * 4) + 1;
     var linktorandomimage = '../blended/a' + randomint + '.png';
     //place linktorandomimage in middleimage div
     document.getElementById("middleimagediv").innerHTML = "<img src='" + linktorandomimage + "' id='middleimage'>";
     //fade the image in
     document.getElementById("middleimage").style.opacity = 0;
     var op = 0;
     var timer = setInterval(function() {
         if (op >= 1) {
             clearInterval(timer);
         }
         document.getElementById("middleimage").style.opacity = op;
         op += 0.01;
     }, 5);
     //set the opacity of the left and right images to 0 fading them out
     var op2 = 1
     if (oncedone == 0) {
         var timersecond = setInterval(function() {
             if (op2 <= 0) {
                 clearInterval(timer);
             }
             document.getElementById("leftimage").style.opacity = op2;
             document.getElementById("rightimage").style.opacity = op2;
             op2 -= 0.01;
         }, 5);
         oncedone = 1;
     }

 }