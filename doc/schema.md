```` mermaid
flowchart LR
    A[Planification] --> B[Configuration du Projet]
    B --> C[Développement des fonctionnalités]
    
    C -->|Page d'Accueil| H[Conception UI]
    H --> I[Développement du feed]
    H --> R[Développement autres features]
    R --> J[Tests et validation]
    I --> J[Tests et validation]
    
    C -->|Page Gallery| K[Conception UI]
    K --> L[Développement de la galerie]
    K --> S[Développement autres features]
    S --> J[Tests et validation]
    L --> J[Tests et validation]
    
    C -->|Page Jeux| N[Conception UI]
    N --> O[Développement des jeux]
    O --> J[Tests et validation]

    J --> P[Revues de code et corrections]
    



