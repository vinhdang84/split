import React, { Fragment } from "react";
import FriendManagement from "./FriendManagement";
import MealManagement from "./MealManagement";
import BalanceManagement from "./BalanceManagement";

class App extends React.Component {
  state = {
    lineItems: [],
    meals: [],
    friends: [],
    lineItemCounter: 0,
    friendCounter: 0,
    mealCounter: 0
  };

  addFriend = friend => {
    let counter = this.state.friendCounter + 1;
    friend.id = counter;
    let friends = Array.from(this.state.friends);
    friends.push(friend);
    this.setState({
      friendCounter: counter,
      friends: friends
    });
  };

  addMeal = meal => {
    let counter = this.state.mealCounter + 1;
    meal.id = counter;
    let meals = Array.from(this.state.meals);
    meals.push(meal);
    this.setState({
      mealCounter: counter,
      meals: meals
    });
  };

  render() {
    return (
      <div>
        <FriendManagement addFriend={this.addFriend} />
        <MealManagement
          addMeal={this.addMeal}
          meals={this.state.meals}
          friends={this.state.friends}
          lineItems={this.state.lineItems}
        />
        <BalanceManagement />
      </div>
    );
  }
}

export default App;
