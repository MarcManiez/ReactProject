const ActivityResult = (props) => (
  <div onClick={() => {props.handleActivityClick(props.area)}} className="col-xs-4 activity-result">
    <p>{props.area.name}</p>
    <p>{props.area.activities[0].activity_type_name}</p>
    <p>Rating: {props.area.activities[0].rating}</p>
  </div>
);