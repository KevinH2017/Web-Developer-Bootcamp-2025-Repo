import { useState, useEffect } from "react";
import ProfileSearchForm from "./ProfileSearchForm";
import axios from "axios";

// Shows GitHub profile information from GH API
const BASE_URL = "https://api.github.com/users";

function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(
    function fetchUserOnUsernameChange() {
      async function fetchUser() {
        // Gets username from BASE_URL and github username
        const userResult = await axios
          .get(`${BASE_URL}/${username}`)
          .then((response) => console.log(response.data))
          .catch((error) => {
            console.error("Axios Error:", error.message);
            console.error("Request URL:", error.config.url);
            console.error(
              "Response Status:",
              error.response ? error.response.status : "No response"
            );
          });
        setProfile({ data: userResult.data, isLoading: false });
      }
      fetchUser();
    },
    [username]
  );

  function search(username) {
    setProfile({ data: null, isLoading: true });
    setUsername(username);
  }

  if (profile.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <ProfileSearchForm search={search} />
      <b>{profile.data.name}</b>
      <img src={profile.data.avatar_url} />
    </div>
  );
}

export default ProfileViewerWithSearch;
