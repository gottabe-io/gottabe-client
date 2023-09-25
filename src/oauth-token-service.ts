import {HttpClient} from 'igottp';
import {OAuth2Token} from './user-types';

export class OauthTokenService {
    client: HttpClient;

    constructor(client: HttpClient) {
        this.client = client;
    }

    async getAuthenticate(parameters:any, clientId: string, clientSecret: string): Promise<OAuth2Token> {
        return await this.client.get(`/oauth/token`, {params:parameters, credentials: "omit", headers:{'Authorization': 'Basic '+ btoa(clientId+':'+clientSecret)}});
    }

    async authenticate(parameters:any, clientId: string, clientSecret: string): Promise<OAuth2Token> {
        return await this.client.post(`/oauth/token`, {body: parameters, type: 'form', credentials: "omit", headers:{'Authorization': 'Basic ' + btoa(clientId+':'+clientSecret)}});
    }

    async revokeToken(tokenId:string, parameters:any): Promise<void> {
        await this.client.post(`/oauth/revoke/${tokenId}`, {params:parameters});
    }

}
