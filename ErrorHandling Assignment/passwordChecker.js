class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    getPassword() {
      return this._password.replace(/./g, "*");
    }
  
    setPassword(newPassword) {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (regex.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.log("Invalid password. Password should be at least 8 characters long and contain at least one uppercase letter and one number.");
      }
    }
  }
  
  const user = new User("Mithun", "Password123");
  console.log(user.getPassword()); // **********
  
  user.setPassword("myPassword"); // Invalid password. Password should be at least 8 characters long and contain at least one uppercase letter and one number.
  
  user.setPassword("MyPassword"); // Invalid password. Password should be at least 8 characters long and contain at least one uppercase letter and one number.
  
  user.setPassword("Mypassword123");
  console.log(user.getPassword()); // **********123
  
    