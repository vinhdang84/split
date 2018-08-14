import React from "react";

class BalanceManagement extends React.Component {

  render() {

    const { meals } = this.props;
    let balance = meals.reduce((accumulator, currentValue) => ({ ...accumulator, [currentValue.payer]: {} }), {});

    Object.keys(balance).forEach(payer => {

      meals.filter(meal => meal.payer === payer).forEach(meal => {

        let owedConsumers = balance[payer];
        meal.lineItems.forEach(lineItem => {

          // Converting String to Array if we dealing with initial consumer value (which can be only string because of implementation features)
          let consumerArray;
          let isArray = Array.isArray(lineItem.consumer);
          if (Array.isArray(lineItem.consumer)) {
            consumerArray = lineItem.consumer;
          } else {
            consumerArray = [lineItem.consumer];
          }

          consumerArray.forEach(consumer => {
            let consumersBalance = owedConsumers[consumer] ? owedConsumers[consumer] : 0.00;
            owedConsumers = { ...owedConsumers, [consumer]: consumersBalance += (parseFloat(lineItem.price) / (isArray ? lineItem.consumer.length : 1)) };
          });

        });

        balance = { ...balance, [payer]: { ...owedConsumers } };

      });

      // Payer shouldn't be listed as consumer
      delete balance[payer][payer];

    });

    // Taking this consumer as payer
    Object.keys(balance).forEach(payer => {

      let consumers = balance[payer];
      consumers && Object.keys(consumers).forEach(consumer => {

        let currentConsumerAsPayer = balance[consumer];

        if (currentConsumerAsPayer && currentConsumerAsPayer[payer]) {
          let settlement = consumers[consumer] - currentConsumerAsPayer[payer];
          if (settlement > 0) {
            delete currentConsumerAsPayer[payer];
            consumers[consumer] = settlement;            
          } else {
            delete consumers[consumer];
            currentConsumerAsPayer[payer] = -settlement;
          }
        }

      });

    });

    // Inserting '$'
    Object.keys(balance).forEach(payer => {
      let owedConsumers = balance[payer];
      Object.keys(owedConsumers).forEach(consumer => {
        owedConsumers[consumer] = "$" + owedConsumers[consumer];
      });
    });

    return (
      <div>
        <h4>Balance</h4>
        <pre>
          <code>
            {meals.length > 0 && JSON.stringify(balance, null, 2)}
          </code>
        </pre>
      </div>
    );
  }
}

export default BalanceManagement;
