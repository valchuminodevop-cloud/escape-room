
/* =====================================================
   EL MISTERIO DE LOS CUATRO UMBRALES
   GENERADOR ENCICLOPÉDICO DE ESCAPE ROOMS
   Archivo: juego.js
   ===================================================== */

"use strict";

// =====================================================
// 1. CONFIGURACIÓN GENERAL
// =====================================================

const CLAVE_GUARDADO = "misterioCuatroUmbrales_v3";
const VERSION_PARTIDA = 3;

const CANTIDAD_SALAS = 4;
const ENIGMAS_POR_SALA = 4;

// =====================================================
// 2. BANCO ENCICLOPÉDICO DE CONCEPTOS
//
// Formato:
// ["Concepto", "Definición", dificultad]
//
// Cada sala tiene su propio catálogo.
// =====================================================

const catalogo = {

    filosofia: [
        ["Mayéutica", "Método socrático que utiliza preguntas para ayudar a descubrir ideas y contradicciones.", 1],
        ["Ironía socrática", "Estrategia de Sócrates que aparenta desconocimiento para examinar las ideas de otra persona.", 1],
        ["Diálogo socrático", "Método de investigación filosófica basado en preguntas y respuestas.", 1],
        ["Ética", "Rama de la filosofía que estudia la conducta, los valores y lo correcto.", 1],
        ["Moral", "Conjunto de normas, valores y costumbres que orientan la conducta.", 1],
        ["Lógica", "Disciplina que estudia las formas válidas del razonamiento.", 1],
        ["Metafísica", "Rama filosófica que investiga la naturaleza fundamental de la realidad.", 1],
        ["Epistemología", "Disciplina que estudia el conocimiento, su origen, sus límites y su justificación.", 1],
        ["Ontología", "Rama filosófica que estudia el ser y aquello que existe.", 1],
        ["Estética", "Rama de la filosofía que reflexiona sobre el arte y la belleza.", 1],
        ["Presocráticos", "Filósofos anteriores a Sócrates que investigaron el origen de la naturaleza.", 1],
        ["Arjé", "Principio u origen fundamental del que procede la realidad.", 1],
        ["Sofistas", "Pensadores griegos que enseñaban retórica y argumentación.", 1],
        ["Relativismo", "Postura según la cual la verdad o los valores dependen de determinadas perspectivas.", 1],
        ["Escepticismo", "Postura que cuestiona la posibilidad o justificación de ciertos conocimientos.", 1],
        ["Dogmatismo", "Actitud que acepta afirmaciones como verdades sin suficiente examen crítico.", 1],
        ["Racionalismo", "Corriente que concede a la razón un papel fundamental en el conocimiento.", 1],
        ["Empirismo", "Corriente que considera que la experiencia es fundamental para adquirir conocimiento.", 1],
        ["Idealismo", "Familia de corrientes que otorgan un papel central a las ideas o la conciencia.", 1],
        ["Materialismo", "Postura que considera que la realidad tiene una base material.", 1],
        ["Dualismo", "Postura que sostiene la existencia de dos principios fundamentales.", 2],
        ["Monismo", "Postura que explica la realidad mediante un único principio fundamental.", 2],
        ["Pluralismo", "Postura que sostiene que la realidad tiene múltiples principios o elementos.", 2],
        ["Duda metódica", "Procedimiento cartesiano que cuestiona sistemáticamente las creencias.", 2],
        ["Cogito ergo sum", "Fórmula cartesiana que reconoce la existencia mediante el acto de pensar.", 2],
        ["Res cogitans", "Concepto cartesiano que designa la sustancia pensante.", 2],
        ["Res extensa", "Concepto cartesiano que designa la sustancia material o extensa.", 2],
        ["Mundo de las ideas", "En Platón, ámbito inteligible de las formas que son objeto del conocimiento racional.", 2],
        ["Mundo sensible", "En Platón, ámbito de las cosas cambiantes conocidas mediante los sentidos.", 2],
        ["Alegoría de la caverna", "Relato platónico que representa el paso de la ignorancia al conocimiento.", 2],
        ["Teoría de las formas", "Doctrina platónica sobre la existencia de formas inteligibles.", 2],
        ["Hilemorfismo", "Doctrina aristotélica según la cual los seres materiales tienen materia y forma.", 2],
        ["Sustancia", "En Aristóteles, aquello que existe en sentido primario.", 2],
        ["Causa material", "En Aristóteles, aquello de lo que algo está hecho.", 2],
        ["Causa formal", "En Aristóteles, estructura que hace que algo sea lo que es.", 2],
        ["Causa eficiente", "En Aristóteles, aquello que produce un cambio o inicia un proceso.", 2],
        ["Causa final", "En Aristóteles, fin o propósito hacia el cual se orienta algo.", 2],
        ["Virtud", "Disposición estable del carácter que permite actuar adecuadamente.", 2],
        ["Justo medio", "En Aristóteles, término adecuado entre dos extremos viciosos.", 2],
        ["Eudaimonía", "Concepto aristotélico de vida lograda o florecimiento humano.", 2],
        ["Estoicismo", "Escuela que propone vivir de acuerdo con la razón y distinguir lo controlable.", 2],
        ["Epicureísmo", "Escuela que vincula la felicidad con el placer y la ausencia de perturbación.", 2],
        ["Ataraxia", "Estado de tranquilidad y ausencia de perturbación interior.", 2],
        ["Cinismo", "Corriente antigua que cuestionaba convenciones sociales y defendía una vida sencilla.", 2],
        ["Contractualismo", "Familia de teorías que explica la legitimidad política mediante un contrato social.", 2],
        ["Estado de naturaleza", "Situación hipotética anterior a la organización política.", 2],
        ["Contrato social", "Acuerdo teórico que fundamenta la formación de la sociedad política.", 2],
        ["Utilitarismo", "Teoría ética que evalúa las acciones por sus consecuencias sobre el bienestar.", 3],
        ["Deontología", "Enfoque ético que destaca los deberes y las obligaciones.", 3],
        ["Imperativo categórico", "Principio kantiano que exige actuar según máximas universalizables.", 3],
        ["Autonomía moral", "Capacidad de darse racionalmente una norma moral.", 3],
        ["Heteronomía", "Condición en la que la voluntad recibe sus normas de una fuente externa.", 3],
        ["Fenómeno", "En Kant, aquello que aparece bajo las condiciones de nuestra experiencia.", 3],
        ["Noúmeno", "En Kant, aquello considerado independientemente de cómo aparece en nuestra experiencia.", 3],
        ["A priori", "Conocimiento o condición que no deriva de una experiencia particular.", 3],
        ["A posteriori", "Conocimiento que depende de la experiencia.", 3],
        ["Problema de la inducción", "Problema sobre cómo justificar que las regularidades pasadas continuarán en el futuro.", 3],
        ["Nihilismo", "Postura asociada con la pérdida o negación de valores y fundamentos tradicionales.", 3],
        ["Voluntad de poder", "Concepto nietzscheano relacionado con las fuerzas de expansión y afirmación de la vida.", 3],
        ["Eterno retorno", "Idea nietzscheana que plantea imaginar la repetición infinita de la propia vida.", 3],
        ["Existencialismo", "Corriente que reflexiona sobre existencia, libertad y responsabilidad.", 3],
        ["Angustia existencial", "Inquietud vinculada con la libertad, la incertidumbre y la responsabilidad.", 3],
        ["Absurdismo", "Enfoque sobre la tensión entre la búsqueda humana de sentido y el silencio del universo.", 3],
        ["Fenomenología", "Corriente que estudia cómo se manifiestan las experiencias a la conciencia.", 3],
        ["Intencionalidad", "Característica de la conciencia de estar dirigida hacia algo.", 3],
        ["Hermenéutica", "Disciplina dedicada a estudiar la interpretación de textos y acciones.", 3],
        ["Dialéctica", "Método que examina tensiones y contradicciones entre distintas posiciones.", 3],
        ["Materialismo histórico", "Enfoque marxista que analiza la historia desde las condiciones materiales.", 3],
        ["Alienación", "Separación o extrañamiento respecto de la propia actividad o sus productos.", 3],
        ["Ideología", "Sistema de ideas y representaciones que organiza interpretaciones de la realidad social.", 3],
        ["Falsabilidad", "Criterio de Popper según el cual una teoría debe poder exponerse a pruebas que puedan refutarla.", 3],
        ["Paradigma", "Marco compartido de conceptos y métodos que orienta una investigación científica.", 3],
        ["Revolución científica", "Transformación profunda de un marco teórico y metodológico.", 3],
        ["Pragmatismo", "Corriente que relaciona las ideas con sus consecuencias prácticas.", 3],
        ["Positivismo", "Corriente que privilegia el conocimiento científico y la observación de hechos.", 3],
        ["Constructivismo", "Enfoque que destaca la participación activa del sujeto en la construcción del conocimiento.", 3],
        ["Determinismo", "Postura según la cual los acontecimientos están condicionados por causas previas.", 4],
        ["Libre albedrío", "Concepto referido a la capacidad de elegir entre distintas posibilidades.", 4],
        ["Compatibilismo", "Postura que sostiene que libertad y determinación causal pueden ser compatibles.", 4],
        ["Barco de Teseo", "Problema sobre la identidad de un objeto cuyas partes son reemplazadas progresivamente.", 4],
        ["Problema mente-cuerpo", "Problema filosófico sobre la relación entre los procesos mentales y el cuerpo.", 4],
        ["Solipsismo", "Postura según la cual solo la propia mente o experiencia puede conocerse con certeza.", 4],
        ["Realismo", "Postura que sostiene que existe una realidad independiente de nuestras representaciones.", 4],
        ["Esencialismo", "Enfoque que considera que las cosas poseen características esenciales.", 4],
        ["Contingencia", "Condición de aquello que podría ser de otra manera o no haber ocurrido.", 4]
    ],

    psicologia: [
        ["Percepción", "Proceso mediante el cual organizamos e interpretamos información sensorial.", 1],
        ["Atención selectiva", "Capacidad de concentrarse en determinados estímulos e ignorar otros.", 1],
        ["Memoria sensorial", "Sistema que retiene información sensorial durante un período muy breve.", 1],
        ["Memoria de trabajo", "Sistema que mantiene y manipula temporalmente información.", 1],
        ["Memoria a largo plazo", "Sistema que conserva información durante períodos prolongados.", 1],
        ["Aprendizaje", "Proceso mediante el cual se producen cambios relativamente duraderos en conocimientos o conductas.", 1],
        ["Motivación", "Procesos que activan, orientan y mantienen la conducta.", 1],
        ["Emoción", "Respuesta compleja con componentes fisiológicos, cognitivos y conductuales.", 1],
        ["Temperamento", "Diferencias individuales relativamente tempranas en reactividad y regulación emocional.", 1],
        ["Personalidad", "Patrones relativamente estables de pensamiento, emoción y comportamiento.", 1],
        ["Sesgo de confirmación", "Tendencia a buscar o interpretar información favorable a creencias previas.", 1],
        ["Efecto halo", "Tendencia a generalizar una impresión sobre una persona a otros rasgos.", 1],
        ["Atención sostenida", "Capacidad de mantener la concentración durante un período prolongado.", 1],
        ["Habituación", "Disminución de la respuesta ante un estímulo repetido.", 1],
        ["Condicionamiento clásico", "Aprendizaje mediante asociación entre estímulos.", 1],
        ["Condicionamiento operante", "Aprendizaje en el que las consecuencias modifican la probabilidad de una conducta.", 1],
        ["Refuerzo positivo", "Presentación de un estímulo que aumenta la probabilidad de una conducta.", 1],
        ["Refuerzo negativo", "Retirada de un estímulo aversivo que aumenta la probabilidad de una conducta.", 1],
        ["Castigo positivo", "Presentación de una consecuencia que reduce una conducta.", 1],
        ["Castigo negativo", "Retirada de un estímulo agradable para reducir una conducta.", 1],
        ["Extinción", "Disminución de una respuesta aprendida cuando deja de recibir el refuerzo que la mantenía.", 2],
        ["Generalización", "Respuesta similar ante estímulos parecidos al estímulo aprendido.", 2],
        ["Discriminación", "Aprendizaje de responder de manera diferente ante estímulos distintos.", 2],
        ["Modelado", "Aprendizaje de una conducta mediante la observación de otra persona.", 2],
        ["Aprendizaje vicario", "Aprendizaje por observación de las consecuencias de la conducta ajena.", 2],
        ["Autoeficacia", "Creencia sobre la propia capacidad para ejecutar acciones necesarias.", 2],
        ["Disonancia cognitiva", "Tensión que aparece cuando creencias, actitudes o conductas entran en conflicto.", 2],
        ["Efecto de anclaje", "Influencia desproporcionada de una información inicial sobre juicios posteriores.", 2],
        ["Sesgo de disponibilidad", "Tendencia a estimar frecuencias según la facilidad con que recordamos ejemplos.", 2],
        ["Sesgo retrospectivo", "Tendencia a creer que un resultado era más previsible después de conocerlo.", 2],
        ["Efecto de encuadre", "Influencia de la forma de presentar información sobre las decisiones.", 2],
        ["Error fundamental de atribución", "Tendencia a sobrevalorar factores personales al explicar la conducta ajena.", 2],
        ["Conformidad social", "Cambio de opiniones o conductas para ajustarse a un grupo.", 2],
        ["Obediencia a la autoridad", "Conducta de seguir instrucciones de una figura de autoridad.", 2],
        ["Influencia normativa", "Conformidad motivada por el deseo de aceptación social.", 2],
        ["Influencia informativa", "Conformidad motivada por considerar que otros poseen información más correcta.", 2],
        ["Facilitación social", "Cambio en el rendimiento asociado con la presencia de otras personas.", 2],
        ["Pensamiento grupal", "Tendencia a priorizar el consenso y reducir la evaluación crítica.", 2],
        ["Polarización grupal", "Tendencia a que las posiciones de un grupo se vuelvan más extremas.", 2],
        ["Efecto espectador", "Disminución de la probabilidad de intervenir cuando otras personas están presentes.", 2],
        ["Memoria reconstructiva", "Característica de la memoria por la que los recuerdos se reconstruyen.", 2],
        ["Falsa memoria", "Recuerdo de un acontecimiento que no ocurrió o difiere de lo sucedido.", 2],
        ["Priming", "Influencia de una exposición previa sobre el procesamiento posterior.", 2],
        ["Sesgo de negatividad", "Tendencia a dar mayor peso a la información negativa.", 2],
        ["Mera exposición", "Tendencia a desarrollar familiaridad o preferencia por estímulos repetidos.", 2],
        ["Indefensión aprendida", "Reducción de intentos de actuar tras experiencias de falta de control.", 3],
        ["Profecía autocumplida", "Expectativa que contribuye a producir conductas que terminan confirmándola.", 3],
        ["Disociación", "Alteración en la integración de procesos como memoria, identidad o conciencia.", 3],
        ["Mecanismo de defensa", "Proceso psicológico que maneja conflictos o ansiedad según teorías psicodinámicas.", 3],
        ["Represión", "Concepto psicoanalítico referido a mantener ciertos contenidos fuera de la conciencia.", 3],
        ["Proyección", "Mecanismo que atribuye a otros sentimientos o impulsos propios.", 3],
        ["Sublimación", "Canalización de impulsos hacia actividades socialmente aceptadas.", 3],
        ["Transferencia", "Desplazamiento hacia el terapeuta de sentimientos vinculados con otras relaciones.", 3],
        ["Complejo de Edipo", "Concepto freudiano sobre deseos y conflictos infantiles vinculados con figuras parentales.", 3],
        ["Sombra", "En Jung, aspectos de la personalidad que una persona no reconoce o rechaza.", 3],
        ["Inconsciente colectivo", "Concepto jungiano sobre estructuras psíquicas compartidas de carácter arquetípico.", 3],
        ["Arquetipo", "Patrón simbólico o imagen primordial en la psicología analítica de Jung.", 3],
        ["Introversión", "Orientación de personalidad asociada con mayor atención al mundo interno.", 3],
        ["Extroversión", "Orientación de personalidad asociada con mayor atención al entorno externo.", 3],
        ["Apego seguro", "Patrón de vínculo que permite utilizar la figura de apego como base de seguridad.", 3],
        ["Apego evitativo", "Patrón de apego caracterizado por estrategias de distanciamiento.", 3],
        ["Apego ambivalente", "Patrón caracterizado por búsqueda intensa de proximidad e inseguridad.", 3],
        ["Zona de desarrollo próximo", "Distancia entre lo que una persona puede hacer sola y con ayuda.", 3],
        ["Andamiaje", "Apoyo temporal que facilita el aprendizaje hasta alcanzar autonomía.", 3],
        ["Asimilación", "En Piaget, incorporación de información nueva a esquemas existentes.", 3],
        ["Acomodación", "En Piaget, modificación de esquemas para responder a información nueva.", 3],
        ["Equilibración", "Proceso que busca equilibrar asimilación y acomodación.", 3],
        ["Sesgo actor-observador", "Diferencia entre explicar la propia conducta por la situación y la ajena por rasgos personales.", 3],
        ["Falso consenso", "Tendencia a sobreestimar cuánto comparten otros nuestras opiniones.", 3],
        ["Desindividuación", "Reducción de autoconciencia y responsabilidad individual en ciertas situaciones grupales.", 3],
        ["Resiliencia", "Proceso de adaptación frente a experiencias adversas.", 3],
        ["Regulación emocional", "Procesos mediante los cuales una persona influye en sus emociones.", 3],
        ["Metacognición", "Conocimiento y regulación de los propios procesos cognitivos.", 3],
        ["Sesgo de autoservicio", "Tendencia a atribuir éxitos a factores propios y fracasos a factores externos.", 4],
        ["Efecto Dunning-Kruger", "Fenómeno relacionado con la dificultad de evaluar la propia competencia.", 4],
        ["Falacia del costo hundido", "Persistencia en una decisión por inversiones pasadas irrecuperables.", 4],
        ["Sesgo de supervivencia", "Error de ignorar los casos que no superaron un proceso.", 4],
        ["Efecto de desinformación", "Alteración de un recuerdo por información engañosa posterior.", 4],
        ["Efecto de primacía", "Tendencia a recordar mejor la información presentada al comienzo.", 4],
        ["Efecto de recencia", "Tendencia a recordar mejor la información presentada al final.", 4],
        ["Atribución defensiva", "Tendencia a atribuir responsabilidad a una víctima para reducir la percepción de vulnerabilidad propia.", 4]
    ],

    semiotica: [
        ["Signo", "Elemento que representa algo para alguien en algún aspecto.", 1],
        ["Significante", "En Saussure, imagen acústica o forma material del signo lingüístico.", 1],
        ["Significado", "En Saussure, concepto mental asociado al significante.", 1],
        ["Signo lingüístico", "Unidad formada por la asociación entre significante y significado.", 1],
        ["Arbitrariedad del signo", "Principio según el cual la relación entre significante y significado no es naturalmente necesaria.", 1],
        ["Linealidad del significante", "Principio según el cual el significante acústico se desarrolla en el tiempo.", 1],
        ["Lengua", "Sistema social de signos y reglas compartido por una comunidad.", 1],
        ["Habla", "Uso individual y concreto del sistema lingüístico.", 1],
        ["Código", "Sistema de convenciones que permite producir e interpretar mensajes.", 1],
        ["Mensaje", "Contenido de información transmitido en un proceso comunicativo.", 1],
        ["Emisor", "Participante que produce o envía un mensaje.", 1],
        ["Receptor", "Participante que recibe e interpreta un mensaje.", 1],
        ["Canal", "Medio físico o técnico por el que circula un mensaje.", 1],
        ["Referente", "Objeto, situación o realidad a la que alude un signo.", 1],
        ["Contexto", "Circunstancias que intervienen en la interpretación de un mensaje.", 1],
        ["Semiosis", "Proceso por el cual algo funciona como signo y produce interpretación.", 1],
        ["Ícono", "Signo que representa su objeto mediante semejanza.", 1],
        ["Índice", "Signo conectado física o causalmente con aquello que representa.", 1],
        ["Símbolo", "Signo cuya relación con su objeto depende de convenciones o reglas.", 1],
        ["Interpretante", "En Peirce, efecto o signo mental producido por otro signo.", 2],
        ["Objeto dinámico", "En Peirce, objeto que condiciona la semiosis más allá de su representación.", 2],
        ["Objeto inmediato", "En Peirce, objeto tal como el signo lo presenta.", 2],
        ["Representamen", "Aquello que funciona como signo al representar un objeto.", 2],
        ["Primeridad", "Categoría peirceana vinculada con cualidad y posibilidad.", 2],
        ["Segundidad", "Categoría peirceana vinculada con reacción y existencia.", 2],
        ["Terceridad", "Categoría peirceana vinculada con mediación, ley y hábito.", 2],
        ["Ícono imagen", "Tipo de ícono que representa mediante cualidades semejantes.", 2],
        ["Ícono diagrama", "Tipo de ícono que representa relaciones mediante una estructura semejante.", 2],
        ["Ícono metáfora", "Tipo de ícono que representa mediante una semejanza representativa.", 2],
        ["Rema", "En Peirce, signo que presenta una posibilidad cualitativa.", 2],
        ["Dicisigno", "En Peirce, signo que funciona como proposición o afirmación.", 2],
        ["Argumento peirceano", "Signo que representa una regla de inferencia.", 2],
        ["Denotación", "Significado más directo o convencional de una expresión.", 2],
        ["Connotación", "Asociaciones culturales o secundarias vinculadas con un signo.", 2],
        ["Polisemia", "Propiedad de una expresión de tener varios significados relacionados.", 2],
        ["Sinonimia", "Relación entre expresiones con significados iguales o semejantes.", 2],
        ["Antonimia", "Relación semántica entre expresiones de significado opuesto.", 2],
        ["Metáfora", "Figura que transfiere significado mediante semejanza.", 2],
        ["Metonimia", "Figura que sustituye una expresión por otra vinculada por contigüidad.", 2],
        ["Sinécdoque", "Figura que designa el todo por la parte o la parte por el todo.", 2],
        ["Intertextualidad", "Relación que un texto establece con otros textos.", 2],
        ["Discurso", "Práctica de producción de sentido situada en un contexto social e histórico.", 2],
        ["Pragmática", "Área que estudia el uso del lenguaje en contexto.", 2],
        ["Acto de habla", "Acción realizada mediante una expresión lingüística.", 2],
        ["Presuposición", "Información que una expresión da por sentada.", 3],
        ["Implicatura", "Significado sugerido que se infiere mediante contexto.", 3],
        ["Deixis", "Fenómeno lingüístico que señala personas, lugares o tiempos según la enunciación.", 3],
        ["Enunciación", "Acto y situación en que un sujeto produce un enunciado.", 3],
        ["Enunciado", "Producto lingüístico concreto de un acto de enunciación.", 3],
        ["Función referencial", "Función del lenguaje centrada en el contexto o referente.", 3],
        ["Función emotiva", "Función del lenguaje centrada en quien emite el mensaje.", 3],
        ["Función conativa", "Función del lenguaje orientada al receptor.", 3],
        ["Función fática", "Función que establece, mantiene o comprueba el canal comunicativo.", 3],
        ["Función metalingüística", "Función que utiliza el lenguaje para hablar del propio código.", 3],
        ["Función poética", "Función que destaca la forma y organización del mensaje.", 3],
        ["Mito", "En Barthes, sistema de significación que naturaliza sentidos culturales.", 3],
        ["Anclaje", "Recurso que orienta la interpretación de una imagen mediante texto.", 3],
        ["Relevo", "Relación en la que texto e imagen aportan información complementaria.", 3],
        ["Significación", "Proceso o resultado por el que se produce sentido.", 3],
        ["Semántica", "Disciplina que estudia el significado de las expresiones lingüísticas.", 3],
        ["Sintagma", "Combinación de unidades lingüísticas en una secuencia.", 3],
        ["Paradigma", "Conjunto de unidades que pueden ocupar una misma posición.", 3],
        ["Oposición binaria", "Organización del sentido mediante pares de términos contrastantes.", 3],
        ["Isotopía", "Repetición de elementos semánticos que produce coherencia.", 3],
        ["Polifonía", "Presencia de distintas voces o perspectivas en un discurso.", 3],
        ["Dialogismo", "Concepción del lenguaje como interacción entre voces y discursos.", 3],
        ["Código cultural", "Sistema de convenciones compartidas que orienta la interpretación.", 3],
        ["Estereotipo", "Representación simplificada y generalizada de un grupo.", 3],
        ["Comunicación no verbal", "Transmisión de información mediante gestos, posturas y expresiones.", 3],
        ["Kinésica", "Estudio de los movimientos corporales como elementos comunicativos.", 3],
        ["Proxémica", "Estudio del uso comunicativo del espacio y las distancias.", 3],
        ["Paralingüística", "Estudio de elementos vocales como tono, ritmo e intensidad.", 3],
        ["Multimodalidad", "Combinación de distintos modos semióticos para producir sentido.", 4],
        ["Transcodificación", "Transferencia de contenido entre sistemas de signos diferentes.", 4],
        ["Semiótica social", "Enfoque que estudia cómo los signos se construyen socialmente.", 4],
        ["Semiosfera", "Concepto de Lotman para el espacio cultural donde funcionan sistemas de signos.", 4],
        ["Texto cultural", "Configuración de signos que produce sentido dentro de una cultura.", 4],
        ["Código elaborado", "Modo de comunicación más explícito y menos dependiente del contexto inmediato.", 4],
        ["Código restringido", "Modo de comunicación más dependiente del contexto compartido.", 4],
        ["Hegemonía cultural", "Proceso por el que ciertos sentidos y valores adquieren predominio social.", 4],
        ["Naturalización", "Proceso por el cual una construcción cultural aparece como natural.", 4],
        ["Retórica visual", "Uso de recursos visuales para persuadir y producir efectos de sentido.", 4]
    ],

    logica: [
        ["Premisa", "Proposición que sirve de punto de partida para sostener una conclusión.", 1],
        ["Conclusión", "Proposición que se deriva de una o varias premisas.", 1],
        ["Argumento", "Conjunto de proposiciones en el que unas ofrecen apoyo a otra.", 1],
        ["Deducción", "Razonamiento cuya conclusión se sigue necesariamente de las premisas si es válido.", 1],
        ["Inducción", "Razonamiento que generaliza a partir de observaciones particulares.", 1],
        ["Abducción", "Razonamiento que propone una hipótesis como explicación plausible.", 1],
        ["Proposición", "Enunciado declarativo que puede evaluarse como verdadero o falso.", 1],
        ["Negación", "Operación lógica que invierte el valor de verdad de una proposición.", 1],
        ["Conjunción", "Operación lógica verdadera cuando ambas proposiciones son verdaderas.", 1],
        ["Disyunción", "Operación lógica que expresa alternativas.", 1],
        ["Condicional", "Proposición que expresa que si ocurre un antecedente, ocurre un consecuente.", 1],
        ["Bicondicional", "Proposición que expresa equivalencia en ambos sentidos.", 1],
        ["Silogismo", "Razonamiento deductivo formado clásicamente por dos premisas y una conclusión.", 1],
        ["Validez", "Propiedad de un argumento cuya conclusión se sigue de sus premisas.", 1],
        ["Solidez", "Propiedad de un argumento válido cuyas premisas son verdaderas.", 1],
        ["Contradicción", "Relación entre proposiciones incompatibles en verdad.", 1],
        ["Tautología", "Fórmula lógica verdadera bajo todas las asignaciones posibles.", 1],
        ["Contingencia lógica", "Fórmula que puede ser verdadera o falsa según la interpretación.", 1],
        ["Equivalencia lógica", "Relación entre proposiciones con iguales valores de verdad en todas las interpretaciones.", 2],
        ["Modus ponens", "Regla que permite afirmar el consecuente al tener un condicional y su antecedente.", 2],
        ["Modus tollens", "Regla que permite negar el antecedente al negar el consecuente.", 2],
        ["Silogismo hipotético", "Regla que encadena dos condicionales.", 2],
        ["Silogismo disyuntivo", "Regla que descarta una alternativa de una disyunción para afirmar la otra.", 2],
        ["Dilema constructivo", "Regla que deriva una disyunción de consecuencias a partir de condicionales.", 2],
        ["Cuantificador universal", "Expresión que indica que una propiedad se cumple para todos los elementos.", 2],
        ["Cuantificador existencial", "Expresión que indica que al menos un elemento cumple una propiedad.", 2],
        ["Predicado", "Expresión que atribuye una propiedad o relación.", 2],
        ["Variable", "Símbolo que representa un elemento no especificado.", 2],
        ["Dominio", "Conjunto de objetos sobre los que se interpretan las variables.", 2],
        ["Falacia formal", "Error de razonamiento producido por una estructura inválida.", 2],
        ["Falacia informal", "Error argumentativo relacionado con contenido, lenguaje o contexto.", 2],
        ["Ad hominem", "Falacia que ataca a quien presenta un argumento.", 2],
        ["Hombre de paja", "Falacia que distorsiona la posición contraria para refutar una versión débil.", 2],
        ["Falso dilema", "Falacia que presenta dos alternativas como únicas cuando existen otras.", 2],
        ["Generalización apresurada", "Conclusión general basada en una muestra insuficiente.", 2],
        ["Falsa causa", "Falacia que atribuye causalidad sin justificación suficiente.", 2],
        ["Pendiente resbaladiza", "Argumento que supone consecuencias extremas sin justificar la cadena causal.", 2],
        ["Petición de principio", "Falacia en la que la conclusión está presupuesta en las premisas.", 2],
        ["Apelación a la autoridad", "Argumento que utiliza una autoridad como respaldo sin pertinencia suficiente.", 2],
        ["Apelación a la mayoría", "Falacia que considera verdadera una afirmación porque muchos la creen.", 2],
        ["Apelación a la ignorancia", "Falacia que considera verdadera una afirmación porque no se probó su falsedad.", 2],
        ["Falsa analogía", "Argumento que concluye una semejanza relevante a partir de similitudes insuficientes.", 2],
        ["Equívoco", "Falacia que utiliza una palabra con sentidos diferentes dentro del argumento.", 2],
        ["Anfibología", "Ambigüedad sintáctica que permite distintas interpretaciones.", 2],
        ["Composición", "Falacia que atribuye al conjunto una propiedad de sus partes.", 2],
        ["División", "Falacia que atribuye a cada parte una propiedad del conjunto.", 2],
        ["Afirmación del consecuente", "Falacia que concluye el antecedente a partir de un condicional y su consecuente.", 3],
        ["Negación del antecedente", "Falacia que niega el consecuente al negar el antecedente.", 3],
        ["Cuadro de oposición", "Esquema tradicional que representa relaciones entre proposiciones categóricas.", 3],
        ["Proposición categórica", "Enunciado que afirma o niega una relación entre clases.", 3],
        ["Contrariedad", "Relación en la que dos proposiciones no pueden ser verdaderas simultáneamente.", 3],
        ["Contradicción lógica", "Relación en la que una proposición y su negación no pueden compartir valor de verdad.", 3],
        ["Subcontrariedad", "Relación en la que dos proposiciones no pueden ser falsas simultáneamente.", 3],
        ["Subalternación", "Relación tradicional entre proposiciones universales y particulares.", 3],
        ["Paradoja del mentiroso", "Enunciado autorreferencial que parece contradecirse al afirmar que es falso.", 3],
        ["Paradoja de Russell", "Paradoja de conjuntos relacionada con el conjunto de todos los conjuntos que no se contienen a sí mismos.", 3],
        ["Paradoja de Zenón", "Argumentos que cuestionan el movimiento y la multiplicidad.", 3],
        ["Paradoja del barbero", "Versión popular de una contradicción autorreferencial vinculada con Russell.", 3],
        ["Paradoja del cumpleaños", "Resultado probabilístico sobre compartir fecha de cumpleaños en un grupo.", 3],
        ["Paradoja de Simpson", "Tendencia estadística que puede invertirse al combinar grupos.", 3],
        ["Paradoja de Monty Hall", "Problema probabilístico donde cambiar de puerta aumenta la probabilidad de ganar.", 3],
        ["Paradoja de la omnipotencia", "Problema sobre la coherencia del concepto de poder ilimitado.", 3],
        ["Paradoja del abuelo", "Problema de consistencia causal asociado con viajes hipotéticos al pasado.", 3],
        ["Principio de no contradicción", "Principio según el cual algo no puede ser verdadero y falso simultáneamente en el mismo sentido.", 3],
        ["Principio de identidad", "Principio según el cual cada cosa es idéntica a sí misma.", 3],
        ["Tercero excluido", "Principio según el cual una proposición es verdadera o su negación lo es.", 3],
        ["Lógica modal", "Sistema lógico que estudia necesidad y posibilidad.", 3],
        ["Necesidad", "Modalidad lógica que expresa que algo no puede ser de otra manera.", 3],
        ["Posibilidad", "Modalidad lógica que expresa que algo puede ser el caso.", 3],
        ["Lógica difusa", "Sistema que permite grados de pertenencia o verdad.", 3],
        ["Lógica temporal", "Sistema que incorpora operadores para razonar sobre el tiempo.", 3],
        ["Lógica deóntica", "Sistema lógico que estudia obligación, permiso y prohibición.", 3],
        ["Lógica epistémica", "Sistema lógico que formaliza conocimiento y creencia.", 3],
        ["Probabilidad condicional", "Probabilidad de un evento bajo la condición de que otro haya ocurrido.", 4],
        ["Independencia estadística", "Relación en la que un evento no modifica la probabilidad de otro.", 4],
        ["Teorema de Bayes", "Regla matemática para actualizar probabilidades mediante nueva evidencia.", 4],
        ["Falacia del jugador", "Creencia errónea de que resultados aleatorios independientes deben compensarse.", 4],
        ["Sesgo de tasa base", "Tendencia a ignorar la frecuencia general al evaluar un caso particular.", 4],
        ["Paradoja de los cuervos", "Problema de confirmación inductiva sobre hipótesis y observaciones.", 4],
        ["Paradoja de Newcomb", "Problema sobre elección racional, predicción y causalidad.", 4],
        ["Problema de la inducción", "Dificultad de justificar que observaciones pasadas garantizan regularidades futuras.", 4],
        ["Problema de la demarcación", "Problema filosófico de distinguir ciencia de no ciencia.", 4]
    ]
};

// =====================================================
// 3. CONFIGURACIÓN DE LAS SALAS
// =====================================================

const configuracionSalas = [
    {
        id: "sala1",
        titulo: "El archivo de los enigmas",
        etiqueta: "SALA 01 · FILOSOFÍA Y PENSAMIENTO",
        descripcion: "Entre manuscritos antiguos y preguntas olvidadas, cada respuesta revela una pieza del pensamiento humano.",
        tema: "tema-filosofica",
        tarjeta: "sala-filosofica",
        simbolo: "☼",
        clave: "filosofia",
        historia: "En 1891, un investigador anónimo dejó un manuscrito en una biblioteca que no figura en ningún catálogo. En sus páginas escribió que la realidad no se descubre: se interroga.",
        fragmentos: [
            "Toda certeza puede convertirse en una prisión cuando dejamos de cuestionarla.",
            "El conocimiento no es una posesión, sino una búsqueda que nunca termina.",
            "¿Qué diferencia existe entre creer y saber?",
            "Las respuestas no siempre se encuentran en los libros."
        ],
        final: "Has abierto el archivo de los enigmas. El manuscrito señala una segunda ubicación."
    },
    {
        id: "sala2",
        titulo: "La mente en penumbra",
        etiqueta: "SALA 02 · PSICOLOGÍA Y CONDUCTA",
        descripcion: "Tus recuerdos, decisiones y percepciones serán puestos a prueba.",
        tema: "tema-psicologica",
        tarjeta: "sala-psicologica",
        simbolo: "◉",
        clave: "psicologia",
        historia: "El expediente pertenece a una institución que cerró sus puertas hace décadas. En la portada hay una frase: «El observador también forma parte del experimento».",
        fragmentos: [
            "La memoria no siempre conserva los acontecimientos como ocurrieron.",
            "La autoridad puede modificar la conducta.",
            "Lo que negamos también puede formar parte de nuestra personalidad.",
            "Conocer los mecanismos de la mente no significa estar libre de ellos."
        ],
        final: "El expediente está abierto. Comprender la mente no significa dominarla."
    },
    {
        id: "sala3",
        titulo: "El lenguaje oculto",
        etiqueta: "SALA 03 · SEMIÓTICA Y SIGNIFICACIÓN",
        descripcion: "Todo comunica algo. Sin embargo, no todo significa lo que parece.",
        tema: "tema-semiotica",
        tarjeta: "sala-semiotica",
        simbolo: "⌘",
        clave: "semiotica",
        historia: "En una sala cubierta de mapas, alguien ha reunido señales, imágenes y mensajes.",
        fragmentos: [
            "Un símbolo no siempre revela su significado por su forma.",
            "Una huella señala una presencia; una imagen representa un objeto.",
            "Interpretar es relacionar signos, objetos y contextos.",
            "El lenguaje puede ocultar tanto como revelar."
        ],
        final: "Has descubierto que los signos pueden ocultar tanto como revelar."
    },
    {
        id: "sala4",
        titulo: "El laberinto de la realidad",
        etiqueta: "SALA 04 · LÓGICA Y PARADOJAS",
        descripcion: "Las certezas se desarman. La lógica será tu herramienta para atravesar un territorio imposible.",
        tema: "tema-laberinto",
        tarjeta: "sala-laberinto",
        simbolo: "∞",
        clave: "logica",
        historia: "El mapa conduce a un espacio imposible. Sus pasillos se contradicen.",
        fragmentos: [
            "Una conclusión depende de sus premisas.",
            "Un objeto puede conservar su identidad aunque cambien sus partes.",
            "Una frase puede contradecirse a sí misma.",
            "No buscabas la salida: buscabas descubrir quién construyó el laberinto."
        ],
        final: "Has atravesado los cuatro umbrales. El archivo guardaba las preguntas que habías dejado de hacer."
    }
];

// =====================================================
// 4. UTILIDADES
// =====================================================

function mezclar(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

function elegirAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function normalizar(texto) {
    return String(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

// =====================================================
// 5. PLANTILLAS DE PREGUNTAS
// =====================================================

const plantillas = [
    {
        titulo: "El concepto oculto",
        crear: (nombre, definicion) =>
            `Un investigador encuentra esta descripción: ${definicion} ¿Qué concepto está buscando?`
    },
    {
        titulo: "La situación inesperada",
        crear: (nombre, definicion) =>
            `En un antiguo expediente se describe un fenómeno: ${definicion} ¿Cómo se denomina esta idea?`
    },
    {
        titulo: "La pieza que falta",
        crear: (nombre, definicion) =>
            `Una nota contiene una explicación teórica: ${definicion} El investigador debe descubrir el nombre del concepto. ¿Cuál es?`
    },
    {
        titulo: "El desafío del investigador",
        crear: (nombre, definicion) =>
            `Para resolver un caso, necesitás reconocer una idea que se caracteriza por lo siguiente: ${definicion} ¿Cuál es su nombre?`
    },
    {
        titulo: "El documento perdido",
        crear: (nombre, definicion) =>
            `El archivo describe una noción fundamental: ${definicion} ¿Qué término debería completar el documento?`
    },
    {
        titulo: "La clave del conocimiento",
        crear: (nombre, definicion) =>
            `Leé atentamente: ${definicion} Identificá el concepto que representa esta explicación.`
    }
];

// =====================================================
// 6. GENERADOR DE DESAFÍOS
// =====================================================

function crearDesafio(concepto, indice) {
    const [nombre, definicion, dificultad] = concepto;

    const plantilla = elegirAleatorio(plantillas);

    // Dígito aleatorio independiente del concepto.
    const numero = String(Math.floor(Math.random() * 10));

    return {
        id: normalizar(nombre).replace(/\s/g, "-"),
        categoria: nombre,
        dificultad,
        pregunta: plantilla.titulo,
        contexto: plantilla.crear(nombre, definicion),
        respuestas: [normalizar(nombre)],
        respuestaVisible: nombre,
        numero,
        pista: `La respuesta es un concepto de esta disciplina. Prestá atención a la definición y a sus palabras clave.`,
        explicacion: `${nombre}: ${definicion}`
    };
}

function generarDesafiosDeSala(clave, conceptosUsados) {
    const conceptos = catalogo[clave];

    if (!conceptos) {
        throw new Error(`No existe el catálogo: ${clave}`);
    }

    const disponibles = conceptos.filter(concepto =>
        !conceptosUsados.has(concepto[0])
    );

    if (disponibles.length < ENIGMAS_POR_SALA) {
        throw new Error(`No hay suficientes conceptos en ${clave}.`);
    }

    const seleccionados = mezclar(disponibles)
        .slice(0, ENIGMAS_POR_SALA);

    seleccionados.forEach(concepto =>
        conceptosUsados.add(concepto[0])
    );

    return seleccionados
        .map((concepto, indice) => crearDesafio(concepto, indice))
        .sort((a, b) => a.dificultad - b.dificultad);
}

// =====================================================
// 7. GENERAR UNA PARTIDA COMPLETA
// =====================================================

function generarPartida() {
    const conceptosUsados = new Set();

    const habitaciones = configuracionSalas.map(configuracion => ({
        ...configuracion,
        desafios: generarDesafiosDeSala(
            configuracion.clave,
            conceptosUsados
        ),
        indice: 0,
        numeros: [],
        fragmentosDescubiertos: [],
        resuelto: false,
        completada: false
    }));

    return {
        version: VERSION_PARTIDA,
        fechaCreacion: new Date().toISOString(),
        salaActual: null,
        habitaciones
    };
}

// =====================================================
// 8. GUARDAR Y RECUPERAR PARTIDA
// =====================================================

function guardarPartida() {
    try {
        localStorage.setItem(
            CLAVE_GUARDADO,
            JSON.stringify(partida)
        );
    } catch (error) {
        console.error("No se pudo guardar la partida:", error);
    }
}

function cargarPartida() {
    try {
        const guardado = localStorage.getItem(CLAVE_GUARDADO);

        if (!guardado) return null;

        const datos = JSON.parse(guardado);

        if (
            datos.version !== VERSION_PARTIDA ||
            !Array.isArray(datos.habitaciones) ||
            datos.habitaciones.length !== CANTIDAD_SALAS
        ) {
            return null;
        }

        const valida = datos.habitaciones.every(sala =>
            Array.isArray(sala.desafios) &&
            sala.desafios.length === ENIGMAS_POR_SALA &&
            Array.isArray(sala.numeros) &&
            Array.isArray(sala.fragmentosDescubiertos) &&
            Number.isInteger(sala.indice) &&
            sala.indice >= 0 &&
            sala.indice <= ENIGMAS_POR_SALA &&
            sala.numeros.length <= ENIGMAS_POR_SALA &&
            sala.desafios.every(desafio =>
                typeof desafio.pregunta === "string" &&
                Array.isArray(desafio.respuestas)
            )
        );

        return valida ? datos : null;

    } catch (error) {
        console.warn("No se pudo recuperar la partida:", error);
        return null;
    }
}

// =====================================================
// 9. ESTADO DEL JUEGO
// =====================================================

let partida = cargarPartida();

if (!partida) {
    partida = generarPartida();
    guardarPartida();
}

// =====================================================
// 10. ELEMENTOS HTML
// =====================================================

const portal = document.getElementById("portal");
const juego = document.getElementById("juego");

const panelEnigma = document.getElementById("panel-enigma");
const panelCodigo = document.getElementById("panel-codigo");
const salaCompletada = document.getElementById("sala-completada");

const pregunta = document.getElementById("pregunta");
const contexto = document.getElementById("contexto");
const respuesta = document.getElementById("respuesta");
const mensaje = document.getElementById("mensaje");
const pista = document.getElementById("pista");

const zonaRespuesta = document.getElementById("zona-respuesta");
const resultadoEnigma = document.getElementById("resultado-enigma");

const codigoFinal = document.getElementById("codigo-final");
const mensajeCodigo = document.getElementById("mensaje-codigo");

const tituloSala = document.getElementById("titulo-sala");
const etiquetaSala = document.getElementById("etiqueta-sala");
const descripcionSala = document.getElementById("descripcion-sala");

const salasGrid = document.getElementById("salas-grid");

// =====================================================
// 11. SALA ACTUAL
// =====================================================

function obtenerSalaActual() {
    if (partida.salaActual === null) return null;

    return partida.habitaciones[partida.salaActual];
}

// =====================================================
// 12. NUEVA PARTIDA
// =====================================================

function nuevaPartida() {
    const confirmar = confirm(
        "¿Querés generar una nueva partida? Se perderá el progreso actual."
    );

    if (!confirmar) return;

    partida = generarPartida();

    guardarPartida();

    juego.hidden = true;
    portal.hidden = false;

    document.body.className = "tema-portal";

    actualizarPortal();
}

// =====================================================
// 13. ACTUALIZAR PORTAL
// =====================================================

function actualizarPortal() {
    const habitaciones = partida.habitaciones;

    const desafiosResueltos = habitaciones.reduce(
        (total, sala) => total + sala.numeros.length,
        0
    );

    const salasCompletadas = habitaciones.filter(
        sala => sala.completada
    ).length;

    const porcentaje = Math.round(
        (desafiosResueltos / 16) * 100
    );

    const contador = document.getElementById("contador-general");
    const barra = document.getElementById("barra-general");
    const estado = document.getElementById("estado-general");
    const titulo = document.getElementById("titulo-partida");
    const fecha = document.getElementById("estado-partida");

    if (contador) contador.textContent =
        `${desafiosResueltos} de 16 desafíos`;

    if (barra) barra.style.width = porcentaje + "%";

    if (estado) estado.textContent =
        `${salasCompletadas} de 4 salas completadas · Guardado automático`;

    if (titulo) titulo.textContent = "Investigación en curso";

    if (fecha) fecha.textContent =
        `Partida iniciada: ${new Date(partida.fechaCreacion).toLocaleString("es-AR")}`;

    if (!salasGrid) return;

    salasGrid.innerHTML = "";

    habitaciones.forEach((sala, indice) => {
        const tarjeta = document.createElement("article");

        tarjeta.className = `tarjeta-sala ${sala.tarjeta}`;

        let estadoSala = "Sin explorar";

        if (sala.completada) {
            estadoSala = "✦ Candado desbloqueado";
        } else if (sala.numeros.length > 0) {
            estadoSala = `${sala.numeros.length} de 4 desafíos resueltos`;
        }

        const botonTexto = sala.completada
            ? "Revisar sala"
            : sala.numeros.length > 0
                ? "Continuar investigación"
                : "Entrar en la sala";

        tarjeta.innerHTML = `
            <div class="decoracion-tarjeta">${sala.simbolo}</div>
            <p class="numero-sala">${sala.etiqueta}</p>
            <h3>${sala.titulo}</h3>
            <p class="descripcion-sala">${sala.descripcion}</p>
            <p class="estado">${estadoSala}</p>
            <button class="boton-entrar" data-sala="${indice}">
                ${botonTexto}
            </button>
        `;

        salasGrid.appendChild(tarjeta);
    });

    salasGrid.querySelectorAll("[data-sala]").forEach(boton => {
        boton.addEventListener("click", () => {
            entrarSala(Number(boton.dataset.sala));
        });
    });
}

// =====================================================
// 14. ENTRAR EN UNA SALA
// =====================================================

function entrarSala(numero) {
    if (
        !Number.isInteger(numero) ||
        numero < 0 ||
        numero >= CANTIDAD_SALAS
    ) {
        return;
    }

    partida.salaActual = numero;

    guardarPartida();

    const sala = obtenerSalaActual();

    document.body.className = sala.tema;

    portal.hidden = true;
    juego.hidden = false;

    tituloSala.textContent = sala.titulo;
    etiquetaSala.textContent = sala.etiqueta;
    descripcionSala.textContent = sala.descripcion;

    document.getElementById("introduccion-historia").textContent =
        sala.historia;

    actualizarSala();
}

// =====================================================
// 15. ACTUALIZAR SALA
// =====================================================

function actualizarSala() {
    const sala = obtenerSalaActual();

    if (!sala) return;

    actualizarRuedas();
    actualizarProgresoSala();

    if (sala.completada) {
        panelEnigma.hidden = true;
        panelCodigo.hidden = true;
        salaCompletada.hidden = false;

        document.getElementById("titulo-completado").textContent =
            "¡Has atravesado este umbral!";

        document.getElementById("texto-completado").textContent =
            sala.final;

        return;
    }

    salaCompletada.hidden = true;

    if (sala.numeros.length === ENIGMAS_POR_SALA) {
        mostrarCodigoFinal();
    } else {
        panelCodigo.hidden = true;
        panelEnigma.hidden = false;
        mostrarEnigma();
    }
}

// =====================================================
// 16. MOSTRAR ENIGMA
// =====================================================

function mostrarEnigma() {
    const sala = obtenerSalaActual();

    if (!sala || sala.indice >= ENIGMAS_POR_SALA) return;

    const desafio = sala.desafios[sala.indice];

    pregunta.textContent = desafio.pregunta;
    contexto.textContent = desafio.contexto;

    document.getElementById("categoria-enigma").textContent =
        desafio.categoria;

    document.getElementById("dificultad-enigma").textContent =
        "Dificultad " + desafio.dificultad + " / 4";

    document.getElementById("contador-enigmas").textContent =
        `Desafío ${sala.indice + 1} de 4`;

    respuesta.value = "";
    mensaje.textContent = "";

    pista.textContent = "";
    pista.hidden = true;

    zonaRespuesta.hidden = sala.resuelto;
    resultadoEnigma.hidden = !sala.resuelto;

    if (sala.resuelto) {
        mostrarResultadoResuelto();
    } else {
        respuesta.disabled = false;
        respuesta.focus();
    }
}

// =====================================================
// 17. DISTANCIA ENTRE RESPUESTAS
// =====================================================

function calcularDistancia(texto1, texto2) {
    const a = normalizar(texto1);
    const b = normalizar(texto2);

    const matriz = [];

    for (let i = 0; i <= a.length; i++) {
        matriz[i] = [i];
    }

    for (let j = 0; j <= b.length; j++) {
        matriz[0][j] = j;
    }

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const costo = a[i - 1] === b[j - 1] ? 0 : 1;

            matriz[i][j] = Math.min(
                matriz[i - 1][j] + 1,
                matriz[i][j - 1] + 1,
                matriz[i - 1][j - 1] + costo
            );
        }
    }

    return matriz[a.length][b.length];
}

// =====================================================
// 18. BUSCAR RESPUESTAS PARECIDAS
// =====================================================

function buscarRespuestaParecida(respuestaUsuario, respuestasCorrectas) {
    const usuario = normalizar(respuestaUsuario);

    if (usuario.length < 4) return null;

    let mejorRespuesta = null;
    let mejorSimilitud = 0;

    respuestasCorrectas.forEach(opcion => {
        const correcta = normalizar(opcion);

        const distancia = calcularDistancia(usuario, correcta);

        const longitudMaxima = Math.max(
            usuario.length,
            correcta.length
        );

        const similitud = longitudMaxima === 0
            ? 1
            : 1 - distancia / longitudMaxima;

        if (similitud > mejorSimilitud) {
            mejorSimilitud = similitud;
            mejorRespuesta = opcion;
        }
    });

    return mejorSimilitud >= 0.65 ? mejorRespuesta : null;
}

// =====================================================
// 19. COMPROBAR RESPUESTA
// =====================================================

function comprobarRespuesta() {
    const sala = obtenerSalaActual();

    if (!sala || sala.resuelto || sala.completada) return;

    const desafio = sala.desafios[sala.indice];

    const respuestaUsuario = normalizar(respuesta.value);

    if (respuestaUsuario === "") {
        mensaje.textContent =
            "Primero tenés que escribir una respuesta.";

        mensaje.classList.remove("sugerencia");

        return;
    }

    const esCorrecta = desafio.respuestas.some(opcion =>
        normalizar(opcion) === respuestaUsuario
    );

    if (esCorrecta) {
        mensaje.classList.remove("sugerencia");
        resolverDesafio();
        return;
    }

    const sugerencia = buscarRespuestaParecida(
        respuestaUsuario,
        desafio.respuestas
    );

    if (sugerencia) {
        mensaje.textContent =
            `¿Quisiste decir "${desafio.respuestaVisible}"? Revisá tu respuesta.`;

        mensaje.classList.add("sugerencia");

    } else {
        mensaje.textContent =
            "La respuesta no es correcta. Volvé a investigar.";

        mensaje.classList.remove("sugerencia");
    }

    respuesta.focus();
    respuesta.select();
}

// =====================================================
// 20. RESOLVER DESAFÍO
// =====================================================

function resolverDesafio() {
    const sala = obtenerSalaActual();

    if (!sala || sala.resuelto || sala.indice >= ENIGMAS_POR_SALA) {
        return;
    }

    const desafio = sala.desafios[sala.indice];

    sala.numeros.push(desafio.numero);

    sala.fragmentosDescubiertos.push(
        sala.fragmentos[sala.indice]
    );

    sala.resuelto = true;

    guardarPartida();

    actualizarRuedas();
    actualizarProgresoSala();

    mostrarResultadoResuelto();
}

// =====================================================
// 21. MOSTRAR RESULTADO
// =====================================================

function mostrarResultadoResuelto() {
    const sala = obtenerSalaActual();

    if (!sala) return;

    const desafio = sala.desafios[sala.indice];

    zonaRespuesta.hidden = true;
    resultadoEnigma.hidden = false;

    document.getElementById("explicacion").textContent =
        desafio.explicacion;

    document.getElementById("fragmento-historia").textContent =
        sala.fragmentos[sala.indice];

    const boton = document.getElementById("boton-continuar");

    boton.textContent =
        sala.indice === ENIGMAS_POR_SALA - 1
            ? "Revelar combinación"
            : "Continuar investigación";
}

// =====================================================
// 22. CONTINUAR DESAFÍO
// =====================================================

function continuarEnigma() {
    const sala = obtenerSalaActual();

    if (!sala || !sala.resuelto) return;

    if (sala.indice < ENIGMAS_POR_SALA - 1) {
        sala.indice++;
        sala.resuelto = false;

        guardarPartida();

        actualizarProgresoSala();
        mostrarEnigma();

    } else {
        sala.indice = ENIGMAS_POR_SALA;

        guardarPartida();

        mostrarCodigoFinal();
    }
}

// =====================================================
// 23. MOSTRAR PISTA
// =====================================================

function mostrarPista() {
    const sala = obtenerSalaActual();

    if (!sala || sala.resuelto) return;

    const desafio = sala.desafios[sala.indice];

    pista.textContent = "Pista: " + desafio.pista;
    pista.hidden = false;
}

// =====================================================
// 24. ACTUALIZAR RUEDAS DEL CANDADO
// =====================================================

function actualizarRuedas() {
    const sala = obtenerSalaActual();

    if (!sala) return;

    for (let i = 0; i < 4; i++) {
        const rueda = document.getElementById(`rueda${i + 1}`);

        if (rueda) {
            rueda.textContent = sala.numeros[i] ?? "?";
        }
    }
}

// =====================================================
// 25. ACTUALIZAR PROGRESO
// =====================================================

function actualizarProgresoSala() {
    const sala = obtenerSalaActual();

    if (!sala) return;

    const porcentaje = Math.round(
        (sala.numeros.length / ENIGMAS_POR_SALA) * 100
    );

    const barra = document.getElementById("barra-sala");
    const porcentajeElemento = document.getElementById("porcentaje");
    const contador = document.getElementById("contador-enigmas");

    if (barra) barra.style.width = porcentaje + "%";

    if (porcentajeElemento) {
        porcentajeElemento.textContent = porcentaje + "%";
    }

    if (contador) {
        contador.textContent =
            `Desafíos resueltos: ${sala.numeros.length} de 4`;
    }
}

// =====================================================
// 26. MOSTRAR COMBINACIÓN
// =====================================================

function mostrarCodigoFinal() {
    const sala = obtenerSalaActual();

    if (!sala) return;

    panelEnigma.hidden = true;
    panelCodigo.hidden = false;
    salaCompletada.hidden = true;

    document.getElementById("codigo-revelado").textContent =
        sala.numeros.join("");

    codigoFinal.value = "";
    mensajeCodigo.textContent = "";

    codigoFinal.focus();
}

// =====================================================
// 27. DESBLOQUEAR CANDADO
// =====================================================

function abrirCandado() {
    const sala = obtenerSalaActual();

    if (!sala || sala.numeros.length !== ENIGMAS_POR_SALA) {
        return;
    }

    const codigoCorrecto = sala.numeros.join("");
    const codigoIngresado = codigoFinal.value.trim();

    if (!/^\d{4}$/.test(codigoIngresado)) {
        mensajeCodigo.textContent =
            "Ingresá una combinación de cuatro números.";

        return;
    }

    if (codigoIngresado === codigoCorrecto) {
        sala.completada = true;

        guardarPartida();
        actualizarPortal();

        panelCodigo.hidden = true;
        salaCompletada.hidden = false;

        document.getElementById("titulo-completado").textContent =
            "¡Candado desbloqueado!";

        document.getElementById("texto-completado").textContent =
            sala.final;

    } else {
        mensajeCodigo.textContent =
            "Combinación incorrecta. El candado permanece cerrado.";

        codigoFinal.value = "";
        codigoFinal.focus();
    }
}

// =====================================================
// 28. VOLVER AL PORTAL
// =====================================================

function volverPortal() {
    juego.hidden = true;
    portal.hidden = false;

    partida.salaActual = null;

    guardarPartida();

    document.body.className = "tema-portal";

    actualizarPortal();
}

// =====================================================
// 29. ATAJOS DE TECLADO
// =====================================================

if (respuesta) {
    respuesta.addEventListener("keydown", evento => {
        if (evento.key === "Enter") {
            comprobarRespuesta();
        }
    });
}

if (codigoFinal) {
    codigoFinal.addEventListener("keydown", evento => {
        if (evento.key === "Enter") {
            abrirCandado();
        }
    });
}

// =====================================================
// 30. INICIALIZACIÓN
// =====================================================

function iniciarJuego() {
    actualizarPortal();

    if (partida.salaActual !== null) {
        const sala = obtenerSalaActual();

        if (sala && !sala.completada) {
            // Se inicia desde el portal.
            // El jugador puede volver a entrar cuando quiera.
            document.body.className = "tema-portal";
        }
    }
}

iniciarJuego();
