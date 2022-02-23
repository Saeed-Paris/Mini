<template>
  <div>
    <div>
      <button
        :class="{ inDanger: flagZero == true }"
        id="1"
        @click="addXO(1)"
      ></button
      ><button
        :class="{ inDanger: flagZero == true }"
        id="2"
        @click="addXO(2)"
      ></button
      ><button
        :class="{ inDanger: flagZero == true }"
        id="3"
        @click="addXO(3)"
      ></button>
    </div>
    <div>
      <button
        :class="{ inDanger: flagZero == true }"
        id="4"
        @click="addXO(4)"
      ></button
      ><button
        :class="{ inDanger: flagZero == true }"
        id="5"
        @click="addXO(5)"
      ></button
      ><button
        :class="{ inDanger: flagZero == true }"
        id="6"
        @click="addXO(6)"
      ></button>
    </div>
    <div>
      <button
        :class="{ inDanger: flagZero == true }"
        id="7"
        @click="addXO(7)"
      ></button
      ><button
        :class="{ inDanger: flagZero == true }"
        id="8"
        @click="addXO(8)"
      ></button
      ><button
        :class="{ inDanger: flagZero == true }"
        id="9"
        @click="addXO(9)"
      ></button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawFlag: 0,
      flagEnd: false,
      nobat: 1,
      zX: [],
      zO: [],
      scoreXr1: 0,
      scoreXr2: 0,
      scoreXr3: 0,
      scoreXs1: 0,
      scoreXs2: 0,
      scoreXs3: 0,
      scoreXZb: 0,
      scoreXZp: 0,

      scoreOr1: 0,
      scoreOr2: 0,
      scoreOr3: 0,
      scoreOs1: 0,
      scoreOs2: 0,
      scoreOs3: 0,
      scoreOZb: 0,
      scoreOZp: 0,
    };
  },
  methods: {
    addXO(num) {
      let chosen = document.getElementById(num);
      // chosen.removeEventListener("on-click","addXO()")
      this.drawFlag++;

      if (
        this.nobat % 2 == 0 &&
        chosen.innerText != "O" &&
        chosen.innerText != "X"
      ) {
        chosen.innerHTML = "X";
        this.zX.push(num);
        this.nobat++;
        if (num == 1) {
          this.scoreXr1++;
          this.scoreXZb++;
          this.scoreXs1++;
        } else if (num == 2) {
          this.scoreXs2++;
          this.scoreXr1++;
        } else if (num == 3) {
          this.scoreXs3++;
          this.scoreXr1++;
          this.scoreXs1++;
        } else if (num == 4) {
          this.scoreXr2++;
          this.scoreXs1++;
        } else if (num == 5) {
          this.scoreXs2++;
          this.scoreXZp++;
          this.scoreXZb++;
          this.scoreXr2++;
        } else if (num == 6) {
          this.scoreXs3++;
          this.scoreXr2++;
        } else if (num == 7) {
          this.scoreXr3++;
          this.scoreXs1++;
          this.scoreXZp++;
        } else if (num == 8) {
          this.scoreXs2++;
          this.scoreXr3++;
        } else if (num == 9) {
          this.scoreXs3++;
          this.scoreXr3++;
          this.scoreXZb++;
        }
        if (
          this.scoreXr1 == 3 ||
          this.scoreXr2 == 3 ||
          this.scoreXr3 == 3 ||
          this.scoreXs1 == 3 ||
          this.scoreXs2 == 3 ||
          this.scoreXs3 == 3 ||
          this.scoreXZb == 3 ||
          this.scoreXZp == 3
        ) {
          alert("Bazikon X barande shod");
          this.flagEnd = true;
        }
      } else if (
        this.nobat % 2 == 1 &&
        chosen.innerHTML != "X" &&
        chosen.innerText != "O"
      ) {
        this.nobat++;
        chosen.innerHTML = "O";
        this.zO.push(num);
        if (num == 1) {
          this.scoreOr1++;
          this.scoreOZb++;
          this.scoreOs1++;
        } else if (num == 2) {
          this.scoreOs2++;
          this.scoreOr1++;
        } else if (num == 3) {
          this.scoreOs3++;
          this.scoreOr1++;
          this.scoreOZp++;
        } else if (num == 4) {
          this.scoreOr2++;
          this.scoreOs1++;
        } else if (num == 5) {
          this.scoreOs2++;
          this.scoreOZp++;
          this.scoreOZb++;
          this.scoreOr2++;
        } else if (num == 6) {
          this.scoreOs3++;
          this.scoreOr2++;
        } else if (num == 7) {
          this.scoreOr3++;
          this.scoreOs1++;
          this.scoreOZp++;
        } else if (num == 8) {
          this.scoreOs2++;
          this.scoreOr3++;
        } else if (num == 9) {
          this.scoreOs3++;
          this.scoreOr3++;
          this.scoreOZb++;
        }

        if (
          this.scoreXr1 == 3 ||
          this.scoreOr2 == 3 ||
          this.scoreOr3 == 3 ||
          this.scoreOs1 == 3 ||
          this.scoreOs2 == 3 ||
          this.scoreOs3 == 3 ||
          this.scoreOZb == 3 ||
          this.scoreOZp == 3
        ) {
          alert("bazikon O barande");
          this.flagEnd = true;
        }
      }
    },
  },
  watch: {
    flagEnd(newValue) {
      if (newValue == true) {
        location.reload();
      }
    },
    drawFlag(newValue) {
      if (newValue == 9 && this.flagEnd == false) {
        alert("bazi faghede barande ast");
        location.reload();
      }
    },
  },
};
//       this.zX.forEach(function (valu) {
//         if(valu==1){
//             scoreXr1++

//   }
</script>
<style>
.inDanger {
  background-color: red;
}
</style>
