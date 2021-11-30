const _ = require('lodash');

function handleScalar(name) {
  switch (name) {
    case 'Int': {
      return 42;
    }
    case 'String': {
      return 'example';
    }
    case 'BigInt': {
      return 42;
    }
    case 'Timestamp': {
      return new Date().getTime();
    }
    case 'Float': {
      return 42;
    }
    default: {
      return;
    }
  }
}

function scalarProcessor(argz = {}) {
  const { definition, name } = argz;
  // Don't stomp on an example if there already is one
  if (typeof _.get(definition, 'example') !== 'undefined') {
    return;
  }

  return handleScalar(name);
}

function fieldProcessor(argz = {}) {
  const { returnType, definition } = argz;

  // Don't stomp on an example if there already is one
  if (typeof _.get(definition, 'properties.return.example') !== 'undefined') {
    return;
  }

  return handleScalar(returnType);
}

function argumentProcessor(argz = {}) {
  const { definition, type } = argz;

  if (typeof _.get(definition, 'example') !== 'undefined') {
    return;
  }
  console.log(type);
  return handleScalar(type);
}

module.exports = {
  fieldProcessor,
  argumentProcessor,
  scalarProcessor,
};
