import React, { Component } from 'react';

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-md navbar-dar bg-dark'>
          <div>
            <a href='http://www.lemon.org' className='navbar-brand'>
              Employee Management System
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
