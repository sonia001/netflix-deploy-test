import React from 'react';
import Layout from "./Layout";
import { Switch, Route} from 'react-router-dom';
import Info from "./Info"
import Genre from "./Components/Genre";
const App=()=>{

return(
  <>
  <Switch>
    <Route exact path ="/" component={Layout}/>
    <Route exact path ="/info/:id" component={Info}/>
    <Route exact path ="/genre/:id" component={Genre}/>
      </Switch>
  </>
);
}
export default App;
