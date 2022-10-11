<script lang="ts">
  // data is a object of objects
  export let data: any;

  const products: any = [];

  for (const key in data) {
    products.push(data[key]);
  }
  console.log(products);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<section>
  <h2>Productos</h2>
  <ul>
    {#each products as item}
      <li>{item.name}</li>
    {/each}
  </ul>
</section>
