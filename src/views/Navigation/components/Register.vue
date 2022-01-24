<!--
 * @Date         : 2022-01-18 15:16:53
 * @Description  : 注册模块
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-01-21 10:13:42
-->


<template>
  <div>
    <el-dialog v-if="show"
               title="Shipping address">
      <el-form :model="form">
        <el-form-item label="Promotion name">
          <el-input v-model="form.name"
                    autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones">
          <el-select v-model="form.region"
                     placeholder="Please select a zone">
            <el-option label="Zone No.1"
                       value="shanghai" />
            <el-option label="Zone No.2"
                       value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="emit('update:show', false)">Cancel</el-button>
          <el-button type="primary"
                     @click="emit('update:show', false)">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
defineProps({
  show: Boolean
})

const emit = defineEmits(['update:show'])

const dialogFormVisible = ref(true)
const form = reactive({
  name: '',
  region: ''
})
</script>

<style scoped lang='stylus'>

</style>
