<template>
    <div id="app">
        <header>
            <main-nav :title="selected"
                      @select="select"
            ></main-nav>
        </header>

        <main>
            <div class="container">
                <div class="row">
                    <component :is="component" :show="show"></component>
                </div>
            </div>
        </main>

        <main-footer></main-footer>
    </div>
</template>

<script>
    import parser from './utils/parser'

    export default {
        name: 'App',

        data () {
            return {
                selected: 'About'
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
