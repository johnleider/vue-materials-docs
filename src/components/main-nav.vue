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
            <li v-for="item in items" :class="{ 'active': item === title }">
                <a :href="item" 
                   v-text="item"
                   @click.prevent="select(item)"
                ></a>
            </li>
        </app-side-nav>
    </app-nav>
</template>

<script>
    export default {
        data () {
            return {
                items: ['Badge', 'Breadcrumbs', 'Button', 'Card', 'Carousel', 'Checkbox', 'Chip', 'Collapsible', 'Collection', 'Dropdown', 'Footer', 'Icon', 'Material-Box', 'Modal', 'Nav', 'Pagination', 'Parallax', 'Progress-Circular', 'Progress-Linear', 'Range', 'Side-Nav', 'Slider', 'Tabs']
            }
        },

        props: ['title'],

        methods: {
            select (item) {
                this.$emit('select', item)
            }
        }
    }
</script>

<style scoped>
    nav {
        height: auto;
    }

    .page-title {
        padding: 2rem 0;
        margin: 0;
        text-align: center;

        a {
            display: inline-block;
        }
    }
</style>