const containerGrid = document.querySelector('.containerGrid');
const inputRange = document.querySelectorAll('.inputRange');
const containerInputSize = document.querySelector('.inputSize');
let valueGrid = 16 ;
let div =[] ;
let textSizeGrid;

function divsFirst(){
    
    
    for(let i = 0; i <= 255;i++){
        div = document.createElement('div');
        div.classList.add('divs');
        div.classList.add('grid');
        
        containerGrid.appendChild(div);

    }
}

divsFirst();


textSizeGrid = document.createElement('p');
textSizeGrid.textContent= `${valueGrid} x ${valueGrid}`;
textSizeGrid.classList.add('text');
containerInputSize.appendChild(textSizeGrid);


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
        div.classList.add('grid');
        
        containerGrid.appendChild(div);
        
    }
        
    
    textSizeGrid.textContent= `${valueGrid} x ${valueGrid}`;
}

inputRange.forEach(input => input.addEventListener('change', genGrid));




// -----------------------------------------------------------------------

let color ;
let colorBack= '#FFFFFF';
const inputColorBack = document.querySelectorAll('.inputColorBack');

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





const btns = document.querySelector('.containerBtn');

let drawing = false;



containerGrid.addEventListener('mousedown', function(e){
    drawing = true;
})
containerGrid.addEventListener('mouseup', () => {
    drawing = false;
});


const divBot1 = document.querySelector('.div1');
const divBot2 = document.querySelector('.div2');
const divBot3 = document.querySelector('.div3');
const divBot4 = document.querySelector('.div4');
const divBot5 = document.querySelector('.div5');
const divBot6 = document.querySelector('.div6');



btns.addEventListener('click', e =>{

    if(e.target.classList.contains('btnColorMode')){

        containerGrid.addEventListener('mousemove', e => {

            if(drawing === true){
                divTarget = e.target;
                divTarget.style.backgroundColor = color;
                
            }
            
        });
        
        containerGrid.addEventListener('click', e => {

            divTarget = e.target;
            divTarget.style.backgroundColor = color;
            
            
        });
        divBot1.classList.add('transitionNashe');
        divBot2.classList.remove('transitionNashe');
        divBot3.classList.remove('transitionNashe');
        divBot4.classList.remove('transitionNashe');
        divBot5.classList.remove('transitionNashe');
        divBot6.classList.remove('transitionNashe');




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


        containerGrid.addEventListener('click', e => {

            const divTarget2 = e.target;
            let simbols = '0123456789ABCDEF';
            let colorHex='#';

            for(let i = 0;i < 6; i++){

            colorHex = colorHex + simbols[Math.floor(Math.random()* 16)];
            
            divTarget2.style.backgroundColor = colorHex;
            
            }
            
        });


        divBot2.classList.add('transitionNashe');
        divBot1.classList.remove('transitionNashe');
        divBot3.classList.remove('transitionNashe');
        divBot4.classList.remove('transitionNashe');
        divBot5.classList.remove('transitionNashe');
        divBot6.classList.remove('transitionNashe');



    }else if(e.target.classList.contains('btnEraser')){


        containerGrid.addEventListener('mousemove', e => {

            if(drawing === true){
                divTarget3 = e.target;
                divTarget3.style.backgroundColor = colorBack;
                
            }
            
        });

        containerGrid.addEventListener('click', e => {

                divTarget3 = e.target;
                divTarget3.style.backgroundColor = colorBack;
              
        });


        divBot3.classList.add('transitionNashe');
        divBot2.classList.remove('transitionNashe');
        divBot1.classList.remove('transitionNashe');
        divBot4.classList.remove('transitionNashe');
        divBot5.classList.remove('transitionNashe');
        divBot6.classList.remove('transitionNashe');


    }else if(e.target.classList.contains('btnClear')){

        
        while (containerGrid.firstChild) {
            containerGrid.removeChild(containerGrid.firstChild);
          }
        document.documentElement.style.setProperty(`--pixels`,valueGrid);
        
        
        let nashe = (Math.pow(valueGrid,2)) - 1;
    
        for(let i = 0; i <= nashe;i++){
            div = document.createElement('div');
            div.classList.add('divs');
            div.classList.add('grid');
            containerGrid.appendChild(div);
            
        }


        divBot4.classList.add('transitionNashe');
        divBot2.classList.remove('transitionNashe');
        divBot3.classList.remove('transitionNashe');
        divBot1.classList.remove('transitionNashe');
        divBot5.classList.remove('transitionNashe');
        divBot6.classList.remove('transitionNashe');


        console.log('clear');
    }else if(e.target.classList.contains('btnGrid')){

            
            document.documentElement.style.setProperty('--outlineWid', '.5px');
            document.documentElement.style.setProperty('--outlineSty', 'solid');


            divBot5.classList.add('transitionNashe');
            divBot2.classList.remove('transitionNashe');
            divBot3.classList.remove('transitionNashe');
            divBot4.classList.remove('transitionNashe');
            divBot1.classList.remove('transitionNashe');
            divBot6.classList.remove('transitionNashe');
            
    }else if(e.target.classList.contains('btnNoGrid')){


        document.documentElement.style.setProperty('--outlineWid', 0);
        document.documentElement.style.setProperty('--outlineSty', 'none');


        divBot6.classList.add('transitionNashe');
        divBot2.classList.remove('transitionNashe');
        divBot3.classList.remove('transitionNashe');
        divBot4.classList.remove('transitionNashe');
        divBot5.classList.remove('transitionNashe');
        divBot1.classList.remove('transitionNashe');

    }


    e.stopPropagation();
    
    
});


