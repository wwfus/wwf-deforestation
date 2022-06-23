import { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibmlja2hhcmIiLCJhIjoiY2pucnN4cWloMGJveTNxbjJ4dzg3dGM4eCJ9.YHcYBuehFvoDyGiJr6dBig";

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div className="map">
      <div className="map__container" ref={mapContainer}></div>
      <div className="map__overlay">
        <div className="map__statistic">52%</div>
        <div className="map__legend">
          <div className="map__legend-item">
            <span></span> Forest Cover as of 2000
          </div>
          <div className="map__legend-item">
            <span></span> Forest Cover as of 2017
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
