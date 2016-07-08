<template>
    <div class="col s12">
        <h4>Examples</h4>
        <breadcrumbs :items="items"></breadcrumbs>
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show'],

        data () {
            return {
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