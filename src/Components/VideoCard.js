import React,{useState} from "react";
import {Link} from "react-router-dom";
import VideoPlayerPage from "../Page/VideoPlayerPage";

export default function VideoCard({ thumbnails,url,title,icon,channelName,views,uploaded,duration,id}) {


 
  function convert(value)

{
    if(value>=1000000)
    {
        value=(value/1000000)+"M"
    }
    else if(value>=1000)
    {
        value=(value/1000)+"K";
    }
    return value;
   
}

const download = () =>{
 <VideoPlayerPage/>
}
 
  
  return (
    
    <div>
      <div className="card" style={{width: "22rem",marginTop:20,marginLeft:20   }}>
          <div style={{float:"left",position:"absolute",right:10,bottom:"55%",zIndex:1000,width:70,borderRadius:10,background:"#000",color:"#fff",fontWeight:"bold",textAlign:"center"}}>{duration}</div>
        <img className="card-img-top" src={thumbnails} alt="Card image cap" />
        <div className="card-body">
            <div style={{display:"flex",flexDirection:"row"}}>
            <img src={icon} alt="icon" style={{width:60,height:60,borderRadius:50}}/>   
          <p className="card-title" style={{marginLeft:15,textOverflow:"ellipsis"}}>{title.slice(0,40)} ....</p>
          </div>
          <p style={{marginLeft:75}} className="card-text">
           {channelName}
          </p>
          <div style={{display:"flex",flexDirection:"row"}}>
              <p style={{marginLeft:55}}>{convert(views.toFixed(2))} Views</p>
              <p style={{marginLeft:20}}>{uploaded}</p>
              

          </div>
          <Link to={{
            pathname:"/player",
            state:{id:id,title:title,channelName:channelName,icon:icon,views:views,uploaded:uploaded,url:url}
          }} className="btn btn-primary">
        Watch Video
          </Link>
          <button onClick={download} style={{marginLeft:20}}className="btn btn-primary">Download Video</button>
        </div>
      </div>
    </div>
  );
}
