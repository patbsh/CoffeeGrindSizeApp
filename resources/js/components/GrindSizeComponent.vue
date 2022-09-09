<template>
    <div class="text-center">
        <h1>Grind size component</h1>
        <div class="row">
            <div class="col-6">
                <label>Your grinder</label>
                <v-select label="item_data" :options="grinders" v-model="userGrinder"/>
            </div>
            <div class="col-6">
                <label>Recipe grinder</label>
                <v-select class="mb-2" label="item_data" :options="grinders" v-model="recipeGrinder"/>
                <div class="form-check form-switch mt-2 mb-2" v-if="recipeGrinder">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Recipe uses precise setting</label>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="preciseOn">
                </div>
                <div class="input-group mt-2 mb-2" v-if="preciseOn&&recipeGrinder">
                    <span class="input-group-text" id="inputGroup-sizing-default">Setting</span>
                    <input type="number" min="1" :max="recipeGrinder.very_coarse+recipeGrinder.range_size"
                           v-model="recipeGrindNumber" class="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default">
                </div>
            </div>
        </div>
        <br>
        <p v-if="userGrinder&&recipeGrinder&&recipeGrindNumber">
            {{ recipeGrindNumber }} clicks on {{ recipeGrinder.grinder_producer.name }} {{ recipeGrinder.model }}
            is considered a {{ recipeGrindGeneral }} on {{ userGrinder.grinder_producer.name }}
            {{ userGrinder.model }}
            and it will be around the setting of {{ userGrindMin }} to {{ userGrindMax }}.
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
            preciseOn: null,
        }
    },
    mounted() {
        this.grinders.map(function (x) {
            return x.item_data = x.grinder_producer.name + ' ' + x.model;
        });
    },
    updated() {
        if (this.recipeGrinder && this.recipeGrindNumber != null) {
            if (this.recipeGrindNumber < this.recipeGrinder.very_fine + this.recipeGrinder.range_size) {
                this.recipeGrindGeneral = 'very fine';
                this.userGrindMin = this.userGrinder.very_fine;
                this.userGrindMax = this.userGrinder.very_fine + this.userGrinder.range_size;
            } else if (this.recipeGrindNumber < this.recipeGrinder.fine + this.recipeGrinder.range_size) {
                this.recipeGrindGeneral = 'fine';
                this.userGrindMin = this.userGrinder.fine;
                this.userGrindMax = this.userGrinder.fine + this.userGrinder.range_size;
            } else if (this.recipeGrindNumber < this.recipeGrinder.medium + this.recipeGrinder.range_size) {
                this.recipeGrindGeneral = 'medium';
                this.userGrindMin = this.userGrinder.medium;
                this.userGrindMax = this.userGrinder.medium + this.userGrinder.range_size;
            } else if (this.recipeGrindNumber < this.recipeGrinder.medium_coarse + this.recipeGrinder.range_size) {
                this.recipeGrindGeneral = 'medium coarse';
                this.userGrindMin = this.userGrinder.medium_coarse;
                this.userGrindMax = this.userGrinder.medium_coarse + this.userGrinder.range_size;
            } else if (this.recipeGrindNumber < this.recipeGrinder.coarse + this.recipeGrinder.range_size) {
                this.recipeGrindGeneral = 'coarse';
                this.userGrindMin = this.userGrinder.coarse;
                this.userGrindMax = this.userGrinder.coarse + this.userGrinder.range_size;
            } else if (this.recipeGrindNumber < this.recipeGrinder.very_coarse + this.recipeGrinder.range_size) {
                this.recipeGrindGeneral = 'very coarse';
                this.userGrindMin = this.userGrinder.very_coarse;
                this.userGrindMax = this.userGrinder.very_coarse + this.userGrinder.range_size;
            } else if (this.recipeGrindNumber > this.recipeGrinder.very_coarse + this.recipeGrinder.range_size) {
                this.recipeGrindNumber = this.recipeGrinder.very_coarse + this.recipeGrinder.range_size;
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
