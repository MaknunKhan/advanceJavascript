

function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;


    }
}

// const clock1 = stopWatch();
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());

// const clock2 = stopWatch();
// console.log(clock2());
// console.log(clock2());

// const clock3 = stopWatch();
// console.log(clock3());



// 

function worldCup(){
    let  winner = 0;

    return function(){
        winner++;
        return winner;

    }

}

// const team = worldCup();
// console.log(team());

// const team2 = worldCup();
// console.log(team2());
// console.log(team());
// console.log(team2());


function year(){
    let up1 = 0;
    let up2 = 10;

    return function(){
        up1++;

        return up1;


    }


}

const increase = year();
console.log(increase());
const dicrease = year();
console.log(dicrease());


// closer means
// kunu ekta function teke r ekta function ke call kori or return kori tahole se  ekta close environment  toyri kore fele. return function teke bairer funtion variable ke access korte parba. setake jokhon use korba  // Clock1 jokon nijjosho ekta value rakbe // clock2 jokon declare korba tokon nijjosho ekta value rakbe  // clock 3 declare korle nijjosh ekta value rakhbe .. tokhon tader jeno tara nijeder close ekta environment toyri kore felese..


 // kunu ekta function vitore er ekta function takhe oi second function / vitorer function  take jdi return kori / vitore use kori tahole ekta close environment toyri kore  she hocche nijera ekta external variable reference rekhe de take closer bole. 
 




