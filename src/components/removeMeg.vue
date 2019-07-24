<template>
    <div>

        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >

         <div v-for="city in cities" :key="city.id" @click="checkbox(city)">
          <el-checkbox   :label="city"  >
            <a>{{city.userId}}</a>
            <a>{{city.didName}}</a>
            <a>{{city.realName}}</a>
            <a>{{city.cellPhone}}</a>
            <a>{{city.position}}</a>
            <a>
              <div>{{city.workUnit}}</div>
            </a>
            <a>{{city.productId}}</a>
            <a id="decide">
              {{city.isEnabled === "1" ? '可用': '禁止'}}
              <img :src="city.isEnabled === '1' ?  stop : ky" />
            </a>
            <a>{{city.createTime}}</a>
            <a @click="deleteShow">删除</a> 
            <p class="box-el"></p>
          </el-checkbox>
           </div>
          <p>
            <el-button v-for="i in 5" :key="i" type="text" ></el-button>
          </p>
        </el-checkbox-group>


    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
