import React from 'react';
import Modal from '../Components/Modal/Modal';



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
    return (
      <React.Fragment>
        <button className="modal--button" onClick={this.showModal}/>
        <Modal isOpen={this.state.openModal} onModalToggle={this.showModal} />
      </React.Fragment>
    );
  }
}

export default App;
