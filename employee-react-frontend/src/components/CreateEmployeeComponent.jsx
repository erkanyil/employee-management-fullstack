import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      emailId: '',
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    EmployeeService.createEmployee(employee).then((res) => {
      this.props.history.push('/employees');
    });

    console.log('employee => ' + JSON.stringify(employee));
  };

  cancel() {
    this.props.history.push('/employees');
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Add Employee Form</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label> First Name: </label>
                    <input
                      placeHolder='First Name'
                      name='firstName'
                      className='form-control'
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                    <label> Last Name: </label>
                    <input
                      placeHolder='Last Name'
                      name='lastName'
                      className='form-control'
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                    <label> Email: </label>
                    <input
                      placeHolder='Email'
                      name='email'
                      className='form-control'
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>
                  <button
                    className='btn btn-success'
                    onClick={this.saveEmployee}
                  >
                    Save
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
