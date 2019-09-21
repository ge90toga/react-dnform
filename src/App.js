import React, { Component } from 'react';

import DynamicForm from './DynamicForm';
import validation from './validation';

class App extends Component {
  render() {
    const fields = [
      {label: 'First Name', type: 'input', name: 'firstName', value: 'Li'},
      {label: 'Last Name', type: 'input', name: 'lastName', value: 'Quan'},
      {label: 'City', type: 'input', name: 'city', value: 'Sydney'},
      {label: 'Address', type: 'input', name: 'address', value: '131 Macquarie Street'},
      {label: 'Occupation', type: 'select', data: ['Teacher', 'Software Engineer', 'Doctor', 'Lawyer'], name: 'occupation', value: 'Please Select'},
      {label: 'Message', type: 'textarea', name: 'message', value: ''},
      {label: 'Agree to Terms & Conditions', type: 'checkbox', name: 'terms', value: false},
    ];
    return (
      <DynamicForm fields={fields} validation={validation} />
    );
  }
}

export default App;
