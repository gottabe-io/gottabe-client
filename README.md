# gottabe-client

`gottabe-client` is a TypeScript library for interacting with the GottaBe.io API. It provides a set of services to manage groups, packages, files, organizations, reviews, searches, statistics, public keys, users, and OAuth tokens.

## Installation

```bash
npm install gottabe-client
```

## Usage

The library requires an `HttpClient` from the `igottp` package to be passed to each service constructor.

```typescript
import { HttpClient } from 'igottp';
import { ApiGroupsService } from 'gottabe-client';

const client = new HttpClient('https://api.gottabe.io');
const groupService = new ApiGroupsService(client);

async function main() {
  try {
    const groups = await groupService.groups('my-group');
    console.log(groups);
  } catch (error) {
    console.error('Error fetching groups:', error);
  }
}

main();
```

## Services

The API is organized into several specialized services. All methods are `async` and return a `Promise`.

### ApiGroupsService

Manages package groups.

- `createGroup(body: PackageGroupVO): Promise<void>`
- `groupInfo(groupName: string): Promise<PackageGroupVO>`
- `createPackage_1(groupName: string, body: PackageDataVO): Promise<void>`
- `groups(groupName: string, page?: number, size?: number): Promise<PackageGroupVO[]>`

### ApiPackageService

Manages packages and their releases.

- `packageInfo(groupName: string, packageName: string, type?: string[], fetch?: string, options?: any): Promise<PackageDataVO>`
- `packageReleases(groupName: string, packageName: string, version: string, type?: string[], options?: any): Promise<PackageReleaseVO>`
- `updateRelease(groupName: string, packageName: string, version: string, body: ReleaseUpdateVO, options?: any): Promise<void>`
- `createPackage(groupName: string, packageName: string, body: BuildDescriptor, options?: any): Promise<void>`
- `createPlugin(groupName: string, packageName: string, body: PluginDescriptor, options?: any): Promise<void>`
- `packagesFrom(owner: string, type?: string[], page?: number, size?: number, options?: any): Promise<PackageDataVO[]>`
- `myPackages(type?: string[], page?: number, size?: number, options?: any): Promise<PackageDataVO[]>`
- `groupPackages(groupName: string, type?: string, fetch?: string, page?: number, size?: number): Promise<PackageDataVO[]>`

### ApiPackageFilesService

Handles file uploads and downloads for packages.

- `getPackageFile(groupName: string, packageName: string, version: string, filename: string, type?: string, options?: any): Promise<Blob>`
- `postPackageFile(groupName: string, packageName: string, version: string, filename: string, body?: Blob, options?: any): Promise<void>`

### ApiOrganizationService

Manages organizations and their members.

- `createNew_1(body: OwnerVO): Promise<void>`
- `retrieve(nickname: string): Promise<OwnerVO>`
- `retrieveUsers(nickname: string): Promise<AnyUserVO[]>`
- `addUser(nickname: string, body: AnyUserVO): Promise<void>`
- `getMyOrganizations(): Promise<OrgUserVO[]>`

### ApiReviewsService

Handles package reviews and ratings.

- `findReviews(groupName: string, packageName: string, version: string, page?: number, size?: number, options?: any): Promise<Response | any>`
- `createReview(groupName: string, packageName: string, version: string, body?: NewReviewVO, options?: any): Promise<void>`
- `loadReview(groupName: string, packageName: string, version: string, id: number, options?: any): Promise<ReviewVO>`
- `rateReview(groupName: string, packageName: string, version: string, id: number, body?: ReviewLikeVO, options?: any): Promise<void>`
- `getMyReviewRate(groupName: string, packageName: string, version: string, id: number, options?: any): Promise<ReviewLikeVO>`
- `getStars(groupName: string, packageName: string, version: string, options?: any): Promise<StarsVO>`

### ApiSearchService

Provides search functionality for packages.

- `search(query: string, page?: number, size?: number, options?: any): Promise<PackageDataVO[]>`

### ApiStatisticsService

Provides various statistics about the platform.

- `latestReleases(type: string, page?: number, size?: number, options?: any): Promise<PackageSummaryVO[]>`
- `statistics(options?: any): Promise<StatisticsVO>`
- `ownerStatistics(currentOwner: number, options?: any): Promise<OwnerStatisticsVO>`

### ApiPublicKeyService

Manages public keys for users and organizations.

- `findOwnerKeys(ownerId: number, page?: number, size?: number, options?: any): Promise<PublicKeyVO[]>`
- `uploadPublicKey(organizationId?: number, body?: PublicKeyVO, options?: any): Promise<void>`

### UserServices

Manages user profiles, authentication, and tokens.

- `checkAvailability(email: string, nickname: string, options?: any): Promise<void>`
- `createNew(body?: UserVO, options?: any): Promise<void>`
- `avatar(id: string, options?: any): Promise<Blob>`
- `activate(activationCode: string, options?: any): Promise<void>`
- `currentUser(options?: any): Promise<CurrentUserVO>`
- `getAvatar(options?: any): Promise<Blob>`
- `updatePhoto(body?: Blob, options?: any): Promise<void>`
- `currentUserProfile(options?: any): Promise<UserVO>`
- `updateCurrentUserProfile(body?: UserVO, options?: any): Promise<void>`
- `updatePassword(body?: PasswordVO, options?: any): Promise<void>`
- `currentUserPrivacy(options?: any): Promise<UserPrivacyVO>`
- `updateCurrentUserPrivacy(body?: UserPrivacyVO, options?: any): Promise<void>`
- `listTokens(options?: any): Promise<ManagedTokenVO[]>`
- `createToken(options?: any): Promise<string | null>`
- `removeToken(tokenId: string, options?: any): Promise<void>`
- `recover(recoverCode: string, email: string, password: string, passwordConfirmation: string, options?: any): Promise<void>`
- `generateRecover(email: string, options?: any): Promise<void>`
- `resendActivationCode(email: string, options?: any): Promise<void>`
- `findAllUserRequests(page?: number, size?: number, options?: any): Promise<UserRequestVO[]>`
- `deleteUser(body: DeleteUserRequestVO, options?: any): Promise<void>`

### OauthTokenService

Handles OAuth2 authentication and token management.

- `getAuthenticate(parameters: any, clientId: string, clientSecret: string): Promise<OAuth2Token>`
- `authenticate(parameters: any, clientId: string, clientSecret: string): Promise<OAuth2Token>`
- `revokeToken(tokenId: string, parameters: any): Promise<void>`

## Data Types

The library exports several interfaces and types used by the services. Key types include:

- `PackageGroupVO`, `PackageDataVO`, `PackageReleaseVO`
- `OwnerVO`, `AnyUserVO`, `OrgUserVO`, `UserVO`, `CurrentUserVO`
- `BuildDescriptor`, `PluginDescriptor`, `PublicKeyVO`
- `ReviewVO`, `NewReviewVO`, `StarsVO`, `ReviewLikeVO`
- `StatisticsVO`, `OwnerStatisticsVO`, `PackageSummaryVO`
- `OAuth2Token`, `ManagedTokenVO`, `UserRequestVO`

Refer to `src/types.ts` for the full definitions.

## Development

### Build

```bash
npm run build
```

### License

GPL-3.0