import IconBlurb from "../components/IconBlurb";

// import images
import imgEbolaChart from "../images/ebola-chart.png";
import imgEbolaMap from "../images/ebola-map.png";
import imgFarming from "../images/drivers-farming.png";
import imgFuelwood from "../images/drivers-fuelwood.png";
import imgMining from "../images/drivers-mining.png";
import imgTimber from "../images/drivers-timber.png";

function MalariaPage() {
  return (
    <div className="malaria-page">
      <h2>Malaria and the Amazon</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam ut
        turpis pharetra rhoncus hendrerit. Risus, purus, nisi ipsum in laoreet.
        Turpis aliquam sagittis, est dictum aenean amet. Vitae nibh vulputate
        orci nisi. Quis posuere eu laoreet ullamcorper at semper nascetur mi.
        Mattis pharetra arcu tincidunt quam risus. Est vitae at donec elementum,
        porttitor tristique laoreet neque scelerisque.
      </p>

      <div className="callout-section">
        <h3>Region Disease Profile</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio tempor
          tempus amet, varius pretium id. Mi, ultrices aliquet quis ipsum, ut
          dictumst nec gravida. Sed nam scelerisque dolor in. Turpis donec at mi
          tellus lobortis libero scelerisque mi tellus. Tortor diam tristique
          venenatis amet tincidunt. Sit tempus aliquet dictum pellentesque non
          enim, elit massa aenean. Augue libero purus mauris hendrerit laoreet
          urna est dictum. Velit, et, malesuada et lectus urna vestibulum sed
          massa est. Ut cursus quisque aenean amet.
        </p>
        <div className="image-container">
          <h4>Ebola Cases in West Africa</h4>
          <img src={imgEbolaMap} alt="Map of Ebola in West Africa" />
        </div>
        <ul>
          <li>
            Aenean eleifend quam commodo neque cursus porta. Donec sit amet
            lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse
            vulputate iaculis turpis sed dignissim.
          </li>
          <li>
            Aenean eleifend quam commodo neque cursus porta. Donec sit amet
            lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse
            vulputate iaculis turpis sed dignissim.
          </li>
        </ul>
        <div className="image-container">
          <h4>
            Total Cases and Deaths <span>as of 04/13/16</span>
          </h4>
          <img src={imgEbolaMap} alt="Chart of Ebola cases and deaths" />
        </div>
      </div>

      <div className="content-section">
        <h3>Drivers of Deforestation in West Africa</h3>
        <p>
          Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem
          ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate
          iaculis turpis sed dignissim.
        </p>

        <IconBlurb
          title="Smallholder farming"
          text="Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate iaculis turpis sed dignissim."
          imgSrc={imgFarming}
          imgAlt="Smallholder farming icon"
        />
        <IconBlurb
          title="Mining operations"
          text="Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate iaculis turpis sed dignissim."
          imgSrc={imgMining}
          imgAlt="Mining operations icon"
        />
        <IconBlurb
          title="Small-scale timber extraction"
          text="Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate iaculis turpis sed dignissim."
          imgSrc={imgTimber}
          imgAlt="Small-scale timber extraction icon"
        />
        <IconBlurb
          title="Fuelwood and charcoal"
          text="Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate iaculis turpis sed dignissim."
          imgSrc={imgFuelwood}
          imgAlt="Fuelwood and charcoal icon"
        />
      </div>

      <div className="content-section">
        <h3>What WWF is Doing</h3>
        <p>
          Semper fames aliquet senectus vulputate porttitor. Tristique lectus
          purus quis sagittis nulla et vitae. Adipiscing sollicitudin lectus
          eget at ut mattis tortor. Proin lectus massa amet est, in dui lectus
          feugiat velit. Parturient eu sed convallis elementum, tempus tincidunt
          nullam. Venenatis amet aliquet auctor sed purus eget. Sociis hac in
          venenatis felis, lorem sollicitudin vulputate. Tristique adipiscing
          massa sed faucibus quam aenean pretium quis. Nisi, faucibus etiam
          faucibus vulputate blandit. At amet arcu neque dignissim a eu dis
          aliquam. Nunc id neque, vitae at tempus. Placerat justo, ut arcu quis.
          Enim fusce sit ut eu, parturient.
        </p>
      </div>
      <h2>Ebola and West Africa</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam ut
        turpis pharetra rhoncus hendrerit. Risus, purus, nisi ipsum in laoreet.
        Turpis aliquam sagittis, est dictum aenean amet. Vitae nibh vulputate
        orci nisi. Quis posuere eu laoreet ullamcorper at semper nascetur mi.
        Mattis pharetra arcu tincidunt quam risus. Est vitae at donec elementum,
        porttitor tristique laoreet neque scelerisque.
      </p>

      <div className="callout-section">
        <h3>Region Disease Profile</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio tempor
          tempus amet, varius pretium id. Mi, ultrices aliquet quis ipsum, ut
          dictumst nec gravida. Sed nam scelerisque dolor in. Turpis donec at mi
          tellus lobortis libero scelerisque mi tellus. Tortor diam tristique
          venenatis amet tincidunt. Sit tempus aliquet dictum pellentesque non
          enim, elit massa aenean. Augue libero purus mauris hendrerit laoreet
          urna est dictum. Velit, et, malesuada et lectus urna vestibulum sed
          massa est. Ut cursus quisque aenean amet.
        </p>
        <div className="image-container">
          <h4>Ebola Cases in West Africa</h4>
          <img src={imgEbolaMap} alt="Map of Ebola in West Africa" />
        </div>
        <ul>
          <li>
            Aenean eleifend quam commodo neque cursus porta. Donec sit amet
            lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse
            vulputate iaculis turpis sed dignissim.
          </li>
          <li>
            Aenean eleifend quam commodo neque cursus porta. Donec sit amet
            lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse
            vulputate iaculis turpis sed dignissim.
          </li>
        </ul>
        <div className="image-container">
          <h4>
            Total Cases and Deaths <span>as of 04/13/16</span>
          </h4>
          <img src={imgEbolaMap} alt="Chart of Ebola cases and deaths" />
        </div>
      </div>

      <div className="content-section">
        <h3>Drivers of Deforestation in West Africa</h3>
        <p>
          Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem
          ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate
          iaculis turpis sed dignissim.
        </p>

        <IconBlurb
          title="Smallholder farming"
          text="Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate iaculis turpis sed dignissim."
          imgSrc={imgFarming}
          imgAlt="Smallholder farming icon"
        />
        <IconBlurb
          title="Mining operations"
          text="Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate iaculis turpis sed dignissim."
          imgSrc={imgMining}
          imgAlt="Mining operations icon"
        />
        <IconBlurb
          title="Small-scale timber extraction"
          text="Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate iaculis turpis sed dignissim."
          imgSrc={imgTimber}
          imgAlt="Small-scale timber extraction icon"
        />
        <IconBlurb
          title="Fuelwood and charcoal"
          text="Aenean eleifend quam commodo neque cursus porta. Donec sit amet lorem ac dolor tincidunt rhoncus id ultrices augue. Suspendisse vulputate iaculis turpis sed dignissim."
          imgSrc={imgFuelwood}
          imgAlt="Fuelwood and charcoal icon"
        />
      </div>

      <div className="content-section">
        <h3>What WWF is Doing</h3>
        <p>
          Semper fames aliquet senectus vulputate porttitor. Tristique lectus
          purus quis sagittis nulla et vitae. Adipiscing sollicitudin lectus
          eget at ut mattis tortor. Proin lectus massa amet est, in dui lectus
          feugiat velit. Parturient eu sed convallis elementum, tempus tincidunt
          nullam. Venenatis amet aliquet auctor sed purus eget. Sociis hac in
          venenatis felis, lorem sollicitudin vulputate. Tristique adipiscing
          massa sed faucibus quam aenean pretium quis. Nisi, faucibus etiam
          faucibus vulputate blandit. At amet arcu neque dignissim a eu dis
          aliquam. Nunc id neque, vitae at tempus. Placerat justo, ut arcu quis.
          Enim fusce sit ut eu, parturient.
        </p>
      </div>
    </div>
  );
}

export default MalariaPage;
