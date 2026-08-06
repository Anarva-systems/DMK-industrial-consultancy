export type Language = 'en' | 'te';

export interface TranslationStructure {
  nav: {
    home: string;
    about: string;
    services: string;
    process: string;
    contact: string;
    getConsultation: string;
    eng: string;
    tel: string;
  };
  hero: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    btnDiscuss: string;
    btnCall: string;
    badge1: string;
    badge2: string;
    badge3: string;
    cardTag: string;
    cardTitle: string;
    step1: string;
    step2: string;
    step3: string;
  };
  involve: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    callout: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  about: {
    tag: string;
    titlePart1: string;
    titlePart2: string;
    titleHighlight: string;
    paragraph: string;
    cards: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    badges: Array<{
      title: string;
      description: string;
    }>;
    quote: string;
    quotePart1: string;
    quotePart2: string;
  };
  expertise: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    focusCard: {
      tag: string;
      title: string;
      outcomes: string[];
    };
  };
  services: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    cards: Array<{
      id: string;
      title: string;
      description: string;
      fullDetails: string;
    }>;
    banner: {
      title: string;
      highlight: string;
      desc: string;
      callBtn: string;
      waBtn: string;
      waBtnSub: string;
      hours: string;
      email: string;
      location: string;
    };
  };
  achievements: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    stats: Array<{
      value: string;
      title: string;
      description: string;
    }>;
  };
  solutions: {
    tag: string;
    title: string;
    cards: Array<{
      id: string;
      title: string;
      description: string;
      image: string;
    }>;
    sideCard: {
      title: string;
      subtitle: string;
      btn: string;
    };
  };
  process: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      subtitle: string;
      description: string;
    }>;
  };
  contactSection: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    callBtn: string;
    waBtn: string;
    waBtnSub: string;
    guarantees: Array<{
      title: string;
      description: string;
    }>;
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      requirementLabel: string;
      requirementPlaceholder: string;
      submitBtn: string;
      submitting: string;
      privacyText: string;
      successMsg: string;
      errorMsg: string;
    };
  };
  footer: {
    desc: string;
    contactHeader: string;
    locationHeader: string;
    locationAddress: string;
    viewMapBtn: string;
    rights: string;
    developedBy: string;
    privacyPolicy: string;
    termsConditions: string;
  };
}
