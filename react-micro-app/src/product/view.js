// @ts-nocheck
import React from 'react'
import { BaseView } from '../base/view.ts';
import { ProductModel } from './model.ts';

export class ProductView extends BaseView {
  constructor() {
    const { updateState } = this
    this.model = new ProductModel({ updateState })
    this.controller = new ProductController({view: this, model})
  }
  onAgeChange = e => {
    const age = e.target.value;
    this.dispatchFormInput({ age });
  }
  onSubmit = () => {
    const { product } = this
    this.dispatchForm({ product })
  }
  get product() {
    return this.state.product
  }
  // ...
  render() {
    const { firstName, lastName, age, invalid } = this
    const { onFirstNameChange, onLastNameChange, onAgeChange, onSubmit } = this
    return (<form>
      <input name="firstName" type="text" value={ firstName } onChange={ onFirstNameChange }></input>
      <input name="lastName" type="text" value={ lastName } onChange={ onLastNameChange }></input>
      <input name="age" type="text" value={ age } onChange={ onAgeChange }></input>      
      <button type="submit" onSubmit={ onSubmit } disabled={ invalid }>Submit</button>
    </form>);
  }
}
