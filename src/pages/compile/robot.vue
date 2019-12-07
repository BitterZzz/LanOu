<template>
  <div class="robot">
    <h2>指定查看机器：</h2>
    <div>
      <button type="submit"
              class="submit"
              @click="SelectId()">全部机器</button>
      <br />
      <input type="text"
             placeholder="请输入机器ID"
             name="text"
             id="rotID" />
      <div class="append"
           @click="appendFile()">+ 添加</div>
      <div class="reveal"
           v-if="showReveal">
        <div class="botId"
             v-for="item in append"
             :key="item.id">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'robot',
  data() {
    return {
      showReveal: false,
      append: [],
      DidInfo: [],
      charaID:[]
    }
  },
  methods: {
    // 添加did
    appendFile() {
      let botID = document.querySelector('#rotID')
      console.log(botID, 'botID')
      if (botID.value === '') {
        return
      } else if (botID.value !== '') {
        this.showReveal = true
        this.DidInfo = botID.value
        this.append.push(botID.value)
      }
      // 获取全部did
      this.charaID = this.append.join(',')
      console.log(this.charaID)
      localStorage.setItem('lanOuDid',this.charaID)
    },
    // 全部机器did
    SelectId() {
      console.log(1)
      this.$get(this.$api.getLanOuByDid, {
        sak: 1
      }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>>