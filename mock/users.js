module.exports = {
  // supported values are Object and Array
  'GET /api/users': { users: [1, 2] },

  // GET can be omitted
  'GET /api/users/1': { id: 1 },

  // support for custom functions, APIs refer to express@4
  'POST /api/users/create': (req, res) => {
    res.end('OK');
  }
};
