import React from "react";

class Counter extends React.Component {
    render() {
        let count = this.props.origin.length;
        return (
            <p className="counter">
                Colors: {count}
            </p>
        )
    }
}

export default Counter;