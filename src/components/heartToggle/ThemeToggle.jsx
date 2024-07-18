import React, { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>{isDark ? "Qara Tema" : "Ağ Tema"}</p>
      <button onClick={toggleTheme}>Temanı Dəyiş</button>
    </div>
  );
};

export default ThemeToggle;