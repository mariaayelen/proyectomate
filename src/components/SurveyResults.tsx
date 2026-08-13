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
import {
  surveyData,
  type SurveyDatum,
} from '../data/surveyData'
import { siteConfig } from '../data/siteConfig'
import { SectionTitle } from './SectionTitle'
import { Heart } from './illustrations/DecorativeLeaves'

const COLORS = {
  consumption: [
    '#3f91c9',
    '#ef5b3f',
    '#f7941d',
  ],

  herbs: [
    '#6f8f2f',
    '#9a63b2',
  ],

  sharing: [
    '#3f91c9',
    '#ef5b3f',
    '#f7941d',
    '#9a63b2',
    '#3c9148',
  ],

  age: [
    '#3f91c9',
    '#ef5b3f',
    '#f7941d',
    '#3c9148',
    '#9a63b2',
  ],
}

interface TooltipPayloadItem {
  name?: string
  value?: number | string
  color?: string
  payload?: SurveyDatum
}

function formatPercentage(value: number) {
  return value.toLocaleString('es-AR', {
    minimumFractionDigits:
      Number.isInteger(value) ? 0 : 1,
    maximumFractionDigits: 1,
  })
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
}: {
  active?: boolean
  payload?: TooltipPayloadItem[]
}) {
  if (
    !active ||
    !payload ||
    payload.length === 0
  ) {
    return null
  }

  const result = payload[0]

  const datum = result.payload

  const name =
    datum?.name ??
    result.name ??
    ''

  const percentage = Number(
    datum?.value ??
      result.value ??
      0,
  )

  const count = datum?.count

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
          {count !== undefined && (
            <>
              {count}{' '}
              {count === 1
                ? 'persona'
                : 'personas'}{' '}
              ·{' '}
            </>
          )}

          {formatPercentage(
            percentage,
          )}
          %
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
  data: SurveyDatum[]
  colors: string[]
}) {
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
              <ResultsTooltip />
            }
          />
        </PieChart>
      </ResponsiveContainer>

      <ul className="chart-legend">
        {data.map(
          (item, index) => (
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
                {item.count !==
                  undefined && (
                  <>
                    {item.count}{' '}
                    {item.count === 1
                      ? 'persona'
                      : 'personas'}{' '}
                    ·{' '}
                  </>
                )}

                {formatPercentage(
                  item.value,
                )}
                %
              </strong>
            </li>
          ),
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
            bottom: 35,
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
              fontSize: 11,
            }}
          />

          <YAxis
            allowDecimals
            tickFormatter={(value) =>
              `${value}%`
            }
            tick={{
              fill: '#24451e',
              fontFamily:
                'Nunito, sans-serif',
              fontWeight: 700,
            }}
          />

          <Tooltip
            content={
              <ResultsTooltip />
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
                `${formatPercentage(
                  Number(value),
                )}%`
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
    )?.count ?? 0

  const familySharePercent =
    surveyData.sharedWith.find(
      (item) =>
        item.name === 'Familia',
    )?.value ?? 0

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
              personas agregan remedios,
              yuyos o hierbas
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
              {formatPercentage(
                familySharePercent,
              )}
              % comparte habitualmente
              con su familia
            </strong>

            <span className="survey__stat-note">
              La familia sigue siendo
              protagonista de esta
              tradición.
            </span>
          </motion.article>
        </div>

        <div
          className="survey__tabs"
          role="group"
          aria-label="Elegí qué gráfico ver"
        >
          {tabs.map(
            (currentTab) => (
              <button
                key={
                  currentTab.id
                }
                type="button"
                className={`chip ${
                  tab ===
                  currentTab.id
                    ? 'chip--active'
                    : ''
                }`}
                aria-pressed={
                  tab ===
                  currentTab.id
                }
                onClick={() =>
                  setTab(
                    currentTab.id,
                  )
                }
              >
                {
                  currentTab.label
                }
              </button>
            ),
          )}
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
                    ¿Qué preferís tomar
                    habitualmente?
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
                    ¿Le agregás remedios
                    (yuyos/hierbas) a tu
                    bebida?
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
                    ¿Con quién compartís
                    habitualmente el mate
                    o el tereré?
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
                    ¿A qué edad comenzaste
                    a tomar mate o tereré?
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
                hasSurvey
                  ? 0
                  : -1
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