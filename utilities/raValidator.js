async function raValido(data) {
  if (data.length > 11) {
    return false;
  } else {
    let raRegEx = /[0-9-]/g.test(data);
    return raRegEx;
  }
}

module.exports = { raValido };
