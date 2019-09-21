import React from "react";
import MapDeckGL from "../../Components/MapDeckGL/MapDeckGL";

function Home() {
  const StartupsJsonData ={ "data" : [
    {
    "name": "Awsome Startup ",
    "longitude": -74.006,
    "latitude": 40.7128,
    "address" : "30, rue Omar Riffi"
    },
    {
    "name": "Awsome Startup 2",
    "longitude": -74.006,
    "latitude": 21.7128,
    "address" : "30, rue Omar Riffi"
    },
    {
    "name": "Awsome Startup 3",
    "longitude": -45.006,
    "latitude": 40.7128,
    "address" : "30, rue Omar Riffi"
    }
    ]
  };

  return (
    <MapDeckGL  startupsData={StartupsJsonData} />
  );
}

export default Home;