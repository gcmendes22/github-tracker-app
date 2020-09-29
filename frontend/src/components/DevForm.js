import React, { useState, useEffect } from "react";

function DevForm({ onSubmit }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      githubUsername,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername("");
    setTechs("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="">Github Username</label>
        <input
          name="githubUsername"
          id="githubUsername"
          required
          onChange={(e) => setGithubUsername(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="">Techs</label>
        <input
          name="techs"
          id="techs"
          required
          onChange={(e) => setTechs(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            readOnly
          />
        </div>
        <div className="input-block">
          <label htmlFor="">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            readOnly
          />
        </div>
      </div>

      <button type="submit">Save</button>
    </form>
  );
}

export default DevForm;
