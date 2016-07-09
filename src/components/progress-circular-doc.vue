<template>
    <div class="col s12">
        <h4>Examples</h4>
        <progress-circular active></progress-circular>
        <progress-circular active red red-flash></progress-circular>
        <progress-circular active green></progress-circular>
        <progress-circular active blue></progress-circular>
        <main-source :show="show"></main-source>
    </div>
</template>

<script>
    export default {
        props: ['show']
    }
</script>