export default function Home() {
  return (
    <div style={{
      backgroundColor: "#0c0c0c",
      color: "#ffffff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Navon</h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
        Intelligence. Strategy. Precision.
      </p>
      <p style={{ fontSize: "1rem", marginTop: "2rem", opacity: 0.4 }}>
        © {new Date().getFullYear()} Navon. All rights reserved.
      </p>
    </div>
  );
}
