import React from "react";
import { useNavigate } from "react-router-dom";
/* The line `import { useAuth } from "../hooks/useAuth";` is importing the `useAuth` hook from a file
located at "../hooks/useAuth". This hook is likely used to handle authentication-related
functionality within the component where it is being imported. */

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your signup logic here
//         alert("Signup submitted!");


//     };
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         // Handle input changes if needed
//         console.log(`${name}: ${value}`);



//     };


//     return (
//         <div  style={{backgroundColor:"aquamarine", width:"350px", height:"auto", margin: "0 auto", padding:"20px", borderRadius:"50px", borderColor:"blue-active", color:"blue", fontFamily:"Arial, sans-serif", fontSize:"16px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",boxShadow: "0 2px 5px rgba(0,0,0,0.1)", transition: "transform 0.3s ease"}}>
//             <h2 className="border:solid align-content:center bg-color:blue-active border-bottom-radius:2px  gap:20px margin-bottom:20px text-decoration-color:blue font-style:animation-direction-alt-reverse align-items:center" >Signup</h2>
//             <p>This is the signup page where users can create a new account.</p>
//             <label type="text" placeholder="Enter your name"  className="form-label">Enter your name:</label><br/>
//             <input type="text" placeholder="Enter your name" name="name" className="form-control" required /><br/>

//             <label type="email" placeholder="Enter your email" className="form-label">Enter your email:</label><br/>
//             <input type="email" placeholder="Enter your email" name="email" className="form-control" required /><br/>
//             <label type="password" placeholder="Enter your password" className="form-label">Enter your password:</label><br/>
//             <input type="password" placeholder="Enter your password" name="password" className="form-control" required /><br/>
//             <label type="password" placeholder="Confirm your password" className="form-label">Confirm your password:</label><br/>
//             <input type="password" placeholder="Confirm your password" name="confirmPassword" className="form-control" required /><br/>
//             <button type="submit" className="btn btn-primary" onClick={handleSubmit} formMethod="post">Signup</button>

//         </div>
//     );
// }








const EnrollPage = ({ course }) => {
    const navigate = useNavigate();

    const handleEnrollClick = () => {
    if (handleEnrollClick) {
      navigate(`/enroll/${course.id}`); // Navigate to enrollment page
    } else {
      // Option 1: Redirect to login with a message
        alert('Please log in or register to enroll in this course.');
      navigate('/login?redirect=/enroll/' + course.id); // Pass redirect path
      // Option 2: Show a modal
      // openLoginRegisterModal();
    }
    };

    return (
    <div className="course-card">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <button onClick={handleEnrollClick}>Enroll Now</button>
    </div>
    );
};


export default EnrollPage;
