import {HttpClient} from 'igottp';
import {PackageSummaryVO, StatisticsVO, OwnersStatisticsVO} from "./types";

export class ApiStatisticsService {
    client: HttpClient;

    constructor(client: HttpClient) {
        this.client = client;
    }

    async latestReleases(type: string, page?: number, size?: number, options?: any): Promise<PackageSummaryVO[]> {
        let params: any = {type: type, page: page, size: size};
        return await this.client.get(`/api/statistics/latest-releases`, {params, ...options});
    }

    async statistics(options?: any): Promise<StatisticsVO> {
        return await this.client.get(`/api/statistics/general-statistics`, {...options});
    }

    async ownerStatistics(currentOwner: number, options?: any): Promise<OwnersStatisticsVO> {
        return await this.client.get(`/api/statistics/my-statistics`, {params: {"current-owner": currentOwner}, ...options});
    }

}
