import {useState} from 'react';
import { register, login} from '../services/auth';
import {useNavigate} from 'react-router-dom';

function Auth() {
  const [isRegister, setIsRegister] = useState(true);
  const [ email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [interests, setInterests] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if(isRegister) {
        const interestsArray = interests.split(',').map(i => i.trim());
        await register(email, password, interestsArray)
      } else {
        await login(email, password);
      }
      navigate('./dashboard');
    }catch (err) {
      console.err(err);
      setError(err.message)
    }
  };
  return (
    <div className="max-2-md mx-auto mt-10 border p-5 rounded">
      <h2 className="text-2-x1 mb-4">{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
         type="email"
         placeholder="Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required 
         className="border p-2" 
        />
        <input type="password"
        placeholder="Password"
        value={password}
        onChnage = {(e) => setPassword(e.target.value)}
        requiredclassName="border p-2" />
        {isRegister && (
          <input type="text"
          placeholder="Your interests (comma seperated)"
          value={interests}
          onChange={(e) => setInterests(e.target.value)} 
          required
          className="border p-2"/>
        )}
        {error && <p className="rext-red-500">{error}</p>}
        <button type="submit" 
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <button className="mt-4 text-blue-500"
      onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
      </button>
    </div>
  )
}
export default Auth;
