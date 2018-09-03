import Notifications from 'vue-notification'
import NotificationsMixin from './notification'
import { prepare } from './prepare'
const VueLaravelNotificationMixin = {
  install (Vue, options = {}, notificationOptions = {}) {
    prepare(options)
    Vue.use(Notifications, notificationOptions)
    Vue.mixin(NotificationsMixin)
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueLaravelNotificationMixin)
}
export default VueLaravelNotificationMixin