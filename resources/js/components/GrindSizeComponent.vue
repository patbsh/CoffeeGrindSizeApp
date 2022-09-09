<template>
    <div class="text-center">
        <h1>Grind size component</h1>
        <div class="row">
            <div class="col-6">
                <label>Your grinder</label>
                <v-select label="item_data" :options="grinders" v-model="selectedGrinder"/>
            </div>
            <div class="col-6">
                <label>Recipe grinder</label>
                <v-select class="mb-2" label="item_data" :options="grinders" v-model="selectedGrinder2"/>
                <div class="form-check form-switch mt-2 mb-2" v-if="selectedGrinder2">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Recipe uses precise setting</label>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="preciseOn">
                </div>
                <div class="input-group mt-2 mb-2" v-if="preciseOn&&selectedGrinder2">
                    <span class="input-group-text" id="inputGroup-sizing-default">Setting</span>
                    <input type="number" min="1" :max="selectedGrinder2.very_coarse+selectedGrinder2.range_size"
                           v-model="recipeGrindNumber" class="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default">
                </div>
            </div>
        </div>
        <br>
        <p v-if="selectedGrinder&&selectedGrinder2&&recipeGrindNumber">
            {{ recipeGrindNumber }} clicks on {{ selectedGrinder2.grinder_producer.name }} {{ selectedGrinder2.model }}
            is considered a {{ recipeGrindGeneral }} on {{ selectedGrinder.grinder_producer.name }}
            {{ selectedGrinder.model }}
            and it will be around the setting of.
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
            selectedGrinder: null,
            selectedGrinder2: null,
            preciseOn: null,
            recipeGrindNumber: null,
            recipeGrindGeneral: null
        }
    },
    mounted() {
        this.grinders.map(function (x) {
            return x.item_data = x.grinder_producer.name + ' ' + x.model;
        });
    },
    updated() {
        if (this.selectedGrinder2 && this.recipeGrindNumber != null) {
            if (this.recipeGrindNumber < this.selectedGrinder2.very_fine + this.selectedGrinder2.range_size) {
                this.recipeGrindGeneral = 'very fine';
            } else if (this.recipeGrindNumber < this.selectedGrinder2.fine + this.selectedGrinder2.range_size) {
                this.recipeGrindGeneral = 'fine';
            } else if (this.recipeGrindNumber < this.selectedGrinder2.medium + this.selectedGrinder2.range_size) {
                this.recipeGrindGeneral = 'medium';
            } else if (this.recipeGrindNumber < this.selectedGrinder2.medium_coarse + this.selectedGrinder2.range_size) {
                this.recipeGrindGeneral = 'medium coarse';
            } else if (this.recipeGrindNumber < this.selectedGrinder2.coarse + this.selectedGrinder2.range_size) {
                this.recipeGrindGeneral = 'coarse';
            } else if (this.recipeGrindNumber < this.selectedGrinder2.very_coarse + this.selectedGrinder2.range_size) {
                this.recipeGrindGeneral = 'very coarse';
            } else if (this.recipeGrindNumber > this.selectedGrinder2.very_coarse + this.selectedGrinder2.range_size) {
                this.recipeGrindGeneral = 'wrong input';
            }
        }


    },
    computed: {},
    methods: {},
}

</script>

<style scoped>

</style>
