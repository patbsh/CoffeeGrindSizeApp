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
    </div>
</template>

<script>
import vSelect from 'vue-select';

export default {
    components: {vSelect},
    name: "GrindSizeComponent",
    props: ["grinders"],
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
            selectedGeneralGrindSize: null
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
    computed: {},
    methods: {},
}

</script>

<style scoped>

</style>
