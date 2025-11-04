export default function MentionsLegales() {
  return (
    <section style={{ textAlign: 'left', maxWidth: 900, margin: '0 auto', padding: '1rem' }}>
      <h2>Mentions légales</h2>

      <h3>Éditeur du site</h3>
      <p>
        Ce projet est réalisé à des fins pédagogiques pour servir d’exemple auprès d’une promotion Ada Tech School.
      </p>

      <h3>Responsable de la publication</h3>
      <p>Anaïs</p>

      <h3>Contact</h3>
      <p>
        Pour toute question, vous pouvez contacter l’autrice via le site
        {' '}<a href="https://anais-formation-tech.fr" target="_blank" rel="noreferrer">anais-formation-tech.fr</a>.
      </p>

      <h3>Hébergement</h3>
      <p>
        Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États‑Unis.
        {' '}<a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>
      </p>

      <h3>Propriété intellectuelle</h3>
      <p>
        Les contenus et éléments graphiques de ce projet sont fournis dans un cadre pédagogique. Toute réutilisation
        doit mentionner la source et respecter les licences des données publiques utilisées.
      </p>

      <h3>Données personnelles</h3>
      <p>
        Ce site ne collecte pas de données personnelles nominatives. Les journaux techniques de la plateforme d’hébergement
        peuvent toutefois enregistrer des informations non nominatives (adresses IP, événements techniques) pour des besoins
        de sécurité et de performance.
      </p>

      <h3>Cookies</h3>
      <p>
        Aucune mesure d’audience intrusive n’est mise en place. Les cookies éventuellement nécessaires au fonctionnement
        technique de l’application sont limités au strict nécessaire.
      </p>

      <h3>Limitation de responsabilité</h3>
      <p>
        Les visualisations et agrégations sont produites à partir de données publiques. Malgré le soin apporté, des erreurs
        ou inexactitudes peuvent subsister. L’autrice ne saurait être tenue responsable de l’usage qui en est fait.
      </p>

      <p style={{ marginTop: '2rem', color: '#555' }}>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
    </section>
  )
}


