const { execSync } = require("child_process");

const print = require('./utils/print.js');
const chalk = require("chalk");


print();
print();
print("yellow")(`Watching changes for ${chalk.bold('DeepVue')}`);
print();
print();

execSync(
  `npx webpack --watch --config build/lib/webpack.umd.js`, {stdio: 'inherit'}
)
