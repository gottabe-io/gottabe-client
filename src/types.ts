export interface OAuth2Token {

    access_token?: string;
    expires_in?: string;
    refresh_token?: string;
    scope?: string;
    token_type?: string;
}

export interface OrgUserVO {

    name?: string;
    nickname?: string;
    role?: string;
    active?: boolean;
    inviteDate?: string;
}

export interface StarsVO {

    stars?: number;
    totalReviews?: number;
    totalVulnerabilities?: number;
}

export interface StatisticsVO {

    totalArtifacts?: number;
    downloadsLast30Days?: number;
    usersCreatedLast30Days?: number;
}

export interface PackageSummaryVO {

    name?: string;
    groupName?: string;
    version?: string;
    releaseDate?: string;
    ownerNickname?: string;
}

export interface PackageStatisticVO {

    packageName?: string;
    count?: number;
}

export interface UserRequestVO {

    id?: number;
    type?: string;
    status?: string;
    executionDate?: string;
    createTime?: string;
}

export interface ManagedTokenVO {

    token?: string;
    expireDate?: string;
    creationDate?: string;
}

export interface CurrentUserVO {

    id?: number;
    name?: string;
    lastName?: string;
    email?: string;
    image?: string;
}

export interface ReleaseUpdateVO {

    yanked?: boolean;
    yankReason?: string;
}

export interface ReviewLikeVO {

    rate: number;
}

export interface PasswordVO {

    password: string;
    passwordConfirmation: string;
}

export interface UserPrivacyVO {

    showEmail?: boolean;
    showTwitter?: boolean;
    showGithub?: boolean;
    showName?: boolean;
}

export interface PackageReleaseTargetVO {

    name?: string;
    platform?: string;
    architecture?: string;
    toolchain?: string;
    libraries?: string;
    files?: PackageFileVO[];
    dependencies?: PackageDependencyVO[];
}

export interface PackageFileSignature {

    keyId?: string;
    algorithm?: string;
    signature?: string;
}

export interface PackageDependencyVO {

    dependencies?: string[];
    targetDependencies?: any;
}

export interface OwnerVO {

    id?: string;
    name?: string;
    email?: string;
    nickname?: string;
    image?: string;
    githubAccount?: string;
    twitterAccount?: string;
    description?: string;
    createTime?: string;
}

export interface PluginConfig {

    phases?: string[];
    config?: any;
    package?: string;
}

export interface PackageConfig {

    name?: string;
    includes?: string[];
    other?: string[];
}

export interface Options {

    optimization?: number;
    debug?: number;
    warnings?: string;
    other?: string;
}

export interface LinkOptions {

    debugInformation?: boolean;
    other?: string;
}

export interface PluginDescriptor {

    groupId: string;
    artifactId: string;
    version: string;
    license?: string;
    description?: string;
    author?: string;
    sourceUrl?: string;
    issueUrl?: string;
    documentationUrl?: string;
    main?: string;
    phases?: string[];
}

export interface PublicKeyVO {

    keyId: string;
    algorithm: string;
    publicKey: string;
    hash?: string;
    active?: boolean;
}

export interface NewReviewVO {

    rate?: number;
    title: string;
    review: string;
    vulnerability?: boolean;
}

export interface DeleteUserRequestVO {

    username?: string;
    confirmation?: string;
    clientDatetime?: string;
}

export interface UserVO {

    termsAccepted: boolean;
    userAcceptanceData: string;
    email: string;
    name: string;
    lastName: string;
    nickname: string;
    password?: string;
    confirmPassword?: string;
    activationCode?: string;
    recoveryCode?: string;
    githubAccount?: string;
    twitterAccount?: string;
    description?: string;
}

export interface AnyUserVO {

    id?: string;
    name?: string;
    lastName?: string;
    email?: string;
    nickname?: string;
    githubAccount?: string;
    twitterAccount?: string;
    description?: string;
    createTime?: string;
    role?: string;
}

export interface ErrorVO {

    messageKey?: string;
    message?: string;
    fields?: ErrorFieldVO[];
}

export interface ErrorFieldVO {

    id?: string;
    message?: string;
}

export interface BuildDescriptor {

    groupId: string;
    artifactId: string;
    version: string;
    license?: string;
    description?: string;
    author?: string;
    sourceUrl?: string;
    issueUrl?: string;
    documentationUrl?: string;
    type: string;
    modules?: BuildDescriptor[];
    plugins?: PluginConfig[];
    dependencies?: string[];
    includeDirs?: string[];
    sources?: string[];
    testSources?: string[];
    targets?: TargetConfig[];
    package?: PackageConfig;
}

export interface TargetConfig {

    name?: string;
    arch?: string;
    platform?: string;
    toolchain?: string;
    plugins?: PluginConfig[];
    includeDirs?: string[];
    sources?: string[];
    options?: Options;
    defines?: any;
    libraryPaths?: string[];
    libraries?: string[];
    linkOptions?: LinkOptions;
}

export interface PackageGroupVO {

    name: string;
    description?: string;
    owner?: OwnerVO;
}

export interface PackageDataVO {

    name: string;
    type: string;
    group?: PackageGroupVO;
    releases?: PackageReleaseVO[];
    public?: boolean;
}

export interface PackageFileVO {

    name?: string;
    length?: number;
    uploadDate?: string;
    signature?: PackageFileSignature;
}

export interface PackageReleaseVO {

    version?: string;
    releaseDate?: string;
    description?: string;
    sourceUrl?: string;
    issuesUrl?: string;
    documentationUrl?: string;
    license?: string;
    publisher?: OwnerVO;
    files?: PackageFileVO[];
    targets?: PackageReleaseTargetVO[];
    dependencies?: PackageDependencyVO[];
    yanked?: boolean;
    yankReason?: string;
}

export interface OwnerStatisticsVO {

    downloadsLast7Days?: number;
    topPackageDownload7Days?: PackageStatisticVO;
    packageReviewsToday?: PackageStatisticVO;
}

export interface ReviewVO {

    id?: number;
    user?: AnyUserVO;
    rate?: number;
    title?: string;
    review?: string;
    vulnerability?: boolean;
    reviewLikes?: number;
    reviewDislikes?: number;
    myRate?: number;
}