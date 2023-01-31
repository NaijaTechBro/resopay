import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/v1/users/auth/`;

let config = {
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
  }
}



export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const register = async (userData) => {
    const response = await axios.post('/api/v1/users/auth/register', userData)
    
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}




// // Register User
// const register = async (userData) => {
//   const response = await axios.post(API_URL + "register", config, userData);
//   if(response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
// }

// return response.data
// };

// Login user
const login = async (userData) => {
  const response = await axios.post('/api/v1/users/auth/login', config, userData);

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
}
};

// Logout user
const logout = async () => {
  const response = await axios.get(API_URL + "logout", config);
  return response.data;
};

// Get Login Status
const getLoginStatus = async () => {
  const response = await axios.get('/api/v1/users/auth/loginStatus',config);
  return response.data;
};

// Forgot Password
const forgotPassword = async (userData) => {
  const response = await axios.post(API_URL + "forgotPassword",config, userData);
  return response.data.message;
};

// Reset Password
const resetPassword = async (userData, resetToken) => {
  const response = await axios.patch(
    `${API_URL}resetPassword/${resetToken}`, config,

    userData
  );
  return response.data.message;
};

// Send Verification Email
const sendVerificationEmail = async () => {
  const response = await axios.post('/api/v1/auth/sendVerificationEmail',config);
  return response.data.message;
};

// Verify User
const verifyUser = async (verificationToken) => {
  const response = await axios.patch(
    `${API_URL}verifyUser/${verificationToken}`
  );
  return response.data.message;
};

// Get User Profile
const getUser = async () => {
  const response = await axios.get(API_URL + "getUser", config);
  return response.data;
};

// Update User
const updateUser = async (userData) => {
  const response = await axios.patch(API_URL + "updateUser", userData, config);
  return response.data;
};

// Change Password
const changePassword = async (userData) => {
  const response = await axios.patch(API_URL + "changePassword", userData, config);
  return response.data.message;
};

// Get Users
const getUsers = async () => {
  const response = await axios.get(API_URL + "getUsers", config);
  return response.data;
};

// Delete User
const deleteUser = async (id) => {
  //   console.log("delete:" + id);
  const response = await axios.delete(API_URL + id, config);
  return response.data.message;
};

// upgrade user
const upgradeUser = async (userData) => {
  const response = await axios.patch(API_URL + "upgrade", userData, config);
  return response.data;
};

// upgrade user
const sendAutomatedEmail = async (userData) => {
  const response = await axios.post(API_URL + "sendAutomatedEmail", userData, config);
  return response.data.message;
};

// upgrade user
const loginWithGoogle = async (userToken) => {
  const response = await axios.post(API_URL + "google/callback", userToken, config);
  return response.data;
};

// send Login Code
const sendLoginCode = async (email) => {
  const response = await axios.post(`/api/v1/users/sendLoginCode/${email}`, config);
  return response.data.message;
};

// Reset Password
const loginWithCode = async (code, email) => {
  const response = await axios.post(`/api/v1/users/loginWithCode/${email}`, code, config);
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  getLoginStatus,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  getUser,
  updateUser,
  changePassword,
  getUsers,
  deleteUser,
  upgradeUser,
  verifyUser,
  sendAutomatedEmail,
  loginWithGoogle,
  sendLoginCode,
  loginWithCode,
};

export default authService;
