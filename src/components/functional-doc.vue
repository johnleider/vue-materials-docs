<template>
    <div class="col s12">
        <h4>Container</h4>
        <markup html='
        <v-container></v-container>'
        ></markup>
        <h4>Row</h4>
        <markup html='
        <v-row></v-row>'
        ></markup>
        <h4>Grid</h4>
        <markup html='
        <v-grid s12 m6 l4></v-grid>'
        ></markup>
        <h4>Info</h4>
        <p>
            These are components that utilize Vue 2.0's new functional component option.  They are simply some semantic sugar when building your pages.  All of grids static properties will be transitioned into its class, so any class used on Materialize.css div.col's can be used here.
        </p>
    </div>
</template>