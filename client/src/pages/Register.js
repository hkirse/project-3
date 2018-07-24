import React from "react";
import { Input } from 'antd';

export default class Register extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        isAdmin: false,
    }

    onChange = (e) => {
        const value = e.target.checked === undefined ? e.target.value : e.target.checked;
        this.setState({
            [e.target.name]: value,
        })
    }
    render() {
        return (
            <div>
                <Input name = 'username' placeholder= 'Username' onChange = {e => this.onChange(e)} value={this.state.username} />
                <Input name = 'email' placeholder= 'Email' onChange = {e => this.onChange(e)} value={this.state.email} />
                <Input name = 'password' placeholder= 'Password' type='password' onChange = {e => this.onChange(e)} value={this.state.password} />
                


            </ div>
        );
    }
}