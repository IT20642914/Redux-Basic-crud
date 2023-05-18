/* eslint-disable no-case-declarations */
import { bookActionType } from '../actionType/bookActionType';
import { BookList } from '../../constants/index';

const initialState = {
  books: BookList,
};

const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case bookActionType.GET_BOOKS:
      return {
        ...state,
      };
    case bookActionType.INSERT_BOOK:
      const newBook = {
        ...payload.newBookData,
        ID: state.books.length + 1,
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    case bookActionType.UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.ID === Number(payload.bookID)) {
            return {
              ...book,
              ...payload.updatedBookData,
            };
          }
          return book;
        }),
      };
    case bookActionType.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.ID !== Number(payload.bookID)),
      };
    case bookActionType.BORROW_BOOK:
      const bookId = Number(payload.bookID);
      
      const borrowBookCount= Number(payload.BorrowCount)
      console.log("bookId 2",bookId,"borrowBookCount",borrowBookCount)
      const borrowedBook = state.books.find((book) => book.ID === bookId);

      if (borrowedBook) {
        const updatedBooks = state.books.map((book) => {
          if (book.ID === bookId) {
            return {
              ...book,
              availableCopies: book.availableCopies - borrowBookCount,
            };
          }
          return book;
        });

        return {
          ...state,
          books: updatedBooks,
        };
      }

      // If the book is not found, return the state as is
      return state;
    default:
      return state;
  }
};

export default bookReducer;
