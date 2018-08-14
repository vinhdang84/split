import React from "react";
import AddFriend from "./AddFriend";

class FriendManagement extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3> &emsp;Add Friend</h3>
          <AddFriend addFriend={this.props.addFriend} />
        </div>
      </div>
    );
  }
}

export default FriendManagement;
