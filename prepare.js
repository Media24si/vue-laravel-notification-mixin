function addNotificationElement(identifier, withGroup = false) {
  identifier = identifier.replace('#', '')
  let vueInstanceParent = document.getElementById(identifier)
  if (!vueInstanceParent) {
    console.error(`Missing identifier element: #${identifier}`)
    return
  }
  let notificationsElement = document.createElement('notifications')
  if (withGroup) {
    notificationsElement.setAttribute('group', identifier)
  }
  vueInstanceParent.appendChild(notificationsElement)
}

function prepare(options) {
  options = Object.assign({
    id : null,
    group: false
  }, options)
  if (!options.hasOwnProperty('id') || !options.id) {
    return
  }
  const withGroup = (options.hasOwnProperty('group') && options.group)
  if (Array.isArray(options.id)) {
    options.id.forEach(option => {
      addNotificationElement(option, withGroup)
    })
  } else {
    addNotificationElement(options.id, withGroup)
  }
}
export { prepare }