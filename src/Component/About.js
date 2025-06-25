const About = () =>{

    return (
        <div  style={{
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "600px",
      margin: "10px auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      transition: "transform 0.3s ease",
      ":hover": {
        transform: "scale(1.05)"
      },

  }}>
            <h3>About Us</h3>
            <p>
                The Kakuma Learning Platform was established with a singular mission: to provide accessible, high-quality education and skill-building opportunities to the residents of the Kakuma refugee camp and surrounding host communities.<br />
                We understand the unique challenges faced by individuals in this region and are committed to bridging educational gaps and fostering self-reliance.<br />
                Our platform is built on the principles of inclusivity, empowerment, and community development.<br />
                We collaborate with local and international partners to offer a curriculum that is both relevant and impactful, addressing the immediate needs and long-term aspirations of our learners. We believe that education is a powerful tool for transformation, enabling individuals to build better lives for themselves, their families, and their communities.<br />
            </p>
        </div>
    );
}

export default About;
