import React, { Fragment } from "react";
import FriendManagement from "./FriendManagement";
import MealManagement from "./MealManagement";
import BalanceManagement from "./BalanceManagement";

class App extends React.Component {
  state = {
    friends: [],
    friendCounter: 0,

    meals: [],
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
      <Fragment>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                    <FriendManagement addFriend={this.addFriend} />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-7">
              <div class="card-deck" />
              <div class="card">
                <div class="card-body">
                  <MealManagement
                    friends={this.state.friends}
                    meals={this.state.meals}
                    addMeal={this.addMeal}
                  />
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card-deck" />
            </div>
            <div class="card">
              <div class="card-body">
                <BalanceManagement
                  friends={this.state.friends}
                  meals={this.state.meals}
                  addMeal={this.addMeal}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
