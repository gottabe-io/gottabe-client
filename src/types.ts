export interface BaseDescriptor {
    groupId: string;
    artifactId: string;
    version: string;
    description?: string;
    author?: string;
    sourceUrl?: string;
    issueUrl?: string;
    documentationUrl?: string;
    license?: string;
}

export interface BuildDescriptor extends BaseDescriptor {
    dependencies?: string[];
    includeDirs?: string[];
    modules?: BuildDescriptor[];
    package?: PackageConfig;
    plugins?: PluginConfig[];
    sources?: string[];
    targets?: TargetConfig[];
    testSources?: string[];
    type: string;
}

export interface PluginDescriptor extends BaseDescriptor {

    main?: string;
    phases?: string[];
}

export interface PluginConfig {
    config?: any;
    package?: string;
    phases?: string[];
}

export interface PackageReleaseVO {
    description?: string;
    documentationUrl?: string;
    issuesUrl?: string;
    releaseDate?: string;
    sourceUrl?: string;
    version?: string;
}

export interface PackageConfig {
    includes?: string[];
    name?: string;
    other?: string[];
}

export interface OwnerVO {
    createTime?: string;
    description?: string;
    email?: string;
    githubAccount?: string;
    id?: string;
    name?: string;
    nickname?: string;
    twitterAccount?: string;
}

export interface OrgUserVO {
    active?: boolean;
    inviteDate?: string;
    name?: string;
    nickname?: string;
    role?: string;
}

export interface Options {
    debug?: number;
    optimization?: number;
    other?: string;
    warnings?: string;
}

export interface LinkOptions {
    debugInformation?: boolean;
    other?: string;
}

export interface AnyUserVO {
    createTime?: string;
    description?: string;
    email?: string;
    githubAccount?: string;
    id?: string;
    lastName?: string;
    name?: string;
    nickname?: string;
    role?: string;
    twitterAccount?: string;
}

export interface PackageDataVO {
    group?: PackageGroupVO;
    name: string;
    public?: boolean;
    releases?: PackageReleaseVO[];
    type: string;
}

export interface PackageGroupVO {
    description?: string;
    name: string;
    owner?: OwnerVO;
}

export interface TargetConfig {
    arch?: string;
    defines?: any;
    includeDirs?: string[];
    libraries?: string[];
    libraryPaths?: string[];
    linkOptions?: LinkOptions;
    name?: string;
    options?: Options;
    platform?: string;
    plugins?: PluginConfig[];
    sources?: string[];
    toolchain?: string;
}

export interface StarsVO {
    stars?: number;
    totalReviews?: number;
    totalVulnerabilities?: number;
}

export interface ReviewLikeVO {

    rate: number;
}

export interface NewReviewVO {
    rate?: number;
    title?: string;
    review?: string;
    vulnerability?:boolean;
}

export interface ReviewVO {
    id?: number;
    rate?: number;
    review?: string;
    title?: string;
    reviewDislikes?: number;
    reviewLikes?: number;
    user?: AnyUserVO;
    myRate?:number;
    vulnerability:boolean;
}
