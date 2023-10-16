import { useEffect, useState } from "react";
import axios from "axios";
const Player = () => {
  const [accessToken, setAccessToken] = useState("");
  const clientId = "b9b075e7f9a345a19d3f1a0d1b20385b";
  const clientSecret = "093b4cd7ab264210a4d899c9e55e6420";

  useEffect(() => {
    // API Access Token
    const authParamaters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    fetch("https://accounts.spotify.com/api/token", authParamaters)
      .then((response) => response.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);  

  return <div></div>;
};

export default Player;
