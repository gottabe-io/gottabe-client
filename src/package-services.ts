import {HttpClient} from 'igottp';
import {PackageDataVO, PackageReleaseVO, ReleaseUpdateVO, BuildDescriptor, PluginDescriptor} from './types';

export class ApiPackageService {
    client: HttpClient;
    constructor(client: HttpClient) {
        this.client = client;
    }
    
    async packageInfo(groupName:string, packageName:string, type?:string[], fetch?:string, options?: any): Promise<PackageDataVO> { 
        let params: any = {'type': type, 'fetch': fetch};
        return await this.client.get(`/api/packages/${groupName}/${packageName}`, Object.assign({params}, options || {}));
    }

    async packageReleases(groupName:string, packageName:string, version:string, type?:string[], options?: any): Promise<PackageReleaseVO> { 
        let params: any = {'type': type};
        return await this.client.get(`/api/packages/${groupName}/${packageName}/releases/${version}`, Object.assign({params}, options || {}));
    }

    async updateRelease(groupName:string, packageName:string, version:string, body:ReleaseUpdateVO, options?: any): Promise<void> { 
        await this.client.patchForEntity(`/api/packages/${groupName}/${packageName}/releases/${version}`, body, options);
    }

    async createPackage(groupName:string, packageName:string, body:BuildDescriptor, options?: any): Promise<void> { 
        await this.client.postForEntity(`/api/packages/${groupName}/${packageName}/releases/build.json`, body, options);
    }

    async createPlugin(groupName:string, packageName:string, body:PluginDescriptor, options?: any): Promise<void> { 
        await this.client.postForEntity(`/api/packages/${groupName}/${packageName}/releases/plugin.json`, body, options);
    }

    async packagesFrom(owner:string, type?:string[], page?:number, size?:number, options?: any): Promise<PackageDataVO[]> { 
        let params: any = {'type': type, 'owner': owner, 'page': page, 'size': size};
        return await this.client.get(`/api/packages/from`, Object.assign({params}, options || {}));
    }

    async myPackages(type?:string[], page?:number, size?:number, options?: any): Promise<PackageDataVO[]> { 
        let params: any = {'type': type, 'page': page, 'size': size};
        return await this.client.get(`/api/packages/mine`, Object.assign({params}, options || {}));
    }

    async groupPackages(groupName:string, type?:string, fetch?:string, page?:number, size?:number): Promise<PackageDataVO[]> { 
        let params: any = {'type': type, 'fetch': fetch, 'page': page, 'size': size};
        return await this.client.get(`/api/packages/${groupName}/all`, {params});
    }

}
