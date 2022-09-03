<template>
  <div class="flex flex-col items-center w-full lg:w-2/3">
    <h2 class="text-xl">Aryar example.</h2>
    <pre class="w-full bg-gray-900">
      <code class="language-javascript w-full bg-gray-900">(async() => {
  let res = await fetch("https://aryar.tk/api/users/:userid");
  let json = await res.json();
  console.log(json)
})()</code></pre>
    <script>hljs.highlightAll();</script>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>
