<script lang="ts">
  import type { Product } from '@prisma/client';
  type Data = {
    products: Product[];
  };

  // data will a always a object
  export let data: Data;

  const { products } = data;

  console.log(products);
</script>

<main class="container mx-auto">
  <h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
  <section>
    <h2 class="text-xl font-semibold">Productos</h2>
    <ol class="list-decimal">
      {#each products as item}
        <li>{item.name}</li>
      {/each}
    </ol>
  </section>
</main>
