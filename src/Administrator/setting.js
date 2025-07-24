// import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
// import { AuthProvider } from './contexts/AuthContexts';
// import { useAuth } from './contexts/AuthContexts';
// import { useNavigate } from 'react-router-dom';
// import { Alert } from 'react-bootstrap'; // Import Bootstrap components
// import { StudentDashboard } from '../Administrator/StudentDashboard'; // Adjust the import path as necessary
// import { InstructorDashboard } from '../Administrator/InstructorDashboard'; // Adjust the import path as necessary
// import { AuthService } from '../Service/AuthService'; // Adjust the import path as necessary    
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
// import { useContext } from 'react';
// import { AuthContext } from './contexts/AuthContexts';
// //import { AuthService } from '../Service/AuthService'; // Adjust the import path as necessary
// import { useParams } from 'react-router-dom'; // Adjust the import path as necessar // Import Bootstrap com // Import Bootstrap components
// //import { StudentDashboard } from '../Administrator/StudentDashboardDashboard'; // Adjust the import path as necessary
// //import { InstructorDashboard } from '../Administrator/InstructorDashboard'; // Adjust the import p// Adjust the import path as necessary
// //import { loading} from 'react-countup';
// import {user} from   useAuth('user');// Adjust the import path as necessary    


// const setting = () => {
//     const { user } = useAuth();
//     const authService = AuthService();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { role } = useParams();
//     const [error, setError] = useState('');
//     const { isAuthenticated } = useContext(AuthContext);
//     const [userRole, setUserRole] = useState(null);
//     const [loading, setLoading] = useState(true);


//     return (
//         <>
//         <Container fluid>
//             <Row>
//             <Col md={2}>
//             <StudentDashboard />
//             <InstructorDashboard />
//             </Col>
//             <Col md={10}>
//                 <h2 className="mt-3">Settings</h2>
//                 <p>Manage your account settings here.</p>
//                 {error && <Alert variant="danger">{error}</Alert>}
//                 {loading && <p>Loading...</p>}
//                 {isAuthenticated && userRole === 'student' && <Navigate to="/student/dashboard" replace />}
//                 {isAuthenticated && userRole === 'instructor' && <Navigate to="/instructor  /dashboard" replace />}
//                 {isAuthenticated && userRole === 'admin' && <Navigate to="/admin/dashboard" replace />}
//                 {user && <p>Welcome, {user.fullName}!</p>}      

//                 {/* Add your settings content here */}
//             </Col>
//             </Row>
//         </Container>
//         </>
//     ); 
// }

// export default setting;
