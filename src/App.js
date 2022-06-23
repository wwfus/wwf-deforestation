// import react
import { useState } from "react";

// import components
import Tabs from "./components/Tabs";
import NavTab from "./components/NavTab";

// import pages
import EbolaPage from "./pages/Ebola";
import LymePage from "./pages/Lyme";
import MalariaPage from "./pages/Malaria";

// import images
import imgApe from "./images/icon-ape.png";
import imgMosquito from "./images/icon-mosquito.png";
import imgTick from "./images/icon-tick.png";

// event prop - passing a function as a prop to NavTab
// function selectNavTab() {
//     console.log('nav tab selected');
//     console.log(props.title);
// }

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  function clickHandler() {
    console.log("there was a click!");
  }

  return (
    <main className="App">
      <header className="main-header">
        <h1>Disease and Deforestation</h1>
        <p>
          Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem
          ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate
          iaculis turpis sed dignissim. Aenean pellentesque risus metus, in
          sollicitudin augue egestas eu. Proin ac finibus tortor. Curabitur
          faucibus urna enim, vel placerat lacus porta a. Lorem ipsum dolor sit
          amet.
        </p>
      </header>

      {/*<nav className='main-nav'>
                <NavTab onNav={selectNavTab} title='Ebola & West Africa' imgSrc={imgApe} imgAlt='Ebola & West Africa tab' />
                <NavTab onNav={selectNavTab} title='Malaria & The Amazon' imgSrc={imgMosquito} imgAlt='Malaria & The Amazon' />
                <NavTab onNav={selectNavTab} title='Lyme Disease & the North American Forest' imgSrc={imgTick} imgAlt='Lyme Disease & the North American Forest tab' />
            </nav>*/}

      <Tabs />

      {/*<nav className='main-nav'>
                <button className='nav-tab' onClick={clickHandler}>
                    <img src={imgApe} alt='Ebola & West Africa tab' />
                    <span>Ebola & West Africa</span>
                </button>
                <button className='nav-tab' onClick={clickHandler}>
                    <img src={imgMosquito} alt='Malaria & The Amazon tab' />
                    <span>Malaria & The Amazon</span>
                </button>
                <button className='nav-tab' onClick={clickHandler}>
                    <img src={imgTick} alt='Lyme Disease & the North American Forest tab' />
                    <span>Lyme Disease & the North American Forest</span>
                </button>
            </nav>*/}

      <section className="main-content">
        <div className="layout-column map-column">
          <div className="map-container"></div>
          <div className="map-statistic-overlay"></div>
          <div className="map-legend"></div>
        </div>

        <div className="layout-column content-column">
          {currentPage == 0 && <EbolaPage />}
          {currentPage == 1 && <LymePage />}
          {currentPage == 2 && <MalariaPage />}
        </div>
      </section>
    </main>
  );
}

export default App;
