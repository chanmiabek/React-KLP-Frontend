import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import StudentDashboard from './Administrator/StudentDashboard';
import InstructorDashboard from './Administrator/InstructorDashboard'
import Layout from './Component/Layout';
import Course from './Component/Course';
import Footer from './Component/Footer';
import StudentHome from './Administrator/StudentHome';
import CourseView from './Component/CourseView';
import InstructorHome from './Administrator/InstructorHome';
import InstructorHeader from './Administrator/InstructorHeader';
import StudentHeader from './Administrator/StudentHeader';
//import PostAnnouncement from './Component/PostAnnouncement';
import AddCourse from './Component/AddCourse';
import ManageAssignment from './Component/ManageAssignment';
import Recommendation from './Component/Recommendation';
import StudentProgress from './Component/StudentProgress';
import Apply from './Component/Apply';
import About from './Component/About';
import Login from './Component/Login';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Register from './Component/Register';
//import Apply from './Component/Apply';
import './Component/Layout.css';
//import LearnMore from './Component/LearnMore';
import Dashboard from './Component/Dashboard';
import ProtectedRoute from './Component/ProtectedRoute';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Component/NotFound';
import Carousel from './Component/Carousel';
import FAQsection from './Component/FAQsection';
import FeatureCard from './Component/FeatureCard';
import StudentSidebar from './Administrator/StudentSidebar';
//import StudentDashboard from './Administrator/StudentDashboard';
//import InstructorDashboard from './Administrator/InstructorDashboard';
import InstructorSidebar from './Administrator/InstructorSidebar';
import Setting from './Administrator/setting';
import Logout from './Administrator/Logout';
import Account from './Administrator/Account';
import Forum from './Component/Forum';
import  Progress from './Component/Progress';
import Notification from './Component/Notification';
//import StudentSidebar from './Administrator/StudentSidebar';
import RoleSelector from './Administrator/RoleSelector';
import ForgotPassword from './Administrator/ForgotPassword';
import TermService from './Component/TermService';
import PrivacyPolicy from './Component/PrivacyPolicy';



function App() {

  const isAuthenticated = localStorage.getItem('token');
    const role = localStorage.getItem('role'); 

  return (
<>
  <BrowserRouter>
   <Routes>
      {/* Public Routes with Navbar and Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/featureCard" element={<FeatureCard />} />
        <Route path="FAQSection" element={<FAQsection />} />
        <Route path="term-service" element={<TermService />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="roleSelector" element={<RoleSelector />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Authenticated Routes without Navbar/Footer */}
      {isAuthenticated && role === 'student' && (
        <Route path="/student/*" element={<StudentDashboard />}>
          <Route path="" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<StudentHome />} />
          <Route path="courses" element={<CourseView />} />
          <Route path="forum" element={<Forum />} />
          <Route path="account" element={<Account />} />
          <Route path="settings" element={<Setting />} />
          <Route path="progress" element={<Progress />} />
          <Route path="notification" element={<Notification />} />
          <Route path="studentDashboard" element={<StudentDashboard />} />
          <Route path="studentSidebar" element={<StudentSidebar />} />
          <Route path="studentHeader" element={<StudentHeader />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      )}

      {isAuthenticated && role === 'instructor' && (
        <Route path="/instructor/*" element={<InstructorDashboard />}>
          <Route path="" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<InstructorHome />} />
          <Route path="students" element={<StudentProgress />} />
          {/* <Route path="post-announcement" element={<PostAnnouncement />} /> */}
          <Route path="add-course" element={<AddCourse />} />
          <Route path="assignments" element={<ManageAssignment />} />
          <Route path="instructorDashboard" element={<InstructorDashboard />} />
          <Route path="instructorSidebar" element={<InstructorSidebar />} />
          <Route path="instructorHeader" element={<InstructorHeader />} />
          <Route path="course-view" element={<CourseView />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="recommendations" element={<Recommendation />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      )}

      {/* Redirect for unauthorized */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>

    <ProtectedRoute><Dashboard /></ProtectedRoute>
      <ProtectedRoute><Login /></ProtectedRoute>
  </BrowserRouter>
  </>
  );
}

export default App;
