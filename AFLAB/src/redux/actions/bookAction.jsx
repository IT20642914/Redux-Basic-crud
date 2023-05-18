import { bookActionType } from "../actionType/bookActionType";

export const insertBook  = (newBookData) =>{
    return{
        type: bookActionType.INSERT_BOOK,
        payload:{
            newBookData,
        }   
    };

};

export const updateBook =(bookID, updatedBookData)=>{
console.log("bookID,updatedBookData",bookID,updatedBookData)
    return{
        type:bookActionType.UPDATE_BOOK,
        payload:{
            bookID,
            updatedBookData
        }
    }
}

export const deleteBook=(bookID)=>{
    console.log("deleteBookAction",bookID)
    return{
        
        type:bookActionType.DELETE_BOOK,
        payload:{
            bookID
        }
    }
}
export const getbooks=()=>{
    return{
        type:bookActionType.GET_BOOKS,   
    }
}

export const borrowBook=(bookID,BorrowCount)=>{
    console.log("borrowBook",bookID,"BorrowCount",BorrowCount)
    return{
        type:bookActionType.BORROW_BOOK,   
        payload:{
            bookID,
            BorrowCount,
        }
    }
}