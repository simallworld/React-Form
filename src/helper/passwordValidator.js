// Define the regex pattern
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
  // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validatePassword(string) {

    if(string.length < 8) {
        return false;
    }

  // Test the password against the regex
  if (!regex.test(string)) {
    return false;
  } 
    return true;
}
export default validatePassword;