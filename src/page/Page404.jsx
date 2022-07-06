import React from "react";
import "./Page404.scss";
import "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="page-404">
      <div className="text-container">
        <h1 className="header">Page Not Found 404</h1>
        <Link to='/' className="button">Back to home</Link>
      </div>
      <div className="animation-404">
        <lottie-player
          autoplay
          loop
          mode='normal'
          src='https://assets6.lottiefiles.com/packages/lf20_suhe7qtm.json '
          style={{ width: "320px" }}
        ></lottie-player>
      </div>
    </div>
  );
}

export default Page404;
