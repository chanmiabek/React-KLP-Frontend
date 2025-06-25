import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import { SiTransmission } from "react-icons/si";
import { HiOutlineLogin } from "react-icons/hi";
import { IoPersonAdd } from "react-icons/io5";
import Footer from './Footer';
const Layout = () => {


  return (
    <>
    <hero />
    <div style={{
      padding: "10px",
      alignItems: "center",
      width: "100%",
      height: "auto",
      flexDirection: "column",
    }}>


            <nav>
            <div className="logo">
              <span><img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="logo" height={50} width={50} /></span>
              <span><h1 style={{
                color: "blue",
                fontFamily: "Arial, sans-serif",
                fontSize: "24px",
                marginLeft: "10px",
                textDecoration: "none",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "2px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                display: "inline-block",
                transition: "color 0.3s ease",
                cursor: "pointer",
                textAlign: "center",


              }}>KLP</h1></span>


              <ul style={{
                margin: "0",
                padding: "0",
                marginTopRadius: "0",
                top: "0",
                left: "0",
                display: "flex",
                borderTopRadius: "0",
              }}>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/course"><SiTransmission /></Link></li>
                <li><Link to="/login"><HiOutlineLogin />Login</Link></li>
                <li><Link to="/register"><IoPersonAdd />Signup</Link></li>
              </ul>
              <div className="search-bar" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "20px",
                marginTop: "10px",
                marginBottom: "10px",
                position: "relative",
                width: "100%",
                maxWidth: "600px", // Limit the width of the search bar
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                borderRadius: "1px",
                float: "right",

              }}>
                <input type="text" placeholder="Search..." style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "200px",
                  fontSize: "16px",
                  fontFamily: "Arial, sans-serif",
                  transition: "box-shadow 0.3s ease",
                  float: "right",
                }} onFocus={(e) => {
                  e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
                }
                } onBlur={(e) => {
                  e.target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

                }} />
                <button type="submit" style={{
                  padding: "10px 15px",
                  marginLeft: "10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontFamily: "Arial, sans-serif",
                  hover: {
                    backgroundColor: "#0056b3",
                  },
                }}>Search</button>
              </div>
            </div>
          </nav>

            <Outlet/>
            <Footer/>
    </div>
    </>
  );
}

// Sidebar component moved outside of Layout


export default Layout;
