import { GET_USERS, NEW_USER } from '../actions';

export default (users = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case NEW_USER:
      return users.concat([action.payload.data]);
    default:
      return users;
  }
};
