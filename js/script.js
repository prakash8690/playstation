var mainimage=document.querySelector('.big-image');
var bgchangeimage=document.querySelectorAll(".bgchange")

for(var i = 0;i < bgchangeimage.length; i++){
    bgchangeimage[i].addEventListener(
        'mouseenter',
        function(){
            mainimage.style.backgroundImage = `url(${this.src})`
        }
    )
}