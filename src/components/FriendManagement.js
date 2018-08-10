import React from "react";
import AddFriend from "./AddFriend";

class FriendManagement extends React.Component {
  render() {
    return (
      <div>
        <h3> &emsp;Friend Management</h3>
        <AddFriend addFriend={this.props.addFriend} />
      </div>
    );
  }
}

export default FriendManagement;
