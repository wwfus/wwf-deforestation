function IconBlurb(props) {
  return (
    <div className='icon-blurb'>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <p>
        <span>{props.title}</span> {props.text}
      </p>
    </div>
  );
}

export default IconBlurb;
