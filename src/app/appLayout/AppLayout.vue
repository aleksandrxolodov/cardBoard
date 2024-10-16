<template>
  <v-layout class="app__wrapper">
    <header-toolbar></header-toolbar>

    <v-main>
      <div class="app__content">
        <side-toolbar class="app__content-side"></side-toolbar>
        <div class="app__content-main"><slot></slot></div>
      </div>
    </v-main>
  </v-layout>
</template>

<script src="./script.js" />
<style src="./style.scss" lang="scss" scoped />
