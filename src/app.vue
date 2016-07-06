<template>
    <div id="app">
        <header>
            <main-nav :title="title"></main-nav>
        </header>

        <main>
            <div class="container"></div>
        </main>

        <main-footer></main-footer>
    </div>
</template>

<script>
    export default {
        name: 'App',

        data () {
            return {
                title: 'Badges'
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

    nav {
        height: auto;
    }
</style>
