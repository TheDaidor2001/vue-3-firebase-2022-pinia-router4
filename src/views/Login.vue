<template>
    <div>
        <h1>Login</h1>
         <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese su email" v-model.trim="email">
            <input type="password" placeholder="Ingrese su contraseña" v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser">Iniciar Sesión</button>
         </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/user'
import {useRouter} from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const email = ref('danielcastillo@gmail.com');
const password = ref('122122');


const handleSubmit = async () => {
    if(!email.value || password.value.length < 6){
        return alert('Rellena los campos');
    }

    await userStore.singUser(email.value, password.value);
    router.push('/');
}



</script>
