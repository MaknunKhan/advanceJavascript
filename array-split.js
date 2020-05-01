// slice
const nums = [1,2,3,4,5,6,7,7,8,9];

// const  part = nums.slice(2,5);
// console.log(part);
// console.log(nums);

// slice dara array teke kete ane but original array teh kunu change hoy na... slice e kunu index teke kunu index.



const positive = [2,4,6,8,10];
// const pos = positive.slice(3,4);
// console.log(pos);
// console.log(positive);



////splice

// splice hole koto index teke suru ending number holo koto ta count hobe ==   Start : DeleteCount .. splice er orginal array teh ber kore felbe / gayeb kore felbe ... sathe kisu number add kora ja ..


// const removed = nums.splice(2,3);
// console.log(removed);
// console.log(nums);

// const removeAdd = nums.splice(2,4, 100,200,2400,400);

// console.log(removeAdd);
// console.log(nums); // ekane will be add 100,200.. number



////// Join 

const together = nums.join('');
console.log(together);

const together2 = positive.join( " maknun ");
console.log(together2);

const we = nums.join(' + ');
console.log(we);

const us = positive.join(' Ami ');
console.log(us);
console.log(nums);













