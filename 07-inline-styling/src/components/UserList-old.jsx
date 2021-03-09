import React, { Component } from 'react'
import axios from 'axios'

export default class UserList extends Component {

    constructor(props) {
        console.log("constructor UserList")
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount UserList")
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            res=> this.setState({users: res.data})
        )
    }

    componentDidUpdate() {
        console.log("componentDidUpdate UserList")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount UserList")
    }


    render() {
        console.log("render UserList")
        return (
            <div>
                <ul>
                    {
                        this.state.users.map(
                            i => <li key={i.id}>{i.name}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

