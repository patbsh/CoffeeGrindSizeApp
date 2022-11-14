<template>
    <vue-final-modal classes="modal-container" content-class="modal-content">
        <span class="modal__title">Make changes to the grinder</span>
        <span class="text-success" v-if="updateGrinderFormMessage" v-text="updateGrinderFormMessage"></span>
        <form @submit="updateGrinder" @keydown="updateGrinderForm.errors.clear($event.target.name)">
            <div class="row">
                <div class="col-6">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Grinder Model</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                               v-model="updateGrinderForm.model">
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('model')"
                              v-text="updateGrinderForm.errors.get('model')"></span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="grinderProducer" class="form-label">Grinder producer</label>
                        <v-select v-model="updateGrinderForm.producer_id" :options="producers"
                                  :reduce="producers => producers.id" label="name"/>
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('producer_id')"
                              v-text="updateGrinderForm.errors.get('producer_id')"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <label for="veryFine" class="form-label">Very fine setting (optional)</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control text-center w-25" min="1"
                               v-model="updateGrinderForm.very_fine_min">
                        <span class="input-group-text">to</span>
                        <input type="number" class="form-control text-center w-25"
                               :min="updateGrinderForm.very_fine_min+1" v-model="updateGrinderForm.very_fine_max">
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('very_fine_min')"
                              v-text="updateGrinderForm.errors.get('very_fine_min')"></span>
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('very_fine_max')"
                              v-text="updateGrinderForm.errors.get('very_fine_max')"></span>
                    </div>
                </div>
                <div class="col-6">
                    <label for="fine" class="form-label">Fine setting</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control text-center w-25"
                               :min="updateGrinderForm.very_fine_max+1" v-model="updateGrinderForm.fine_min">
                        <span class="input-group-text">to</span>
                        <input type="number" class="form-control text-center w-25" :min="updateGrinderForm.fine_min+1"
                               v-model="updateGrinderForm.fine_max">
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('fine_min')"
                              v-text="updateGrinderForm.errors.get('fine_min')"></span>
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('fine_max')"
                              v-text="updateGrinderForm.errors.get('fine_max')"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <label for="medium" class="form-label">Medium setting</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control text-center w-25" :min="updateGrinderForm.fine_max+1"
                               v-model="updateGrinderForm.medium_min">
                        <span class="input-group-text">to</span>
                        <input type="number" class="form-control text-center w-25"
                               :min="updateGrinderForm.medium_min+1" v-model="updateGrinderForm.medium_max">
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('medium_min')"
                              v-text="updateGrinderForm.errors.get('medium_min')"></span>
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('medium_max')"
                              v-text="updateGrinderForm.errors.get('medium_max')"></span>
                    </div>
                </div>
                <div class="col-6">
                    <label for="mediumCoarse" class="form-label">Medium coarse setting</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control text-center w-25"
                               :min="updateGrinderForm.medium_max+1" v-model="updateGrinderForm.medium_coarse_min">
                        <span class="input-group-text">to</span>
                        <input type="number" class="form-control text-center w-25"
                               :min="updateGrinderForm.medium_coarse_min+1" v-model="updateGrinderForm.medium_coarse_max">
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('medium_coarse_min')"
                              v-text="updateGrinderForm.errors.get('medium_coarse_min')"></span>
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('medium_coarse_max')"
                              v-text="updateGrinderForm.errors.get('medium_coarse_max')"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <label for="coarse" class="form-label">Coarse setting</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control text-center w-25"
                               :min="updateGrinderForm.medium_coarse_max+1" v-model="updateGrinderForm.coarse_min">
                        <span class="input-group-text">to</span>
                        <input type="number" class="form-control text-center w-25"
                               :min="updateGrinderForm.coarse_min+1" v-model="updateGrinderForm.coarse_max">
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('coarse_min')"
                              v-text="updateGrinderForm.errors.get('coarse_min')"></span>
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('coarse_max')"
                              v-text="updateGrinderForm.errors.get('coarse_max')"></span>
                    </div>
                </div>
                <div class="col-6">
                    <label for="veryCoarse" class="form-label">Very coarse setting</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text">from</span>
                        <input type="number" class="form-control text-center w-25"
                               :min="updateGrinderForm.coarse_max+1" v-model="updateGrinderForm.very_coarse_min">
                        <span class="text-danger" v-if="updateGrinderForm.errors.has('very_coarse_min')"
                              v-text="updateGrinderForm.errors.get('very_coarse_min')"></span>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Notes (optional)</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                          v-model="updateGrinderForm.notes">
                    </textarea>
            </div>
            <button
                @click.prevent="updateGrinder()"
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
    props: ["grinder","producers"],
    data () {
        return {
            newProducerSwitch: false,
            updateGrinderForm: new Form({
                model: this.grinder.model,
                producer_id: this.grinder.grinder_producer_id,
                producer_name: null,
                very_fine_min: this.grinder.very_fine_min,
                very_fine_max: this.grinder.very_fine_max,
                fine_min: this.grinder.fine_min,
                fine_max: this.grinder.fine_max,
                medium_min: this.grinder.medium_min,
                medium_max: this.grinder.medium_max,
                medium_coarse_min: this.grinder.medium_coarse_min,
                medium_coarse_max: this.grinder.medium_coarse_max,
                coarse_min: this.grinder.coarse_min,
                coarse_max: this.grinder.coarse_max,
                very_coarse_min: this.grinder.very_coarse_min,
                notes: this.grinder.notes,
            }),
            updateGrinderFormMessage: null,
        }
    },
    mounted () {
    },
    created () {
    },
    computed: {
    },
    methods: {
        updateGrinder() {
            this.updateGrinderFormMessage = null;
            axios.put('/grinders/' + this.grinder.id,
                {
                    model: this.updateGrinderForm.model,
                    grinder_producer_id: this.updateGrinderForm.producer_id,
                    notes: this.updateGrinderForm.notes,
                    very_fine_min: this.updateGrinderForm.very_fine_min,
                    very_fine_max: this.updateGrinderForm.very_fine_max,
                    fine_min: this.updateGrinderForm.fine_min,
                    fine_max: this.updateGrinderForm.fine_max,
                    medium_min: this.updateGrinderForm.medium_min,
                    medium_max: this.updateGrinderForm.medium_max,
                    medium_coarse_min: this.updateGrinderForm.medium_coarse_min,
                    medium_coarse_max: this.updateGrinderForm.medium_coarse_max,
                    coarse_min: this.updateGrinderForm.coarse_min,
                    coarse_max: this.updateGrinderForm.coarse_max,
                    very_coarse_min: this.updateGrinderForm.very_coarse_min,
                })
                .then((response) => {
                    this.updateGrinderFormMessage = response.data.message;
                    this.updateGrinderForm.reset();
                })
                .catch(error => this.updateGrinderForm.errors.record(error.response.data));
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
