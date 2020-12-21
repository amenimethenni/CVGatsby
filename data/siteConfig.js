module.exports = {
  siteTitle: ' ',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Ameni Methenni',
  twitterUsername: '_franciscodf',
  githubUsername: 'santosfrancisco',
  authorAvatar: '/images/ameni.jpg',
  authorDescription: `Je suis Ameni Methenni , Etudiante en 3ème année cycle d'ingénieur à l’Institut Supérieur d’Informatique spécialité Ingénierie
  de Développement Logiciel.<b><br> contact :</b> <br>Téléphone : 50334367 <br>Email: ameni.methenni@etudiant-isi.utm.tn<br>Adresse: Mourouj 6, Ben Arous,Tunisie.
  </strong>`,
  skills: [
    {
      name: 'Java',
      level: 70
    },
    {
      name: 'Angular',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Android',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Transtu",
      begin: {
        month: 'july',
        year: '2020'
      },
      duration: null,
      occupation: "Stagiaire",
      description: "Développement d'une application web pour la gestion du stock avec Angular et Spring Boot."
  
    }, {
      company: "Banque de Tunisie",
      begin: {
        month: 'Aug',
        year: '2019'
      },
      duration: '1 yr e 5 mos',
      occupation: "Stagiaire",
      description: "Développement d'une application web pour la gestion des opérations bancaires avec symfony."
    }, {
      company: "Start up ",
      begin: {
        month: 'sep',
        year: '2018'
      },
      duration: '4 mos ',
      occupation: "Stagiaire",
      description: "Développement d'une plateforme de E-Learning avec jsp,servlets,Mysql."
  
    },
    {
      company: "Centre National d'informatique",
      begin: {
        month: 'Feb',
        year: '2017'
      },
      duration: null,
      occupation: "Stagiaire",
      description: "Développement d'une appliaction web pour la gestion des achats avec symfony."
    }, 
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/_franciscodf",
    linkedin: "https://www.linkedin.com/in/santos-francisco",
    github: "https://github.com/santosfrancisco",
    email: "yoshi.df@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: '   ',
      url: '/portifolio',
    }
  ]
}