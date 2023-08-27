import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // props.children is a reserved React prop
  return <div className={classes}>{props.children}</div>;
};

export default Card;
