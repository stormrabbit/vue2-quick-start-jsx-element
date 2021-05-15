# vue2-quick-start-jsx-element

> 基于 vue2、jsx 和 element-ui 的快速开发

## [vue2.0 引入 jsx](https://github.com/vuejs/jsx)

### jsx

#### 安装

```
npm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props
```

#### 设置

```
module.exports = {
  presets: ['@vue/babel-preset-jsx'],
}
```

##### jsx 写法

###### 0. 基本 render

```

<script>
export default {
    render() {
        return <div>测试</div>
    }
}
</script>

```

> **注意：** `render` 不能使用箭头函数，不然 `this` 的指向会有问题，会报错 undefined。

###### 1. 使用 data 和 computed

```
<script>
export default {
    data() {
        return {
            str: 'jsx'
        }
    },
    computed: {
        hello() {
            return 'hello'
        }
    },
    render() {
        return <div>{this.hello}, {this.str}</div>
    }
}
</script>
```

- 和 vue 模板的区别：jsx `{this.str}` 为单括号，vue 模板为双括号。

###### 2. 属性传递和事件响应
```
<script>
export default {
    data() {
        return {
            str: 'jsx'
        }
    },
    computed: {
        hello() {
            return 'hello'
        }
    },
    render() {
        return <div value={this.str} vOn:click={this.handleClick}>{this.hello}, {this.str}</div>
    },
    methods: {
        handleClick() {
            console.log('on-click');
        }
    }
}
</script>
```

-  和 vue 模板的区别：
     - 传递子属性时是 `value={this.str}` 而不是 `:value="str"`
     - 响应事件的写法是全称 `vOn:click={this.handleClick}`，而不是 `v-on:click="handleClick"
  
###### 3. 组件嵌套

```
<script>
export default {
  data: () => ({
    name: "jsx",
  }),
  components: {
    'jsx-child-demo': JsxChildDemo,
    'el-button': Button
  },

  render() {
    const { computedName, test, buildTest2, getDemoData, getDemoData2 } = this;
      
    return <div>hello, {computedName} 
      {test}{buildTest2()} //<== 注意这里
      <jsx-child-demo childValue="才不是默认值呐"></jsx-child-demo>
      <el-button vOn:click={getDemoData}  type="primary">主要按钮</el-button>
       <el-button vOn:click={getDemoData2} type="primary" plain>主要按钮2</el-button>
    </div>;
  },
  computed: {
    computedName() {
      return `${this.name} vue`;
    },
    test() {
      return <div> jsx page </div>
    }
  },
  methods: {
    buildTest2() {
      return <div>jsx page2</div>
    },
  },
};
</script>
```

-  和 vue 模板的区别：
      - jsx 可以直接用返回视图层并在 render 中调用，而 vue 靠 `v-if` 或 `v-component`
      - jsx 中返回视图层的行为只能在 `computed` 或者 `method` 中使用，放在 `data` 中会报错 


## [引入链式表达式处理空值的问题](https://juejin.cn/post/6844903929839353869)

### 安装

```
npm install --save-dev @babel/plugin-proposal-optional-chaining
```
