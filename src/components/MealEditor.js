import React from "react";
import AddLineItem from "./AddLineItem";

class MealEditor extends React.Component {
  state = {
    isHidden: true
  };

  onClickHandler = () => {
    this.setState(prev => ({ isHidden: !prev.isHidden }));
  };

  payerRef = React.createRef();
  descRef = React.createRef();
  itemNameRef = React.createRef();
  priceRef = React.createRef();
  consumerRef = React.createRef();

  createMeal = event => {
    event.preventDefault();
    const lineItemgroup = {
      itemName: this.itemNameRef.value.value,
      price: this.priceRef.value.value,
      consumer: this.consumerRef.value.value
    };
    const meal = {
      payer: this.payerRef.value.value,
      desc: this.descRef.value.value,
      lineItem: lineItemgroup
    };
    this.props.addMeal(meal);
    event.currentTarget.reset();
  };

  render() {
    const { friends } = this.props;
    return (
      <div>
        <h4>Meal Editor</h4>
        <form onSubmit={this.createMeal}>
          <i>Payer</i>
          <select name="payer" ref={this.payerRef}>
            {(friends || []).map((f, i) => (
              <option key={i} value={f.name}>
                {f.name}
              </option>
            ))}
          </select>
          Description
          <input
            name="desc"
            ref={this.descRef}
            type="text"
            placeholder="Meal Description"
          />
          Line Item
          <input
            name="itemName"
            ref={this.itemNameRef}
            type="text"
            placeholder="Item name"
          />
          Price
          <input
            name="price"
            ref={this.priceRef}
            type="text"
            placeholder="Price"
          />
          Consumers
          <select
            multiple={true}
            name="consumer"
            ref={this.consumerRef}
            onChange={this.handleChange}>
            {(friends || []).map((f, i) => (
              <option key={i} value={f.name}>
                {f.name}
              </option>
            ))}
          </select>
          <button type="submit">Save Meal Button</button>
        </form>
      </div>
    );
  }
}

export default MealEditor;
