var app = new Vue({
  el:'#app',
  data:{
    message:"hello World",
    count:0
  }});
  
  setInterval(function(){
    app.count++;
  },1000)
  
  
  new Vue({
    el: '#app2',
    data: {
      url: 'https://www.google.com'
    }
  })
  
  
  new Vue({
    el:'#app3',
    data:{
      list:[
        { label: 'Vue.js'},
        { label: 'Angular.js'},
        { label: 'React'}
      ]
    }
  })

  new Vue({
    el:'#app4',
    data:{
      message:'Hello Vue!'
    }
  })