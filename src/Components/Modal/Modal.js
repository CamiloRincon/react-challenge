import React from 'react';
import { PropTypes } from 'prop-types';

class Modal extends React.Component {

    render() {
        const { isOpen, onModalToggle } = this.props;
        return (
            <div className="modal">
               {
                isOpen &&
                <div className="modal--wrapper" onClick={onModalToggle}>
                    <div className="modal--wrapper-content">
                        <h2>Goalkeepers</h2>
                        <ul className="modal__list">
                          <li>David Ospina</li>
                          <li>Camilo Vargas</li>
                          <li>Jose Fernando Cuadrado</li>
                        </ul>
                    </div>
                </div>
                }
            </div>
        );
    }
}

Modal.propTypes = {
    position: PropTypes.string
};

export default Modal;
