import React, { Component } from 'react'
import './App.css'
import {InputFeild } from './InputFeild';

export class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    name : '',
    empId : '',
    city : '',
    gender : '',
    err_msg : '',
    suc_msg : '',
    edit : false,
    disabled : false,
    cities : ['NewYork','London','Tokyo'],
    genders : ['Female','Male'],
    customerData : {}
  }



  // componentDidMount (){
  //   this.getData();
  // }

  getData = ()=>{
    this.setState({
      customerData : JSON.parse(localStorage.getItem('customerData'))
    })
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    },()=>{console.log(this.state)})
  }

  saveForm = () =>{
    if((this.state.name == "") || (this.state.empId == "") || (this.state.city == "") || (this.state.gender == "")){
      this.setState({err_msg : '*All fields are mandatory'});
    }
    else{
      const obj = {
        name : this.state.name,
        empId : this.state.empId,
        city : this.state.city,
        gender : this.state.gender
      }
      localStorage.setItem('customerData',JSON.stringify(obj));
      this.getData();
      this.setState({
        edit : true,
        disabled : true,
        err_msg : '',
        suc_msg : 'Data has been saved',
      })
      
    }
  }


  editForm = () =>{
    this.setState({
      disabled : false,
      suc_msg : '',
      edit : false,
    })
  }





  render() {
    return (
      <div className='form'>
        <div className="App">
        <InputFeild
            label = "Name"
            name = 'name'
            type ="text" 
            placeholder = 'Enter Name'
            value={this.state.value} 
            onChange={this.handleChange}
            disabled = {this.state.disabled}
          />

        <InputFeild
            label = "Employee ID"
            name = 'empId'
            type ="number" 
            placeholder = 'Enter Employee ID'
            value={this.state.value} 
            onChange={this.handleChange}
            disabled = {this.state.disabled}
          />

        <label for="city">City:</label>
        <select name="city" id="cityData" onChange={this.handleChange} value={this.state.city} disabled = {this.state.disabled}>
          <option value="">Select City</option>
          {this.state.cities.length > 0 ? this.state.cities.map((item,index)=>{
            return(
              <option value={item} key={index+"city"}>{item}</option>
            )
          }) : ""}
        </select><br/>
        <label for="gender">Select Gender:</label>
        <div className='gender-block'>
          {this.state.genders.length > 0 ? this.state.genders.map((item,index)=>{
            return(
              <label key={index+"gen"}>
                <InputFeild
                  name = 'gender'
                  type ="radio" 
                  value={item}
                  onChange={this.handleChange}
                  disabled = {this.state.disabled}
                  />
                {item}
              </label>
            )
          }) : ""}
          <br/>
          </div>
          <p style={{color : 'red',fontWeight:'bold'}}>{this.state.err_msg}</p><br/>
          <button onClick={this.saveForm}>Save</button>
          {this.state.edit ?
          <button onClick={this.editForm}>Edit</button>
          : ""}
          <p style={{color : 'green',fontWeight:'bold'}}>{this.state.suc_msg}</p><br/>


          <div>
            <p>Name: {this.state.customerData?.name}</p>
            <p>Employee ID: {this.state.customerData?.empId}</p>
            <p>City: {this.state.customerData?.city}</p>
            <p>Gender: {this.state.customerData?.gender}</p>
          </div>





        </div>
      </div>
    )
  }
}

export default App