const containerGrid = document.querySelector('.containerGrid');


function divs(){
    let div =[] ;

    for(let i = 0; i <= 256;i++){
        div = document.createElement('div');
        div.classList.add('divs');
        containerGrid.appendChild(div);

    }
}

divs();
