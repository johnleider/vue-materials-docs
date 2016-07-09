<template>
    <div class="col s12">
        <h4>Examples</h4>
        <select :items="items"></select>
        <select :items="items" multiple></select>
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
                        id: 1,
                        text: 'Option 1'
                    },
                    {
                        id: 2,
                        text: 'Option 2'
                    },
                    {
                        id: 3,
                        text: 'Option 3'
                    },
                    {
                        id: 4,
                        text: 'Option 4'
                    }
                ]
            }
        }
    }
</script>