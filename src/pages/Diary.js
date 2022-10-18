import TextEditor from "../components/TextEditor/TextEditor";
import Container from 'react-bootstrap/Container';
import { useState } from "react";
import NavigationBar from "../components/NavigationBar";


const Diary = () => {
  const navTitles = ['Home', 'Pick Random Diary!']
  const navLinks = ['/home', '/home']
  return (
    <>
      <NavigationBar navTitles={navTitles} navLinks={navLinks}/>
      <Container>
      <TextEditor/>
      </Container>

    </>
  )
}

export default Diary;
