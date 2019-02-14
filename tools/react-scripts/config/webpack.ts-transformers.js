// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const tsImportPluginFactory = require('ts-import-plugin');

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();

// 3. create getCustomTransformer function
const getCustomTransformers = () => ({
  before: [
    styledComponentsTransformer,
    tsImportPluginFactory([
      {
        libraryName: 'material-ui',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
    ]),
  ],
});

// 4. export getCustomTransformers
module.exports = getCustomTransformers;
