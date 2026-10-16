<script setup>
import { computed, onMounted, ref } from "vue";
import HeroSection from "../components/HeroSection.vue";
import { useProductsStore } from "../stores/useProduct.js";
import ProductCard from "../components/ProductCard.vue";
import { useSettingStore } from "../stores/useSettingStore.js";

const ProductSore = useProductsStore();
const SettingStore = useSettingStore();

onMounted(() => {
  ProductSore.init();
  SettingStore.loadSettings();
  console.log(ProductSore.active, "mounted");
});



const categoryId = ref(null);

const dataFiltered = computed(() => {
  if (categoryId.value) {
    return ProductSore.active.filter(
      (one) => one.categoryId == categoryId.value
    );
  }
  return ProductSore.active;
});

function getProductByIdc(id) {
  if (categoryId.value === id) {
    categoryId.value = null;
    return;
  }
  categoryId.value = id;
}
</script>


<template>
  <main id="main-content" tabindex="-1">
    <div class="container page-space">
      <!-- DEMANDE 01 — À PROGRAMMER : Lier le nom, le slogan, le logo et les images avec les données de la boutique. -->
      <HeroSection />
      <section class="categories-section">
        <div class="section-heading">
          <div>
            <p class="overline">À CHAQUE ENVIE, SON RAYON</p>
            <h2>De quoi se régaler</h2>
          </div>
        </div>
        <!-- DEMANDE 01 / 03 — À PROGRAMMER : Utiliser les catégories de l’API pour les images, la couleur CSS et le filtre. -->
        <div class="categories">
          <button
            class="category"
            href="categories/cereales.html"
            style="--category-color: #b98a38"
            v-for="categorie in ProductSore.categories"
            :key="categorie.id"
            @click="getProductByIdc(categorie.id)"
          >
            <img alt="" height="48" :src="categorie.image" width="56" />
            <span> {{ categorie.name }} </span>
          </button>
        </div>
      </section>
      <section id="catalogue">
        <div class="section-heading">
          <div>
            <p class="overline">LA SÉLECTION D’AWA</p>
            <h2>Nos produits du moment</h2>
          </div>
          <a class="text-button" href="boutique.html">
            Tout le marché
            <svg
              aria-hidden="true"
              class="icon"
              fill="none"
              height="16"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.7"
              viewbox="0 0 24 24"
              width="16"
            >
              <path d="M5 12h14m-5-5 5 5-5 5"></path>
            </svg>
          </a>
        </div>
        <div class="product-grid">
          <ProductCard
            v-for="product in dataFiltered"
            :key="product.id"
            :product="product"
            :currency="SettingStore.settings.currency"
          />
        </div>
      </section>
      <section class="loyalty-banner mt">
        <div>
          <p class="overline">LES PETITS GESTES QUI COMPTENT</p>
          <h2>Un panier généreux, une attention en plus.</h2>
          <p>
            5 % de réduction dès 25 000 FCFA. Avec TERANGA10, profitez de 10 % :
            seule la meilleure remise est retenue.
          </p>
        </div>
        <span class="coupon">
          TERANGA10
          <small> Votre code de démonstration </small>
        </span>
      </section>
      <section class="promise-strip">
        <div>
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
            <path d="M6 7h12l2 14H4L6 7Zm3 0V5a3 3 0 0 1 6 0v2"></path>
          </svg>
          <strong> Votre marché, à votre rythme </strong>
          <span> Préparez votre panier depuis chez vous. </span>
        </div>
        <div>
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
            <path
              d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            ></path>
          </svg>
          <strong> Au cœur du quartier </strong>
          <span> Retrait à Castors ou livraison à domicile. </span>
        </div>
        <div>
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
            <path d="M20 3C8 2 2 8 5 15s17 4 15-12ZM5 20l10-10"></path>
          </svg>
          <strong> Le plaisir de partager </strong>
          <span> Des essentiels et des saveurs bien de chez nous. </span>
        </div>
      </section>
      <p class="template-note">
        <svg
          aria-hidden="true"
          class="icon"
          fill="none"
          height="32"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.7"
          viewbox="0 0 24 24"
          width="32"
        >
          <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"></path>
        </svg>
        <span>
          Les données sont des exemples fixes. Les actions métier seront
          programmées par les étudiants.
        </span>
      </p>
    </div>
  </main>
</template>

<style>
</style>