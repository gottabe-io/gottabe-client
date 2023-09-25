import {HttpClient} from 'igottp';
import {UserVO, CurrentUserVO, PasswordVO, UserPrivacyVO, ManagedTokenVO} from './user-types';

export class UserServices {
    client: HttpClient;

    constructor(client: HttpClient) {
        this.client = client;
    }

    async createNew(body?:UserVO): Promise<void> {
        await this.client.postForEntity(`/api/user`, body);
    }

    async avatar(id:string): Promise<Blob> {
        return await this.client.get(`/api/user/${id}/avatar`, {acceptType:'blob'});
    }

    async activate(activationCode:string): Promise<void> {
        await this.client.post(`/api/user/activate/${activationCode}`);
    }

    async currentUser(): Promise<CurrentUserVO> {
        return await this.client.get(`/api/user/current`);
    }

    async getAvatar(): Promise<Blob> {
        return await this.client.get(`/api/user/current/avatar`, {acceptType:'blob'});
    }

    async updatePhoto(body?:Blob): Promise<void> {
        await this.client.postForEntity(`/api/user/current/avatar`, body, {type:'blob'});
    }

    async currentUserProfile(): Promise<UserVO> {
        return await this.client.get(`/api/user/current/data`);
    }

    async updateCurrentUserProfile(body?:UserVO): Promise<void> {
        await this.client.patchForEntity(`/api/user/current/data`, body);
    }

    async updatePassword(body?:PasswordVO): Promise<void> {
        await this.client.patchForEntity(`/api/user/current/password`, body);
    }

    async currentUserPrivacy(): Promise<UserPrivacyVO> {
        return await this.client.get(`/api/user/current/privacy`);
    }

    async updateCurrentUserPrivacy(body?:UserPrivacyVO): Promise<void> {
        await this.client.patchForEntity(`/api/user/current/privacy`, body);
    }

    async listTokens(): Promise<ManagedTokenVO[]> {
        return await this.client.get(`/api/user/current/tokens`);
    }

    async createToken(): Promise<void> {
        await this.client.post(`/api/user/current/tokens`);
    }

    async removeToken(tokenId:string): Promise<void> {
        let params: any = {'tokenId': tokenId};
        await this.client.delete(`/api/user/current/tokens`, {params, type:'json'});
    }

    async recover(recoverCode:string, password:string, passwordConfirmation:string): Promise<void> {
        let params: any = {'recoverCode': recoverCode, 'password': password, 'passwordConfirmation': passwordConfirmation};
        await this.client.post(`/api/user/recover`, {params, type:'json'});
    }

    async generateRecover(email:string): Promise<void> {
        await this.client.post(`/api/user/recover/${email}`);
    }

    async resendActivationCode(email:string): Promise<void> {
        let params: any = {'email': email};
        await this.client.post(`/api/user/resend-activation`, {params, type:'json'});
    }

}
