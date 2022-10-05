import { useRef, useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibmlja2hhcmIiLCJhIjoiY2pucnN4cWloMGJveTNxbjJ4dzg3dGM4eCJ9.YHcYBuehFvoDyGiJr6dBig";

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [checked2000, setChecked2000] = useState(true);
  const [checked2017, setChecked2017] = useState(true);
  const mapIsInteractive = !props.isMobile;
  const activeTab = props.activeTab;

  const mapLocations = {
    ebola: {
      center: [19, -3],
      zoom: 4,
      forestLoss: "XX%",
    },
    malaria: {
      center: [-62, -6],
      zoom: 4,
      forestLoss: "XX%",
    },
    lyme: {
      center: [-80, 37],
      zoom: 5,
      forestLoss: "XX%",
    },
  };

  let forestCoverLoss = mapLocations[activeTab].forestLoss;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/nickharb/cl4slsuie000l14pp54fxr5zl",
      center: mapLocations[activeTab].center,
      maxZoom: 6,
      minZoom: 2,
      zoom: mapLocations[activeTab].zoom,
      interactive: mapIsInteractive,
    });

    map.current.on("load", addMapLayers);
  });

  const addMapLayers = () => {
    map.current.addSource("forest-2000", {
      type: "raster",
      url: "mapbox://nickharb.1q04ebua",
    });

    map.current.addSource("forest-2017", {
      type: "raster",
      url: "mapbox://nickharb.15qac1nw",
    });

    map.current.addLayer({
      id: "forest-2000-layer",
      type: "raster",
      source: "forest-2000",
      paint: {
        "raster-opacity": 1,
        "raster-fade-duration": 500,
      },
    });

    map.current.addLayer({
      id: "forest-2017-layer",
      type: "raster",
      source: "forest-2017",
      paint: {
        "raster-opacity": 1,
        "raster-fade-duration": 500,
      },
    });
  };

  const updateMapLocation = (currentLocation) => {
    // fly to location
    map.current.flyTo({
      center: mapLocations[currentLocation].center,
      zoom: mapLocations[currentLocation].zoom,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  };

  const handleChange2000 = () => {
    if (checked2000) {
      console.log("unchecked 2000");
      map.current.setPaintProperty("forest-2000-layer", "raster-opacity", 0);
    } else {
      console.log("checked");
      map.current.setPaintProperty("forest-2000-layer", "raster-opacity", 1);
    }
    setChecked2000(!checked2000);
  };

  const handleChange2017 = () => {
    if (checked2017) {
      console.log("unchecked 2017");
      map.current.setPaintProperty("forest-2017-layer", "raster-opacity", 0);
    } else {
      console.log("checked 2017");
      map.current.setPaintProperty("forest-2017-layer", "raster-opacity", 1);
    }
    setChecked2017(!checked2017);
  };

  if (map.current) {
    updateMapLocation(activeTab);
    forestCoverLoss = mapLocations[activeTab].forestLoss;
  }

  return (
    <div className="map">
      <div className="map__container" ref={mapContainer}></div>
      {/* <div className="map__overlay">
        <div className="map__statistic">
          <span>{forestCoverLoss}</span>loss of forest cover since 2011
        </div>
      </div> */}
      <div className="map__legend">
        <div className="map__legend-item">
          <Switch checked={checked2000} onChange={handleChange2000} />
          <span>Forest Cover as of 2000</span>
        </div>
        <div className="map__legend-item">
          <Switch checked={checked2017} onChange={handleChange2017} />
          <span>Forest Cover as of 2017</span>
        </div>
      </div>
    </div>
  );
};

export default Map;
