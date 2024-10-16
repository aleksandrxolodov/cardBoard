<template>
  <nav class="header-toolbar">
    <div
      :class="{
        'header-toolbar__content': true,
        'header-toolbar__content_mobile': isMobile
      }"
    >
      <div shrink class="header-toolbar__title">{{ title }}</div>
    </div>
  </nav>
</template>

<script src="./script.js" />
<style src="./style.scss" lang="scss" scoped />
