# Vue Laravel Notifications Mixin
A small notification mixin plugin for Vuejs to use with Laravel (uses [vue-notification](https://github.com/euvl/vue-notification)).

Takes care of most of the tedious work, like setting up the notifications plugin and just lets you **use it**! Contains small helper functions to call notifications quickly in all your VueJS components. Also parses default Laravel JSON error messages (displays the first message given).

# Installation
```
npm install vue-laravel-notification-mixin --save-dev
```
or
```
yarn add vue-laravel-notification-mixin --save
```

# Usage
The plugin will automatically create the notification element that you need for the notifications to work for you. Just pass it the vue element identifier!
```javascript
import Vue from 'vue'
const identifier = '#app'

import NotificationsMixin from 'vue-laravel-notifications-mixin'
Vue.use(NotificationsMixin, { id: identifier })

const app = new Vue({
    el: identifier
})
```
If you want to manually insert the `<notifications />` tag, or just want to add it to specific directives, just omit the options, and the plugin will skip inserting the element.

That's it! Now you can use the helper functions inside your Vuejs app.

You can also pass the [vue-notification](https://github.com/euvl/vue-notification) configuration parameters as the third parameter in the `Vue.use` statement, if you want to modify aspects of the original plugin, like for example the `position` parameter.
```javascript
import NotificationsMixin from 'vue-laravel-notifications-mixin'
Vue.use(NotificationsMixin, { id: identifier }, {
    position: 'bottom right',
    classes: 'vuejs-custom-notify',
    duration: 6000,
})
```

# Configuration options
The configuration options for the plugin only contain two parameters

| Parameter | Type | Default | Description |
| ---- | ---- | ---- | ---- |
| id | String or Array | null | The identifier of the vue element instance. Can be passed as an Array if you have more than one. |
| group | boolean | false | Add group attributes to notifications? Same as the id. (learn more about groups and when to use them [here](https://github.com/euvl/vue-notification#groups)) |

# Functions
### notifySuccess
Displays a success toast
```
this.notifySuccess(message, header = optional)
```
### notifyWarning
Displays a warning toast
```
this.notifyWarning(message, header = optional)
```
### notifyError
Displays an error toast message

Can parse the Laravel error JSON, if you pass the response as `message`
```
this.notifyError(message, header = optional)
```
