import {HttpClient} from 'igottp';
import {PublicKeyVO} from "./types";

export class ApiPublicKeyService {
    client: HttpClient;
    constructor(client: HttpClient) {
        this.client = client;
    }
    
    async findOwnerKeys(ownerId:number, page?:number, size?:number, options?: any): Promise<PublicKeyVO[]> { 
        let params: any = {'owner-id': ownerId, 'page': page, 'size': size};
        return await this.client.get(`/api/public-key`, Object.assign({params}, options || {}));
    }


    async uploadPublicKey(organizationId?:number, body?:PublicKeyVO, options?: any): Promise<void> { 
        let headers: any = {'organization-id': organizationId};
        await this.client.postForEntity(`/api/public-key`, body, Object.assign({headers}, options || {}));
    }

}

