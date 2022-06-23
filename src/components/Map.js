import './Map.css';

const Map = (props) => {
  return (
    <div className='map'>
      <div className='map__container'></div>
      <div className='map__overlay'>
        <div className='map__statistic'>52%</div>
        <div className='map__legend'>Map Legend</div>
      </div>
    </div>
  );
};

export default Map;
