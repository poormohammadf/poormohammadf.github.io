<template>
  <div class="main">
    <v-card v-if="true" flat>
      <v-card-title>
        <h3 class="title font-weight-light mb-1">
          {{ title }}
        </h3>
        <v-spacer />
        <slot name="actions" />
      </v-card-title>
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
    <div v-else class="mb-5">
      <div class="title mb-3">
        <h2>
          {{ title }}
        </h2>
        <template v-if="$slots.actions">
          <v-spacer />
          <slot name="actions" />
        </template>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name      : 'MainSection',
  components: { },
  props     : { title: { type: String, default: '' } },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.main{
  text-align: justify;
}
</style>
