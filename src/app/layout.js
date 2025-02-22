"use client";

import Link from "next/link";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#0070f3",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    padding: "10px 15px",
    transition: "all 0.3s ease-in-out",
    borderRadius: "5px"
  },
  navLinkHover: {
    backgroundColor: "#0056b3",
  },
  body: {
    margin: "0",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    marginTop: "20px",
    padding: "20px",
    width: "80%",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }
};

export default function Layout({ children }) {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        {['Home', 'About', 'Mortgage Calculator', 'Start'].map((text, index) => (
          <Link 
            key={index} 
            href={text === 'Home' ? '/' : `/${text.toLowerCase().replace(/\s+/g, '-')}`} 
            style={styles.navLink}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.navLinkHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {text}
          </Link>
        ))}
      </nav>
      <div style={styles.body}>
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}
