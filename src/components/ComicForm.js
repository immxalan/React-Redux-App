import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

const ComicForm = props => {
    
    const handleGetData = e => {
        e.preventDefault();
            props.getData();
    };
    return(
        <>
        {props.isFetchingData ? (<div>Joke Loading!</div>) : (<button onClick={handleGetData}> Give me a Joke </button>)}
        </>
        )
    }

    const mapStateToProps = state => {
        return {
            isFetchingData: state.isFetchingData
        }
    }
    export default connect (mapStateToProps, { getData })(ComicForm)