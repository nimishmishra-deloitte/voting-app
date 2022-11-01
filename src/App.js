import React,{Fragment} from "react";
import Header from "./components/layout/header";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import SidePanel from "./components/layout/sidepanel";
const App=()=>{
    return(
        <Fragment>
          <Header></Header>
          <SidePanel></SidePanel>
        </Fragment>
    )
}
export default App;
