export default function MoveDetail(props){
return (
    <div>
      <div>Director name : {props.directorName}</div>  
      <div>Year of release :{props.year}</div>  
      <div>Description:{props.description}</div>  
    </div>
)
}