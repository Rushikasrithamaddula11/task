"use client";

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif"
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    fontWeight: "bold",
    transition: "color 0.3s ease-in-out"
  },
  titleHover: {
    color: "#0070f3"
  },
  description: {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "600px",
    margin: "20px auto",
    transition: "transform 0.3s ease-in-out"
  },
  descriptionHover: {
    transform: "scale(1.05)"
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s, transform 0.2s"
  },
  buttonHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)"
  }
};

export default function Start() {
  return (
    <div style={styles.container}>
      <h1 
        style={styles.title} 
        onMouseOver={(e) => e.target.style.color = styles.titleHover.color} 
        onMouseOut={(e) => e.target.style.color = styles.title.color}
      >
        Start Your Journey
      </h1>
      <p 
        style={styles.description} 
        onMouseOver={(e) => e.target.style.transform = styles.descriptionHover.transform} 
        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
      >
        Begin with Better.com!
      </p>
      <button 
        style={styles.button} 
        onMouseOver={(e) => {
          e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
          e.target.style.transform = styles.buttonHover.transform;
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = styles.button.backgroundColor;
          e.target.style.transform = "scale(1)";
        }}
      >
        Get Started
      </button>
    </div>
  );
}
