// src/data/formations.js
// Source de vérité unique pour toutes les formations

export const formationsMetier = [
    {
      id: 1,
      title: "Manager Sportif Professionnel",
      category: "Sport",
      level: "Intermédiaire",
      price: "250 000 XOF",
      duration: "8 semaines",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=250&fit=crop",
      description:
        "Développez les compétences nécessaires pour travailler dans l'industrie sportive. Ce programme intensif couvre la gestion d'équipe, la communication, la stratégie et le leadership dans un contexte sportif professionnel.",
      objectives: [
        "Maîtriser les fondamentaux du management sportif",
        "Gérer une équipe de façon efficace et bienveillante",
        "Élaborer une stratégie sportive à court et long terme",
        "Communiquer avec les médias et les partenaires",
        "Comprendre les aspects juridiques et financiers du sport",
      ],
      program: [
        {
          id: "p1-1",
          title: "Module 1 – Introduction au management sportif",
          duration: "1 semaine",
          lessons: 6,
          items: [
            "Qu'est-ce que le management sportif ?",
            "Histoire et évolution du sport professionnel",
            "Les acteurs clés de l'écosystème sportif",
            "Rôles et responsabilités du manager",
            "Étude de cas : grands managers sportifs",
            "Quiz de validation",
          ],
        },
        {
          id: "p1-2",
          title: "Module 2 – Leadership et gestion d'équipe",
          duration: "2 semaines",
          lessons: 8,
          items: [
            "Styles de leadership adaptés au sport",
            "Motivation et cohésion d'équipe",
            "Gestion des conflits",
            "Communication non verbale",
            "Ateliers pratiques",
            "Retours d'expérience de coaches professionnels",
            "Mise en situation",
            "Évaluation",
          ],
        },
        {
          id: "p1-3",
          title: "Module 3 – Stratégie et planification",
          duration: "2 semaines",
          lessons: 7,
          items: [
            "Analyse SWOT appliquée au sport",
            "Planification de la saison",
            "Objectifs SMART",
            "Suivi et ajustement des performances",
            "Scouting et recrutement",
            "Gestion des blessures et récupération",
            "Projet de fin de module",
          ],
        },
        {
          id: "p1-4",
          title: "Module 4 – Communication et partenariats",
          duration: "1 semaine",
          lessons: 5,
          items: [
            "Relations presse et médias",
            "Réseaux sociaux pour les clubs sportifs",
            "Négociation de partenariats",
            "Image de marque personnelle",
            "Simulation d'interview",
          ],
        },
        {
          id: "p1-5",
          title: "Module 5 – Finance et droit du sport",
          duration: "2 semaines",
          lessons: 9,
          items: [
            "Budget d'un club sportif",
            "Contrats de travail dans le sport",
            "Droits TV et licences",
            "Fiscalité des sportifs",
            "Gestion des transferts",
            "Éthique et déontologie",
            "Prévention du dopage",
            "Réglementation internationale",
            "Examen final",
          ],
        },
      ],
      trainer: {
        name: "Ibrahima Diallo",
        role: "Ancien directeur sportif, 15 ans d'expérience en management de clubs professionnels au Sénégal et en Europe.",
      },
      testimonials: [
        {
          name: "Fatou Ndiaye",
          stars: 5,
          text: "Formation excellente, très pratique et bien structurée. J'ai pu décrocher un poste de manager adjoint dans un club de Dakar.",
        },
        {
          name: "Moussa Sarr",
          stars: 4,
          text: "Contenu riche et formateur très disponible. Quelques modules auraient pu être plus approfondis mais globalement très satisfait.",
        },
      ],
    },
    {
      id: 2,
      title: "Streaming et contenus Esports",
      category: "eSport",
      level: "Avancé",
      price: "300 000 XOF",
      duration: "12 semaines",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      description:
        "Formation complète pour devenir coach eSport certifié. Apprenez à analyser les performances, structurer l'entraînement et préparer des équipes pour les compétitions nationales et internationales.",
      objectives: [
        "Analyser les métriques de performance en jeu",
        "Concevoir des plans d'entraînement adaptés",
        "Gérer la pression compétitive et le mental des joueurs",
        "Maîtriser les outils d'analyse vidéo",
        "Encadrer une équipe en tournoi",
      ],
      program: [
        {
          id: "p2-1",
          title: "Module 1 – Écosystème eSport",
          duration: "1 semaine",
          lessons: 5,
          items: [
            "Histoire et croissance de l'eSport mondial",
            "Les titres majeurs : League of Legends, Valorant, FIFA, etc.",
            "Structures des organisations professionnelles",
            "Le rôle du coach dans une équipe eSport",
            "Quiz d'entrée",
          ],
        },
        {
          id: "p2-2",
          title: "Module 2 – Analyse de la performance",
          duration: "3 semaines",
          lessons: 10,
          items: [
            "Outils d'analyse : OP.GG, Mobalytics, etc.",
            "Lecture et interprétation des statistiques",
            "Analyse vidéo des matchs",
            "Identification des patterns adverses",
            "Correction des erreurs individuelles",
            "KPI et objectifs de progression",
            "Atelier : analyse d'un replay complet",
            "Débriefing collectif",
            "Rapport de performance type",
            "Évaluation pratique",
          ],
        },
        {
          id: "p2-3",
          title: "Module 3 – Coaching mental et communication",
          duration: "2 semaines",
          lessons: 8,
          items: [
            "Psychologie du joueur de haut niveau",
            "Gestion du tilt et de la pression",
            "Techniques de communication positive",
            "Cohésion d'équipe en ligne et en LAN",
            "Préparation mentale avant un tournoi",
            "Récupération après une défaite",
            "Séance avec un psychologue du sport",
            "Étude de cas : équipe en crise",
          ],
        },
        {
          id: "p2-4",
          title: "Module 4 – Stratégie et préparation des matchs",
          duration: "4 semaines",
          lessons: 12,
          items: [
            "Construction d'une stratégie de jeu",
            "Draft et composition d'équipe",
            "Scouting de l'adversaire",
            "Préparation d'un book tactique",
            "Simulation de match officiel",
            "Ajustements en cours de partie",
            "Communication en direct (in-game calls)",
            "Analyse post-match",
            "Bootcamp simulé",
            "Gestion du calendrier compétitif",
            "Projet final : coacher une équipe amateur",
            "Présentation devant un jury",
          ],
        },
      ],
      trainer: {
        name: "Awa Traoré",
        role: "Coach eSport certifiée, ancienne capitaine de l'équipe nationale sénégalaise de eSport, 8 ans d'expérience.",
      },
      testimonials: [
        {
          name: "Cheikh Ba",
          stars: 5,
          text: "Je suis passé de joueur amateur à coach professionnel grâce à cette formation. Le module sur la psychologie m'a vraiment ouvert les yeux.",
        },
        {
          name: "Rokhaya Fall",
          stars: 5,
          text: "Awa est une formatrice hors pair. Pédagogue, exigeante et toujours disponible. Je recommande à 100%.",
        },
      ],
    },
    {
      id: 3,
      title: "Analyse vidéo",
      category: "Sport",
      level: "Intermédiaire",
      price: "200 000 XOF",
      duration: "10 semaines",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      description:
        "Maîtrisez les stratégies marketing appliquées au sport. De la gestion de communauté à la négociation de sponsoring, devenez un expert en communication sportive.",
      objectives: [
        "Construire et gérer une stratégie marketing sportive",
        "Créer et animer des communautés en ligne",
        "Négocier et gérer des contrats de sponsoring",
        "Produire du contenu engageant pour les réseaux sociaux",
        "Analyser les performances marketing",
      ],
      program: [
        {
          id: "p3-1",
          title: "Module 1 – Fondamentaux du marketing sportif",
          duration: "2 semaines",
          lessons: 7,
          items: [
            "Spécificités du marketing dans le sport",
            "Les grandes campagnes sportives mondiales",
            "Segmentation et ciblage dans le sport",
            "Positionnement de marque sportive",
            "Analyse de la concurrence",
            "Outils de veille marketing",
            "Cas pratique : audit d'un club",
          ],
        },
        {
          id: "p3-2",
          title: "Module 2 – Réseaux sociaux et contenu",
          duration: "3 semaines",
          lessons: 9,
          items: [
            "Instagram, TikTok, Twitter pour le sport",
            "Création de contenu vidéo sportif",
            "Storytelling d'athlète",
            "Live streaming et couverture événementielle",
            "Community management",
            "Publicité payante (Meta Ads, etc.)",
            "Mesure de l'engagement",
            "Atelier création de contenu",
            "Revue de portfolio",
          ],
        },
        {
          id: "p3-3",
          title: "Module 3 – Sponsoring et partenariats",
          duration: "3 semaines",
          lessons: 8,
          items: [
            "Typologie des partenariats sportifs",
            "Construction d'un dossier de sponsoring",
            "Techniques de prospection",
            "Négociation et rédaction de contrat",
            "Activation des partenariats",
            "ROI et reporting sponsor",
            "Relations avec les agents et clubs",
            "Simulation de pitch commercial",
          ],
        },
        {
          id: "p3-4",
          title: "Module 4 – Événementiel et expérience fan",
          duration: "2 semaines",
          lessons: 6,
          items: [
            "Organisation d'événements sportifs",
            "Fan experience et hospitalité",
            "Marketing digital en live event",
            "Billetterie et gestion de l'affluence",
            "Bilan post-événement",
            "Projet final",
          ],
        },
      ],
      trainer: {
        name: "Mariama Cissé",
        role: "Directrice marketing d'une fédération sportive nationale, 12 ans d'expérience en marketing et communication.",
      },
      testimonials: [
        {
          name: "Oumar Diop",
          stars: 4,
          text: "Formation très complète sur les réseaux sociaux et le sponsoring. J'ai pu mettre en pratique rapidement ce que j'ai appris.",
        },
        {
          name: "Adja Sow",
          stars: 5,
          text: "Mariama est inspirante ! Elle partage des cas réels tirés de son expérience. Une formation que je conseille à tous les passionnés de sport.",
        },
      ],
    },
    {
      id: 4,
      title: "Formation Agent de Joeur",
      category: "Sport",
      level: "Avancé",
      price: "350 000 XOF",
      duration: "14 semaines",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=250&fit=crop",
      description:
        "Pilotez efficacement un club ou une organisation sportive. De la comptabilité à la gouvernance, cette formation vous donne toutes les clés pour diriger une structure sportive professionnelle.",
      objectives: [
        "Gérer la comptabilité et le budget d'un club",
        "Maîtriser la gouvernance et le cadre juridique",
        "Recruter et fidéliser des ressources humaines",
        "Développer les infrastructures et équipements",
        "Établir un projet de développement à 5 ans",
      ],
      program: [
        {
          id: "p4-1",
          title: "Module 1 – Gouvernance et statuts",
          duration: "2 semaines",
          lessons: 7,
          items: [
            "Formes juridiques d'un club sportif",
            "Rédaction et modification des statuts",
            "Assemblée générale et conseil d'administration",
            "Rôles des dirigeants bénévoles et salariés",
            "Conformité réglementaire fédérale",
            "Gestion des licences et affiliations",
            "Étude de cas",
          ],
        },
        {
          id: "p4-2",
          title: "Module 2 – Gestion financière",
          duration: "3 semaines",
          lessons: 10,
          items: [
            "Comptabilité associative",
            "Élaboration du budget annuel",
            "Suivi et contrôle budgétaire",
            "Sources de financement (subventions, billetterie, sponsors)",
            "Appels à projets publics",
            "Audit interne",
            "Logiciels de gestion comptable",
            "Gestion de la trésorerie",
            "Rapport financier annuel",
            "Examen de mi-parcours",
          ],
        },
        {
          id: "p4-3",
          title: "Module 3 – Ressources humaines",
          duration: "3 semaines",
          lessons: 8,
          items: [
            "Recrutement d'entraîneurs et de staff",
            "Contrats de travail dans le sport",
            "Formation continue des salariés",
            "Gestion des bénévoles",
            "Prévention des risques professionnels",
            "Management interculturel",
            "Résolution des conflits internes",
            "Évaluation de la performance",
          ],
        },
        {
          id: "p4-4",
          title: "Module 4 – Infrastructures et développement",
          duration: "3 semaines",
          lessons: 9,
          items: [
            "Gestion des installations sportives",
            "Maintenance et sécurité des équipements",
            "Projets de construction et rénovation",
            "Plan de développement durable",
            "Accessibilité et inclusion",
            "Partenariats publics-privés",
            "Projet de développement à 5 ans",
            "Présentation devant un jury",
            "Certification finale",
          ],
        },
      ],
      trainer: {
        name: "Abdoulaye Niang",
        role: "Président de club sportif pendant 10 ans, consultant en gouvernance sportive pour plusieurs fédérations africaines.",
      },
      testimonials: [
        {
          name: "Ndèye Mbaye",
          stars: 5,
          text: "Grâce à cette formation, j'ai pu restructurer notre association sportive et obtenir nos premières subventions publiques.",
        },
        {
          name: "Lamine Diouf",
          stars: 4,
          text: "Très bonne formation, dense mais enrichissante. Le module sur les RH m'a particulièrement aidé dans mon quotidien.",
        },
      ],
    },
  ];
  
  export const formationsDecouverte = [
    {
      id: 101,
      title: "Découvrir la Nutrition Sportive",
      category: "Sport",
      level: "Débutant",
      price: "Gratuit",
      duration: "2 heures",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
      description:
        "Les bases de l'alimentation adaptée aux sportifs. Découvrez comment l'alimentation influence vos performances et votre récupération.",
      objectives: [
        "Comprendre les macronutriments essentiels",
        "Adapter son alimentation avant et après l'effort",
        "Éviter les erreurs nutritionnelles courantes",
      ],
      program: [
        {
          id: "d101-1",
          title: "Les bases de la nutrition",
          duration: "45 min",
          lessons: 3,
          items: [
            "Protéines, glucides et lipides : rôles et sources",
            "Hydratation et micronutriments",
            "Nutrition avant l'effort",
          ],
        },
        {
          id: "d101-2",
          title: "Nutrition et récupération",
          duration: "45 min",
          lessons: 3,
          items: [
            "Fenêtre anabolique et récupération",
            "Compléments alimentaires : utiles ou non ?",
            "Plan nutritionnel simplifié",
          ],
        },
      ],
      trainer: {
        name: "Dr. Seynabou Dème",
        role: "Nutritionniste sportive diplômée, collabore avec plusieurs clubs professionnels au Sénégal.",
      },
      testimonials: [
        {
          name: "Khadim Ly",
          stars: 5,
          text: "Simple, clair et très utile ! J'ai compris pourquoi je me fatiguais si vite lors de mes entraînements.",
        },
      ],
    },
    {
      id: 102,
      title: "Comprendre l'univers de l'eSport",
      category: "eSport",
      level: "Débutant",
      price: "Gratuit",
      duration: "1h30",
      image:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=250&fit=crop",
      description:
        "Découvrez les métiers et opportunités du secteur eSport. Un panorama complet pour comprendre cet univers en pleine explosion.",
      objectives: [
        "Connaître les principaux jeux compétitifs",
        "Identifier les métiers de l'eSport",
        "Comprendre le modèle économique des organisations",
      ],
      program: [
        {
          id: "d102-1",
          title: "L'eSport en 2024",
          duration: "45 min",
          lessons: 3,
          items: [
            "Chiffres clés du marché mondial",
            "Les grandes compétitions internationales",
            "L'eSport en Afrique et au Sénégal",
          ],
        },
        {
          id: "d102-2",
          title: "Les métiers et opportunités",
          duration: "45 min",
          lessons: 3,
          items: [
            "Joueur, coach, analyste, manager…",
            "Comment se lancer dans l'eSport professionnel ?",
            "Ressources et communautés pour progresser",
          ],
        },
      ],
      trainer: {
        name: "Awa Traoré",
        role: "Coach eSport certifiée et ambassadrice du gaming africain.",
      },
      testimonials: [
        {
          name: "Aminata Koné",
          stars: 5,
          text: "J'ignorais tout de l'eSport et maintenant je sais exactement vers quel métier me diriger. Merci !",
        },
      ],
    },
    {
      id: 103,
      title: "Introduction au Management Sportif",
      category: "Sport",
      level: "Débutant",
      price: "Gratuit",
      duration: "3 heures",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=250&fit=crop",
      description:
        "Une première immersion dans la gestion du sport. Découvrez les rôles, les enjeux et les compétences clés pour travailler dans le management sportif.",
      objectives: [
        "Comprendre les fondamentaux du management sportif",
        "Identifier les acteurs de l'écosystème sportif",
        "Explorer les débouchés professionnels",
      ],
      program: [
        {
          id: "d103-1",
          title: "Le sport comme industrie",
          duration: "1h30",
          lessons: 3,
          items: [
            "Le sport en chiffres",
            "Les différents secteurs du sport professionnel",
            "Acteurs publics et privés",
          ],
        },
        {
          id: "d103-2",
          title: "Les métiers du management sportif",
          duration: "1h30",
          lessons: 3,
          items: [
            "Directeur sportif, manager, agent…",
            "Parcours et formations pour y accéder",
            "Témoignages de professionnels",
          ],
        },
      ],
      trainer: {
        name: "Ibrahima Diallo",
        role: "Ancien directeur sportif, formateur expert en management sportif.",
      },
      testimonials: [
        {
          name: "Baye Fall",
          stars: 4,
          text: "Très bon contenu d'introduction. Ça m'a donné envie de poursuivre avec la formation complète !",
        },
      ],
    },
    {
      id: 104,
      title: "Créer du contenu Gaming",
      category: "eSport",
      level: "Débutant",
      price: "Gratuit",
      duration: "2 heures",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      description:
        "Découvrez les fondamentaux de la création de contenu gaming. Apprenez à vous lancer sur YouTube, Twitch ou TikTok en tant que créateur gaming.",
      objectives: [
        "Comprendre les plateformes de streaming et de vidéo",
        "Choisir son niche et son format de contenu",
        "Poser les bases d'une communauté engagée",
      ],
      program: [
        {
          id: "d104-1",
          title: "Les plateformes gaming",
          duration: "1h",
          lessons: 3,
          items: [
            "YouTube Gaming, Twitch, TikTok : comparatif",
            "Monétisation et revenus d'un créateur",
            "Équipement de base pour démarrer",
          ],
        },
        {
          id: "d104-2",
          title: "Créer et publier son premier contenu",
          duration: "1h",
          lessons: 3,
          items: [
            "Trouver son angle et sa personnalité",
            "Bases du montage vidéo gaming",
            "Croissance organique et régularité",
          ],
        },
      ],
      trainer: {
        name: "Kevin Dubois",
        role: "Streamer professionnel – 500k abonnés Twitch",
        bio: "Kevin Dubois est l'un des streamers francophones africains les plus suivis. En 3 ans, il a bâti une communauté de plus de 500 000 abonnés et partage ses secrets de croissance.",
        tags: ["Streaming", "Content Creator", "Twitch", "YouTube"],
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face",
      },
      testimonials: [
        {
          name: "Thierno Diallo",
          stars: 5,
          text: "J'ai lancé ma chaîne YouTube une semaine après cette formation. Le contenu est actionnable et motivant !",
        },
      ],
    },
  ];
  
  // Tableau unifié pour FormationDetail
  export const allFormations = [...formationsMetier, ...formationsDecouverte];