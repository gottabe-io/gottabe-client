import {HttpClient} from 'igottp';
import {AnyUserVO, OrgUserVO, OwnerVO} from "./types";

export class ApiOrganizationService {
    httpClient: HttpClient;
    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }
    async createNew(body?:OwnerVO): Promise<void> {
        await this.httpClient.postForEntity(`/api/organization`, body);
    }

    async retrieve(nickname:string): Promise<OwnerVO> {
        return await this.httpClient.get(`/api/organization/${nickname}`);
    }

    async retrieveUsers(nickname:string): Promise<AnyUserVO[]> {
        return await this.httpClient.get(`/api/organization/${nickname}/users`);
    }

    async addUser(nickname:string, body?:AnyUserVO): Promise<void> {
        await this.httpClient.putForEntity(`/api/organization/${nickname}/users`, body);
    }

    async getMyOrganizations(): Promise<OrgUserVO[]> {
        return await this.httpClient.get(`/api/organization/mine`);
    }

}
