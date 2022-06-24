// import react
import { useState } from "react";

// import components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";

// import images
import imgApe from "./images/icon-ape.png";
import imgMosquito from "./images/icon-mosquito.png";
import imgTick from "./images/icon-tick.png";

const NAV_CONTENT = [
  {
    id: "t1",
    title: "Ebola & West Africa",
    imgSrc: imgApe,
    imgAlt: "Ape image",
  },
  {
    id: "t2",
    title: "Malaria & The Amazon",
    imgSrc: imgMosquito,
    imgAlt: "Mosquito image",
  },
  {
    id: "t3",
    title: "Lyme Disease & the North American Forest",
    imgSrc: imgTick,
    imgAlt: "Tick image",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("t1");

  const navClickHandler = (id) => {
    setActiveTab(id);
  };

  return (
    <main className="App">
      <Header />
      <Nav
        navContent={NAV_CONTENT}
        activeTab={activeTab}
        onNavClick={navClickHandler}
      />
      <div className="content">
        <Content activeTab={activeTab} />
      </div>
    </main>
  );
}

export default App;
