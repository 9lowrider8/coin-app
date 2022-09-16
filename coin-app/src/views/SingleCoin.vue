<template>
    <Chart 
    :options="{
      symbol: current,
    }"
    />
</template>

<script lang="ts">
import { Chart } from 'vue-tradingview-widgets';
export default ({
    data() {
        return {
         index: this.$route.params.index,   
         current: null,
        }
    },
    name: 'App',
    components: {
        Chart,
    },
    created() {
        if(this.index=="bitcoin"){this.current = 'BITSTAMP:BTCUSD'}
        else if(this.index=="ethereum"){this.current = 'ETH'}
        else if(this.index=="binancecoin"){this.current = 'BNBUSD'}
        else if(this.index=="bitcoin-cash"){this.current = 'CASH'}
        else if(this.index=="litecoin"){this.current = 'LTCUSDT'}
        else if(this.index=="ripple"){this.current = 'XRPUSD'}
        else{this.current = 'CASH'}
        
    },
});
</script>

<style>

</style>