import Blurb from "../components/Blurb";

import "./Page.css";

// import images
import imgEbolaChart from "../images/ebola-chart.png";
import imgEbolaMap from "../images/ebola-map.png";
import imgFarming from "../images/drivers-farming.png";
import imgFuelwood from "../images/drivers-fuelwood.png";
import imgMining from "../images/drivers-mining.png";
import imgTimber from "../images/drivers-timber.png";

function EbolaPage() {
  return (
    <div className="page-content">
      <header>
        <h2>Ebola and West Africa</h2>
        <p>
          Ebola is a rare but severe and often fatal disease, with a mortality
          rate of 50%. The virus is zoonotic in origin, and fruit bats are the
          most probable natural host. Transmission likely occurs from wildlife
          (fruit bats, porcupines, or nonhuman primates) to humans and then
          spreads among people. Recent research also indicates that humans can
          now act as intermediate hosts and can serve as long-term Ebola virus
          reservoirs that trigger new outbreaks.
        </p>
      </header>

      <div className="callout-section">
        <h3>Region Disease Profile</h3>
        <p>
          Studies of Ebola outbreak sites in West and Central Africa demonstrate
          links between forest loss or disturbance and the spread of the virus.
          Researchers found that most cases of Ebola transmission to humans – or
          “spillovers” – occurred in areas where there was the greatest forest
          disturbance which leads to increased contact between people and
          wildlife. Forest loss was found to be the greatest risk factor for
          Ebola, more than high human population density or other favorable
          viral conditions.
        </p>
        <div className="image-container">
          <h4>Ebola Cases in West Africa</h4>
          <img src={imgEbolaMap} alt="Map of Ebola in West Africa" />
        </div>
        <ul>
          <li>
            Since its identification in 1976, Ebola has killed more than 13,000
            people, with all cases originating in Africa. The outbreak in West
            and Central Africa between 2014 and 2016 was the most severe, with
            more cases and deaths than all other outbreaks combined.
          </li>
          <li>
            Recent research indicates that humans can now act as intermediate
            hosts and can serve as long-term Ebola virus reservoirs that trigger
            new Ebola outbreaks.
          </li>
        </ul>
        <div className="image-container">
          <h4>
            Total Cases and Deaths <span>as of 04/13/16</span>
          </h4>
          <img src={imgEbolaChart} alt="Chart of Ebola cases and deaths" />
        </div>
      </div>

      <div className="content-section">
        <header>
          <h3>Drivers of Deforestation in West Africa</h3>
        </header>

        <Blurb
          title="Smallholder farming"
          text="Expanding agriculture, due to an increased population and shifts in diet, leads to most of the world’s deforestation."
          imgSrc={imgFarming}
          imgAlt="Smallholder farming icon"
        />
        <Blurb
          title="Mining operations"
          text="Rich in natural resources, including diamonds, gold, and coltan (used in cell phones), the West African forests are threatened by major mining companies and the unsustainable infrastructure they often bring."
          imgSrc={imgMining}
          imgAlt="Mining operations icon"
        />
        <Blurb
          title="Small-scale timber extraction"
          text="Illegal and unsustainable logging, usually resulting from the demand for cheap wood and paper, is the primary driver of forest degradation."
          imgSrc={imgTimber}
          imgAlt="Small-scale timber extraction icon"
        />
        <Blurb
          title="Fuelwood and charcoal"
          text="Wood and charcoal are popular fuel choices for cooking and heating in many communities. About half of the illegal removal of timber from forests worldwide is thought to be for use as fuelwood."
          imgSrc={imgFuelwood}
          imgAlt="Fuelwood and charcoal icon"
        />
      </div>

      <div className="content-section">
        <h3>What WWF is Doing</h3>
        <p>
          Conserving the Congo Basin is a massive effort, requiring
          collaboration on many levels, from local communities to multinational
          partnerships. WWF works to ensure better conservation of natural
          resources and more sustainable methods for their extraction to
          minimize impacts on forests. We also help communities reduce pressure
          for fuelwood by providing alternative fuel sources to timber and
          charcoal. By developing alternative, more sustainable livelihood
          opportunities, we support communities as stewards of their forests and
          their resources.
        </p>
      </div>
    </div>
  );
}

export default EbolaPage;
