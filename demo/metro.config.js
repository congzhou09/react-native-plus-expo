const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const escapeRegexString = require('escape-regex-string');

module.exports = {
    resolver: {
        blacklistRE: blacklist([
            new RegExp(
                `^${escapeRegexString(path.resolve(__dirname, '..', 'node_modules'))}\\/.*$`
            ),
        ]),
        providesModuleNodeModules: [
            'react-native',
            'react'
        ],
        extraNodeModules: {
            '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
            'react-navigation': path.resolve(__dirname, 'node_modules/react-navigation'),
        },
    },
    projectRoot: path.resolve(__dirname),
    watchFolders: [
        path.resolve(__dirname, '..'),
    ],
};