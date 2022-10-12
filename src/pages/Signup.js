import { useState } from "react";
import { useNavigate } from "react-router";
import signup from "../services/signup";

import Notification from '../components/Notification';
import { Form, Button } from 'react-bootstrap'


const Signup = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const [ notificationMessage, setNotificationMessage ] = useState('');
  const [ notificationType, setNotificationType ] = useState('secondary');

  const navigate = useNavigate();


  const signUser = async (e) => {
    e.preventDefault();
    try {
      await signup({
        name: name,
        username: username,
        password: password
      })
      setNotificationMessage('Regitration successful! Redirecting to login page')
      setNotificationType('success')

      setTimeout(() => {
        navigate('/login')
      }, 1200)
    } catch {
      setNotificationMessage('Username already taken, please choose another username')
      setNotificationType('danger')
    }
  } 


  return (
    <div className="container-fluid">

      <Notification message={notificationMessage} variant={notificationType}/>
      <Form onSubmit={signUser}>

        <Form.Group>
          <Form.Label> name: </Form.Label>
          <Form.Control 
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
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

export default Signup;