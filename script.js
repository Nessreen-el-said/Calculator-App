const colculatorContainer = document.getElementById('calc-container');
const displayArea= document.getElementById('display-area');

colculatorContainer .addEventListener('click',(e) =>{
    if (e.target.nodeName == 'BUTTON'){
        switch(e.target.textContent){
            case 'AC':
                clear();
                break;
            case 'DE':
                deleteOneValue();
                break;
            case '=':
                evaluate();
                break;
            default:   
                addToDisplayArea(e.target.textContent);
        }
    }
});


function clear() {
    displayArea.textContent = '';

}

function addToDisplayArea(value) {
    displayArea.textContent = displayArea.textContent + value;

}


function deleteOneValue() {
    let currentContent = displayArea.textContent;
    displayArea.textContent = currentContent.substring(
        0,
        currentContent.length - 1
    );

}


function evaluate(){
    try{
        let colculation = math.evaluate(displayArea.textContent);
        displayArea.textContent = colculation;
    }
    catch{
        displayArea.textContent = 'Invalid Operation';
        console.error(error);
    }
}



