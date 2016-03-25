//TODO: Create delete button

import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';

function DeleteJobComponent() {
  return (
    <div className="delete-job"> 
      <Link to="/dashboard">
        <RaisedButton
          label="Delete Job"
          primary
          type="submit"
          onSubmit={props.handleDelete}
        />
      </Link>  
    </div>
  );
}


/*To do :     type="submit"
          onSubmit={props.handleDelete} 
can i handle routing like this?  or does that happen elsewhere?
          */

export default DeleteJobComponent;