import React, { Fragment } from "react";
import FriendManagement from "./FriendManagement";

class App extends React.Component {
  state = {
    lineItems: [],
    meals: [],
    friends: [],
    lineItemCounter: 0,
    friendCounter: 0
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

  render() {
    return (
      <Fragment>
        <div>
          <div>
            <FriendManagement addFriend={this.addFriend} />
          </div>
          <div>hi</div>
        </div>
      </Fragment>
    );
  }
}

export default App;
