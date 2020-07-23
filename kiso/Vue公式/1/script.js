var ap1 = new Vue({
    el:'#app',
    data:{
        myText :'aa'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date()
    }
  })
  app2.message = "test" //この場合、v-bind:title="message"で表示されるのは、"test"に上書きされる