const AccountRepository = require('../repositories/AccountRepository');

class AccountController {
  /**
   * id - uuid
   * name - string
   * cpf - string
   * birthDate - date
   * statement - []
   */
  store(request, response) {
    const { name, cpf, birthDate } = request.body;

    const newCustomer = AccountRepository.createCustomers({
      name,
      cpf,
      birthDate,
    });

    response.status(201).json(newCustomer);
  }
}

module.exports = new AccountController();
