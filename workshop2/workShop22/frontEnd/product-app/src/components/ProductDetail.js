export default function ProductDetail(props) {
  return (
    <div className="detail">
      <div>
        <strong>Name:</strong> {props.name}
      </div>
      <div>
        <b>price:</b>
        {props.price}
      </div>
      <div>
        <b>model:</b>
        {props.model}
      </div>
      <div>
        <b>Manufacturer :</b> {props.manufacturer}
      </div>
      <div>
        <b>Description:</b> {props.description}
      </div>
    </div>
  );
}
