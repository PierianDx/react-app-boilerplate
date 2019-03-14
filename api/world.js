const { send, json } = require('micro');

module.exports = async (req, res) => {
  const obj = await json(req);
  console.log(obj);
  send(res, 200, `${obj.post}`);
};
