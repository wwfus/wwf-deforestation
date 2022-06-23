import './Blurb.css';

const Blurb = (props) => {
  return (
    <div className='blurb'>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <p>
        <span>{props.title}</span> {props.text}
      </p>
    </div>
  );
}

export default Blurb;
