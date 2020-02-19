import React from 'react'

export const SingleForm = props => {
    return (
        <form onSubmit={props.submit}>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                onClick={props.modalOpen}
                name={props.name}
                type={props.type}
            ></input>
        </form>
    )
}

// {function () {
//     this.setState({ showPokeSearch: "open" });
// }.bind(this)}