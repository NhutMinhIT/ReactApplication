import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";


export default class Dishestail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectCommets: null
        };
    }
    onDishComments(comments) {
        this.setState({ SelectCommets: comments })

    }
    renderComments(comments) {
        return (
            <div className="ml-5">
                <h1 className=" text-primary">Comments</h1>
                {comments.map((commentIndex) => {
                    return (
                        <div key={commentIndex.id}>


                            <div>
                                <p>{commentIndex.comment}</p>
                                <p>-- {commentIndex.author},
                                    &nbsp;
                                    {commentIndex.date}
                                </p>
                            </div>

                        </div>
                    )
                }
                )}
            </div>
        );
    }
    renderDish(dish) {
        // this.onDishComment(dish.comments);

        return (
            <div key={dish.id} className="col-md-5 mt-1 ">
                <Card>
                    <CardImg
                        width="100%"
                        src={dish.image}
                        className="flex-grow-2 img-responsive"
                    />
                    <CardBody>
                        <CardTitle className="col-md-12">

                            <h3>{dish.name}</h3>
                        </CardTitle>
                        <CardText className="col-md-12">

                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>





            </div>
        )


    }


    render() {

        if (this.props.selectDish != null) {
            return (
                <div className="row">
                    {this.renderDish(this.props.selectDish)}
                    {this.renderComments(this.props.selectDish.comments)}
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }



    }
}