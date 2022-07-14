import React, { Component } from "react";

function ItemListContainer(props) {
    return (
        <div>
            <br />
            <h3>{props.msg}</h3>
        </div>
    )
}

/* class ItemListContainer extends Component {
    render() {
        return (
            <div>
                <br />
                <h3>{this.props.msg}</h3>
            </div>
        )
    }
} */

export default ItemListContainer