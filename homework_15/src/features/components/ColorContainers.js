import React from "react";

class ColorContainer extends React.Component {
    render() {
        return (
            <div 
                className="thumbnail block_color" 
                style={{background: this.props.color}}
                id={this.props.id}>
                    <button 
                        onClick={() => this.props.moveTarget(this.props.id, 1, 0)}>
                     + Add 
                    </button>
            </div>
        )
    }
}

export default ColorContainer;