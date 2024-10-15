import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <Person></Person>
      <Education></Education>
      <Certification></Certification>
      <Device name="Laptop" Price="55"></Device>
      <Device name="Mobile" Price="50"></Device>
      <Device name="Bike" Price="192"></Device>
      <Student name='shafriki islam' id='20104005'></Student>
      <Student name='shahriar efti' id='20104049'></Student>
      <Student></Student>
      <Products name='Samsung Mobile' price='10'></Products>
      <Products name='Apple Mobile' price='100'></Products>
    </>
  )
}

function Person(){
  const profile ={
    name: 'shafriki Islam',
    age: 25,
    village: 'Dighipara,Rajbari,Nachole,Chapainawabganj'
  }
  return <h3>My name is {profile.name}. I am {profile.age} years old. I live in {profile.village} </h3>
}

function Education() {
  return (
    <div className='student'>
      <h3>Education Qualification:</h3>
      <h5>Institution: BAUET</h5>
      <h5>Department: Computer Science and Engineering</h5>
    </div>
  )
}

function Certification() {
  const Cstyle = {
    marginTop:'20px',
    border: '2px solid green',
    borderRadius: '10px'
    
  }
  return (
    <div style={Cstyle}>
      <h4>Institute: Programming Hero</h4>
      <p>Course Name: Web Development</p>
      <p>Topic:</p>
      <ol>
        <li>HTML</li>
        <li>css</li>
        <li>Js</li>
        <li>Tailwind CSS</li>
        <li>React</li>
      </ol>
    </div>
  )
}

function Device(props) {
  const Dstyle = {
    border: '3px solid purple',
    padding: '4px',
    borderRadius: '10px'

  }
  return (
    <h3 style={Dstyle}>Device:{props.name} Price:{props.Price} </h3>
  )
}

// const {name, id}= {name:'shafriki islam', id:'20104005'};

function Student({name='not given', id='00'}) {
  const Sstyle = {
    border: '2px solid orange',
    marginTop: '10px'
  }
  return (
    <div style={Sstyle}>
      <h3>Student Information</h3>
      <p>Studnet Name: {name} and ID:{id} </p>
    </div>
  )
}

function Products({name, price}) {
  return(
    <div>
      <p>Product Name:{name} and Price:{price} </p>
    </div>
  )
}
export default App
