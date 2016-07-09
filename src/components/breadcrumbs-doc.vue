<template>
    <div class="col s12">
        <h4>Example</h4>
        <breadcrumbs :items="items"></breadcrumbs>
        <markup html='
        <breadcrumbs :items="items"></breadcrumbs>'
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