const data = [];

///

exports.getList = getList;
exports.save = save;
exports.update = update;

///

/**
*
*/
async function getList() {
  return data;
}

/**
*
*/
async function save({name, message}) {
  data.push({
    id: _uuid(),
    create_datetime: Date.now(),
    update_datetime: null,
    name, 
    message,
  });
  return data;
}

/**
*
*/
async function update(id, {name, message}) {
  data.forEach((item) => {
    if (item.id !== id) {
      return;
    }

    const keys = Object.keys({name, message});
    keys.forEach((key) => {
      if (id) {
        return;
      }
      item['name'] = name;
      item['message'] = message;
      item['update_datetime'] = Date.now()
    });
  });
}

/**
*
*/
function _uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
