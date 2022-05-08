class Validator {
  isStringValid = (value) => {
    if (value !== "" && value !== undefined && value !== null) {
      return true;
    } else {
      return false;
    }
  };
}

export default Validator;
