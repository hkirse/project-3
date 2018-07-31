import React, { Component } from 'react';
import TrailCard from "../../components/TrailCard";
//import EventCard from "../../components/EventCard";
import Title from "../../components/Title";
import API from "../../utils/API";
import Jumbotron from '../../components/Jumbotron';
import Calendar from '../../components/Calendar';
import { Button, ButtonGroup, Card, Collapse, CardHeader, CardBody, CardFooter, Container, Row, Col } from 'reactstrap';
import './Personal.css'
import {getUserData} from "../../libs/authenticate"

class Discover extends Component {
        state = {
            calendar:false,
            events: [
                {
                    title: 'All Day Event',
                    start: '2018-08-01'
                },
                {
                    title: 'Long Event',
                    start: '2018-07-07',
                    end: '2018-07-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-07-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-07-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2018-07-11',
                    end: '2018-07-13'
                },
                {
                    title: 'Meeting',
                    start: '2018-07-12T10:30:00',
                    end: '2018-07-12T12:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2018-07-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2018-07-28'
                }
            ],
            trails: [],
            userInfo:{}
        }
    
    componentWillMount() {        
       this.getAllInfo()
        
    }

    getAllInfo = () => {
        const user=getUserData();
        const Events=API.getSavedEvents(user._id);
        const Trails=API.getSavedTrails(user._id);  
        this.setState({
            userInfo:user
        })
    }
    
    toggle = () => {
        this.setState({
            calendar: !this.state.calendar
        })
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <Jumbotron>
                    <ButtonGroup className="mb-2">
                    <Button outline color="warning"> Profile </Button>
                    <Button outline color="warning" onClick={this.toggle}> Calendar </Button>
                    <Button outline color="warning" onClick={this.toggle}> Photos </Button>
                    </ButtonGroup>
                    <Collapse isOpen={this.state.calendar}>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Card className="PersonalCard">
                                    <CardBody>
                                        <Calendar events={this.state.events} />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    </Collapse>
                </Jumbotron>
                <div className="container-fluid">
                    <Title>Your Favorites</Title>
                    <div className="row h-100">
                        <div className="card-columns mx-4">
                            {this.state.trails.map(trail => (
                                <TrailCard
                                    key={trail.id}
                                    name={trail.name}
                                    image={trail.imgMedium}
                                    difficulty={trail.difficulty}
                                    location={trail.location}
                                    summary={trail.summary}
                                    length={trail.length}
                                    stars={trail.stars}
                                    url={trail.url}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Discover;