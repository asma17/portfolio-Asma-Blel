import React from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import { Mail, Phone, MapPin, Download, Cpu } from 'lucide-react';
import profileImg from './assets/avatar.jpg';

function Project({ title, description, items, stack, clients }) {
  return (
    <div>
      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>{title}</h4>
      {description && (
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: '4px', fontStyle: 'italic' }}>{description}</p>
      )}
      <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: '6px' }}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <strong>Stack :</strong> {stack} <br />
        <strong>Clients :</strong> {clients}
      </p>
    </div>
  );
}

function Experience({ title, period, children }) {
  return (
    <div className="content-card" style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>{title}</h3>
        <span style={{ fontSize: '0.9rem', color: '#2563eb', fontWeight: 600 }}>{period}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <BackgroundAnimation />

      <div className="portfolio-wrapper">
        {/* EN-TÊTE / PROFIL PRINCIPAL */}
        <header className="header-section">
          <img src={profileImg} alt="Asma Blel" className="profile-img" />
          <div className="header-text">
            <h1>Asma Blel</h1>
            <h2>Développeuse Web Senior PHP & Symfony (+10 ans d'expérience)</h2>
            
            <div className="contacts-list">
              <a href="mailto:asmaablel@gmail.com" className="contact-item">
                <Mail size={16} color="#2563eb" /> asmaablel@gmail.com
              </a>
              <span className="contact-item">
                <Phone size={16} color="#2563eb" /> +216 97 211 844
              </span>
              <span className="contact-item">
                <MapPin size={16} color="#2563eb" /> Tunisie
              </span>
              {/* LIEN LINKEDIN AVEC SVG NATIF SÉCURISÉ */}
              <a 
                href="https://www.linkedin.com/in/asma-blel-82a904141/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#2563eb" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            <a 
              href={`${import.meta.env.BASE_URL}Asma_Blel_CV_Senior_Symfony.pdf`} 
              download="Asma_Blel_CV_Senior_Symfony.pdf" 
              className="btn-download"
            >
              <Download size={16} /> Télécharger mon CV (PDF)
            </a>
          </div>
        </header>

        <main>
          {/* PROFIL */}
          <section>
            <h2 className="handwritten-title">Profil</h2>
            <div className="content-card">
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                Développeuse Web Senior Back-end PHP / Symfony (<strong>+10 ans d'expérience</strong>) spécialisée dans le développement d'applications web robustes, maintenables et scalables. Maîtrise approfondie de <strong>PHP</strong>, <strong>Symfony</strong>, <strong>Doctrine ORM</strong>, des <strong>API REST</strong> et de <strong>Git</strong>, ainsi que de l'IDE <strong>Cursor</strong> et d'agents sur mesure pour accélérer le développement, l'optimisation et le refactoring.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', marginTop: '12px', color: 'var(--text-secondary)' }}>
                <strong>Références projets grands comptes :</strong> La Poste française, La Banque Postale, Crédit Agricole, CDC Habitat, Covéa, Pierre Fabre, Attijari Bank, DDB, Alchimie, Baker McKenzie, Meeschaert.
              </p>
            </div>
          </section>

          {/* WORKFLOW IA & SÉCURITÉ */}
          <section>
            <h2 className="handwritten-title">Workflow IA & Sécurité</h2>
            <div className="content-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', marginBottom: '12px', color: '#0f172a', fontWeight: 700 }}>
                <Cpu size={24} color="#2563eb" /> Ingénierie Augmentée & SecOps
              </h3>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '12px' }}>
                Utilisation quotidienne de <strong>Cursor</strong> (IDE assisté par IA), du prompting et d'agents sur mesure pour accélérer le développement, l'optimisation et le refactoring, avec un contrôle qualité continu (<strong>PHPStan</strong>, revue de code).
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
                Titulaire d'un Master en Sécurité des Systèmes d'Information (normes <strong>ISO 27001 / 27002 / 27005</strong>), j'intègre la sécurité applicative dès la conception : Voters Symfony, <strong>JWT</strong>, <strong>OAuth 2.0</strong>, LDAP.
              </p>
            </div>
          </section>

          {/* COMPÉTENCES PAR CATEGORIES */}
          <section>
            <h2 className="handwritten-title">Compétences</h2>
            <div className="skills-grid">
              
              <div className="skill-col">
                <div className="skill-header">Back-end</div>
                <ul className="skill-list">
                  <li>PHP natif (5.6 à 8.1)</li>
                  <li>Symfony (2.8 à 6.4)</li>
                  <li>API REST, API Platform, Swagger</li>
                  <li>Doctrine ORM / DBAL</li>
                  <li>Sécurité : Voters, JWT, OAuth 2.0</li>
                  <li>LDAP & tâches planifiées (Cron)</li>
                </ul>
              </div>

              <div className="skill-col">
                <div className="skill-header">Front-end & Intégration</div>
                <ul className="skill-list">
                  <li>JavaScript / jQuery</li>
                  <li>HTML5 / CSS3 / Bootstrap</li>
                  <li>Twig & Webpack Encore</li>
                  <li>Intégration Figma</li>
                  <li>Notions : Angular 19, AngularJS, ReactJS</li>
                </ul>
              </div>

              <div className="skill-col">
                <div className="skill-header">DevOps, IA & Qualité</div>
                <ul className="skill-list">
                  <li>Git / GitLab, GitLab CI/CD</li>
                  <li>Docker (notions)</li>
                  <li>Cursor (IDE assisté par IA) & Prompting</li>
                  <li>PHPStan & revue de code</li>
                  <li>Optimisation</li>
                </ul>
              </div>

              <div className="skill-col">
                <div className="skill-header">Données & Méthodes</div>
                <ul className="skill-list">
                  <li>MySQL & SQL Server</li>
                  <li>Agilité / Scrum</li>
                  <li>Jira, Confluence, Trello</li>
                  <li>Rédaction & analyse de cahiers des charges</li>
                </ul>
              </div>

            </div>
          </section>

          {/* EXPÉRIENCES COMPLÈTES */}
          <section>
            <h2 className="handwritten-title">Expériences</h2>

            <Experience title="Développeuse Web Senior — Netisse (Télétravail)" period="Juin 2020 - Présent">
              <Project
                title="Welcome Touch Screen (système d'accueil bancaire)"
                description="Gestion de files d'attente en agence bancaire (bornes, écrans conseillers, affichage TV)."
                items={[
                  'Réalisé le module statistique : tableaux de bord managers, graphiques amCharts / SVGGraph, exports PDF / CSV.',
                  'Développé les différents modules du back-office : catégories, motifs, sites, bornes, configurations, conseillers.',
                  "Migré l'affichage de la file d'attente et la borne vers la nouvelle charte graphique, à partir des maquettes Figma.",
                  'Fait évoluer ponctuellement les interfaces front (AngularJS).',
                ]}
                stack="PHP 7/8.1, AngularJS, amCharts, SVGGraph"
                clients="Crédit Agricole (réseau d'agences), Attijari Bank"
              />

              <Project
                title="Welcome Hospitality (bornes & dashboard)"
                description="Plateforme d'accueil visiteur combinant des bornes interactives (Angular) et un back-office de pilotage et statistiques (API PHP)."
                items={[
                  "Conçu l'API REST et le back-office de configuration multi-sites (sites, bornes, utilisateurs, motifs, orientations).",
                  'Livré le module statistique du back-office et contribué aux interfaces tactiles en Angular 19.',
                ]}
                stack="PHP 8.1 (API REST), Angular 19, MySQL"
                clients="CDC Habitat, Selha Group, Constructel"
              />

              <Project
                title="Welcome Event (plateforme événementielle)"
                description="Plateforme mettant en relation organisateurs, prestataires et auditeurs pour des événements durables."
                items={[
                  'Construit les modules du back-office : gestion des utilisateurs, des devis, des audits, des labels et des pages.',
                  'Intégré ces fonctionnalités côté front (Twig) pour les organisateurs et les prestataires.',
                ]}
                stack="PHP 7.2, Symfony 5.4, Doctrine ORM, Twig, Dompdf, Webpack Encore, API Platform"
                clients="Beevent"
              />

              <Project
                title="Gestion d'identité de marque (Brand Center)"
                description="Portail sécurisé de charte graphique et de ressources de marque, avec un back-office éditorial."
                items={[
                  'Mis en place le back-office : gestion des rôles et accès, hub éditorial, médiathèque, export PDF, recherche Algolia.',
                  'Intégré les fonctionnalités sur le portail front.',
                ]}
                stack="PHP 8.1, Symfony 6.4, Doctrine, Twig, Algolia, Docker, MySQL"
                clients="La Poste française, Covéa"
              />

              <Project
                title="Support & Ticketing"
                description="Plateforme de gestion des tickets de support."
                items={[
                  'Modélisé le back-office : questionnaires dynamiques, workflow de statuts et priorités, traitement des tickets.',
                  'Mis en place les échanges par commentaires et les notifications email, puis intégré le front (Twig).',
                ]}
                stack="PHP 8.0, Symfony 5.4, Doctrine, Twig, Webpack Encore, MySQL"
                clients="La Poste française & Pierre Fabre"
              />

              <Project
                title="Agenda d'événements"
                description="Plateforme de gestion d'événements multi-sites."
                items={[
                  "Développé le back-office d'administration : événements, inscriptions, utilisateurs, rôles et statistiques.",
                  'Conçu les API sécurisées puis intégré le front (Twig).',
                ]}
                stack="PHP 8.0, Symfony 5.4, Doctrine, Twig, MySQL"
                clients="La Banque Postale"
              />

              <Project
                title="Site institutionnel Netisse (netisse.fr)"
                description="Site vitrine multilingue FR/EN présentant les solutions de l'entreprise."
                items={[
                  'Développé le site et sa gestion de contenu multilingue FR/EN (Symfony Translation).',
                ]}
                stack="PHP 8.1, Symfony 5.4, Doctrine, Twig, MySQL"
                clients="Netisse"
              />

              <Project
                title="OLA Event"
                items={[
                  "Développement d'une application web qui relie la vitrine d'une agence événementielle, l'espace de ses clients et l'outil interne de suivi des projets. Elle permet de présenter l'offre, de recueillir une demande, puis de faire vivre le projet jusqu'à sa réalisation : propositions, documents, échanges et suivi, chacun selon son rôle.",
                ]}
                stack="PHP 7.1, Symfony 6.4, Git, Cursor IA, MySQL"
                clients="Ola"
              />
            </Experience>

            <Experience title="Développeuse Web — GoldenMarket & AHR Consulting (Hybride)" period="Octobre 2019 - Juin 2020">
              <Project
                title="Application immobilière"
                description="Plateforme web de gestion et de publication d'annonces immobilières."
                items={[
                  'Développé la création et la publication des annonces (descriptif, caractéristiques, photos, prix).',
                  'Mis en place la gestion des espaces publicitaires (bannières).',
                ]}
                stack="PHP 7.1, Symfony 4, ReactJS, Doctrine, Twig, Bootstrap, MySQL"
                clients="GoldenMarket"
              />

              <Project
                title="Application e-commerce"
                description="Boutique en ligne de stores et d'équipements sur mesure."
                items={[
                  'Fait évoluer les fonctionnalités existantes de la plateforme.',
                  'Développé les modules de gestion des produits et des catégories du catalogue.',
                ]}
                stack="PHP 7.1, Symfony 4, Sylius, ReactJS, Doctrine, Twig, MySQL"
                clients="StoresDiscount"
              />
            </Experience>

            <Experience title="Développeuse Web & Lead Technique — AppsFactor & WTS-Solutions (Sur site)" period="Février 2015 - Septembre 2019">
              <Project
                title="Enso — Plateforme de gestion des collaborateurs"
                description="Application multi-départements dédiée au parcours d'intégration des collaborateurs, utilisée par jusqu'à 20 000 utilisateurs."
                items={[
                  "Lead technique d'une équipe de 4 à 5 développeurs : répartition des tâches, suivi des développements, tests et déploiements.",
                  'Conçu et développé les fonctionnalités de la plateforme et les intégrations avec les systèmes tiers (LDAP, Office 365, Google Calendar, Zendesk).',
                  'Rédigé la documentation technique, assuré le support et la relation technique directe avec les clients.',
                ]}
                stack="PHP 5.6/7, Symfony 2.8 / 3 / 4, LDAP, Office 365, Doctrine, MySQL, Confluence, Trello"
                clients="DDB, Alchimie, Baker McKenzie, Wilo, Lanvin, Meeschaert"
              />

              <Project
                title="EasyOnBoard — Plateforme de gestion des recrutements"
                description="SaaS multi-entreprises de gestion de l'onboarding candidat pour cabinets de recrutement."
                items={[
                  'Pris en charge le projet de bout en bout : rédaction du cahier des charges, conception et développement.',
                  "Conçu l'architecture multi-clients avec espaces dédiés (superviseurs, managers, candidats).",
                  'Intégré les API Google Calendar et Outlook Calendar pour la planification des rendez-vous.',
                ]}
                stack="PHP 7, Symfony 3, API Google Calendar, API Outlook Calendar, Confluence"
                clients="Cabinet Syntec France"
              />

              <Project
                title="WhoIsWho"
                description="Annuaire d'entreprise synchronisé avec l'annuaire LDAP."
                items={[
                  "Réalisé l'application de bout en bout : back-office, thème graphique et intégration front.",
                  'Développé la synchronisation LDAP et l\'automatisation des tâches de fond (commandes CRON).',
                ]}
                stack="LDAP, PHP 7, Symfony 3, MySQL, jQuery, Confluence"
                clients="DDB France"
              />
            </Experience>
          </section>

          {/* DIPLÔMES */}
          <section>
            <h2 className="handwritten-title">Diplômes</h2>
            <div className="timeline-vertical">

              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <span className="timeline-year">2010 - 2012</span>
                <div className="timeline-card">
                  <h3>Master Pro. Sécurité des SI</h3>
                  <p>Mention Très Bien — ISG Tunis</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>PFE : Sécurité des SI selon les normes ISO 27001, 27002 et 27005 chez Tunisie Telecom</p>
                </div>
              </div>

              <div className="timeline-item right">
                <div className="timeline-dot"></div>
                <span className="timeline-year">2007 - 2010</span>
                <div className="timeline-card">
                  <h3>Licence Informatique de Gestion</h3>
                  <p>Mention Bien — ISG Tunis</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>PFE : Application de gestion du parc informatique en VB.NET et SQL Server chez la STEG</p>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <span className="timeline-year">2007</span>
                <div className="timeline-card">
                  <h3>Baccalauréat Économie et Gestion</h3>
                  <p>Mention Bien</p>
                </div>
              </div>

            </div>
          </section>

          {/* LANGUES */}
          <section>
            <h2 className="handwritten-title">Langues</h2>
            <div className="languages-grid">
              
              <div className="lang-card">
                <img src="https://flagcdn.com/w160/tn.png" alt="Drapeau Tunisie" className="lang-flag-img" />
                <div className="lang-title">Arabe</div>
                <div className="lang-level">Langue Maternelle</div>
              </div>

              <div className="lang-card">
                <img src="https://flagcdn.com/w160/fr.png" alt="Drapeau France" className="lang-flag-img" />
                <div className="lang-title">Français</div>
                <div className="lang-level">Courant</div>
              </div>

              <div className="lang-card">
                <img src="https://flagcdn.com/w160/gb.png" alt="Drapeau Royaume-Uni" className="lang-flag-img" />
                <div className="lang-title">Anglais</div>
                <div className="lang-level">Bon niveau technique</div>
              </div>

            </div>
          </section>

          {/* CENTRES D'INTÉRÊT */}
          <section>
            <h2 className="handwritten-title">Centres d'intérêt</h2>
            <div className="content-card">
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                Suivi des nouveautés IA · Lecture · Sport
              </p>
            </div>
          </section>
        </main>

        <footer>
          <p>© 2026 Asma Blel — Développé avec React & Déployé via GitHub Actions</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
