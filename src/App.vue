<script setup lang="ts">
import { type Ref, ref } from "vue";
import { login } from "./request"
let userId: Ref<string> = ref("");
let userPassword: Ref<string> = ref("");
let errorMessage: Ref<string> = ref("");
let isLogining: Ref<boolean> = ref(false)
async function onLoginClick(): Promise<void> {
  isLogining.value = true
  if (userId.value == "") {
    isLogining.value = false
    errorMessage.value = "请输入用户名";
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  } else if (userPassword.value == "") {
    isLogining.value = false
    errorMessage.value = "请输入密码";
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  } else {
    window.location.href = "/src/new-page";
    /*login(userId.value, userPassword.value).then((request) => {
      const data = request.data
    })*/
  }
}
</script>

<template>
  <div><input v-model="userId" placeholder="请输入用户名" /></div>
  <div><input v-model="userPassword" placeholder="请输入密码" /></div>
  <div><button v-on:click="onLoginClick">登录</button></div>
  <div v-if="errorMessage">{{ errorMessage }}</div>
</template>
