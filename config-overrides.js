const rewireAliases = require('react-app-rewire-aliases');
const path = require('path');

module.exports = function override(config, env) {
  const myConfig = rewireAliases.aliasesOptions({
    '~': path.resolve(__dirname, 'src'),
  })(config, env);
  return myConfig;
};
