import { useState } from "react";

function NavTab(props) {
  const [currentNavTab, setNavTab] = useState(0);

  // use react state to capture tab clicks and display the appropriate content
  // function clickHandler() {
  //     console.log('there was a click!');
  //     console.log(props.title);
  // }

  return (
    <button className="nav-tab" onClick={props.onNav}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <span>{props.title}</span>
    </button>
  );
}

export default NavTab;
