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
let colorBack;
const inputColorBack = document.querySelectorAll('.inputColor');

const divsColor = document.querySelectorAll('.divs');

const inputColorDiv = document.querySelectorAll('.inputColorDiv');



inputColorBack.forEach(div => div.addEventListener('change', changeColorBack));

function changeColorBack(){
    colorBack =  this.value;
    document.documentElement.style.setProperty(`--${this.name}`,this.value);
    console.log(colorBack);
}



inputColorDiv.forEach(div => div.addEventListener('change', changeColorNashe));

function changeColorNashe(){
    document.documentElement.style.setProperty(`--${this.name}`,this.value);
    color = this.value;
    

}
//------------------------------------------------------------------------------

/*
containerGrid.addEventListener('mouseover', paintDiv)

function paintDiv(e){
    const divTarget = e.target;

    divTarget.style.backgroundColor = color;
}
*/
/*
const inputCheckBox = document.querySelector('.checkBox');

*/
let colorR ;
function randomColor(){
    let simbols = '0123456789ABCDEF';
    let colorHex='#';

    for(let i = 0;i < 6; i++){
        colorHex = colorHex + simbols[Math.floor(Math.random()* 16)];
    }

    colorR = colorHex;

}



// color= '#000000';
/*
const inputCheckBox = document.querySelector('.checkBoxRainbowColor');

inputCheckBox.addEventListener('change', checkBoxPress);
function checkBoxPress(){
    if(inputCheckBox.checked){


        containerGrid.addEventListener('mouseover', rainbowColor)

        function rainbowColor(e){
        const divTarget = e.target;
        let simbols = '0123456789ABCDEF';
        let colorHex='#';

        for(let i = 0;i < 6; i++){
            colorHex = colorHex + simbols[Math.floor(Math.random()* 16)];
        }
        console.log('encendido');
        divTarget.style.backgroundColor = colorHex;
        }
        


    }else{

        containerGrid.addEventListener('mouseover', paintDiv)
        
        function paintDiv(e){
            const divTarget = e.target;
        
            divTarget.style.backgroundColor = color;
        }
        console.log('noencendido');
    }
}

const checkBoxEraser = document.querySelector('.checkBoxEraser');
const prueba3 = document.querySelector('.nashe');
checkBoxEraser.addEventListener('change', eraserF);

function eraserF(){

    if(checkBoxEraser.checked){
    prueba3.addEventListener('click', eraser)
   
    function eraser(e){
        const divTarget = e.target;

        divTarget.style.backgroundColor = colorBack ;
    }
    }else{

    }
    
}

*/


const btns = document.querySelector('.containerBtn');
const colorModeBtn = document.querySelector('.btnColorMode');
const rainbowModeBtn = document.querySelector('.btnRainbowMode');
const eraserBtn = document.querySelector('.btnEraser');
const gridbtn = document.querySelector('btnGrid');
const divprueba = document.querySelectorAll('.nashe');


let drawing = false;

console.log(btns);


containerGrid.addEventListener('mousedown', function(e){
    drawing = true;
})
containerGrid.addEventListener('mouseup', () => {
    drawing = false;
});

btns.addEventListener('click', e =>{

    if(e.target.classList.contains('btnColorMode')){

        containerGrid.addEventListener('mousemove', e => {

            if(drawing === true){
                divTaget = e.target;
                divTaget.style.backgroundColor = color;
                
            }
            
        });
        
    }else if(e.target.classList.contains('btnRainbowMode')){
       
        containerGrid.addEventListener('mousemove', e => {

            if(drawing === true){
                const divTarget2 = e.target;
                let simbols = '0123456789ABCDEF';
                let colorHex='#';

                for(let i = 0;i < 6; i++){
                colorHex = colorHex + simbols[Math.floor(Math.random()* 16)];
            
            }

            divTarget2.style.backgroundColor = colorHex;
           
            }
            
        });

    }else if(e.target.classList.contains('btnEraser')){

        containerGrid.addEventListener('mousemove', e => {

            if(drawing === true){
                divTaget3 = e.target;
                divTaget3.style.backgroundColor = colorBack;
            }
            
        });

    }else if(e.target.classList.contains('btnClear')){

        // divprueba.forEach( div => div.style.backgroundColor = colorBack)
        document.documentElement.style.setProperty(`--colorBackDiv`,'#d61f1f');

        console.log('clear');


        //  los divs a los que se pintan se les agrega una propiedad en el html de style fijarse si se puede borrar de alguna manera tratar de hacer algo con .setProperty()
        // otra forma tambien de hacer clear podria ser creando nuevos divs otra vez, como cuando cambias de size y se borra todo 

    }else if(e.target.classList.contains('btnGrid')){

        
    }


    e.stopPropagation();
    
    
} );


/*
colorModeBtn.addEventListener('click', e => {



    
    containerGrid.addEventListener('mousemove', function(e){
        let divTaget = e.target;
        divTaget.style.backgroundColor = color;
        console.log('colormode');
        
    })
    e.stopPropagation();
});
const pruebanashe = document.querySelector('.nashe');
rainbowModeBtn.addEventListener('click', e => {



    
    containerGrid.addEventListener('mouseover', function(e){
        randomColor();
        let divTarget2 = e.target;
        
        divTarget2.style.backgroundColor = colorR;
        console.log('rainbow');
        
    })
    
    e.stopPropagation();
} );

*/