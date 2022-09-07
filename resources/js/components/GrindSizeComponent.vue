<template>
    <div class="text-center">
        <h1>Grind size component</h1>
        <li v-for="grinder in grinders">
            {{ grinder }}
        </li>
    </div>
</template>

<script>
export default {
    name: "GrindSizeComponent",
    props: ["grinders"],
    data() {
        return {}
    },
    mounted() {
        console.log("Component mounted");
    },
    computed: {},
    methods: {},
}
</script>

<style scoped>

</style>
