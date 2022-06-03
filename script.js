const containerGrid = document.querySelector('.containerGrid');
const inputRange = document.querySelectorAll('.input');

let valueGrid ;
let div ;


function divsFirst(){
    
    // let nashe = (valueGrid * valueGrid) - 1
    for(let i = 0; i <= 255;i++){
        div = document.createElement('div');
        div.classList.add('divs');
        containerGrid.appendChild(div);

    }
}
divsFirst();


function genGrid(){

    while (containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.firstChild);
      }
    document.documentElement.style.setProperty(`--${this.name}`,this.value);
    valueGrid = this.value;
    
    let nashe = (Math.pow(valueGrid,2)) - 1;

    for(let i = 0; i <= nashe;i++){
        div = document.createElement('div');
        div.classList.add('divs');
        containerGrid.appendChild(div);
        
    }
        
    
}

inputRange.forEach(input => input.addEventListener('change', genGrid));


// -----------------------------------------------------------------------

let color ;
const inputColor = document.querySelectorAll('.inputColor');

const divsColor = document.querySelectorAll('.divs');

const inputColorDiv = document.querySelectorAll('.inputColorDiv');

inputColor.forEach(div => div.addEventListener('change', changeColor));

function changeColor(){
    // color = this.value;
    document.documentElement.style.setProperty(`--${this.name}`,this.value);
    
    
}


divsColor.forEach(div => div.addEventListener('mouseover', changeColorDiv));

function changeColorDiv(){

    
    this.classList.add('divColorHover');
    // this.style.backgroundColor = color;
    
}



inputColorDiv.forEach(div => div.addEventListener('change', changeColorNashe));

function changeColorNashe(){
    document.documentElement.style.setProperty(`--${this.name}`,this.value);
    // color = this.value;

}