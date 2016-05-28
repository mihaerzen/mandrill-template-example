'use strict';

const config = require('./config');
const mandrill = require('mandrill-api/mandrill');
const mandrill_client = new mandrill.Mandrill(config.mandrillApiKey);

const params = {
    template_name: config.templateSlug,
    template_content: [],
    message: {
        subject: config.subject,
        to: [{
            email: config.toEmail,
            type: 'to'
        }],
        global_merge_vars: [{
            name: 'user_email',
            content: config.toEmail
        }, {
            name: 'recommendations',
            content: [{
                title: 'One Dance',
                artist: 'Drake Featuring WizKid & Kyla',
                url: 'https://play.spotify.com/track/1xznGGDReH1oQq0xzbwXa3'
            }, {
                title: 'Panda',
                artist: 'Desiigner',
                url: 'https://play.spotify.com/track/46THN9jjPWhSqFUu6YsBhv'
            }, {
                title: 'Can\'t Stop The Feeling!',
                artist: 'Justin Timberlake',
                url: 'https://play.spotify.com/track/6JV2JOEocMgcZxYSZelKcc'
            }]
        }]
    },
    async: false
};

mandrill_client.messages.sendTemplate(params, result => {
    console.log(result);
}, e => {
    console.log(`'A mandrill error occurred: ${e.name} - ${e.message}`);
});
