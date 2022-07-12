import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLeader({leader}) {
    return (
       <div key={leader.id} className="col-12 mt-2">
          <Media tag="li">
             <Media left middle>
                <span class="d-flex mr-5 img-thumbnail">
                    <Media object src={leader.image} alt={leader.name} />
                </span>
             </Media>
             <Media body className="ml-0">
                <Media heading><h4 class="text-info">{leader.name}</h4></Media>
                <h6 class="text-secondary">{leader.designation}</h6>
                <p class="text-dark text-justify">{leader.description}</p>
             </Media>
          </Media>
       </div>
    );
}

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            //<p>Leader {leader.name}</p>
            <RenderLeader leader={leader} />
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h2 class="mb-4 text-secondary">About Us</h2>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-7">
                    <h2 class="mb-4 text-secondary">Our History</h2>
                    <p class="text-dark text-justify">Started in 2010, <em>Ristorante con Fusion</em> quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p class="text-dark text-justify">The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, <em>Mr. Peter Pan</em>, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-info text-light"><h5>Facts At a Glance</h5></CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6 text-secondary">Started</dt>
                                <dd className="col-6 text-dark">3 Feb. 2013</dd>
                                <dt className="col-6 text-secondary">Major Stake Holder</dt>
                                <dd className="col-6 text-dark">HK Fine Foods Inc.</dd>
                                <dt className="col-6 text-secondary">Last Year's Turnover</dt>
                                <dd className="col-6 text-dark">$1,250,375</dd>
                                <dt className="col-6 text-secondary">Employees</dt>
                                <dd className="col-6 text-dark">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <h5 className="mb-1 text-info">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</h5>
                                <footer className="blockquote-footer text-secondary">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2 class="mb-4 text-secondary">Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    