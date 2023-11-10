const INITIAL_STATE = {
  myUser: {},
  isLogged: false,
  isPlay: {}
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ISLOGGED":
      return {
        ...state,
        isLogged: action.isLoggedUser,
      };
    case "MY_USER":
      return {
        ...state,
        myUser: action.myUser,
      };

    case "STATE":
      return {
        isPlay: action.isPlay,
      };

    case "SET_BALANCE":
      return {
        user: { ...state.user, balance: action.balance },
      };
    case "EDIT_USER":
      return {
        user: {
          ...state.user,
          [action.field]: action.value,
        },
      };
    case "CLEAR_USER_STORE":
      return {
        balance: null,
        fullname: null,
      };

    default:
      return state;
  }
};
