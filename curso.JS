/* ============================================================
   COURSES — Nivel 1: Mentalidad Empresarial
   Estructura: contenido + caso práctico interactivo por lección
   + examen final con feedback por pregunta.
============================================================ */
const COURSES = [
  {
    id: 0,
    title: "Mentalidad Empresarial",
    tag: "Nivel 1 — Cómo piensan los que construyen negocios",
    icon: "🧠",
    color: "#e8f1ff",
    duration: "45 min",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=70",
    lessons: [
      {
        title: "¿Por qué fracasan la mayoría de negocios?",
        img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=700&q=65",
        content: `
          <p><strong>Mariela tenía 22 años, hacía los mejores pasteles del barrio en La Romana</strong> y todo el mundo se los pedía. Un día decidió montar su negocio de repostería. Compró ingredientes, hizo publicidad en Instagram, vendió bastante el primer mes... y al tercero cerró.</p>
          <p>No fue que los pasteles estaban malos. Fue que Mariela nunca aprendió a <strong>pensar como empresaria</strong>. Vendía, pero no sabía si ganaba. Tenía clientes, pero no sabía cuáles eran los más rentables.</p>
          <p><strong>Los 3 errores más comunes que matan negocios en RD:</strong></p>
          <ul>
            <li><strong>Confundir ingresos con ganancias.</strong> Que entren RD$50,000 no significa que ganaste RD$50,000. Primero pagas costos, materiales y tiempo.</li>
            <li><strong>Copiar sin entender.</strong> Ver que alguien vende algo y abrir lo mismo al lado, sin analizar por qué le va bien a esa persona.</li>
            <li><strong>Actuar sin preguntar.</strong> Gastar en stock o publicidad antes de confirmar que alguien quiere pagar por lo que ofreces.</li>
          </ul>
          <p>La solución es simple pero requiere disciplina: <strong>pensar antes de actuar</strong>. Eso es lo que vas a aprender en este curso.</p>
        `,
        caso: {
          titulo: "📋 Caso práctico — La boutique de Carlos",
          historia: `Carlos tiene 19 años y vive en Santiago. Su prima tiene una boutique de ropa y le va muy bien. Carlos decide abrir una boutique igual — mismo sector, mismo tipo de ropa, mismos precios.

Al mes, Carlos tiene pocas ventas. Su prima sigue igual de bien. Carlos no entiende por qué si hace exactamente lo mismo que ella.`,
          pregunta: "¿Cuál es el error principal que cometió Carlos?",
          opciones: [
            "No hizo suficiente publicidad en Instagram",
            "Copió el negocio sin entender por qué funcionaba — la prima tiene años de confianza y clientela fiel que Carlos no tiene",
            "Debió haber vendido ropa más cara para diferenciarse",
            "Le faltó contratar empleados desde el inicio"
          ],
          correcta: 1,
          feedbacks: [
            "La publicidad ayuda, pero el problema es más profundo. La clientela ya tiene a la prima como referencia de confianza. Sin una razón para cambiar, no van donde Carlos.",
            "¡Exacto! Carlos copió sin analizar. La prima tiene años construyendo confianza con sus clientas, un estilo reconocido y una base de clientes fiel. Carlos llegó a competir con alguien ya establecida, en el mismo lugar, sin ninguna ventaja diferente. Eso es copiar sin entender.",
            "El precio más alto sin una razón clara haría las cosas peor — la gente elegiría a quien ya conoce y a menor precio.",
            "Contratar empleados con pocas ventas solo aumentaría los costos y aceleraría el cierre."
          ]
        }
      },
      {
        title: "First Principles: pensar desde cero",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=65",
        content: `
          <p><strong>Pensar desde primeros principios</strong> significa no asumir que las cosas tienen que ser como siempre han sido. En vez de copiar, te preguntas: <em>¿por qué esto es así? ¿Qué quiere realmente el cliente? ¿Hay una mejor forma?</em></p>
          <p>Todo el mundo vendía habichuelas con dulce en vasitos plásticos. Un muchacho de Santiago se preguntó: <em>"¿Por qué en vasito? ¿Qué quiere realmente la gente?"</em> La respuesta: algo rico, conveniente y que se vea bien en Instagram. Empezó a venderlas en frascos de cristal con etiquetas, a tres veces el precio. Agotaba todos los fines de semana.</p>
          <p><strong>Cómo aplicarlo paso a paso:</strong></p>
          <ul>
            <li>Toma cualquier idea de negocio que tengas.</li>
            <li>Pregúntate: <strong>¿Qué problema resuelve realmente?</strong></li>
            <li>Luego: <strong>¿Hay otra forma de resolver ese mismo problema mejor?</strong></li>
            <li>Finalmente: <strong>¿Cuál forma crea más valor para el cliente?</strong></li>
          </ul>
          <p>No se trata de ser el más creativo. Se trata de <strong>entender tan bien el problema que la solución se vuelve obvia.</strong></p>
        `,
        caso: {
          titulo: "📋 Caso práctico — Los jugos de Keila",
          historia: `Keila vende jugos naturales frente a una universidad en Santo Domingo. Hay otros 4 puestos de jugos en la misma calle. Todos venden lo mismo: naranja, chinola, lechosa. Todos a RD$80.

Su amiga le dice: "baja el precio a RD$60 para tener más clientes."

Keila duda, porque bajar el precio reduce su ganancia. Entonces se hace la pregunta correcta: ¿Qué quiere realmente un estudiante universitario a las 8am antes de entrar a clase?`,
          pregunta: "Pensando desde primeros principios, ¿cuál sería la mejor movida de Keila?",
          opciones: [
            "Bajar el precio a RD$60 como sugiere su amiga",
            "Crear combos de jugo + algo pequeño para comer, listos para llevar rápido — resolviendo lo que el estudiante realmente necesita: energía y rapidez",
            "Poner música animada para que su puesto llame más la atención",
            "Abrir más temprano que todos los demás puestos"
          ],
          correcta: 1,
          feedbacks: [
            "Bajar precio reduce ganancia y los otros cuatro puestos pueden hacer lo mismo mañana. No es sostenible y no diferencia a Keila de nadie.",
            "¡Perfecto! Keila preguntó qué necesita realmente el cliente: rapidez, energía y conveniencia antes de clase. Un combo resuelve eso de una forma que ningún puesto del sector ofrece. Eso es pensar desde cero — no competir en precio, sino resolver mejor el problema real.",
            "La música puede atraer miradas, pero no resuelve el problema real del estudiante con hambre y prisa.",
            "Abrir más temprano suma un poco, pero si vendes exactamente lo mismo que los demás, no hay razón real para preferir a Keila."
          ]
        }
      },
      {
        title: "Pensamiento sistémico: ver el negocio completo",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=65",
        content: `
          <p><strong>Pedro vendía pollo frito en Bonao y le iba excelente.</strong> Decidió abrir un segundo punto. Al mes, los dos puntos iban mal. El primero bajó la calidad porque Pedro no estaba siempre, y el nuevo nunca despegó.</p>
          <p>Pedro veía su negocio como una cosa: <em>vender pollo</em>. No veía el <strong>sistema</strong>: la confianza de la clientela en él personalmente, la calidad que dependía de su supervisión, la relación con su proveedor.</p>
          <p><strong>Todo negocio es un sistema con partes conectadas:</strong></p>
          <ul>
            <li><strong>Entrada:</strong> materiales, dinero, tiempo, personas</li>
            <li><strong>Proceso:</strong> cómo conviertes eso en algo de valor</li>
            <li><strong>Salida:</strong> el producto o servicio entregado</li>
            <li><strong>Cliente:</strong> quien lo recibe y paga</li>
            <li><strong>Retroalimentación:</strong> lo que el cliente dice para mejorar</li>
          </ul>
          <p><strong>Si el negocio solo funciona cuando tú estás, no tienes un negocio — tienes un trabajo.</strong> Antes de crecer, el sistema debe poder funcionar sin depender de una sola persona.</p>
        `,
        caso: {
          titulo: "📋 Caso práctico — El salón de Yolanda",
          historia: `Yolanda tiene un salón de belleza en La Vega. Ella misma hace todo: cortes, tintes, manicure y atiende el teléfono. El salón es exitoso porque los clientes confían en ella personalmente.

Un inversor le ofrece dinero para abrir dos salones más. Yolanda está emocionada. Su hermana la frena: "Espera, primero analiza cómo funciona tu negocio ahora mismo."`,
          pregunta: "Usando pensamiento sistémico, ¿qué debería revisar Yolanda ANTES de aceptar la expansión?",
          opciones: [
            "Si tiene suficientes seguidores en Instagram para promocionar los nuevos salones",
            "Si el negocio puede mantener la misma calidad cuando ella no esté, y si tiene procesos que otras personas puedan repetir sin ella",
            "Si los nuevos sectores tienen mucha competencia de otros salones",
            "Si el inversor ofrece suficiente dinero para cubrir los gastos de apertura"
          ],
          correcta: 1,
          feedbacks: [
            "Los seguidores ayudan con visibilidad, pero no garantizan que el negocio funcione cuando Yolanda no esté. El problema central es de sistema, no de marketing.",
            "¡Correcto! El sistema de Yolanda depende 100% de ella. Si abre más salones sin procesos que otros puedan seguir — cómo se atiende, cómo se garantiza la calidad, cómo se maneja el inventario — los nuevos puntos van a colapsar igual que le pasó a Pedro.",
            "La competencia importa al elegir ubicación, pero el problema más urgente está adentro del negocio, no afuera.",
            "El dinero del inversor cubre la apertura, pero no resuelve que el negocio entero depende de una sola persona. Con más locales, ese problema se multiplica."
          ]
        }
      },
      {
        title: "Incentivos: por qué la gente hace lo que hace",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=65",
        content: `
          <p><strong>¿Por qué el dueño de la farmacia te recomienda el medicamento más caro cuando hay uno igual más barato?</strong> No es mala persona. Es que su incentivo (más ganancia) va en esa dirección.</p>
          <p>Entender los incentivos — las razones reales por las que las personas actúan — es una de las herramientas más poderosas en los negocios.</p>
          <p><strong>¿Por qué importa esto para ti?</strong></p>
          <ul>
            <li><strong>Tus clientes actúan por incentivos.</strong> ¿Los mueve el precio? ¿El estatus? ¿La conveniencia? ¿La confianza? Si entiendes su incentivo, sabes exactamente cómo venderles.</li>
            <li><strong>Tus empleados actúan por incentivos.</strong> Si ganen lo mismo sin importar cuánto vendan, no tienen razón para esforzarse más.</li>
            <li><strong>Tú actúas por incentivos.</strong> Conocer tu motivación real te ayuda a no rendirte cuando se pone difícil.</li>
          </ul>
          <p>Una muchacha que hacía trenzas ofreció descuento a cada clienta que traía una amiga. En un mes triplicó su base de clientes. Entendió el incentivo: ahorro + orgullo de recomendar algo bueno.</p>
        `,
        caso: {
          titulo: "📋 Caso práctico — La tienda de Miguel",
          historia: `Miguel tiene una tienda de útiles escolares en Santo Domingo Este. Tiene dos empleados que atienden el mostrador.

Cuando Miguel está presente, las ventas son buenas. Cuando no está, bajan notablemente. Los empleados son amables pero no intentan vender productos adicionales ni convencer a nadie de comprar más.

Miguel les paga RD$12,000 fijos al mes, sin importar cuánto vendan.`,
          pregunta: "Usando el concepto de incentivos, ¿qué debería cambiar Miguel para que sus empleados vendan más?",
          opciones: [
            "Regañarlos cuando bajen las ventas y recordarles que deben esforzarse más",
            "Agregarles un bono o comisión por ventas que superen la meta mensual, alineando su ganancia con el esfuerzo",
            "Contratar empleados nuevos que sean más motivados por naturaleza",
            "Instalar cámaras para vigilar que estén trabajando bien en todo momento"
          ],
          correcta: 1,
          feedbacks: [
            "Regañar sin cambiar el sistema no funciona a largo plazo. El problema no es la actitud — es que el resultado de esforzarse más es exactamente el mismo salario. Sin incentivo, la motivación se agota.",
            "¡Exacto! Si los empleados ganan más cuando venden más, tienen una razón concreta para esforzarse. El incentivo económico alinea lo que quiere Miguel (más ventas) con lo que quieren los empleados (más dinero). Eso es diseñar incentivos inteligentemente.",
            "El problema no es que sean poco motivados — es que el sistema no los incentiva a hacer más. Contratar nuevos con el mismo esquema de pago produce el mismo resultado.",
            "La vigilancia genera estrés y puede crear un ambiente de desconfianza. Un empleado vigilado hace lo mínimo para no ser regañado, no lo máximo para crecer."
          ]
        }
      },
      {
        title: "Ventaja competitiva y costo de oportunidad",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=65",
        content: `
          <p>Antes de arrancar cualquier negocio, hay dos preguntas obligatorias:</p>
          <p><strong>1. ¿Por qué te van a comprar a ti y no a otro?</strong> → Ventaja competitiva<br>
          <strong>2. ¿Vale la pena dedicarle tiempo a esto?</strong> → Costo de oportunidad</p>
          <p><strong>Ventaja competitiva:</strong> no tienes que ser el mejor del mundo, solo la mejor opción para <em>tu cliente específico</em>. Tu ventaja puede ser precio, calidad superior, conveniencia, confianza o especialización en algo puntual.</p>
          <p><strong>Costo de oportunidad:</strong> cada vez que decides algo, dejas de hacer otra cosa. Si usas tus RD$20,000 en un negocio que no va a ningún lado, pierdes la oportunidad de usarlos en algo que sí funciona. Si pasas 6 meses en una idea sin futuro, pierdes 6 meses de progreso real.</p>
          <p>La pregunta correcta antes de empezar: <strong>¿Es esto lo mejor que puedo hacer con mi tiempo y dinero ahora mismo?</strong></p>
          <div style="background:rgba(21,128,61,0.08);border-left:4px solid #15803d;padding:12px 14px;border-radius:6px;margin-top:16px">
            ✅ <strong>Llegaste a la última lección del Nivel 1.</strong> Con estas 5 herramientas de pensamiento ya tienes una base que la mayoría de emprendedores nunca aprende formalmente.
          </div>
        `,
        caso: {
          titulo: "📋 Caso práctico — Las dos ideas de Ana",
          historia: `Ana tiene 21 años y RD$18,000 ahorrados. Tiene dos opciones:

Opción A: Vender ropa importada por Instagram. Muchas personas en su ciudad ya lo hacen, hay bastante competencia y los precios están muy ajustados.

Opción B: Dar clases de inglés a niños de primaria desde su casa. En su barrio nadie lo hace, varios padres se quejan de no encontrar opciones cercanas, y Ana habla inglés bien porque estudió en un colegio bilingüe.

Ana duda porque dice: "vender ropa es más fácil de empezar."`,
          pregunta: "Aplicando ventaja competitiva y costo de oportunidad, ¿qué le recomendarías a Ana?",
          opciones: [
            "La opción A — vender ropa es más conocido y tiene más demanda en general",
            "La opción B — tiene ventaja real (inglés, sin competencia local, demanda insatisfecha) y elegir A significaría desperdiciar esa ventaja única",
            "Que intente las dos al mismo tiempo para no perder ninguna oportunidad",
            "Que espere a tener más dinero ahorrado antes de decidir"
          ],
          correcta: 1,
          feedbacks: [
            "Demanda general no es suficiente si no tienes ventaja. En ropa importada, Ana compite con decenas que ya tienen clientes, proveedores y experiencia. Entrar sin diferencia es cuesta arriba.",
            "¡Perfecto! En la opción B, Ana tiene ventaja competitiva real: habilidad escasa en su zona, sin competencia y demanda insatisfecha. El costo de oportunidad de elegir ropa sería abandonar esa posición única. Eso es pensar como emprendedora estratégica.",
            "Hacer las dos con RD$18,000 y sin experiencia divide recursos y atención. Casi siempre termina en que ninguna funciona bien.",
            "Esperar no cambia el análisis. La oportunidad existe ahora — y puede desaparecer si alguien más la identifica primero."
          ]
        }
      }
    ],

    examen: [
      {
        q: "Josué abre una barbería idéntica a la de su vecino — mismo sector, mismo estilo, mismos precios. Al mes tiene muy pocos clientes. ¿Qué concepto explica su problema?",
        opts: [
          "Le faltó hacer más publicidad en TikTok e Instagram",
          "No tiene ventaja competitiva — no hay razón concreta para que los clientes lo elijan sobre el vecino ya establecido",
          "Debió cobrar más barato desde el principio para captar clientes rápido",
          "El local no tiene buena visibilidad desde la calle"
        ],
        ans: 1,
        explain: "Sin una razón clara para preferirlo — especialización, precio, confianza u otra ventaja — los clientes van donde ya conocen. Josué necesita algo que lo diferencie realmente."
      },
      {
        q: "Rosa tiene una fonda exitosa porque ella cocina todo personalmente y los clientes la adoran. Quiere abrir otra fonda pero seguiría cocinando en el local original. ¿Qué problema de pensamiento sistémico revela esto?",
        opts: [
          "No tiene suficiente capital para abrir el segundo local con buenas condiciones",
          "Su negocio depende de ella como pieza central — si el sistema no funciona sin Rosa, escalar va a romper todo",
          "Debería contratar más personal en el local actual antes de expandirse",
          "Necesita cambiar el menú y actualizarlo antes de pensar en crecer"
        ],
        ans: 1,
        explain: "El pensamiento sistémico revela que el negocio de Rosa no es un sistema independiente — es Rosa cocinando. Antes de escalar, necesita que el proceso y la calidad funcionen sin ella en el centro."
      },
      {
        q: "Un emprendedor se pregunta: '¿Por qué todos vendemos en bolsas plásticas? ¿Hay una forma mejor de entregar este producto?' ¿Qué tipo de pensamiento está usando?",
        opts: [
          "Pensamiento sistémico — está viendo todas las partes del negocio",
          "Análisis de incentivos — busca entender qué motiva al cliente",
          "First principles — cuestiona por qué las cosas son como son para encontrar mejores soluciones",
          "Costo de oportunidad — evalúa si vale la pena el cambio"
        ],
        ans: 2,
        explain: "First principles significa no dar nada por sentado. Preguntar '¿por qué hacemos esto así?' hasta llegar a la base del problema y desde ahí construir la mejor solución posible."
      },
      {
        q: "Un dueño paga a sus vendedores salario fijo sin importar cuánto vendan. Las ventas son bajas y él no entiende por qué no se esfuerzan más. ¿Cuál es el problema real?",
        opts: [
          "Los vendedores no tienen suficiente capacitación en técnicas de venta",
          "El producto no tiene suficiente demanda en el mercado actual",
          "El esquema de pago no genera incentivo para vender más — da lo mismo esforzarse que no",
          "La empresa necesita invertir más en publicidad primero"
        ],
        ans: 2,
        explain: "Los incentivos determinan el comportamiento. Si vender más o menos produce exactamente el mismo resultado para el empleado, racionalmente no hay razón para hacer el esfuerzo extra. El sistema de compensación debe alinearse con el objetivo del negocio."
      },
      {
        q: "Ramón tiene RD$15,000 y dos opciones: A) reintentar un negocio de velas que ya fracasó antes, o B) tomar una certificación en diseño gráfico donde ya tiene talento natural. Lleva semanas sin decidir. ¿Qué concepto aplica con más urgencia?",
        opts: [
          "Ventaja competitiva — debe identificar en qué puede ser mejor que otros",
          "Costo de oportunidad — cada semana que no decide es tiempo y dinero perdido que no vuelve",
          "Pensamiento sistémico — debe analizar todas las partes antes de actuar",
          "First principles — debe cuestionar si realmente necesita hacer algo ahora"
        ],
        ans: 1,
        explain: "El costo de oportunidad no solo aplica al dinero — también al tiempo. Cada semana que Ramón no decide, pierde potenciales clientes, ingresos y aprendizaje. Y la opción B tiene ventaja competitiva real: talento natural más una habilidad escasa en su entorno."
      }
    ]
  },

  {
    id: 1,
    title: "Marketing digital básico",
    tag: "Nivel 5 — Cómo conseguir clientes",
    icon: "📱",
    color: "#fff4e8",
    duration: "40 min",
    cover: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=70",
    lessons: [
      { title: "¿Qué es el marketing digital?",      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
      { title: "Redes sociales para tu negocio",     img: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
      { title: "Contenido que atrae clientes",       img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
      { title: "Métricas básicas",                   img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
      { title: "Tu primera campaña sencilla",        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
      { title: "Errores comunes y cómo evitarlos",   img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
    ],
    examen: [
      { q:"¿Cuál plataforma es mejor para mostrar productos visuales?", opts:["LinkedIn","Instagram","Twitter","Reddit"], ans:1, explain:"Instagram está diseñado para contenido visual. Es la plataforma ideal para mostrar productos físicos con fotos y reels." },
      { q:"¿Qué mide el 'alcance' en redes sociales?", opts:["Cuántas ventas hiciste","Cuántas personas vieron tu publicación","Cuántos comentarios tienes","El costo de la campaña"], ans:1, explain:"El alcance mide cuántas personas únicas vieron tu contenido, sin importar si interactuaron o no." },
      { q:"¿Qué es el 'engagement'?", opts:["Los seguidores totales","La interacción activa (likes, comentarios, shares)","El presupuesto de publicidad","El número de publicaciones al mes"], ans:1, explain:"El engagement mide qué tan activa está tu audiencia. Un buen engagement vale más que muchos seguidores pasivos." },
    ]
  },

  {
    id: 2,
    title: "Gestión de costos",
    tag: "Finanzas básicas",
    icon: "📊",
    color: "#e8fff4",
    duration: "30 min",
    cover: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=70",
    lessons: [
      { title: "Costos fijos vs. costos variables",  img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
      { title: "Cómo calcular el precio de venta",   img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
      { title: "Punto de equilibrio",                img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
      { title: "Control de ingresos y gastos",       img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
      { title: "Reinvertir y crecer sin quebrar",    img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=700&q=65", content: "<p style='color:var(--muted)'>Contenido en desarrollo — próximamente.</p>", caso: null },
    ],
    examen: [
      { q:"¿Qué es un costo fijo?", opts:["Un gasto que cambia según cuánto produces","Un gasto que no cambia aunque vendas más o menos","El precio de venta final","La ganancia neta del mes"], ans:1, explain:"Los costos fijos son los que pagas siempre sin importar el volumen de ventas, como el alquiler o el internet." },
      { q:"¿Cómo se calcula el margen de ganancia?", opts:["Precio - Costo","(Precio - Costo) / Precio × 100","Costo × 2","Ventas totales / meses trabajados"], ans:1, explain:"El margen de ganancia te dice qué porcentaje del precio de venta es ganancia real. Es la herramienta básica para saber si tu negocio es rentable." },
      { q:"¿Qué es el punto de equilibrio?", opts:["Cuando ganas el doble de lo que inviertes","Cuando tus ingresos cubren exactamente todos tus costos","Cuando tienes muchos clientes frecuentes","Cuando puedes reducir el precio de venta"], ans:1, explain:"El punto de equilibrio es cuando no ganas ni pierdes — los ingresos cubren todos los costos. A partir de ahí, cada venta genera ganancia real." },
    ]
  }
];

/* ============================================================
   STATE
============================================================ */
const state = {
  currentCourse: 0,
  currentLesson: 0,
  lessonsDone:  JSON.parse(localStorage.getItem('ae_lessons') || '{}'),
  coursesDone:  JSON.parse(localStorage.getItem('ae_courses') || '{}'),
  examDone:     JSON.parse(localStorage.getItem('ae_exam')    || '{}'),
  casoAnswered: {},
  examAnswers:  {},
};

function saveState() {
  localStorage.setItem('ae_lessons', JSON.stringify(state.lessonsDone));
  localStorage.setItem('ae_courses', JSON.stringify(state.coursesDone));
  localStorage.setItem('ae_exam',    JSON.stringify(state.examDone));
  const done  = Object.keys(state.coursesDone).length;
  const total = COURSES.length;
  localStorage.setItem('ae_progress', JSON.stringify({ done, total }));
}

/* ============================================================
   LOAD / RENDER COURSE
============================================================ */
function loadCourse(idx) {
  state.currentCourse = idx;
  state.currentLesson = 0;
  state.casoAnswered  = {};
  state.examAnswers   = {};
  document.querySelectorAll('.course-btn').forEach((b,i) => b.classList.toggle('active', i===idx));
  renderLesson();
}

function renderLesson() {
  const c           = COURSES[state.currentCourse];
  const li          = state.currentLesson;
  const lesson      = c.lessons[li];
  const lessonKey   = `${c.id}-${li}`;
  const total       = c.lessons.length;
  const completed   = c.lessons.filter((_,i) => state.lessonsDone[`${c.id}-${i}`]).length;
  const pct         = Math.round((completed / total) * 100);
  const isLast      = li === total - 1;
  const examKey     = `exam-${c.id}`;
  const lessonDone  = !!state.lessonsDone[lessonKey];
  const showExam    = isLast && lessonDone;
  const hasCaso     = !!lesson.caso;

  // can mark done only if: lesson has no caso OR caso was already answered
  const casoOk      = !hasCaso || lessonDone || !!state.casoAnswered[lessonKey];

  const pipHtml = c.lessons.map((_,i) => {
    const k   = `${c.id}-${i}`;
    const cls = state.lessonsDone[k] ? 'done' : (i===li ? 'active' : '');
    return `<button class="lesson-pip ${cls}" onclick="goLesson(${i})">${state.lessonsDone[k]?'✓':(i+1)}</button>`;
  }).join('');

  document.getElementById('mainArea').innerHTML = `
    <!-- HEADER -->
    <div class="course-header">
      <img class="course-cover" src="${c.cover}" alt="${c.title}">
      <div class="course-header-info">
        <div class="course-tag">${c.tag}</div>
        <div class="course-title">${c.title}</div>
        <div class="course-meta">
          <span class="meta-item">📚 ${total} lecciones</span>
          <span class="meta-item">⏱ ${c.duration}</span>
          <span class="meta-item">${state.coursesDone[c.id] ? '✅ Completado' : `${completed}/${total} completadas`}</span>
        </div>
      </div>
    </div>

    <!-- PROGRESS -->
    <div class="progress-wrap">
      <div class="progress-label"><span>Progreso</span><span id="pctLabel">${pct}%</span></div>
      <div class="progress-track"><div class="progress-fill" id="progFill" style="width:${pct}%"></div></div>
    </div>

    <!-- LESSON PIPS -->
    <div class="lesson-nav">${pipHtml}</div>

    <!-- LESSON CONTENT -->
    <div class="lesson-card">
      <div class="lesson-num">Lección ${li+1} de ${total}</div>
      <div class="lesson-title-text">${lesson.title}</div>
      <div id="lessonImgSlot"></div>
      <div class="ai-content">${lesson.content || ''}</div>
    </div>

    <!-- CASO PRÁCTICO -->
    ${hasCaso ? `<div id="casoSection">${renderCasoHtml(lesson.caso, lessonKey, lessonDone)}</div>` : ''}

    <!-- HINT -->
    ${hasCaso && !lessonDone ? `
      <p id="casoHint" style="text-align:center;font-size:12.5px;color:var(--muted);margin-bottom:16px">
        👆 Responde el caso práctico para poder marcar la lección como completada
      </p>` : ''}

    <!-- CONTROLS -->
    <div class="lesson-controls">
      <button class="btn-nav" onclick="goLesson(${li-1})" ${li===0?'disabled':''}>← Anterior</button>
      <button class="btn-nav primary" id="markBtn" onclick="markDone()" ${lessonDone||!casoOk?'disabled':''}>
        ${lessonDone ? '✓ Completada' : 'Marcar como completada →'}
      </button>
      <button class="btn-nav" onclick="goLesson(${li+1})" ${isLast?'disabled':''}>Siguiente →</button>
    </div>

    <!-- EXAMEN -->
    <div id="examSection" style="display:${showExam?'block':'none'}">
      ${showExam ? renderExamHtml(c, examKey) : ''}
    </div>

    <!-- FINALIZAR -->
    <div id="completeBtnWrap" style="display:${state.examDone[examKey]?'block':'none'}">
      <button class="btn-complete ${state.coursesDone[c.id]?'done-state':''}" id="completeBtn"
        onclick="completeCourse()" ${state.coursesDone[c.id]?'disabled':''}>
        ${state.coursesDone[c.id] ? '🎉 Curso completado' : '🎯 Finalizar y obtener logro'}
      </button>
    </div>
  `;

  // load image async
  const imgSlot = document.getElementById('lessonImgSlot');
  imgSlot.innerHTML = `<div class="lesson-img-skel"></div>`;
  const img = new Image();
  img.onload  = () => { imgSlot.innerHTML = `<div class="lesson-img-wrap"><img class="lesson-img" src="${lesson.img}" alt="${lesson.title}"></div>`; };
  img.onerror = () => { imgSlot.innerHTML = ''; };
  img.src = lesson.img;

  // update sidebar badges
  COURSES.forEach((course,i) => {
    const b = document.getElementById(`done-sb-${i}`);
    if(b) b.style.display = state.coursesDone[course.id] ? 'flex' : 'none';
  });
}

/* ============================================================
   CASO PRÁCTICO
============================================================ */
function renderCasoHtml(caso, lessonKey, lessonDone) {
  const answered   = lessonDone || state.casoAnswered[lessonKey] !== undefined;
  const savedAns   = state.casoAnswered[lessonKey];

  const optsHtml = caso.opciones.map((opt, oi) => {
    let cls = '';
    if (answered) {
      if (oi === caso.correcta)                    cls = 'correct';
      else if (oi === savedAns && oi !== caso.correcta) cls = 'wrong';
    }
    return `
      <button class="quiz-opt ${cls}" id="caso-opt-${oi}"
        onclick="${answered ? '' : `responderCaso('${lessonKey}',${oi})`}"
        ${answered ? 'disabled' : ''}>
        <span style="width:22px;height:22px;border-radius:50%;border:2px solid currentColor;
          display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0">
          ${String.fromCharCode(65+oi)}
        </span>
        ${opt}
      </button>`;
  }).join('');

  let feedbackHtml = '';
  if (answered && savedAns !== undefined) {
    const ok   = savedAns === caso.correcta;
    feedbackHtml = `
      <div class="quiz-feedback show ${ok?'ok':'fail'}" style="margin-top:14px">
        ${ok ? '✓ ¡Correcto!' : `✗ La respuesta correcta era: <strong>"${caso.opciones[caso.correcta]}"</strong>`}
        <span style="font-weight:400;font-size:12.5px;display:block;margin-top:5px">${caso.feedbacks[savedAns]}</span>
      </div>`;
  } else if (lessonDone) {
    feedbackHtml = `<div class="quiz-feedback show ok" style="margin-top:14px">✓ Ya completaste esta lección.</div>`;
  }

  return `
    <div class="quiz-card" style="margin-bottom:20px">
      <div class="quiz-title">${caso.titulo}</div>
      <div class="caso-historia" style="font-size:14px;line-height:1.75;color:var(--text2);
        background:rgba(11,99,214,0.04);border-radius:10px;padding:14px 16px;margin:12px 0 16px;
        border-left:3px solid var(--accent)">
        ${caso.historia.replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br>')}
      </div>
      <div class="quiz-question">${caso.pregunta}</div>
      <div class="quiz-options" style="margin-top:10px">${optsHtml}</div>
      <div id="caso-feedback">${feedbackHtml}</div>
    </div>`;
}

function responderCaso(lessonKey, oi) {
  const c     = COURSES[state.currentCourse];
  const li    = state.currentLesson;
  const caso  = c.lessons[li].caso;
  if (!caso) return;

  state.casoAnswered[lessonKey] = oi;
  const isOk = oi === caso.correcta;

  caso.opciones.forEach((_,i) => {
    const btn = document.getElementById(`caso-opt-${i}`);
    if (!btn) return;
    btn.disabled = true;
    btn.style.borderColor = btn.style.background = btn.style.color = '';
    if (i === caso.correcta)          btn.classList.add('correct');
    if (i === oi && !isOk)            btn.classList.add('wrong');
  });

  const fb = document.getElementById('caso-feedback');
  if (fb) fb.innerHTML = `
    <div class="quiz-feedback show ${isOk?'ok':'fail'}" style="margin-top:14px">
      ${isOk ? '✓ ¡Correcto!' : `✗ La respuesta correcta era: <strong>"${caso.opciones[caso.correcta]}"</strong>`}
      <span style="font-weight:400;font-size:12.5px;display:block;margin-top:5px">${caso.feedbacks[oi]}</span>
    </div>`;

  // unlock mark done button
  const markBtn = document.getElementById('markBtn');
  if (markBtn && !state.lessonsDone[lessonKey]) markBtn.disabled = false;

  const hint = document.getElementById('casoHint');
  if (hint) hint.style.display = 'none';

  showToast(isOk ? '¡Respuesta correcta! 🎯' : 'Casi — revisa la explicación 📖');
}

/* ============================================================
   EXAMEN FINAL
============================================================ */
function renderExamHtml(c, examKey) {
  if (state.examDone[examKey]) {
    const d = state.examDone[examKey];
    return `
      <div class="quiz-card">
        <div class="quiz-title">✅ Examen completado</div>
        <div class="quiz-sub">Obtuviste ${d.score} de ${d.total} respuestas correctas.</div>
        <p style="font-size:13px;color:var(--muted)">Ya puedes finalizar el curso.</p>
      </div>`;
  }

  const qs = c.examen.map((q,qi) => `
    <div style="margin-bottom:24px">
      <div class="quiz-question">${qi+1}. ${q.q}</div>
      <div class="quiz-options" style="margin-top:10px">
        ${q.opts.map((opt,oi) => `
          <button class="quiz-opt" id="exam-opt-${qi}-${oi}" onclick="selectExamOpt(${qi},${oi})">
            <span style="width:22px;height:22px;border-radius:50%;border:2px solid currentColor;
              display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0">
              ${String.fromCharCode(65+oi)}
            </span>${opt}
          </button>`).join('')}
      </div>
      <div class="quiz-feedback" id="exam-fb-${qi}"></div>
    </div>`).join('');

  return `
    <div class="quiz-card">
      <div class="quiz-title">📝 Examen final — ${c.title}</div>
      <div class="quiz-sub">Demuestra lo que aprendiste. Responde todo para enviar.</div>
      ${qs}
      <button class="btn-nav primary" id="submitExamBtn" onclick="submitExam()"
        style="width:100%;padding:14px;margin-top:8px;font-size:15px" disabled>
        Enviar examen
      </button>
    </div>`;
}

function selectExamOpt(qi, oi) {
  const c = COURSES[state.currentCourse];
  state.examAnswers[qi] = oi;
  c.examen[qi].opts.forEach((_,i) => {
    const b = document.getElementById(`exam-opt-${qi}-${i}`);
    if (!b) return;
    b.style.borderColor = i===oi ? 'var(--accent)' : '';
    b.style.background  = i===oi ? 'rgba(11,99,214,.07)' : '';
    b.style.color       = i===oi ? 'var(--accent)' : '';
  });
  const allDone = c.examen.every((_,i) => state.examAnswers[i] !== undefined);
  const btn = document.getElementById('submitExamBtn');
  if (btn) btn.disabled = !allDone;
}

function submitExam() {
  const c       = COURSES[state.currentCourse];
  const examKey = `exam-${c.id}`;
  let score     = 0;

  c.examen.forEach((q,qi) => {
    const chosen  = state.examAnswers[qi];
    const correct = q.ans;
    const fb      = document.getElementById(`exam-fb-${qi}`);

    q.opts.forEach((_,oi) => {
      const b = document.getElementById(`exam-opt-${qi}-${oi}`);
      if (!b) return;
      b.disabled = true;
      b.style.borderColor = b.style.background = b.style.color = '';
      if (oi === correct)            b.classList.add('correct');
      if (oi === chosen && !( oi === correct)) b.classList.add('wrong');
    });

    if (chosen === correct) {
      score++;
      if(fb) fb.innerHTML = `<div class="quiz-feedback show ok">✓ ¡Correcto!<span style="font-weight:400;font-size:12px;display:block;margin-top:3px">${q.explain}</span></div>`;
    } else {
      if(fb) fb.innerHTML = `<div class="quiz-feedback show fail">✗ Correcta: <strong>"${q.opts[correct]}"</strong><span style="font-weight:400;font-size:12px;display:block;margin-top:3px">${q.explain}</span></div>`;
    }
  });

  state.examDone[examKey] = { score, total: c.examen.length };
  state.examAnswers = {};
  saveState();

  const btn = document.getElementById('submitExamBtn');
  if (btn) {
    btn.disabled    = true;
    btn.textContent = `✓ Enviado — ${score}/${c.examen.length} correctas`;
    btn.style.background = score >= Math.ceil(c.examen.length * 0.6) ? '#15803d' : '#b45309';
  }

  setTimeout(() => {
    const w = document.getElementById('completeBtnWrap');
    if(w) { w.style.display='block'; w.scrollIntoView({behavior:'smooth',block:'center'}); }
  }, 700);

  const emoji = score === c.examen.length ? '🏆' : score >= Math.ceil(c.examen.length * 0.6) ? '🎯' : '📖';
  showToast(`${score} de ${c.examen.length} correctas ${emoji}`);
}

/* ============================================================
   MARK DONE / COMPLETE COURSE
============================================================ */
function markDone() {
  const c         = COURSES[state.currentCourse];
  const li        = state.currentLesson;
  const lessonKey = `${c.id}-${li}`;

  state.lessonsDone[lessonKey] = true;
  saveState();

  const btn = document.getElementById('markBtn');
  if(btn){ btn.disabled=true; btn.textContent='✓ Completada'; }

  const pips = document.querySelectorAll('.lesson-pip');
  if(pips[li]){ pips[li].classList.remove('active'); pips[li].classList.add('done'); pips[li].textContent='✓'; }

  const total   = c.lessons.length;
  const done    = c.lessons.filter((_,i) => state.lessonsDone[`${c.id}-${i}`]).length;
  const pct     = Math.round((done/total)*100);
  const fill    = document.getElementById('progFill');
  const label   = document.getElementById('pctLabel');
  if(fill)  fill.style.width     = pct+'%';
  if(label) label.textContent    = pct+'%';

  const hint = document.getElementById('casoHint');
  if(hint) hint.style.display = 'none';

  showToast('Lección completada 🙌');

  if (li === total - 1) {
    const examKey     = `exam-${c.id}`;
    const examSection = document.getElementById('examSection');
    if (examSection) {
      examSection.style.display = 'block';
      if (!state.examDone[examKey]) {
        examSection.innerHTML = renderExamHtml(c, examKey);
      }
      examSection.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }
}

function completeCourse() {
  const c = COURSES[state.currentCourse];
  state.coursesDone[c.id] = true;
  saveState();

  const btn = document.getElementById('completeBtn');
  if(btn){ btn.textContent='🎉 ¡Curso completado!'; btn.disabled=true; btn.classList.add('done-state'); }

  const badge = document.getElementById(`done-sb-${state.currentCourse}`);
  if(badge) badge.style.display='flex';

  showToast('¡Felicidades! Curso completado 🎉');
}

/* ============================================================
   NAVIGATION & TOAST
============================================================ */
function goLesson(idx) {
  const c = COURSES[state.currentCourse];
  if(idx < 0 || idx >= c.lessons.length) return;
  state.currentLesson = idx;
  renderLesson();
  window.scrollTo({top:0, behavior:'smooth'});
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
  if (!localStorage.getItem('usuario')) { window.location.href = 'login.html'; return; }
  loadCourse(0);
});