import React from 'react';
import { PropTypes } from 'prop-types';
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.state = {
            isHovering: false
        };
    }

    handleMouseClick() {
        this.setState(this.toggleState);
    }

    toggleState(state) {
        return {
            isHovering: !state.isHovering
        };
    }

    render() {
        return (
            <div className="modal">
               <button className="modal--button" onClick={this.handleMouseClick}/>
                {
                this.state.isHovering &&
                <div className="modal--wrapper">
                    <div className="modal--wrapper-content">
                        <span onClick={this.handleMouseClick} className="modal--wrapper-close">&times;</span>
                        <p>{this.props.text}</p>
                    </div>
                </div>
                }
            </div>
        );
    }
}

Modal.propTypes = {
    text: PropTypes.string
};

export default Modal;
