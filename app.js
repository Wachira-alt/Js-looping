const students =[
  'celestine',
  'Darwin',
  'Yvonne',
  'Fancy',
  'Juma',
  'celestine',
  'Darwin',
  'Yvonne',
  'Fancy',
  'Juma',
  'celestine',
  'Darwin',
  'Yvonne',
  'Fancy',
  'Juma',
];
//looping vs iteration
//looping constructs
//iteration constructs


//FOR LOOP
/****
 * 
 for ([initialization]; [condition]; [iteration]){[loop body]
 }
 * 
 ***/ 

 for (let i=0; i<students.length; i++){
  // console.log(i)
  // console.log(students[i]);
  const name = students[i];
  const sentence =`${name} is a senior software engineer`;
  console.log(sentence);

 }

 /*
 student is an array - to access the elements ina na array, student[index]
 
 */

 //iteration

 //postfix and prefix increment
 // i++ ++i

 let count  = 5;
 const postfixCount = ++count;

 console.log(postfixCount);