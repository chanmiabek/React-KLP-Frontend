import  React  from 'react'


const StudentHome = () => (

  <div>
    <h2>Welcome back, Student!</h2>
    <p>Your enrolled courses, progress, and updates:</p>
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="card shadow rounded-3">
          <div className="card-body">
            <h5 className="card-title">Enrolled Courses</h5>
            <p className="card-text">5 Courses</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow rounded-3">
          <div className="card-body">
            <h5 className="card-title">Progress</h5>
            <p className="card-text">70% Completed</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow rounded-3">
          <div className="card-body">
            <h5 className="card-title">Upcoming Assignments</h5>
            <p className="card-text">2 Due this week</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StudentHome;