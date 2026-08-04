import {
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
} from 'framer-motion'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from 'recharts'
import { QRCodeSVG } from 'qrcode.react'
import { ExternalLink } from 'lucide-react'
import { surveyData } from '../data/surveyData'
import { siteConfig } from '../data/siteConfig'
import { SectionTitle } from './SectionTitle'
import { Heart } from './illustrations/DecorativeLeaves'

const COLORS = {
  consumption: [
    '#8ac43f',
    '#3f91c9',
    '#9a63b2',
  ],

  herbs: [
    '#ef5b88',
    '#9a63b2',
  ],

  sharing: [
    '#f7941d',
    '#3aa39c',
    '#f7c52b',
  ],

  age: [
    '#8ac43f',
    '#ef5b88',
    '#3f91c9',
    '#f7941d',
  ],
}

interface TooltipPayloadItem {
  name?: string
  value?: number
  color?: string
  payload?: {
    name?: string
    value?: number
  }
}

function Counter({
  value,
  suffix = '',
}: {
  value: number
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-40px',
  })

  const [display, setDisplay] =
    useState(0)

  useEffect(() => {
    if (!inView) {
      return
    }

    const controls = animate(
      0,
      value,
      {
        duration: 1.5,
        ease: 'easeOut',

        onUpdate: (currentValue) => {
          setDisplay(
            Math.round(currentValue),
          )
        },
      },
    )

    return () => controls.stop()
  }, [inView, value])

  return (
    <span
      ref={ref}
      className="survey__counter"
    >
      {display}
      {suffix}
    </span>
  )
}

function ResultsTooltip({
  active,
  payload,
  total,
}: {
  active?: boolean
  payload?: TooltipPayloadItem[]
  total: number
}) {
  if (
    !active ||
    !payload ||
    payload.length === 0
  ) {
    return null
  }

  const result = payload[0]

  const name =
    result.payload?.name ??
    result.name ??
    ''

  const value = Number(
    result.value ?? 0,
  )

  const percentage =
    total > 0
      ? Math.round(
          (value / total) * 100,
        )
      : 0

  return (
    <div
      className="chart-tooltip"
      role="status"
    >
      <span
        className="chart-tooltip__dot"
        style={{
          background:
            result.color ?? '#557a35',
        }}
      />

      <span>
        <strong>{name}</strong>

        <span>
          {value}{' '}
          {value === 1
            ? 'persona'
            : 'personas'}{' '}
          · {percentage}%
        </span>
      </span>
    </div>
  )
}

type TabId =
  | 'consumption'
  | 'addsHerbs'
  | 'sharedWith'
  | 'startingAge'

const tabs: {
  id: TabId
  label: string
}[] = [
  {
    id: 'consumption',
    label: 'Consumo',
  },
  {
    id: 'addsHerbs',
    label: 'Yuyos',
  },
  {
    id: 'sharedWith',
    label: 'Con quién comparten',
  },
  {
    id: 'startingAge',
    label: 'Edad de inicio',
  },
]

function DonutChart({
  data,
  colors,
}: {
  data: {
    name: string
    value: number
  }[]
  colors: string[]
}) {
  const total = data.reduce(
    (accumulator, item) =>
      accumulator + item.value,
    0,
  )

  return (
    <div className="chart-box">
      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={3}
            stroke="#24451e"
            strokeWidth={2}
          >
            {data.map(
              (item, index) => (
                <Cell
                  key={item.name}
                  fill={
                    colors[
                      index %
                        colors.length
                    ]
                  }
                />
              ),
            )}
          </Pie>

          <Tooltip
            content={
              <ResultsTooltip
                total={total}
              />
            }
          />
        </PieChart>
      </ResponsiveContainer>

      <ul className="chart-legend">
        {data.map(
          (item, index) => {
            const percentage =
              Math.round(
                (item.value / total) *
                  100,
              )

            return (
              <li key={item.name}>
                <span
                  className="chart-legend__dot"
                  style={{
                    background:
                      colors[
                        index %
                          colors.length
                      ],
                  }}
                />

                {item.name} —{' '}

                <strong>
                  {item.value}{' '}
                  {item.value === 1
                    ? 'persona'
                    : 'personas'}{' '}
                  ({percentage}%)
                </strong>
              </li>
            )
          },
        )}
      </ul>
    </div>
  )
}

function AgeChart() {
  return (
    <div className="chart-box">
      <ResponsiveContainer
        width="100%"
        height={340}
      >
        <BarChart
          data={
            surveyData.startingAge
          }
          margin={{
            top: 30,
            right: 15,
            left: 0,
            bottom: 25,
          }}
        >
          <CartesianGrid
            strokeDasharray="4 6"
            stroke="#d9c9a6"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            interval={0}
            tick={{
              fill: '#24451e',
              fontFamily:
                'Nunito, sans-serif',
              fontWeight: 800,
              fontSize: 12,
            }}
          />

          <YAxis
            allowDecimals={false}
            tick={{
              fill: '#24451e',
              fontFamily:
                'Nunito, sans-serif',
              fontWeight: 700,
            }}
          />

          <Tooltip
            content={
              <ResultsTooltip
                total={
                  surveyData.totalParticipants
                }
              />
            }
            cursor={{
              fill:
                'rgba(184, 201, 150, 0.22)',
            }}
          />

          <Bar
            dataKey="value"
            radius={[
              10,
              10,
              0,
              0,
            ]}
            barSize={55}
          >
            {surveyData.startingAge.map(
              (item, index) => (
                <Cell
                  key={item.name}
                  fill={
                    COLORS.age[
                      index %
                        COLORS.age.length
                    ]
                  }
                />
              ),
            )}

            <LabelList
              dataKey="value"
              position="top"
              formatter={(value) =>
                Number(value)
              }
              style={{
                fill: '#24451e',
                fontWeight: 900,
                fontFamily:
                  'Nunito, sans-serif',
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <p className="chart-note">
        Resultados sobre una base de{' '}
        {surveyData.totalParticipants}{' '}
        personas encuestadas.
      </p>
    </div>
  )
}

export function SurveyResults() {
  const [tab, setTab] =
    useState<TabId>('consumption')

  const hasSurvey =
    siteConfig.surveyUrl
      .trim()
      .length > 0

  const peopleAddingHerbs =
    surveyData.addsHerbs.find(
      (item) =>
        item.name === 'Sí',
    )?.value ?? 0

  const familyLearningPercent =
    Math.round(
      (surveyData.learnedWithFamily /
        surveyData.totalParticipants) *
        100,
    )

  return (
    <section
      className="section section--alt survey"
      id="resultados"
      aria-labelledby="resultados-title"
    >
      <div className="container">
        <SectionTitle
          kicker="La encuesta"
          title="¿Qué descubrimos?"
          subtitle="Estos son algunos resultados de la encuesta realizada en nuestra comunidad."
        />

        <div className="survey__stats">
          <motion.article
            className="card survey__stat"
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span className="survey__stat-label">
              Personas encuestadas
            </span>

            <Counter
              value={
                surveyData.totalParticipants
              }
            />

            <span className="survey__stat-note">
              participaron de la
              encuesta
            </span>
          </motion.article>

          <motion.article
            className="card survey__stat"
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <span className="survey__stat-label">
              Agregan yuyos
            </span>

            <Counter
              value={
                peopleAddingHerbs
              }
            />

            <span className="survey__stat-note">
              personas los agregan a
              sus preparaciones
            </span>
          </motion.article>

          <motion.article
            className="card survey__stat survey__stat--featured"
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <Heart
              size={26}
              className="survey__featured-heart"
            />

            <span className="survey__stat-label">
              El dato más importante
            </span>

            <strong className="survey__featured-value">
              {familyLearningPercent}%
              aprendió a preparar con
              su familia
            </strong>

            <span className="survey__stat-note">
              ¡las familias son grandes
              maestras!
            </span>
          </motion.article>
        </div>

        <div
          className="survey__tabs"
          role="group"
          aria-label="Elegí qué gráfico ver"
        >
          {tabs.map((currentTab) => (
            <button
              key={currentTab.id}
              type="button"
              className={`chip ${
                tab === currentTab.id
                  ? 'chip--active'
                  : ''
              }`}
              aria-pressed={
                tab === currentTab.id
              }
              onClick={() =>
                setTab(currentTab.id)
              }
            >
              {currentTab.label}
            </button>
          ))}
        </div>

        <div className="survey__chart card">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -16,
              }}
              transition={{
                duration: 0.35,
                ease: 'easeOut',
              }}
            >
              {tab ===
                'consumption' && (
                <>
                  <h3 className="survey__chart-title">
                    ¿Qué consumen más?
                  </h3>

                  <DonutChart
                    data={
                      surveyData.consumption
                    }
                    colors={
                      COLORS.consumption
                    }
                  />
                </>
              )}

              {tab ===
                'addsHerbs' && (
                <>
                  <h3 className="survey__chart-title">
                    ¿Le agregan yuyos?
                  </h3>

                  <DonutChart
                    data={
                      surveyData.addsHerbs
                    }
                    colors={
                      COLORS.herbs
                    }
                  />
                </>
              )}

              {tab ===
                'sharedWith' && (
                <>
                  <h3 className="survey__chart-title">
                    ¿Con quién lo
                    comparten?
                  </h3>

                  <DonutChart
                    data={
                      surveyData.sharedWith
                    }
                    colors={
                      COLORS.sharing
                    }
                  />
                </>
              )}

              {tab ===
                'startingAge' && (
                <>
                  <h3 className="survey__chart-title">
                    ¿A qué edad empezaste
                    a tomar?
                  </h3>

                  <AgeChart />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          id="encuesta"
          className="survey__cta card"
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          <div className="survey__cta-text">
            <h3>
              ¿Todavía no respondiste
              nuestra encuesta?
            </h3>

            <p>
              Tu opinión nos ayuda a
              conocer las costumbres de
              nuestra comunidad. ¡Es muy
              rápida!
            </p>

            <a
              className="btn btn--citrus"
              href={
                hasSurvey
                  ? siteConfig.surveyUrl
                  : undefined
              }
              target={
                hasSurvey
                  ? '_blank'
                  : undefined
              }
              rel={
                hasSurvey
                  ? 'noopener noreferrer'
                  : undefined
              }
              aria-disabled={
                !hasSurvey
              }
              tabIndex={
                hasSurvey ? 0 : -1
              }
            >
              <ExternalLink
                size={20}
                aria-hidden="true"
              />

              {hasSurvey
                ? 'Responder encuesta'
                : 'Encuesta próximamente'}
            </a>
          </div>

          {hasSurvey && (
            <div className="survey__qr">
              <QRCodeSVG
                value={
                  siteConfig.surveyUrl
                }
                size={120}
                bgColor="#ffffff"
                fgColor="#24451e"
              />

              <span>
                Escaneá el código para
                responder
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}