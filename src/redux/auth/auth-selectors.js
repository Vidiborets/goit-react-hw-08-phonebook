const getIsLoggerIn = state => state.auth.isLoggerIn;
const getUserName = state => state.auth.user.name;
const getCurrentUser = state => state.auth.user.getCurrentUser;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrent;

const authSelectors = {
  getIsLoggerIn,
  getUserName,
  getCurrentUser,
  getIsFetchingCurrent,
};

export default authSelectors;
