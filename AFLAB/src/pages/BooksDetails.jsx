import  { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, updateBook } from '../redux/actions/bookAction';

const BooksDetails = () => {
  const { bookID } = useParams();
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.booksList.books);
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({});

  const Book = booksList.find((book) => book.ID === Number(bookID));

  if (!Book) {
    return <div>Book not found</div>;
  }

  const handleUpdate = () => {
    dispatch(updateBook(bookID, bookData));
    console.log("bookData",bookData)
    navigate('/');
  };

  const handleDelete = () => {
    dispatch(deleteBook(bookID));
    navigate('/');
  };

  const handleChange = (e) => {
    setBookData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h1>Book Details for bookID: {bookID}</h1>

      <form>
        <div>
        <label htmlFor="bookName">Book Name:</label>
        <input
          type="text"
          id="bookName"
          name="BookName"
          defaultValue={Book.BookName}
          onChange={handleChange}
        /></div>
<div>
        <label htmlFor="bookAuthor">Book Author:</label>
        <input
          type="text"
          id="bookAuthor"
          name="Bookauthor"
          defaultValue={Book.Bookauthor}
          onChange={handleChange}
        />
        </div>
<div>
        <label htmlFor="availableCopies">Available Copies:</label>
        <input
          type="text"
          id="availableCopies"
          name="availableCopies"
          defaultValue={Book.availableCopies}
          onChange={handleChange}
        />
        </div>

        <label htmlFor="publicationDate">Publication Date:</label>
        <input
          type="text"
          id="publicationDate"
          name="PublicationDate"
          defaultValue={Book.PublicationDate}
          onChange={handleChange}
        />
<div>
        <label htmlFor="bookTitle">Book Title:</label>
        <input
          type="text"
          id="bookTitle"
          name="Booktitle"
          defaultValue={Book.Booktitle}
          onChange={handleChange}
        />
        </div>
      </form>

      <button
        style={{ background: '#C07F00', margin: '1rem' }}
        onClick={handleUpdate}
      >
        Update
      </button>
      <button
        style={{ background: '#E74646' }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default BooksDetails;
