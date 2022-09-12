<template>
    <div class="text-center">
        <h1>Grind size component</h1>

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
                        <input type="number" min="1" :max="recipeGrinder.very_coarse+recipeGrinder.range_size"
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
            is considered a {{ recipeGrindGeneral }} grind and it will be around the setting of {{ userGrindMin }} to
            {{ userGrindMax }} on {{ userGrinder.grinder_producer.name }}
            {{ userGrinder.model }}.
        </p>
        <p v-if="userGrinder&&!recipeGrinderMode&&selectedGeneralGrindSize">
            {{ selectedGeneralGrindSize }} is around the setting of {{ userGrindMin }} to {{ userGrindMax }} on
            {{ userGrinder.grinder_producer.name }}
            {{ userGrinder.model }}.
        </p>
        <p>Is the grinder you're looking for not on the list? <a @click="showNewGrinderModal = true" href="#">click here</a> to add a new one.</p>
        <p>If you want to request changes to an existing grinder <a href="#">click here</a>.</p>

            <vue-final-modal v-model="showNewGrinderModal" classes="modal-container" content-class="modal-content">
                <span class="modal__title">Add a new grinder</span>
                <form @submit="submitNewGrinder">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Grinder Model</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div class="mb-3">
                        <label for="grinderProducer" class="form-label">Grinder producer</label>
                        <v-select v-model="newGrinderForm.producer_id" :options="producers" :reduce="producers => producers.id" label="name"/>
                    </div>
                    <div class="mb-3">
                        <label for="rangeSize" class="form-label">Range between settings</label>
                        <input type="number" min="1" class="form-control" id="rangeSize" v-model="newGrinderForm.range_size">
                    </div>
                    <div class="mb-3">
                        <label for="veryFine" class="form-label">Very fine setting <span v-if="newGrinderForm.range_size&&newGrinderForm.very_fine">({{newGrinderForm.very_fine}}-{{newGrinderForm.very_fine+newGrinderForm.range_size}})</span></label>
                        <input type="number" min="1" class="form-control" id="veryFine" v-model="newGrinderForm.very_fine">
                    </div>
                    <div class="mb-3">
                        <label for="fine" class="form-label">Fine setting <span v-if="newGrinderForm.range_size&&newGrinderForm.fine">({{newGrinderForm.fine}}-{{newGrinderForm.fine+newGrinderForm.range_size}})</span></label>
                        <input type="number" :min="newGrinderForm.very_fine+newGrinderForm.range_size+1" class="form-control" id="veryFine" v-model="newGrinderForm.fine">
                    </div>
                    <div class="mb-3">
                        <label for="medium" class="form-label">Medium setting <span v-if="newGrinderForm.range_size&&newGrinderForm.medium">({{newGrinderForm.medium}}-{{newGrinderForm.medium+newGrinderForm.range_size}})</span></label>
                        <input type="number" :min="newGrinderForm.fine+newGrinderForm.range_size+1" class="form-control" id="medium" v-model="newGrinderForm.medium">
                    </div>
                    <div class="mb-3">
                        <label for="mediumCoarse" class="form-label">Medium coarse setting <span v-if="newGrinderForm.range_size&&newGrinderForm.medium_coarse">({{newGrinderForm.medium_coarse}}-{{newGrinderForm.medium_coarse+newGrinderForm.range_size}})</span></label>
                        <input type="number" :min="newGrinderForm.medium+newGrinderForm.range_size+1" class="form-control" id="mediumCoarse" v-model="newGrinderForm.medium_coarse">
                    </div>
                    <div class="mb-3">
                        <label for="coarse" class="form-label">Coarse setting <span v-if="newGrinderForm.range_size&&newGrinderForm.coarse">({{newGrinderForm.coarse}}-{{newGrinderForm.medium_coarse+newGrinderForm.coarse}})</span></label>
                        <input type="number" :min="newGrinderForm.medium_coarse+newGrinderForm.range_size+1" class="form-control" id="coarse" v-model="newGrinderForm.coarse">
                    </div>
                    <div class="mb-3">
                        <label for="veryCoarse" class="form-label">Very coarse setting <span v-if="newGrinderForm.range_size&&newGrinderForm.very_coarse">({{newGrinderForm.very_coarse}}-{{newGrinderForm.very_coarse+newGrinderForm.range_size}})</span></label>
                        <input type="number" :min="newGrinderForm.coarse+newGrinderForm.range_size+1" class="form-control" id="veryCoarse" v-model="newGrinderForm.very_coarse">
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
                range_size: null,
                very_fine: null,
                fine: null,
                medium: null,
                medium_coarse: null,
                coarse: null,
                very_coarse: null,
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
            if (this.selectedGeneralGrindSize === 'very fine' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.very_fine + this.recipeGrinder.range_size)) {
                this.recipeGrindGeneral = 'very fine';
                this.userGrindMin = this.userGrinder.very_fine;
                this.userGrindMax = this.userGrinder.very_fine + this.userGrinder.range_size;
            } else if (!this.recipeGrinder && this.selectedGeneralGrindSize === 'fine' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.fine + this.recipeGrinder.range_size)) {
                this.recipeGrindGeneral = 'fine';
                this.userGrindMin = this.userGrinder.fine;
                this.userGrindMax = this.userGrinder.fine + this.userGrinder.range_size;
            } else if (this.selectedGeneralGrindSize === 'medium' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.medium + this.recipeGrinder.range_size)) {
                this.recipeGrindGeneral = 'medium';
                this.userGrindMin = this.userGrinder.medium;
                this.userGrindMax = this.userGrinder.medium + this.userGrinder.range_size;
            } else if (this.selectedGeneralGrindSize === 'medium coarse' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.medium_coarse + this.recipeGrinder.range_size)) {
                this.recipeGrindGeneral = 'medium coarse';
                this.userGrindMin = this.userGrinder.medium_coarse;
                this.userGrindMax = this.userGrinder.medium_coarse + this.userGrinder.range_size;
            } else if (this.selectedGeneralGrindSize === 'coarse' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.coarse + this.recipeGrinder.range_size)) {
                this.recipeGrindGeneral = 'coarse';
                this.userGrindMin = this.userGrinder.coarse;
                this.userGrindMax = this.userGrinder.coarse + this.userGrinder.range_size;
            } else if (this.selectedGeneralGrindSize === 'very coarse' || (this.recipeGrinder && this.recipeGrindNumber < this.recipeGrinder.very_coarse + this.recipeGrinder.range_size)) {
                this.recipeGrindGeneral = 'very coarse';
                this.userGrindMin = this.userGrinder.very_coarse;
                this.userGrindMax = this.userGrinder.very_coarse + this.userGrinder.range_size;
            } else if (this.recipeGrindNumber > this.recipeGrinder.very_coarse + this.recipeGrinder.range_size) {
                // this.recipeGrindNumber = this.recipeGrinder.very_coarse + this.recipeGrinder.range_size;
                this.recipeGrindGeneral = 'very coarse';
                this.userGrindMin = this.userGrinder.very_coarse;
                this.userGrindMax = this.userGrinder.very_coarse + this.userGrinder.range_size;
            }
        }


    },
    computed: {
        submitNewGrinder(){
            console.log('hello');
        },
    },
    methods: {

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
    display: flex;
    width: 50%;
    flex-direction: column;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
}
.modal__title {
    font-size: 1.5rem;
    font-weight: 700;
}

</style>
