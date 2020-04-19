// @ts-nocheck

export class BaseViewModel {
  constructor({ validator, updateState }) {
    this.validator = validator
    this.updateState = updateState
  }

  validate(data) { 
    this.validator.validate(data)
  }
}
