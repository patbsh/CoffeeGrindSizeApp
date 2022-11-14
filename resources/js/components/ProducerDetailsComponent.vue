<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card text-center">
                <div class="card-header">
                    <h1 class="h5">{{ producer.name }}</h1>
                </div>
                <div class="card-body">
                    <v-btn
                        color="primary"
                        rounder="lg"
                        href="/producers"
                        class="mx-2">
                        Go back to the list
                    </v-btn>
                    <v-btn
                        v-if="is_admin"
                        color="danger"
                        rounder="lg"
                        @click="removeProducer"
                        class="m-2">
                        Remove the producer
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: ['producer','is_admin'],
    methods: {
        removeProducer: function () {
            axios.delete('/producers/' + this.producer.id)
                .then((response) =>{
                })
                .catch((error) => {
                });
            window.location.href = '/producers';
        }
    },
}
</script>
