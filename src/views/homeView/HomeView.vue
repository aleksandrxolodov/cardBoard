<template>
  <div class="home-view">
    <card-render
      v-if="cards.length"
      id="card-render"
      :is-read-only="true"
      :class="{
        'home-view__card-render': true,
        'home-view__card-render_mobile': isMobile
      }"
    >
    </card-render>
    <div v-else class="home-view_no-data">
      <span>
        Добавьте карточки на странице
        <router-link :to="`/settings`">Настройки</router-link>
      </span>
    </div>
  </div>
</template>

<script src="./script.js" />
<style src="./style.scss" lang="scss" scoped />
