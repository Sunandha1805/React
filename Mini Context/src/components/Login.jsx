import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext';

function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const { setUser } = useContext(UserContext);

const handleSubmit = (e) => {
  e.preventDefault();
  setUser({ username, password });
}

  return (
    <div className='flex flex-col gap-6 items-center'>
      <h2 className='text-xl font-bold'>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' className='border py-2 px-4 '/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' className='border py-2 px-4'/>
      <button onClick={handleSubmit} className='bg-blue-500 text-white py-2 px-4 rounded w-full'>Submit</button>
    </div>
  )
}

export default Login
