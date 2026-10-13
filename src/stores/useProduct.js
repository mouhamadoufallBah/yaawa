import { defineStore } from 'pinia';
import { products } from '../services/Api';
import { computed, ref } from 'vue';


export const useProductSore = defineStore('products', () => {
    const data = ref([]);
    const loading = ref(false);
    const error = ref('');

    function loadProduct() {
        loading.value = true
        // setTimeout(() => {
        data.value = products;
        loading.value = false
        // }, 1000);

    }

    const categories = ref([]);
    const loadingCategory = ref(false);
    const errorCategory = ref('');

    function loadCategory() {
        loadingCategory.value = true;
        // setTimeout(() => {
        categories.value = [];
        loadingCategory.value = false;
        // }, 1000)
    }

    const loadingAddProduct = ref(false);
    const errorAddProduct = ref('');

    function upsertProduct(payload) {
        loadingAddProduct.value = true;

        setTimeout(() => {
            if (payload.id) {
                index = data.value.findIndex((one) => one.id == payload.id)
                if (index < 0) {
                    data.value.push(payload);
                } else {
                    data.value[index] = payload;
                }
            }
            loadingAddProduct.value = false;
        }, 1000);
    }

    const active = computed(() => data.value.filter((one) => one.active))

    function init() {
        loadCategory();
        loadProduct();
    }

    return {
        init,
        upsertProduct,
        loadCategory,
        loadProduct,
        data,
        active,
        categories,
        loading,
        loadingAddProduct,
        loadingCategory,
        error,
        errorAddProduct,
        errorAddProduct
    }
});
