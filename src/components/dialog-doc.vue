<template>
    <div>
        <v-grid s12>
            <h4>Examples</h4>
            <v-btn-link @click.native="$dialog('Toast!')">Toast!</v-btn-link>
            <markup html='
            <v-btn-link @click.native="$dialog(&apos;Toast!&apos;)">Toast!</v-btn-link>'
            ></markup>
            <v-btn-link @click.native="$dialog('Rounded Toast!', 3000, 'rounded')">Round Toast!</v-btn-link>
            <markup html='
            <v-btn-link @click.native="$dialog(&apos;Rounded Toast!&apos;, 3000, &apos;rounded&apos;)">Round Toast!</v-btn-link>'
            ></markup>
            <v-btn-link @click.native="$dialog('Toast with callback!', 3000, '', callback)">Toast with callback!</v-btn-link>
            <markup html='
            <v-btn-link @click.native="$dialog(&apos;Toast with callback!&apos;, 3000, &apos;&apos;, callback)">Toast with callback!</v-btn-link>'
            ></markup>
            <h4>Method</h4>
            <markup html='
            methods: {
                callback () {
                    alert(&apos;Your toast was dismissed&apos;)
                }
            }'
            ></markup>
        </v-grid>
    </div>
</template>

<script type="text/babel">
    export default {
        methods: {
            callback () {
                alert('Your toast was dismissed')
            }
        }
    }
</script>
