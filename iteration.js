const students =[
  'celestine Macheo',
  'Darwin Nunez',
  'Yvonne Muli',
  'Fancy Nyangweso',
  'Juma Kizito',
  
];

//iteration

for(let element of students){
  const splitName = element.split(" ")
  console.log(splitName)


  splitName.map((name) => {
    const upperCaseFirstLetter =name[0].toUpperCase();
    const sliceName = name.slice(1, namesize + 1);

    console.log(`${upperCaseFirstLetter} ${sliceName}`);
  });

  console.log(splitName.join(' '));
};


//array iteration method- only specific to arrays
//.filter() .map() .find() .for each() .reduce()


//slice - non destructive

const testString = 'Hope';

console.log(testString.slice());
console.log(testString.slice(1,3));