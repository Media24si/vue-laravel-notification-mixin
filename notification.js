export default {
  methods: {
    notify(header, message, additionalConfiguration = {}) {
      this.$notify(Object.assign({}, additionalConfiguration, {
        title: header,
        text: message,
      }))
    },
    notifyError(message, header = 'Napaka') {
      this.notify(header, this._parseErrorMessage(message), { type: 'error' })
    },
    notifyWarning(message, header = 'Opozorilo') {
      this.notify(header, message, { type: 'warn' })
    },
    notifySuccess(message, header = 'Uspeh') {
      this.notify(header, message, { type: 'success' })
    },
    _parseErrorMessage(error, defaultErrorMessage = 'Ups! Zgodila se je napaka! Prosimo poskusite znova, ali kontaktirajte pristojne vzdrževalce sistema, če se problem ponavlja.') {
      if (error.response !== undefined && error.response.data !== undefined) {
        if (error.response.data.errors !== undefined) {
          return error.response.data.errors[Object.keys(error.response.data.errors)[0]][0]
        }
        if (error.response.data.message !== undefined) {
          return error.response.data.message
        }
        return error.response.data
      }
      if (error.message !== undefined) {
        return error.message
      }
      return defaultErrorMessage
    },
  }
}