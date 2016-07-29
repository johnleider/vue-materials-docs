<template>
    <div class="col s12">
        <h4>Examples</h4>
        <v-btn-link v-modal:modal>Modal</v-btn-link>
        <v-modal id="modal">
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <v-btn-link class="pull-right" waves-light modal flat>Disagree</v-btn-link>
                <v-btn-link class="pull-right" waves-light modal flat>Agree</v-btn-link>
            </div>
        </v-modal>
        <markup html='
        <v-btn-link v-modal:modal>Modal</v-btn-link>
        <v-modal id="modal">
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <v-btn-link class="pull-right" waves-light modal flat>Disagree</v-btn-link>
                <v-btn-link class="pull-right" waves-light modal flat>Agree</v-btn-link>
            </div>
        </v-modal>'
        ></markup>
        <v-btn-link v-modal:modal1>Modal With fixed Footer</v-btn-link>
        <v-modal id="modal1" fixed-footer>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <v-btn-link class="pull-right" waves-light modal flat>Disagree</v-btn-link>
                <v-btn-link class="pull-right" waves-light modal flat>Agree</v-btn-link>
            </div>
        </v-modal>
        <markup html='
        <v-btn-link v-modal:modal1>Modal With fixed Footer</v-btn-link>
        <v-modal id="modal1" fixed-footer>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <v-btn-link class="pull-right" waves-light modal flat>Disagree</v-btn-link>
                <v-btn-link class="pull-right" waves-light modal flat>Agree</v-btn-link>
            </div>
        </v-modal>'
        ></markup>
        <v-btn-link v-modal:modal2>Modal Bottom Style Sheet</v-btn-link>
        <v-modal id="modal2" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <v-btn-link class="pull-right" waves-light modal flat>Disagree</v-btn-link>
                <v-btn-link class="pull-right" waves-light modal flat>Agree</v-btn-link>
            </div>
        </v-modal>
        <markup html='
        <v-btn-link v-modal:modal2>Modal Bottom Style Sheet</v-btn-link>
        <v-modal id="modal2" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <v-btn-link class="pull-right" waves-light modal flat>Disagree</v-btn-link>
                <v-btn-link class="pull-right" waves-light modal flat>Agree</v-btn-link>
            </div>
        </v-modal>'
        ></markup>
        <v-btn v-modal:modal3>Modal with button trigger</v-btn>
        <v-modal id="modal3" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <v-btn-link class="pull-right" waves-light modal flat>Disagree</v-btn-link>
                <v-btn-link class="pull-right" waves-light modal flat>Agree</v-btn-link>
            </div>
        </v-modal>
        <markup html='
        <v-btn v-modal:modal3>Modal with button trigger</v-btn>
        <v-modal id="modal3" bottom-sheet>
            <div slot="content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div slot="footer">
                <v-btn-link class="pull-right" waves-light modal flat>Disagree</v-btn-link>
                <v-btn-link class="pull-right" waves-light modal flat>Agree</v-btn-link>
            </div>
        </v-modal>'
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