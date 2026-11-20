/* ============================================
   EL MISTERIO DE LOS CUATRO UMBRALES
   Generador procedural de escape rooms
   ============================================ */

const CLAVE_GUARDADO = "misterioCuatroUmbrales_v2";

const CANTIDAD_SALAS = 4;
const ENIGMAS_POR_SALA = 4;

// ============================================
// BANCO DE DESAFÍOS
// 24 desafíos: 6 por nivel de dificultad.
// ============================================

const bancoDesafios = [

    // ----------------------------------------
    // NIVEL 1: INICIACIÓN
    // ----------------------------------------

    {
        id: "d01",
        dificultad: 1,
        categoria: "Psicología",
        pregunta: "El espejo de las propias creencias",
        contexto: "Una persona cree que todos los gatos son peligrosos. Cada vez que encuentra una noticia sobre un ataque de un gato, la recuerda y la utiliza como prueba. Sin embargo, ignora las experiencias que contradicen su creencia. ¿Qué sesgo cognitivo está operando?",
        respuestas: ["sesgo de confirmacion", "sesgo confirmatorio"],
        numero: "3",
        pista: "La persona selecciona la información que confirma lo que ya cree.",
        explicacion: "El sesgo de confirmación nos lleva a buscar, interpretar y recordar información que favorece nuestras creencias previas."
    },
    {
        id: "d02",
        dificultad: 1,
        categoria: "Semiótica",
        pregunta: "La idea detrás de la palabra",
        contexto: "En el modelo de Ferdinand de Saussure, un signo lingüístico tiene dos caras. Una es la imagen acústica o forma de la palabra. La otra es el concepto mental asociado. ¿Cómo se llama este último componente?",
        respuestas: ["significado"],
        numero: "1",
        pista: "Es el concepto que aparece en la mente cuando escuchamos una palabra.",
        explicacion: "El significado es el concepto mental asociado al significante. Ambos forman el signo lingüístico en la teoría de Saussure."
    },
    {
        id: "d03",
        dificultad: 1,
        categoria: "Filosofía",
        pregunta: "La pregunta que nunca envejece",
        contexto: "Un filósofo afirma que antes de aceptar una idea debemos examinar sus fundamentos y preguntarnos por qué la consideramos verdadera. ¿Qué actitud filosófica está proponiendo?",
        respuestas: ["pensamiento critico", "actitud critica", "reflexion critica"],
        numero: "6",
        pista: "No consiste en rechazar todo, sino en examinar las razones antes de aceptar algo.",
        explicacion: "El pensamiento crítico examina argumentos, evidencias y supuestos antes de aceptar una afirmación."
    },
    {
        id: "d04",
        dificultad: 1,
        categoria: "Lógica",
        pregunta: "La conclusión inevitable",
        contexto: "Todos los seres humanos son mortales. Sócrates es un ser humano. ¿Qué conclusión se desprende necesariamente de estas dos premisas?",
        respuestas: ["socrates es mortal", "socrates mortal"],
        numero: "8",
        pista: "Aplicá la primera afirmación al caso particular de Sócrates.",
        explicacion: "Es un razonamiento deductivo: si las premisas son verdaderas y la estructura es válida, la conclusión se sigue necesariamente."
    },
    {
        id: "d05",
        dificultad: 1,
        categoria: "Semiótica",
        pregunta: "El rastro del fuego",
        contexto: "Una persona observa humo que sale detrás de una montaña y deduce que probablemente hay fuego. En la clasificación de Peirce, ¿qué tipo de signo es el humo respecto del fuego?",
        respuestas: ["indice", "indicio"],
        numero: "9",
        pista: "Existe una conexión física o causal entre el humo y el fuego.",
        explicacion: "El índice o indicio mantiene una relación de conexión directa con aquello que señala. El humo puede indicar la presencia de fuego."
    },
    {
        id: "d06",
        dificultad: 1,
        categoria: "Psicología",
        pregunta: "El brillo de una primera impresión",
        contexto: "Al conocer a alguien, una persona lo considera inteligente, amable y competente solamente porque le parece físicamente atractivo. ¿Qué efecto psicológico puede explicar esta generalización?",
        respuestas: ["efecto halo", "efecto de halo"],
        numero: "5",
        pista: "Una característica positiva contamina la evaluación de otras características.",
        explicacion: "El efecto halo consiste en extender una impresión general a otros rasgos de una persona u objeto."
    },

    // ----------------------------------------
    // NIVEL 2: INVESTIGACIÓN
    // ----------------------------------------

    {
        id: "d07",
        dificultad: 2,
        categoria: "Psicología",
        pregunta: "La grieta entre lo que pienso y lo que hago",
        contexto: "Una persona considera que mentir está mal, pero miente para obtener un beneficio. La contradicción entre sus valores y su conducta le genera malestar. ¿Cómo se denomina este fenómeno?",
        respuestas: ["disonancia cognitiva"],
        numero: "7",
        pista: "Leon Festinger desarrolló esta teoría para explicar el malestar ante inconsistencias cognitivas.",
        explicacion: "La disonancia cognitiva es la tensión psicológica que puede aparecer cuando nuestras creencias, actitudes y comportamientos entran en conflicto."
    },
    {
        id: "d08",
        dificultad: 2,
        categoria: "Semiótica",
        pregunta: "La huella que señala",
        contexto: "Una fotografía muestra una huella de zapato en el barro. La huella permite inferir que alguien pasó por allí. Según Peirce, ¿qué clase de signo es?",
        respuestas: ["indice", "indicio"],
        numero: "2",
        pista: "No es una representación basada solamente en semejanza o convención: existe una conexión física.",
        explicacion: "La huella funciona como índice porque es una marca producida por aquello que indica."
    },
    {
        id: "d09",
        dificultad: 2,
        categoria: "Psicología",
        pregunta: "La primera cifra",
        contexto: "En una negociación, alguien menciona un precio inicial muy elevado. Aunque sea arbitrario, ese precio influye en las estimaciones posteriores de la otra persona. ¿Qué efecto describe este fenómeno?",
        respuestas: ["efecto de anclaje", "anclaje"],
        numero: "6",
        pista: "La primera información funciona como punto de referencia.",
        explicacion: "El efecto de anclaje hace que una información inicial influya desproporcionadamente en los juicios posteriores."
    },
    {
        id: "d10",
        dificultad: 2,
        categoria: "Filosofía",
        pregunta: "La teoría que debe poder equivocarse",
        contexto: "Un filósofo de la ciencia sostiene que una teoría científica debe poder exponerse a pruebas que, si arrojan determinados resultados, permitan demostrar que es falsa. ¿Qué criterio propone?",
        respuestas: ["falsabilidad", "falsacionabilidad"],
        numero: "4",
        pista: "Es una idea central de Karl Popper.",
        explicacion: "La falsabilidad exige que una teoría pueda entrar en conflicto con posibles observaciones. No significa que sea falsa, sino que puede ser puesta a prueba."
    },
    {
        id: "d11",
        dificultad: 2,
        categoria: "Lógica",
        pregunta: "La mejor explicación disponible",
        contexto: "Una habitación está mojada, la ventana está abierta y afuera llueve. Alguien propone que la lluvia entró por la ventana. No lo sabe con certeza, pero es una explicación razonable de los indicios. ¿Qué tipo de razonamiento está utilizando?",
        respuestas: ["abduccion", "razonamiento abductivo"],
        numero: "0",
        pista: "No parte de una regla universal para deducir un caso: propone una hipótesis explicativa.",
        explicacion: "La abducción propone la explicación más plausible para un conjunto de observaciones. No garantiza que esa explicación sea verdadera."
    },
    {
        id: "d12",
        dificultad: 2,
        categoria: "Semiótica",
        pregunta: "El signo que se parece",
        contexto: "Un mapa contiene un pequeño dibujo de un avión para representar un aeropuerto. La relación entre el signo y lo representado se basa en la semejanza. ¿Qué tipo de signo es según Peirce?",
        respuestas: ["icono", "icono peirceano"],
        numero: "3",
        pista: "Su característica central es la semejanza con aquello que representa.",
        explicacion: "El icono representa su objeto por alguna cualidad de semejanza, como una imagen, un retrato o ciertos diagramas."
    },

    // ----------------------------------------
    // NIVEL 3: PROFUNDIDAD
    // ----------------------------------------

    {
        id: "d13",
        dificultad: 3,
        categoria: "Semiótica",
        pregunta: "La bandera y aquello que representa",
        contexto: "Una bandera representa a una nación. No necesita parecerse a ella ni estar físicamente conectada con su territorio. Su significado depende de convenciones compartidas. ¿Qué tipo de signo es?",
        respuestas: ["simbolo", "signo simbolico"],
        numero: "2",
        pista: "Su significado se aprende mediante convenciones culturales.",
        explicacion: "El símbolo representa mediante una regla, hábito o convención social. La relación no depende necesariamente de semejanza o causalidad."
    },
    {
        id: "d14",
        dificultad: 3,
        categoria: "Psicología",
        pregunta: "El recuerdo que cambia",
        contexto: "Dos personas presencian el mismo accidente. Una semana después, sus relatos difieren y ambas están convencidas de recordar exactamente lo sucedido. ¿Qué característica de la memoria ayuda a explicar este fenómeno?",
        respuestas: ["memoria reconstructiva", "reconstruccion de la memoria", "caracter reconstructivo de la memoria"],
        numero: "7",
        pista: "Recordar no es reproducir una grabación idéntica.",
        explicacion: "La memoria es reconstructiva: al recordar, reconstruimos experiencias utilizando información, expectativas y conocimientos posteriores."
    },
    {
        id: "d15",
        dificultad: 3,
        categoria: "Lógica",
        pregunta: "El ataque al mensajero",
        contexto: "Una persona presenta un argumento. Su interlocutor no analiza el razonamiento y responde: 'No deberías escucharlo porque ni siquiera terminó la universidad'. ¿Qué falacia comete?",
        respuestas: ["ad hominem", "falacia ad hominem", "ataque personal"],
        numero: "5",
        pista: "En lugar de refutar la idea, ataca a quien la presenta.",
        explicacion: "La falacia ad hominem intenta desacreditar un argumento atacando a la persona que lo sostiene, en vez de examinar sus razones."
    },
    {
        id: "d16",
        dificultad: 3,
        categoria: "Psicología",
        pregunta: "La autoridad y la obediencia",
        contexto: "En un experimento clásico, participantes administraban supuestas descargas eléctricas a otra persona porque una figura de autoridad les indicaba que continuaran. ¿Qué fenómeno investigó Stanley Milgram?",
        respuestas: ["obediencia a la autoridad", "obediencia"],
        numero: "8",
        pista: "La palabra clave describe seguir órdenes de una figura que se considera legítima.",
        explicacion: "Los experimentos de Milgram investigaron hasta qué punto las personas obedecen instrucciones de una autoridad, incluso cuando entran en conflicto con sus propias objeciones."
    },
    {
        id: "d17",
        dificultad: 3,
        categoria: "Filosofía",
        pregunta: "El costo de no abandonar",
        contexto: "Una persona sigue invirtiendo dinero en un proyecto fallido porque ya gastó demasiado como para abandonarlo. ¿Qué sesgo o falacia de decisión describe esta conducta?",
        respuestas: ["falacia del costo hundido", "costo hundido", "sesgo del costo hundido"],
        numero: "1",
        pista: "Se insiste en continuar por lo que ya se perdió, aunque no se pueda recuperar.",
        explicacion: "La falacia del costo hundido consiste en dejar que inversiones irrecuperables condicionen decisiones futuras que deberían evaluarse por sus costos y beneficios actuales."
    },
    {
        id: "d18",
        dificultad: 3,
        categoria: "Semiótica",
        pregunta: "El mapa no es el territorio",
        contexto: "Un plano representa una ciudad, pero no contiene cada edificio, persona, olor o experiencia de ese lugar. ¿Qué diferencia fundamental ilustra este ejemplo?",
        respuestas: ["representacion y realidad", "mapa y territorio", "diferencia entre mapa y territorio"],
        numero: "4",
        pista: "Una representación no es idéntica a aquello que representa.",
        explicacion: "El mapa es un modelo selectivo de la realidad. Organiza información, pero no equivale al territorio completo."
    },
        // ----------------------------------------
    // NIVEL 4: UMBRAL FINAL
    // ----------------------------------------

    {
        id: "d19",
        dificultad: 4,
        categoria: "Psicología",
        pregunta: "Lo que permanece en la sombra",
        contexto: "Carl Gustav Jung utilizó un concepto para describir aspectos de la personalidad que una persona no reconoce o no acepta como propios. Pueden incluir impulsos, emociones y capacidades rechazadas. ¿Cómo llamó a esta dimensión?",
        respuestas: ["sombra", "la sombra"],
        numero: "8",
        pista: "No representa solamente lo malo: también puede contener aspectos valiosos que no reconocemos.",
        explicacion: "La sombra, en la psicología analítica de Jung, reúne aspectos no reconocidos o rechazados de la personalidad. Es un concepto teórico, no un diagnóstico clínico."
    },
    {
        id: "d20",
        dificultad: 4,
        categoria: "Filosofía",
        pregunta: "El problema de los futuros que no vimos",
        contexto: "Observamos que el sol salió todos los días hasta hoy. Sin embargo, no existe una demostración lógica absoluta de que necesariamente saldrá mañana. ¿Qué problema filosófico ilustra este razonamiento?",
        respuestas: ["problema de la induccion", "problema de la inducción"],
        numero: "6",
        pista: "David Hume cuestionó cómo justificamos inferencias desde observaciones pasadas hacia acontecimientos futuros.",
        explicacion: "El problema de la inducción cuestiona la justificación lógica de inferir que los patrones observados en el pasado continuarán en el futuro."
    },
    {
        id: "d21",
        dificultad: 4,
        categoria: "Lógica",
        pregunta: "La frase que se devora a sí misma",
        contexto: "Una frase afirma: 'Esta oración es falsa'. Si es verdadera, entonces es falsa; pero si es falsa, parece ser verdadera. ¿Qué paradoja lógica representa?",
        respuestas: ["paradoja del mentiroso", "paradoja del mentiroso"],
        numero: "9",
        pista: "Su nombre está relacionado con alguien que no dice la verdad.",
        explicacion: "La paradoja del mentiroso aparece cuando una afirmación autorreferencial genera una contradicción al evaluarse como verdadera o falsa."
    },
    {
        id: "d22",
        dificultad: 4,
        categoria: "Filosofía",
        pregunta: "El barco que ya no es el mismo",
        contexto: "Un barco conserva su identidad aunque sus piezas se sustituyan una a una. Si todas las piezas originales se reúnen y construyen otro barco, ¿cuál es el verdadero barco original? ¿Qué paradoja filosófica plantea este problema?",
        respuestas: ["barco de teseo", "paradoja del barco de teseo"],
        numero: "3",
        pista: "Su protagonista es un héroe de la mitología griega.",
        explicacion: "La paradoja del barco de Teseo cuestiona qué hace que un objeto siga siendo el mismo a pesar de que sus componentes cambien."
    },
    {
        id: "d23",
        dificultad: 4,
        categoria: "Psicología",
        pregunta: "La necesidad de elegir entre dos extremos",
        contexto: "Una persona afirma: 'O estás completamente de acuerdo conmigo o estás en mi contra'. Ignora todas las posiciones intermedias. ¿Qué falacia lógica está utilizando?",
        respuestas: ["falso dilema", "falsa dicotomia", "falsa dicotomía"],
        numero: "0",
        pista: "Presenta solamente dos opciones cuando existen más posibilidades.",
        explicacion: "El falso dilema reduce artificialmente las alternativas a dos opciones excluyentes, ignorando otras posibilidades."
    },
    {
        id: "d24",
        dificultad: 4,
        categoria: "Semiótica",
        pregunta: "El significado que depende del contexto",
        contexto: "Una persona levanta el pulgar. En un contexto puede expresar aprobación; en otro, puede ser un gesto ofensivo. ¿Qué elemento resulta fundamental para interpretar correctamente el signo?",
        respuestas: ["contexto", "contexto cultural", "contexto comunicativo"],
        numero: "5",
        pista: "No alcanza con observar el gesto: hay que saber dónde, cuándo y entre quiénes aparece.",
        explicacion: "El contexto social, cultural y comunicativo condiciona la interpretación de los signos. Un mismo gesto puede adquirir sentidos diferentes."
    }
];

// ============================================
// CONFIGURACIÓN DE LAS CUATRO SALAS
// ============================================

const configuracionSalas = [
    {
        id: "sala1",
        titulo: "El archivo de los enigmas",
        etiqueta: "SALA 01 · FILOSOFÍA Y PENSAMIENTO",
        descripcion: "Entre manuscritos antiguos y preguntas olvidadas, cada respuesta revela una pieza del pensamiento humano.",
        tema: "tema-filosofica",
        tarjeta: "sala-filosofica",
        simbolo: "☼",
        historia: "En 1891, un investigador anónimo dejó un manuscrito en una biblioteca que no figura en ningún catálogo. En sus páginas escribió que la realidad no se descubre: se interroga.",
        fragmentos: [
            "El manuscrito comienza con una advertencia: toda certeza puede convertirse en una prisión cuando dejamos de cuestionarla.",
            "En el margen aparece una frase: «El conocimiento no es una posesión, sino una búsqueda que nunca termina».",
            "Alguien ha dibujado una puerta junto a una pregunta: ¿qué diferencia existe entre creer y saber?",
            "La última página menciona un segundo archivo. Allí, según el autor, las respuestas no se encuentran en los libros, sino en la mente."
        ],
        final: "Has abierto el archivo de los enigmas. El manuscrito señala ahora una segunda ubicación: un lugar donde la mente es objeto de estudio y también de sospecha."
    },
    {
        id: "sala2",
        titulo: "La mente en penumbra",
        etiqueta: "SALA 02 · PSICOLOGÍA Y CONDUCTA",
        descripcion: "Ingresás en un expediente psicológico. Tus recuerdos, tus decisiones y tus percepciones serán puestos a prueba.",
        tema: "tema-psicologica",
        tarjeta: "sala-psicologica",
        simbolo: "◉",
        historia: "El expediente pertenece a una institución que cerró sus puertas hace décadas. En la portada hay una frase escrita a mano: «El observador también forma parte del experimento».",
        fragmentos: [
            "El primer informe describe a sujetos convencidos de recordar acontecimientos que nunca ocurrieron exactamente de esa manera.",
            "Una nota clínica advierte que la autoridad puede modificar la conducta incluso cuando las órdenes generan conflicto moral.",
            "En una fotografía, una figura aparece parcialmente cubierta por una sombra. Al dorso se lee: «Lo que negamos también nos constituye».",
            "El último documento afirma que alguien utilizó los resultados del experimento para diseñar un sistema de símbolos."
        ],
        final: "El expediente está abierto. Pero una última anotación advierte que conocer los mecanismos de la mente no significa estar libre de ellos."
    },
    {
        id: "sala3",
        titulo: "El lenguaje oculto",
        etiqueta: "SALA 03 · SEMIÓTICA Y SIGNIFICACIÓN",
        descripcion: "Todo comunica algo. Sin embargo, no todo significa lo que parece. Aprendé a leer lo que se oculta detrás de los signos.",
        tema: "tema-semiotica",
        tarjeta: "sala-semiotica",
        simbolo: "⌘",
        historia: "En una sala cubierta de mapas, alguien ha reunido señales, imágenes y mensajes. Ninguno parece estar escrito para ser leído de manera literal.",
        fragmentos: [
            "Un símbolo aparece repetido en tres documentos. Su forma no explica su significado: hay que conocer el código que lo sostiene.",
            "Una huella en el polvo señala una presencia. Una imagen representa un objeto. Una bandera convoca una identidad.",
            "El investigador comprendió que interpretar no es solamente mirar: es relacionar signos, objetos y contextos.",
            "Detrás del último mapa hay una inscripción: «Cuando el lenguaje deja de ser suficiente, comienza el laberinto»."
        ],
        final: "Has descubierto que los signos pueden ocultar tanto como revelar. El último documento contiene un mapa que no representa ningún lugar conocido."
    },
    {
        id: "sala4",
        titulo: "El laberinto de la realidad",
        etiqueta: "SALA 04 · LÓGICA Y PARADOJAS",
        descripcion: "Las certezas se desarman. La lógica será tu única herramienta para atravesar un territorio donde cada respuesta abre otra pregunta.",
        tema: "tema-laberinto",
        tarjeta: "sala-laberinto",
        simbolo: "∞",
        historia: "El mapa conduce a un espacio imposible. Sus pasillos se contradicen y sus puertas parecen cambiar de lugar cuando alguien intenta describirlos.",
        fragmentos: [
            "La primera inscripción advierte que una conclusión puede parecer inevitable y, aun así, depender de premisas equivocadas.",
            "Un segundo mensaje pregunta si un objeto continúa siendo el mismo cuando cada una de sus partes ha cambiado.",
            "El tercer documento contiene una frase que se contradice a sí misma. Alguien la rodeó con tinta negra.",
            "En la última página se lee: «No buscabas la salida. Buscabas descubrir quién había construido el laberinto»."
        ],
        final: "Has atravesado los cuatro umbrales. El archivo no guardaba una respuesta definitiva: guardaba las preguntas que habías dejado de hacer."
    }
];

// ============================================
// GENERADOR ALEATORIO
// ============================================

function mezclar(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

function elegirDesafio(nivel, idsUsados, categoriasUsadas) {
    const disponibles = bancoDesafios.filter(desafio =>
        desafio.dificultad === nivel &&
        !idsUsados.has(desafio.id)
    );

    if (disponibles.length === 0) {
        throw new Error(
            `No hay suficientes desafíos disponibles para el nivel ${nivel}.`
        );
    }

    // Intentamos favorecer categorías diferentes dentro de la sala.
    const categoriasNuevas = disponibles.filter(desafio =>
        !categoriasUsadas.has(desafio.categoria)
    );

    const candidatos = categoriasNuevas.length > 0
        ? categoriasNuevas
        : disponibles;

    const elegido = mezclar(candidatos)[0];

    idsUsados.add(elegido.id);
    categoriasUsadas.add(elegido.categoria);

    return { ...elegido };
}

function generarDesafiosDeSala(niveles, idsUsados) {
    const categoriasUsadas = new Set();

    const desafios = niveles.map(nivel =>
        elegirDesafio(nivel, idsUsados, categoriasUsadas)
    );

    // Ordenamos por dificultad para que la progresión sea perceptible.
    return desafios.sort((a, b) =>
        a.dificultad - b.dificultad
    );
}

function generarPartida() {
    const idsUsados = new Set();

    // La dificultad crece a medida que avanzamos de sala.
    const planDificultad = [
        [1, 1, 2, 2],
        [2, 2, 3, 3],
        [3, 3, 4, 4],
        [4, 4, 4, 4]
    ];

    const habitaciones = configuracionSalas.map((configuracion, indice) => {
        const desafios = generarDesafiosDeSala(
            planDificultad[indice],
            idsUsados
        );

        return {
            ...configuracion,
            desafios: desafios,
            indice: 0,
            numeros: [],
            fragmentosDescubiertos: [],
            resuelto: false,
            completada: false
        };
    });

    return {
        version: 2,
        fechaCreacion: new Date().toISOString(),
        salaActual: null,
        habitaciones: habitaciones
    };
}
// ============================================
// ESTADO DEL JUEGO
// ============================================

let partida = cargarPartida();

if (!partida) {
    partida = generarPartida();
    guardarPartida();
}

// ============================================
// LOCAL STORAGE
// ============================================

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
            datos.version !== 2 ||
            !Array.isArray(datos.habitaciones) ||
            datos.habitaciones.length !== CANTIDAD_SALAS
        ) {
            return null;
        }

        const partidaValida = datos.habitaciones.every(habitacion =>
            Array.isArray(habitacion.desafios) &&
            habitacion.desafios.length === ENIGMAS_POR_SALA &&
            Array.isArray(habitacion.numeros) &&
            Array.isArray(habitacion.fragmentosDescubiertos) &&
            Number.isInteger(habitacion.indice) &&
            habitacion.indice >= 0 &&
            habitacion.indice < ENIGMAS_POR_SALA &&
            habitacion.numeros.length <= ENIGMAS_POR_SALA
        );

        if (!partidaValida) return null;

        return datos;

    } catch (error) {
        console.warn("No se pudo recuperar la partida:", error);
        return null;
    }
}

// ============================================
// ELEMENTOS HTML
// ============================================

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

// ============================================
// SALA ACTUAL
// ============================================

function obtenerSalaActual() {
    if (partida.salaActual === null) return null;

    return partida.habitaciones[partida.salaActual];
}

// ============================================
// CREAR UNA NUEVA PARTIDA
// ============================================

function nuevaPartida() {
    const confirmar = confirm(
        "¿Querés generar una nueva partida? " +
        "Se perderá el progreso de la partida actual."
    );

    if (!confirmar) return;

    partida = generarPartida();

    guardarPartida();

    juego.hidden = true;
    portal.hidden = false;
    document.body.className = "tema-portal";

    actualizarPortal();
}

// ============================================
// ACTUALIZAR EL PORTAL
// ============================================

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

    document.getElementById("contador-general").textContent =
        `${desafiosResueltos} de 16 desafíos`;

    document.getElementById("barra-general").style.width =
        porcentaje + "%";

    document.getElementById("estado-general").textContent =
        `${salasCompletadas} de 4 salas desbloqueadas · Guardado automático`;

    document.getElementById("titulo-partida").textContent =
        "Investigación en curso";

    document.getElementById("estado-partida").textContent =
        `Partida iniciada: ${new Date(partida.fechaCreacion).toLocaleString("es-AR")}`;

    salasGrid.innerHTML = "";

    habitaciones.forEach((sala, indice) => {
        const tarjeta = document.createElement("article");

        tarjeta.className = `tarjeta-sala ${sala.tarjeta}`;

        let estado = "Sin explorar";

        if (sala.completada) {
            estado = "✦ Candado desbloqueado";
        } else if (sala.numeros.length > 0) {
            estado = `${sala.numeros.length} de 4 desafíos resueltos`;
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

            <p class="estado">${estado}</p>

            <button class="boton-entrar" data-sala="${indice}">
                ${botonTexto}
            </button>
        `;

        salasGrid.appendChild(tarjeta);
    });

    // Los botones se conectan después de crear las tarjetas.
    salasGrid.querySelectorAll("[data-sala]").forEach(boton => {
        boton.addEventListener("click", () => {
            entrarSala(Number(boton.dataset.sala));
        });
    });
}

// ============================================
// ENTRAR EN UNA SALA
// ============================================

function entrarSala(numero) {
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

// ============================================
// ACTUALIZAR INTERIOR
// ============================================

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

// ============================================
// MOSTRAR DESAFÍO
// ============================================

function mostrarEnigma() {
    const sala = obtenerSalaActual();
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

// ============================================
// NORMALIZAR RESPUESTAS
// ============================================

function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .replace(/\s+/g, " ");
}
// ============================================
// CALCULAR DISTANCIA ENTRE DOS RESPUESTAS
// ============================================

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

// ============================================
// BUSCAR UNA RESPUESTA PARECIDA
// ============================================

function buscarRespuestaParecida(respuestaUsuario, respuestasCorrectas) {
    const usuario = normalizar(respuestaUsuario);

    if (usuario.length < 4) return null;

    let mejorRespuesta = null;
    let mejorSimilitud = 0;

    respuestasCorrectas.forEach(opcion => {
        const correcta = normalizar(opcion);
        const distancia = calcularDistancia(usuario, correcta);
        const longitudMaxima = Math.max(usuario.length, correcta.length);

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

// ============================================
// COMPROBAR RESPUESTA
// ============================================

function comprobarRespuesta() {
    const sala = obtenerSalaActual();

    if (!sala || sala.resuelto || sala.completada) return;

    const desafio = sala.desafios[sala.indice];
    const respuestaUsuario = normalizar(respuesta.value);

    if (respuestaUsuario === "") {
        mensaje.textContent = "Primero tenés que escribir una respuesta.";
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
        mensaje.textContent = `¿Quisiste decir "${sugerencia}"? Revisá tu respuesta.`;
        mensaje.classList.add("sugerencia");
    } else {
        mensaje.textContent = "La respuesta no es correcta. Volvé a investigar.";
        mensaje.classList.remove("sugerencia");
    }

    respuesta.focus();
    respuesta.select();
}

// ============================================
// RESOLVER DESAFÍO
// ============================================

function resolverDesafio() {
    const sala = obtenerSalaActual();
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

function mostrarResultadoResuelto() {
    const sala = obtenerSalaActual();
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

// ============================================
// CONTINUAR DESPUÉS DE RESOLVER
// ============================================

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
        mostrarCodigoFinal();
    }
}

// ============================================
// MOSTRAR PISTA
// ============================================

function mostrarPista() {
    const sala = obtenerSalaActual();

    if (!sala || sala.resuelto) return;

    const desafio = sala.desafios[sala.indice];

    pista.textContent = "Pista: " + desafio.pista;
    pista.hidden = false;
}

// ============================================
// ACTUALIZAR RUEDAS DEL CANDADO
// ============================================

function actualizarRuedas() {
    const sala = obtenerSalaActual();

    if (!sala) return;

    for (let i = 0; i < 4; i++) {
        document.getElementById(`rueda${i + 1}`).textContent =
            sala.numeros[i] ?? "?";
    }
}

// ============================================
// PROGRESO DE LA SALA
// ============================================

function actualizarProgresoSala() {
    const sala = obtenerSalaActual();

    const porcentaje = Math.round(
        (sala.numeros.length / ENIGMAS_POR_SALA) * 100
    );

    document.getElementById("barra-sala").style.width =
        porcentaje + "%";

    document.getElementById("porcentaje").textContent =
        porcentaje + "%";

    document.getElementById("contador-enigmas").textContent =
        `Desafíos resueltos: ${sala.numeros.length} de 4`;
}

// ============================================
// MOSTRAR COMBINACIÓN
// ============================================

function mostrarCodigoFinal() {
    const sala = obtenerSalaActual();

    panelEnigma.hidden = true;
    panelCodigo.hidden = false;
    salaCompletada.hidden = true;

    document.getElementById("codigo-revelado").textContent =
        sala.numeros.join("");

    codigoFinal.value = "";
    mensajeCodigo.textContent = "";
    codigoFinal.focus();
}

// ============================================
// DESBLOQUEAR CANDADO
// ============================================

function abrirCandado() {
    const sala = obtenerSalaActual();

    if (!sala) return;

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

// ============================================
// VOLVER AL PORTAL
// ============================================

function volverPortal() {
    juego.hidden = true;
    portal.hidden = false;

    partida.salaActual = null;

    guardarPartida();

    document.body.className = "tema-portal";

    actualizarPortal();
}

// ============================================
// ATAJOS DE TECLADO
// ============================================

respuesta.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        comprobarRespuesta();
    }
});

codigoFinal.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        abrirCandado();
    }
});

// ============================================
// INICIALIZACIÓN
// ============================================

actualizarPortal();
