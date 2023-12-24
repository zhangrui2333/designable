'use strict';

const reactSandbox = require('..');
const assert = require('assert').strict;

assert.strictEqual(reactSandbox(), 'Hello from reactSandbox');
console.info("reactSandbox tests passed");
