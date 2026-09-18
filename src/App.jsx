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
  const course = {
    name: 'The Life and Works of Rizal',
    parts: [
      {
        name: 'Industry Elective 1',
        exercises: 3
      },
      {
        name: 'Applications Development and Emerging Technologies',
        exercises: 3
      },
      {
        name: 'Information Management 2',
        exercises: 3
      }
    ]
  }
  const name = 'Masbate, Ray Art'
  const section = 'G7'
  const code = 'CSIT340'

  return (
    <div>
      <Header course={course.name}/>
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}
               part2={course.parts[1].name} exercises2={course.parts[1].exercises}
               part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
      <Footer name={name} code={code} section={section}/>
    </div>
  )
}

export default App