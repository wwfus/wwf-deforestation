import "./DriverTab.css";

const DriverTab = (props) => {
  const tabContent =
    props.type === "primary" ? "PRIMARY DRIVERS" : "SECONDARY DRIVERS";
  
  const clickHandler = () => {
    props.onTabClick(props.type); // pass the state up to Page
  };

  return (
    <button
      className={props.activeTab === props.type ? "driver-tab active" : "driver-tab"}
      onClick={clickHandler}
    >
      {tabContent}
    </button>
  );
};

export default DriverTab;
