<template>
    <LoadingScreen v-if="isLoading">
        <div id="loading">
            <img class="img" src="/src/assets/images/loading.gif" alt="loading..." width="200" />
        </div>
    </LoadingScreen>
    <div class="dashboard">
        <table id="style-table">
            <thead>
                <th class="name-style">نام</th>
                <th>آخرین تغییرات</th>
                <th>ارزش بازار</th>
                <th>تغییرات 24 ساعت اخیر</th>
                <th>حجم 24 ساعت اخیر</th>
            </thead>
            <tr class="show-current" v-for="(item,index) in currents" :key="index">
                <router-link :to="{path: '/SingleCoin/' + index}">
                    <td class="name-style">{{index}} <img :src="generateImageUrl(index)" alt=""> </td>
                </router-link>
                <td>{{item.usd}} </td>
                <td>{{item.usd_market_cap}}</td>
                <td>{{item.usd_24h_change}}</td>
                <td>{{item.usd_24h_vol}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
            currents: [],
            source: "",
        }
    },
    async created() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Clitecoin%2Cripple%2Cbitcoin-cash%2Ctornado-cash&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=tru");
        this.currents = await response.json();
        console.log(this.currents);
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    },
    methods: {
        generateImageUrl(name) {
            return `/src/assets/images/${name}.png`
        }
    },
}
</script>

<style>

</style>