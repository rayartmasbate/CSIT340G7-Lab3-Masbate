import React from "react"

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p> {props.part} {props.exercises} </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const Footer = (props) => {
  return (
    <div>
      {props.name} - {props.code} - {props.section}
    </div>
  )
}


const App = () => {
  const course = 'The Life and Works of Rizal'
  const part1 = {
    name: 'Industry Elective 1',
    exercises: 3
  }
  const part2 = {
    name: 'Applications Development and Emerging Technologies',
    exercises: 3
  }
  const part3 = {
    name: 'Information Management 2',
    exercises: 3
  }
  const name = 'Masbate, Ray Art'
  const section = 'G7'
  const code = 'CSIT340'

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name} exercises1={part1.exercises}
               part2={part2.name} exercises2={part2.exercises}
               part3={part3.name} exercises3={part3.exercises}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
      <Footer name={name} code={code} section={section}/>
    </div>
  )
}

export default App