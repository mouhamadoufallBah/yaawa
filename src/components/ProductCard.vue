<script setup>
defineProps({
  product: Object,
  currency: String
});
</script>

<template>
  <article
    class="product-card"
    data-component="ProductCard"
    :data-product-id="product.id"
  >
    <div class="product-media">
      <a aria-label="Voir Riz brisé parfumé" href="produits/01-riz.html">
        <img
          :alt="product.name"
          height="240"
          loading="lazy"
          :src="product.image"
          width="360"
        />
      </a>
      <span class="promo-tag" v-if="product.salePrice">
        Promo −{{
          (((product.price - product.salePrice) / product.price) * 100).toFixed(
            0
          )
        }}
        %
      </span>
    </div>
    <div class="product-body">
      <p class="overline">{{ product.origin }}</p>
      <h3>
        <a href="produits/01-riz.html"> {{ product.name }} </a>
      </h3>
      <p class="muted small">
        {{ product.unit }} · {{ product.stock }} disponible(s)
      </p>
      <span
        :class="
          product.stock < 1
            ? 'stock empty'
            : product.stock <= 5
            ? 'stock low'
            : 'stock'
        "
      >
        <span aria-hidden="true"> </span>
        Disponible
      </span>
      <div class="product-bottom">
        <div>
          <del v-if="product.salePrice">{{ product.price }} {{ currency }}</del>
          <de>
            {{ product.salePrice ? product.salePrice : product.price }} {{ currency }}
          </de>
        </div>
        <button
          aria-label="Ajouter Riz brisé parfumé au panier"
          class="add-button"
          data-action="ajouter-panier"
          type="button"
          :disabled="product.stock < 1"
        >
          <svg
            aria-hidden="true"
            class="icon"
            fill="none"
            height="20"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.7"
            viewbox="0 0 24 24"
            width="20"
          >
            <path d="M12 5v14M5 12h14"></path>
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<style>
</style>