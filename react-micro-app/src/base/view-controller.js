// @ts-nocheck

import { BaseFormController } from "./form-controller"

export class BaseViewController {
  constructor({view, model}) {
    this.view = view
    this.model = model
    this.formController = new BaseFormController()
  }

  setState(state) {
    this.model.setState(state)
  }  
  
  isStateEvent(event) {
    return true
  }

  receive(event) {
    const { setState, isStateEvent } = this
    if (isStateEvent) {
      setState(event)
    }    
  }
}
