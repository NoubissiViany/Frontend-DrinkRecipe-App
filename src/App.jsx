import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginForm from './pages/Login-Form/LoginForm';
import RegistrationForm from './pages/Registration-Form/regForm';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
