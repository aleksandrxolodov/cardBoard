<template>
  <div :class="{ side: true, side_compressed: lightweight }">
    <app-menu class="side__menu" :lightweight="lightweight" />

    <div
      v-if="!isMobile && !isTablet"
      class="side__toggle"
      :title="`${lightweight ? 'Расширенный' : 'Компактный'} вид`"
      @click="toggleMenu()"
    >
      <v-icon size="22">
        {{ lightweight ? 'chevron_right' : 'chevron_left' }}
      </v-icon>
    </div>
  </div>
</template>

<script src="./script.js" />
<style src="./style.scss" lang="scss" scoped />
