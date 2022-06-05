const containerGrid = document.querySelector('.containerGrid');
const inputRange = document.querySelectorAll('.input');

let valueGrid ;
let div =[] ;


function divsFirst(){
    
    // let nashe = (valueGrid * valueGrid) - 1
    for(let i = 0; i <= 255;i++){
        div = document.createElement('div');
        div.classList.add('divs');
        div.setAttribute('name', 'nashe');
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
        div.setAttribute('name', 'nashe');
        containerGrid.appendChild(div);
        
    }
        
    
}

inputRange.forEach(input => input.addEventListener('change', genGrid));


// -----------------------------------------------------------------------

let color ;

const inputColorBack = document.querySelectorAll('.inputColor');

const divsColor = document.querySelectorAll('.divs');

const inputColorDiv = document.querySelectorAll('.inputColorDiv');



inputColorBack.forEach(div => div.addEventListener('change', changeColorBack));

function changeColorBack(){
    // color = this.value;
    document.documentElement.style.setProperty(`--${this.name}`,this.value);
}



/*
containerGridPrueba.forEach(div => div.addEventListener('mouseover',function(){
    // this.name.style.backgroundColor = color;
    this.name.cssText = 'background-color: black;';

} ))
*/

divsColor.forEach(div => div.addEventListener('mouseover', function(){

        function changeColorDiv(){
        
        
            // this.classList.add('divColorHover');
            this.style.backgroundColor = color;
            console.log('nashe')
            
        }
        this.style.backgroundColor = color;
        
}));

    





inputColorDiv.forEach(div => div.addEventListener('change', changeColorNashe));

function changeColorNashe(){
    document.documentElement.style.setProperty(`--${this.name}`,this.value);
    color = this.value;

}
//------------------------------------------------------------------------------


containerGrid.addEventListener('mouseover', paintDiv )

function paintDiv(e){
    const divTarget = e.target;

    divTarget.style.backgroundColor = color;
}


const inputCheckBox = document.querySelector('.checkBox');


function randomColor(){
    let simbols = '0123456789ABCDEF';
    let colorHex='#';

    for(let i = 0;i < 6; i++){
        colorHex = colorHex + simbols[Math.floor(Math.random()* 16)];
    }


}
inputCheckBox.addEventListener('click', checkBoxPress);
function checkBoxPress(){
    if(inputCheckBox.value == 'nashe'){
        console.log('encendido');

    }else if(inputCheckBox.value == ''){
        console.log('noencendido');
    }
}