<template>
    <v-footer>
        <div class="container" slot="content">
            <div class="row center">
                <div class="col s6">
                    <v-btn-link class="red lighten-3" 
                              large
                              href="https://github.com/johnleider/vue-materials"
                              target="_blank"
                    >
                        Github
                    </v-btn-link>
                </div>
                <div class="col s6">
                    <v-btn-link class="red lighten-3"
                              large
                              href="https://www.npmjs.com/package/vue-materials"
                              target="_blank"
                    >
                        NPM
                    </v-btn-link>
                </div>
            </div>
        </div>
        <div class="container" slot="copyright">©Copyright 2016 John Leider</div>
    </v-footer>
</template>