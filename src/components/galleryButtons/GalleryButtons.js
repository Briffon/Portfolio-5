import React from 'react'

export const GalleryButtons = props => {
    return (
        <div style={styles.container}>
            <button onClick={props.previous}>></button>
            <input onClick={props.next} type="button" value="<"></input>
        </div>
    )
}

const styles = {
    container: {
    }
};
