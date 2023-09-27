// after clicking on login button
export const loginStart = () => ({
    type: "LOGIN_START",
  });
  // after getting response if the login process is succfl its gonna 
  //return us a user, take this user and update the state
  export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user, // just send this user
  });
  
  export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
  });
  
  //logout
  export const logout = () => ({
    type: "LOGOUT",
  });


