<template>
  <div class="single-user-style bg-orange-200">
    <div class="single-user-card bg-orange-300">
            <img :src="person.data.avatar" alt="" class="rounded-full scale-110">
                <span>First Name : {{person.data.first_name}}</span>
                <span>Last Name : {{person.data.last_name}}</span>
                <span>Email Address : {{person.data.email}}</span>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            person: null,
            id: this.$route.params.id,
        }
    },
    async created() {
        const response = await fetch("https://reqres.in/api/users/" + this.id);
        this.person = await response.json();
        console.log(this.person);
    }
}
</script>

<style>

</style>