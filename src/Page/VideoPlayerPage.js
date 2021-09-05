import React from 'react'
import Navbar from '../Components/Navbar'
import Prism from "prismjs"
import "./css/prism.css";


export default function VideoPlayerPage(props) {

    const {id,title,channelName,icon,views,uploaded,url} = (props.location.state)

 
    return (
        <>
        <Navbar/>
        {/* <h1>{title}</h1> */}
        

        <div style={{marginTop:80,display:'flex',justifyContent:"center"}}>
           
 
            <iframe width="853" height="400" src={"https://www.youtube.com/embed/" + id}  frameBorder="0" allow="accelerometer autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      
        </div>

        <div style={{textAlign:"center"}}>
        <h5 style={{marginTop:20}}>{title}</h5>
        </div>

        <div style={{display:"flex",flexDirection:"row",marginLeft:379,marginTop:10}}>
        <p>{views} Views </p>
        <p style={{marginLeft:20}}>{uploaded}</p>
        <p style={{marginLeft:40,cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal">Share</p>
        </div>

{/* modal start */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Share Your Video</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p>{url}</p>
      </div>
      <div class="modal-footer">
        <button onClick={()=>{navigator.clipboard.writeText(url)}} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Copy To Clipboard</button>
      </div>
    </div>
  </div>
</div>


        <hr style={{width:850,marginLeft:325,marginTop:1}}/>
        

        <div style={{display:"flex",flexDirection:"row",marginLeft:350}}>
        <img style={{width:60,height:60,borderRadius:50}} src={icon} alt="icon1"/>
        <p style={{fontSize:20,marginTop:16,marginLeft:20}}>{channelName}</p>
        </div>
        </>
    )
}
