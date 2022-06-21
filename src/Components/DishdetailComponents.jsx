import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({ dish }) {
    console.log("dish is.." + JSON.stringify(dish))
    if (dish != null) {
        return (
            <div>
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments }) {
    if (comments != null) {
        console.log("dish is " + comments)
        const commentsList = comments.map((comment) => {
            return (
                <ul>
                    <li className="no-bullet">{comment.comment}</li>
                    <li className="no-bullet">--{comment.author}, {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(comment.date))}</li>
                </ul>
            )
        });
        return (
            <div>
                {commentsList}
            </div>
        )

    }

    else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    const selectedDish = props.dish;
    let c;
    if (props.dish != null) {
        c = props.dish.comments;
        console.log("value of c is:" + JSON.stringify(c))
    } else {
        c = null;
    }
    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {/* {this.renderDish(this.props.dish)} */}
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish} />
            </div>
            {/* <div className="col-12 col-md-5 m-1">
                            {this.renderComments(c)}
                        </div> */}
        </div>
    )


}




export default DishDetail;