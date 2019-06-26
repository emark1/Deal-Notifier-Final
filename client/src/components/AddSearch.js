import React, { Component } from 'react';

export class AddTerm extends Component {

    constructor() {
        super()
        this.state = {
          cards: null,
          isUpdated:false,
          itemname: '',
          }
      }

      handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      }

      addClick = () => {
        let item = {name: this.state.itemname}
        fetch('http://localhost:8080/add-item/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter Item" name="itemname" />
                <button onClick={this.addClick}>Save Term</button>
            </div>
        )
    }
}