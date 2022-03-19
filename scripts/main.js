const peopleNumberBox = document.querySelector('#peopleNumber');
const peopleIncBtn = document.querySelector('#peopleInc');
const peopleDecBtn = document.querySelector('#peopleDec');
const showerIncBtn = document.querySelector('#showerInc');
const showerDecBtn = document.querySelector('#showerDec');
const showerNumberText = document.querySelector('#showerNumber');
let peopleNumber = 1;
let amountOfShowers = 1;

//Set the first numbers 
peopleNumberBox.innerText = peopleNumber;
showerNumberText.innerText = amountOfShowers;

peopleIncBtn.addEventListener('click', function() {
    peopleNumber++;
    updateStuff();
});

peopleDecBtn.addEventListener('click', function() {
    if(peopleNumber < 1){
        peopleNumber = 0;
    }
    else{
        peopleNumber--;
    }
    
    updateStuff();
});

showerIncBtn.addEventListener('click', function() {
    amountOfShowers++;
    updateStuff();
});

showerDecBtn.addEventListener('click', function() {
    if(amountOfShowers < 1){
        amountOfShowers = 0;
    }
    else{
        amountOfShowers--;
    }
    
    updateStuff();
});

function updateStuff(){
    peopleNumberBox.innerText = peopleNumber;
    showerNumberText.innerText = amountOfShowers;
}

