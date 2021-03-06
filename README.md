# angular-google-adsense

[![npm version](https://badge.fury.io/js/angular-google-adsense.svg)](https://badge.fury.io/js/angular-google-adsense)
[![Bower version](https://badge.fury.io/bo/angular-google-adsense.svg)](https://badge.fury.io/bo/angular-google-adsense)

This module lets you integrate your google adsense advertisements in your AngularJS applications easily.

## Installation

`bower install angular-google-adsense` or `npm install angular-google-adsense`

Or alternatively, grab the `dist/angular-google-adsense.min.js` file and include it in your project


In your application, declare the angular-google-analytics module dependency :

```javascript
angular.module('app', ['angular-google-adsense']);
```
There is no need to include the adsense lib yourself, the directive takes care of it and include it (async) only when it is needed.

### Use the directive in your html file :

Replace the 'ad-client' and 'ad-slot' attributes with your values.

The directive also supports the following optional attributes:

* [ad-format](https://support.google.com/adsense/answer/32712?hl=en)
* ad-layout
* ad-layout-key

```html
<adsense ad-client="ca-pub-0123" ad-slot="123456789" inline-style="display:inline-block;width:728px;height:90px" ad-format="auto"></adsense>
```
