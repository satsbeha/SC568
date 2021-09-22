export default function NewMovie(props) {
  return (
    <div>
      <div>
        Name:
        <input
          type="text"
          value={props.name}
          onChange={props.nameChanged}
        ></input>
      </div>
      <br />
      <div>
        Rating:
        <input
          type="text"
          value={props.rating}
          onChange={props.ratingChanged}
        ></input>
      </div>
      <br />
      <div>
        Genre:
        <input
          type="text"
          value={props.genre}
          onChange={props.genreChanged}
        ></input>
      </div>
      <br />
      <div>
        director:
        <input
          type="text"
          value={props.directorName}
          onChange={props.directorNameChanged}
        ></input>
      </div>
      <br />
      <div>
        Year Release:
        <input
          type="Date"
          value={props.yearRelease}
          onChange={props.yearReleaseChanged}
        ></input>
      </div>
      <br />
      <div>
        Description:
        <input
          type="text"
          value={props.Description}
          onChange={props.descriptionChanged}
        ></input>
      </div>
      <br />
      <button onClick={props.saveMovie}>save</button>
      <br />
      <br />
    </div>
  )
}
