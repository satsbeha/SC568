import React from "react";

function Books(props) {
  return (
    <React.Fragment>
      <tr class="table">
        <td>{props.ISBN}</td>
        <td>{props.bookTitle}</td>
        <td>{props.publisher}</td>
        <td>{props.publishedDate}</td>
        <td>
          <button type="button" class="btn btn-danger" 
          onClick={props.deleteBook}>
            delete
          </button>
          <button type="button" class="btn btn-warning"
          onClick={props.updateButtonHandler}>
            update
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
}
export default Books;
