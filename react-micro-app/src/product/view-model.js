// @ts-nocheck

import { BaseViewModel } from "../base/view-model.ts";

export class ProductValidator {
  validate({ product }) {
    return product !== undefined
  }
}

export class ProductViewModel extends BaseViewModel {
}
