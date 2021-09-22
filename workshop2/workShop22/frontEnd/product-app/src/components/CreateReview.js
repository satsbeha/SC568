export default function CreateReview(props) {
  return (
    <form className="detail" onSubmit={props.submitButtonHandler}>
      <div className="col-sm-8">
        <label>
          <b>Title</b>
        </label>
        <br />
        <select
          name="title"
          className="comment"
          value={props.title}
          onChange={props.onChangeInput}
          style={{ height: "35px", width: "300px" }}
          required
        >
          <option value="None">None</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Bad">Bad</option>
        </select>
      </div>
      <div className=" form-group row col-sm-4 ">
        <label>
          <b>Comment</b>
        </label>
        <textarea
          type="textarea"
          className="form-control"
          name="comment"
          value={props.comment}
          style={{ height: "150px", width: "500px" }}
          onChange={props.onChangeInput}
          required
        ></textarea>
      </div>
      <br />

      <button className="btn btn-success" >
        submit
      </button>
    </form>
  );
}
