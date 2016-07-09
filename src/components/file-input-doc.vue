<template>
    <div class="col s12">
        <h4>Examples</h4>
        <file-input></file-input>
        <h4>Multiple</h4>
        <file-input multiple></file-input>
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>