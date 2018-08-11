import React from "react";

class LineItem extends React.Component {
  itemNameRef = React.createRef();
  priceRef = React.createRef();
  consumerRef = React.createRef();

  // handleChange = event => {
  //   this.consumerRef = [].filter
  //     .call(event.target.options, o => o.selected)
  //     .map(o => o.value);
  // };

  saveItem = event => {
    event.preventDefault();

    const lineItem = {
      itemName: this.itemNameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      consumer: this.consumerRef.value.value
    };

    this.props.setItem(this.props.itemId, lineItem);
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
        />
        Price
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        Consumers
        <select
          multiple={true}
          name="consumer"
          ref={this.consumerRef}
        >
          {(friends || []).map((f, i) => (
            <option key={i} value={f.name}>
              {f.name}
            </option>
          ))}
        </select>
        <button onClick={this.saveItem.bind(this)}>Save</button>
      </div>
    );
  }
}

export default LineItem;
