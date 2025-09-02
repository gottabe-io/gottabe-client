import {HttpClient} from 'igottp';
import { DeleteUserRequestVO, UserRequestVO, UserVO, CurrentUserVO, PasswordVO, UserPrivacyVO, ManagedTokenVO } from './types';

export class UserServices {
    client: HttpClient;

    constructor(client: HttpClient) {
        this.client = client;
    }

    async checkAvailability(email: string, nickname: string, options?: any): Promise<void> {
        let params: any = {'email': email, 'nickname': nickname};
        await this.client.get(`/api/user/check-availability`, Object.assign({params}, options || {}));
    }

    async createNew(body?:UserVO, options?: any): Promise<void> {
        await this.client.postForEntity(`/api/user`, body, options);
    }

    async avatar(id:string, options?: any): Promise<Blob> {
        return await this.client.get(`/api/user/${id}/avatar`, Object.assign({acceptType:'blob'}, options || {}));
    }

    async activate(activationCode:string, options?: any): Promise<void> {
        await this.client.post(`/api/user/activate/${activationCode}`, options);
    }

    async currentUser(options?: any): Promise<CurrentUserVO> {
        return await this.client.get(`/api/user/current`, options);
    }

    async getAvatar(options?: any): Promise<Blob> {
        return await this.client.get(`/api/user/current/avatar`, Object.assign({acceptType:'blob'}, options || {}));
    }

    async updatePhoto(body?:Blob, options?: any): Promise<void> {
        await this.client.postForEntity(`/api/user/current/avatar`, body, Object.assign({type:'blob'}, options || {}));
    }

    async currentUserProfile(options?: any): Promise<UserVO> {
        return await this.client.get(`/api/user/current/data`, options);
    }

    async updateCurrentUserProfile(body?:UserVO, options?: any): Promise<void> {
        await this.client.patchForEntity(`/api/user/current/data`, body, options);
    }

    async updatePassword(body?:PasswordVO, options?: any): Promise<void> {
        await this.client.patchForEntity(`/api/user/current/password`, body, options);
    }

    async currentUserPrivacy(options?: any): Promise<UserPrivacyVO> {
        return await this.client.get(`/api/user/current/privacy`, options);
    }

    async updateCurrentUserPrivacy(body?:UserPrivacyVO, options?: any): Promise<void> {
        await this.client.patchForEntity(`/api/user/current/privacy`, body, options);
    }

    async listTokens(options?: any): Promise<ManagedTokenVO[]> {
        return await this.client.get(`/api/user/current/tokens`, options);
    }

    async createToken(options?: any): Promise<string | null> {
        let response = <Response> await this.client.post(`/api/user/current/tokens`, options);
        return response.headers.get('token');
    }

    async removeToken(tokenId:string, options?: any): Promise<void> {
        let params: any = {'tokenId': tokenId};
        await this.client.delete(`/api/user/current/tokens`,  Object.assign({params, type:'json'}, options || {}));
    }

    async recover(recoverCode:string, email: string, password:string, passwordConfirmation:string, options?: any): Promise<void> {
        let params: any = {recoverCode, email, password, passwordConfirmation};
        await this.client.post(`/api/user/recover`, Object.assign({params, type:'json'}, options || {}));
    }

    async generateRecover(email:string, options?: any): Promise<void> {
        await this.client.post(`/api/user/recover/${email}`, options);
    }

    async resendActivationCode(email:string, options?: any): Promise<void> {
        let params: any = {'email': email};
        await this.client.post(`/api/user/resend-activation`, Object.assign({params, type:'json'}, options || {}));
    }

    async findAllUserRequests(page?:number, size?:number, options?: any): Promise<UserRequestVO[]> {
        let params: any = {'page': page, 'size': size};
        return await this.client.get(`/api/user-requests`, Object.assign({params, type:'json'}, options || {}));
    }

    async deleteUser(body:DeleteUserRequestVO, options?: any): Promise<void> {
        await this.client.postForEntity(`/api/user/request_deletion`, body, options);
    }

}
