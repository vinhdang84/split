import React from "react";

class LineItem extends React.Component {
  itemNameRef = React.createRef();
  priceRef = React.createRef();
  consumerRef = React.createRef();

  saveConsumer = event => {
    this.consumerRef = [].filter
      .call(event.target.options, o => o.selected)
      .map(o => o.value);
    console.log(this.consumerRef);
    const updatedLineItem = {
      ...this.props.lineItem,
      [event.currentTarget.name]: this.consumerRef
    };
    this.props.setItem(this.props.index, updatedLineItem);
  };

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
      <div class="form-row">
        <div class="col">
          <label class="control-label">
            <br />
            <b>LineItem:</b>
          </label>
          <input
            name="itemName"
            ref={this.itemNameRef}
            type="text"
            placeholder="Item name"
            onChange={this.saveItem}
          />
        </div>
        <div class="col">
          <div class="form-group-row" />
          <label class="control-label">
            <br />
            <b>Price:</b>
          </label>
          <input
            name="price"
            ref={this.priceRef}
            type="text"
            placeholder="Price"
            onChange={this.saveItem}
          />
        </div>
        <div class="col">
          <div class="form-group-row">
            {" "}
            <label class="control-label">
              <br />
              <b>Consumers:</b>
            </label>
          </div>
          <div class="form-group-row">
            <select
              class="form-control"
              multiple={true}
              name="consumer"
              ref={this.consumerRef}
              onChange={this.saveConsumer}>
              {(friends || []).map((f, i) => (
                <option key={i} value={f.name}>
                  {f.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default LineItem;
