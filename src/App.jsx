import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginForm from './pages/Login-Form/LoginForm';
import RegistrationForm from './pages/Registration-Form/regForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LoginForm />} />
          <Route
            path="/dashboard/registration"
            element={<RegistrationForm />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
