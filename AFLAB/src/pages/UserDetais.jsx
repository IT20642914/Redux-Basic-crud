import  { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteuser, updateuser } from '../redux/actions/userActions';
import { borrowBook } from '../redux/actions/bookAction';

const USerDetais = () => {
    const {userID} =useParams();
    // Find the user with the matching ID

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userList = useSelector((state) => state.userList.users);
  
  const user = userList.find((user) => user.ID === Number(userID));
  const [userData, setuserData] = useState({});
  
  if (!user) {
    return <div>User not found</div>;
  }
  const handleUpdate = () => {
    dispatch(updateuser(userID, userData));
    console.log("userData",userData )
     navigate('/');
    dispatch(borrowBook(userData.BookID,userData.BorrowedBooks ))
  };

  const handleDelete = () => {
    // Logic for deleting the user
    dispatch(deleteuser(userID));
    navigate('/');
  };
  const handleChange = (e) => {
    setuserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <h1>user Details for userID: {userID}</h1>

      <form>
        <div>
        <label htmlFor="userName">user Name:  </label>
        <input
          type="text"
          id="Name"
          name="Name"
          defaultValue={user.Name}
          onChange={handleChange}
        /></div>
<div>
        <label htmlFor="Email">Email: </label>
        <input
          type="text"
          id="Email"
          name="Email"
          defaultValue={user.Email}
          onChange={handleChange}
        />
        </div>
<div>
        <label htmlFor="PhoneNumber">Phone Number: </label>
        <input
          type="text"
          id="PNumber"
          name="PNumber"
          defaultValue={user.PNumber}
          onChange={handleChange}
        />
        </div>

        <label htmlFor="publicationDate">BookID:</label>
        <input
          type="text"
          id="BookID"
          name="BookID"
          defaultValue={user.BookID}
          onChange={handleChange}
        />
<div>
        <label htmlFor="userTitle">BorrowedBooks:</label>
        <input
          type="text"
          id="BorrowedBooks"
          name="BorrowedBooks"
          defaultValue={user.BorrowedBooks}
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
  
  )
}

export default USerDetais
