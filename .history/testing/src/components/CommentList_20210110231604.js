import React from 'react';

class CommentList extends React.Component {

    renderComments = () => {
        return this.props.comments.map((comment) => {
            return <li key={comment}>{comment}</li>
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

export default CommentList;