import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsBackgroundimage extends Struct.ComponentSchema {
  collectionName: 'components_components_backgroundimages';
  info: {
    displayName: 'backgroundimage';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsCtAbutton extends Struct.ComponentSchema {
  collectionName: 'components_components_ct_abuttons';
  info: {
    description: '';
    displayName: 'Bigbutton';
  };
  attributes: {
    Bigbutton: Schema.Attribute.String;
  };
}

export interface ComponentsCta extends Struct.ComponentSchema {
  collectionName: 'components_components_ctas';
  info: {
    description: '';
    displayName: 'CTAsection';
  };
  attributes: {
    CTAbutton: Schema.Attribute.String;
    CTAsubtitle: Schema.Attribute.String;
    CTAtitle: Schema.Attribute.String;
  };
}

export interface ComponentsDescription extends Struct.ComponentSchema {
  collectionName: 'components_components_descriptions';
  info: {
    displayName: 'description';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface ComponentsImage extends Struct.ComponentSchema {
  collectionName: 'components_components_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsImpactsection extends Struct.ComponentSchema {
  collectionName: 'components_components_impactsections';
  info: {
    displayName: 'Impactsection';
  };
  attributes: {
    fact1: Schema.Attribute.String;
    fact1description: Schema.Attribute.String;
    fact2: Schema.Attribute.String;
    fact2description: Schema.Attribute.String;
    fact3: Schema.Attribute.String;
    fact3description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsMissionsection extends Struct.ComponentSchema {
  collectionName: 'components_components_missionsections';
  info: {
    description: '';
    displayName: 'Missionsection';
  };
  attributes: {
    icon1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mission1: Schema.Attribute.String;
    mission1subtitle: Schema.Attribute.String;
    mission2: Schema.Attribute.String;
    mission2subtitle: Schema.Attribute.String;
    mission3: Schema.Attribute.String;
    mission3subtitle: Schema.Attribute.String;
  };
}

export interface ComponentsSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_components_subtitles';
  info: {
    displayName: 'subtitle';
    icon: 'filter';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
  };
}

export interface ComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'title';
    icon: 'bold';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.backgroundimage': ComponentsBackgroundimage;
      'components.ct-abutton': ComponentsCtAbutton;
      'components.cta': ComponentsCta;
      'components.description': ComponentsDescription;
      'components.image': ComponentsImage;
      'components.impactsection': ComponentsImpactsection;
      'components.missionsection': ComponentsMissionsection;
      'components.subtitle': ComponentsSubtitle;
      'components.title': ComponentsTitle;
    }
  }
}
