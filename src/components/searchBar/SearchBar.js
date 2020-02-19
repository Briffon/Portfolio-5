import React from 'react'

export const SearchBar = props => {
    return (
        <form onSubmit={props.submit} style={styles.container}>
            <input name={props.name} onChange={props.onChange} placeholder={props.placeholder}></input>
            <div className={props.nFound}> Not Found</div>
        </form>
    )
}

const styles = {
    container: {
    }
};