<template>
    <div>
        <h1>App</h1>
        <nav v-if="!userStore.loadingSesion">
            <router-link to="/" v-if="userStore.userData">Inicio</router-link> |
            <router-link to="/login" v-if="!userStore.userData">Login</router-link> |
            <router-link to="/registro" v-if="!userStore.userData">Registro</router-link> |
            <button @click="userStore.logout" v-if="userStore.userData">Logout</button>
        </nav>
        <div v-else>Loading User...</div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useUserStore } from './stores/user';
const userStore = useUserStore()
</script>
