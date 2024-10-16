<template>
  <div class="settings-view">
    <card-render
      id="card-render"
      :class="{
        'settings-view__card-render': true,
        'settings-view__card-render_mobile': isMobile
      }"
    >
      <template #toolbar>
        <v-layout
          :class="{
            'settings-view__toolbar': true,
            'settings-view__toolbar_mobile': isMobile
          }"
        >
          <v-btn
            flat
            :class="{
              'settings-view__toolbar-btn': true,
              'settings-view__toolbar-btn_mobile': isMobile
            }"
            @click="addCard"
          >
            <v-icon size="20">add</v-icon>Добавить
          </v-btn>
        </v-layout>
      </template>
    </card-render>
  </div>
</template>

<script src="./script.js" />
<style src="./style.scss" lang="scss" scoped />
