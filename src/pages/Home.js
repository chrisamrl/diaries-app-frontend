import NavigationBar from "../components/NavigationBar";

const Home = () => {
  const navTitles = ['Home', 'Pick Random Diary!']
  const navLinks = ['/home', '/home']
  return (
    <NavigationBar navTitles={navTitles} navLinks={navLinks}/>
  )
}

export default Home;

