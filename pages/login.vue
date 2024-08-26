<template>
    <div class="min-h-screen flex items-center justify-center bg-base-100">
      <div class="card w-full max-w-sm shadow-xl bg-base-200">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold mb-4">Login</h2>
          <form @submit.prevent="login">
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="email" v-model="email" placeholder="email@example.com" class="input input-bordered" required />
            </div>
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" v-model="password" placeholder="********" class="input input-bordered" required />
            </div>
            <div class="form-control">
              <button type="submit" class="btn btn-primary w-full">Login</button>
            </div>
          </form>
          <p class="text-center mt-4">
            Don't have an account?
            <a href="/register" class="text-primary">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </template>

<script setup>
definePageMeta({
  layout: 'blank'
});

const auth = useAuthStore();
const router = useRouter();
const email = ref('');
const password = ref('');

onBeforeMount(() => {
    
  if (auth.user) {
    router.push({ path: '/' });
  }
})

const login = () => {
  // Implement login functionality here
  console.log('Email:', email.value);
  console.log('Password:', password.value);
  auth.login({
    email: email.value,
    password: password.value
  });
  router.push({ path: '/' });
};
</script>

<style>

</style>