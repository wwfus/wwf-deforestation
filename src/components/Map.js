import { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibmlja2hhcmIiLCJhIjoiY2pucnN4cWloMGJveTNxbjJ4dzg3dGM4eCJ9.YHcYBuehFvoDyGiJr6dBig";

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(15.274);
  const [lat, setLat] = useState(0.303);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/nickharb/cl4slsuie000l14pp54fxr5zl",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  if (map.current) {
    if (props.activeTab === "t1") {
      map.current.flyTo({
        center: [15.274, 0.303],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }

    if (props.activeTab === "t2") {
      map.current.flyTo({
        center: [-62.905, -6.85],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }

    if (props.activeTab === "t3") {
      map.current.flyTo({
        center: [-77.52, 37.692],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
  }

  return (
    <div className="map">
      <div className="map__container" ref={mapContainer}></div>
      <div className="map__overlay">
        <div className="map__statistic">
          <span>52%</span>loss of forest cover since 2011
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
