const ActivityList = (props) => (
 !props.areas ? <div>Area loading...</div> :
  <div className="container activity-list">
    <div className="row text-center">
      {props.areas.map( (area)=>{
         return <ActivityResult area={area}/>
      })}
    </div>
  </div>
);


// var VideoList = (props) => (
//   <div className="video-list media">
//     {props.videos.map( (video)=>{
//       return <VideoListEntry onVideoClick= {props.onVideoClick} video={video}/>;
//     })}
//   </div>
// );