const Contact = () =>{
    return (
        <div style={{
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
            <h2>Contact</h2>
            <p>This is the contact page where users can find contact information.</p>
            <p>If you have any questions or need assistance, please reach out to us at:</p>

        </div>
            )
}

export default Contact;
