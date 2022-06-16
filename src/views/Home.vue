<template>
    <div>
        <h1>Home</h1>
        <p>{{ useStore.userData?.email }}</p>

    </div>
</template>

<script setup>
import {useUserStore} from '../stores/user'
const useStore = useUserStore()
</script>