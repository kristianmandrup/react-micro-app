// @ts-nocheck
import { Component } from 'react'

export class BaseView extends Component {
  dispatchFormInput(value) {
    this.dispatch({...value, type: 'form_input' })
  }

  dispatchForm(valueObj) {
    this.dispatch({...valueObj, type: 'form' })
  }

  updateState(state) {
    this.setState(state)
  }
}
