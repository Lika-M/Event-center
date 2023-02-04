export const useValidate = (setError) => {

  let errMessage = '';

  function usernameValidator(username) {
    if (username.length < 3 || username.length > 10) {
      errMessage = 'Username must be between 3 and 10 symbols.';
    }
    setError(state => ({
      ...state,
      username: errMessage
    }));
  }

  function emailValidator(email) {
    if (!(/\S+@\S+\.\S+/.test(email))) {
      errMessage = 'Enter valid email.';
    }
    setError(state => ({
      ...state,
      email: errMessage
    }));
  }

  function passwordValidator(password) {
    if (password.length > 10 || password.length < 3) {
      errMessage = 'Password must be between, 3 and 10 symbols.';
    }
    setError(state => ({
      ...state,
      password: errMessage
    }));
  }

  return {
    usernameValidator,
    emailValidator,
    passwordValidator
  };
}