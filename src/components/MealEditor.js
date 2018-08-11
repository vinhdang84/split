import React from "react";
import LineItem from "./LineItem";

class MealEditor extends React.Component {
  state = {
    lineItems: []
  };

  payerRef = React.createRef();
  descRef = React.createRef();

  createMeal = event => {
    event.preventDefault();

    const meal = {
      payer: this.payerRef.value.value,
      desc: this.descRef.value.value,
      lineItems: this.state.lineItems,
    };

    this.props.addMeal(meal);
    event.currentTarget.reset();
  };

  setItem = (index, item) => {
    const lineItems = this.state.lineItems;
    lineItems[index].itemName = item.itemName;
    lineItems[index].consumer = item.consumer;
    lineItems[index].price = item.price;

    this.setState({ lineItems: lineItems });
  }

  addLineItem = (event) => {
    event.preventDefault();

    let lineItems = this.state.lineItems;
    lineItems.push({
      id: lineItems.length + 1,
      itemName: '',
      consumer: '',
      price: '',
    });

    this.setState({ lineItems: lineItems });
  }

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
          <div>
            <button onClick={this.addLineItem.bind(this)}>Add Line Item</button>
            {
              this.state.lineItems.map((item, index) => <LineItem itemId={index} key={index} setItem={this.setItem.bind(this)} friends={this.props.friends} />)
            }
          </div>
          <div>
            <button type="submit">Save Meal Button</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MealEditor;
