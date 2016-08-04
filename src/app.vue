<template>
    <div id="app">
        <header>
            <main-nav :title="selected"
                      @select="select"
            ></main-nav>
        </header>

        <main>
            <v-container>
                <v-row>
                    <component :is="component" :show="show"></component>
                </v-row>
            </v-container>
        </main>

        <main-footer></main-footer>
    </div>
</template>

<script>
    export default {
        name: 'App',

        data () {
            return {
                selected: 'Install'
            }
        },

        computed: {
            component () {
                return `${this.selected.toLowerCase()}-doc`
            },

            show () {
                return this.selected.toLowerCase()
            }
        },

        methods: {
            select (component) {
                this.selected = component
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<style>
    body {
        overflow-x: hidden;
    }

    main {
        min-height: 83.1vh;
        padding-bottom: 3rem;
    }

    header, main, footer {
        padding-left: 240px;
    }

    @media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }

    h4 {
        margin-top: 6rem;
    }
</style>
