import React from 'react';
import './Login.css';
import { Button, Modal, Card, CardHeader, CardBody, CardFooter, Input, Form, FormGroup, Label } from 'reactstrap';
import API from "../../utils/API";

class Login extends React.Component {
    state={
        username:"",
        password:""
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();  
        if (this.state.username && this.state.password) {
            const Data={
                username: this.state.username,
                password: this.state.password
            }
            API.loginUser(Data)
                .then(res => {
                    this.props.toggle();                                        
                })
                .catch(err => {
                    console.log(err);
                    alert("Invalid username and/or Password! Please Try Again")
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
                    <Button color="secondary" onClick={this.props.toggle}>Register</Button>
                    {' '}
                </CardFooter>
                </Card>
            </Modal>
        </div>
    );
}
}

export default Login;