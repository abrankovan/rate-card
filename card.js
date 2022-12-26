
let rateNumber='';

function changeText(message) {
     rateNumber=message; 
}

function submit(){
    submitNumber(`You selected ${rateNumber} from 5`);
}
function changeColor(button){
    button.style.backgroungColor = "red";
}