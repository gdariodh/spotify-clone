import React from "react";
// configuracion para hacer login y auth con el servicio de spotify
import {loginUrl} from "../../spotify"; // hace login con spotify para mi app :)

function Login() {
  return (
    <>
      {/* wrapper tecnica */}
      <main className="login">
        <div className="slogan">
          <img
            src="https://www.flaticon.es/svg/vstatic/svg/725/725281.svg?token=exp=1613276170~hmac=d7a8c180b31617b4c9308cab67dab1f4"
            alt="spotify-logo"
          />
          <h1>Welcome to my spotify clone {":)"}</h1>
        </div>

        <a href={loginUrl}>LOG IN WITH SPOTIFY</a>
      </main>
    </>
  );
}

export default Login;
