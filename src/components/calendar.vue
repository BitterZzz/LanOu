<template>
  <div class="calendar">
    <input type="text" placeholder="选择日期" @focus="trueDateBox" :value="date" readonly />
    <transition name="fade">
      <div class="date-box" v-if="dateBoxFlag">
        <div class="day-select">
          <div class="year">
            <div>
              <button @click="reduceYear">&laquo;</button>
            </div>
            <div class="year-value">
              <input type="text" @click="selected" v-model.number="year" />
              <span>年</span>
            </div>
            <div>
              <button @click="addYear">&raquo;</button>
            </div>
          </div>
          <div class="mounth">
            <div>
              <button @click="reduceMonth">&lt;</button>
            </div>
            <div class="mouth-value">
              <input type="text" @click="selected" v-model.number="month" />
              月
            </div>
            <div>
              <button @click="addMonth">&gt;</button>
            </div>
          </div>
        </div>
        <div class="day-screen">
          <div>
            <span v-for="week in week">{{ week }}</span>
          </div>
          <div @click="selectDay">
            <span v-for="day in previousMonth" class="previousMonth">{{ day }}</span>
            <span
              v-for="day in monthDay[month - 1]"
              v-bind:class="isActive(day)"
              class="currentMonth"
            >{{ day }}</span>
            <span v-for="day in nextMonth" class="nextMonth">{{ day }}</span>
          </div>
          <div @click="checktoday" class="checktoday">
            <!-- <span class="checktodaypan">今天</span> -->
            <div class="time">
              <input type="number" />
              <span>时</span>
              <input type="number" />
              <span>分</span>
            </div>
            <div class="btn">
              <button>清空</button>
              <button>确定</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateBoxFlag: false,

      year: 0,

      month: 0,

      day: 0,

      previousMonth: [],

      nextMonth: [],

      week: ["日", "一", "二", "三", "四", "五", "六"],

      monthDay: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
  },

  computed: {
    date() {
      if (this.year == 0 || this.month == 0 || this.day == 0) {
        return "";
      }

      return this.year + "-" + this.month + "-" + this.day;
    }
  },

  watch: {
    year: function(val) {
      if (typeof val !== "number") {
        let date = new Date();

        this.year = date.getFullYear();
      }

      if (val < 0) {
        this.year = 1;
      }

      this.dayScreen();
    },

    month: function(val) {
      if (typeof val !== "number") {
        let date = new Date();

        this.month = date.getMonth() + 1;
      }

      if (val < 1) {
        this.month = 1;
      }

      if (val > 12) {
        this.month = 12;
      }

      this.dayScreen();
    }
  },

  methods: {
    // 突出显示当前日期
    isActive(index) {
      if (index == this.day) {
        return {
          active: true
        };
      }
    },

    // 显示日期盒子并初始化
    trueDateBox() {
      if (this.date == "") {
        let date = new Date();

        this.year = date.getFullYear();

        if (this.isLeapYear(this.year)) {
          this.monthDay[1] = 29;
        } else {
          this.monthDay[1] = 28;
        }

        this.month = date.getMonth() + 1;

        this.day = date.getDate();
      }

      this.dayScreen();

      this.dateBoxFlag = true;
    },
    checktoday() {
      let date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      this.day = date.getDate();
      // this.dateBoxFlag = false;
    },
    // 增减年份
    addYear() {
      this.year++;

      if (this.isLeapYear(this.year)) {
        this.monthDay[1] = 29;
      } else {
        this.monthDay[1] = 28;
      }
    },

    reduceYear() {
      this.year--;

      if (this.isLeapYear(this.year)) {
        this.monthDay[1] = 29;
      } else {
        this.monthDay[1] = 28;
      }
    },

    // 增减月份
    addMonth() {
      this.month++;

      if (this.month > 12) {
        this.month = 1;

        this.year++;
      }
    },

    reduceMonth() {
      this.month--;

      if (this.month < 1) {
        this.month = 12;

        this.year--;
      }
    },

    // 获取input里的文字
    selected(e) {
      e.target.select();
    },

    // 选择日期
    selectDay(e) {
      let targetClass = e.target.className;

      if (targetClass == "previousMonth") {
        if (this.month == 1) {
          this.month = 12;

          this.year--;
        } else {
          this.month = this.month - 1;
        }

        this.day = parseInt(e.target.innerText);
      } else if (targetClass == "nextMonth") {
        if (this.month == 12) {
          this.month = 1;

          this.year++;
        } else {
          this.month = this.month + 1;
        }

        this.day = parseInt(e.target.innerText);
      } else {
        this.day = parseInt(e.target.innerText);
      }

      // this.dateBoxFlag = false;
    },

    // 日期显示
    dayScreen() {
      // 上一个月
      let firstDate = new Date(this.year, this.month - 1, 1);

      let firstWeek = firstDate.getDay();

      let preMonthDay = null;

      if (this.month == 1) {
        preMonthDay = this.monthDay[11];
      } else {
        preMonthDay = this.monthDay[this.month - 2];
      }

      for (let i = 0; i < preMonthDay; i++) {
        this.previousMonth[i] = i + 1;
      }

      if (firstWeek == 0) {
        this.previousMonth = this.previousMonth.slice(-7);
      } else {
        this.previousMonth = this.previousMonth.slice(-firstWeek);
      }

      // 下一个月
      let endDate = new Date(
        this.year,
        this.month - 1,
        this.monthDay[this.month - 1]
      );

      let endWeek = endDate.getDay();

      let nextMonthDay = null;

      if (this.month == 12) {
        nextMonthDay = this.monthDay[0];
      } else {
        nextMonthDay = this.monthDay[this.month];
      }

      for (let i = 0; i < nextMonthDay; i++) {
        this.nextMonth[i] = i + 1;
      }

      if (endWeek == 6) {
        this.nextMonth = this.nextMonth.slice(0, 7);
      } else {
        this.nextMonth = this.nextMonth.slice(0, 6 - endWeek);
      }
    },

    // 判断是否是闰年
    isLeapYear(year) {
      return year % 100 == 0
        ? year % 400 == 0
          ? true
          : false
        : year % 4 == 0
        ? true
        : false;
    }
  }
};
</script>

<style>
.calendar {
  width: 280px;

  padding: 5px;

  position: relative;
}

.calendar > input {
  width: 50%;

  height: 20px;

  padding: 5px;
}

.calendar .fade-enter-active,
.calendar .fade-leave-active {
  transition: all 0.5s;
}

.calendar .fade-enter,
.calendar .fade-leave-active {
  opacity: 0;

  transform: translateY(-10px);
}

.calendar > div {
  width: 100%;

  border: 1px solid #eaeaea;

  border-radius: 5px;

  box-shadow: 2px 2px 2px #eee;

  position: absolute;

  top: 50px;

  left: 0px;
}

.calendar > div div.day-select {
  display: flex;

  padding: 5px 0;

  height: 30px;

  line-height: 30px;

  color: #888888;

  border-bottom: 1px solid #ccc;
  background: #2488dd;
}

.calendar > div div.day-select input,
.calendar > div div.day-select button {
  border: none;

  background: white;

  text-align: center;

  color: #fff;

  cursor: pointer;
  background: #2488dd;
}
.day-select .year {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 6px;
  color: #fff;
}
.day-select .year .year-value {
  display: flex;
  justify-content: center;
  padding: 0 30px;
}
.day-select .year .year-value input {
  width: 30px;
}
.day-select .mounth {
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  color: #fff;
}
.day-select .mounth .mouth-value {
  display: flex;
  justify-content: center;
  padding: 0 30px;
}
.day-select .mounth .mouth-value input {
  width: 30px;
}
/* .calendar > div div.day-select > div:nth-child(1),
.calendar > div div.day-select > div:nth-child(3) {
  width: 20%;
}

.calendar > div div.day-select > div:nth-child(2) {
  width: 60%;

  display: flex;

  justify-content: center;
}

.calendar > div div.day-select > div:nth-child(2) input:hover {
  background: #eee;
}

.calendar > div div.day-select > div:nth-child(2) input:nth-child(1) {
  width: 50px;
}

.calendar > div div.day-select > div:nth-child(2) input:nth-child(2) {
  width: 30px;
} */

.calendar > div div.day-screen > div {
  width: 280px;

  padding: 0 5px;

  display: flex;

  font-size: 14px;

  justify-content: flex-start;

  flex-wrap: wrap;
}

.calendar > div div.day-screen > div span {
  width: 40px;

  height: 40px;

  text-align: center;

  line-height: 40px;

  border-bottom: 1px solid #ccc;
}

.calendar > div div.day-screen > div:nth-child(1) {
  font-weight: bold;
  background: #f8f8f8;
}

.calendar > div div.day-screen > div:nth-child(2) span {
  cursor: pointer;

  color: #2488dd;
}

.calendar > div div.day-screen > div:nth-child(2) span:hover,
.calendar > div div.day-screen > div:nth-child(2) span.active {
  background: #8cc9fd;

  color: white;
}

.calendar > div div.day-screen > div:nth-child(2) span.previousMonth,
.calendar > div div.day-screen > div:nth-child(2) span.nextMonth {
  color: #888888;
}
.checktoday {
  text-align: center;
}
.checktoday .time{
  margin-left: 10px;
}
.checktoday .time input {
  width: 50px;
  height: 20px;
  margin: auto 0;
  text-align: center;
}
.checktoday .btn{
  margin: auto 0;
  margin-left: 18px;
}
.checktoday .btn button{
  width: 40px;
  height: 20px;
  background: #fff;
  color: #2488DD;
  border: solid 1px #2488DD;
}
.checktodaypan {
  display: inline-block;
  margin: 0 auto;
  background: #21a5ef;
  color: #fff;
}
</style>
