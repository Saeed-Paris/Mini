<template>
  <div class="about">
   
      <ul id="example-1">
        
      </ul>
    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // func(item) {
    //   console.log(item);
    // },
    mounted() {
      for (var key in localStorage) { 
        if (key > 999) {
          let item = localStorage.getItem(key);
          let li = document.createElement("li");

          li.innerText = item;

          document.getElementById("example-1").appendChild(li);

      
        }
      }
    },
    // mounted(){
    //   if(this.$cookie.get('token')){
    //   }
    //   this.$cookie.delete('token'array.tos)
    //   this.$cookie.set('token',token,9)
    //   this.$cookie.set('token',token)
    // }
  },
};
</script> 
