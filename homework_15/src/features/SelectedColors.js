import React from "react";
import ColorThumbnail from "./ColorThumbnail";

class SelectedColors extends React.Component {
    render() {
        let thumbnail;
        if (this.props.selected.length != 0) {
            thumbnail = this.props.selected.map( e => {
                return (
                    <ColorThumbnail
                        color={e.color} 
                        id={e.id} 
                        tags={e.tags}
                        moveTarget={this.props.moveTarget}
                    />
                )
            })
        } else {
            return (
                <div className="thumbnail_container">
                    <div className="thumbnail grey"></div>
                    <div className="thumbnail lightpurple"></div>
                    <div className="thumbnail purple"></div>
                </div>
            )
        }
        
        return (
            <div className="thumbnail_container">
                {thumbnail}
            </div>
        )
    }
}

export default SelectedColors;