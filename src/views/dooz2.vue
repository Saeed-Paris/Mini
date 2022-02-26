<template>
  <div>
    <div>
      <div>
        <button id="2" @click="clicked(2)"></button
        ><button id="7" @click="clicked(7)"></button
        ><button id="6" @click="clicked(6)"></button>
      </div>
      <div>
        <button id="9" @click="clicked(9)"></button
        ><button id="5" @click="clicked(5)"></button
        ><button id="1" @click="clicked(1)"></button>
      </div>
      <div>
        <button id="4" @click="clicked(4)"></button
        ><button id="3" @click="clicked(3)"></button
        ><button id="8" @click="clicked(8)"></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nobat: 0,
      XO: "",
    };
  },
  methods: {
    clicked(num) {
      this.addXO(num);
      this.checkers(num);
    },
    checkers(numb2) {
      let baghimande = 15 - numb2;
      let nesf = Math.floor(baghimande / 2);
      if (numb2 > 5) {
        for (let i = baghimande - 1; i > nesf; i--) {
          if (i != numb2) console.log(i, baghimande - i);
          if (
            document.getElementById(numb2).innerHTML ==
              document.getElementById(baghimande - i).innerHTML &&
            document.getElementById(i).innerHTML ==
              document.getElementById(numb2).innerHTML
          ) {
            alert(`bazikon e shomare ${this.XO} barande sshaaaad `);
            this.$router.go(0);
          }
        }
      }
      if (numb2 <= 5) {
        for (let i = 9; i > baghimande - i; i--) {
          if (i != numb2 && numb2 != baghimande - i) {
            console.log(i, 15 - i - numb2);
            if (
              document.getElementById(numb2).innerHTML ==
                document.getElementById(baghimande - i).innerHTML &&
              document.getElementById(i).innerHTML ==
                document.getElementById(numb2).innerHTML
            ) {
              alert(`bazikon e shomare ${this.XO} barande sshaaaad `);
              this.$router.go(0);
            }
          }
        }
      }
    },
    addXO(num) {
      let chosen = document.getElementById(num);
      chosen.style.pointerEvents = "none";
      if (this.nobat % 2 == 0) {
        chosen.innerHTML = "X";
      } else if (this.nobat % 2 == 1) {
        chosen.innerHTML = "O";
      }
      this.nobat++;
    },
  },
  watch: {
    nobat(newValue) {
      if (newValue % 2 == 0) {
        this.XO = "X";
      } else {
        this.XO = "O";
      }
    },
  },
};
</script>
<style></style>
