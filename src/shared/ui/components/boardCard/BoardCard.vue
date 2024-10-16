<template>
  <div
    v-if="form"
    :class="{
      card: true,
      card_mobile: isMobile,
      card_tablet: isTablet,
      [$options.CARD.DRAG_CLASS]: !isEditing && !isReadOnly
    }"
  >
    <div v-if="form && form.id" class="card__header">
      <div class="card__title">
        {{ `ID ${form.id}` }}
      </div>
      <div v-if="!isReadOnly" class="card__actions">
        <v-btn
          v-if="canSave"
          icon
          size="28"
          color="grey lighten-2"
          title="Сохранить"
          @click="onSave"
        >
          <v-icon size="18">save</v-icon>
        </v-btn>
        <v-btn
          icon
          size="28"
          color="grey lighten-2"
          title="Редактировать"
          :disabled="isEditing"
          @click="onEdit"
        >
          <v-icon size="18">edit</v-icon>
        </v-btn>
        <v-btn
          icon
          size="28"
          color="grey lighten-2"
          title="Удалить"
          @click="onDelete"
        >
          <v-icon size="18">delete_outline</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="card__content">
      <v-textarea
        v-model="form.description"
        hide-details
        class="card__description"
        :readonly="isReadOnly || !isEditing"
        @blur="onBlur"
      ></v-textarea>
    </div>
  </div>
</template>

<script src="./script.js" />
<style src="./style.scss" lang="scss" scoped />
