import React from "react";
import LineItem from "./LineItem";

class MealEditor extends React.Component {
  state = {
    lineItems: [],
    lineItemCounter: 0
  };

  payerRef = React.createRef();
  descRef = React.createRef();

  createMeal = event => {
    event.preventDefault();

    const meal = {
      payer: this.payerRef.value.value,
      desc: this.descRef.value.value,
      lineItems: this.state.lineItems
    };

    this.props.addMeal(meal);
    this.setState({ lineItems: [] });
    event.currentTarget.reset();
  };

  setItem = (key, updatedLineItem) => {
    const lineItems = [...this.state.lineItems];
    lineItems[key] = updatedLineItem;
    this.setState({ lineItems: lineItems });
  };

  addLineItem = () => {
    const { friends } = this.props;
    this.setState(prevState => ({ lineItems: [...prevState.lineItems, friends.length > 0 && { consumer: friends[0].name }] }));
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
          <div>
            <input
              type="button"
              value="Add Line Item"
              onClick={this.addLineItem.bind(this)}
            />
            {Object.keys(this.state.lineItems).map(key => (
              <LineItem
                key={key}
                index={key}
                lineItem={this.state.lineItems[key]}
                setItem={this.setItem.bind(this)}
                friends={this.props.friends}
                payer={this.payerRef.value.value}
              />
            ))}
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
