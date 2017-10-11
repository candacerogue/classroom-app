import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const NewAssignmentForm = (props) => {
  return (
    <form onSubmit={props.validateNewAssignment}>
      <TextField
        name="name"
        type="text"
        value={props.newAssignment.name}
        onChange={props.handleNewAssignmentInputChange}
        hintText="Assignment Name"
      />
      <DatePicker
        name="assignedDate"
        value={props.newAssignment.assignedDate}
        onChange={props.handleNewAssignmentAssignedDateChange}
        locale='en-US'
        hintText="Assigned Date"
        container="inline"
      />
      <DatePicker
        name="dueDate"
        value={props.newAssignment.dueDate}
        onChange={props.handleNewAssignmentDueDateChange}
        locale='en-US'
        hintText="Due Date"
        container="inline"
      />
      <TextField
        name="possibleScore"
        type="number"
        value={props.newAssignment.possibleScore}
        onChange={props.handleNewAssignmentInputChange}
        hintText="Possible Score"
      />
      <input type="submit" value="Save New Assignment" />
    </form>
  );
};

export default NewAssignmentForm;