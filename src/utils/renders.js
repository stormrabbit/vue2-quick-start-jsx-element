import Vue from 'vue'
export const renderComponent = (componentName) => Vue.component(componentName, () =>  import(`@/components/${componentName}.vue`))
// export const renderComponent = (componentName) => () =>  import(`@/components/${componentName}.vue`)