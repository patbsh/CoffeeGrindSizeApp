<template>
    <div class="text-center">
        <h1>Grind size component</h1>
        <span class="text-success" v-if="message" v-text="message"></span>
        <div class="form-check form-switch mt-2 mb-2 d-flex justify-content-center">
            <input class="form-check-input mx-2" type="checkbox" id="flexSwitchCheckDefault"
                   v-model="recipeGrinderMode">
            <label for="flexSwitchCheckDefault">Recipe uses a specific grinder</label>
        </div>
        <div class="row">
            <div class="col-6">
                <label>Your grinder</label>
                <v-select label="item_data" :options="grinders" v-model="userGrinder"/>
            </div>
            <div class="col-6">
                <div v-if="recipeGrinderMode">
                    <label>Recipe grinder</label>
                    <v-select class="mb-2" label="item_data" :options="grinders" v-model="recipeGrinder"/>
                    <div class="input-group mt-2 mb-4" v-if="recipeGrinderMode&&recipeGrinder">
                        <span class="input-group-text" id="inputGroup-sizing-default">Setting</span>
                        <input type="number" min="1" :max="recipeGrinder.very_coarse_max"
                               v-model="recipeGrindNumber" class="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default">
                    </div>
                </div>
                <div v-if="!recipeGrinderMode">
                    <label>What is the general grind size in the recipe?</label>
                    <v-select class="mb-4" label="item_data" :options="generalGrindSizes" v-model="selectedGeneralGrindSize"/>
                </div>
            </div>
        </div>
        <p v-if="userGrinder&&recipeGrinder&&recipeGrindNumber&&recipeGrinderMode">
            {{ recipeGrindNumber }} clicks on {{ recipeGrinder.grinder_producer.name }} {{ recipeGrinder.model }}
            is considered a {{ recipeGrindGeneral }} grind and it will be around the setting of <span v-if="recipeGrindGeneral!=='very coarse'">{{ userGrindMin }} to
            {{ userGrindMax }}</span><span v-else>{{ userGrindMin }}+</span> on {{ userGrinder.grinder_producer.name }}
            {{ userGrinder.model }}.
        </p>
        <p v-if="userGrinder&&!recipeGrinderMode&&selectedGeneralGrindSize">
            {{ selectedGeneralGrindSize }} is around the setting of <span v-if="recipeGrindGeneral!=='very coarse'">{{ userGrindMin }} to
            {{ userGrindMax }}</span><span v-else>{{ userGrindMin }}+</span> on
            {{ userGrinder.grinder_producer.name }}
            {{ userGrinder.model }}.
        </p>
        <p>Is the grinder you're looking for not on the list? <a @click="showNewGrinderModal = true" href="#">click here</a> to add a new one.</p>
        <p>If you want to request changes to an existing grinder <a href="#">click here</a>.</p>

            <vue-final-modal v-model="showNewGrinderModal" classes="modal-container" content-class="modal-content">
                <span class="modal__title">Add a new grinder</span>
                <form @submit="submitNewGrinder">
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Grinder Model</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="newGrinderForm.model">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="grinderProducer" class="form-label">Grinder producer</label>
                                <v-select v-model="newGrinderForm.producer_id" :options="producers" :reduce="producers => producers.id" label="name"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <label for="veryFine" class="form-label">Very fine setting</label>
                            <div class="input-group mb-3">
                                <input type="number" class="form-control" min="1" v-model="newGrinderForm.very_fine_min">
                                <span class="input-group-text">to</span>
                                <input type="number" class="form-control" :min="newGrinderForm.very_fine_min+1" v-model="newGrinderForm.very_fine_max">
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="fine" class="form-label">Fine setting</label>
                            <div class="input-group mb-3">
                                <input type="number" class="form-control" :min="newGrinderForm.very_fine_max+1" v-model="newGrinderForm.fine_min">
                                <span class="input-group-text">to</span>
                                <input type="number" class="form-control" :min="newGrinderForm.fine_min+1" v-model="newGrinderForm.fine_max">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <label for="medium" class="form-label">Medium setting</label>
                            <div class="input-group mb-3">
                                <input type="number" class="form-control" :min="newGrinderForm.fine_max+1" v-model="newGrinderForm.medium_min">
                                <span class="input-group-text">to</span>
                                <input type="number" class="form-control" :min="newGrinderForm.medium_min+1" v-model="newGrinderForm.medium_max">
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="mediumCoarse" class="form-label">Medium coarse setting</label>
                            <div class="input-group mb-3">
                                <input type="number" class="form-control" :min="newGrinderForm.medium_max+1" v-model="newGrinderForm.medium_coarse_min">
                                <span class="input-group-text">to</span>
                                <input type="number" class="form-control" :min="newGrinderForm.medium_coarse_min+1" v-model="newGrinderForm.medium_coarse_max">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <label for="coarse" class="form-label">Coarse setting</label>
                            <div class="input-group mb-3">
                                <input type="number" class="form-control" :min="newGrinderForm.medium_coarse_max+1" v-model="newGrinderForm.coarse_min">
                                <span class="input-group-text">to</span>
                                <input type="number" class="form-control" :min="newGrinderForm.coarse_min+1" v-model="newGrinderForm.coarse_max">
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="veryCoarse" class="form-label">Very coarse setting</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text">from</span>
                                <input type="number" class="form-control" :min="newGrinderForm.coarse_max+1" v-model="newGrinderForm.very_coarse_min">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Notes (optional)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button
                        @click.prevent="submitNewGrinder()"
                        class="btn btn-primary mx-2">
                        Submit
                    </button>
                </form>
            </vue-final-modal>

    </div>
</template>

<script>
import vSelect from 'vue-select';
import { VueFinalModal, ModalsContainer } from "vue-final-modal";



export default {
    components: {vSelect, VueFinalModal, ModalsContainer},
    name: "GrindSizeComponent",
    props: ["grinders","producers"],
    data() {
        return {
            message: '',
            userGrinder: null,
            userGrindMin: null,
            userGrindMax: null,
            recipeGrinder: null,
            recipeGrindNumber: null,
            recipeGrindGeneral: null,
            recipeGrinderMode: false,
            generalGrindSizes: ['very fine', 'fine', 'medium', 'medium coarse', 'coarse', 'very coarse'],
            selectedGeneralGrindSize: null,
            showNewGrinderModal: false,
            newGrinderForm: new Form({
                model: null,
                producer_id: null,
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
                very_coarse_max: null,
                notes: null,
            }),
        }
    },
    mounted() {
        this.grinders.map(function (x) {
            return x.item_data = x.grinder_producer.name + ' ' + x.model;
        });
    },
    updated() {
        if (this.recipeGrinderMode) {
            this.selectedGeneralGrindSize = null;
        }
        if ((this.recipeGrinder && this.recipeGrindNumber != null) || this.selectedGeneralGrindSize) {
            if (this.selectedGeneralGrindSize === 'very fine' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.very_fine_max)) {
                this.recipeGrindGeneral = 'very fine';
                this.userGrindMin = this.userGrinder.very_fine_min;
                this.userGrindMax = this.userGrinder.very_fine_max;
            } else if (!this.recipeGrinder && this.selectedGeneralGrindSize === 'fine' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.fine_max)) {
                this.recipeGrindGeneral = 'fine';
                this.userGrindMin = this.userGrinder.fine_min;
                this.userGrindMax = this.userGrinder.fine_max;
            } else if (this.selectedGeneralGrindSize === 'medium' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.medium_max)) {
                this.recipeGrindGeneral = 'medium';
                this.userGrindMin = this.userGrinder.medium_min;
                this.userGrindMax = this.userGrinder.medium_max;
            } else if (this.selectedGeneralGrindSize === 'medium coarse' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.medium_coarse_max)) {
                this.recipeGrindGeneral = 'medium coarse';
                this.userGrindMin = this.userGrinder.medium_coarse_min;
                this.userGrindMax = this.userGrinder.medium_coarse_max;
            } else if (this.selectedGeneralGrindSize === 'coarse' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.coarse_max)) {
                this.recipeGrindGeneral = 'coarse';
                this.userGrindMin = this.userGrinder.coarse_min;
                this.userGrindMax = this.userGrinder.coarse_max;
            } else if (this.selectedGeneralGrindSize === 'very coarse' || (this.recipeGrinder && this.recipeGrindNumber > this.recipeGrinder.very_coarse_min)) {
                this.recipeGrindGeneral = 'very coarse';
                this.userGrindMin = this.userGrinder.very_coarse_min;
            }
        }


    },
    computed: {

    },
    methods: {
        submitNewGrinder(){
            axios.post('/grinder',
                {
                    model: this.newGrinderForm.model,
                    grinder_producer_id: this.newGrinderForm.producer_id,
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
                    this.message = response.data.message;
                })
                .catch(error => this.form.errors.record(error.response.data));
        }
    },
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
    /*max-height: 80%;*/
    /*margin: 0 5rem;*/
    max-width: 500px;
    max-height:600px;
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
