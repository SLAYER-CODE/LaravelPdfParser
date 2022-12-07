<template>
    <v-app>
        <v-container fluid style="width: 600px;">
            <h1>"Reading  <strong class="text-red-lighten-1">PDF</strong> for <strong class="text-blue-lighten-1">extraction</strong>"</h1>
            <div class="mb-5">
                <ButtonComponenetVue></ButtonComponenetVue>
            </div>
            <UploadFileVue></UploadFileVue>
        </v-container>
    </v-app>
</template>

<script>

import ButtonComponenetVue from './components/Dashboard/Views/Components/ButtonComponenet.vue';
import UploadFileVue from './components/Dashboard/Views/Components/UploadFile.vue';
export default {
    name: "App",
    components: {
        UploadFileVue, ButtonComponenetVue
    }
}

</script>