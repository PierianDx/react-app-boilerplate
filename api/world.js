const { send, json } = require('micro');

module.exports = async (req, res) => {
  const obj = await json(req);
  console.log(obj);
  send(res, 200, `I received your POST request. This is what you sent me: ${obj.post}`);
};
