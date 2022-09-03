<template>
    <nav class="py-6 px-6 flex flex-row items-center gap-10 bg-black/30 fixed w-full backdrop:blur-sm border-b-2 border-gray-800">
        <div>
            <nuxt-link to="/" class="text-2xl font-bold">ARYAR</nuxt-link>
        </div>
        <div class="flex flex-row items-center gap-5">
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
