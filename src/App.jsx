import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
function App() {
  const actor = ['kung fu panda', 'hiro hamada', 'shaktuman', 'chota vim']
  const friend = ['shahriar efti', 'nurullah', 'mijanur rahman', 'soykot azha', 'ahadur rahman', 'jahin']
  return (
    <>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <AcademicInfo></AcademicInfo>
      <MyDevices name='HP Laptop' price='56000'></MyDevices>
      <MyDevices name='Samsung S21 FE Mobile' price='55000'></MyDevices>
      <MyDevices name='Pulsar Bike' price='192000'></MyDevices>
      <AllStudent id='20104005' name='shafriki' home='dighipara' contact='01786141015'></AllStudent>
      <AllStudent></AllStudent>
      <AllStudent id='20104005' name='shafriki' home='rajbari' contact='01786141015'></AllStudent>
      <Todo task='html' isDone={true}> </Todo>
      <Todo task='css' isDone={true}> </Todo>
      <Todo task='tailwind css' isDone={true}> </Todo>
      <Todo task='JavaScript' isDone={false}> </Todo>
      <Todo task='React' isDone={false}> </Todo>
      {
        actor.map(actor => <Actor name={actor}></Actor>)
      }
    </>
  )
}

function Person() {
  const person = {
    name:'shafriki islam', 
    age: 25,
    country: 'bangladesh',
    religion: 'Islam'
  }
  return <p>Hi, I am {person.name}. I am {person.age} years old. I am from {person.country}. My religion is {person.religion} </p>
}

function Student() {
  const student = {
    name: 'shafriki islam',
    id: 20104005,
    dept:'cse',
    instute: 'bauet'
  }

  return(
    <div className='student'>
      <h4 className='stitle'>Student Information</h4>
      <ol className='lic'>
        <li>Name: {student.name} </li>
        <li>Student ID: {student.id} </li>
        <li>Department: {student.dept} </li>
        <li>University Name: {student.instute} </li>
      </ol>
    </div>
  )
}

function Developer() {
  const developerStyle ={
    marginTop: '10px',
    padding: '10px',
    border:'2px solid purple',
    borderRadius: '10px'
  }
  return <p style={developerStyle}>Hi, I am a new Front-End Developer.</p>
}

function AcademicInfo() {
  const academic = {
    name: 'shafriki islam',
    id: '20104005',
    semester: 'Total 8th Semesters',
    cgpa: '2.75',
    profession: 'Front-End Developerd'
  }
  return(
    <div className='academic'>
      <div>
      <h1>Academic Information</h1>
      <p>Student Name:{academic.name} </p>
      <p>Student ID:{academic.id} </p>
      <p>Total Semester:{academic.semester} </p>
      <p>CGPA:{academic.cgpa} </p>
      <p>Profession:{academic.profession} </p>
      </div>
      <div><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficon%2Fmale-user-profile-picture_21294&psig=AOvVaw1odNFVbCSQUQLXfdS7_ZPq&ust=1729595391938000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCj3oqrn4kDFQAAAAAdAAAAABAE" alt="img
      " /></div>
    </div>
  )
}

function MyDevices({name, price}){

  return(
    <p>Device Name: {name}  and It's Price: {price} </p>
  )
}

function AllStudent({id='not given', name='not given', home='not given', contact='not given'}) {
  
  return (
    <div className='allstudent'>
      <h3 className='alltitle'>Student Id: {id} </h3>
      <p>name: {name} </p>
      <p>home-town: {home} </p>
      <p>contact-no: {contact} </p>
    </div>
  )
}

export default App
