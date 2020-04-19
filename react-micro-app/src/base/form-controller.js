// @ts-nocheck

import { BaseViewController } from "./controller"

export class BaseFormController extends BaseViewController {
  onSubmit(data) {    
    const { isValid, onValid, onInvalid } = this.formController
    isValid(data) ? onValid(data) : onInvalid(data)
  }

  onValid(data) {
    const { dispatch } = this
    dispatch(data)
  }

  onInvalid(data) {
    const { dispatch } = this
    dispatch({...data, invalid: true })
  }

  isValid(data) {
    return this.validate(data)
  }

  validate(data) {
    return this.model.validate(data)
  }
}