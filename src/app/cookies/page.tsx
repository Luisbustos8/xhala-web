import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Política de Cookies | Xhala Pilates y Osteopatía',
  description: 'Política de cookies de Xhala Pilates y Osteopatía. Información sobre el uso de cookies en nuestro sitio web.',
};

export default function CookiePolicy() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8 text-black font-caveat">Política de Cookies</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-800">
              <strong>Aviso Legal:</strong> Este documento es una plantilla informativa y no constituye asesoramiento legal. 
              Se recomienda encarecidamente que esta política sea revisada y aprobada por un abogado especializado 
              en protección de datos y derecho digital para garantizar su cumplimiento con la normativa vigente (RGPD, LSSI, etc.).
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">1. ¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
              Se utilizan para recordar sus preferencias y mejorar su experiencia de navegación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">2. Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-xl font-bold mb-2 text-black">2.1 Cookies Técnicas</h3>
            <p>
              Son necesarias para el funcionamiento del sitio web. Permiten la navegación y el uso de las funciones básicas.
            </p>
            <ul>
              <li>Gestión de sesión de usuario</li>
              <li>Recordar elementos en un carrito de compras</li>
              <li>Almacenar preferencias de idioma</li>
              <li>Seguridad y prevención de fraudes</li>
            </ul>

            <h3 className="text-xl font-bold mb-2 text-black mt-4">2.2 Cookies Analíticas</h3>
            <p>
              Nos permiten analizar el uso del sitio web para mejorar la experiencia de usuario.
            </p>
            <ul>
              <li>Recopilación de estadísticas de uso</li>
              <li>Análisis de patrones de navegación</li>
              <li>Medición de rendimiento del sitio</li>
            </ul>

            <h3 className="text-xl font-bold mb-2 text-black mt-4">2.3 Cookies de Funcionalidad</h3>
            <p>
              Recuerdan sus preferencias para personalizar su experiencia.
            </p>
            <ul>
              <li>Recordar si ha aceptado el banner de cookies</li>
              <li>Preferencias de visualización</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">3. Cookies de Terceros</h2>
            <p>
              Este sitio web puede utilizar cookies de terceros para servicios como:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Para análisis de tráfico y comportamiento del usuario</li>
              <li><strong>Redes Sociales:</strong> Para compartir contenido en plataformas sociales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">4. Gestión de Cookies</h2>
            <p>
              Puede configurar su navegador para:
            </p>
            <ul>
              <li>Rechazar todas las cookies</li>
              <li>Aceptar solo cookies técnicas</li>
              <li>Eliminar cookies ya instaladas</li>
              <li>Recibir una notificación antes de instalar cookies</li>
            </ul>
            <p>
              Tenga en cuenta que deshabilitar cookies puede afectar el funcionamiento del sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">5. Configuración por Navegador</h2>
            <p>
              Puede configurar las cookies desde la configuración de su navegador:
            </p>
            <ul>
              <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
              <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies</li>
              <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Bloquear cookies</li>
              <li><strong>Edge:</strong> Configuración &gt; Cookies y permisos de sitio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">6. Actualización de la Política</h2>
            <p>
              Esta política puede actualizarse periódicamente para reflejar cambios en el uso de cookies 
              o en la legislación vigente. Le recomendamos revisarla regularmente.
            </p>
            <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">7. Contacto</h2>
            <p>
              Para cualquier cuestión relacionada con esta política de cookies, puede contactarnos en:
            </p>
            <p>Email: Xhalapilates@gmail.com | Teléfono: +34 630 60 97 81</p>
            <p>Dirección: C. de Mariano González, 14, 28600 Navalcarnero, Madrid, España</p>
          </section>
        </div>
      </div>
    </Container>
  );
}
