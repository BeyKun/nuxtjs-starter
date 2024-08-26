<template>
    <div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center p-10">
            <div v-for="mdl in modules.list" :key="mdl.name" class="card bg-base-100 w-auto border border-base-300">
                <div class="card-body">
                    <img class="mask mask-squircle w-14"
                        :src="mdl.icon" >
                    <h2 class="card-title">{{mdl.name}}</h2>
                    <p>{{mdl.description}}</p>
                    <div class="card-actions justify-end">
                        <NuxtLink class="w-full" :to="mdl.link">
                            <a class="btn btn-default w-full btn-sm">
                                Go
                            </a>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const modules = useModuleStore()
</script>

<style>

</style>