import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap'

import login from '../services/login'

import Notification from '../components/Notification';

const Login = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ notificationMessage, setNotificationMessage ] = useState('Please login first');
  const [ notificationType, setNotificationType ] = useState('secondary');

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        username: username,
        password: password,
      })
      const data = response.data;

      window.localStorage.setItem('username', data.username);
      window.localStorage.setItem('name', data.name);
      window.localStorage.setItem('token', data.token);
      window.localStorage.setItem('userId', data.userId);

      setNotificationMessage('Login success, redirecting to home page...')
      setNotificationType('success')

      setTimeout(() => {
        navigate('/home')
      }, 1500)
    } catch (error) {
      setNotificationMessage('Wrong username or password')
      setNotificationType('danger')
    }

  }

  return (
    <div className="container-fluid">

      <Notification message={notificationMessage} variant={notificationType}/>
      <Form onSubmit={loginUser}>

        <Form.Group>
          <Form.Label> username: </Form.Label>
          <Form.Control 
            type='text'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Label> password: </Form.Label>
          <Form.Control
            type='text'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type="submit"> submit!</Button>
      </Form>
    </div>

  )
}
export default Login