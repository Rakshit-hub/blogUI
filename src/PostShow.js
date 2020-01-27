import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            post:{},
            comments:[], 
            
            user:{}
            
        }
    }
    componentDidMount(){
        const id1=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id1}`)
        .then((respone)=>{
            const post=respone.data
            this.setState({post})
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((response)=>{
                const user=response.data
                this.setState({post,user})
            })
        })
        const id2=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id2}`)
        .then((respone)=>{
            const comments=respone.data
            this.setState({comments})
        })
    }
    render(){
        return(
            <div>
                 <h1>User Name-{this.state.user.name}</h1>
                <h2>TITLE--{this.state.post.title}</h2>
                 <h3>BODY--{this.state.post.body}</h3>
                 <hr/>
                 <h4>COMMENTS</h4>
                 {this.state.comments.map((Comment)=>{
                 return <li>{Comment.body}</li>
                 })}
                 <hr/>
                    <p>More about author-<Link to ={`/users/${this.state.user.id}`}>{this.state.user.name}</Link></p>
            </div>
        )
    }
}
export default PostShow