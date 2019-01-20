import React, { Component } from "react";

const { Consumer, Provider } = React.createContext();

class ModalProvider extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.toggleShowModal = this.toggleShowModal.bind(this);
  }

  toggleShowModal() {
    this.setState(ps => {
      return { showModal: !ps.show };
    });
  }

  render() {
    const props = {
      ...this.state,
      toggleShowModal: this.toggleShowModal
    };

    return <Provider value={props}>{this.props.children}</Provider>;
  }
}

export default ModalProvider;

export const withModalToggle = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
