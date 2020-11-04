<template>
  <v-card color="primary" dark>
    <v-card-text>
        <div class="text-md-center">
            <v-avatar size="160">
                <img alt="Fatemeh Poormohammad" class="rounded-circle" src="../assets/Photo.jpg">
            </v-avatar>
        </div>
        <div class="text-sm-center mb-4 mt-3">
            <h5>
                Fatemeh Poormohammad
            </h5>
            <span>
                Software Developement Analyst
            </span>
        </div>
        <section-side :options="sections.info" />
        <section-side :options="sections.languages">
            <template v-slot:items="{items}">
            <v-container pa-0>
                <v-layout wrap class="text-xs-center">
                <template v-for="(item, i) in items">
                    <v-flex :key="i" md3 sm4 xs6>
                    <v-progress-circular rotate="360" size="65" width="2" :value="item.value" color="white" class="ma-2">
                        {{ item.text }}
                    </v-progress-circular>
                    </v-flex>
                </template>
                </v-layout>
            </v-container>
            </template>
        </section-side>
    </v-card-text>
  </v-card>
</template>

<script>
import SectionSide from './SideSections.vue'

export default {
  components: { SectionSide },
  data () {
    return {
        sections: {
            info: {
                title: 'INFO',
                items: [
                    {
                    name: 'Email',
                    icon: 'mdi-email',
                    text: 'poormohammadf@gmail.com',
                    },
                    {
                    name: 'Location',
                    icon: 'mdi-map-marker',
                    text: 'Tehran, Iran',
                    },
                ],
            },
            languages: {
                title: 'LANGUAGES',
                items: [
                    {
                    text : 'English',
                    value: 80,
                    },
                    {
                    text : 'Persian',
                    value: 100,
                    },
                ],
            },
        }
    }
  }
}
</script>

<style scoped>
</style>