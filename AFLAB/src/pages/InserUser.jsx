import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertUser } from '../redux/actions/userActions';


const InserUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setuserData] = useState({ Name: '', Email: '', PNumber: '', BorrowedBooks: '', BookID: '' });
  
    const handleInsert = () => {
        // Parse bookID as a number
        const parseduserData = { ...userData};
        dispatch(insertUser(parseduserData));
        navigate('/');
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        // If the name is 'bookID', parse the value as a number
        const updatedValue = name === 'userID' ? parseInt(value) : value;
        setuserData((prevData) => ({
          ...prevData,
          [name]: updatedValue,
        }));
      };
  return (
    <div>
         <h1>Insert User</h1>
         <form>
<div>
        <label htmlFor="bookName"> Name:</label>
        <input
          type="text"
          id="Name"
          name="Name"
          onChange={handleChange}
        /></div>
<div>
        <label htmlFor="bookAuthor">Email:</label>
        <input
          type="text"
          id="Email"
          name="Email"
          onChange={handleChange}
        /></div>
<div>
        <label htmlFor="PNumber">PNumber:</label>
        <input
          type="text"
          id="PNumber"
          name="PNumber"
          onChange={handleChange}
        /></div>
<div>
        <label htmlFor="BorrowedBooks">BorrowedBooks:</label>
        <input
          type="text"
          id="BorrowedBooks"
          name="BorrowedBooks"
          onChange={handleChange}
        />
        </div>
<div>
        <label htmlFor="bookTitle">BookID:</label>
        <input
          type="text"
          id="BookID"
          name="BookID"
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
  )
}

export default InserUser
