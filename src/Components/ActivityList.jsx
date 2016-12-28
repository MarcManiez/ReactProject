const ActivityList = (props) => (
 !props.areas ? <div>Area loading...</div> :
  <div className="container activity-list">
    <div className="row text-center">
      {props.areas.map( (area)=> {
         return <ActivityResult handleActivityClick={props.handleActivityClick} area={area}/>
      })}
    </div>
  </div>
);