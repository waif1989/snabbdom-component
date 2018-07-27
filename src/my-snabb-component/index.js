import Snabbdom from 'snabbdom-pragma'; // Tell .babelrc use Snabbdom.createElement, And babel will tranform JSX into Snabbdom's 'h' function.
const EXPORT = ({
    name = 'Hello World'
} = {}) => {
  return (
      <div
          className="title component1"
      >{name} Component</div>
  );
};
module.exports = exports = EXPORT;
module.default = EXPORT;