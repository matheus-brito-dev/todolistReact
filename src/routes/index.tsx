import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Tarefa from '../pages/Tarefa';
import Listagem from '../pages/Listagem';



const Routes: React.FC = () =>{

    return(
        <Switch>
            <Route path="/" exact component={Tarefa}/>
            <Route path="/listagem" component={Listagem}/>
        </Switch>
            
            
      
    );
}

export default Routes;


