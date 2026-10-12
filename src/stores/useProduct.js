import { defineStore } from 'pinia';
import { products } from '../services/Api';
import { computed, ref } from 'vue';


export const useProductSore = defineStore('products', () => {
    const data = ref([]);
    const loading = ref(false);
    const error = ref('');

    function loadProduct() {
        loading.value = true
        setTimeout(() => {
            data.value = products;
            loading.value = false
        }, 2000);

    }

    const categories = ref([]);
    const loadingCategory = ref(false);
    const errorCategory = ref('');

    function loadCategory() {
        loadingCategory.value = true;
        setTimeout(() => {
            categories.value = [];
            loadingCategory.value = false;
        }, 1000)
    }


    const active = computed(()=>{
        data.value.filter((one) => one.active)
    })

    return { loadProduct, data, loadCategory, categories }
});
