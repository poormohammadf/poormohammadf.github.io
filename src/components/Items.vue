<template>
  <v-layout>
    <v-flex v-if="hasIcon" xs2>
      <v-icon>
        {{ item.icon }}
      </v-icon>
    </v-flex>
    <v-flex :xs10="hasIcon" :xs12="!hasIcon">
      <div>
        {{ item.name }}
      </div>
      <p>
        <a v-if="item.link" :href="item.link" target="_blank">
          {{ item.text }}
        </a>
        <span v-else >
          {{ item.text }}
        </span>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name    : 'ItemSide',
  props   : { item: { type: Object, default: () => {} } },
  computed: {
    hasIcon () {
      return !!this.item.icon
    },
  },
}
</script>