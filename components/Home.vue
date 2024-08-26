<template>
    <div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center p-10">
            <div class="card bg-base-100 w-auto border border-base-300" v-for="module in modules.list" :key="module.name">
                <div class="card-body">
                    <img class="mask mask-squircle w-14"
                        :src="module.icon" />
                    <h2 class="card-title">{{module.name}}</h2>
                    <p>{{module.description}}</p>
                    <div class="card-actions justify-end">
                        <NuxtLink class="w-full" :to="module.link">
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