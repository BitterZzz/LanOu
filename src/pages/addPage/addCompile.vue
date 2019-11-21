<template>
  <div class="restrict">
    <h2>基本权限：</h2>
    <div class="choice">
      <el-checkbox-group v-model="checkedCities"
                         v-for="city in cities"
                         :key="city.id"
                         @change="change">
        <el-checkbox :label="city">{{city.name}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'checkbox',
  data() {
    return {
      checkedCities: [],
      cities: []
    }
  },
  methods: {
    // 获取菜单信息
    checkAction() {
      this.$get(this.$api.getLanOuAuthority, {
        levelId: 0
      }).then(res => {
        console.log(res.data.data,"123")
        let data = res.data.data
        this.cities = data.slice(4, 15)
        this.cities = this.cities.map(item => {
          return {
            name: item.authorityName,
            id: item.id
          }
        })

        console.log(this.cities, 'citys')
        var citie = this.cities
        if(citie.length === 1){
            console.log(1)
              this.checkAction()
        }
      })
    },
    // 获取checkId
    change(res) {
      let relative = []
      console.log(res, '2')
      console.log(res.id,"3")
      for (var i = 0; i < res.length; i++) {
        relative.push(res[i].id)
        console.log(relative, '22222333')
      }
      //  arr = relative.join(",")
      this.checkId = '1,2,3' + relative.join(',')
      localStorage.setItem('checkId',this.checkId);
      console.log(this.checkId, '44')
    }
  },

  mounted() {
    this.checkAction()
  }
}
</script>>
