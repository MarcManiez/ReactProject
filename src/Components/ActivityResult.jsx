const ActivityResult = ({handleActivityClick, area}) => (
  <div onClick={() => {handleActivityClick(area)}} className="col-xs-4 activity-result">
    <p>{area.name}</p>
    <p>{area.activities[0].activity_type_name}</p>
    <p>Rating: {area.activities[0].rating}</p>
  </div>
);