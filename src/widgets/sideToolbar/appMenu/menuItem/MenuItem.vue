<template>
  <div
    :class="{ menu: true, menu_lightweight: lightweight }"
    @click="$emit('click-wrapper')"
  >
    <router-link
      v-if="item.link"
      class="menu__item"
      :title="item.name"
      :to="item.link"
    >
      <div class="menu__item-icon">
        <v-icon v-if="item.icon" size="18" color="grey">
          {{ item.icon }}
        </v-icon>
      </div>
      <div class="menu__item-name">{{ item.name }}</div>
    </router-link>
  </div>
</template>

<script src="./script.js" />
<style src="./style.scss" lang="scss" scoped></style>
