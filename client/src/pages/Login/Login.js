import React from 'react';
import './Login.css';
import { Button, Modal, Card, CardHeader, CardBody, CardFooter, Input, Form, FormGroup, Label } from 'reactstrap';
import {authenticate} from "../../libs/authenticate"
import Registration from "../Registration"

class Login extends React.Component {
    state={
        username:"",
        password:"",
        regmodalisOpen:false
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    toggle = () => {    
        this.setState({
            regmodalisOpen: !this.state.regmodalisOpen,
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();  
        if (this.state.username && this.state.password) {
            const username= this.state.username;
            const password= this.state.password;
            authenticate(username, password)
                .then(res => {
                    this.props.toggle();                                    
                })
                .catch(err => {
                    console.log(err);
                    alert("Invalid username and/or Password! Please Try Again");
                });
        }
    };
    

    render () {
    return (
        <div>
            <Modal isOpen={this.props.open} toggle={this.props.toggle} className={this.props.className}>
            <Card className="mcomp">
                <CardHeader>
                    <h3 className="text-center">Please Login</h3>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={this.handleFormSubmit}>
                        <FormGroup>
                            <Label for="username">User Name</Label>
                            <Input 
                            name="username" 
                            placeholder="User Name" 
                            id="username"
                            onChange={this.handleInputChange}
                            aria-label="textbox for username input" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="upassword">Password</Label>
                            <Input name="password"
                             placeholder="Password" 
                             id="upassword" 
                             type='password'
                             onChange={this.handleInputChange}
                             aria-label="textbox for user password input" />
                        </FormGroup>
                        <Button color="primary" type="submit" id="SubBtn" >Submit</Button>
                    </Form>
                </CardBody>
                <CardFooter className="d-flex justify-content-between">
                <span> Not a CrankHead yet? Become One today...</span>
                    <Button color="secondary" onClick={this.toggle}>Register</Button>           
                </CardFooter>
                </Card>
            </Modal>
            <Registration toggle={this.toggle} open={this.state.regmodalisOpen}/>
        </div>
    );
}
}

export default Login;