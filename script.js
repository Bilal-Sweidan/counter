let i = 0;
let counter = document.getElementById("number");
counter.innerHTML = i;
function increase(){
    counter.innerHTML = i;
    i++;
    if (i < 0){
        counter.style.color = 'red';
    }
    if (i>0){
        counter.style.color = 'green';
    }
}
function decrease(){
    counter.innerHTML = i;
    i--;
    if (i < 0){
        counter.style.color = 'red';
    }
    if (i>0){
        counter.style.color = 'green';
    } 
}
