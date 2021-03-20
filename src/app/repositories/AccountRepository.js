const { v4: uuidv4 } = require('uuid');

const customers = [];

class AccountRepository{
  findByCpf(cpf) {
    const customerExists = customers.find(
      (customer) => customer.cpf === cpf
    );

    return customerExists;
  }

  createCustomers({ name, cpf, birthDate }) {
    const newCustomer = {
      id: uuidv4(),
      name,
      cpf,
      birthDate: new Date(birthDate),
      statement: [],
    }

    customers.push(newCustomer);

    return newCustomer;
  }
}

module.exports = new AccountRepository();