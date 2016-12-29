const ActivityList = ({handleActivityClick, areas}) => (
  !areas ? <div>Area loading...</div> :
  console.log(areas[0].unique_id)
  <div className="container activity-list">
    <div className="row text-center">
      {areas.map( (area)=> <ActivityResult key={area.unique_id} handleActivityClick={handleActivityClick} area={area}/>)}
    </div>
  </div>
);