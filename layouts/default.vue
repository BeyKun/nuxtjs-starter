<template>
    <div>
        <div class="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" v-model="drawerOpen" />
            <div class="drawer-content">
                <!-- Page content here -->
                <div class="navbar bg-base-100">
                    <div class="flex w-full">
                        <button v-if="!drawerOpen" @click="toggleSidebar" class="ml-3 mr-4 text-xl">
                            <i class="ri-menu-line"></i>
                        </button>
                        <div class="grid w-full justify-items-center">
                            <div class="form-control ml-2">
                                <label class="input input-bordered flex items-center gap-2">
                                    <input type="text" class="grow" placeholder="Search" />
                                    <i class="ri-search-line"></i>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label class="swap swap-rotate">
                                <!-- this hidden checkbox controls the state -->
                                <input type="checkbox" class="theme-controller" value="light" />

                                <!-- sun icon -->
                                <i class="ri-sun-line swap-off h-10 w-10 fill-current text-xl"></i>

                                <!-- moon icon -->
                                <i class="ri-moon-line swap-on h-10 w-10 fill-current text-xl"></i>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <slot></slot>
                </div>
            </div>
            <div class="drawer-side" v-if="drawerOpen">
                <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                <div class="min-h-full bg-base-200">
                    <div class="flex">
                        <img src="@/assets/images/tailwind.png" alt="logo" class="w-10 my-4 ml-6 h-auto">
                        <h1 class="text-2xl font-bold ml-4 mt-3">Yourapp</h1>
                        <button @click="toggleSidebar" class="absolute right-6 text-xl mt-4">
                            <i class="ri-menu-line"></i>
                        </button>
                    </div>
                    <!-- <div class="divider py-0 my-0 mb-4"></div> -->

                    <ul class="menu text-base-content w-80 p-4">
                        <li v-for="menu in menus" :key="menu.name">
                            <a :href="menu.link" v-if="menu.child.length == 0"><i
                                    :class="menu.icon"></i>{{ menu.name }}</a>
                            <details v-else>
                                <summary><i :class="menu.icon"></i> {{ menu.name }}</summary>
                                <ul>
                                    <li v-for="child in menu.child" :key="child.name"><a :href="child.link"><i
                                                :class="child.icon"></i>{{ child.name }}</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>

                    <div class="bottom-0 w-full">
                        <div class="divider"></div>
                        <ul class="menu text-base-content w-80 p-4">
                            <li>
                                <a href="#"><i class="ri-feedback-line"></i> Feedback</a>
                            </li>
                            <li>
                                <a href="#"><i class="ri-questionnaire-line"></i> FaQ</a>
                            </li>
                        </ul>
                        <a href="#">
                            <div class="px-4 py-4 flex bg-base-100 mx-8 rounded-xl hover:bg-base-300">
                                <div class="avatar online">
                                    <div class="w-10 h-10 rounded-full">
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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
    import {
        ref
    } from 'vue';

    const drawerOpen = ref(true);

    const toggleSidebar = () => {
        drawerOpen.value = !drawerOpen.value;
    };
    const menus = [{
            name: 'Home',
            icon: 'ri-home-line',
            link: '/home',
            child: []
        },
        {
            name: 'Director Approval',
            icon: 'ri-shield-line',
            link: '/dashboard',
            child: []
        },
        {
            name: 'Doc Template Approval',
            icon: 'ri-file-add-line',
            link: '/dashboard',
            child: []
        },
        {
            name: 'Form Quotation',
            icon: 'ri-article-line',
            link: '/dashboard',
            child: []
        },
        {
            name: 'Batch Import',
            icon: 'ri-file-upload-line',
            link: '/dashboard',
            child: []
        },
        {
            name: 'List Transaction',
            icon: 'ri-list-check-2',
            link: '/dashboard',
            child: []
        },
        {
            name: 'List COI Bordereaux',
            icon: 'ri-list-check',
            link: '/dashboard',
            child: []
        },
        {
            name: 'Setup Product Scheme',
            icon: 'ri-file-settings-line',
            link: '/dashboard',
            child: []
        },
        {
            name: 'Setup Additional Fee',
            icon: 'ri-file-settings-line',
            link: '/dashboard',
            child: []
        },
        {
            name: 'Object Info Finder',
            icon: 'ri-find-replace-line',
            link: '/dashboard',
            child: []
        },
        {
            name: 'No Validation Approval',
            icon: 'ri-checkbox-circle-line',
            link: '/dashboard',
            child: []
        },
        {
            name: 'Settings',
            icon: 'ri-settings-2-line',
            link: null,
            child: [{
                    name: 'Clausul',
                    icon: 'ri-settings-line',
                    link: '/dashboard'
                },
                {
                    name: 'Wording',
                    icon: 'ri-settings-line',
                    link: '/dashboard'
                },
                {
                    name: 'Product',
                    icon: 'ri-settings-line',
                    link: '/dashboard'
                },
                {
                    name: 'Document Control',
                    icon: 'ri-settings-line',
                    link: '/dashboard'
                },
            ],
        },
        {
            name: 'Reporting',
            icon: 'ri-line-chart-line',
            link: '/dashboard',
            child: [{
                    name: 'Quotation',
                    icon: 'ri-bar-chart-line',
                    link: '/dashboard'
                },
                {
                    name: 'Transaction History',
                    icon: 'ri-bar-chart-line',
                    link: '/dashboard'
                },
            ]
        },
        {
            name: 'Enforce Policy',
            icon: 'ri-send-plane-2-line',
            link: '/dashboard',
            child: []
        },
    ]
</script>

<style scoped>
    /* Custom styles can go here */
</style>