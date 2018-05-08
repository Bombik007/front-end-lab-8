import React from "react";

class ColorThumbnail extends React.Component {
    render() {
        return (
            <div 
                className={`thumbnail flex_item item${this.props.classNumber}`} 
                style={{background: this.props.color}}
                id={this.props.id}>
                        <i className="material-icons close_button"
                            onClick={() => this.props.moveTarget(this.props.id, 0, 1)}>
                            clear
                        </i>
            </div>
        )
    }
}

export default ColorThumbnail;