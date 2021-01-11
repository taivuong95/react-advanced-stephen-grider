import React from 'react';
import { connect } from 'react-redux';


export default (ChildComponent) => {

    class ComposedComponent extends React.Component {
        componentDidMount() {
            this.shouldNativeAway();
        }

        componentDidUpdate() {
            this.shouldNativeAway();
        }

        shouldNativeAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }
        render() {
            return <ChildComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth }
    }

    return connect(mapStateToProps)(ComposedComponent)
};


// Imagin we are in CommentBox.js
