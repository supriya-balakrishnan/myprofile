// gitprofile.config.js

const config = {
  github: {
    username: 'supriya-balakrishnan', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'supriya-balakrishnan',
    instagram: '',
    youtube: 'MommysHut',
    dribbble: '',
    behance: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://supriya-balakrishnan.github.io',
    phone: '+1-437-559-1033 ',
    email: 'code2priya@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1PbpKahOdiOzvm4gqeZFDZydmZ8KVAMsa/edit?pli=1', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Git', 'Typescript'],
  experiences: [
    {
      company: 'Botcode Web Integration solutions private ltd',
      position: 'HR Executive',
      from: 'March 2013',
      to: 'March 2014',
      companyLink: 'https://botcode.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'SRM University',
      degree: 'MBA',
      from: '2010',
      to: '2012',
    },
    {
      institution: 'Anna University',
      degree: 'B.E',
      from: '2005',
      to: '2009',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'gvgvgvbj',
      description: 'eedwd',
      imageUrl: '',
      link: '',
    },
    {
      title: '',
      description: '',
      imageUrl: '',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `We become what we think about.`,
};

export default config;
