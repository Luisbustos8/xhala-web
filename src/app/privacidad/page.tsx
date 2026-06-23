import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Xhala Pilates y Osteopatía',
  description: 'Política de privacidad de Xhala Pilates y Osteopatía. Información sobre el tratamiento de datos personales.',
};

export default function PrivacyPolicy() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8 text-black font-caveat">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-800">
              <strong>Aviso Legal:</strong> Este documento es una plantilla informativa y no constituye asesoramiento legal. 
              Se recomienda encarecidamente que esta política sea revisada y aprobada por un abogado especializado en 
              protección de datos y derecho digital para garantizar su cumplimiento con la normativa vigente (RGPD, LSSI, etc.).
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">1. Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales es <strong>Xhala Pilates y Osteopatía</strong>, 
              con domicilio en C. de Mariano González, 14, 28600 Navalcarnero, Madrid, España.
            </p>
            <p>Contacto: Xhalapilates@gmail.com | Teléfono: +34 630 60 97 81</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">2. Datos que Recopilamos</h2>
            <p>Recopilamos los siguientes datos personales:</p>
            <ul>
              <li>Datos de contacto: nombre, email, teléfono</li>
              <li>Datos de comunicación: mensajes enviados a través del formulario de contacto</li>
              <li>Datos de navegación: dirección IP, tipo de navegador, sistema operativo (cookies)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">3. Finalidad del Tratamiento</h2>
            <p>Los datos personales se utilizan para:</p>
            <ul>
              <li>Gestionar las consultas y solicitudes de información</li>
              <li>Responder a los mensajes enviados a través del formulario de contacto</li>
              <li>Mejorar la experiencia de usuario en el sitio web</li>
              <li>Cumplir con las obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">4. Base Legal</h2>
            <p>El tratamiento de sus datos se basa en:</p>
            <ul>
              <li>El consentimiento del interesado (art. 6.1.a RGPD)</li>
              <li>El cumplimiento de obligaciones legales (art. 6.1.c RGPD)</li>
              <li>El interés legítimo (art. 6.1.f RGPD)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">5. Destinatarios</h2>
            <p>
              Sus datos no serán cedidos a terceros, salvo obligación legal o autorización expresa. 
              Los datos pueden ser accesibles a proveedores de servicios necesarios para el funcionamiento del sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">6. Derechos del Usuario</h2>
            <p>Usted tiene derecho a:</p>
            <ul>
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la rectificación de datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Solicitar la limitación del tratamiento</li>
              <li>Oponerse al tratamiento</li>
              <li>Solicitar la portabilidad de sus datos</li>
              <li>Revocar el consentimiento en cualquier momento</li>
            </ul>
            <p>Para ejercer estos derechos, puede contactarnos en Xhalapilates@gmail.com</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">7. Conservación de Datos</h2>
            <p>
              Los datos se conservarán mientras exista una relación comercial o mientras sea necesario para cumplir 
              con las finalidades para las que fueron recopilados, salvo obligación legal de conservación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">8. Cookies</h2>
            <p>
              Este sitio web utiliza cookies para mejorar la experiencia de navegación. 
              Puede consultar nuestra Política de Cookies para más información.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">9. Actualización de la Política</h2>
            <p>
              Esta política puede actualizarse periódicamente. Le recomendamos revisarla regularmente para estar informado 
              de cualquier cambio.
            </p>
            <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </section>
        </div>
      </div>
    </Container>
  );
}
