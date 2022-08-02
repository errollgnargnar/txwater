import Form from './components/common/Form';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import './App.css';
import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    let accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
        console.log('navigating to home');

        navigate('/home');
    }

    if(!accessToken) {
        console.log('navigating to login');

        navigate('/login');
    }
  },[])

  let navigate = useNavigate();

  const handleAction = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/home');
        sessionStorage.setItem('accessToken', userCredential.accessToken);
        sessionStorage.setItem('accessEmail', user.email);
        // ...
      })
      .catch((error) => {
        if(error.code === 'auth/wrong-password'){
          toast.error('Please check the Password');
        }
        if(error.code === 'auth/user-not-found'){
          toast.error('Please check the Email');
        }
      });
   }

  return (
      <div className="App">
        <ToastContainer />
        <>
          <Routes>
            <Route path='/login' element={<Form setEmail={setEmail}
                  setPassword={setPassword} handleAction={handleAction} />} />
            <Route path='/home' element={<Home  />} />
          </Routes>
        </>
      </div>
  );
}
export default App;
