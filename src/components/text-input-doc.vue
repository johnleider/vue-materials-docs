<template>
    <div class="col s12">
        <h4>Examples</h4>
        <text-input></text-input>
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>