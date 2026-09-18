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
  const part1 = 'Industry Elective 1'
  const exercises1 = 3
  const part2 = 'Applications Development and Emerging Technologies'
  const exercises2 = 3
  const part3 = 'Information Management 2'
  const exercises3 = 3
  const name = 'Masbate, Ray Art'
  const section = 'G7'
  const code = 'CSIT340'

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}
               part2={part2} exercises2={exercises2}
               part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Footer name={name} code={code} section={section}/>
    </div>
  )
}

export default App