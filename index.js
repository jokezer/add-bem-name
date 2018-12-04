const bemName = (block, element = null, modificator = null) => {
  if (element && modificator) return `${block}__${element}--${modificator}`;
  if (element) return `${block}__${element}`;
  if (modificator) return `${block}--${modificator}`;
  return block;
};

const addBemName = () => {
  const blockNames = [];

  return (blockName) => {
    if (blockNames.find(name => name === blockName)) {
      throw new Error(`Block name "${blockName}" is already taken`);
    }

    blockNames.push(blockName);

    return (...args) => bemName(blockName, ...args);
  };
};

module.exports = addBemName();
