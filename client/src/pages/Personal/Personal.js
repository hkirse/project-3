import React, { Component} from 'react';
import TrailCard from "../../components/TrailCard";
//import EventCard from "../../components/EventCard";
import Title from "../../components/Title";
import API from "../../utils/API";
import Jumbotron from '../../components/Jumbotron';
import Calendar from '../../components/Calendar';
import { Button, ButtonGroup, Card, CardHeader, CardTitle, CardText, Collapse, CardBody, Container, Row, Col } from 'reactstrap';
import './Personal.css'
import { getUserData } from "../../libs/authenticate"
import {Doughnut} from 'react-chartjs-2';

const data1 = {
	labels: [
		'green',
        'greenBlue',
        'blue',
        'blueBlack',
        'black',
        'dblack'
	],
	datasets: [{
		data: [],
		backgroundColor: [
		'lightgreen',
		'darkgreen',
        'blue',
        'darkblue',
        'orange',
        'red'
		],
		hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#800000',
        '#05D9F3',
        '#000000'
		]
	}]
};

const data2 = {
	labels: [
		'<10',
        '10-12',
        '12-14',
        '14-16',
        '16-18',
        '>18'
	],
	datasets: [{
		data: [],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#800000',
        '#05D9F3',
        '#000000'
		],
		hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#800000',
        '#05D9F3',
        '#000000'
		]
    }]
};

class Discover extends Component {
    state = {
        topbuttons:[
            {name: "profile",open: false},
            {name: "calendar",open: false},
            {name: "photos",open: false}],
        calendar: false,
        profile: false,
        events: [],
        trails: [],
        userInfo: {},
        files: []
    }

    componentDidMount() {
        this.getAllInfo()
    }

    getAllInfo = () => {
        const user = getUserData();       
        API.getSavedTrails(user._id).then(tr => {
            API.getSavedEvents(user._id).then(ev => {
                let P=[];
                ev.data.events.forEach(e=>{
                    let dt=e.time.split("T")
                    P.push({
                        title:e.name,
                        start:dt[0],
                        url:e.link
                    });
                })                
                this.setState({
                    userInfo: user,
                    trails: tr.data.trails,
                    events: P
                })
            })
        });
    }
    findD1=()=> {
        const difficulty=[];
        const difCounts=[];
        this.state.trails.map(e=>difficulty.push(e.difficulty))    
        const difObj = difficulty.reduce(function (acc, curr) {acc[curr] += 1;return acc;}, {'green':0,'greenBlue':0,'blue':0,'blueBlack':0,'dblack':0});                
        for (let p in difObj){difCounts.push(difObj[p])};        
        return difCounts
    }

    findD2=()=> {
        const length=[];
        const lencounts=[0,0,0,0,0,0];        
        this.state.trails.map(e=>length.push(Number(e.length)));
        length.forEach(e=> {
            if (e<10) {lencounts[0]++} 
            else if (e>=10 && e<12) {lencounts[1]++}
            else if (e>=12 && e<14) {lencounts[2]++}
            else if (e>=14 && e<16) {lencounts[3]++}
            else if (e>=16 && e<18) {lencounts[4]++}
            else if (e>=18) {lencounts[5]++}
        })
        return lencounts
    }

    toggle=(event)=>{
        data1.datasets[0].data=this.findD1();       
        data2.datasets[0].data=this.findD2();    
        const { name } = event.target;   
        const user = getUserData();   
        const L = this.state.topbuttons.map(e => {
            if (e.name===name){
                e.open=!e.open
            } else {
                e.open=false
            }
            return e
        })
        this.setState({
            topbuttons:L, 
            userInfo: user          
        })
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <ButtonGroup className="mb-2">
                        <Button outline color="warning" name="profile" onClick={this.toggle}> Profile </Button>
                        <Button outline color="warning" name="calendar" onClick={this.toggle}> Calendar </Button>
                    </ButtonGroup>
                    <Collapse isOpen={this.state.topbuttons[0].open}>
                        <Container>
                            <Row>
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Card className="PersonalCard">
                                        <CardHeader tag="h3">{this.state.userInfo.firstName}{' '}{this.state.userInfo.lastName}</CardHeader>
                                        <CardTitle>Contact</CardTitle> 
                                        <CardText>{this.state.userInfo.email}</CardText>
                                        <CardTitle tag="h3">Rides</CardTitle> 
                                        <Row className="mb-5">
                                            <Col sm="12" md={{ size: 6}}>
                                                <CardText tag="h3">Difficulty</CardText>
                                                <Doughnut data={data1} />
                                            </Col>
                                            <Col sm="12" md={{ size: 6}}>
                                                <CardText tag="h3">Length</CardText>
                                                <Doughnut data={data2} />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Collapse>
                    <Collapse isOpen={this.state.topbuttons[1].open}>
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
                                    key={trail._id}
                                    name={trail.name}
                                    image={trail.image}
                                    difficulty={trail.difficulty}
                                    location={trail.location}
                                    summary={trail.summary}
                                    length={trail.length}
                                    stars={Number(trail.rating)}
                                    condition={trail.conditionStatus}
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
