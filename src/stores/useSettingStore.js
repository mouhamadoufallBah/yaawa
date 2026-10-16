import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "../services/Api";

export const useSettingStore = defineStore("setting", () => {
    const settings = ref({}),
        loading = ref(false),
        error = ref("");
    async function loadSettings() {
        loading.value = true;
        try {
            const setting = await api.get('/settings');
            settings.value = setting;

        } catch (e) {
            error.value = e.message;
        } finally {
            loading.value = false;
        }

    }

    return {
        settings,
        loading,
        error,
        loadSettings
    }

})