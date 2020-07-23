/**
 * コンポーネント定義
 */
Vue.component('my-component', {
  props:['message'],
  template: '<h1>{{ message }}</h1>'
})

Vue.component('my-button', {
  props: {
    label: {  // バリデーション
    type: String, // 文字列
    required: true  // 必須
  }
},
template: '<button v-on:click="clickLabel">{{ label }}</button>',
methods: {
  clickLabel: function () {
    // イベント発火
    this.$emit('click', this.label);
  }
},
})

/**
 * メイン
 */
new Vue({
  el: '#main',
  data: {
      message: 'click my buttons',
  },
  methods: {
      labelClick: function (label) {
        this.message = label + ' button click!';
    }
  }
});


new Vue({
  el:'#masutest',
  data:{
    mes:"tst",
    list:[1,2,3,4],
    obj:{a:1, b:2 ,bb:"hogehoge"}
  }
})

