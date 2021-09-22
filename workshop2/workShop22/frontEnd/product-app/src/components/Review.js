function Review(props) {
  return (
    <div className="detail">
      <div>
        <b>Title :</b>
        {props.title}
      </div>
      <div>
        <b>Comments :</b>
        {props.comment}
      </div>
    </div>
  );
}
export default Review;
