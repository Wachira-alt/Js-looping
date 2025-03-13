const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
    personalQuote: "You're never too old to learn something new",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
    personalQuote: "I just got lost in thought - it was unfamiliar territory",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote: "Always remember you’re unique, just like everyone else",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
    personalQuote: "Behind every great man is a woman rolling her eyes",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote:
      "You don’t have to see the whole staircase, just take the first step",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
    personalQuote:
      "Failure is not the opposite of success: it’s part of success",
  },
];

//iterate through the list and print out the firstName and their favoriteColor

/*
for (let info of users){
  
  const sentence =`${info.firstName} `
  console.log(sentence);

}
*/ 

// FIND

console.log(
  users.find((users) => {
    return users.firstName ==="Avidor";;
  }
  )
);

/*
.find returns the first result that matches the condition defined in the testing function
the return value is undefined if the testing function is false
*/ 

//FILTER
//filter out all the people who have blue as their favorite color


 const blueLovers = users.filter((users) => {
    return users.favoriteColor ==="Blue";;
  }
  )
console.log(blueLovers);

//iterate through the blue lovers and return their names

for (let user of blueLovers){
  console.log(user.personalQuote);
}


/*
filters all
*/ 


// .MAP - used to transform arrays into another array
 const upperQuote = users.map((user) => {
  return user.personalQuote.toUpperCase()
}

)
console.log(upperQuote);


