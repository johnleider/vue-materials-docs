<template>
    <div>
        <grid s12>
            <h4>Examples</h4>
            <btn-link @click="$dialog('Toast!')">Toast!</btn-link>
            <markup html='
            <btn-link @click="$dialog(&apos;Toast!&apos;)">Toast!</btn-link>'
            ></markup>
            <btn-link @click="$dialog('Rounded Toast!', 3000, 'rounded')">Round Toast!</btn-link>
            <markup html='
            <btn-link @click="$dialog(&apos;Rounded Toast!&apos;, 3000, &apos;rounded&apos;)">Round Toast!</btn-link>'
            ></markup>
            <btn-link @click="$dialog('Toast with callback!', 3000, '', callback)">Toast with callback!</btn-link>
            <markup html='
            <btn-link @click="$dialog(&apos;Toast with callback!&apos;, 3000, &apos;&apos;, callback)">Toast with callback!</btn-link>'
            ></markup>
            <h4>Method</h4>
            <markup html='
            methods: {
                callback () {
                    alert(&apos;Your toast was dismissed&apos;)
                }
            }'
            ></markup>
        </grid>
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
