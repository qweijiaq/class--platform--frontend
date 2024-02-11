<template>
  <div>首页</div>
  <div color-red bg-blue font-600 fs-30 w-100 h-100 flexc>在线教育平台</div>
  <a-button w-20 color-green! bg-red! @click="addClick">按钮</a-button>
  <h2>action:{{ count }}</h2>
  <h2>getters:{{ multiplyCount }}</h2>
</template>

<script setup lang="ts">
import { test } from "../api/test";
const data = await test();
console.log(data);

const __temp = useUser(),
  count = toRef(__temp, "count"),
  add = __temp.add,
  multiplyCount = toRef(__temp, "multiplyCount");

const addClick = () => {
  add();
};
</script>

<style scoped></style>
