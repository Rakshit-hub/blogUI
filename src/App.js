import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import UserShow from './UserShow'
import PostShow from './PostShow'
import Posts from './Post'


function App (props){
    return(
        <BrowserRouter>
         <div>
             <h1><center>BLOG UI</center></h1>
            <Link to ='/' > Home| </Link>
            <Link to ='/users' > Users| </Link>
            <Link to ='/post' >Post </Link>
            

            <Route path='/' component={Home} exact={true}/>
            <Route path='/post' component={Posts} exact={true}/>
            <Route path='/users' component={Users} exact={true}/>
            <Route path='/users/:id' component={UserShow}/>
            <Route path='/post/:id' component={PostShow}/>
            <Route path='/posts/:id' component={PostShow}/>
            
            

            
        </div>
        </BrowserRouter>
       
        
    )
}
export default App