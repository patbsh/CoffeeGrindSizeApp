<template>
    <div class="text-center">
        <h1>Grind setting wizard <v-icon color="deep-purple">mdi-wizard-hat</v-icon></h1>
        <div class="form-check form-switch mt-2 mb-2 d-flex justify-content-center">
            <input class="form-check-input mx-2" type="checkbox" id="flexSwitchCheckDefault"
                   v-model="recipeGrinderMode">
            <label for="flexSwitchCheckDefault">Recipe uses a specific grinder</label>
        </div>
        <div class="row d-flex justify-content-around">
            <div class="col-5">
                <label>Your grinder</label>
                <v-select label="Select your grinder" :items="grinders" item-title="full_name" item-value="id" v-model="userGrinder" return-object/>
            </div>
            <div class="col-5">
                <div v-if="recipeGrinderMode">
                    <label>Recipe grinder</label>
                    <v-select label="Select recipe grinder" :items="grinders" item-title="full_name" item-value="id" v-model="recipeGrinder" return-object/>
                    <div class="input-group mt-2 mb-4" v-if="recipeGrinderMode&&recipeGrinder">
                        <span class="input-group-text" id="inputGroup-sizing-default">Setting</span>
                        <input type="number" min="1" v-model="recipeGrindNumber" class="form-control"
                               aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                </div>
                <div v-if="!recipeGrinderMode">
                    <label>What is the general grind size in the recipe?</label>
                    <v-select label="Select general grind size" :items="generalGrindSizes" v-model="selectedGeneralGrindSize"/>
                </div>
            </div>
        </div>
        <p v-if="userGrinder&&recipeGrinder&&recipeGrindNumber&&recipeGrinderMode">
            {{ recipeGrindNumber }} clicks on {{ recipeGrinder.grinder_producer.name }} {{ recipeGrinder.model }}
            is considered a {{ recipeGrindGeneral }} grind and it will be around the setting of <span
            v-if="recipeGrindGeneral!=='very coarse'">{{ userGrindMin }} to
            {{ userGrindMax }}</span><span v-else>{{ userGrindMin }}+</span> on {{ userGrinder.grinder_producer.name }}
            {{ userGrinder.model }}.
        </p>
        <p v-if="userGrinder&&!recipeGrinderMode&&selectedGeneralGrindSize">
            {{ selectedGeneralGrindSize }} is around the setting of <span
            v-if="recipeGrindGeneral!=='very coarse'">{{ userGrindMin }} to
            {{ userGrindMax }}</span><span v-else>{{ userGrindMin }}+</span> on
            {{ userGrinder.grinder_producer.name }}
            {{ userGrinder.model }}.
        </p>
        <p>Is the grinder you're looking for not on the list? <a @click="showNewGrinderModal = true" href="#">click
            here</a> to add a new one.</p>
        <p>If you want to request changes to an existing grinder <a @click="showReportModal = true" href="#">click here</a>.</p>

        <new-grinder-form-component v-model="showNewGrinderModal" :grinders="grinders" :producers="producers"></new-grinder-form-component>
        <grinder-report-form-component v-model="showReportModal" :grinders="grinders"></grinder-report-form-component>
    </div>
</template>

<script>

export default {
    name: "GrindSizeComponent",
    props: ["grinders", "producers"],
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
            showReportModal: false,
        }
    },
    updated() {
        if (this.recipeGrinderMode) {
            this.selectedGeneralGrindSize = null;
        }
        if (this.userGrinder && ((this.recipeGrinder && this.recipeGrindNumber != null) || this.selectedGeneralGrindSize)) {
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
    computed: {},
    methods: {},
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
