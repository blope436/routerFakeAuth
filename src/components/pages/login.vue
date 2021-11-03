<script setup>

</script>
<template>
<div class="flex items-center text-yellow-800 text-5xl text-center bg-purple-200">
<img class="w-40" src="src/Assets/login.png" alt="Login Image"/>
<h1>Login Form</h1>
</div>
<div class="flex felx-col justify-center text-center py-20 min-h-screen-nonav">
    <img class="h-40 shadow-lg" src="src/Assets/password.png" alt="Login Image"/>
    <form class=" bg-indigo-300 flex flex-col space-y-10">
        <input type="text" class="rounded-lg border-2" placeholder="Username"/>
        <input type="password" class="rounded-lg border-2 " placeholder="Password"/>
        <button type="submit" class="rounded-lg bg-blue-600 text-blue-200">Login</button>
    </form>
</div>
</template>