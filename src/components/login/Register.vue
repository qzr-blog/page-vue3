<!--
 * @Date         : 2022-01-18 15:16:53
 * @Description  : 登录/注册模块
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2022-02-14 14:46:24
-->


<template>
  <div>
    <el-dialog :model-value="show"
               :before-close="beforeClose"
               title="登录">

      <el-form :model="form"
               label-position="right"
               label-width="70px">
        <el-form-item label="手机号">
          <el-input v-model="form.mobile"
                    placeholder="请输入手机号" />
        </el-form-item>

        <el-form-item label="用户名">
          <el-input v-model="form.username"
                    placeholder="请输入用户名" />
        </el-form-item>

        <el-form-item label="邮箱">
          <el-input v-model="form.email"
                    placeholder="请输入邮箱" />
        </el-form-item>

        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            show-password />
        </el-form-item>

        <el-form-item label="确认密码">
          <el-input
            v-model="form.passwordRepeat"
            type="password"
            placeholder="请重新输入密码"
            show-password />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="emit('update:show', false)">取消</el-button>
          <el-button type="primary"
                     @click="register">注册</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import { ElMessage } from 'element-plus'
import api from '@/api'

const props  = defineProps({
  show: Boolean
})

const emit = defineEmits(['update:show'])

const form = reactive({
  username: '',
  password: '',
  passwordRepeat: '',
  mobile: '',
  email: ''
})

async function register() {
  const res = await api.register(form)
  console.log(res)
  ElMessage.success('注册成功')
  emit('update:show', false)
}

function beforeClose(done) {
  emit('update:show', false)
  done()
}
</script>

<style scoped lang='stylus'>

</style>
