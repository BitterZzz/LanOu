const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    event: {
      get() {
        return {
          setCookie(code, exdays) {
            var exdate = new Date()
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)
            window.document.cookie =
              'loginCode' + '=' + code + ';path=/;expires=' + exdate.toGMTString()
          },
          getCookie(name) {
            var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if (arr = document.cookie.match(reg))
              return (arr[2])
            else
              return null
          },
          clearCookie() {
            this.setCookie('', '', -1)
          }
        }
      }
    }
  })
}

export default install
