export const sampleLessons = [
  [
    {
      id: 0,
      title: 'Introducción a la teoria de colas',
      slug: 'introduccion',
      description: 'Breve introducción a los modelos de linea de espera',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: 'Buen trabajo!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: '¿Qué es la teoria de colas?',
            },
            {
              order: 1,
              type: 'paragraph',
              content:
                'La teoría de colas es el estudio matemático de las colas o líneas de espera dentro de un sistema. Esta teoría estudia factores como el tiempo de espera medio en las colas o la capacidad de trabajo del sistema sin que llegue a colapsar. Dentro de las matemáticas, la teoría de colas se engloba en la investigación de operaciones y es un complemento muy importante a la teoría de sistemas y la teoría de control. Se trata así de una teoría que encuentra aplicación en una amplia variedad de situaciones como negocios, comercio, industria, ingenierías, transporte y logística o telecomunicaciones.',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'La teoría de colas permite modelar sistemas en los que existe una población de agentes (también llamados clientes o usuarios) que demandan cierto servicio que es proporcionado por uno o más servidores (también llamados recursos). Dado que puede haber más agentes que recursos, pueden registrarse esperas desde que un agente llega al sistema hasta que el servidor atiende su demanda, o incluso un agente puede ser rechazado del sistema al no haber espacio donde esperar (esto es, una cola). La teoría de colas sirve para modelar procesos tales como la llegada de datos a una cola en ciencias de la computación, la congestión en red de computadoras o de telecomunicación, o la implementación de una cadena productiva en la ingeniería industrial.',
            },
            {
              order: 4,
              type: 'title2',
              content: 'Historia',
            },
            {
              order: 5,
              type: 'paragraph',
              content:
                'El matemático danés Agner Krarup Erlang, trabajador de la Copenhagen Telephone Exchange, publicó el primer artículo sobre la teoría de colas en 1909.1​ Específicamente se preocupó del estudio del problema de dimensionamiento de líneas y centrales de conmutación telefónica para el servicio de llamadas. En su honor, la unidad de medida estadística del volumen de tráfico se denomina Erlang, así como un lenguaje de programación concurrente diseñado por Ericsson.',
            },
            {
              order: 6,
              type: 'paragraph',
              content:
                'Cincuenta años más tarde, el científico estadounidense y pionero en el análisis de redes de ordenadores Leonard Kleinrock desarrolló el uso de herramientas de teoría de colas para en análisis de redes de conmutación de paquetes, con su tesis doctoral presentada en 1962 (y publicada en forma de libro en 1964).',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: 'Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                '¿Cuál es uno de los campos de aplicación de la teoría de colas mencionado en el texto?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: false,
                  point: 'A',
                  text: 'Astronomía y astrofísica.',
                },
                {
                  id: 1,
                  active: false,
                  correct: false,
                  point: 'B',
                  text: 'Biología molecular y genética.',
                },
                {
                  id: 2,
                  active: false,
                  correct: false,
                  point: 'C',
                  text: 'Arqueología y antropología.',
                },
                {
                  id: 3,
                  active: false,
                  correct: true,
                  point: 'D',
                  text: 'Comercio y negocios.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  [
    {
      id: 0,
      title: 'Modelos de linea de espera',
      slug: 'modelos-linea-espera',
      description: 'test',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: 'Buen trabajo!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: '¿Qué son?',
            },
            {
              order: 1,
              type: 'paragraph',
              content:
                'Son herramientas matemáticas utilizadas para analizar y predecir el comportamiento de sistemas donde los clientes o las entidades llegan a un lugar y esperan para ser atendidos por uno o más servidores.',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'Los modelos de líneas de espera son herramientas matemáticas que permiten el estudio y la predicción del comportamiento de los sistemas de colas, brindando información valiosa para la planificación y la toma de decisiones en diversos entornos y sectores.',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: 'Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                '¿Cuál es la principal utilidad de los modelos de líneas de espera en la planificación y toma de decisiones?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: false,
                  point: 'A',
                  text: 'Establecer el número óptimo de clientes en un sistema de colas.',
                },
                {
                  id: 1,
                  active: false,
                  correct: false,
                  point: 'B',
                  text: 'Predecir el comportamiento de los clientes en un entorno determinado.',
                },
                {
                  id: 2,
                  active: false,
                  correct: true,
                  point: 'C',
                  text: 'Brindar información valiosa para la planificación y toma de decisiones.',
                },
                {
                  id: 3,
                  active: false,
                  correct: false,
                  point: 'D',
                  text: 'Determinar el tiempo promedio de espera de los clientes en una línea.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Aplicaciones',
      slug: 'aplciaciones',
      description:
        'En esta pagina aprenderas a utilizar condicionales en JavaScript',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: 'Buen trabajo!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Aplicación',
            },
            {
              order: 1,
              type: 'paragraph',
              content:
                'Se aplican en una amplia variedad de contextos, como aeropuertos, tiendas, centros de llamadas, hospitales, redes de computadoras y sistemas de transporte.',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'ayudan a los administradores y planificadores a comprender y optimizar el rendimiento de un sistema de colas, proporcionando información valiosa sobre el tiempo de espera promedio, la utilización del servidor, la capacidad del sistema y otros indicadores de desempeño',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: 'Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'Pregunta: ¿En qué contextos se pueden aplicar los modelos de líneas de espera?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: false,
                  point: 'A',
                  text: 'Restaurantes, cines, museos y parques temáticos.',
                },
                {
                  id: 1,
                  active: false,
                  correct: true,
                  point: 'B',
                  text: 'Aeropuertos, tiendas, centros de llamadas y hospitales.',
                },
                {
                  id: 2,
                  active: false,
                  correct: false,
                  point: 'C',
                  text: 'Oficinas gubernamentales, gimnasios, hoteles y bancos.',
                },
                {
                  id: 3,
                  active: false,
                  correct: false,
                  point: 'D',
                  text: 'Escuelas, estaciones de servicio, ferias y bibliotecas.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Utilidad',
      slug: 'utilidad',
      description:
        'En esta pagina aprenderas a utilizar condicionales en JavaScript',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: 'Buen trabajo!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Utilidad',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'Gestión de servicios: Los modelos de líneas de espera pueden ayudar a determinar el número óptimo de servidores o cajeros necesarios para satisfacer la demanda de servicio de los clientes. Esto permite optimizar los recursos y minimizar los tiempos de espera.',
            },
            {
              order: 3,
              type: 'paragraph',
              content:
                'Diseño de sistemas de atención al cliente: Estos modelos pueden ayudar a diseñar la disposición física de una tienda o establecimiento, determinando la cantidad de cajas de pago necesarias, la ubicación óptima de los mostradores de servicio, etc.',
            },
            {
              order: 4,
              type: 'paragraph',
              content:
                'Planificación de capacidad: Los modelos de líneas de espera pueden ayudar a planificar y dimensionar la capacidad de un sistema. Por ejemplo, en el caso de una central telefónica, el modelo puede ayudar a determinar el número de líneas telefónicas requeridas para manejar una determinada cantidad de llamadas entrantes.',
            },
            {
              order: 5,
              type: 'paragraph',
              content:
                'Análisis de tráfico y transporte: Estos modelos pueden utilizarse para analizar el flujo de tráfico en carreteras, aeropuertos o sistemas de transporte público. Ayudan a comprender los cuellos de botella y a identificar posibles mejoras en la infraestructura.',
            },
            {
              order: 6,
              type: 'paragraph',
              content:
                'Optimización de procesos: Los modelos de líneas de espera pueden utilizarse para identificar los cuellos de botella en los procesos de producción y encontrar formas de optimizar la eficiencia y reducir los tiempos de espera.',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: 'Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'Pregunta: ¿Cuál es una aplicación de los modelos de líneas de espera?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: false,
                  point: 'A',
                  text: 'Determinar la ubicación óptima de los mostradores de servicio en una tienda.',
                },
                {
                  id: 1,
                  active: false,
                  correct: true,
                  point: 'B',
                  text: 'Identificar los cuellos de botella en los procesos de producción.',
                },
                {
                  id: 2,
                  active: false,
                  correct: false,
                  point: 'C',
                  text: 'Analizar el flujo de tráfico en sistemas de transporte público.',
                },
                {
                  id: 3,
                  active: false,
                  correct: false,
                  point: 'D',
                  text: 'Optimizar la disposición física de una central telefónica.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Aspectos importantes',
      slug: 'aspectos-importantes',
      description:
        'En esta pagina aprenderas a utilizar condicionales en JavaScript',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: 'Buen trabajo!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Aspectos importantes',
            },
            {
              order: 2,
              type: 'title2',
              content: 'Tasa de llegada (λ)',
            },
            {
              order: 3,
              type: 'paragraph',
              content:
                'Es la velocidad a la que llegan los clientes al sistema de espera. Se mide en clientes por unidad de tiempo (por ejemplo, clientes por minuto).',
            },
            {
              order: 4,
              type: 'title2',
              content: 'Tasa de servicio (μ)',
            },
            {
              order: 5,
              type: 'paragraph',
              content:
                'Es la velocidad a la que se atienden los clientes en el sistema de espera. También se mide en clientes por unidad de tiempo.',
            },
            {
              order: 6,
              type: 'title2',
              content: 'Distribución de llegadas y distribución de servicio',
            },
            {
              order: 7,
              type: 'paragraph',
              content:
                'Es importante determinar la distribución estadística que describe los patrones de llegada de los clientes al sistema y los patrones de tiempo de servicio. Algunas distribuciones comunes incluyen la distribución exponencial, la distribución de Poisson y la distribución normal.',
            },
            {
              order: 8,
              type: 'title2',
              content: 'Número de servidores:',
            },
            {
              order: 9,
              type: 'paragraph',
              content:
                'Se refiere al número de personas o recursos disponibles para atender a los clientes en el sistema de espera. Puede haber un solo servidor o varios servidores trabajando simultáneamente.',
            },
            {
              order: 10,
              type: 'title2',
              content: 'Capacidad del sistema',
            },
            {
              order: 11,
              type: 'paragraph',
              content:
                'Es importante considerar la capacidad máxima del sistema, es decir, cuántos clientes pueden estar presentes en el sistema de espera al mismo tiempo. Si la capacidad se alcanza, los clientes pueden ser rechazados o pueden formarse filas adicionales.',
            },
            {
              order: 12,
              type: 'title2',
              content: 'Disciplina de servicio',
            },
            {
              order: 13,
              type: 'paragraph',
              content:
                'Se refiere a las reglas que determinan el orden en que se atienden los clientes en el sistema de espera. Algunas disciplinas comunes incluyen el orden de llegada (FIFO), prioridades, entre otros.',
            },
            {
              order: 14,
              type: 'title2',
              content: 'Métricas de desempeño',
            },
            {
              order: 15,
              type: 'paragraph',
              content:
                'Los modelos de líneas de espera permiten calcular diversas métricas para evaluar el desempeño del sistema, como el tiempo promedio de espera en la cola, el tiempo promedio en el sistema, la longitud promedio de la cola, la utilización del servidor, entre otras.',
            },
            {
              order: 16,
              type: 'title2',
              content: 'Estrategias de mejora',
            },
            {
              order: 17,
              type: 'paragraph',
              content:
                'El análisis del modelo de líneas de espera puede ayudar a identificar posibles áreas de mejora en el sistema, como agregar más servidores, modificar la disciplina de servicio, mejorar la capacidad del sistema o ajustar los horarios de atención.',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: 'Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'Pregunta: ¿Cuál es la métrica utilizada para evaluar el desempeño del sistema en un modelo de líneas de espera?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: false,
                  point: 'A',
                  text: 'Tasa de llegada (λ)',
                },
                {
                  id: 1,
                  active: false,
                  correct: false,
                  point: 'B',
                  text: 'Distribución de servicio',
                },
                {
                  id: 2,
                  active: false,
                  correct: true,
                  point: 'C',
                  text: 'Tiempo promedio de espera en la cola',
                },
                {
                  id: 3,
                  active: false,
                  correct: false,
                  point: 'D',
                  text: 'Número de servidores',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  [
    {
      id: 0,
      title: 'Fundamentos esenciales de la simulación',
      slug: 'fundamentos-simulacion',
      description:
        'Una introducción a los conceptos fundamentales de la simulación',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: '¡Muy bien!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: '¿Qué es la simulación?',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'La simulación es una técnica que utiliza modelos para imitar la operación de un sistema o proceso a lo largo del tiempo. Se utiliza para entender, analizar y predecir el comportamiento de sistemas reales o hipotéticos.',
            },
            {
              order: 3,
              type: 'paragraph',
              content:
                'Los modelos de simulación representan aspectos clave de un sistema mediante algoritmos y ecuaciones. Estos modelos permiten realizar experimentos virtuales para entender cómo pueden comportarse los sistemas en diferentes situaciones.',
            },
            {
              order: 4,
              type: 'title2',
              content: 'Aplicaciones de la simulación',
            },
            {
              order: 5,
              type: 'paragraph',
              content:
                'La simulación se aplica en una amplia gama de campos, como la ingeniería, la medicina, la gestión de operaciones, la ciencia de materiales, la economía y muchos otros. Se utiliza para predecir el comportamiento de sistemas complejos y evaluar estrategias antes de su implementación en el mundo real.',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: '¡Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                '¿Por qué es importante la simulación en la toma de decisiones en negocios y gestión?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: false,
                  point: 'A',
                  text: 'Para generar ingresos inmediatos.',
                },
                {
                  id: 1,
                  active: false,
                  correct: false,
                  point: 'B',
                  text: 'Para evitar riesgos en proyectos.',
                },
                {
                  id: 2,
                  active: false,
                  correct: false,
                  point: 'C',
                  text: 'Para estudiar la historia de la empresa.',
                },
                {
                  id: 3,
                  active: false,
                  correct: true,
                  point: 'D',
                  text: 'Para evaluar el impacto de decisiones futuras.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  [
    {
      id: 0,
      title: 'Simulación de eventos discretos',
      slug: 'simulacion-eventos-discretos',
      description:
        'Conceptos fundamentales sobre la simulación de eventos discretos',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: '¡Excelente!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: '¿Qué es la simulación de eventos discretos?',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'La simulación de eventos discretos es una técnica utilizada para modelar y analizar sistemas dinámicos en los que los eventos ocurren en momentos específicos y discretos en el tiempo. A diferencia de otros tipos de simulación, como la simulación continua, esta se centra en el avance del tiempo a través de eventos discretos, como la llegada de clientes a un sistema, la finalización de un proceso, etc.',
            },
            {
              order: 3,
              type: 'paragraph',
              content:
                'En esta simulación, se representan los cambios en el estado del sistema debido a eventos específicos que ocurren en momentos determinados. Se utilizan estructuras de datos como listas de eventos futuros para modelar la evolución del sistema a lo largo del tiempo.',
            },
            {
              order: 4,
              type: 'title2',
              content: 'Aplicaciones',
            },
            {
              order: 5,
              type: 'paragraph',
              content:
                'La simulación de eventos discretos se aplica en sistemas complejos como líneas de producción, redes de computadoras, logística, sistemas de transporte, entre otros. Permite evaluar diferentes escenarios y políticas de operación antes de su implementación en el mundo real.',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: '¡Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                '¿Cuál es una característica fundamental de la simulación de eventos discretos en la modelación de sistemas?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: false,
                  point: 'A',
                  text: 'El avance continuo del tiempo.',
                },
                {
                  id: 1,
                  active: false,
                  correct: true,
                  point: 'B',
                  text: 'La ocurrencia de eventos en momentos discretos.',
                },
                {
                  id: 2,
                  active: false,
                  correct: false,
                  point: 'C',
                  text: 'La representación gráfica de los sistemas.',
                },
                {
                  id: 3,
                  active: false,
                  correct: false,
                  point: 'D',
                  text: 'El uso de simulaciones virtuales.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Simulación de eventos continuos',
      slug: 'simulacion-continua',
      description: 'Conceptos básicos sobre la simulación continua',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: '¡Genial!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: '¿Qué es la simulación continua?',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'La simulación continua es una técnica utilizada para modelar sistemas en los que las variables cambian de manera continua a lo largo del tiempo. En contraste con la simulación de eventos discretos, que se centra en eventos puntuales, la simulación continua se enfoca en procesos que cambian de manera suave y constante.',
            },
            {
              order: 3,
              type: 'paragraph',
              content:
                'Este tipo de simulación se basa en ecuaciones diferenciales o en diferencias para describir el comportamiento de variables que evolucionan de forma continua. Se utiliza para analizar fenómenos físicos, químicos, biológicos y sistemas de ingeniería donde el tiempo y las magnitudes varían de manera continua.',
            },
            {
              order: 4,
              type: 'title2',
              content: 'Aplicaciones',
            },
            {
              order: 5,
              type: 'paragraph',
              content:
                'La simulación continua se aplica en campos como la física, la ingeniería, la economía, la biología y la medicina. Permite modelar y comprender sistemas complejos, como la dinámica de fluidos, el comportamiento de circuitos eléctricos, la propagación de enfermedades, entre otros.',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: '¡Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                '¿Cuál es una característica fundamental de la simulación continua en la modelación de sistemas?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: false,
                  point: 'A',
                  text: 'La ocurrencia de eventos en momentos discretos.',
                },
                {
                  id: 1,
                  active: false,
                  correct: true,
                  point: 'B',
                  text: 'El cambio continuo de variables a lo largo del tiempo.',
                },
                {
                  id: 2,
                  active: false,
                  correct: false,
                  point: 'C',
                  text: 'La representación gráfica detallada del sistema.',
                },
                {
                  id: 3,
                  active: false,
                  correct: false,
                  point: 'D',
                  text: 'El uso exclusivo de modelos matemáticos complejos.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  [
    {
      id: 0,
      title: 'Algoritmos probabilísticos',
      slug: 'algoritmos-probabilisticos',
      description:
        'Conceptos fundamentales sobre algoritmos basados en probabilidades',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: '¡Muy bien!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: '¿Qué son los algoritmos probabilísticos?',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'Los algoritmos probabilísticos son aquellos que utilizan el azar o la aleatoriedad como parte fundamental de su diseño y ejecución. Estos algoritmos toman decisiones basadas en la probabilidad en lugar de ser deterministas en su comportamiento.',
            },
            {
              order: 3,
              type: 'paragraph',
              content:
                'Se utilizan para resolver problemas en los que la incertidumbre o la aleatoriedad son elementos clave, ofreciendo soluciones aproximadas que pueden ser altamente eficientes en muchos casos.',
            },
            {
              order: 4,
              type: 'title2',
              content: 'Aplicaciones',
            },
            {
              order: 5,
              type: 'paragraph',
              content:
                'Los algoritmos probabilísticos encuentran aplicaciones en criptografía, inteligencia artificial, simulaciones, optimización, entre otros campos, donde la aleatoriedad puede ser beneficiosa para resolver problemas complejos.',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: '¡Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                '¿Cuál es una característica fundamental de los algoritmos probabilísticos?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: false,
                  point: 'A',
                  text: 'Su comportamiento determinista en todas las ejecuciones.',
                },
                {
                  id: 1,
                  active: false,
                  correct: true,
                  point: 'B',
                  text: 'La utilización de la aleatoriedad en su ejecución.',
                },
                {
                  id: 2,
                  active: false,
                  correct: false,
                  point: 'C',
                  text: 'La predicción precisa de los resultados.',
                },
                {
                  id: 3,
                  active: false,
                  correct: false,
                  point: 'D',
                  text: 'Su alta complejidad y demanda de recursos.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'Monte Carlo',
      slug: 'monte-carlo',
      description:
        'El método Monte Carlo y su aplicación en algoritmos probabilísticos',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: '¡Genial!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: '¿Qué es el método Monte Carlo?',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'El método Monte Carlo es una técnica que utiliza la generación de números aleatorios para resolver problemas mediante la simulación de múltiples escenarios posibles.',
            },
            {
              order: 3,
              type: 'paragraph',
              content:
                'Se aplica en diversas áreas como simulaciones científicas, finanzas, optimización, física, entre otros, permitiendo obtener soluciones aproximadas a problemas complejos.',
            },
            {
              order: 4,
              type: 'title2',
              content: 'Aplicaciones',
            },
            {
              order: 5,
              type: 'paragraph',
              content:
                'El método Monte Carlo se utiliza en la valoración de derivados financieros, simulaciones de sistemas físicos y biológicos, optimización de procesos, entre otras aplicaciones que requieren análisis probabilístico.',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: '¡Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                '¿En qué áreas o campos se aplica comúnmente el método Monte Carlo?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: true,
                  point: 'A',
                  text: 'Finanzas, física, biología, optimización.',
                },
                {
                  id: 1,
                  active: false,
                  correct: false,
                  point: 'B',
                  text: 'Ingeniería mecánica y aeroespacial.',
                },
                {
                  id: 2,
                  active: false,
                  correct: false,
                  point: 'C',
                  text: 'Diseño gráfico y producción audiovisual.',
                },
                {
                  id: 3,
                  active: false,
                  correct: false,
                  point: 'D',
                  text: 'Investigación de mercado y publicidad.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Algoritmos genéticos',
      slug: 'algoritmos-geneticos',
      description:
        'Conceptos y aplicación de los algoritmos genéticos en computación',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: '¡Muy bien!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: '¿Qué son los algoritmos genéticos?',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'Los algoritmos genéticos son técnicas de optimización y búsqueda inspiradas en el proceso de evolución natural.',
            },
            {
              order: 3,
              type: 'paragraph',
              content:
                'Se utilizan para resolver problemas de optimización, búsqueda de soluciones óptimas y diseño en diversos campos como la inteligencia artificial, la ingeniería, la economía, entre otros.',
            },
            {
              order: 4,
              type: 'title2',
              content: 'Aplicaciones',
            },
            {
              order: 5,
              type: 'paragraph',
              content:
                'Los algoritmos genéticos se aplican en la optimización de diseños, en la predicción de comportamientos, en la creación de redes neuronales artificiales, entre otras áreas donde se requiere una búsqueda eficiente de soluciones.',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: '¡Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                '¿Cuál es una aplicación común de los algoritmos genéticos?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: true,
                  point: 'A',
                  text: 'Optimización de diseños y búsqueda de soluciones.',
                },
                {
                  id: 1,
                  active: false,
                  correct: false,
                  point: 'B',
                  text: 'Análisis de datos y estadísticas.',
                },
                {
                  id: 2,
                  active: false,
                  correct: false,
                  point: 'C',
                  text: 'Creación de bases de datos y sistemas de información.',
                },
                {
                  id: 3,
                  active: false,
                  correct: false,
                  point: 'D',
                  text: 'Desarrollo de aplicaciones móviles y web.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Cadenas de Markov',
      slug: 'cadenas-markov',
      description:
        'Conceptos y aplicación de las cadenas de Markov en procesos estocásticos',
      lessons: [
        {
          type: 'Teoric',
          ovaMessage: '¡Excelente!',
          ovaSide: 'right',
          content: [
            {
              order: 1,
              type: 'title',
              content: '¿Qué son las cadenas de Markov?',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                'Las cadenas de Markov son modelos matemáticos que describen un sistema con un conjunto de estados y reglas de transición probabilística entre esos estados.',
            },
            {
              order: 3,
              type: 'paragraph',
              content:
                'Se utilizan en la modelización de procesos estocásticos donde el siguiente estado depende únicamente del estado actual, siendo útiles en predicciones y simulaciones de sistemas dinámicos.',
            },
            {
              order: 4,
              type: 'title2',
              content: 'Aplicaciones',
            },
            {
              order: 5,
              type: 'paragraph',
              content:
                'Las cadenas de Markov se aplican en la predicción del clima, en el análisis de redes neuronales, en la modelización de sistemas financieros, entre otras áreas donde se requiere modelar sistemas dinámicos y predecir su comportamiento futuro.',
            },
          ],
        },
        {
          type: 'practical',
          ovaMessage: '¡Sigue así!',
          ovaSide: 'left',
          content: [
            {
              order: 1,
              type: 'title',
              content: 'Selecciona la respuesta correcta',
            },
            {
              order: 2,
              type: 'paragraph',
              content:
                '¿En qué áreas se aplican comúnmente las cadenas de Markov?',
            },
            {
              order: 3,
              type: 'questionary',
              content: [
                {
                  id: 0,
                  active: false,
                  correct: true,
                  point: 'A',
                  text: 'Predicción del clima, análisis de redes neuronales, sistemas financieros.',
                },
                {
                  id: 1,
                  active: false,
                  correct: false,
                  point: 'B',
                  text: 'Desarrollo de videojuegos y entretenimiento.',
                },
                {
                  id: 2,
                  active: false,
                  correct: false,
                  point: 'C',
                  text: 'Investigación médica y biológica.',
                },
                {
                  id: 3,
                  active: false,
                  correct: false,
                  point: 'D',
                  text: 'Diseño de sistemas de transporte y logística.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
];
