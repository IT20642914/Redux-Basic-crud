import { userActionType } from "../actionType/userActionType";


export const insertUser  = (newUserData) =>{
    return{
        type: userActionType.ADD_USER,
        payload:{
            newUserData,
        }   
    };

};

export const updateuser =(userID, updateduserData)=>{
console.log("userID,updateduserData",userID,updateduserData)
    return{
        type:userActionType.UPDATE_USER,
        payload:{
            userID,
            updateduserData
        }
    }
}

export const deleteuser=(userID)=>{
    console.log("deleteuser",userID)
    return{
        
        type:userActionType.DELETE_USER,
        payload:{
            userID
        }
    }
}
export const getusers=()=>{
    return{
        type:userActionType.GET_USERS,   
    }
}