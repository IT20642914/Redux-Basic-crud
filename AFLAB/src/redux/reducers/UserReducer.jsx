import {userActionType} from "../actionType/userActionType";
import { UserList } from "../../constants";

const initialState = {
    users: UserList,
  };
  const userReducer= (state = initialState, {type,payload})=>{
    switch(type){
        case userActionType.GET_USERS:
            return {
              ...state,
            };
     case userActionType.ADD_USER:
        // eslint-disable-next-line no-case-declarations
        const newUser = {
            ...payload.newUserData,
            ID: state.users.length + 1,
          };
        return {
            ...state,
            users: [...state.users,newUser],
          };
    case userActionType.UPDATE_USER:
        return {
            ...state,
            users: state.users.map((user) => {
              if (user.ID === Number(payload.userID)) {
                return {
                  ...user,
                  ...payload.updateduserData,
                };
              }
              return user;
            }),
          };
          case userActionType.DELETE_USER:
            console.log("deletefirst",Number( payload.userID) )
            return {
              ...state,
              users: state.users.filter((user) => user.ID !==Number( payload.userID)),
            };

          
        default:
            return state;
    }
}
export default userReducer;