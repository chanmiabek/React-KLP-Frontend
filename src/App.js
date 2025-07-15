import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Component/Layout';
import Course from './Component/Course';
import About from './Component/About';
import Login from './Component/Login';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Register from './Component/Register';
import Apply from './Component/Apply';
import './Component/Layout.css';
import LearnMore from './Component/LearnMore';
// import Dashboard from './Component/Dashboard';
import ProtectedRoute from './Component/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Component/NotFound';
import Carousel from './Component/Carousel';
import FAQsection from './Component/FAQsection';
import FeatureCard from './Component/FeatureCard';
// import Sidebar from './Component/Sidebar';


function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="Course" element={<Course />} />
          <Route path="login" element={<Login />} />
          <Route path="Apply" element={<Apply />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="learnMore" element={<LearnMore />} />
          <Route path="FeatureCard" element={<FeatureCard />} />
          <Route path="Carousel" element={<Carousel />} />
          <Route path="FAQsection" element={<FAQsection />} />
          {/* <Route path="Sidebar" element={<Sidebar />} /> */}
          <Route path="NotFound" element={<NotFound />} />
        </Route>
        {/* <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
        <Route path="/courses" element={<ProtectedRoute><Course /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
    </Routes>

  </BrowserRouter>
  </>
  );
}

export default App;
