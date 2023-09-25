import {HttpClient} from 'igottp';
import {NewReviewVO, ReviewLikeVO, ReviewVO, StarsVO} from "./types";

export class ApiReviewsService {
    client: HttpClient;
    constructor(client: HttpClient) {
        this.client = client;
    }

    async findReviews(groupName:string, packageName:string, version:string, page?:number, size?:number, options?:any): Promise<Response | any> {
        let params: any = {'page': page, 'size': size};
        return await this.client.get(`/api/reviews/${groupName}/${packageName}/${version}`, Object.assign({params}, options || {}));
    }

    async createReview(groupName:string, packageName:string, version:string, body?:NewReviewVO, options?:any): Promise<void> {
        await this.client.postForEntity(`/api/reviews/${groupName}/${packageName}/${version}`, body, options);
    }

    async loadReview(groupName:string, packageName:string, version:string, id:number, options?:any): Promise<ReviewVO> {
        return await this.client.get(`/api/reviews/${groupName}/${packageName}/${version}/${id}`, options);
    }

    async rateReview(groupName:string, packageName:string, version:string, id:number, body?:ReviewLikeVO, options?:any): Promise<void> {
        await this.client.patchForEntity(`/api/reviews/${groupName}/${packageName}/${version}/${id}`, body, options);
    }

    async getMyReviewRate(groupName:string, packageName:string, version:string, id:number, options?:any): Promise<ReviewLikeVO> {
        return await this.client.get(`/api/reviews/${groupName}/${packageName}/${version}/${id}/my-rate`, options);
    }

    async getStars(groupName:string, packageName:string, version:string, options?:any): Promise<StarsVO> {
        return await this.client.get(`/api/reviews/${groupName}/${packageName}/${version}/stars`, options);
    }

}
