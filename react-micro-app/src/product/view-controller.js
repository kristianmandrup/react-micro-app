// @ts-nocheck

import { BaseViewController } from "../base/view-controller"

export class ProductViewController extends BaseViewController {
  constructor({ view, model }) {
    super({ view, model })
    this.subscribe('product')
  }

  onProduct(data) {    
    this.formController.onSubmit(data)
  }
}
