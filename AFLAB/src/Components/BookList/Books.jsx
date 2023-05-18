import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getbooks } from '../../redux/actions/bookAction';
const Books = () => {

  const booksList = useSelector((state) => state.booksList.books)
  console.log("books arry",booksList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getbooks())//using thunk middleware

  }, [1]);

  
  const navigate = useNavigate();

  const handeinsert =()=>{
    navigate('/addbook');
  }
    const handeView=(ID)=>{
      
      navigate(`bookDetails/${ID}`);
      }
  return (
    <div>
       <div style={{ justifyContent: 'center', textAlign: 'center',}}>
        <h1>Books List</h1>
        <div> <button onClick={()=>handeinsert()}>Insert New Book</button></div>
        <table style={{ margin: 'auto' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Available Books</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {booksList.map(item => (
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.BookName}</td>
                <td>{item.availableCopies}</td>
                <td><button style={{background:"green"}} onClick={() => handeView(item.ID)}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Books
