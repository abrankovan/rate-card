
let rateNumber='';

function changeText(event, message) {
    let buttons=document.getElementsByClassName('singleButton');
    for (let item of buttons) {
        item.style.backgroundColor = '#2e3742';
    }
    event.srcElement.style.backgroundColor = "hsl(216, 12%, 54%)";
    rateNumber=message; 
}

function submit(){
    submitNumber(`You selected ${rateNumber} from 5`);
}
