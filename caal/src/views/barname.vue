<template>
  <div>
    <div>
      <br />
      <button id="1" @click="changFunc(1)">افزودن برنامه غذایی</button
      ><button id="5" @click="changFunc(5)">افزودن برنامه غذایی</button
      ><button button id="9" @click="changFunc(9)">افزودن برنامه غذایی</button
      ><button id="13" @click="changFunc(13)">افزودن برنامه غذایی</button>
    </div>
    <br />
    <div>
      <br />
      <button id="2" @click="changFunc(2)">افزودن برنامه غذایی</button
      ><button id="6" @click="changFunc(6)">افزودن برنامه غذایی</button
      ><button id="10" @click="changFunc(10)">افزودن برنامه غذایی</button
      ><button id="14" @click="changFunc(14)">افزودن برنامه غذایی</button>
    </div>
    <br />
    <div>
      <br />
      <button id="3" @click="changFunc(3)">افزودن برنامه غذایی</button
      ><button id="7" @click="changFunc(7)">افزودن برنامه غذایی</button
      ><button id="11" @click="changFunc(11)">افزودن برنامه غذایی</button
      ><button id="15" @click="changFunc(15)">افزودن برنامه غذایی</button>
    </div>
    <br />
    <div>
      <br />
      <button id="4" @click="changFunc(4)">افزودن برنامه غذایی</button
      ><button id="8" @click="changFunc(8)">افزودن برنامه غذایی</button
      ><button id="12" @click="changFunc(12)">افزودن برنامه غذایی</button
      ><button id="16" @click="changFunc(16)">افزودن برنامه غذایی</button>
    </div>

    <br />
    <div>
      <input id="999" type="text" />
      <button @click="submiiiiiiiiit">ویرایش</button>
      <!-- <button @click="showItemsByKey()">qewwwwwwwww</button> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actactiveButton: 0,
      prevNumb: 0,
      strng: "",
    };
  },
  mounted() {
      this.showItemsByKey() 
  },
  watch: {},

  methods: {  
      
      showItemsByKey() {

  for (var key in localStorage) {
    if( document.getElementById(key))
      document.getElementById(key).innerHTML=localStorage[key];
  }

},
    submiiiiiiiiit() {
      
        
      let s = "";

      //     )
    

    //    if(  document
    //     .getElementById("999")
    //     .value.split("")
    //     .forEach(function (valu) {
    //       s += valu;
          
    //       if (valu != " ") {
           
    //       }
        // })==true){alert("ha???")}
        if( document.getElementById("999").value!="")
      document.getElementById(this.prevNumb).innerHTML =
        document.getElementById("999").value;
        localStorage.setItem(this.prevNumb,document.getElementById("999").value)
      // document.getElementById("999").value=document.getElementById(this.prevNumb).value;
      document.getElementById(this.prevNumb).classList.remove("SMRTBTN");
      document.getElementById("999").value = "";
      
    },
    changFunc(num) {
        
      if (num != this.prevNumb && this.prevNumb != 0) {
        document.getElementById(this.prevNumb).classList.remove("SMRTBTN");
      }

      document.getElementById(num).classList.add("SMRTBTN");
      this.prevNumb = num;
    },
  },
};
</script>
<style>
p {
  display: inline;
  font-size: larger;
  float: left;
}
button {
  margin: 5px;
  border: 1px solid;
  width: 200px;
  float: middle;
  height: 50px;
  border-width: 3px;
}
.SMRTBTN {
  border: 3px solid blue;
}
#3333 {
  background-color: black !important;
}

/* div {
  padding: 1px;
  font-size: large;
  
  float: left;
  border: 1px solid;
    width: 200px;
    padding: 20px;
    margin: 40px;
border-width: 3px;
 height: 50px;


} */
/* #qwe {
 
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
 
  border-left-style: solid;
  border-left-width: 1px;
  
  border-right-style: solid;
  border-right-width: 1px;
 
  border-top-style: solid;
  border-top-width: 1px;
  float: left;
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
#BT{
  border-color: yellow;
}
#TXTPUT{
  margin-left: 30px;
  width: 150px;
}
.smartBUT{
  border-color: green ;
  border-Width:"5px";
} */
</style>
