/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const escapeRegexString = require('escape-regex-string');

module.exports = {
    resolver: {
        blacklistRE: blacklist([
            new RegExp(
                `${escapeRegexString(path.resolve(__dirname, './demo', 'node_modules'))}`,
            )
        ])
    },
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    }
};
