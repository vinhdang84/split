import React from "react";

class MealList extends React.Component {
  render() {
    console.log(this.props.meals);
    const meals = this.props.meals.map((meal, key) => (
      <div key={key}>
        <div>
          <strong>Payer: </strong> {meal.payer}
        </div>
        <div>
          <strong>Description: </strong> {meal.desc}
        </div>
        {meal.lineItems &&
          meal.lineItems.map((item, index) => (
            <div key={index}>
              <strong>{item.itemName}</strong> /{" "}
              <strong>{item.consumer}</strong> / <strong>${item.price}</strong>
            </div>
          ))}
        <hr />
      </div>
    ));

    return (
      <div>
        <h4>List of Meals</h4>
        {meals}
      </div>
    );
  }
}

export default MealList;
