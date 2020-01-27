import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Users extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users/")
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        .catch((err)=>{
            alert(err)
        })
    }
   render(){
       return(
           <div class = 'jumbotron text-center'>
                <h1>Listing Users-{this.state.users.length}</h1>
               {this.state.users.map((user)=>{
               return<li><Link to ={`/users/${user.id}`}>{user.name}</Link></li>
               })}
           </div>
       )
   }
}
export default Users