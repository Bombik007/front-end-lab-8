import React from "react";

class ColorThumbnail extends React.Component {
    render() {
        return (
            <div 
                className="thumbnail flex_item" 
                style={{background: this.props.color}}
                id={this.props.id}>
                    <button
                    onClick={() => this.props.moveToOrigin(this.props.id)}>
                        +
                    </button>
            </div>
        )
    }
}

export default ColorThumbnail;