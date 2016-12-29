const ActivityDisplay = ({imageURL, currentActivity}) => (
  !currentActivity ? <div>Area loading...</div> :
  <div className='activity-display'>
    <h1 className='activity-title'>{currentActivity.activities[0].name + ', ' + currentActivity.state}</h1>
    <p className='activity-type'>{currentActivity.activities[0].activity_type_name}</p>
    <p className='activity-type'>{currentActivity.activities[0].description}</p>
    <img src={imageURL}/>
  </div>
);