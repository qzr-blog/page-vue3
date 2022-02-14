<!--
 * @Date         : 2022-01-18 15:16:53
 * @Description  : 登录/注册模块
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-02-14 14:45:24
-->


<template>
  <div>
    <el-dialog :model-value="show"
               :before-close="beforeClose"
               title="登录">

      <el-form :model="form"
               label-position="right"
               label-width="70px">
        <el-form-item label="手机号"
                      placeholder="请输入手机号">
          <el-input v-model="form.mobile" />
        </el-form-item>

        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            show-password />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary"
                     @click="goRegister">注册</el-button>
          <el-button @click="emit('update:show', false)">取消</el-button>
          <el-button type="primary"
                     @click="login">登录</el-button>
        </span>
      </template>
    </el-dialog>
  </div>

  <Register v-model:show="showRegister" />
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import api from '@/api'
import { useUser } from '@/store/user'
import Register from './Register.vue'

const userStore = useUser()

const props  = defineProps({
  show: Boolean
})

const emit = defineEmits(['update:show'])

const showRegister = ref(false)

const form = reactive({
  mobile: '',
  password: ''
})

function login() {
  userStore.login(form)
  // emit('update:show', false)
}

function goRegister() {
  showRegister.value = true
  emit('update:show', false)
}

function beforeClose(done) {
  emit('update:show', false)
  done()
}
</script>

<style scoped lang='stylus'>

</style>
