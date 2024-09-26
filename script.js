let display = document.getElementById('display');
let number = document.getElementById('number');

let imagesNum = 10
function generateImages(){
    if (number.value >= 0){
        for(let x= 0 ; x < number.value ; x++){
            let img = document.createElement('img');
            img.src = img.src = `https://picsum.photos/400/400?random=${Math.random()}`; 
            display.appendChild(img);
        }
    }
    else{
        alert('number must be  greater than 0.')
    }
    
}
function remove(){
    display.innerHTML = '';
}

