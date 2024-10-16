<template>
  <div>
    <menu-item
      v-for="(item, idx) in appMenu"
      :key="idx"
      :lightweight="lightweight"
      :item="item"
      @group-click="onClickGroup"
    ></menu-item>
  </div>
</template>

<script src="./script.js" />
