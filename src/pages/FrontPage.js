import { Alert } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";

const FrontPage = () => {
  const navTitles = ['Register','Login']
  const navLinks = ['/signup', '/login']
  return (
    <NavigationBar navTitles={navTitles} navLinks={navLinks}/>
  )
}

export default FrontPage;