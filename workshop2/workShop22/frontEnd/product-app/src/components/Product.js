import React from "react";

function Products(props) {
  return (
    <React.Fragment>
      <tr class="table">
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            onClick={props.deleteBook}
          >
            delete
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={props.updateButtonHandler}
          >
            update
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={props.detailButtonHandler}
          >
            Detail
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
}
export default Products;
