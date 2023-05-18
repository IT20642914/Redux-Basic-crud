
import { useEffect } from 'react'


import { useSelector, useDispatch } from 'react-redux'
// import { UserList } from '../../constants'
import { useNavigate } from 'react-router-dom'
import {getusers } from '../../redux/actions/userActions'
const Users = () => {
  const UserList = useSelector((state) => state.userList.users)
  console.log("user  arry",UserList);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getusers())//using thunk middleware

  }, [1]);

  const handeinsert =()=>{
    navigate('/adduser');
  }
    const handeView =(id)=>{
        console.log("userID",id)
        navigate(`userDetails/${id}`);
        
    }
    
  return (
    <div>
      <div style={{ justifyContent: 'center', textAlign: 'center',  }}>
        <h1>User List</h1>
        <div> <button onClick={()=>handeinsert()} >Insert User</button></div>
        <table style={{ margin: 'auto' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {UserList.map(item => (
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td><button style={{background:"green"}} onClick={() => handeView(item.ID)}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
