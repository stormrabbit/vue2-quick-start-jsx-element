
import Vue from 'vue'
 

const requireAll = context => context.keys().map(context)

const installComponents = () => {
  const requireComponent = require.context('@/components', true, /\.vue$/) // 找到components文件夹下以.vue命名的文件
  const components = requireAll(requireComponent)
  components.forEach(item => {
    
      if (item.default.name) {
        console.log(item.default.name)
        Vue.component(item.default.name, () =>import(`@/components/${item.default.name}.vue`))
      }
    })
}

 
export default installComponents