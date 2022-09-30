import "./CountryTab.css";

const CountryTab = (props) => {
  const clickHandler = () => {
    props.onCountryClick(props.type); // pass the state up to Page
  };

  return (
    <div className="country-tab-wrapper">
      <button
        className={
          props.activeCountry === props.type
            ? "country-tab active"
            : "country-tab"
        }
        onClick={clickHandler}
      >
        {props.name}
      </button>
    </div>
  );
};

export default CountryTab;
