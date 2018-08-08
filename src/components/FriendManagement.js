import React from "react";
import AddFriend from "./AddFriend";

class FriendManagement extends React.Component {
  render() {
    return (
      <div>
        <b> Create List of Friends</b>
        <AddFriend addFriend={this.props.addFriend} />
      </div>
    );
  }
}

export default FriendManagement;
