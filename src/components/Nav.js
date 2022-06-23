import Tab from './Tab';

import './Nav.css';

const Nav = (props) => {
  const tabClickHandler = (id) => {
    props.onNavClick(id); // pass the state up to App
  }

  const navContent = props.navContent.map((tab) => (
    <Tab content={tab} key={tab.id} activeTab={props.activeTab} onTabClick={tabClickHandler} />
  ));

  return (
    <nav className='nav'>
      {navContent}
    </nav>
  );
};

export default Nav;
