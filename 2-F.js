// write a function that checks a username is of an acceptable format for a user type. The function must:
// take two parameters: one for the username and one for the user type

// if the username starts with a capital capit letter and has length between 5 and 10 characters long, it must return "Username valid"; 
// otherwise, it must return "Username invalid"

// if the user type is an admin or a manager, all usernames must return "Username valid"

// && and (x<10 && y>1) is true )
// || or (x== 5 || y==5) is false (== mean equal to and === means not equal to)
// ! not !(x==y) is true

function checkUsername(username, userType) {
    
    if (userType === "admin" || userType === "manager") 
    // Check if user type is admin or manager
    {
      return "Username valid";
    }
  
    
    if (username[0] === username[0].toUpperCase() && username.length >= 5 && username.length <= 10) 
    
    // Check if username starts with a capital letter and has length between 5 and 10 characters
    
    {
      return "Username valid";
    }
  
    return "Username invalid";
  }
  
  

  