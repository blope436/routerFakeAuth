<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router"
import useAuth from "/src/composable/useAuth";
import useError from "/src/composable/useError";

const {isAuthenticated,login} = useAuth();

const username = ref("");
const password = ref("");

const router = useRouter();

const loggingIn = () => {
    login(username.value, password.value);
    if (isAuthenticated.value)
    {
        router.push("/");


    }
    else{
        setError("Invalid username or password");
        start();
    }

};

const {error, setError} = useError();
import { useTimeout, promiseTimeout } from '@vueuse/core'

const { ready, start } = useTimeout(3000, { controls: true })

</script>
<template>
<div class="flex items-center text-yellow-800 text-5xl text-center bg-purple-200">
<img class="w-40" src="/src/Assets/login.png" alt="Login Image"/>
<h1>Login Form</h1>
</div>
<div class="flex felx-col justify-center text-center py-20 min-h-screen-nonav">
    <img class="h-40 shadow-lg" src="/src/Assets/password.png" alt="Login Image"/>
    <form @submit.prevent="loggingIn" class=" bg-indigo-300 flex flex-col space-y-10">
        <input type="text" class="rounded-lg border-2" placeholder="Username" v-model="username"/>
        <input type="password" class="rounded-lg border-2 " placeholder="Password" v-model="password"/>
        <button type="submit" @submit.prevent="loggingIn" class="rounded-lg bg-blue-600 text-blue-200">Login</button>
    </form>
</div>
<div v-if="!ready && error" class="absolute w-1/3 bg-red-500 text-xl bottom-2 right-2 rounded-lg p-4 text-center text-pink-400">
    {{error}}
</div>
</template>