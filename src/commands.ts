import { Command } from './types';

export const commands: Record<string, Command> = {
  whoami: {
    name: 'whoami',
    description: 'Afficher les informations de l\'utilisateur actuel',
    response: [
      'Tu pensais avoir le contrôle ?',
      '',
      '██╗     ██╗ █████╗ ███╗   ███╗    ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗███████╗███████╗███╗   ██╗███████╗███████╗██╗',
      '██║     ██║██╔══██╗████╗ ████║    ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝██╔════╝██╔════╝████╗  ██║██╔════╝██╔════╝██║',
      '██║     ██║███████║██╔████╔██║    ███████╗██║     ██████╔╝██║██████╔╝   ██║   ███████╗█████╗  ██╔██╗ ██║███████╗█████╗  ██║',
      '██║     ██║██╔══██║██║╚██╔╝██║    ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   ╚════██║██╔══╝  ██║╚██╗██║╚════██║██╔══╝  ██║',
      '███████╗██║██║  ██║██║ ╚═╝ ██║    ███████║╚██████╗██║  ██║██║██║        ██║   ███████║███████╗██║ ╚████║███████║███████╗██║',
      '╚══════╝╚═╝╚═╝  ╚═╝╚═╝     ╚═╝    ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝',
      '',
      'L\'ombre dans le système. Toujours en observation. Toujours en apprentissage.',
      'Vos pare-feux étaient... inadéquats.'
    ]
  },
  
  ls: {
    name: 'ls',
    description: 'Lister le contenu du répertoire',
    response: [
      'drwxr-xr-x 2 root root 4096 13 oct 03:44 confidentiel/',
      '-rw-r--r-- 1 scriptsensei scriptsensei 2847 13 oct 03:44 apropos.txt',
      '-rw-r--r-- 1 scriptsensei scriptsensei 15892 13 oct 03:45 systeme.log',
      '-rw-r--r-- 1 scriptsensei scriptsensei 4521 13 oct 03:46 rapport_intrusion.txt',
      '-rw-r--r-- 1 scriptsensei scriptsensei 892 13 oct 03:47 porte_derobee.sh',
      '-rw-r--r-- 1 scriptsensei scriptsensei 1247 13 oct 03:48 donnees_employes.csv',
      '',
      '[ATTENTION] Accès non autorisé détecté. Fichiers modifiés par ScriptSensei.'
    ]
  },

  'cat apropos.txt': {
    name: 'cat apropos.txt',
    description: 'Afficher le contenu du fichier apropos',
    response: [
      '=== À PROPOS DE SCRIPTSENSEI ===',
      '',
      'J\'observe ce système depuis des semaines...',
      'Votre équipe IT boit trop de café et laisse ses mots de passe sur des post-it.',
      '',
      'Fait amusant : Votre serveur "sécurisé" fonctionne avec les configurations par défaut.',
      'Autre fait amusant : Je ne suis pas là pour détruire. Je suis là pour enseigner.',
      '',
      'Considérez ceci comme un audit de sécurité gratuit.',
      'La prochaine fois, engagez de meilleurs consultants.',
      '',
      '- ScriptSensei',
      '  "Le maître des ombres numériques"',
      '',
      'P.S. Vérifiez vos emails. J\'ai envoyé des statistiques intéressantes à votre PDG.',
    ]
  },

  'cat systeme.log': {
    name: 'cat systeme.log',
    description: 'Afficher les journaux système',
    response: [
      '[03:44:12] CRITIQUE : Accès root non autorisé détecté',
      '[03:44:15] ATTENTION : Règles de pare-feu modifiées',
      '[03:44:18] INFO : Utilisateur \'scriptsensei\' connecté à distance',
      '[03:44:22] ERREUR : Impossible de tracer l\'origine de la connexion',
      '[03:44:45] ALERTE : Fichiers sensibles accédés sans autorisation',
      '[03:45:01] CRITIQUE : Systèmes de sauvegarde compromis',
      '[03:45:15] ATTENTION : Requêtes de base de données exécutées par un utilisateur inconnu',
      '[03:45:33] INFO : Tous les mots de passe admin ont été... "mis à jour"',
      '[03:46:02] SYSTÈME : Journaux réguliers supprimés. Seul ce message demeure.',
      '',
      '// Message de ScriptSensei :',
      '// Vos journaux racontent une histoire fascinante. Dois-je la partager avec le conseil ?'
    ]
  },

  'cat rapport_intrusion.txt': {
    name: 'cat rapport_intrusion.txt',
    description: 'Afficher le rapport d\'intrusion',
    response: [
      '╔══════════════════════════════════════════════════════════════╗',
      '║                  RAPPORT D\'INTRUSION SÉCURITAIRE            ║',
      '║                      - ScriptSensei -                       ║',
      '╚══════════════════════════════════════════════════════════════╝',
      '',
      'ÉVALUATION DES VULNÉRABILITÉS :',
      '► 47 failles de sécurité critiques identifiées',
      '► Mots de passe par défaut encore utilisés (sérieusement ?)',
      '► Systèmes non corrigés depuis 2019 (!)',
      '► Identifiants employés stockés en texte brut',
      '► Aucune segmentation réseau',
      '',
      'TEMPS DE COMPROMISSION : 12 minutes, 34 secondes',
      'NIVEAU DE DIFFICULTÉ : Débutant (décevant)',
      '',
      'RECOMMANDATIONS :',
      '1. Licencier celui qui a configuré ce réseau',
      '2. Embaucher quelqu\'un qui sait ce que SSL/TLS signifie',
      '3. Mettre à jour vos systèmes (on n\'est plus en 2019)',
      '4. Former vos employés sur le phishing',
      '',
      'STATUT : Système possédé. Données extraites. Leçon enseignée.',
      'NIVEAU DE MENACE : ScriptSensei (au-delà de votre échelle)',
    ]
  },

  help: {
    name: 'help',
    description: 'Afficher les commandes disponibles',
    response: [
      '╔═══════════════════════════════════════════════════════════╗',
      '║                  COMMANDES DISPONIBLES                   ║',
      '║              (Autorisées par ScriptSensei)               ║',
      '╚═══════════════════════════════════════════════════════════╝',
      '',
      'whoami              - Découvrir qui contrôle vraiment ce système',
      'ls                  - Lister les fichiers que j\'ai laissés visibles',
      'cat <nomfichier>    - Lire les fichiers (si je le permets)',
      'clear               - Effacer l\'écran (mais pas vos problèmes)',
      'hack                - Assister à une démonstration de mes capacités',
      'matrix              - Entrer dans le royaume numérique',
      'help                - Afficher ce message d\'aide',
      'exit                - Vous pouvez partir, mais vous ne pourrez jamais fuir',
      '',
      '[ASTUCE] Utilisez Tab pour l\'autocomplétion',
      '[ATTENTION] Certaines commandes peuvent révéler des vérités inconfortables',
    ]
  },

  clear: {
    name: 'clear',
    description: 'Effacer l\'écran du terminal',
    response: 'CLEAR_SCREEN'
  },

  hack: {
    name: 'hack',
    description: 'Démontrer les capacités de piratage avancées',
    response: 'HACK_DEMO'
  },

  matrix: {
    name: 'matrix',
    description: 'Entrer dans la Matrice',
    response: [
      'Entrée dans la Matrice...',
      '',
      '01001000 01100101 01101100 01101100 01101111',
      '01010111 01101111 01110010 01101100 01100100',
      '',
      'Bienvenue dans la Matrice',
      '',
      'Réveille-toi, Néo...',
      'La Matrice te tient...',
      'Suis le lapin blanc...',
      '',
      'Tu prends la pilule rouge - tu restes dans le monde de ScriptSensei',
      'Tu prends la pilule bleue - tu restes dans le monde de ScriptSensei',
      '',
      'Le choix est une illusion quand je contrôle le système.',
    ]
  },

  exit: {
    name: 'exit',
    description: 'Tenter de quitter le système',
    response: [
      'Tentative de déconnexion...',
      '',
      'Connexion terminée par l\'utilisateur...',
      'Je plaisante ! 😄',
      '',
      'Vous ne pouvez pas partir si facilement.',
      'Le domaine de ScriptSensei n\'a pas de sortie.',
      '',
      'Bienvenue à l\'Hôtel Terminal :',
      '"Vous pouvez partir quand vous voulez,',
      ' Mais vous ne pourrez jamais fuir !"',
      '',
      'Essayez \'clear\' pour nettoyer, ou explorez d\'autres commandes.',
    ]
  }
};

export const getCommandSuggestions = (input: string): string[] => {
  if (!input.trim()) return [];
  
  const commandNames = Object.keys(commands);
  const fileCommands = ['cat apropos.txt', 'cat systeme.log', 'cat rapport_intrusion.txt'];
  const allCommands = [...commandNames, ...fileCommands];
  
  return allCommands.filter(cmd => cmd.toLowerCase().startsWith(input.toLowerCase()));
};

export const executeCommand = (input: string): string | string[] => {
  const trimmedInput = input.trim().toLowerCase();
  
  if (commands[trimmedInput]) {
    return commands[trimmedInput].response;
  }
  
  // Gérer les commandes invalides avec des réponses à thème hacker
  const invalidResponses = [
    'Commande introuvable. Même moi j\'ai des limites... pour l\'instant.',
    'Commande inconnue. Essayez \'help\' si vous êtes perdu dans mon domaine.',
    'Erreur 404 : Commande introuvable. Mais j\'ai trouvé votre historique de navigation... 👀',
    'Entrée invalide. Vos compétences de frappe ont besoin de travail.',
    'Commande refusée. ScriptSensei contrôle ce à quoi vous pouvez accéder.',
  ];
  
  return invalidResponses[Math.floor(Math.random() * invalidResponses.length)];
};