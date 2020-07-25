// 初期
var ap1 = new Vue({
  el: "#app",
  data: {
    myText: "aa",
  },
});

// v-bind
var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date(),
  },
});
app2.message = "test"; //この場合、v-bind:title='message'で表示されるのは、'test'に上書きされる

// v-if
var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});
app3.seen = false;
app3.seen = true;

// v-for
var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ text: "a" }, { text: "b" }],
  },
});
app4.todos.push({ text: "new item" });

// v-on
var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

// v-model
var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!",
  },
});

// コンポーネント
Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "vegetables" },
      { id: 1, text: "Cheese" },
    ],
  },
});

//object.freeze
var obj = {
  foo: "bar",
};

Object.freeze(obj);

new Vue({
  el: "#app-8",
  data: obj,
});

// watch
var app10 = new Vue({
  el: "#app-10",
  data: {
    test: "aan",
  },
  methods: {
    onppp: function () {
      this.test = "aavv";
    },
  },
});

app10.$watch('test', function(newval,oldval){
    console.log(newval + ' ' + oldval) 
})