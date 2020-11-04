<template>
        <nav dark color="primary" class="navbar navbar-expand-lg navbar-dark bg-primary fix-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse"  id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active"> 
                        <a class="nav-link" href="/"><v-icon  color="white">mdi-home</v-icon><span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#main"><span style="font-size: large;">Curriculum Vitae</span></a>
                    </li>
                </ul>
            </div>
            <v-flex xs8>
                <v-autocomplete
                    v-model="select"
                    color="white"
                    :loading="isLoading"
                    :search-input.sync="search"
                    hide-no-data
                    placeholder="Start typing to Search"
                    prepend-icon="mdi-search-web"
                    return-object>
                </v-autocomplete>
            </v-flex>
        </nav>
</template>
<script lang="ts">
    export default {
        data() {
            return {
                person: null,
                personOptions: [],
                search: '',
                loadingPersons: false,
            }
        },
        methods: {
            redirect() { 
                this.$router.push({name: '/'})
            }
        }
    }
</script>
<style scoped>
    .fix-top{
        margin-top: -63px; 
    }
</style>


