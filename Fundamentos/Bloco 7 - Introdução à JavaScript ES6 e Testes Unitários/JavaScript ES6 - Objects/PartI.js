const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = order => `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const pizza = order.order.pizza;
  const drinks = order.order.drinks;
  let itemsArray = Object.keys(pizza);
  for (let drink in drinks) {
    itemsArray.push(drinks[drink].type);
  }
  const itemsArrayFormatted = itemsArray.length >= 2 ? `${itemsArray.slice(0, itemsArray.length - 1).join(', ')} e ${itemsArray[itemsArray.length - 1]}` : itemsArray.join('');
  return `Olá ${order.name}, o total do seu pedido de ${itemsArrayFormatted} é R$ ${order.payment.total}`;
}

console.log(orderModifier(order));