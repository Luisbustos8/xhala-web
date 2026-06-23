import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Aviso Legal | Xhala Pilates y Osteopatía',
  description: 'Aviso legal y datos de identificación de Xhala Pilates y Osteopatía.',
};

export default function LegalNotice() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8 text-black font-caveat">Aviso Legal</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-800">
              <strong>Aviso Legal:</strong> Este documento es una plantilla informativa y no constituye asesoramiento legal. 
              Se recomienda encarecidamente que este aviso legal sea revisado y aprobado por un abogado especializado 
              en derecho digital para garantizar su cumplimiento con la normativa vigente (LSSI, RGPD, etc.).
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">1. Datos de Identificación</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad 
              de la Información y Comercio Electrónico (LSSI), se informa:
            </p>
            <ul>
              <li><strong>Titular:</strong> Xhala Pilates y Osteopatía</li>
              <li><strong>Dirección:</strong> C. de Mariano González, 14, 28600 Navalcarnero, Madrid, España</li>
              <li><strong>Email:</strong> Xhalapilates@gmail.com</li>
              <li><strong>Teléfono:</strong> +34 630 60 97 81</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">2. Finalidad del Sitio Web</h2>
            <p>
              Este sitio web tiene como finalidad proporcionar información sobre los servicios de Pilates y Osteopatía 
              ofrecidos por Xhala Pilates y Osteopatía, así como facilitar el contacto con la empresa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">3. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos de este sitio web (textos, imágenes, logos, diseños, código fuente, etc.) son 
              propiedad de Xhala Pilates y Osteopatía o de sus licenciantes y están protegidos por las leyes de 
              propiedad intelectual e industrial.
            </p>
            <p>
              Queda prohibida la reproducción, distribución, modificación, comunicación pública o transformación 
              de cualquier contenido sin autorización expresa del titular.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">4. Protección de Datos Personales</h2>
            <p>
              El tratamiento de sus datos personales se realiza de conformidad con el Reglamento General de 
              Protección de Datos (RGPD) y la Ley Orgánica 3/2018. Para más información, consulte nuestra 
              Política de Privacidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">5. Cookies</h2>
            <p>
              Este sitio web utiliza cookies para mejorar la experiencia de navegación. Para más información 
              sobre el tipo de cookies utilizadas y su configuración, consulte nuestra Política de Cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">6. Exención de Responsabilidad</h2>
            <p>
              Xhala Pilates y Osteopatía no se hace responsable de:
            </p>
            <ul>
              <li>La información contenida en sitios web de terceros enlazados desde este sitio</li>
              <li>Los daños que pudieran derivarse del uso de este sitio web</li>
              <li>La indisponibilidad temporal del sitio web por causas técnicas</li>
              <li>La veracidad de la información proporcionada por los usuarios</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">7. Legislación Aplicable y Jurisdicción</h2>
            <p>
              Este aviso legal se rige por la legislación española. Para cualquier controversia que pudiera 
              surgir relacionada con este sitio web, las partes se someten a los Juzgados y Tribunales de 
              Madrid, España.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">8. Contacto</h2>
            <p>
              Para cualquier cuestión relacionada con este aviso legal, puede contactarnos en:
            </p>
            <p>Email: Xhalapilates@gmail.com | Teléfono: +34 630 60 97 81</p>
            <p>Dirección: C. de Mariano González, 14, 28600 Navalcarnero, Madrid, España</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">9. Fecha de Actualización</h2>
            <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </section>
        </div>
      </div>
    </Container>
  );
}
