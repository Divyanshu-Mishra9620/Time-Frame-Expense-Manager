import "./Card.css";
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
  /**
   * value of the children prop will always be the content b/n the
   * opening and closing tag of custom component
   */
}
export default Card;
