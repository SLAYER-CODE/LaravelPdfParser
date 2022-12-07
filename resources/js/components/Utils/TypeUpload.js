/* 
*@class
*/
class TypeUpload{   
   constructor(type=FolderUploadTypeComponent|FileUploadTypeComponent){
    this.type = p.type;
   }
}

class FolderUploadTypeComponent{
    constructor(ext = 'pdf',recurisve = false,limit=null,order=0,crypt=false,fingerprint=false ){
        this.ext=ext;
        this.recurisve=recurisve
        this.limit=limit,
        this.order=order
        this.crypt=crypt
        this.fingerprint=fingerprint
        this.name="Folder Upload"
    }
}

class FileUploadTypeComponent{
    constructor(ext= 'pdf',crypt=false,fingerprint=false){
        this.ext=ext
        this.crypt=crypt
        this.fingerprint=fingerprint        
        this.name="File Upload"
    }
}


