import React from "react";
import MealList from "./MealList";
import MealEditor from "./MealEditor";

class MealManagement extends React.Component {
  render() {
    return (
      <div>
        <h3>&emsp;Meal Management </h3>
        <MealList
          meals={this.props.meals}
          friends={this.props.friends}
          lineItems={this.props.lineItems}
        />
        <button>Add Meal button</button>
        <MealEditor
          addMeal={this.props.addMeal}
          meals={this.props.meals}
          friends={this.props.friends}
          lineItems={this.props.lineItems}
        />
      </div>
    );
  }
}

export default MealManagement;
