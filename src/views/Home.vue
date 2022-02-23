<template>
  <div class="container">
    <div class="header">add to history</div>
    <input v-model="result" type="text" class="result" />
    <div class="first-row">
      <input
        @click="calcRadic()"
        type="button"
        name=""
        value="&radic;"
        class="global"
      />
      <input
        @click="calcFuncLevel('(')"
        
        type="button"
        name=""
        value="("
        class="global"
      />
      <input
        @click="calcFuncLevel(')')"
        :class="{ deActive: activePara==0 }"
        type="button"
        name=""
        value=")"
        class="global"
      />
      <input
        :class="{
          activeSymbol: activeSymbol == '%',
          deActive: result != null,
        }"
        @click="calcFunc('%')"
        type="button"
        name=""
        value="%"
        class="global"
      />
    </div>
    <div class="second-row">
      <input
        @click="addNumber(7)"
        type="button"
        name=""
        value="7"
        class="global"
      />
      <input
        @click="addNumber(8)"
        type="button"
        name=""
        value="8"
        class="global"
      />
      <input
        @click="addNumber(9)"
        type="button"
        name=""
        value="9"
        class="global"
      />
      <input
        @click="calcFunc('/')"
        type="button"
        :class="{
          activeSymbol: activeSymbol == '/',
          deActive: flagAlamat == false,
        }"
        name=""
        value="/"
        class="global"
      />
    </div>
    <div class="third-row">
      <input
        @click="addNumber(4)"
        type="button"
        name=""
        value="4"
        class="global"
      />
      <input
        @click="addNumber(5)"
        type="button"
        name=""
        value="5"
        class="global"
      />
      <input
        @click="addNumber(6)"
        type="button"
        name=""
        value="6"
        class="global"
      />
      <input
        @click="calcFunc('*')"
        type="button"
        :class="{
          activeSymbol: activeSymbol == '*',
          deActive: flagAlamat == false,
        }"
        name=""
        value="*"
        class="global"
      />
    </div>
    <div class="fourth-row">
      <input
        @click="addNumber(1)"
        type="button"
        name=""
        value="1"
        class="global"
      />
      <input
        @click="addNumber(2)"
        type="button"
        name=""
        value="2"
        class="global"
      />
      <input
        @click="addNumber(3)"
        type="button"
        name=""
        value="3"
        class="global"
      />
      <input
        @click="calcFunc('-')"
        type="button"
        :class="{
          activeSymbol: activeSymbol == '-',
          deActive: flagAlamat == false,
        }"
        name=""
        value="-"
        class="global"
      />
    </div>
    <div class="conflict">
      <div class="left">
        <input
          @click="addNumber(0)"
          :class="{ deActive: flagZero == true }"
          type="button"
          name=""
          value="0"
          class="big"
        />
        <input
          @click="floatNumber('.')"
          type="button"
          :class="{ deActive: flagNoghte == 1 }"
          name=""
          value="."
          class="small"
        />
        <input
          :class="{ deActive: flagDelete == false }"
          @click="deleteNumber()"
          type="button"
          name=""
          value="Del"
          class="red small white-text top-margin"
        />
        <input
          :class="{ deActive: flagEqual == false }"
          @click="equal()"
          type="button"
          name=""
          value="="
          class="green white-text big top-margin"
        />
      </div>
      <div class="right">
        <input
          @click="calcFunc('+')"
          :class="{
            activeSymbol: activeSymbol == '+',
            deActive: flagAlamat == false,
          }"
          type="button"
          name=""
          value="+"
          class="global grey plus"
        />
      </div>
    </div>
  </div>
</template>
<script>
// (100+)500
export default {
  data() {
    return {
      flagNoghte:0,
      flagAlamat: false,
      flagAlamat2: false,
     activePara:0,
     
      flagPara: false,
      flagZero: false,
      EQflag: false,
      activeSymbol: "",
      result: "",
      flagEqual: false,
      flagDelete: false,
      mathEx: "",
      idInDafe:1000,
    };
  },
  methods: {
    floatNumber(nogte){
      this.result+="."
      this.flagNoghte=1
    },
    calcRadic() {
         
      // انجام محاسبات رادیکال

      this.result = Math.sqrt(this.result, 2);
    },
    calcFuncLevel(oOrC) {
      this.flagNoghte=0;
      // باز کردن یا بستن پرانتز

       
      this.result = this.result + oOrC;

      if (oOrC == "(") {
        this.activePara++;
      } else {
        this.activePara--;
      }
    },
    

    deleteNumber() {
      // حذف اخرین عدد اضافه شده
      this.result = this.result.substring(0, this.result.length - 1);
    },
    equal() {
         localStorage.setItem(this.idInDafe,this.mathEx+(this.result)+"="+`${eval(this.mathEx + this.result)}`)
      // محاسبه و ریختن محاسبه در ریزالت
      this.result = `${eval(this.mathEx + this.result)}`;
   
      this.idInDafe++;
      this.EQflag = false;

      this.mathEx = "";
      this.flagNoghte=0;
    },
    addNumber(num) {
      this.flagAlamat = true;
      //  اضافه کردن عدد به اخر استرینگ یا ریزالت

      // console.log(this.flagZero);

      if (this.flagZero) {
        this.result = this.result.substring(0, this.result.length - 1);
        this.result = num;
        this.flagZero = false;
      } else this.result = this.result + `${num}`;
      this.activeSymbol = "";
      this.numbShomar++;
    },
    calcFunc(sym) {
      // اضافه کردن چهار عمل اصلی
      // 10+2-
      // let sum=eval()
      if (
        // this.result.slice(-1) == "+" ||
        // this.result.slice(-1) == "-" ||
        // this.result.slice(-1) == "/" ||
        // this.result.slice(-1) == "*"
        this.activeSymbol == "+" ||
        this.activeSymbol == "-" ||
        this.activeSymbol == "/" ||
        this.activeSymbol == "*" 
      ) {
        // alert(this.activeSymbol);
        // this.result.substring(0, this.result.length - 1) = this.activeSymbol;

        // alert(this.activeSymbol);
        //  console.log("math ex ine " ,this.mathEx)

        this.mathEx = this.mathEx.slice(0, -1) + `${sym}`;
        //  console.log("math ex ine " ,this.mathEx)

        this.EQflag = true;
        this.activeSymbol = sym;
        this.mathEx += this.result;
        this.result = "";
        // this.mathEx += sym;
      } else {
        this.EQflag = true;
        this.activeSymbol = sym;
        this.mathEx += this.result;
        this.result = "";
        this.mathEx += sym;
      }
      // console.log("math ex ine " ,this.mathEx)
      // console.log("result ham ine " , this.result)
    },
  },
  mounted() {
    if(localStorage.mathEx){
this.result=localStorage.mathEx;
    }
  },

  watch: {
//     mathEx(newValue){
// this.$cookie.set('test', `${newValue}`, 1000);

//     },
    result(newValue, oldValue) {
      if (newValue != "") {
       
        this.flagAlamat = true;
        this.flagDelete = true;
        this.flagActivatoreNumb = true;
        if (this.EQflag == true && this.result != "") {
          // اگر هم ریزالت خالی نباشد هم یکی از چهار عمل اصلی زده شده باشد , کاربر بتواند مساوی را فشار دهد
          this.flagEqual = true;
        } else {
          this.flagEqual = false;
        }
        if (newValue == "0") {
          // اگر کاربر صفر را وارد کرد نتواند دوباره صفر را وارد کند . اگر عدد دیگری را زد ان عدد جایگزین ضفر شود
          this.flagZero = true;
        }
        // else if ((newValue.slice(-1)) !="0"  &&(newValue.slice(-1)) !="9" &&(newValue.slice(-1)) !="8" &&(newValue.slice(-1)) !="7" &&(newValue.slice(-1)) !="6" &&(newValue.slice(-1)) !="5" &&(newValue.slice(-1)) !="4" &&(newValue.slice(-1)) !="3" &&(newValue.slice(-1)) !="2" &&(newValue.slice(-1)) !="1" ) {
        //   this.activeParaC =true;
        // }
      } else {
        
        if (this.activeSymbol == "") {
          this.flagAlamat = false;
        }
        this.flagNoghte=0;
        this.flagDelete = false;
        this.flagZero = false;
        //    this.finalNumbShomar+=this.numbShomar;
        // alert(this.finalNumbShomar)
        // this.numbShomar=0;
      }
    },
  },
};
</script>
<style>
.deActive {
  opacity: 0.5;
  pointer-events: none;
}
.activeSymbol {
  background-color: black !important;
  color: white;
}
* {
  margin: 0;
  padding: 0;
}
.container {
  margin: auto;
  width: 85%;
  padding: 10px;
  border: 1px solid #f2f2f2;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(176, 176, 176, 1);
  -moz-box-shadow: 1px 1px 4px 0px rgba(176, 176, 176, 1);
  box-shadow: 1px 1px 4px 0px rgba(176, 176, 176, 1);
  background-color: #fff;
  height: 450px;
  background-color: #f8f8f8;
}
.header {
  background-color: #81c784;
  padding: 10px;
  color: #fff;
  text-align: center;
}
.result {
  font-size: 24px;
  padding: 24px 5px;
  font-weight: 700;
  text-align: right;
  width: 96%;
  border: 2px solid red;
  background-color: #f8f8f8;
  pointer-events: none;
}
.first-row,
.second-row,
.third-row,
.fourth-row,
.conflict {
  display: inline-block;
  width: 100%;
}
.global {
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  background-color: #f2f2f2;
  float: left;
  width: 23.5%;
  margin: 0 2px;
  /*border: 1px solid #000;*/
}
.conflict .left,
.conflict .right {
  float: left;
  position: relative;
}
.left {
  width: 74%;
}
.right {
  width: 24%;
}
.big {
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  background-color: #f2f2f2;
  float: left;
  width: 64.5%;
  margin: 0 2px;
}
.small {
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  background-color: #f2f2f2;
  float: left;
  width: 31.5%;
  margin: 0 2px;
}
.plus {
  height: 105px;
  width: 100%;
}
.green {
  background-color: #81c784;
}
.red {
  background-color: #f50258;
}
.grey {
  background-color: #f2f2f2;
}
.white-text {
  color: #fff;
}
.top-margin {
  margin-top: 4px;
}
</style>
