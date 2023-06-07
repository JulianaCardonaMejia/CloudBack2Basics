// function getAgeInDays(age) {
//     return age * 365;
//   }
  
//   function createGreeting(name, age) {
//     const ageInDays = getAgeInDays(age);
//     const message =
//       "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
//     return message;
//   }

//write a function that takes someone's name and age as input and returns a string that states the person's name and year they were born in a sentence

function nameAndAge (name, age)
    {  const currentYear = 2023
        const yearOfBirth = (currentYear - age)
        const message = "My name is " + name + " and I was born in " + yearOfBirth
        console.log (message)
    }

    nameAndAge ("juliana", 32)

//calculate year of birth based on age. 2023 - year of birth
