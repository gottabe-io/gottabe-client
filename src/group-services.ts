import {HttpClient} from 'igottp';
import {PackageGroupVO, PackageDataVO} from './types';

export class ApiGroupsService {
    client: HttpClient;
    constructor(client: HttpClient) {
        this.client = client;
    }
    
    async createGroup(body:PackageGroupVO): Promise<void> { 
        await this.client.postForEntity(`/api/groups`, body);
    }

    async groupInfo(groupName:string): Promise<PackageGroupVO> { 
        return await this.client.get(`/api/groups/${groupName}`);
    }

    async createPackage_1(groupName:string, body:PackageDataVO): Promise<void> { 
        await this.client.postForEntity(`/api/groups/${groupName}/packages`, body);
    }

    async groups(groupName:string, page?:number, size?:number): Promise<PackageGroupVO[]> { 
        let params: any = {'groupName': groupName, 'page': page, 'size': size};
        return await this.client.get(`/api/groups/all`, {params});
    }

}
