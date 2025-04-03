import {HttpClient} from 'igottp';
import {BuildDescriptor, PackageDataVO, PackageGroupVO, PackageReleaseVO, PluginDescriptor} from "./types";

export class ApiPackagesService {
    client: HttpClient;
    constructor(httpClient: HttpClient) {
        this.client = httpClient;
    }

    async createGroup(body?:PackageGroupVO, options?:any): Promise<void> {
        await this.client.postForEntity(`/api/packages`, body, options);
    }

    async groupInfo(groupName:string, options?:any): Promise<PackageGroupVO> {
        return await this.client.get(`/api/packages/${groupName}`, options);
    }

    async createPackage(groupName:string, body?:PackageDataVO, options?:any): Promise<void> {
        await this.client.postForEntity(`/api/packages/${groupName}`, body, options);
    }

    async packageInfo(groupName:string, packageName:string, type?:string, fetch?:string, options?:any): Promise<PackageDataVO> {
        let params: any = {'type': type, 'fetch': fetch};
        return await this.client.get(`/api/packages/${groupName}/${packageName}`, Object.assign({params}, options || {}));
    }

    async packageReleases(groupName:string, packageName:string, version:string, type?:string, options?:any): Promise<PackageReleaseVO> {
        let params: any = {'type': type};
        return await this.client.get(`/api/packages/${groupName}/${packageName}/${version}`, Object.assign({params}, options || {}));
    }

    async postPackageFile(groupName:string, packageName:string, version:string, filename:string, body?:Blob, options?:any): Promise<void> {
        await this.client.postForEntity(`/api/packages/${groupName}/${packageName}/${version}/${filename}`, {file:body}, Object.assign({type: 'blob'}, options || {}));
    }

    async getPackageFile(groupName:string, packageName:string, version:string, filename:string, type?:string, options?:any): Promise<Blob> {
        let params: any = {'type': type};
        return await this.client.get(`/api/packages/${groupName}/${packageName}/${version}/${filename}`, Object.assign({params, acceptType: 'blob'}, options || {}));
    }

    async createPackage_1(groupName:string, packageName:string, version:string, body?:BuildDescriptor, options?:any): Promise<void> {
        await this.client.postForEntity(`/api/packages/${groupName}/${packageName}/${version}/build.json`, body, options);
    }

    async createPlugin(groupName:string, packageName:string, version:string, body?:PluginDescriptor, options?:any): Promise<void> {
        await this.client.postForEntity(`/api/packages/${groupName}/${packageName}/${version}/plugin.json`, body, options);
    }

    async groupPackages(groupName:string, type?:string, fetch?:string, page?:number, size?:number, options?:any): Promise<PackageDataVO[]> {
        let params: any = {'type': type, 'fetch': fetch, 'page': page, 'size': size};
        return await this.client.get(`/api/packages/${groupName}/all`, Object.assign({params}, options || {}));
    }

    async groups(groupName:string, page?:number, size?:number, options?:any): Promise<PackageGroupVO[]> {
        let params: any = {'groupName': groupName, 'page': page, 'size': size};
        return await this.client.get(`/api/packages/all`, Object.assign({params}, options || {}));
    }

    async myPackages(type?:string, page?:number, size?:number, options?:any): Promise<PackageDataVO[]> {
        let params: any = {'type': type, 'page': page, 'size': size};
        return await this.client.get(`/api/packages/mine`, Object.assign({params}, options || {}));
    }

    async packagesFrom(owner: string, type?:string, page?:number, size?:number, options?:any): Promise<PackageDataVO[]> {
        let params: any = { 'owner': owner, 'type': type, 'page': page, 'size': size};
        return await this.client.get(`/api/packages/from`, Object.assign({params}, options || {}));
    }

}
