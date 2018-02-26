(function () {
  // 定义插件对象
  const MyPlugin = {}
  // 给插件对象添加install方法
  MyPlugin.install = function (Vue, options) {
    // 1. 给Vue函数对象添加全局方法
    Vue.myGlobalMethod = function () {
      console.log('Vue全局方法 myGlobalMethod()')
    }

    // 2. 定义全局指令
    Vue.directive('my-directive', function (el, binding) {
      el.innerHTML = 'my-directive ' + binding.value
    })

    // 3. 给Vue实例对象添加方法
    Vue.prototype.$myMethod = function () {
      console.log('vue实例对象的 $myMethod()')
    }
  }

  // 暴露插件
  window.MyPlugin = MyPlugin
})()