function convertToNumber(str) {
    try {
      const num = +str;
      return isNaN(num) ? "Invalid number" : num;
    } catch (error) {
      return error.message;
    }
  }
  
  console.log(convertToNumber("123"));
  console.log(convertToNumber("abc"));