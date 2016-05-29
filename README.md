# mandrill-template-example
An example for using the mandrill template

## Requirements

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
