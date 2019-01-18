import React, { Component } from 'react';
import {Provider} from './index';

class ModalProvider extends Component{
    constructor(){
        super()
        this.state = {
            show : false,
            incomeDesc : "",
            expenseDesc : "",
            transactionEditInput: "",
            goalInput : "",
            goalDesc : ""

        }
        this.toggleShowModal = this.toggleShowModal.bind(this)
        
    }

    toggleShowModal(){
        this.setState(ps => {
            return {show: !ps.show}
        })
    }

    render(){
        const props = {
            state: this.state,
            toggleShowModal: this.toggleShowModal
        }

        return (
            <Provider value = {props}>
                {this.props.children}
            </Provider>

        )
    }


}

export default ModalProvider;