// import Toggle from 'react-toggle'
import 'react-bootstrap'
import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'
import './SubmitInfo.css';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
var Columns = require('react-columns');




export class SubmitInfo extends Component {

    constructor() {
        super()
        this.state = {
        phoneNumber: '',
        Case: false,
        Cooler: false,
        HDD: false,
        Headphones: false,
        SSD: false,
        Fan: false,
        PSU: false,
        Prebuilt: false,
        cpuCooler: false,
        Webcam: false,
        Controller: false,
        Laptop: false,
        Monitor: false,
        VR: false,
        RAM: false,
        Headset: false,
        OpticalDrive: false,
        CPU: false,
        OS: false,
        Motherboard: false,
        Speakers: false,
        Keyboard: false,
        Networking: false,
        Furniture: false,
        GPU: false,
        Mouse: false,
        Processor: false,
        HomeTheaterPC: false,
        Cables: false,
        flashDrive: false,
        Router: false,
        Mic: false,
        show: false,
        showdelete: false
          }
      }

    handleTextBoxChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    }

    deleteClick = () => {
        let phoneNumber = this.state.phoneNumber
        fetch('http://localhost:1010/delete-number', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({phoneNumber:phoneNumber})
        })
    }

    handleProductClick = (e) => {
    this.setState({
        [e.target.name]: true
    })
    }

    submitClick = () => {
    let state = {state: this.state}
    // let Case = {state: this.state.case}
    fetch('http://localhost:1010/add-user/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    })
    }

    sendTest = () => {
        console.log("Test Trigger")
        fetch('http://localhost:1010/trigger-test/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
        })
    }

    render() {
        return (
            
            <div className="text">
            <div className="inputboxes">
                <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter Phone Number" name="phoneNumber" />
                <div>
                <button onClick={() => {this.setState({ show: true }); this.submitClick()}}>Submit</button>
                <SweetAlert
                show={this.state.show}
                title="Success!"
                text="Your number and preferences have been saved."
                onConfirm={() => this.setState({ show: false })}
                />
                </div>
                <div>
                <button onClick={() => {this.setState({ showdelete: true }); this.deleteClick()}}>Delete Number</button>
                <SweetAlert
                show={this.state.showdelete}
                title="Success!"
                text="Your number has been deleted from the system."
                onConfirm={() => this.setState({ showdelete: false })}
                />
                </div>
                <button onClick={() => {this.sendTest()}}>Test</button>
            </div>
            
            
            <div className="toggleswitches">

            <div className="column">
                <div className="item">        
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={""}
                value={this.state.SSD}
                onToggle={(value) => {
                    this.setState({
                    SSD: !value,
                    })
                }} />
                <span>SSD</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.Case}
                onToggle={(value) => {
                    this.setState({
                    Case: !value,
                    })
                }} /><span>Case</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.HDD}
                onToggle={(value) => {
                    this.setState({
                    HDD: !value,
                    })
                }} /><span>HDD</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={""}
                value={this.state.Headphones}
                onToggle={(value) => {
                    this.setState({
                    Headphones: !value,
                    })
                }} /><span>Headphones</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.Fan}
                onToggle={(value) => {
                    this.setState({
                    Fan: !value,
                    })
                }} /><span>Fans</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.PSU}
                onToggle={(value) => {
                    this.setState({
                    PSU: !value,
                    })
                }} /><span>Power Supply</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.Prebuilt}
                onToggle={(value) => {
                    this.setState({
                    Prebuilt: !value,
                    })
                }} /><span>Prebuilt PC</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.cpuCooler}
                onToggle={(value) => {
                    this.setState({
                    cpuCooler: !value,
                    })
                }} /><span>CPU Cooler</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.Webcam}
                onToggle={(value) => {
                    this.setState({
                    Webcam: !value,
                    })
                }} /><span>Webcam</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.Controller}
                onToggle={(value) => {
                    this.setState({
                    Controller: !value,
                    })
                }} /><span>Controller</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={""}
                value={this.state.Laptop}
                onToggle={(value) => {
                    this.setState({
                    Laptop: !value,
                    })
                }} /><span>Laptop</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.Monitor}
                onToggle={(value) => {
                    this.setState({
                    Monitor: !value,
                    })
                }} /><span>Monitor</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.VR}
                onToggle={(value) => {
                    this.setState({
                    VR: !value,
                    })
                }} /><span>Virtual Reality</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={""}
                value={this.state.RAM}
                onToggle={(value) => {
                    this.setState({
                    RAM: !value,
                    })
                }} /><span>RAM</span>
                </div>
                <div className="item">
                <ToggleButton
                inactiveLabel={"X"}
                activeLabel={" "}
                value={this.state.Headset}
                onToggle={(value) => {
                    this.setState({
                    Headset: !value,
                    })
                }} /><span>Headset</span>
                </div>
            </div>



            <div className="column">
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={" "}
            value={this.state.OpticalDrive}
            onToggle={(value) => {
                this.setState({
                OpticalDrive: !value,
                })
            }} /><span>Optical Drive</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={" "}
            value={this.state.CPU}
            onToggle={(value) => {
                this.setState({
                CPU: !value,
                })
            }} /><span>CPU</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={" "}
            value={this.state.OS}
            onToggle={(value) => {
                this.setState({
                OS: !value,
                })
            }} /><span>Operating System</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={" "}
            value={this.state.Motherboard}
            onToggle={(value) => {
                this.setState({
                Motherboard: !value,
                })
            }} /><span>Motherboard</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.Speakers}
            onToggle={(value) => {
                this.setState({
                Speakers: !value,
                })
            }} /><span>Speakers</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.Keyboard}
            onToggle={(value) => {
                this.setState({
                Keyboard: !value,
                })
            }} /><span>Keyboard</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.Networking}
            onToggle={(value) => {
                this.setState({
                Networking: !value,
                })
            }} /><span>Networking</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.Furniture}
            onToggle={(value) => {
                this.setState({
                Furniture: !value,
                })
            }} /><span>Furniture</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.GPU}
            onToggle={(value) => {
                this.setState({
                GPU: !value,
                })
            }} /><span>GPU</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.Mouse}
            onToggle={(value) => {
                this.setState({
                Mouse: !value,
                })
            }} /><span>Mouse</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.Processor}
            onToggle={(value) => {
                this.setState({
                Processor: !value,
                })
            }} /><span>Processor</span>
            </div>
            {/* <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.HomeTheaterPC}
            onToggle={(value) => {
                this.setState({
                HomeTheaterPC: !value,
                })
            }} /><span>Home Theater PC</span>
            </div> */}
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.flashDrive}
            onToggle={(value) => {
                this.setState({
                flashDrive: !value,
                })
            }} /><span>Flash Drive</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.Router}
            onToggle={(value) => {
                this.setState({
                Router: !value,
                })
            }} /><span>Router</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.Mic}
            onToggle={(value) => {
                this.setState({
                Mic: !value,
                })
            }} /><span>Mic</span>
            </div>
            <div className="item">
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={""}
            value={this.state.Cooler}
            onToggle={(value) => {
                this.setState({
                Cooler: !value,
                })
            }} /><span>Cooler</span>
            </div>
            </div>
            
            </div>
            </div>
        )
    }
}