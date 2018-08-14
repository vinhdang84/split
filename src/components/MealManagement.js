import React from "react";
import MealList from "./MealList";
import MealEditor from "./MealEditor";

class MealManagement extends React.Component {
  render() {
    return (
      <div>
        <MealList friends={this.props.friends} meals={this.props.meals} />
        <MealEditor
          friends={this.props.friends}
          addMeal={this.props.addMeal}
          meals={this.props.meals}
        />
      </div>
    );
  }
}

export default MealManagement;
