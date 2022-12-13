<template>
    <div>
        <div v-if="currentFile">
            <div>
                <v-progress-linear v-model="progress" color="light-red" height="25" reactive>
                    <strong>{{ progress }} % </strong>
                </v-progress-linear>
            </div>
        </div>

        <ComponentUploadPdf :typeLoad="typeUpload" icons multipleFile> 
        
        </ComponentUploadPdf>

        <v-alert variant="outlined" type="warning" v-if="message" :dismisible="true" >
            {{ message }}
        </v-alert>
        
        <v-card v-if="fileInfos.length > 0" class="mx-auto">
            <v-list>
                <v-subheader>List of Files</v-subheader>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(file, index) in fileInfos" :key="index">
                        <a :href="file.url">{{ file.name }}</a>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>

import ComponentUploadPdf from './ComponentUploadPdf.vue';
import TypeUpload,{FileUploadTypeComponent} from '../../../Utils/TypeUpload.js';

var FileUpload=new FileUploadTypeComponent();
var TypeDefinend = new TypeUpload(FileUpload);

export default {

    
    name: "upload-files",
    data() {
        return {
            currentFile: undefined,
            progress: 0,
            message: "",
            fileInfos: [],
            typeUpload:TypeDefinend
        }
    },
    methods: {
        selectFile(file) {
            this.progress = 0,
                this.currentFile = file
        },
        upload() {
            if (!this.currentFile) {
                this.message = "Please select file"
                return;
            }
            this.message = "";
            //Aca dentro va el codigo que ejecuta el contralador para enviar el texto y convertirlo
        }
    },components:{
        ComponentUploadPdf
    }
}
</script>