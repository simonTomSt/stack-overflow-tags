export interface TagsResponse {
  items: Tag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface Tag {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
  collectives?: collectives[];
}

export interface collectives {
  tags: string[];
  external_links: ExternalLink[];
  description: string;
  link: string;
  name: string;
  slug: string;
}

export interface ExternalLink {
  type: string;
  link: string;
}
