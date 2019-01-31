# Motivation

This util was made to make development with [BEM-methodology](https://en.bem.info/methodology) easier.
It abstracts the component structure from its block name and adds a list of benefits, such as:

- Make components more readable.
- Make refactoring easier. Block name declared on the top of the file and abstracted from component's structure. You don't need to edit the render method if you changed the component name.
- There's less space for mistypes and related bugs.
- Different blocks couldn't affect each other. The error will be raised if you try to use the same block name twice.
- The js bundle will be lighter.

Before:

```js
import classnames from 'classnames'

const AwesomeElement = ({ active }) => (
  <div className="long-name-of-the-element">
    <h1 className={classnames(
      'long-name-of-the-element__heading', {
      "long-name-of-the-element__heading--active": active,
    })}>
    <ul className="long-name-of-the-element__content">
      <li className="long-name-of-the-element__item" />
      <li className="long-name-of-the-element__item" />
      <li className="long-name-of-the-element__item" />
    </ul>
  </div>
);
```

After:

```js
import addBemName from 'add-bem-name';
import classnames from 'classnames'

const bemName = addBemName('long-name-of-the-element');

const AwesomeElement = ({ active }) => (
  <div className={bemName()}>
    <h1 className={classnames(
      bemName('heading'), { [bemName('heading', 'active')]: active }
    )} >
    <ul className={bemName('content')}>
      <li className={bemName('item')} />
      <li className={bemName('item')} />
      <li className={bemName('item')} />
    </ul>
  </div>
);
```

# Installation

You can add it to your project with yarn or npm:
`yarn add add-bem-name`
`npm i add-bem-name --save`

# How to use it

At first you register a block name:
```js
const bemName = addBemName('block-name');
```
This function takes a string with block name and returns a function you can use in four different ways:
- `bemName()` returns a component (*or block in BEM-methodology*) name
- `bemName('element-name')` returns a element name like `'block-name__element-name'`
- `bemName('element-name', 'active')` returns a element name with modificator: `'block-name__element-name--active'`
- `bemName(null, 'active')` returns a block name with modificator: `'block-name--active'`

# Modificators

As you could see above, each function call returns only one specified class. You can easily combine modificators with [classnames](https://github.com/JedWatson/classnames) util:

```js
classnames(bemName('item'), {
  [bemName('item', 'active')]: active,
  [bemName('item', 'red')]: red,
});
```

# Tests

This util is covered with tests. You can run it with `yarn test`
