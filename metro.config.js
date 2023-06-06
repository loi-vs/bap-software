/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */


const { makeMetroConfig } = require("@rnx-kit/metro-config");

module.exports = makeMetroConfig({
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
});


