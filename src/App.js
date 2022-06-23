// import react
import { useState } from 'react';

// import components
import Nav from './components/Nav';

// import pages
import EbolaPage from './pages/Ebola';
import LymePage from './pages/Lyme';
import MalariaPage from './pages/Malaria';

// import images
import imgApe from './images/icon-ape.png';
import imgMosquito from './images/icon-mosquito.png';
import imgTick from './images/icon-tick.png';

const NAV_CONTENT = [
  {
    id: 't1',
    title: 'Ebola & West Africa',
    imgSrc: imgApe,
    imgAlt: 'Ape image',
  },
  {
    id: 't2',
    title: 'Malaria & The Amazon',
    imgSrc: imgMosquito,
    imgAlt: 'Mosquito image',
  },
  {
    id: 't3',
    title: 'Lyme Disease & the North American Forest',
    imgSrc: imgTick,
    imgAlt: 'Tick image',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('t1');

  const navClickHandler = (id) => {
    setActiveTab(id);
  };

  let diseaseContent = (
    <p>Loading...</p>
  );

  if (activeTab === 't1') {
    diseaseContent = <EbolaPage />
  }

  if (activeTab === 't2') {
    diseaseContent = <MalariaPage />
  }

  if (activeTab === 't3') {
    diseaseContent = <LymePage />
  }

  return (
    <main className='App'>
      <header className='main-header'>
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

      <Nav navContent={NAV_CONTENT} activeTab={activeTab} onNavClick={navClickHandler} />

      <section className='main-content'>
        <div className='layout-column map-column'>
          <div className='map-container'></div>
          <div className='map-statistic-overlay'></div>
          <div className='map-legend'></div>
        </div>

        <div className='layout-column content-column'>
          {diseaseContent}
        </div>
      </section>
    </main>
  );
}

export default App;
