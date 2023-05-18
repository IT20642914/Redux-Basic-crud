
import './App.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import HomPage from './pages/HomPage';
import USerDetais from './pages/USerDetais';
import BooksDetails from './pages/BooksDetails';
import InsertBook from './pages/InsertBook';
import InserUser from './pages/InserUser';
function App() {
 

  return (
    <>
<BrowserRouter>
<Routes>

<Route path="/" element={<HomPage/>} />
<Route path="/userDetails/:userID" element={<USerDetais/>} />
<Route path="/bookDetails/:bookID" element={<BooksDetails/>} />
<Route path="/addbook" element={<InsertBook/>} />
<Route path="/adduser" element={<InserUser/>} />
</Routes> 
</BrowserRouter>

    </>
  )
}

export default App
