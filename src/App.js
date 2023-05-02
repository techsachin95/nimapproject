import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import TaskPage from './Pages/TaskPage';
import UserPage from './Pages/UserPage';
import LoginPage from './Components/LoginPage_Components/LoginPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/taskpage' element={<TaskPage />} />
          <Route path='/userpage' element={<UserPage />} />
        </Routes>
      </Router>
    </>
  );
  }

export default App;
