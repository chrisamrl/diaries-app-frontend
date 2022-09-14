import { Alert } from 'react-bootstrap';

const Notification = ({message, variant}) => {
  console.log(variant)
  return (
    <Alert variant={variant}>
      {message}
    </Alert>
  ) 
}

export default Notification;