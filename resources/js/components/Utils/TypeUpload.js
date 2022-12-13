/* 
*@class
*/
export default class TypeUpload{   
   constructor(type){
    this.type = type;
   }
}
/* Clases de intineracion de Subida de componentes */

export class FolderUploadTypeComponent{
    constructor(ext = 'pdf',recurisve = false,limit=null,order=0,crypt=false,fingerprint=false ){
        this.ext=ext;
        this.recurisve=recurisve
        this.limit=limit,
        this.order=order
        this.crypt=crypt
        this.fingerprint=fingerprint
        this.name="Folder Upload"
        this.prepend="mdi-folder"
    }
}

/* Clases de Type componente */

export class FileUploadTypeComponent{
    constructor(ext= 'pdf',crypt=false,fingerprint=false){
        this.ext=ext
        this.crypt=crypt
        this.fingerprint=fingerprint        
        this.name="File Upload"
        this.prepend="mdi-file"
    }
}


