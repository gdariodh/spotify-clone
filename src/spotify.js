// TODO: Hace Login con spotify para entrar a mi app

export const authEndPoint = "https://accounts.spotify.com/authorize";

// y una vez este auth, redirect a nuestra app
const redirectUrl = process.env.REACT_APP_URL_APP;
// nuestro clientId para poder hacer estos login con spotify
const clientId = process.env.REACT_APP_TOKEN_SPOTIFY_DEV;

// asignamos los roles q tendran los usuarios
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// y mezclamos todo lo q escribimos para hacer la peticion a spotify devs
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// TODO: Todo esto es para poder hacer un login con cuentas de spotify en nuestra app

// esto sera usado en Login Component

// NOTA: Debes tener una cuenta en spotify-dev y registrar tu app y la url q se utilizara para el redirect
// cuando el usuario este authed, ademas ahi te proporcionan el clientId
