<template>
    <div class="col s12">
        <h4>Examples</h4>
        <radio name="radio" val="1" id="option1">Option 1</radio>
        <radio name="radio" val="2" id="option2">Option 2</radio>
        {{ markup }}
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show'],
        data () {
            return {
                markup: '<radio name="radio" val="2" id="option2">Option 2</radio>'
            }
        }
    }
</script>