import React from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import { Mail, Phone, MapPin, Download, Cpu } from 'lucide-react';
import profileImg from './assets/avatar.jpg';

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
            <h2>Développeuse PHP & Symfony Senior (+10 ans d'expérience)</h2>
            
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
                Développeuse Web Senior spécialisée dans la conception d'architectures back-end robustes et d'APIs REST scalables. Forte de <strong>plus de 10 ans d'expérience</strong> au service de grands comptes et d'éditeurs de premier plan (La Poste, Crédit Agricole, Covéa, CDC Habitat, Attijari Bank), j'associe la rigueur technique de l'écosystème <strong>Symfony</strong> à des méthodes de développement moderne augmentées par l'Intelligence Artificielle.
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
                Intégration quotidienne de <strong>Cursor IA</strong> et conception d'agents autonomes sur mesure pour accélérer le développement d'APIs, automatiser les tests end-to-end (Playwright) et optimiser les performances logicielles.
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
                Titulaire d'un Master en Sécurité des Systèmes d'Information, j'applique rigoureusement les normes de conformité <strong>ISO 27001 / 27002 / 27005</strong> et garantis l'étanchéité applicative (JWT, Guard, LDAP) dès la phase de conception.
              </p>
            </div>
          </section>

          {/* COMPÉTENCES PAR CATEGORIES */}
          <section>
            <h2 className="handwritten-title">Compétences</h2>
            <div className="skills-grid">
              
              <div className="skill-col">
                <div className="skill-header">Web & Architecture</div>
                <ul className="skill-list">
                  <li>PHP (5.6 à 8+)</li>
                  <li>Symfony (2.8 à 6.4)</li>
                  <li>APIs REST & Auth JWT</li>
                  <li>Doctrine ORM / DBAL</li>
                  <li>Clean Architecture / DDD</li>
                  <li>Twig & Webpack Encore</li>
                </ul>
              </div>

              <div className="skill-col">
                <div className="skill-header">Données & Systèmes</div>
                <ul className="skill-list">
                  <li>MySQL & SQL Server</li>
                  <li>Annuaire LDAP & Cron</li>
                  <li>Algolia Search Engine</li>
                  <li>Dompdf & PhpSpreadsheet</li>
                </ul>
              </div>

              <div className="skill-col">
                <div className="skill-header">IA & DevOps</div>
                <ul className="skill-list">
                  <li>Cursor IA</li>
                  <li>Agents IA dédiés</li>
                  <li>Git / GitLab CI-CD</li>
                  <li>Playwright E2E</li>
                </ul>
              </div>

              <div className="skill-col">
                <div className="skill-header">Front-End & Gestion</div>
                <ul className="skill-list">
                  <li>JavaScript / jQuery</li>
                  <li>Bootstrap / HTML5 / CSS3</li>
                  <li>Niveau Angular 19 & React</li>
                  <li>Agilité Scrum / Jira</li>
                </ul>
              </div>

            </div>
          </section>

          {/* EXPÉRIENCES COMPLÈTES */}
          <section>
            <h2 className="handwritten-title">Expériences</h2>

            {/* Netisse */}
            <div className="content-card" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>Développeur Web Senior — Netisse (Télétravail)</h3>
                <span style={{ fontSize: '0.9rem', color: '#2563eb', fontWeight: 600 }}>Juin 2020 - Présent</span>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>
                Conception et développement de solutions logicielles et plateformes web sur mesure pour des clients prestigieux. Avec l'intégration active de <strong>Cursor IA</strong>, création d'<strong>agents IA</strong> dédiés et gestion des dépôts <strong>Git</strong>.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* 1. Welcome Hospitality */}
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>Produit Welcome Hospitality (Bornes & Dashboard)</h4>
                  <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: '6px' }}>
                    <li>Développement d'une application multi-modules pour gérer l'accueil digital en agence (interfaces tactiles, écrans de veille).</li>
                    <li>Configuration des sites, bornes, contenus, utilisateurs/droits via un back-office et mesure d'usage via le module statistique.</li>
                  </ul>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <strong>Stack:</strong> PHP (API REST), Angular 19, HTML/CSS, Git, GitLab, MySQL, Cursor IA <br />
                    <strong>Clients:</strong> CDC Habitat, Selha Group, Constructel
                  </p>
                </div>

                {/* 2. Welcome Touch Screen */}
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>Produit Welcome Touch Screen (Système d'accueil bancaire)</h4>
                  <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: '6px' }}>
                    <li>Développement d'un système de gestion de files d'attente pour les agences bancaires digitalisant le parcours client dès l'entrée.</li>
                    <li>Orchestration de la file d'attente côté conseillers, outils de pilotage statistiques pour managers et affichage TV dynamique pour le client.</li>
                  </ul>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <strong>Stack:</strong> PHP, TCPDF, amCharts, SVGGraph, jQuery, Bootstrap, AngularJS, Git, Cursor IA, MySQL <br />
                    <strong>Clients:</strong> Crédit Agricole, Attijari Bank
                  </p>
                </div>

                {/* 3. Welcome Event */}
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>Produit Welcome Event (Plateforme Événementielle)</h4>
                  <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: '6px' }}>
                    <li>Plateforme métier mettant en relation organisateurs, prestataires et auditeurs pour des événements durables (devis, audits, labels).</li>
                  </ul>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <strong>Stack:</strong> PHP 7.2, Symfony 5.4, Doctrine ORM, Twig, Algolia, Dompdf, Webpack Encore, Git, Cursor IA <br />
                    <strong>Clients:</strong> Beevent
                  </p>
                </div>

                {/* 4. Produit Web & Platforms */}
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>Produit Web & Platforms</h4>
                  
                  <div style={{ marginLeft: '10px', marginTop: '6px' }}>
                    <p style={{ fontSize: '0.93rem', fontWeight: 600, color: '#0f172a' }}>Application pour la gestion d'identité de marque :</p>
                    <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: '6px' }}>
                      <li>Conception de la plateforme centralisée de gestion d'identité de marque avec portail sécurisé et back-office éditorial.</li>
                      <li>Gestion fine des rôles et accès, hub éditorial, export PDF, recherche haute performance (Algolia) et intégration multimédia.</li>
                    </ul>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      <strong>Stack:</strong> PHP 8.1, Symfony 6.4, Doctrine, Twig, Bootstrap, Webpack Encore, Git, MySQL <br />
                      <strong>Clients:</strong> La Poste française (Brand Center), Covéa
                    </p>

                    <p style={{ fontSize: '0.93rem', fontWeight: 600, color: '#0f172a' }}>Application pour le Support & Ticketing :</p>
                    <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: '6px' }}>
                      <li>Création d'une plateforme centralisée de gestion de tickets avec création de questionnaires dynamiques, workflow de statuts, priorités, traitement en back-office et échanges par commentaires et emails.</li>
                    </ul>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      <strong>Stack:</strong> PHP 8.0, Symfony 5.4, Doctrine, Twig, Bootstrap, Webpack Encore, Git, MySQL <br />
                      <strong>Clients:</strong> Netisse
                    </p>

                    <p style={{ fontSize: '0.93rem', fontWeight: 600, color: '#0f172a' }}>Application Agenda d'événements :</p>
                    <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: '6px' }}>
                      <li>Développement d'un back-office d'administration et mise en place des API sécurisées pour la gestion d'événements multi-sites, inscriptions, génération de fichiers ICS et statistiques.</li>
                    </ul>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      <strong>Stack:</strong> PHP 8.0, Symfony 5.4, Doctrine, Twig, Bootstrap, Webpack Encore, Git, MySQL <br />
                      <strong>Client:</strong> La banque postale française
                    </p>

                    <p style={{ fontSize: '0.93rem', fontWeight: 600, color: '#0f172a' }}>Application OLA Event :</p>
                    <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: '6px' }}>
                      <li>Développement d'une application web qui relie la vitrine d'une agence événementielle, l'espace de ses clients et l'outil interne de suivi des projets. Elle permet de présenter l'offre, de recueillir une demande, puis de faire vivre le projet jusqu'à sa réalisation : propositions, documents, échanges et suivi, chacun selon son rôle.</li>
                    </ul>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <strong>Stack:</strong> PHP 7.1, Symfony 6.4, Git, Cursor IA, MySQL <br />
                      <strong>Client:</strong> Ola
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* Golden Market & AHRConsulting */}
            <div className="content-card" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>Développeuse Web — Golden Market & AHRConsulting (Télétravail)</h3>
                <span style={{ fontSize: '0.9rem', color: '#2563eb', fontWeight: 600 }}>Octobre 2019 - Juin 2020</span>
              </div>
              <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Plateforme Immobilière :</strong> Conception d'une solution de gestion immobilière et rédaction de cahiers des charges. <em>Stack : Symfony 4, Sylius, Zend, ReactJS, Git, MySQL.</em></li>
                <li><strong>E-commerce (StoresDiscount) :</strong> Développement et maintenance évolutive des modules e-commerce et parcours utilisateurs. <em>Stack : Symfony 4, Sylius, Zend, ReactJS.</em></li>
              </ul>
            </div>

            {/* Appsfactor & WTS-Solutions */}
            <div className="content-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>Développeuse Web & Lead Technique — Appsfactor & WTS-Solutions (Bizerte)</h3>
                <span style={{ fontSize: '0.9rem', color: '#2563eb', fontWeight: 600 }}>Février 2015 - Septembre 2019</span>
              </div>
              <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>ENSO & WhoIsWho :</strong> Gestion des employés et annuaire d'entreprise basé sur LDAP avec commandes CRON. Rôle de Lead d'une équipe de 4 à 5 personnes. <em>Stack : Symfony 2.8/3/4, PHP 7, MySQL, jQuery, Bootstrap, API Google & Outlook Calendar, Jira, Confluence. (Clients : DDB, Alchimie, Baker McKenzie, Cabinet Syntec France).</em></li>
                <li><strong>EasyOnBoard :</strong> Solution SaaS multi-entreprises pour cabinets de recrutement pilotant l'onboarding de candidats. <em>Stack : PHP 7, Symfony 3, API Google & Outlook Calendar.</em></li>
              </ul>
            </div>
          </section>

          {/* DIPLÔMES */}
          <section>
            <h2 className="handwritten-title">Diplômes</h2>
            <div className="timeline-vertical">

              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <span className="timeline-year">2012 - 2014</span>
                <div className="timeline-card">
                  <h3>Master Pro. Sécurité des SI</h3>
                  <p>Mention Très Bien — ISG Tunis</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>ISO 27001/27002/27005 chez Tunisie Telecom</p>
                </div>
              </div>

              <div className="timeline-item right">
                <div className="timeline-dot"></div>
                <span className="timeline-year">2008 - 2011</span>
                <div className="timeline-card">
                  <h3>Licence Informatique de Gestion</h3>
                  <p>Mention Bien — ISG Tunis</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>Gestion de parc chez la STEG</p>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <span className="timeline-year">2007</span>
                <div className="timeline-card">
                  <h3>Baccalauréat Économie et Gestion</h3>
                  <p>Mention Bien — Promotion 2007</p>
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
                <div className="lang-level">Niveau Intermédiaire</div>
              </div>

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