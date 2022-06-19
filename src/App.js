import './App.css';
import React from 'react';


class App extends React.Component {
  sendMessage(event) {
    event.preventDefault()
    let values = []
    let inputs = event.target.querySelectorAll('form .styleCenter input')
    for(const input of inputs) {
      values.push(input.value)
    }
    fetch('http://localhost:5000/text', {method: 'POST', body: JSON.stringify({name: values[0], phone: values[1], email: values[2]})})
    event.target.reset()
  }

  render() {
    return (
        <form className='form' onSubmit={this.sendMessage}>
          <h2 className='formName'>     
           Registration Form
          </h2>
          <div className='blockInput styleCenter'>
            <label htmlFor="">Name: </label>
            <input type="text" name='text'/>
          </div>
          <div className='blockInput styleCenter'>
            <label htmlFor="">Number: </label>
            <input type="tel" name='phone'/>
          </div>
          <div className='blockInput styleCenter'>
            <label htmlFor="">Email: </label>
            <input type="email" name='email'/>
          </div>
          <div className='blockInput blockSumbmit'>
            <label htmlFor=""></label>
            <input type="submit" value={'Send'}/>
          </div>
        </form>
    )
  }
}
export default App;
