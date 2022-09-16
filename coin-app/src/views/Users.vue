<template>
    <LoadingScreen v-if="isLoading">
        <div id="loading">
            <img class="img" src="/src/assets/images/loading.gif" alt="loading..." width="200" />
        </div>
    </LoadingScreen>
    <div class="users-main bg-orange-200">
        <div class="show-users border border-slate-700  rounded-lg m-5  bg-orange-300 p-2"
            v-for="(item, index) in people.data" :key="index">
            <router-link :to="{path: '/SingleUser/' + item.id}">
                <img :src="item.avatar" alt="">
            </router-link>
            <div class="details">
                <span>نام : {{item.first_name}}</span>
                <span>نام خانوادگی : {{item.last_name}}</span>
                <span>آدرس ایمیل : {{item.email}}</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    data() {
        return {
            isLoading: true,
            people: [],
        }
    },
    async created() {
        const response = await fetch("https://reqres.in/api/users?delay=10");
        this.people = await response.json();
        console.log(this.people.data);
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 10000);
    }
}
</script>

<style>

</style>