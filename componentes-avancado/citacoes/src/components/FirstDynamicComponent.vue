<template>
    <div>
        <p>First component</p>
    </div>
</template>

<script>
export default {
    created() {
        console.log('created');
    },
    destroyed() {
        console.log('destroyed');
    },

    activated() {
        console.log('activated keep alive component');
    },
    deactivated() {
        console.log('deactivated keep alive component');
    },    
}
</script>

<style>

</style>