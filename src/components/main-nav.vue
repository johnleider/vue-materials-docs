<template>
    <v-nav class="nav-header">
        <div>
            <h1 class="page-title">
                <a href="#!"
                   class="left button-collapse"
                   v-side-nav:side-nav="nav"
                   ref="nav"
                >
                    <v-icon>menu</v-icon>
                </a>
                {{ title }}
            </h1>
        </div>
        <v-side-nav slot="side-nav"
                    id="side-nav"
                    fixed
        >
            <template v-for="(value, key) in items">
                <li v-if="typeof value === 'string'"
                    :class="{ 'active': value === title }"
                >
                    <a :href="value" 
                       v-text="value"
                       @click.prevent="select(value)"
                    ></a>
                </li>
                <li class="no-padding" v-else>
                    <v-collapsible collapse >
                        <li>
                            <v-collapsible-header class="black-text waves-effect waves-teal"
                                                ref="collapse"
                            >
                                {{ key }}
                            </v-collapsible-header>
                            <v-collapsible-body>
                                <ul>
                                    <li v-for="item in value"
                                        :class="{ 'active': title === item }"
                                    >
                                        <a :href="item" 
                                           @click.prevent="select(item)"
                                        >{{ item }}</a>
                                    </li>
                                </ul>
                            </v-collapsible-body>
                        </li>
                    </v-collapsible>
                </li>
            </template>
        </v-side-nav>
    </v-nav>
</template>

<script>
    export default {
        data () {
            return {
                items: {
                    install: 'Install',
                    directives: 'Directives',
                    functional: 'Functional',
                    dialog: 'Dialog',
                    Components: ['Badge', 'Breadcrumbs', 'Button', 'Card', 'Carousel', 'Chip', 'Collapsible', 'Collection', 'Dropdown', 'Footer', 'Forms', 'Icon', 'Material-Box', 'Modal', 'Nav', 'Pagination', 'Parallax', 'Progress-Circular', 'Progress-Linear', 'Range', 'Side-Nav', 'Slider', 'Tabs']
                },
                icon: 'keyboard_arrow_down',
                nav: {
                    closeOnClick: false
                }
            }
        },

        props: ['title'],

        mounted () {
            this.nav_close()
        },

        methods: {
            select (item) {
                this.$emit('select', item)
            },

            nav_close () {
                this.nav.closeOnClick = window.innerWidth < 993
            }
        }
    }
</script>

<style>
    .nav-header nav {
        height: auto !important;
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