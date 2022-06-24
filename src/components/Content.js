// import components
import Map from './Map';

// import pages
import EbolaPage from '../pages/Ebola';
import LymePage from '../pages/Lyme';
import MalariaPage from '../pages/Malaria';

import './Content.css';

const Content = (props) => {

  let diseaseContent = (
    <p>Loading...</p>
  );

  if (props.activeTab === 't1') {
    diseaseContent = <EbolaPage />
  }

  if (props.activeTab === 't2') {
    diseaseContent = <MalariaPage />
  }

  if (props.activeTab === 't3') {
    diseaseContent = <LymePage />
  }

  return (
    <section className="main-content">
      <div className="layout-column"><Map activeTab={props.activeTab} /></div>
      <div className="layout-column">{diseaseContent}</div>
    </section>
  );
};

export default Content;
