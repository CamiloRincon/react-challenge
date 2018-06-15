import React from 'react';
import full from '../../images/full.png';
import empty from '../../images/empty.png';
import {PropTypes} from 'prop-types';

class Player extends React.Component {

    render() {
        return (
        <div>
            <img alt="shirt" src={this.props.isActive ? full : empty}/>
        </div>
        );
    }
}

Player.propTypes = {
    isActive: PropTypes.boolean
};

export default Player;
