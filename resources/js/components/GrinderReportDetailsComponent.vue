<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card text-center">
                <div class="card-header">
                    <h1 class="h5">Details about report id: {{ report.id }}</h1>
                </div>
                <div class="card-body">
                    <p>
                        {{ report.report }}
                    </p>
                    <v-btn
                        color="primary"
                        rounder="lg"
                        href="/producers"
                        class="mx-2">
                        Go back to the list
                    </v-btn>
                    <v-btn
                        color="primary"
                        rounder="lg"
                        :href="'/grinders/' + report.grinder_id"
                        class="mx-2">
                        Go to the grinder
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    props: ['report']
}
</script>
