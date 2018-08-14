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
    this.setState(prevState => ({
      lineItems: [
        ...prevState.lineItems,
        friends.length > 0 && { consumer: friends[0].name }
      ]
    }));
  };

  render() {
    const { friends } = this.props;
    return (
      <div>
        <h4>Add A Meal</h4>
        <form onSubmit={this.createMeal}>
          <div class="col">
            <div class="row">
              <span class="font-weight-bold">Payer:</span>
            </div>
            <div class="row">
              <select name="payer" ref={this.payerRef}>
                {(friends || []).map((f, i) => (
                  <option key={i} value={f.name}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <div class="col">
            <div class="row">
              <span class="font-weight-bold">Description:</span>
            </div>
            <div class="row">
              <input
                name="desc"
                ref={this.descRef}
                type="text"
                placeholder="Meal Description"
              />
            </div>
            <br />
          </div>
          <div class="col">
            <div class="row">
              <input
                type="button"
                className="btn-success"
                value="Add Line Item"
                onClick={this.addLineItem.bind(this)}
              />
            </div>
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
          <br />
          <div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Save Meal Button
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MealEditor;
