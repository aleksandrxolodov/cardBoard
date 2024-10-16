<template>
  <div class="base-page">
    <h1 v-if="title" class="base-page__title">
      {{ title }}
    </h1>
    <p v-if="description" class="base-page__description">
      {{ description }}
    </p>
    <slot name="main"></slot>
  </div>
</template>

<script src="./script.js" />
<style src="./style.scss" lang="scss" scoped />
