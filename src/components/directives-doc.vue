<template>
    <div class="col s12">
        <h4>Dropdowns</h4>
        <markup html='
        v-dropdown:id'
        ></markup>
        <p>
            Create a <strong>&lt;dropdown&gt;</strong> element with an id. Activate it by applying v-dropdown to any element.
        </p>
        <h4>Modals</h4>
        <markup html='
        v-modal:id="params"'
        ></markup>
        <p>
            Create a <strong>&lt;modal&gt;</strong> element with an id. Activate it by applying v-modal to any element. Pass modal parameters through the expression.
        </p>
        <h4>Side-Navs</h4>
        <markup html='
        v-side-nav:id'
        ></markup>
        <p>
            Create a <strong>&lt;m-side-nav&gt;</strong> element with an id. Activate it by applying v-side-nav to any element.
        </p>
        <h4>Tooltips</h4>
        <row>
            <grid s3>
                <btn class="red" v-tooltip:top="'Tooltip Top'">Top</btn>
            </grid>
            <grid s3>
                <btn class="red" v-tooltip:right="'Tooltip Right'">Right</btn>
            </grid>
            <grid s3>
                <btn class="red" v-tooltip:bottom="'Tooltip Bottom'">Bottom</btn>
            </grid>
            <grid s3>
                <btn class="red" v-tooltip:left="'Tooltip Left'">Left</btn>
            </grid>
        </row>
        <markup html='
        v-tooltip:position="&apos;Content&apos;"'
        ></markup>
    </div>
</template>

<script type="text/babel">
    export default {
        data () {
            return {
                ttop: 'Tooltip Top'
            }
        }
    }
</script>