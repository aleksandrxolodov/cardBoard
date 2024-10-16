<template>
  <div class="card-render">
    <slot name="toolbar"></slot>

    <draggable
      v-model="cards"
      ghost-class="ghost-card"
      delay="50"
      :handle="`.${$options.CARD.DRAG_CLASS}`"
      :class="{
        'card-render__content': true,
        'card-render__content_mobile': isMobile,
        'card-render__content_tablet': isTablet
      }"
    >
      <transition-group name="card-fade">
        <board-card
          v-for="card in cards"
          :key="card.id"
          :card="card"
          :is-read-only="isReadOnly"
          @save="onSaveCard"
          @delete="onDeleteCard"
        />
      </transition-group>
    </draggable>
  </div>
</template>

<script src="./script.js" />
<style src="./style.scss" lang="scss" scoped />
