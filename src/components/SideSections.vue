<template>
  <div class="side mb-4">
    <div class="title mb-3">
      {{ options.title }}
    </div>
      <slot v-if="$slots.default" />
      <template v-else-if="$scopedSlots.items">
        <slot name="items" :items="options.items"/>
      </template>
      <template v-else-if="$scopedSlots.item">
        <slot v-for="(item) in options.items" name="item" :item="item"/>
      </template>
      <template v-else>
        <item-side v-for="(item, index) in options.items" :key="index" :item="item"/>
      </template>
  </div>
</template>

<script>
import ItemSide from './Items.vue'
export default {
  name      : 'SectionSide',
  components: { ItemSide },
  props     : { options: { type: Object, default: () => {} } },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  font-weight: 300;
  line-height: 1.5 !important;
  letter-spacing: 0.2em !important;
}
.side{
  text-align: justify;
}
</style>