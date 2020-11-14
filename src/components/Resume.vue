<template>
  <v-fade-transition mode="out-in" type="animation">
  <v-main>
    <v-container>
      <mainbar>
        <v-card class="elevation-9">
          <v-card-text>
            <v-layout>
              <v-flex md8 id="feat">
                <v-flex md12>
                  <v-icon large>mdi-school</v-icon>
                    <ul>
                      <li>Master of Computer Engineering - 2020</li>
                      <li>Bachelor of Information Technology - 2012</li>
                    </ul>
                </v-flex>
                <v-flex md12>
                  <v-icon large>mdi-briefcase</v-icon>
                    <ul>
                      <li>Software Analyst at Iranian Airport Holding Company</li>
                    </ul>
                </v-flex>
              </v-flex>
              <v-flex md4 id="feat">
                <v-icon large>mdi-certificate</v-icon>
                  <ul>
                    <li>J2SE</li>
                    <li>Data Science</li>
                    <li>Microsoft SQL Server</li>
                    <li>Microsoft BI</li>
                    <li>LPIC2</li>
                    <li>CEH</li>
                  </ul>
              </v-flex>
            </v-layout>
        </v-card-text>
        </v-card>
      </mainbar>
      <mainbar title="My Story">
        <template slot="actions">
          <div>
            <v-switch v-model="detailed" :label="detailed ? 'Detailed' : 'Summary'"/>
          </div>
        </template>
        <v-timeline id="timeline" dense>
          <v-timeline-item v-for="(item, index) in orderedItems" :key="index" :icon="item.icon || ''" :class="{transparent: item.transparent}" large>
            <template v-if="item.iconImage" v-slot:icon>
              <v-avatar>
                <img :src="item.iconImage">
              </v-avatar>
            </template>
            <template v-slot:opposite />
            <v-layout>
              <v-flex v-if="$vuetify.breakpoint.smAndUp" md1 sm2 align-self-center>
                <span>{{ item.year }}</span>
              </v-flex>
              <v-flex md11 sm10 xs12>
                <v-card class="elevation-7">
                  <v-card-title class="pb-0">
                    <div>
                      <p v-if="$vuetify.breakpoint.xsOnly">
                        {{ item.year }}
                      </p>
                      <h3>{{ item.title }}</h3>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex :md7="!!item.image" :md12="!item.image" xs12>
                        <div class="mr-1">
                          <span v-if="item.text" class="pre">{{ item.text }}</span>
                          <!-- eslint-disable vue/no-v-html -->
                          <div v-else-if="item.html" v-html="item.html"/>
                          <!-- eslint-enable vue/no-v-html -->
                        </div>
                      </v-flex>
                      <v-flex v-if="item.image" md5 xs12>
                        <div class="mt-2">
                          <v-carousel v-if="Array.isArray(item.image)" :show-arrows="false" :height="325">
                            <v-carousel-item v-for="(citem,ci) in item.image" :key="ci" :src="citem"/>
                          </v-carousel>
                          <v-img v-else :max-height="item.imageHeight ? item.imageHeight : ''" :src="item.image"/>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </mainbar>
</v-container>
</v-main>
</v-fade-transition>
</template>
<script>
import mainbar from './MainSections.vue'
import LeaderLine from 'leader-line'

  export default {
    name      : 'Timeline',
    components:{
        mainbar
    },
    data      : () => ({
      detailed: true,
      items   : [
        {
          detailed   : true,
          transparent: true,
          year       : '2011',
          title      : 'Network Internship',
          html       : 'IRIB Infrastructure Department',
          icon       : 'mdi-server-network',
        },
        {
          detailed   : true,
          transparent: true,
          year       : '2012',
          title      : 'Graduated on 19 Feburary, 2012',
          html       : 'Bachelor degree of Information Engineering Technology from PNU University',
          icon       : 'mdi-school',
        },
        {
          detailed   : true,
          transparent: true,
          year       : '2013',
          title      : 'Computer Technecian in Smart School',
          html       : 'Teaching ICDL and Maintainig Sites\' Systems',
          icon       : 'mdi-wrench',
        },
        {
          year       : '2014',
          title      : 'Freelance Web Develper',
          html       : 'Web Application Projects written in PHP',
          icon       : 'mdi-language-php',
        },
        {
          year       : '2015',
          title      : 'Software Developement Analyst at IAC',
          html       : 'Working as a Bussiness Process Analyst and Software Expert',
          icon       : 'mdi-airplane',
        },
        {
          year       : '2020',
          title      : 'Graduated on 1 October, 2020',
          html       : 'Master Degree of Computer Software Engineering from PNU University',
          icon       : 'mdi-school',
        },
      ],
    }),
    computed: {
      orderedItems () {
        const items = [...this.items].reverse()
        if (this.detailed)
          return items
        return items.filter((item) => {
          return !item.detailed
        })
      },
    },
    mounted () {
      // eslint-disable-next-line no-unused-vars
      const line = new LeaderLine(
        document.getElementById('feat'),
        document.getElementById('timeline'),
        {
          size:2,
          color:'#1976D2',
          endLabel:LeaderLine.captionLabel('Scroll down....'),
        })
    },
  }
  </script>
  
  <style scoped>
  .title {
    border-bottom: 2px #bfbfbf solid;
    line-height: 1.5 !important;
  }
  .pre {
    white-space: pre;
  }
  .transparent{
    opacity: 0.6;
  } 
  </style>