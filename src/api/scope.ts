export class OrganizationScope {
  organization: string;
  scope = 'organization';
  constructor(organizationUrl: string) {
    this.organization = organizationUrl;
  }
}

export class UserScope {
  organization: string;
  user: string;
  scope = 'user';
  constructor(userUrl: string, organizationUrl: string) {
    this.user = userUrl;
    this.organization = organizationUrl;
  }
}