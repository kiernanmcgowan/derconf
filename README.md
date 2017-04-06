derconf
===

[![Greenkeeper badge](https://badges.greenkeeper.io/kiernanmcgowan/derconf.svg)](https://greenkeeper.io/)

`The config!`

Simple config loader for node. `Derconf` will search a number of directories and return one JSON object that is a combination of all of them.

```
npm install derconf
```

usage
---

```
var derconf = require('derconf');

// Default usage will look for the files ~/config.json and ./config.json and return the combination of them
// files that are loaded last will override previous files
var myconfig = derconf();


// Config files that are loaded need to be JSON files (i.e. loadable via require)
var myconfig = derconf({
  '*': [
    '~/my_config_file.json',
    './a_different_config_file.json',
    './config/yet_another_file.json'
  ]
});

// derconf is also environment aware, letting you choose different configs for different environments
// Config files specified by environment keys will ALWAYS override default configs
var myconfig = derconf({
  '*': [
    '~/base_config.json'
  ],
  'development': [
    './development.config.json'
  ],
  'production': [
    './secret_config_location/production.config.json'
  ]
});


```


LICENSE
---

<MIT>

Copyright (c) 2013 Kiernan Tim McGowan (dropdownmenu)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

