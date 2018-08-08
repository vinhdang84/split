import React from "react";

class MealEditor extends React.Component {
  payerRef = React.createRef();
  descRef = React.createRef();

  createMeal = event => {
    event.preventDefault();
    const meal = {
      payer: this.payerRef.value.value,
      desc: this.descRef.value.value
    };
    this.props.addMeal(meal);
    event.currentTarget.reset();
  };
  render() {
    const { friends } = this.props;
    return (
      <div>
        <b>Meal Editor</b>
        <form onSubmit={this.createMeal}>
          Payer
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
          <button> Add Line Item button </button>
          <button type="submit">Save Meal Button</button>
        </form>
      </div>
    );
  }
}

export default MealEditor;
