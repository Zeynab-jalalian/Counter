let positive=document.getElementById('positive');
let negative=document.getElementById('negative');
let number=document.getElementById('number');
let count=0;
positive.addEventListener('click' , function(){
    count++;
    update();
})
negative.addEventListener('click' , function(){
    count--;
    update();
})
function update(){
    number.innerHTML=count;
}