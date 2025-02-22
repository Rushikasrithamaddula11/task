"use client";

import Link from "next/link";

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif"
  },
  header: {
    marginBottom: "40px"
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "20px"
  },
  getStarted: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s, transform 0.2s",
  },
  getStartedHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)"
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px"
  },
  featureCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "250px",
    transition: "transform 0.3s ease-in-out"
  },
  featureCardHover: {
    transform: "scale(1.05)"
  },
  footer: {
    marginTop: "50px",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#eaeaea",
    fontSize: "14px",
    color: "#555"
  }
};

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>A Better Way to Homeownership</h1>
        <p style={styles.subtitle}>Fast. Simple. More Affordable.</p>
        <Link href="/start">
          <button 
            style={styles.getStarted} 
            onMouseOver={(e) => {
              e.target.style.backgroundColor = styles.getStartedHover.backgroundColor;
              e.target.style.transform = styles.getStartedHover.transform;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = styles.getStarted.backgroundColor;
              e.target.style.transform = "scale(1)";
            }}
          >
            Get Started
          </button>
        </Link>
      </header>
      
      <section style={styles.features}>
        {["No Commission & No Hidden Fees", "100% Online Experience", "Faster Closings"].map((title, index) => (
          <div 
            key={index} 
            style={styles.featureCard} 
            onMouseOver={(e) => e.currentTarget.style.transform = styles.featureCardHover.transform}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <h2>{title}</h2>
            <p>{
              index === 0 ? "Save thousands in fees compared to traditional lenders." :
              index === 1 ? "Apply online in minutes with a seamless digital process." :
              "Close on your dream home in as little as 21 days."
            }</p>
          </div>
        ))}
      </section>
      
      <footer style={styles.footer}>
        <p>&copy; 2025 Better.com Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}