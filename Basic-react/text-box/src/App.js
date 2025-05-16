import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(text);
    setText("");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f9fafb", padding: "2rem" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "2rem", backgroundColor: "white", boxShadow: "0 0 10px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }}>Text Input Form</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            placeholder="Enter some text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            style={{ padding: "0.5rem", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <button type="submit" style={{ padding: "0.5rem", backgroundColor: "#2563eb", color: "white", fontWeight: "bold", borderRadius: "4px", border: "none" }}>
            Submit
          </button>
        </form>
        {submitted && (
          <p style={{ marginTop: "1rem", textAlign: "center", color: "#4b5563" }}>
            You submitted: <strong>{submitted}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

