// Experiment templates shown on the catalogue page. Each entry is filed under the
// outcome it measures (Sleep, Running or Recovery). The abme://template/ deep link is
// derived from `template` at render time, so the JSON here is the single source of truth.

const CATEGORY_ORDER = ['Sleep', 'Running', 'Recovery'];

// Display names for metric identifiers used in the templates.
const METRIC_NAMES = {
  'deepSleepDuration': 'Deep Sleep',
  'remSleepDuration': 'REM Sleep',
  'coreSleepDuration': 'Core Sleep',
  'sleepDuration': 'Sleep Duration',
  'sleepEfficiency': 'Sleep Efficiency',
  'workoutDuration': 'Workout Duration',
  'workoutDistance': 'Workout Distance',
  'workoutCaloriesBurned': 'Workout Calories',
  'HKQuantityTypeIdentifierRestingHeartRate': 'Resting HR',
  'HKQuantityTypeIdentifierHeartRateVariabilitySDNN': 'HRV (SDNN)',
  'HKQuantityTypeIdentifierHeartRate': 'Heart Rate',
  'HKQuantityTypeIdentifierVO2Max': 'VO2 Max',
  'HKQuantityTypeIdentifierRunningSpeed': 'Running Pace',
  'HKQuantityTypeIdentifierRunningGroundContactTime': 'Ground Contact Time',
  'HKQuantityTypeIdentifierRunningStrideLength': 'Stride Length',
  'HKQuantityTypeIdentifierStepCount': 'Steps',
  'HKQuantityTypeIdentifierActiveEnergyBurned': 'Active Energy',
  'HKQuantityTypeIdentifierDistanceWalkingRunning': 'Distance',
  'HKQuantityTypeIdentifierWalkingHeartRateAverage': 'Walking HR',
  'HKQuantityTypeIdentifierOxygenSaturation': 'SpO2',
  'HKQuantityTypeIdentifierRespiratoryRate': 'Respiratory Rate',
};

const EXPERIMENTS = [
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Caffeine Curfew & Deep Sleep",
      "hypothesis": "Does cutting afternoon caffeine increase deep sleep?",
      "interventionDescription": "No caffeine after 10 AM (coffee, tea, pre-workout, energy drinks)",
      "controlDescription": "Normal caffeine habits including afternoon coffee",
      "primaryMetric": {
        "identifier": "deepSleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "sleepDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "sleepEfficiency",
          "aggregation": "Average"
        },
        {
          "identifier": "coreSleepDuration",
          "aggregation": "Sum"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Deep Sleep +12 min, Sleep Duration +25 min, Sleep Efficiency +5%",
    "citations": [
      {
        "short": "Clark & Landolt (2017)",
        "title": "Coffee, caffeine, and sleep",
        "journal": "Sleep Medicine Reviews",
        "doi": "10.1016/j.smrv.2016.01.006"
      },
      {
        "short": "Drake et al. (2013)",
        "title": "Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed",
        "journal": "Journal of Clinical Sleep Medicine",
        "doi": "10.5664/jcsm.3170"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Magnesium & Deep Sleep",
      "hypothesis": "Does magnesium glycinate before bed increase deep sleep?",
      "interventionDescription": "400 mg magnesium glycinate 30 min before bed",
      "controlDescription": "No magnesium supplement",
      "primaryMetric": {
        "identifier": "deepSleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
          "aggregation": "Average"
        },
        {
          "identifier": "HKQuantityTypeIdentifierRestingHeartRate",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Deep Sleep +10 min, HRV +4.5 ms, RHR \u22122.5 bpm",
    "citations": [
      {
        "short": "Hausenblas et al. (2024)",
        "title": "Magnesium-L-threonate improves sleep quality and daytime functioning in adults",
        "journal": "Sleep Medicine: X",
        "doi": "10.1016/j.sleepx.2024.100121"
      },
      {
        "short": "Abbasi et al. (2012)",
        "title": "Effect of magnesium supplementation on primary insomnia in elderly",
        "journal": "Journal of Research in Medical Sciences",
        "doi": ""
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Glycine & Sleep Quality",
      "hypothesis": "Does glycine before bed improve sleep onset and deep sleep?",
      "interventionDescription": "3 g glycine powder 30 min before bed",
      "controlDescription": "No glycine",
      "primaryMetric": {
        "identifier": "deepSleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "sleepDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "sleepEfficiency",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Faster sleep onset, improved deep sleep quality",
    "citations": [
      {
        "short": "Bannai et al. (2012)",
        "title": "The effects of glycine on subjective daytime performance in partially sleep-restricted healthy volunteers",
        "journal": "Frontiers in Neurology",
        "doi": "10.3389/fneur.2012.00061"
      },
      {
        "short": "Inagawa et al. (2006)",
        "title": "Subjective effects of glycine ingestion before bedtime on sleep quality",
        "journal": "Sleep and Biological Rhythms",
        "doi": "10.1111/j.1479-8425.2006.00193.x"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "No Screens Before Bed",
      "hypothesis": "Does avoiding screens for 1 hour before bed improve sleep?",
      "interventionDescription": "No phone, laptop, or TV for 60 min before bed",
      "controlDescription": "Normal screen use until bedtime",
      "primaryMetric": {
        "identifier": "sleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "deepSleepDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "sleepEfficiency",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Earlier sleep onset, longer total sleep",
    "citations": [
      {
        "short": "Exelmans & Van den Bulck (2016)",
        "title": "Bedtime mobile phone use and sleep in adults",
        "journal": "Social Science & Medicine",
        "doi": "10.1016/j.socscimed.2015.11.037"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Blue Light Blocking Glasses",
      "hypothesis": "Do blue light blocking glasses after sunset improve sleep?",
      "interventionDescription": "Wear amber-lens blue-blocking glasses from sunset until bed",
      "controlDescription": "No glasses, normal screen use",
      "primaryMetric": {
        "identifier": "sleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "deepSleepDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "sleepEfficiency",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Earlier melatonin onset, improved sleep duration",
    "citations": [
      {
        "short": "Shechter et al. (2018)",
        "title": "Blocking nocturnal blue light for insomnia",
        "journal": "Journal of Psychiatric Research",
        "doi": "10.1016/j.jpsychires.2017.10.015"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Warm Shower Before Bed",
      "hypothesis": "Does a warm shower 90 min before bed improve sleep onset?",
      "interventionDescription": "Warm shower (104\u2013108\u00b0F) 90 min before bed",
      "controlDescription": "No pre-bed shower",
      "primaryMetric": {
        "identifier": "sleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "deepSleepDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "sleepEfficiency",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Faster sleep onset via core temperature drop",
    "citations": [
      {
        "short": "Haghayegh et al. (2019)",
        "title": "Before-bedtime passive body heating by warm shower or bath to improve sleep",
        "journal": "Sleep Medicine Reviews",
        "doi": "10.1016/j.smrv.2019.04.008"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Late Eating Cutoff",
      "hypothesis": "Does stopping food 3+ hours before bed improve overnight recovery?",
      "interventionDescription": "No food after 7 PM",
      "controlDescription": "Eat normally until bedtime",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierRestingHeartRate",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
          "aggregation": "Average"
        },
        {
          "identifier": "deepSleepDuration",
          "aggregation": "Sum"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Lower overnight RHR, improved HRV",
    "citations": [
      {
        "short": "Crispim et al. (2011)",
        "title": "Relationship between food intake and sleep pattern in healthy individuals",
        "journal": "Journal of Clinical Sleep Medicine",
        "doi": "10.5664/jcsm.1476"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Tart Cherry Juice & Sleep",
      "hypothesis": "Does tart cherry juice before bed extend sleep duration?",
      "interventionDescription": "8 oz Montmorency tart cherry juice 1 hr before bed",
      "controlDescription": "No cherry juice",
      "primaryMetric": {
        "identifier": "sleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "deepSleepDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "sleepEfficiency",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Sleep Duration +84 min in one study, natural melatonin source",
    "citations": [
      {
        "short": "Losso et al. (2018)",
        "title": "Pilot study of tart cherry juice for the treatment of insomnia",
        "journal": "American Journal of Therapeutics",
        "doi": "10.1097/MJT.0000000000000584"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Alcohol & Sleep Quality",
      "hypothesis": "Does a single evening drink impair sleep?",
      "interventionDescription": "One standard alcoholic drink with dinner",
      "controlDescription": "Abstain from alcohol",
      "primaryMetric": {
        "identifier": "remSleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
          "aggregation": "Average"
        },
        {
          "identifier": "HKQuantityTypeIdentifierRestingHeartRate",
          "aggregation": "Average"
        },
        {
          "identifier": "deepSleepDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "sleepDuration",
          "aggregation": "Sum"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "REM Sleep \u221211 min, HRV \u22125.7 ms, RHR +4 bpm",
    "citations": [
      {
        "short": "Gardiner et al. (2025)",
        "title": "Effect of alcohol on subsequent sleep: systematic review and meta-analysis",
        "journal": "Sleep Medicine Reviews",
        "doi": "10.1016/j.smrv.2024.102030"
      },
      {
        "short": "Pietil\u00e4 et al. (2018)",
        "title": "Acute effect of alcohol intake on cardiovascular autonomic regulation",
        "journal": "JMIR Mental Health",
        "doi": "10.2196/mental.9519"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Melatonin Microdose",
      "hypothesis": "Does 0.3 mg melatonin improve sleep onset without grogginess?",
      "interventionDescription": "0.3 mg melatonin 30 min before bed",
      "controlDescription": "No melatonin",
      "primaryMetric": {
        "identifier": "sleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "deepSleepDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "sleepEfficiency",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Physiological dose \u2014 may outperform standard 3\u20135 mg",
    "citations": [
      {
        "short": "Zhdanova et al. (2001)",
        "title": "Melatonin treatment for age-related insomnia",
        "journal": "Journal of Clinical Endocrinology & Metabolism",
        "doi": "10.1210/jcem.86.10.7901"
      },
      {
        "short": "Ferracioli-Oda et al. (2013)",
        "title": "Meta-analysis: melatonin for the treatment of primary sleep disorders",
        "journal": "PLoS ONE",
        "doi": "10.1371/journal.pone.0063773"
      }
    ]
  },
  {
    "category": "Running",
    "template": {
      "version": 1,
      "name": "Carbon-Plated Shoes vs Trainers",
      "hypothesis": "Do carbon-plated racing shoes actually make you faster?",
      "interventionDescription": "Carbon-plated racer (e.g. Nike Vaporfly, Adidas Adios Pro)",
      "controlDescription": "Daily trainer (e.g. ASICS Gel Nimbus, Brooks Ghost)",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierRunningSpeed",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierRunningGroundContactTime",
          "aggregation": "Average"
        },
        {
          "identifier": "HKQuantityTypeIdentifierRunningStrideLength",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Workout start",
      "windowEnd": "Workout end",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Pace +4.3%, Ground Contact Time \u22128 ms",
    "citations": [
      {
        "short": "Hoogkamer et al. (2018)",
        "title": "A comparison of the energetic cost of running in marathon racing shoes",
        "journal": "Sports Medicine",
        "doi": "10.1007/s40279-017-0811-2"
      },
      {
        "short": "Barnes & Kilding (2019)",
        "title": "A randomized crossover study investigating the running economy in marathon racing shoes versus track spikes",
        "journal": "Sports Medicine",
        "doi": "10.1007/s40279-018-1012-3"
      }
    ]
  },
  {
    "category": "Running",
    "template": {
      "version": 1,
      "name": "Pre-Run Caffeine & Pace",
      "hypothesis": "Does caffeine before a run improve your pace?",
      "interventionDescription": "200 mg caffeine capsule 45 min before running",
      "controlDescription": "Placebo capsule (no caffeine) before running",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierRunningSpeed",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "workoutDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "workoutCaloriesBurned",
          "aggregation": "Sum"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Workout start",
      "windowEnd": "Workout end",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Pace +2\u20135%, Workout Duration +5 min",
    "citations": [
      {
        "short": "Southward et al. (2018)",
        "title": "Effect of acute caffeine ingestion on endurance performance: systematic review and meta-analysis",
        "journal": "Sports Medicine",
        "doi": "10.1007/s40279-018-0939-8"
      },
      {
        "short": "Guest et al. (2021)",
        "title": "International Society of Sports Nutrition position stand: caffeine and exercise performance",
        "journal": "Journal of the International Society of Sports Nutrition",
        "doi": "10.1186/s12970-020-00383-4"
      }
    ]
  },
  {
    "category": "Running",
    "template": {
      "version": 1,
      "name": "Beetroot Juice & Running Pace",
      "hypothesis": "Does beetroot juice before a run make you faster?",
      "interventionDescription": "Concentrated beetroot shot (~400 mg nitrate) 2\u20133 hr before running",
      "controlDescription": "No beetroot juice",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierRunningSpeed",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierHeartRate",
          "aggregation": "Average"
        },
        {
          "identifier": "workoutDuration",
          "aggregation": "Sum"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Workout start",
      "windowEnd": "Workout end",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "2\u20134% time-to-exhaustion improvement; 15\u201320% are genetic non-responders",
    "citations": [
      {
        "short": "Jones et al. (2018)",
        "title": "Dietary nitrate and physical performance",
        "journal": "Annual Review of Nutrition",
        "doi": "10.1146/annurev-nutr-082117-051622"
      },
      {
        "short": "Dom\u00ednguez et al. (2017)",
        "title": "Effects of beetroot juice supplementation on cardiorespiratory endurance",
        "journal": "Nutrients",
        "doi": "10.3390/nu9010043"
      }
    ]
  },
  {
    "category": "Running",
    "template": {
      "version": 1,
      "name": "Music vs Silence Running",
      "hypothesis": "Does listening to music improve running performance?",
      "interventionDescription": "Upbeat playlist (120\u2013140 BPM) during run",
      "controlDescription": "No headphones, run in silence",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierRunningSpeed",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierDistanceWalkingRunning",
          "aggregation": "Sum"
        },
        {
          "identifier": "HKQuantityTypeIdentifierHeartRate",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Workout start",
      "windowEnd": "Workout end",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "+10% distance in time-limited runs, cadence sync with BPM",
    "citations": [
      {
        "short": "Terry et al. (2020)",
        "title": "Effects of music in exercise and sport: a meta-analytic review",
        "journal": "Psychological Bulletin",
        "doi": "10.1037/bul0000216"
      }
    ]
  },
  {
    "category": "Running",
    "template": {
      "version": 1,
      "name": "Nasal vs Mouth Breathing",
      "hypothesis": "Does nose-only breathing during easy runs change heart rate or pace?",
      "interventionDescription": "Nasal-only breathing during easy runs",
      "controlDescription": "Normal mouth breathing",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierHeartRate",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierRunningSpeed",
          "aggregation": "Average"
        },
        {
          "identifier": "HKQuantityTypeIdentifierRespiratoryRate",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Workout start",
      "windowEnd": "Workout end",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Comparable VO2 at submaximal intensity; high individual variation",
    "citations": [
      {
        "short": "Dallam et al. (2018)",
        "title": "Effect of nasal versus oral breathing on exercise in trained runners",
        "journal": "International Journal of Kinesiology and Sports Science",
        "doi": ""
      },
      {
        "short": "Nestor (2020)",
        "title": "Breath: The New Science of a Lost Art",
        "journal": "Riverhead Books",
        "doi": ""
      }
    ]
  },
  {
    "category": "Running",
    "template": {
      "version": 1,
      "name": "Fasted vs Fed Running",
      "hypothesis": "Does running on an empty stomach change heart rate or energy burn?",
      "interventionDescription": "Morning run after 12+ hr overnight fast",
      "controlDescription": "Same run 60 min after a 400 kcal meal",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierHeartRate",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierActiveEnergyBurned",
          "aggregation": "Sum"
        },
        {
          "identifier": "HKQuantityTypeIdentifierRunningSpeed",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Workout start",
      "windowEnd": "Workout end",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Higher fat oxidation fasted; heart rate tends higher fasted",
    "citations": [
      {
        "short": "Vieira et al. (2016)",
        "title": "Effects of aerobic exercise in fasted vs fed state on fat and carbohydrate metabolism",
        "journal": "British Journal of Nutrition",
        "doi": "10.1017/S0007114516003160"
      }
    ]
  },
  {
    "category": "Running",
    "template": {
      "version": 1,
      "name": "Electrolytes vs Water",
      "hypothesis": "Does an electrolyte mix before running lower exercise heart rate?",
      "interventionDescription": "1 packet LMNT (1000 mg sodium) in 16 oz water pre-run",
      "controlDescription": "16 oz plain water pre-run",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierHeartRate",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierRunningSpeed",
          "aggregation": "Average"
        },
        {
          "identifier": "workoutDuration",
          "aggregation": "Sum"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Workout start",
      "windowEnd": "Workout end",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Lower exercise HR when sodium-loaded; plasma volume expansion",
    "citations": [
      {
        "short": "Sims et al. (2007)",
        "title": "Sodium loading aids fluid balance and reduces physiological strain of trained men exercising in the heat",
        "journal": "Medicine & Science in Sports & Exercise",
        "doi": "10.1249/mss.0b013e318046eb2c"
      }
    ]
  },
  {
    "category": "Running",
    "template": {
      "version": 1,
      "name": "Sodium Pre-Loading",
      "hypothesis": "Does sodium before exercise lower heart rate in heat?",
      "interventionDescription": "1500 mg sodium in 750 ml water 60\u201390 min before exercise",
      "controlDescription": "750 ml plain water 60\u201390 min before exercise",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierHeartRate",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierRunningSpeed",
          "aggregation": "Average"
        },
        {
          "identifier": "HKQuantityTypeIdentifierActiveEnergyBurned",
          "aggregation": "Sum"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Workout start",
      "windowEnd": "Workout end",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Measurable plasma volume expansion; lower exercise HR in heat",
    "citations": [
      {
        "short": "Sims et al. (2007)",
        "title": "Sodium loading aids fluid balance and reduces physiological strain of trained men exercising in the heat",
        "journal": "Medicine & Science in Sports & Exercise",
        "doi": "10.1249/01.mss.0000241639.97972.4a"
      }
    ]
  },
  {
    "category": "Recovery",
    "template": {
      "version": 1,
      "name": "Cold Plunge & Recovery",
      "hypothesis": "Does morning cold water immersion improve HRV and lower resting heart rate?",
      "interventionDescription": "2-min cold plunge (50\u201359\u00b0F / 10\u201315\u00b0C) within 1 hr of waking",
      "controlDescription": "Normal morning routine, no cold exposure",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierRestingHeartRate",
          "aggregation": "Average"
        },
        {
          "identifier": "deepSleepDuration",
          "aggregation": "Sum"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Midnight",
      "windowEnd": "Midnight",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "HRV +8 ms (SMD 0.61), RHR \u22123 bpm",
    "citations": [
      {
        "short": "M\u00e4kinen et al. (2008)",
        "title": "Autonomic nervous function during whole-body cold exposure before and after cold acclimation",
        "journal": "Aviation, Space, and Environmental Medicine",
        "doi": "10.3357/ASEM.2235.2008"
      },
      {
        "short": "Esperland et al. (2022)",
        "title": "Health effects of voluntary exposure to cold water",
        "journal": "International Journal of Circumpolar Health",
        "doi": "10.1080/22423982.2022.2111789"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Morning Sunlight & Sleep",
      "hypothesis": "Does morning sunlight exposure improve that night's sleep?",
      "interventionDescription": "10\u201315 min outdoor sunlight within 1 hr of waking (no sunglasses)",
      "controlDescription": "Stay indoors, normal morning routine",
      "primaryMetric": {
        "identifier": "sleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "deepSleepDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Sets circadian clock; effects on melatonin timing 14\u201316 hr later",
    "citations": [
      {
        "short": "Blume et al. (2019)",
        "title": "Effects of light on human circadian rhythms, sleep and mood",
        "journal": "Somnologie",
        "doi": "10.1007/s11818-019-00215-x"
      }
    ]
  },
  {
    "category": "Recovery",
    "template": {
      "version": 1,
      "name": "Meditation & HRV",
      "hypothesis": "Does 10 min of morning meditation improve heart rate variability?",
      "interventionDescription": "10 min guided meditation or box breathing in the morning",
      "controlDescription": "No meditation, normal morning routine",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierRestingHeartRate",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Midnight",
      "windowEnd": "Midnight",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "HRV increase, RHR decrease; cumulative benefits over weeks",
    "citations": [
      {
        "short": "Ahani et al. (2014)",
        "title": "Quantitative change of EEG and respiration signals during mindfulness meditation",
        "journal": "Journal of NeuroEngineering and Rehabilitation",
        "doi": "10.1186/1743-0003-11-87"
      },
      {
        "short": "Krygier et al. (2013)",
        "title": "Mindfulness meditation, well-being, and heart rate variability",
        "journal": "International Journal of Psychophysiology",
        "doi": "10.1016/j.ijpsycho.2013.06.017"
      }
    ]
  },
  {
    "category": "Recovery",
    "template": {
      "version": 1,
      "name": "Post-Meal Walking",
      "hypothesis": "Does a 10-min walk after meals improve daily activity and heart rate?",
      "interventionDescription": "10\u201315 min walk within 30 min of eating (after each main meal)",
      "controlDescription": "Sit or rest after meals",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierStepCount",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierWalkingHeartRateAverage",
          "aggregation": "Average"
        },
        {
          "identifier": "HKQuantityTypeIdentifierActiveEnergyBurned",
          "aggregation": "Sum"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Midnight",
      "windowEnd": "Midnight",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "+3000 daily steps; glucose response flattened ~30%",
    "citations": [
      {
        "short": "Buffey et al. (2022)",
        "title": "The acute effects of interrupting prolonged sitting time in adults with standing and light-intensity walking",
        "journal": "Sports Medicine",
        "doi": "10.1007/s40279-022-01649-4"
      }
    ]
  },
  {
    "category": "Recovery",
    "template": {
      "version": 1,
      "name": "Contrast Therapy & Recovery",
      "hypothesis": "Does alternating hot and cold after exercise improve overnight recovery?",
      "interventionDescription": "Alternate 1 min cold / 1 min hot for 12\u201315 min total post-workout",
      "controlDescription": "No contrast therapy post-workout",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierRestingHeartRate",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Midnight",
      "windowEnd": "Midnight",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Greater parasympathetic recovery than passive rest",
    "citations": [
      {
        "short": "Bieuzen et al. (2013)",
        "title": "Contrast water therapy and exercise induced muscle damage: a systematic review and meta-analysis",
        "journal": "PLoS ONE",
        "doi": "10.1371/journal.pone.0062356"
      }
    ]
  },
  {
    "category": "Recovery",
    "template": {
      "version": 1,
      "name": "L-Theanine & Coffee",
      "hypothesis": "Does adding L-theanine to coffee improve focus without jitters?",
      "interventionDescription": "200 mg L-theanine with morning coffee",
      "controlDescription": "Morning coffee alone (no L-theanine)",
      "primaryMetric": {
        "identifier": "HKQuantityTypeIdentifierRestingHeartRate",
        "aggregation": "Average"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Midnight",
      "windowEnd": "Midnight",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Lower RHR, higher HRV; reduced caffeine jitteriness",
    "citations": [
      {
        "short": "Nobre et al. (2008)",
        "title": "L-theanine, a natural constituent in tea, and its effect on mental state",
        "journal": "Asia Pacific Journal of Clinical Nutrition",
        "doi": ""
      },
      {
        "short": "Owen et al. (2008)",
        "title": "The combined effects of L-theanine and caffeine on cognitive performance and mood",
        "journal": "Nutritional Neuroscience",
        "doi": "10.1179/147683008X301513"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Apigenin & Sleep",
      "hypothesis": "Does apigenin before bed improve sleep onset?",
      "interventionDescription": "50 mg apigenin 30\u201360 min before bed",
      "controlDescription": "No apigenin",
      "primaryMetric": {
        "identifier": "sleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "deepSleepDuration",
          "aggregation": "Sum"
        },
        {
          "identifier": "sleepEfficiency",
          "aggregation": "Average"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Mild sedative via GABA-A; part of Huberman's sleep stack",
    "citations": [
      {
        "short": "Salehi et al. (2019)",
        "title": "The therapeutic potential of apigenin",
        "journal": "International Journal of Molecular Sciences",
        "doi": "10.3390/ijms20061305"
      }
    ]
  },
  {
    "category": "Sleep",
    "template": {
      "version": 1,
      "name": "Huberman Sleep Stack",
      "hypothesis": "Does the full Huberman sleep cocktail improve deep sleep?",
      "interventionDescription": "Mg threonate (145 mg) + L-theanine (200 mg) + apigenin (50 mg) before bed",
      "controlDescription": "No supplements before bed",
      "primaryMetric": {
        "identifier": "deepSleepDuration",
        "aggregation": "Sum"
      },
      "secondaryMetrics": [
        {
          "identifier": "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
          "aggregation": "Average"
        },
        {
          "identifier": "sleepDuration",
          "aggregation": "Sum"
        }
      ],
      "propensity": 0.5,
      "alpha": 0.05,
      "eta": 0.77,
      "periodDays": 1,
      "washoutDays": 0,
      "windowStart": "Bedtime",
      "windowEnd": "Rising time",
      "windowStartHour": null,
      "windowStartMinute": null,
      "windowEndHour": null,
      "windowEndMinute": null,
      "publicExperimentID": null
    },
    "effectSummary": "Combined stack targeting GABA, glycine, and parasympathetic pathways",
    "citations": [
      {
        "short": "Huberman Lab (2021)",
        "title": "Toolkit for Sleep",
        "journal": "Huberman Lab Podcast",
        "doi": ""
      },
      {
        "short": "Hausenblas et al. (2024)",
        "title": "Magnesium-L-threonate improves sleep quality and daytime functioning in adults",
        "journal": "Sleep Medicine: X",
        "doi": "10.1016/j.sleepx.2024.100121"
      }
    ]
  }
];
