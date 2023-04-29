import Login from "./components/Login";
import AddPost from "./components/Addpost";
import { useState } from "react";
import "./App.css";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Navbar from "./components/Navbar";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function App() {
  // const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Navbar /></>
    // <AlertProvider template={AlertTemplate} {...options}>
    //   {isAuth ? (
    //     <>
    //       <h1>You are Logged In</h1>

    //       <button
    //         onClick={() => {
    //           localStorage.clear();
    //           setIsAuth(false);
    //         }}
    //       >
    //         Logout
    //       </button>
    //     </>
    //   ) : (
    //     <div
    //       style={{
    //         marginTop: 64,
    //       }}
    //     >

    //       <Login isAuth={isAuth} setIsAuth={setIsAuth} />
    //     </div>
    //   )}
    //   
    // </AlertProvider>
  );
}

export default App;
