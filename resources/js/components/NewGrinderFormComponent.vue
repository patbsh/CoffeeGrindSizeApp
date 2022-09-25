<template>
    <vue-final-modal classes="modal-container" content-class="modal-content">
        <span class="modal__title">Add a new grinder</span>
        <span class="text-success" v-if="newGrinderFormMessage" v-text="newGrinderFormMessage"></span>
        <form @submit="submitNewGrinder" @keydown="newGrinderForm.errors.clear($event.target.name)">
            <div class="row">
                <div class="col-6">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Grinder Model</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                               v-model="newGrinderForm.model">
                        <span class="text-danger" v-if="newGrinderForm.errors.has('model')"
                              v-text="newGrinderForm.errors.get('model')"></span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3" v-if="!newProducerSwitch">
                        <label for="grinderProducer" class="form-label">Grinder producer</label>
                        <v-select v-model="newGrinderForm.producer_id" :options="producers"
                                  :reduce="producers => producers.id" label="name"/>
                        <a href="#" @click="newProducerSwitch = true">Click here if the producer is not on the
                            list.</a>
                        <span class="text-danger" v-if="newGrinderForm.errors.has('producer_id')"
                              v-text="newGrinderForm.errors.get('producer_id')"></span>
                    </div>
                    <div class="mb-3" v-if="newProducerSwitch">
                        <label for="exampleFormControlInput1" class="form-label">Producer name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                               v-model="newGrinderForm.producer_name">
                        <a href="#" @click="newProducerSwitch = false">Go back to producers list.</a>
                        <span class="text-danger" v-if="newGrinderForm.errors.has('producer_name')"
                              v-text="newGrinderForm.errors.get('producer_name')"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <label for="veryFine" class="form-label">Very fine setting (optional)</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control text-center w-25" min="1"
                               v-model="newGrinderForm.very_fine_min">
                        <span class="input-group-text">to</span>
                        <input type="number" class="form-control text-center w-25"
                               :min="newGrinderForm.very_fine_min+1" v-model="newGrinderForm.very_fine_max">
                        <span class="text-danger" v-if="newGrinderForm.errors.has('very_fine_min')"
                              v-text="newGrinderForm.errors.get('very_fine_min')"></span>
                        <span class="text-danger" v-if="newGrinderForm.errors.has('very_fine_max')"
                              v-text="newGrinderForm.errors.get('very_fine_max')"></span>
                    </div>
                </div>
                <div class="col-6">
                    <label for="fine" class="form-label">Fine setting</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control text-center w-25"
                               :min="newGrinderForm.very_fine_max+1" v-model="newGrinderForm.fine_min">
                        <span class="input-group-text">to</span>
                        <input type="number" class="form-control text-center w-25" :min="newGrinderForm.fine_min+1"
                               v-model="newGrinderForm.fine_max">
                        <span class="text-danger" v-if="newGrinderForm.errors.has('fine_min')"
                              v-text="newGrinderForm.errors.get('fine_min')"></span>
                        <span class="text-danger" v-if="newGrinderForm.errors.has('fine_max')"
                              v-text="newGrinderForm.errors.get('fine_max')"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <label for="medium" class="form-label">Medium setting</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control text-center w-25" :min="newGrinderForm.fine_max+1"
                               v-model="newGrinderForm.medium_min">
                        <span class="input-group-text">to</span>
                        <input type="number" class="form-control text-center w-25"
                               :min="newGrinderForm.medium_min+1" v-model="newGrinderForm.medium_max">
                        <span class="text-danger" v-if="newGrinderForm.errors.has('medium_min')"
                              v-text="newGrinderForm.errors.get('medium_min')"></span>
                        <span class="text-danger" v-if="newGrinderForm.errors.has('medium_max')"
                              v-text="newGrinderForm.errors.get('medium_max')"></span>
                    </div>
                </div>
                <div class="col-6">
                    <label for="mediumCoarse" class="form-label">Medium coarse setting</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control text-center w-25"
                               :min="newGrinderForm.medium_max+1" v-model="newGrinderForm.medium_coarse_min">
                        <span class="input-group-text">to</span>
                        <input type="number" class="form-control text-center w-25"
                               :min="newGrinderForm.medium_coarse_min+1" v-model="newGrinderForm.medium_coarse_max">
                        <span class="text-danger" v-if="newGrinderForm.errors.has('medium_coarse_min')"
                              v-text="newGrinderForm.errors.get('medium_coarse_min')"></span>
                        <span class="text-danger" v-if="newGrinderForm.errors.has('medium_coarse_max')"
                              v-text="newGrinderForm.errors.get('medium_coarse_max')"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <label for="coarse" class="form-label">Coarse setting</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control text-center w-25"
                               :min="newGrinderForm.medium_coarse_max+1" v-model="newGrinderForm.coarse_min">
                        <span class="input-group-text">to</span>
                        <input type="number" class="form-control text-center w-25"
                               :min="newGrinderForm.coarse_min+1" v-model="newGrinderForm.coarse_max">
                        <span class="text-danger" v-if="newGrinderForm.errors.has('coarse_min')"
                              v-text="newGrinderForm.errors.get('coarse_min')"></span>
                        <span class="text-danger" v-if="newGrinderForm.errors.has('coarse_max')"
                              v-text="newGrinderForm.errors.get('coarse_max')"></span>
                    </div>
                </div>
                <div class="col-6">
                    <label for="veryCoarse" class="form-label">Very coarse setting</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text">from</span>
                        <input type="number" class="form-control text-center w-25"
                               :min="newGrinderForm.coarse_max+1" v-model="newGrinderForm.very_coarse_min">
                        <span class="text-danger" v-if="newGrinderForm.errors.has('very_coarse_min')"
                              v-text="newGrinderForm.errors.get('very_coarse_min')"></span>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Notes (optional)</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                          v-model="newGrinderForm.notes">
                    </textarea>
            </div>
            <button
                @click.prevent="submitNewGrinder()"
                class="btn btn-primary mx-2">
                Submit
            </button>
        </form>
    </vue-final-modal>
</template>

<script>
import vSelect from 'vue-select';
import {ModalsContainer, VueFinalModal} from "vue-final-modal";

export default {
    components: {vSelect, VueFinalModal, ModalsContainer},
    props: ["grinders","producers"],
    data () {
        return {
            newProducerSwitch: false,
            newGrinderForm: new Form({
                model: null,
                producer_id: null,
                producer_name: null,
                very_fine_min: null,
                very_fine_max: null,
                fine_min: null,
                fine_max: null,
                medium_min: null,
                medium_max: null,
                medium_coarse_min: null,
                medium_coarse_max: null,
                coarse_min: null,
                coarse_max: null,
                very_coarse_min: null,
                notes: null,
            }),
            newGrinderFormMessage: null,
        }
    },
    mounted () {
    },
    created () {
    },
    computed: {
    },
    methods: {
        submitNewGrinder() {
            this.newGrinderFormMessage = null;
            axios.post('/grinders',
                {
                    model: this.newGrinderForm.model,
                    grinder_producer_id: this.newGrinderForm.producer_id,
                    producer_name: this.newGrinderForm.producer_name,
                    notes: this.newGrinderForm.notes,
                    very_fine_min: this.newGrinderForm.very_fine_min,
                    very_fine_max: this.newGrinderForm.very_fine_max,
                    fine_min: this.newGrinderForm.fine_min,
                    fine_max: this.newGrinderForm.fine_max,
                    medium_min: this.newGrinderForm.medium_min,
                    medium_max: this.newGrinderForm.medium_max,
                    medium_coarse_min: this.newGrinderForm.medium_coarse_min,
                    medium_coarse_max: this.newGrinderForm.medium_coarse_max,
                    coarse_min: this.newGrinderForm.coarse_min,
                    coarse_max: this.newGrinderForm.coarse_max,
                    very_coarse_min: this.newGrinderForm.very_coarse_min,
                })
                .then((response) => {
                    this.newGrinderFormMessage = response.data.message;
                    this.newGrinderForm.reset();
                })
                .catch(error => this.newGrinderForm.errors.record(error.response.data));
        },
    },
    watch: {
    }
}
</script>

<style scoped>
:deep(.modal-container) {
    display: flex;
    justify-content: center;
    align-items: center;
}

:deep(.modal-content) {
    position: relative;
    display: flex;
    flex-direction: column;
    /*margin: 0 5rem;*/
    max-width: 500px;
    max-height: 90%;
    padding: 1rem;
    background: #fff;
    overflow-y: auto;
    border-radius: 5px;
}

.modal__title {
    font-size: 1.5rem;
    font-weight: 700;
}
</style>
