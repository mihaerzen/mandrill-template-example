# mandrill-template-example
An example for using the mandrill template

## Requirements

- Mandrill account

## How to

1. Go to [https://mandrillapp.com/templates](https://mandrillapp.com/templates) and create new template.
2. Copy `template.html` from this repo to the HTML field in mandrill.
3. `npm install`
4. Create `config.local.js` in your folder (look example below)

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
