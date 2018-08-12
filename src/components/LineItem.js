import React from "react";

class LineItem extends React.Component {
  itemNameRef = React.createRef();
  priceRef = React.createRef();
  consumerRef = React.createRef();

  saveItem = event => {
    console.log(event.currentTarget.value);
    const updatedLineItem = {
      ...this.props.lineItem,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.setItem(this.props.index, updatedLineItem);
  };

  render() {
    const { friends } = this.props;
    return (
      <div>
        Line Item
        <input
          name="itemName"
          ref={this.itemNameRef}
          type="text"
          placeholder="Item name"
          onChange={this.saveItem}
        />
        Price
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
          onChange={this.saveItem}
        />
        Consumers
        <select
          multiple={true}
          name="consumer"
          ref={this.consumerRef}
          onChange={this.saveItem}>
          {(friends || []).map((f, i) => (
            <option key={i} value={f.name}>
              {f.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default LineItem;
