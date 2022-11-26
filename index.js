// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
const names = [ ]

function writeCards(names,events){
    for(let counter=0; counter<names.length; counter++){
        console.log(`Thank you, ${names[counter]}, for the wonderful ${events[counter]} gift!`);
        return names;
    }
}

const number=10;

function countDown(){
    for(let counter=0; counter<=number.length; --counter){
        console.log (number[counter]);
        return number;

    }

}
countDown(4)
