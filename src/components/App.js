import React, { useState } from "react";
import AppRouter from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
     <AppRouter isLoggedIn={isLoggedIn} />
     <fooster>&copy; Twitter {new Date().getFullYear()}</fooster>
    </>
  );
}

export default App;