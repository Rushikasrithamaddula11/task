"use client"; 
import { useState } from "react";

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
    marginBottom: "20px"
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    transition: "border-color 0.3s ease-in-out"
  },
  inputFocus: {
    borderColor: "#0070f3"
  },
  result: {
    fontSize: "1.5rem",
    color: "#0070f3",
    marginTop: "20px"
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

export default function MortgageCalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(3.5);
  const [years, setYears] = useState(30);

  const calculatePayment = () => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    return ((amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments))).toFixed(2);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mortgage Calculator</h1>
      
      <label>Loan Amount:</label>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        style={styles.input}
        onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
        onBlur={(e) => e.target.style.borderColor = "#ccc"}
      />

      <label>Interest Rate (%):</label>
      <input 
        type="number" 
        value={rate} 
        onChange={(e) => setRate(e.target.value)} 
        style={styles.input}
        onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
        onBlur={(e) => e.target.style.borderColor = "#ccc"}
      />

      <label>Loan Term (Years):</label>
      <input 
        type="number" 
        value={years} 
        onChange={(e) => setYears(e.target.value)} 
        style={styles.input}
        onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
        onBlur={(e) => e.target.style.borderColor = "#ccc"}
      />
      
      <h2 style={styles.result}>Monthly Payment: ${calculatePayment()}</h2>
    </div>
  );
}
