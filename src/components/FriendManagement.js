import React from "react";
import AddFriend from "./AddFriend";

class FriendManagement extends React.Component {
  render() {
    return <AddFriend addFriend={this.props.addFriend} />;
  }
}

export default FriendManagement;
