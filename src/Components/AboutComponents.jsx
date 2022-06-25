import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import './aboutus.css'

function About(props) {

    const leader = props.leaders.map((leaders) => {
        return (
            <p><RenderLeaderList leaders={leaders} /></p>
        );
    });
    function RenderLeaderList({ leaders }) {
        return (
            <Media className='row'>
                <Media left className="col-2">
                    <Media object src={process.env.PUBLIC_URL + leaders.image} alt={leaders.name} />
                </Media>
                <Media right body className="col-8 mb-3">
                    <Media heading>
                        {leaders.name}
                    </Media>
                    <Media body >
                        <Media className='mb-3'>
                            {leaders.designation}
                        </Media>
                        <Media>
                            {leaders.description}
                        </Media>
                    </Media>
                </Media>
            </Media>
        );
    }

    return (
        <div className="container  content">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-5 ">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-4">
                    <Card >
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody >
                            <dl className="row p-1 col-md-11">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-10">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <dt className="mb-0 ">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</dt>
                                <footer className="blockquote-footer pt-3">Yogi Berra,
                                    <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                        P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content m-3 ">
                <div className="col-12 mb-2">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leader}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    