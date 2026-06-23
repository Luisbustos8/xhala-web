import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Términos de Servicio | Xhala Pilates y Osteopatía',
  description: 'Términos y condiciones de uso del sitio web de Xhala Pilates y Osteopatía.',
};

export default function TermsOfService() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8 text-black font-caveat">Términos de Servicio</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-800">
              <strong>Aviso Legal:</strong> Este documento es una plantilla informativa y no constituye asesoramiento legal. 
              Se recomienda encarecidamente que estos términos sean revisados y aprobados por un abogado especializado 
              en derecho digital para garantizar su cumplimiento con la normativa vigente (LSSI, Código Civil, etc.).
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar este sitio web de <strong>Xhala Pilates y Osteopatía</strong>, 
              usted acepta estos términos y condiciones de uso. Si no está de acuerdo con estos términos, 
              por favor no utilice este sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">2. Objeto del Sitio Web</h2>
            <p>
              Este sitio web tiene como finalidad proporcionar información sobre los servicios de Pilates y Osteopatía 
              ofrecidos por Xhala Pilates y Osteopatía, así como facilitar el contacto con la empresa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">3. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos de este sitio web (textos, imágenes, logos, diseños, etc.) son propiedad de 
              Xhala Pilates y Osteopatía o de sus licenciantes y están protegidos por las leyes de propiedad intelectual.
            </p>
            <p>
              Queda prohibida la reproducción, distribución, modificación o comunicación pública de cualquier 
              contenido sin autorización expresa del titular.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">4. Uso del Sitio Web</h2>
            <p>El usuario se compromete a:</p>
            <ul>
              <li>Utilizar el sitio web de conformidad con la legislación vigente</li>
              <li>No realizar actividades que puedan dañar el sitio web o sus sistemas</li>
              <li>No introducir virus, malware o cualquier código dañino</li>
              <li>No intentar acceder a áreas restringidas del sitio web</li>
              <li>No utilizar el sitio web para fines fraudulentos o ilegales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">5. Contenido del Usuario</h2>
            <p>
              Al enviar información a través del formulario de contacto, el usuario garantiza que:
            </p>
            <ul>
              <li>La información es veraz y exacta</li>
              <li>No viola derechos de terceros</li>
              <li>No contiene contenido ilegal, ofensivo o inapropiado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">6. Limitación de Responsabilidad</h2>
            <p>
              Xhala Pilates y Osteopatía no se hace responsable de:
            </p>
            <ul>
              <li>Daños directos o indirectos derivados del uso del sitio web</li>
              <li>La indisponibilidad temporal del sitio web</li>
              <li>Errores técnicos o fallos en el funcionamiento</li>
              <li>La veracidad de la información proporcionada por terceros</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">7. Enlaces a Terceros</h2>
            <p>
              Este sitio web puede contener enlaces a sitios web de terceros. Xhala Pilates y Osteopatía no controla 
              estos sitios y no se hace responsable de su contenido o políticas de privacidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">8. Protección de Datos</h2>
            <p>
              El tratamiento de sus datos personales se regula por nuestra Política de Privacidad, 
              le recomendamos que la revise detenidamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">9. Modificaciones de los Términos</h2>
            <p>
              Xhala Pilates y Osteopatía se reserva el derecho de modificar estos términos en cualquier momento. 
              Las modificaciones entrarán en vigor desde su publicación en el sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">10. Legislación Aplicable</h2>
            <p>
              Estos términos se rigen por la legislación española. Cualquier controversia se someterá a los 
              Juzgados y Tribunales de Madrid, España.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">11. Contacto</h2>
            <p>
              Para cualquier cuestión relacionada con estos términos, puede contactarnos en:
            </p>
            <p>Email: Xhalapilates@gmail.com | Teléfono: +34 630 60 97 81</p>
            <p>Dirección: C. de Mariano González, 14, 28600 Navalcarnero, Madrid, España</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">12. Fecha de Vigencia</h2>
            <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </section>
        </div>
      </div>
    </Container>
  );
}
