import React, { Component } from 'react'
import './App.css';
// 4 levels to write components
// level 1 as simple function
export function DisplayUser(props) {
  return (
    <div>
      <div>
        <p style={{ backgroundColor: 'black' }}>hello {props.userName}!!!</p>
      </div>
    </div>
  )
}
// level 2 as const 
export const DisplayName = (props) =>{
  return (
    <div>
      <p style={{ backgroundColor: 'black' }}>hello {props.userName}!!!</p>
    </div>
  )
}

// level 3 as class must use render function 
export class DisplayUserClass extends Component {
  render() {
    return (
      <div>
        <p style={{ backgroundColor: 'black' }}>hello {this.props.userName}!!!</p>
      </div>
    )
  }
}


// level 4 כפונקציה אנונימית אפשר להשתשמש רק כאשר הפונקציה היא ברירת מחדל
export default () => {
  return (
    <div className="textApp">
      <input type="number" />
      <DisplayUser userName="Rachel" />
      <DisplayUserClass userName="Shoshi" />
      <DisplayName userName="Chani" />
    </div>
  )
}