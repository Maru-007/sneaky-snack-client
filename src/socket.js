import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// process.env.NODE_ENV === "production" ? undefined : "http://localhost:4000";

const URL = "https://sneaky-snackers.herokuapp.com/"

// const URL = "http://localhost:4000";


export const socket = io(URL);