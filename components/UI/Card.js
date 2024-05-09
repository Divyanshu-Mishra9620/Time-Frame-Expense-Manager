import "./Card.css";
/** 
 * WRAPPER COMPONENT
 * to save a lot of duplication 
and allows to keep ur other components clean
*/
export default function Card(props) {
    const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
  /**
   * value of the children prop is the content between
    the opening and closing tags of custom component
   * As in expenseItem its the content b/n 
    <Card>......</card>
   */
}
