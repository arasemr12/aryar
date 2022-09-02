<template>
    <nav>
        <div class="nav-logo">
            <h1>ARYAR</h1>
        </div>
        <div class="nav-content">
            <nuxt-link class="navlink" to="/">Home</nuxt-link>
            <nuxt-link class="navlink" to="/docs">Docs</nuxt-link>
        </div>
    </nav>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style>
    nav{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 20px;
        background: rgba(0,0,0,0.2);
        border-bottom: 2px solid rgb(31 41 55);
        /*rgb(31 41 55) */
        position: fixed;
        backdrop-filter: blur(5px);
        gap: 20px;
    }

    nav .nav-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
</style>