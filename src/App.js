import { useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";

// import components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";

// import images
import imgApe from "./images/icon-ape.svg";
import imgMosquito from "./images/icon-mosquito.svg";
import imgTick from "./images/icon-tick.svg";

const navContent = [
  {
    id: "ebola",
    title: "Ebola & West Africa",
    imgSrc: imgApe,
    imgAlt: "Ape image",
  },
  {
    id: "malaria",
    title: "Malaria & The Amazon",
    imgSrc: imgMosquito,
    imgAlt: "Mosquito image",
  },
  {
    id: "lyme",
    title: "Lyme Disease & the North American Forest",
    imgSrc: imgTick,
    imgAlt: "Tick image",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("ebola");
  const isMobile = useWindowDimensions()["width"] < 768 ? true : false;

  const navClickHandler = (id) => {
    setActiveTab(id); // state passed up from Tab.js
  };

  return (
    <main className="App">
      <Header />
      <Nav
        navContent={navContent}
        activeTab={activeTab}
        onNavClick={navClickHandler}
        isMobile={isMobile}
      />
      <div className="content">
        <Content activeTab={activeTab} isMobile={isMobile} />
      </div>
    </main>
  );
}

export default App;
