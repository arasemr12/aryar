<template>
  <div class="main">
    <h2>Aryar example.</h2>
    <pre>
      <code class="language-javascript">(async() => {
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

<style>
  .main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 40px;
  }

  pre{
    width: 100%;
    border-radius: 5px;
    font-family: sans-serif;
    background: rgb(17 24 39) !important;
  }

  pre code{
    width: 100%;
    border-radius: 5px;
    font-family: sans-serif;
    font-size: 20px;
    background: rgb(17 24 39) !important;
  }
</style>