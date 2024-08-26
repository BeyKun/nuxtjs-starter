<template>
  <div>
    <div class="breadcrumbs text-sm">
  <ul>
    <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb">
        <NuxtLink :to="breadcrumb.link">{{ breadcrumb.name }}</NuxtLink>
    </li>
  </ul>
</div>
  </div>
</template>

<script setup>
const route = useRoute();

const routeArray = route.fullPath.split('/');

const titleCase = (str) => {
   const splitStr = str.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}

const breadcrumbs = computed(() => {
  const result = [{ name: 'Home', link: '/' }];
  for (let i = 1; i < routeArray.length; i++) {
    if (routeArray[i] == '') continue;
    const humanize = titleCase(routeArray[i].replace(/-/g, ' '));
    result.push({
      name: humanize,
      link: '/' + routeArray.slice(1, i + 1).join('/'),
    });
  }
  return result;
});

console.log(breadcrumbs)
</script>

<style>

</style>