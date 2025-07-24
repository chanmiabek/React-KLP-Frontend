import React from 'react';

const InstructorHome = () => (
  <div>
    <h2>Welcome, Instructor!</h2>
    <p>Here’s your overview for managing content and learners:</p>
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="card shadow rounded-3">
          <div className="card-body">
            <h5 className="card-title">Courses Created</h5>
            <p className="card-text">3 Active Courses</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow rounded-3">
          <div className="card-body">
            <h5 className="card-title">Students</h5>
            <p className="card-text">120 Enrolled</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow rounded-3">
          <div className="card-body">
            <h5 className="card-title">Assignments Posted</h5>
            <p className="card-text">10 Active</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InstructorHome;
