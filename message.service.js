const messageDao = require('./message.dao')

///

exports.getMessagesList = getMessagesList;
exports.saveMessage = saveMessage;

///

/**
*
*/
async function getMessagesList() {
  return await messageDao.getList();
}

/**
*
*/
async function saveMessage(dao_model) {
  return await messageDao.save(dao_model);
}