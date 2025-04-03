import {HttpClient} from 'igottp';
import {PackageDataVO} from "./types";

export class ApiSearchService {
    client: HttpClient;

    constructor(client: HttpClient) {
        this.client = client;
    }

    async search(query: string, page?: number, size?: number, options?: any): Promise<PackageDataVO[]> {
        let params: any = {query: query, page: page, size: size};
        return await this.client.get(`/api/search`, Object.assign({params}, options || {}));
    }

}
