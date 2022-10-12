import { Alert } from 'react-bootstrap';

const Notification = ({message, variant}) => {
  return (
    message ? 
    <Alert variant={variant}>
      {message}
    </Alert>
    : null
  ) 
}

export default Notification;