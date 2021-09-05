import React from "react";
import Homepage from "./Page/Homepage"
import {BrowserRouter as Router , Route ,Switch} from "react-router-dom";
import VideoPlayerPage from "./Page/VideoPlayerPage";
import DownloadPage from "./Page/DownloadPage";
import NotFoundPage from "./Page/NotFoundPage";

function App() {
  return (
    <Router>
      <Switch>
   <Route exact path="/" component={Homepage}/>
   <Route path="/player"component={VideoPlayerPage}/>
   <Route path="/download"component={DownloadPage}/>
   <Route component={NotFoundPage}/>
   </Switch>
   </Router>
  );
}

export default App;
