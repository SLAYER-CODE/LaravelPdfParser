<template>
    <div>
        <p> {{ typeLoad.type.name }}</p>
        
        <v-row justify="center" align="baseline">

            <v-col cols="8">
                <v-file-input  :chips='typeLoad.type.multipleFile' :multiple=true :prepend-icon="typeLoad.type.prepend" :accept="typeLoad.type.ext" show-size label="Insert File" @change="selectFile"></v-file-input>
            </v-col>

            <v-col cols="4" class="pl-2">
                <v-btn variant="outlined" color="success" dark small @click="upload">
                    <strong> Upload</strong>
                    <v-icon v-if="icons" class="mx-2" right dark>mdi-cloud-upload</v-icon>
                </v-btn>
            </v-col>

        </v-row>
    </div>
</template>

<script>
import TypeUpload,{FolderUploadTypeComponent} from '../../../Utils/TypeUpload.js';

    export default {
        props: {
            c:Boolean,
            icons:Boolean,
            showList:Boolean,
            typeLoad:{
                type : TypeUpload,
                required :true,
                default(){
                    return new TypeUpload(new FolderUploadTypeComponent())
                }
            }
        }
    }
    
    
</script>