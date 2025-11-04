import { Link } from 'react-router-dom'

export default function Accueil() {
  return (
    <div>
      <section
        aria-label="Hero"
        style={{
          padding: '6rem 1.5rem',
          background:
            'radial-gradient(1200px 600px at 10% -10%, rgba(136,132,216,0.25), rgba(0,0,0,0)) , radial-gradient(800px 400px at 90% 10%, rgba(130,202,157,0.25), rgba(0,0,0,0))',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', lineHeight: 1.2, margin: 0 }}>Dataviz Cinéma – France</h1>
        <p style={{ maxWidth: 780, margin: '1rem auto 2rem', fontSize: '1.1rem' }}>
          Visualisez l’activité cinématographique à travers les lieux de tournage à Paris: tendances par année, types de tournage, arrondissements, réalisateurs et plus encore.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/analyse"
            style={{
              backgroundColor: '#111',
              color: '#fff',
              padding: '0.85rem 1.25rem',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Explorer les analyses
          </Link>
          <Link
            to="/presentation"
            style={{
              backgroundColor: 'transparent',
              color: '#111',
              border: '1px solid #ddd',
              padding: '0.85rem 1.25rem',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            En savoir plus
          </Link>
        </div>
      </section>

      <section aria-label="Points forts" style={{ padding: '3rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          <FeatureCard title="Tendances annuelles" description="Nombre de tournages par année pour repérer les pics d’activité." />
          <FeatureCard title="Types de tournage" description="Long métrage, Série TV, Téléfilm… suivez l’évolution par type." />
          <FeatureCard title="Carte des arrondissements" description="Répartition des tournages par arrondissement parisien." />
          <FeatureCard title="Top réalisateurs" description="Classement des réalisateurs les plus présents à Paris." />
        </div>
      </section>
    </div>
  )
}

type FeatureProps = { title: string; description: string }

function FeatureCard({ title, description }: FeatureProps) {
  return (
    <article
      style={{
        border: '1px solid #eee',
        borderRadius: 12,
        padding: '1rem',
        background: '#fff',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
      }}
    >
      <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem' }}>{title}</h3>
      <p style={{ margin: 0, color: '#444' }}>{description}</p>
    </article>
  )
}


