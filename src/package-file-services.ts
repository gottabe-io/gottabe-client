import {HttpClient} from 'igottp';

export class ApiPackageFilesService {
    client: HttpClient;
    constructor(client: HttpClient) {
        this.client = client;
    }
    
    async getPackageFile(groupName:string, packageName:string, version:string, filename:string, type?:string, options?: any): Promise<Blob> { 
        let params: any = {'type': type};
        return await this.client.get(`/api/files/${groupName}/${packageName}/${version}/${filename}`, Object.assign({params, type: 'blob'}, options || {}));
    }

    async postPackageFile(groupName:string, packageName:string, version:string, filename:string, body?:Blob, options?: any): Promise<void> { 
        await this.client.postForEntity(`/api/files/${groupName}/${packageName}/${version}/${filename}`, body, Object.assign({acceptType: 'blob'}, options || {}));
    }

}
