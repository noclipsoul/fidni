import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAccessibiliteAccessibilite extends Schema.CollectionType {
  collectionName: 'accessibilites';
  info: {
    displayName: 'Accessibilit\u00E9';
    pluralName: 'accessibilites';
    singularName: 'accessibilite';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Content_arabic: Attribute.Blocks & Attribute.Required;
    Content_french: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::accessibilite.accessibilite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description_arabic: Attribute.Text & Attribute.Required;
    Description_french: Attribute.Text & Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_arabic: Attribute.String;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::accessibilite.accessibilite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiActualiteActualite extends Schema.CollectionType {
  collectionName: 'actualites';
  info: {
    displayName: 'Actualit\u00E9s';
    pluralName: 'actualites';
    singularName: 'actualite';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Content_arabic: Attribute.Blocks & Attribute.Required;
    Content_french: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::actualite.actualite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Date_JJ_MMMM_AA: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_arabic: Attribute.String & Attribute.Required & Attribute.Unique;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::actualite.actualite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAudioAndPodcastAudioAndPodcast
  extends Schema.CollectionType {
  collectionName: 'audio_and_podcasts';
  info: {
    displayName: 'Audio&Podcast';
    pluralName: 'audio-and-podcasts';
    singularName: 'audio-and-podcast';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Audio_File: Attribute.Media<'audios'> & Attribute.Required;
    Choose: Attribute.Enumeration<['Audio', 'Podcast']> & Attribute.Required;
    Content_french: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::audio-and-podcast.audio-and-podcast',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Image: Attribute.Media<'images'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::audio-and-podcast.audio-and-podcast',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBibliothequeEpub3BibliothequeEpub3
  extends Schema.CollectionType {
  collectionName: 'bibliotheque_epub_3s';
  info: {
    displayName: 'Biblioth\u00E8que EPUB3';
    pluralName: 'bibliotheque-epub-3s';
    singularName: 'bibliotheque-epub-3';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bibliotheque-epub-3.bibliotheque-epub-3',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description_arabic: Attribute.Blocks & Attribute.Required;
    Description_french: Attribute.Blocks & Attribute.Required;
    Preview_image_and_file: Attribute.Media<'images' | 'files', true> &
      Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_arabic: Attribute.String & Attribute.Required & Attribute.Unique;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::bibliotheque-epub-3.bibliotheque-epub-3',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    description: '';
    displayName: 'Blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    age: Attribute.Integer & Attribute.Required;
    approved: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    content: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    domainexpertise: Attribute.String & Attribute.Required;
    email: Attribute.String;
    files: Attribute.Media<'images', true> & Attribute.Required;
    nometprenom: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    titre: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCategorieCategorie extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    description: '';
    displayName: 'Categories';
    pluralName: 'categories';
    singularName: 'categorie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::categorie.categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    idd: Attribute.UID;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID;
    subcategories: Attribute.Relation<
      'api::categorie.categorie',
      'oneToMany',
      'api::subcategorie.subcategorie'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::categorie.categorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCommunicationInclusiveCommunicationInclusive
  extends Schema.CollectionType {
  collectionName: 'communication_inclusives';
  info: {
    description: '';
    displayName: 'Communication inclusive';
    pluralName: 'communication-inclusives';
    singularName: 'communication-inclusive';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Choose: Attribute.Enumeration<['charte', 'recommendation']> &
      Attribute.Required;
    Content_arabic: Attribute.RichText & Attribute.Required;
    Content_french: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::communication-inclusive.communication-inclusive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description_arabic: Attribute.Blocks & Attribute.Required;
    Description_french: Attribute.Blocks & Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_arabic: Attribute.String & Attribute.Required & Attribute.Unique;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::communication-inclusive.communication-inclusive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentsDePlaidoyerDocumentsDePlaidoyer
  extends Schema.CollectionType {
  collectionName: 'documents_de_plaidoyers';
  info: {
    displayName: 'Documents de plaidoyer';
    pluralName: 'documents-de-plaidoyers';
    singularName: 'documents-de-plaidoyer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::documents-de-plaidoyer.documents-de-plaidoyer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description_french: Attribute.Blocks & Attribute.Required;
    Preview_image_and_file: Attribute.Media<'images' | 'files', true> &
      Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::documents-de-plaidoyer.documents-de-plaidoyer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDroitDroit extends Schema.CollectionType {
  collectionName: 'droits';
  info: {
    displayName: 'Droits';
    pluralName: 'droits';
    singularName: 'droit';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Content_arabic: Attribute.Blocks & Attribute.Required;
    Content_french: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::droit.droit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description_arabic: Attribute.Text & Attribute.Required;
    Description_french: Attribute.Text & Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_arabic: Attribute.String & Attribute.Required & Attribute.Unique;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::droit.droit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEvenementEvenement extends Schema.CollectionType {
  collectionName: 'evenements';
  info: {
    displayName: '\u00C9v\u00E9nements';
    pluralName: 'evenements';
    singularName: 'evenement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Content_arabic: Attribute.Blocks & Attribute.Required;
    Content_french: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::evenement.evenement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Date_JJ_MMMM_AA: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Location_arabic: Attribute.String & Attribute.Required;
    Location_French: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_arabic: Attribute.String & Attribute.Required & Attribute.Unique;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::evenement.evenement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOpportuniteOpportunite extends Schema.CollectionType {
  collectionName: 'opportunites';
  info: {
    displayName: 'Opportunit\u00E9s';
    pluralName: 'opportunites';
    singularName: 'opportunite';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::opportunite.opportunite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description_of_the_organization_arabic: Attribute.Text & Attribute.Required;
    Description_of_the_organization_french: Attribute.Text & Attribute.Required;
    Mediafiles: Attribute.Media<'images', true> & Attribute.Required;
    Organization_arabic: Attribute.String & Attribute.Required;
    Organization_french: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_arabic: Attribute.String & Attribute.Required & Attribute.Unique;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::opportunite.opportunite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    displayName: 'Services';
    pluralName: 'services';
    singularName: 'service';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Arabic_document: Attribute.Media<'files'> & Attribute.Required;
    Arabic_document_title: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    French_document: Attribute.Media<'files'> & Attribute.Required;
    French_document_title: Attribute.String & Attribute.Required;
    Preview_image: Attribute.Media<'images'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    title_arabic: Attribute.String & Attribute.Required & Attribute.Unique;
    title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSubcategorieSubcategorie extends Schema.CollectionType {
  collectionName: 'subcategories';
  info: {
    displayName: 'Subcategories';
    pluralName: 'subcategories';
    singularName: 'subcategorie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Attribute.Relation<
      'api::subcategorie.subcategorie',
      'manyToOne',
      'api::categorie.categorie'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::subcategorie.subcategorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    idd: Attribute.UID;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::subcategorie.subcategorie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVideoVideo extends Schema.CollectionType {
  collectionName: 'videos';
  info: {
    displayName: 'Vid\u00E9o';
    pluralName: 'videos';
    singularName: 'video';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::video.video',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description_arabic: Attribute.Blocks & Attribute.Required;
    Description_french: Attribute.Blocks & Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_arabic: Attribute.String & Attribute.Required & Attribute.Unique;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::video.video',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    URL_of_the_video: Attribute.Text & Attribute.Required;
  };
}

export interface ApiWikiphediaWikiphedia extends Schema.CollectionType {
  collectionName: 'wikiphedias';
  info: {
    description: '';
    displayName: 'Wikiphedia';
    pluralName: 'wikiphedias';
    singularName: 'wikiphedia';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Choose: Attribute.Enumeration<
      [
        'Les acteurs sociaux et politiques',
        'Les artistes',
        'Les chercheurs',
        'Les entrepreneurs',
        'Les sportifs'
      ]
    > &
      Attribute.Required;
    Content_arabic: Attribute.Blocks;
    Content_french: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::wikiphedia.wikiphedia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description_arabic: Attribute.Blocks & Attribute.Required;
    Description_french: Attribute.Blocks & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    Title_arabic: Attribute.String & Attribute.Required & Attribute.Unique;
    Title_french: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::wikiphedia.wikiphedia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::accessibilite.accessibilite': ApiAccessibiliteAccessibilite;
      'api::actualite.actualite': ApiActualiteActualite;
      'api::audio-and-podcast.audio-and-podcast': ApiAudioAndPodcastAudioAndPodcast;
      'api::bibliotheque-epub-3.bibliotheque-epub-3': ApiBibliothequeEpub3BibliothequeEpub3;
      'api::blog.blog': ApiBlogBlog;
      'api::categorie.categorie': ApiCategorieCategorie;
      'api::communication-inclusive.communication-inclusive': ApiCommunicationInclusiveCommunicationInclusive;
      'api::documents-de-plaidoyer.documents-de-plaidoyer': ApiDocumentsDePlaidoyerDocumentsDePlaidoyer;
      'api::droit.droit': ApiDroitDroit;
      'api::evenement.evenement': ApiEvenementEvenement;
      'api::opportunite.opportunite': ApiOpportuniteOpportunite;
      'api::service.service': ApiServiceService;
      'api::subcategorie.subcategorie': ApiSubcategorieSubcategorie;
      'api::video.video': ApiVideoVideo;
      'api::wikiphedia.wikiphedia': ApiWikiphediaWikiphedia;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
