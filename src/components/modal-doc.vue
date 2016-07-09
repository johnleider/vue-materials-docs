<template>
    <div class="col s12">
        <h4>Examples</h4>
        <btn-link v-modal:modal>Modal</btn-link>
        <modal id="modal">
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <btn-link class="pull-right" waves-light modal flat>Disagree</btn-link>
                <btn-link class="pull-right" waves-light modal flat>Agree</btn-link>
            </div>
        </modal>
        <markup html='
        <btn-link v-modal:modal>Modal</btn-link>
        <modal id="modal">
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <btn-link class="pull-right" waves-light modal flat>Disagree</btn-link>
                <btn-link class="pull-right" waves-light modal flat>Agree</btn-link>
            </div>
        </modal>'
        ></markup>
        <btn-link v-modal:modal1>Modal With fixed Footer</btn-link>
        <modal id="modal1" fixed-footer>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <btn-link class="pull-right" waves-light modal flat>Disagree</btn-link>
                <btn-link class="pull-right" waves-light modal flat>Agree</btn-link>
            </div>
        </modal>
        <markup html='
        <btn-link v-modal:modal1>Modal With fixed Footer</btn-link>
        <modal id="modal1" fixed-footer>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <btn-link class="pull-right" waves-light modal flat>Disagree</btn-link>
                <btn-link class="pull-right" waves-light modal flat>Agree</btn-link>
            </div>
        </modal>'
        ></markup>
        <btn-link v-modal:modal2>Modal Bottom Style Sheet</btn-link>
        <modal id="modal2" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <btn-link class="pull-right" waves-light modal flat>Disagree</btn-link>
                <btn-link class="pull-right" waves-light modal flat>Agree</btn-link>
            </div>
        </modal>
        <markup html='
        <btn-link v-modal:modal2>Modal Bottom Style Sheet</btn-link>
        <modal id="modal2" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <btn-link class="pull-right" waves-light modal flat>Disagree</btn-link>
                <btn-link class="pull-right" waves-light modal flat>Agree</btn-link>
            </div>
        </modal>'
        ></markup>
        <btn v-modal:modal3>Modal with button trigger</btn>
        <modal id="modal3" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <btn-link class="pull-right" waves-light modal flat>Disagree</btn-link>
                <btn-link class="pull-right" waves-light modal flat>Agree</btn-link>
            </div>
        </modal>
        <markup html='
        <btn v-modal:modal3>Modal with button trigger</btn>
        <modal id="modal3" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <btn-link class="pull-right" waves-light modal flat>Disagree</btn-link>
                <btn-link class="pull-right" waves-light modal flat>Agree</btn-link>
            </div>
        </modal>'
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
                    ['bottom-sheet', 'boolean'],
                    ['fixed-footer', 'boolean'],
                    ['params', 'object'],
                    ['id', 'string']
                ]
            }
        }
    }
</script>