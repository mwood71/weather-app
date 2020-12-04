<template>
    <div class="container mt-4">

        <div id="search">
            <h1 class="display-6">Search</h1>
            <form class="form-inline">
                <div class="form-group offset-4 col-lg-4 mb-3 mt-3">
                    <p class="warning" v-if="blankError">No search submitted.</p>
                    <input v-model="searchString" type="text" class="form-control" id="searchInput" placeholder="Search City Name">
                </div>
                <button @click="submit" type="submit" class="btn btn-primary mb-2">Search</button>
            </form>

        </div>


    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {

            return {
                searchString: '',
                blankError: false

            }

        },
        methods : {
            submit : function(){

                if (this.searchString === ''){
                    this.blankError = true     
                }
                else{
                    this.blankError = false
                    this.$store.dispatch('searchCity', this.searchString)
                }

            }
        }
    };
</script>

<style scoped>

    .warning {
        color: red;
    }
</style>