import React from "react";
import ColorContainers from "./ColorContainers";

class ColorList extends React.Component {
    render() {
        let item,
            targetArray = (this.props.filtered.length > 0) ? this.props.filtered : this.props.origin;
        if (this.props.origin.length > 0) {
            item = targetArray.map( e => {
            return (
                <ColorContainers 
                    color={e.color} 
                    key={e.id + 100}
                    id={e.id} 
                    tags={e.tags}
                    moveTarget={this.props.moveTarget}
                    />
                )
            });
        } else {
            if (this.props.loaded) {
                return <h2 className="not_found">There are no colors found</h2>
            } else {
                return <h2 className="not_found">Loading...</h2>
            }
        }
        return (
            <div className="color_container flex_container">
                {item}
            </div>
        )
    }
}

export default ColorList;