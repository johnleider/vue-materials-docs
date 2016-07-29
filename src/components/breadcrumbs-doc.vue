<template>
    <div class="col s12">
        <h4>Example</h4>
        <v-breadcrumbs :items="items"></v-breadcrumbs>
        <markup html='
        <v-breadcrumbs :items="items"></v-breadcrumbs>'
        ></markup>
        <h4>Slot</h4>
        <v-breadcrumbs>
            <a v-for="item in items"
               :href="item.href"
               class="breadcrumb"
            >
                {{ item.text }}
            </a>
        </v-breadcrumbs>
        <markup html='
        <v-breadcrumbs>
            <a v-for="item in items"
               :href="item.href"
               class="breadcrumb"
               v-text="item.text">
            </a>
        </v-breadcrumbs>'
        ></markup>
        <h4>Array</h4>
        <markup html="
        {
            items: [
                {
                    text: 'First',
                    href: '#!'
                },
                {
                    text: 'Second',
                    href: '#!'
                },
                {
                    text: 'Third',
                    href: '#!'
                }
            ]
        }"
        ></markup>
        <props :props="props"></props>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
                props: [
                    ['items', 'array']
                ],
                items: [
                    {
                        text: 'First',
                        href: '#!'
                    },
                    {
                        text: 'Second',
                        href: '#!'
                    },
                    {
                        text: 'Third',
                        href: '#!'
                    }
                ]
            }
        }
    }
</script>