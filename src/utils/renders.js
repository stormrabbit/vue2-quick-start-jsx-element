import Vue from "vue";
export const installComponents = (name) => {
  // request 代表下一个参数
  Vue.component(name, () =>
    import(/* webpackChunkName: "vue-[request]" */ `@/components/${name}.vue`)
  );
};
