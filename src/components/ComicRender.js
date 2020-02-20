import React from "react";
import { connect } from "react-redux";

const ComicRender = props => {
    return(
        <>
    {props.error ? (<div className="error"> {props.error}</div>) : (
        <div>
    <h3> Category: {props.data.category}</h3>
    <h3>{props.data.setup}</h3>
    <h3>{props.data.delivery}</h3>
    </div>
    )}
        </>
    )
}
const mapStateToProps = state => {
    return{
        data: state.data,
        error: state.error
    }
}

export default connect (mapStateToProps, {})(ComicRender)