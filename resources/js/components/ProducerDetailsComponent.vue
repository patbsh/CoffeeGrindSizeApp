<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card text-center">
                <div class="card-header">
                    <h1 class="h5">{{ producer.name }}</h1>
                </div>
                <div class="card-body">
                    <div v-if="is_admin">
                        <v-select
                            v-model="status"
                            :items="statuses"
                            item-title="name"
                            item-value="value"
                            label="Select"
                            single-line>
                        </v-select>
                        <v-btn
                            color="primary"
                            rounder="lg"
                            @click="saveStatus"
                            class="m-2">
                            Save status
                        </v-btn>
                    </div>
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
    data() {
        return {
            status: this.producer.is_verified,
            statuses: [
                { name: 'Verified', value: 1 },
                { name: 'Unverified', value: 0 },
            ],
        }
    },
    methods: {
        removeProducer: function () {
            axios.delete('/producers/' + this.producer.id)
                .then((response) =>{
                })
                .catch((error) => {
                });
            window.location.href = '/producers';
        },
        saveStatus: function () {
            axios.put('/grinder-producer-status/' + this.producer.id, {
                is_verified: this.status
            })
                .then((response) => {
                })
                .catch((error) => {
                });
        }
    },
}
</script>
