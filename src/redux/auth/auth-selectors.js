const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getIsGettingCurrent = (state) => state.auth.isGettingCurrent;

export { getIsLoggedIn, getUserName, getIsGettingCurrent };
