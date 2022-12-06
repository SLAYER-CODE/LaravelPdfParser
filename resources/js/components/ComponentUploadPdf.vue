<template>
    <div>
        <h1>{{typeFile}}</h1>
        <v-row justify="center" align="baseline">
            <v-col cols="8">
                <v-file-input accept=".pdf" show-size label="Insert File" @change="selectFile"></v-file-input>
            </v-col>

            <v-col cols="4" class="pl-2">
                <v-btn variant="outlined" color="success" dark small @click="upload">
                    <strong> Upload</strong>
                    <v-icon class="mx-2" right dark>mdi-cloud-upload</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    propos: {
        typeFile:String,
            
    }
}

</script>