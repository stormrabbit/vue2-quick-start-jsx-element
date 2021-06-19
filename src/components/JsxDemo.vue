<script>
// import JsxChildDemo from "./JsxChildDemo";
import { Button } from "element-ui";
import { requestDemo } from "../api/demo";
// import {renderComponent} from '../utils/renders'
export default {
  name: 'JsxDemo',
  data: () => ({
    name: "jsx",
    a: {
      b: {
        c: 1,
      },
    },
  }),
  components: {
    // "jsx-child-demo": JsxChildDemo,
    "el-button": Button,
  },

  // created() {
  //   renderComponent('JsxChildDemo')
  // },
  render() {
    const { computedName, test, buildTest2, getDemoData, getDemoData2, a } = this;
    const c = '@babel/plugin-proposal-optional-chaining'
    console.log(a?.d?.c)
    return (
      <div>
        {c }hello, {computedName}
        {test}
        {buildTest2()}
        <jsx-child-demo childValue="才不是默认值呐"></jsx-child-demo>
        <el-button vOn:click={getDemoData} type="primary">
          主要按钮
        </el-button>
        <el-button vOn:click={getDemoData2} type="primary" plain>
          主要按钮2
        </el-button>
      </div>
    );
  },
  computed: {
    computedName() {
      return `${this.name} vue`;
    },
    test() {
      return <div> jsx page </div>;
    },
  },
  methods: {
    modifyVue() {
      this.name = `${this.name}1`;
    },
    buildTest2() {
      return <div>jsx page2</div>;
    },
    async getDemoData() {
      const result = await this.$api.get(
        "http://angrykitty.link:40439/v1/events"
      );
      console.log(result);
    },
    async getDemoData2() {
      const result = await requestDemo();
      console.log(result);
    },
  },
};
</script>

<style>
</style>