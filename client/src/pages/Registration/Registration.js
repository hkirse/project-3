import React from 'react';
import './Registration.css';
import { Button, Modal, Card, CardHeader, CardBody, Input, Form, FormGroup, FormFeedback, Label } from 'reactstrap';
import API from '../../utils/API'

class Registration extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        nusername: "",
        npassword: "",
        cpassword: "",
        btnActive: false,
        uninValid: false,
        ueinValid: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;       
        this.setState({
            [name]: value
        },this.checkAll);        
    };

    checkAll = () => {
        const allinput=this.state.firstname.length * this.state.lastname.length *
        this.state.email.length * this.state.npassword.length * this.state.nusername.length;
        if ( allinput > 0 &&
            this.state.npassword === this.state.cpassword) {
            if (!this.state.ueinValid && !this.state.uninValid) {
                this.setState({
                    btnActive: true
                });
            } else {
                this.setState({
                    btnActive: false
                });
            }            
        } else {
            this.setState({
                btnActive: false
            });
        }
    }

    checkReg = event => {
        const { name, value } = event.target;
        let field = "";
        if (name === "email") {
            field = "email";
        } else {
            field = "username";
        }
        const Data = {
            params: {
                field: field,
                value: value
            }
        }
        API.checkRegister(Data).then(res => {
            console.log(res.data.email)
            if (res.data.email === this.state.email) {
                this.setState({
                    email: "",
                    uninValid: false,
                    ueinValid: true,
                    btnActive: false
                })
            } else if (res.data.username === this.state.nusername) {
                this.setState({
                    nusername: "",
                    uninValid: true,
                    ueinValid: false,
                    btnActive: false
                })
            } else {
                this.setState({
                    uninValid: false,
                    ueinValid: false
                })
            }
        })
            .catch(err => {
                console.log(err);
                alert("Server connection problem! Try again Later.")
            });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const Data = {
            username: this.state.nusername,
            password: this.state.npassword,
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            email: this.state.email
        }
        API.registerUser(Data).then(res => {
            this.props.toggle();
        })
            .catch(err => {
                console.log(err);
                alert("Invalid username and/or Password! Please Try Again")
            });
    };

    render() {
        return (
            <div>
                <Modal isOpen={this.props.open} toggle={this.props.toggle} className={this.props.className}>
                    <Card className="mcomp2">
                        <CardHeader>
                            <h3 className="text-center">Provide the Required Information</h3>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={this.handleFormSubmit}>
                                <FormGroup>
                                    <Label for="firstname">First Name</Label>
                                    <Input
                                        name="firstname"
                                        placeholder="First Name"
                                        id="firstname"
                                        onChange={this.handleInputChange}
                                        aria-label="textbox for username input" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastname">Last Name</Label>
                                    <Input
                                        name="lastname"
                                        placeholder="Last Name"
                                        id="username"
                                        onChange={this.handleInputChange}
                                        aria-label="textbox for username input" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="nusername">Enter user name</Label>
                                    <Input invalid={this.state.uninValid ? true : false}
                                        name="nusername"
                                        placeholder="User Name"
                                        id="nusername"
                                        onChange={this.handleInputChange}
                                        aria-label="textbox for username input"
                                        onKeyUp={this.checkReg} />
                                    <FormFeedback tooltip> The user name was already taken. Please choose another one</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Enter Email</Label>
                                    <Input invalid={this.state.ueinValid ? true : false}
                                        name="email"
                                        placeholder="Email"
                                        id="email"
                                        onChange={this.handleInputChange}
                                        aria-label="textbox for email input"
                                        onKeyUp={this.checkReg}
                                    />
                                    <FormFeedback tooltip>This user is already a crankhead. Please login...</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="unpassword">Password</Label>
                                    <Input name="npassword"
                                        placeholder="Password"
                                        id="unpassword"
                                        type='password'
                                        onChange={this.handleInputChange}
                                        aria-label="textbox for user password input" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="uncpassword">Confirm Password</Label>
                                    <Input invalid={this.state.npassword === this.state.cpassword ? false : true} 
                                        name="cpassword"
                                        placeholder="Confirm Password"
                                        id="uncpassword"
                                        type='password'
                                        onChange={this.handleInputChange}
                                        aria-label="textbox for user password input" />
                                    <FormFeedback tooltip>Passwords do not match.</FormFeedback>
                                </FormGroup>
                                <Button color="primary" type="submit" id="SubBtn" disabled={!this.state.btnActive}>Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Modal>
            </div>
        );
    }
}

export default Registration;