
// const students = [
//     {id:21, name : 'omar sunny'},
//     {id: 32, name:'manna'},
//     {id: 55, name: 'kapil dev'},
//     {id: 50, name:'Imran Khan'}
// ];

// const output =[]

// for(let i=0; i < students.length; i++){
//     const name = students[i];
//     const result = name.name ;
//     output.push(result)
    


// }
// console.log(output);

// const fullOutput = [];


// for(let i =0; i<students.length; i++){
//     const studentId = students[i];
//     const result = studentId.id;
//     fullOutput.push(result);
    
    
// }

// console.log(fullOutput);


const students = [
    {id:21, name : 'omar sunny',religion : 'islam'},
    {id: 32, name:'manna' ,religion : 'islam'},
    {id: 55, name: 'kapil dev' ,religion : 'islam' },
    {id: 50, name:'Imran Khan' ,religion : 'islam'}
];

// const name = students.map(s => s.name);
// console.log(name);

// const ids = students.map( i => i.id);

// console.log(ids);

// const rel = students.map( r => r.religion);
// console.log(rel);
// const full = students.map( f => f.id);
// console.log(full);

// const bigger = students.filter( s => s.id > 40);
// console.log(bigger);
// const smaller = students.filter( s => s.id < 30);
// console.log(smaller);

const bigger = students.find( s => s.id > 40);
console.log(bigger);
const small = students.find( s => s.id< 24);
console.log(small);
