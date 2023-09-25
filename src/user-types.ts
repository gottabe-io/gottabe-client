export interface UserVO {

    activationCode?: string;
    confirmPassword?: string;
    description?: string;
    email: string;
    githubAccount?: string;
    lastName: string;
    name: string;
    nickname: string;
    password?: string;
    recoveryCode?: string;
    twitterAccount?: string;
}

export interface UserPrivacyVO {

    showEmail?: boolean;
    showGithub?: boolean;
    showName?: boolean;
    showTwitter?: boolean;
}

export interface PasswordVO {

    password?: string;
    passwordConfirmation?: string;
}

export interface OAuth2Token {

    access_token?: string;
    expires_in?: string;
    refresh_token?: string;
    scope?: string;
    token_type?: string;
}

export interface ManagedTokenVO {

    creationDate?: string;
    expireDate?: string;
    token?: string;
}

export interface CurrentUserVO {

    email?: string;
    image?: string;
    lastName?: string;
    name?: string;
}

