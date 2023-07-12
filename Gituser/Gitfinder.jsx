
import React, { useState } from 'react';
import "./gitfinder.css"

function Gitfinder() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setUsername('');
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  return (
    <div className="App">
      <h1>GitHub User Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {user && (
        <div className="user-profile">
          <img src={user.avatar_url} alt="User Avatar" />
          <h2>{user.name}</h2>
        </div>
      )}
    </div>
  );
}

export default Gitfinder;
