<template>
    <div>
        <div class="drawer lg:drawer-open">
            <input id="my-drawer-2" v-model="drawerOpen" type="checkbox" class="drawer-toggle">
            <div class="drawer-content">
                <!-- Page content here -->
                <div class="navbar bg-base-100">
                    <div class="flex w-full">
                        <button v-if="!drawerOpen" class="ml-3 mr-4 text-xl" @click="toggleSidebar">
                            <i class="ri-menu-line" />
                        </button>
                        <div class="grid w-full justify-items-center">
                            <div class="form-control ml-2">
                                <label class="input input-bordered flex items-center gap-2">
                                    <input type="text" class="grow" placeholder="Search">
                                    <i class="ri-search-line" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <label class="swap swap-rotate">
                                <!-- this hidden checkbox controls the state -->
                                <input type="checkbox" class="theme-controller" value="light">

                                <!-- sun icon -->
                                <i class="ri-sun-line swap-on h-10 w-10 fill-current text-xl" />

                                <!-- moon icon -->
                                <i class="ri-moon-line swap-off h-10 w-10 fill-current text-xl" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <slot />
                </div>
            </div>
            <div v-if="drawerOpen" class="drawer-side ">
                <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay" />
                <div class="min-h-full bg-base-200 flex flex-col">
                    <div class="flex">
                        <img src="@/assets/images/tailwind.png" alt="logo" class="w-10 my-4 ml-6 h-auto">
                        <NuxtLink to="/">
                            <h1 class="text-2xl font-bold ml-4 mt-3">Yourapp</h1>
                        </NuxtLink>
                        <button class="absolute right-6 text-xl mt-4" @click="toggleSidebar">
                            <i class="ri-menu-line" />
                        </button>
                    </div>
                    <!-- <div class="divider py-0 my-0 mb-4"></div> -->

                    <ul class="menu text-base-content w-80 p-4">
                        <li v-for="menu in state.menus" :key="menu.name">
                            <NuxtLink v-if="menu.child.length == 0" :to="menu.link"><i
                                    :class="menu.icon" />{{ menu.name }}</NuxtLink>
                            <details v-else>
                                <summary><i :class="menu.icon" /> {{ menu.name }}</summary>
                                <ul>
                                    <li v-for="child in menu.child" :key="child.name"><NuxtLink :to="child.link"><i
                                                :class="child.icon" />{{ child.name }}</NuxtLink></li>
                                </ul>
                            </details>
                        </li>
                    </ul>

                    <div class="w-full mt-auto">
                        <ul class="menu text-base-content w-80 p-4">
                            <li>
                                <a href="#"><i class="ri-feedback-line" /> Feedback</a>
                            </li>
                            <li>
                                <a href="#"><i class="ri-questionnaire-line" /> FaQ</a>
                            </li>
                            <li class="text-red-500">
                                <a @click="logout"><i class="ri-logout-circle-line" /> Logout</a>
                            </li>
                        </ul>

                        <a href="#">
                            <div class="px-2 py-2 flex mx-6 mb-4 rounded-xl hover:bg-base-300">
                                <div class="avatar online">
                                    <div class="w-10 h-10 rounded-full">
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp">
                                    </div>
                                </div>
                                <div class="ml-4">

                                    <h1 class="text-sm font-bold">John Doe</h1>
                                    <p class="text-sm">Administrator</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const auth = useAuthStore();
    const route = useRoute();
    const router = useRouter();
    const modules = useModuleStore()
    const defaultRoute = route.path;
    const defaultMenus = [{
        name: 'Home',
        icon: 'ri-home-4-line',
        link: '/',
        child: []
    }];

    // onBeforeMount(() => {
    //     if (!auth.user) {
    //         router.push({
    //             path: '/login'
    //         });
    //     }
    // })

    const drawerOpen = ref(true);

    const toggleSidebar = () => {
        drawerOpen.value = !drawerOpen.value;
    };

    const generateMenus = (path) => {
        const findModule = modules.list.find((module) => module.link == path);
        if (findModule && findModule.menus.length > 0) {
            return findModule.menus;
        }

        return defaultMenus;
    }

    const logout = () => {
        auth.logout();
        router.push({
            path: '/login'
        });
    }

    const state = reactive({
        menus: defaultRoute == '/' ? defaultMenus : generateMenus(defaultRoute)
    });
    watch(
        () => route.path,
        (newPath, oldPath) => {
            console.log('Route changed from', oldPath, 'to', newPath);
            const basePath = newPath.split('/');
            state.menus = generateMenus(basePath.length > 1 ? ('/' + basePath[1]) : '/');
        }, {
            deep: true
        }
    );
</script>

<style scoped>
    /* Custom styles can go here */
</style>