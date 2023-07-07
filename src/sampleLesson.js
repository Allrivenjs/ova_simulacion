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
];
