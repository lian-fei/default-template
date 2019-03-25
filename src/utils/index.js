let utils = {
  /**
  * @ 获取 localStorage
  * @ key 字段的名字
  */
  getLocalStorage (key) {
    return window.localStorage.getItem(key)
  },
  /**
  * @ 设置 localStorage
  * @ key 字段的名字
  * @ value 字段的内容
  */
  setLocalStorage (key, value) {
    window.localStorage.setItem(key, value)
  }
}
export default utils
