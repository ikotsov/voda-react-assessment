import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .8)",
    zIndex: "2"
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "none",
    marginRight: "-50%",
    backgroundColor: "transparent",
    transform: "translate(-50%, -50%)"
  }
};

const inputStyles = {
  padding: "20px 10px",
  border: "none",
  borderBottom: "1px solid #fff",
  backgroundColor: "transparent",
  color: "#fff"
};

const closeModal = {
  cursor: "pointer"
};

Modal.setAppElement(document.getElementById("header__search-id"));

class SearchModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <img
          onClick={this.openModal}
          className="header__search"
          id="header__search-id"
          src="/img/search.png"
          alt="Search Icon"
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Search Modal"
        >
          <img
            style={closeModal}
            className="close-modal"
            onClick={this.closeModal}
            src="/img/close.png"
            alt="Close Modal"
          />
          <form>
            <input style={inputStyles} type="search" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default SearchModal;
