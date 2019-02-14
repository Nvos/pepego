const { lstatSync, readdirSync } = require('fs');
const { join, resolve } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();

const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const libAliases = readdirSync(resolve(__dirname, '../../../libs')).reduce(
  (accumulator, target) => ({
    ...accumulator,
    ['@playgroud/' + target]: '../../../libs/' + target + '/src',
  }),
  {}
);
console.log(libAliases);
module.exports.libAliases = libAliases;
