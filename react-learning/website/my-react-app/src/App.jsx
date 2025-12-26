import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card/Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {
  return (
    <>
      <Header> </Header>
      <Card></Card> 
      <Student name="Vaibhav Thukral" grade="A+" age={45} isStudent={true}></Student>
      <Student name="Patrick" grade="B" age={15} isStudent={false}></Student>
      <UserGreeting isLoggedIn={true} userName="VT"></UserGreeting>
      <UserGreeting isLoggedIn={false} userName="VT"></UserGreeting>
      <Card></Card> 
      <Button></Button>
      <Footer> </Footer>
    </>
  )
}

export default App
