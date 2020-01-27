import React from 'react'
import axios from 'axios'
import{ Link} from 'react-router-dom'
class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user=response.data
            this.setState({user})
        })
        .catch((err)=>{
            alert(err)
        })
        const id1=this.props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id1}`)
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
        })
        .catch((err)=>{
            alert(err)
        })

    }
    

    render(){
        return(
            <div>
            
             <h1>User Name-{this.state.user.name}</h1>
             <h2>Posts Written by User</h2>
            <ul>
                         {this.state.posts.map((post)=>{
                         return <li><Link to={`/post/${post.id}`}>{post.title}</Link></li>
                     })}
            </ul>

                
            </div>
        )
    }
}
export default UserShow