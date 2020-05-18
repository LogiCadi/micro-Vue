# micro-Vue

## Vue 基础功能的简单实现

```html
<!-- simple页面模板 -->
<div id="app">
  <p>{{ name }} / {{age }} years</p>
  <p>{{ sex }}</p>
  <p>I love {{ type.fav }}</p>
</div>
```

```html
<!-- 引入js -->
<script src="lvue.js"></script>
```

```javascript
// 实例化lvue
const lvue = new LVue({
  el: "#app",
  data: {
    name: "Jack",
    age: 15,
    type: {
      fav: "math",
    },
  },
});
```

```javascript
// 改变数据
const change = function () {
  lvue.setData({ name: document.querySelector("#input").value });
};
```
