import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertBook } from '../redux/actions/bookAction';

const InsertBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({ BookName: '', Bookauthor: '', availableCopies: '', PublicationDate: '', Booktitle: '' });

  const handleInsert = () => {
    // Parse bookID as a number
    const parsedBookData = { ...bookData};
    dispatch(insertBook(parsedBookData));
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If the name is 'bookID', parse the value as a number
    const updatedValue = name === 'bookID' ? parseInt(value) : value;
    setBookData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  return (
    <div>
      <h1>Insert Book</h1>
      <form>
<div>
        <label htmlFor="bookName">Book Name:</label>
        <input
          type="text"
          id="bookName"
          name="BookName"
          onChange={handleChange}
        /></div>
<div>
        <label htmlFor="bookAuthor">Book Author:</label>
        <input
          type="text"
          id="bookAuthor"
          name="Bookauthor"
          onChange={handleChange}
        /></div>
<div>
        <label htmlFor="availableCopies">Available Copies:</label>
        <input
          type="text"
          id="availableCopies"
          name="availableCopies"
          onChange={handleChange}
        /></div>
<div>
        <label htmlFor="publicationDate">Publication Date:</label>
        <input
          type="text"
          id="publicationDate"
          name="PublicationDate"
          onChange={handleChange}
        />
        </div>
<div>
        <label htmlFor="bookTitle">Book Title:</label>
        <input
          type="text"
          id="bookTitle"
          name="Booktitle"
          onChange={handleChange}
        /></div>
      </form>

      <button
        style={{ background: '#C07F00', margin: '1rem' }}
        onClick={handleInsert}
      >
        Insert
      </button>
    </div>
  );
};

export default InsertBook;
