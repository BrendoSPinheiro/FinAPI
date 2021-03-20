const AccountRepository = require('../repositories/AccountRepository');

class AccountController {
 
  getStatement(request, response) {
    const { cpf } = request.params;

    const costumerExists = AccountRepository.findByCpf(cpf);

    if(!costumerExists) {
      return response.status(404).json({ error: 'Costumer not found' });
    }

    response.json(costumerExists.statement);
  }

  store(request, response) {
    const { name, cpf, birthDate } = request.body;

    const customerExists = AccountRepository.findByCpf(cpf);

    if(customerExists) {
      return response.status(400).json({ error: 'CPF is already in use' });
    }

    const newCustomer = AccountRepository.createCustomers({
      name,
      cpf,
      birthDate,
    });

    response.status(201).json(newCustomer);
  }
}

module.exports = new AccountController();
