<template>
    <div class="col s12">
        <h4>Examples</h4>
        <chip>Notice</chip>
        <markup html='
        <chip>Notice</chip>'
        ></markup>
        <chip class="blue white-text"
              close
        >
            Closable
        </chip>
        <markup html='
        <chip class="blue white-text"
              close
        >
            Closable
        </chip>'
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
                    ['close', 'boolean']
                ]
            }
        }
    }
</script>