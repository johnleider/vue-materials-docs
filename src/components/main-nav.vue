<template>
    <app-nav>
        <div slot="items">
            <h1 class="page-title">
                <a href="#!"
                   class="left button-collapse"
                   v-side-nav:side-nav
                >
                    <icon>menu</icon>
                </a>
                {{ title }}
            </h1>
        </div>
        <app-side-nav slot="side-nav" 
                      id="side-nav" 
                      fixed
        >
            <li v-for="item in items">
                <a :href="item" v-text="item"></a>
            </li>
        </app-side-nav>
    </app-nav>
</template>

<script>
    export default {
        data () {
            return {
                items: ['Badges']
            }
        },

        props: ['title']
    }
</script>

<style scoped>
    .page-title {
        padding: 2rem 0;
        margin: 0;
        text-align: center;

        a {
            display: inline-block;
        }
    }
</style>