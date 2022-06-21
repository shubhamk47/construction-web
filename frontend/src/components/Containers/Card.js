/* eslint-disable jsx-a11y/alt-text */
export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.thumbnail} />
      <h3>{props.title}</h3>
    </div>
  );
}
