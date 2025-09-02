import {HttpClient} from 'igottp';
import {OwnerVO, AnyUserVO, OrgUserVO} from './types';

export class ApiOrganizationService {
    client: HttpClient;
    constructor(client: HttpClient) {
        this.client = client;
    }
    
    async createNew_1(body:OwnerVO): Promise<void> { 
        await this.client.postForEntity(`/api/organization`, body);
    }

    async retrieve(nickname:string): Promise<OwnerVO> { 
        return await this.client.get(`/api/organization/${nickname}`);
    }

    async retrieveUsers(nickname:string): Promise<AnyUserVO[]> { 
        return await this.client.get(`/api/organization/${nickname}/users`);
    }

    async addUser(nickname:string, body:AnyUserVO): Promise<void> { 
        await this.client.putForEntity(`/api/organization/${nickname}/users`, body);
    }

    async getMyOrganizations(): Promise<OrgUserVO[]> { 
        return await this.client.get(`/api/organization/mine`);
    }

}
