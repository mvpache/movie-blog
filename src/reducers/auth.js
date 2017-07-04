import

export default (auth = {}, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return {...auth, authenticated: true };
    case
  }
}
