# parse-s3-url [![Build Status](https://secure.travis-ci.org/noblesamurai/parse-s3-url.png?branch=master)](http://travis-ci.org/noblesamurai/parse-s3-url) [![NPM version](https://badge.fury.io/js/parse-s3-url.svg)](https://badge.fury.io/for/js/parse-s3-url)

> Parse an S3 URL into bucket, key.


## Usage

```js
const parseS3Url = require('parse-s3-url');

parseS3Url('http://not/one'); //false
parseS3Url('https://s3.amazonaws.com/mybucket/mykey'); // { bucket: 'mybucket', key: 'mykey' }
```

## Installation

This module is installed via npm:

``` bash
$ npm install parse-s3-url
```
## License

The BSD License

Copyright (c) 2018, Tim Allen

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the Tim Allen nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

