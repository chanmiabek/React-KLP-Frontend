// KLP Admin Dashboard using React and Bootstrap
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DashboardCard({ title, value, icon, bg }) {
    return (
    <div className={`col-md-3 mb-4`}>
        <div className={`card text-white bg-${bg} h-100`}>
        <div className="card-body d-flex align-items-center justify-content-between">
            <div>
            <h5>{title}</h5>
            <h3>{value}</h3>
            </div>
            <i className={`bi ${icon} fs-1`}></i>
        </div>
        </div>
    </div>
    );
}

function Admin() {
    return (
    <div className="container-fluid p-4">
        <h2 className="mb-4">Kakuma Learning Platform Admin Dashboard</h2>

        <div className="row">
        <DashboardCard title="Total Students" value="1,240" icon="bi-people" bg="primary" />
        <DashboardCard title="Courses" value="34" icon="bi-book" bg="success" />
        <DashboardCard title="Instructors" value="18" icon="bi-person-badge" bg="info" />
        <DashboardCard title="Active Sessions" value="7" icon="bi-lightning" bg="warning" />
        </div>

        <div className="row mt-4">
        <div className="col-md-8">
            <div className="card">
            <div className="card-header">Student Enrollment Trends</div>
            <div className="card-body">
                <p>Chart or graph can go here (e.g., Recharts or Chart.js)</p>
            </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
            <div className="card-header">Recent Activities</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Yar registered for HTML course</li>
                <li className="list-group-item">New course: React Basics added</li>
                <li className="list-group-item">Admin updated user permissions</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    );
}


