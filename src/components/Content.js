// import components
import Map from "./Map";

// import screens
import EbolaPage from "../screens/Ebola";
import LymePage from "../screens/Lyme";
import MalariaPage from "../screens/Malaria";

import "./Content.css";

const Content = (props) => {
  let diseaseContent = <p>Loading...</p>;

  if (props.activeTab === "ebola") {
    diseaseContent = <EbolaPage />;
  }

  if (props.activeTab === "malaria") {
    diseaseContent = <MalariaPage />;
  }

  if (props.activeTab === "lyme") {
    diseaseContent = <LymePage />;
  }

  return (
    <section className="main-content">
      <div className="layout-column">
        <Map activeTab={props.activeTab} isMobile={props.isMobile} />
      </div>
      <div className="layout-column">{diseaseContent}</div>
    </section>
  );
};

export default Content;
