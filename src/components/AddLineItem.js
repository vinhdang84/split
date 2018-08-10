import React from "react";

class AddLineItem extends React.Component {
  itemNameRef = React.createRef();
  priceRef = React.createRef();
  consumerRef = React.createRef();

  handleChange = event => {
    this.consumerRef = [].filter
      .call(event.target.options, o => o.selected)
      .map(o => o.value);
    console.log(this.consumerRef);
  };

  createLineItem = event => {
    event.preventDefault();
    const lineItem = {
      itemName: this.itemNameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      consumer: this.consumerRef
    };

    this.props.addLineItem(lineItem);
    event.currentTarget.reset();
  };
  render() {
    const { friends } = this.props;
    return (
      <form onSubmit={this.createLineItem}>
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
          onChange={this.handleChange}>
          {(friends || []).map((f, i) => (
            <option key={i} value={f.name}>
              {f.name}
            </option>
          ))}
        </select>
        <button type="submit"> Submit Line Item </button>
      </form>
    );
  }
}

export default AddLineItem;
