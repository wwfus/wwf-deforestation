import { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibmlja2hhcmIiLCJhIjoiY2pucnN4cWloMGJveTNxbjJ4dzg3dGM4eCJ9.YHcYBuehFvoDyGiJr6dBig";

const Map = (props) => {
  const [forestCoverLoss, setForestCoverLoss] = useState("52%");
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(15.274);
  const [lat, setLat] = useState(0.303);
  const [zoom, setZoom] = useState(4);

  const mapLocations = {
    t1: {
      center: [15.274, 0.303],
      forestLoss: "52%",
    },
    t2: {
      center: [-62.905, -6.85],
      forestLoss: "32%",
    },
    t3: {
      center: [-77.52, 37.692],
      forestLoss: "22%",
    },
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/nickharb/cl4slsuie000l14pp54fxr5zl",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  const updateMapLocation = (currentLocation) => {
    // change forest cover loss statistic
    // setForestCoverLoss(mapLocations[currentLocation].forestLoss);

    // fly to location
    map.current.flyTo({
      center: mapLocations[currentLocation].center,
      zoom: 4,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  };

  if (map.current) {
    updateMapLocation(props.activeTab);
  }

  return (
    <div className="map">
      <div className="map__container" ref={mapContainer}></div>
      <div className="map__overlay">
        <div className="map__statistic">
          <span>{forestCoverLoss}</span>loss of forest cover since 2011
        </div>
      </div>
      <div className="map__legend">
        <div className="map__legend-item">
          <span></span> Forest Cover as of 2000
        </div>
        <div className="map__legend-item">
          <span></span> Forest Cover as of 2017
        </div>
      </div>
    </div>
  );
};

export default Map;
