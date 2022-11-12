<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card text-center">
                <div class="card-header">
                    <h1 class="h5">{{ producer.name }}</h1>
                </div>
                <div class="card-body">

                    <a href="/producers" class="btn btn-primary mx-2">Go back to the list</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: ['producer']
}
</script>
