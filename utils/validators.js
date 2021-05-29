// Registration form validation
module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  // set validation errors to array
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username must not be empty';
  }
  // if email field is empty
  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  } else {
    const characters =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(characters)) {
      errors.email = 'Email must be a valid email address';
    }
  }
  // if password field is empty
  if (password === '') {
    errors.password = 'Password is required';
  }
  // check password length min
  else if (password.length < 8) {
    errors.confirmPassword = 'Password must be at least 8 characters';
  }
  // check confirmed password matches
  else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

// Login form validation
module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username must not be empty';
  }
  if (password.trim() === '') {
    errors.password = 'Password must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
