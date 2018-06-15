import React from 'react';
import { Modal, Player } from '../Components/index';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.showModal = this.showModal.bind(this);
      this.state = {
          openModal: false
      };
  }

  showModal(event) {
    this.setState(prevState => {
      return {
        openModal: !prevState.openModal
      }
    });
  }

  render() {
    const showShirt = false;
    return (
      <React.Fragment>
        <button className="modal--button" onClick={this.showModal}/>
        <Modal isOpen={this.state.openModal} onModalToggle={this.showModal} />
        <div className="field">
        <Player isActive={showShirt}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
