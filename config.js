'use strict';

const _ = require('lodash');
const localConfig = require('./config.local.js');

module.exports = _.defaults(localConfig, {
    mandrillApiKey: '',
    templateSlug: '',
    toEmail: '',
    subject: 'Mandrill Template Test'
});
