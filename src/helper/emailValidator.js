// Define the regex pattern
  const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validateEmail(string) {

  // Test the password against the regex
  if (!regex.test(string)) {
    return false;
  } 
    return true;
}
export default validateEmail;