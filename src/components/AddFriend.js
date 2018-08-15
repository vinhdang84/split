import React from "react";

class AddFriend extends React.Component {
  nameRef = React.createRef();

  createFriendList = event => {
    event.preventDefault();
    const friend = {
      id: {},
      name: this.nameRef.value.value
    };
    this.props.addFriend(friend);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.createFriendList}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Enter Name"
        />
        <button type="submit" class="btn btn-primary">
          + Add Friend
        </button>
      </form>
    );
  }
}

export default AddFriend;
