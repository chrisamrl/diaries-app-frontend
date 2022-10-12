import Spinner from 'react-bootstrap/Spinner';


const LoadingPage = () => {
  return (
    <Spinner animation="grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>  )
}


export default LoadingPage;