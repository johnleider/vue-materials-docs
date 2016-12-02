<template>
    <form>
        <h4 class="col s12">Examples</h4>

        <v-grid s6>
            <div class="input-field">
                <v-text-input name="first"
                            id="first"
                            placeholder="First Name"
                            v-model="test"
                ></v-text-input>
                <label for="first"
                       class="active"
                >First Name</label>
                {{ test }}
            </div>
        </v-grid>
        <v-grid s6>
            <div class="input-field">
                <v-text-input name="last"
                            id="last"
                ></v-text-input>
                <label for="last">Last Name</label>
            </div>
        </v-grid>
        <v-grid s12>
            <markup html='
            <div class="input-field">
                <v-text-input name="first"
                            id="first"
                            placeholder="First Name"
                ></v-text-input>
                <label for="first">First Name</label>
            </div>'
            ></markup>
        </v-grid>
        <v-grid s12>
            <h4>Prefix</h4>
            <div class="input-field">
                <v-icon prefix>account_circle</v-icon>
                <v-text-input name="username"
                            id="username"
                ></v-text-input>
                <label for="username">Username</label>
            </div>
            <markup html='
            <div class="input-field">
                <v-icon prefix>account_circle</v-icon>
                <v-text-input name="username"
                            id="username"
                ></v-text-input>
                <label for="username">Username</label>
            </div>'
            ></markup>
        </v-grid>
        <v-grid s12>
            <h4>Text Area</h4>
            <div class="input-field">
                <v-text-area name="ta"
                           id="ta"
                ></v-text-area>
                <label for="ta">Text Area</label>
            </div>
            <markup html='
            <div class="input-field">
                <v-text-area name="ta"
                           id="ta"
                ></v-text-area>
                <label for="ta">Text Area</label>
            </div>'
            ></markup>
        </v-grid>
        <v-grid s12>
            <h4>Prefix</h4>
            <div class="input-field">
                <v-icon prefix>mode_edit</v-icon>
                <v-text-area name="ta2"
                           id="ta2"
                ></v-text-area>
                <label for="ta2">Text Area</label>
            </div>
            <markup html='
            <div class="input-field">
                <v-icon prefix>mode_edit</v-icon>
                <v-text-area name="ta2"
                           id="ta2"
                ></v-text-area>
                <label for="ta2">Text Area</label>
            </div>'
            ></markup>
            <props :props="[['length', 'string, number (works on input or v-text-area)']]"></props>
        </v-grid>
        <v-grid s12>
            <h4>Select</h4>
            <div class="input-field">
                <v-select name="select"
                          id="select"
                          :items="items"
                ></v-select>
                <label for="select">Select</label>
            </div>
            <markup html='
            <div class="input-field">
                <v-select name="select"
                          id="select"
                          :items="items"
                ></v-select>
                <label for="select">Select</label>
            </div>'
            ></markup>
            <h4>Multiple</h4>
            <div class="input-field">
                <v-select name="select2"
                          id="select2"
                          :items="items"
                          multiple
                ></v-select>
                <label for="select2">Select</label>
            </div>
            <markup html='
            <div class="input-field">
                <v-select name="select2"
                          id="select2"
                          :items="items"
                          multiple
                ></v-select>
                <label for="select2">Select</label>
            </div>'
            ></markup>
            <props :props="[['items', 'array, object values, [id, text]'], ['v-model', 'string, number, array (multiple)']]"></props>
        </v-grid>
        <v-grid s12>
            <h4>Radios</h4>
            <div class="input-field">
                <v-radio name="radio"
                       id="radio"
                       val="1"
                       checked
                >Red</v-radio>
            </div>
            <div class="input-field">
                <v-radio name="radio"
                       id="radio2"
                >Yellow</v-radio>
            </div>
            <div class="input-field">
                <v-radio name="radio"
                       id="radio3"
                       with-gap
                >Green</v-radio>
            </div>
            <div class="input-field">
                <v-radio name="radio"
                       id="radio4"
                       disabled
                >Brown</v-radio>
            </div>
            <markup html='
            <div class="input-field">
                <v-radio name="radio"
                       id="radio3"
                       with-gap
                       val="1"
                       v-model="radio1"
                >Green</v-radio>
            </div>'
            ></markup>
            <p>In order to accommodate v-model on Materialize.css components, to set what the value of the radio is, use the :val property.</p>
            <props :props="radio_props"></props>
        </v-grid>
        <v-grid s12>
            <h4>Checkboxes</h4>
            <div class="input-field">
                <v-checkbox name="checkbox"
                          id="checkbox"
                >Red</v-checkbox>
            </div>
            <div class="input-field">
                <v-checkbox name="checkbox2"
                          id="checkbox2"
                          checked
                >Yellow</v-checkbox>
            </div>
            <div class="input-field">
                <v-checkbox name="checkbox3"
                          id="checkbox3"
                          filled-in
                          checked
                >Filled In</v-checkbox>
            </div>
            <div class="input-field">
                <v-checkbox name="checkbox"
                          id="checkbox"
                          indeterminate
                >Indeterminate</v-checkbox>
            </div>
            <div class="input-field">
                <v-checkbox name="checkbox3"
                          id="checkbox3"
                          disabled
                          checked
                >Green</v-checkbox>
            </div>
            <div class="input-field">
                <v-checkbox name="checkbox3"
                          id="checkbox3"
                          disabled
                >Brown</v-checkbox>
            </div>
            <markup html='
            <div class="input-field">
                <v-checkbox name="checkbox3"
                          id="checkbox3"
                          filled-in
                          checked
                >Filled In</v-checkbox>
            </div>'
            ></markup>
            <props :props="checkbox_props"></props>
        </v-grid>
        <v-grid s12>
            <h4>Switches</h4>
            <v-switch></v-switch>
            <p></p><p></p>
            <v-switch checked
                    on="Accept"
                    off="Deny"
            ></v-switch>
            <markup html='
            <v-switch checked
                    on="Accept"
                    off="Deny"
            ></v-switch>'
            ></markup>
            <props :props="switch_props"></props>
        </v-grid>
        <v-grid s12>
            <h4>File Input</h4>
            <div class="input-field">
                <v-file-input></v-file-input>
            </div>
            <markup html='
            <div class="input-field">
                <v-file-input></v-file-input>
            </div>'
            ></markup>
            <h4>Multiple</h4>
            <div class="input-field">
                <v-file-input multiple></v-file-input>
            </div>
            <markup html='
            <div class="input-field">
                <v-file-input multiple></v-file-input>
            </div>'
            ></markup>
            <props :props="file_props"></props>
        </v-grid>
        <v-grid s12>
            <h4>Range</h4>
            <div class="input-field">
                <v-range></v-range>
            </div>
            <markup html='
            <div class="input-field">
                <v-range></v-range>
            </div>'
            ></markup>
            <props :props="range_props"></props>
        </v-grid>
        <v-grid s12>
            <h4>Date Picker</h4>
            <label for="birthdate">Birthdate</label>
            <v-date-input id="birthdate"
                        name="birthdate"
            ></v-date-input>
            <markup html='
            <label for="birthdate">Birthdate</label>
            <v-date-input id="birthdate"
                        name="birthdate"
            ></v-date-input>'
            ></markup>
            <props :props="[['v-model', 'string']]"></props>
        </v-grid>
        <v-grid s12>
            <h4>Character Counter</h4>
            <div class="input-field">
                <v-text-input name="text"
                            id="text"
                            length="50"
                ></v-text-input>
                <label for="text">Text Input</label>
            </div>
            <markup html='
            <div class="input-field">
                <v-text-input name="text"
                            id="text"
                            length="50"
                ></v-text-input>
                <label for="text">Text Input</label>
            </div>'
            ></markup>
            <div class="input-field">
                <v-text-area name="textarea"
                            id="textarea"
                            length="150"
                ></v-text-area>
                <label for="text">Text Area</label>
            </div>
            <markup html='
            <div class="input-field">
                <v-text-area name="textarea"
                            id="textarea"
                            length="50"
                ></v-text-area>
                <label for="text">Text Area</label>
            </div>'
            ></markup>
        </v-grid>
    </form>
</template>

<script>
    export default {
        data () {
            return {
                test: 1,
                range_props: [
                    ['min', 'string, number'],
                    ['max', 'string, number'],
                    ['v-model', 'string, number']
                ],
                radio_props: [
                    ['id', 'string'],
                    ['name', 'string'],
                    ['checked', 'boolean'],
                    ['val', 'number, string'],
                    ['v-model', 'number, string'],
                    ['disabled', 'boolean'],
                    ['with-gap', 'boolean']
                ],
                checkbox_props: [
                    ['id', 'string'],
                    ['name', 'string'],
                    ['checked', 'boolean'],
                    ['v-model', 'number, string'],
                    ['disabled', 'boolean'],
                    ['indeterminate', 'boolean'],
                    ['filled-in', 'boolean']
                ],
                switch_props: [
                    ['on', 'string'],
                    ['off', 'string'],
                    ['checked', 'boolean'],
                    ['v-model', 'boolean']
                ],
                file_props: [
                    ['multiple', 'boolean']
                ],
                items: [
                    {
                        id: 1,
                        text: 'Select 1'
                    },
                    {
                        id: 2,
                        text: 'Select 2'
                    },
                    {
                        id: 3,
                        text: 'Select 3'
                    },
                ]
            }
        }
    }
</script>