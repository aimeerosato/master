import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import JobData from '../components/jobview/JobData';
import DeleteJobComponent from '../components/jobview/DeleteJob';

class JobViewContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleDelete(e, dispatch) {
    this.props.job.

    dispatch(deleteJob(jobID));
  }

  render() {
    return (
      <div>
        <RaisedButton
          containerElement={<Link to="/dashboard" />}
          label="Dashboard"
        />
      <br /><br />
        <PageHeader>Job View</PageHeader>
        <JobData job={this.props.job} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let jobID = undefined;
  if (state.get('app')) jobID = state.get('app').toJS().currentJob;
  const jobs = state.get('jobs').toJS().filter(job => job.id === jobID);
  const job = jobs[0];
  console.log('job', job);
  return {
    jobID,
    job,
  };
};

JobViewContainer.propTypes = {
  jobID: PropTypes.string.isRequired,
  job: PropTypes.object.isRequired,
};

// <DeleteJobComponent 
//   this.handleDelete={((event) => handleDelete(event, dispatch))}
// />

export default connect(mapStateToProps)(JobViewContainer);
