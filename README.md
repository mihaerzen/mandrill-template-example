# mandrill-template-example

An example for using the mandrill template with nodejs.

## Requirements

- NodeJs
- Mandrill account

## How to

1. Go to Mandrill [Templates](https://mandrillapp.com/templates) and create new template.
2. In the Mandrill [Sending options](https://mandrillapp.com/settings/sending-options) set **Merge Language** to **Handlebars** (in the bottom).
3. Copy `template.html` from this repo to the HTML field in mandrill.
4. `npm install`
5. Create `config.local.js` in your folder (look example below)

```
'use strict';

module.exports = {
    mandrillApiKey: 'MANDRILL-API-KEY',
    templateSlug: 'your-template-slug',
    toEmail: 'your@email.com'
};
```

### Run

```
node index.js
```

You can find more about parameters for mandrill send template here: [https://mandrillapp.com/api/docs/messages.nodejs.html#method=send-template](https://mandrillapp.com/api/docs/messages.nodejs.html#method=send-template)
