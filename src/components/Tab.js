import "./Tab.css";

const Tab = (props) => {
  const clickHandler = () => {
    props.onTabClick(props.content.id); // pass the state up to Nav
  };

  return (
    <div className="tab-wrapper">
      <button
        className={
          props.activeTab === props.content.id ? "nav__tab active" : "nav__tab"
        }
        onClick={clickHandler}
      >
        <img src={props.content.imgSrc} alt={props.content.imgAlt} />
        <span>{props.content.title}</span>
      </button>
    </div>
  );
};

export default Tab;
