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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiQ2FmZmVpbmUgQ3VyZmV3ICYgRGVlcCBTbGVlcCIsImh5cG90aGVzaXMiOiJEb2VzIGN1dHRpbmcgYWZ0ZXJub29uIGNhZmZlaW5lIGluY3JlYXNlIGRlZXAgc2xlZXA_IiwiaW50ZXJ2ZW50aW9uRGVzY3JpcHRpb24iOiJObyBjYWZmZWluZSBhZnRlciAxMCBBTSAoY29mZmVlLCB0ZWEsIHByZS13b3Jrb3V0LCBlbmVyZ3kgZHJpbmtzKSIsImNvbnRyb2xEZXNjcmlwdGlvbiI6Ik5vcm1hbCBjYWZmZWluZSBoYWJpdHMgaW5jbHVkaW5nIGFmdGVybm9vbiBjb2ZmZWUiLCJwcmltYXJ5TWV0cmljIjp7ImlkZW50aWZpZXIiOiJkZWVwU2xlZXBEdXJhdGlvbiIsImFnZ3JlZ2F0aW9uIjoiU3VtIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJzbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSx7ImlkZW50aWZpZXIiOiJzbGVlcEVmZmljaWVuY3kiLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifSx7ImlkZW50aWZpZXIiOiJjb3JlU2xlZXBEdXJhdGlvbiIsImFnZ3JlZ2F0aW9uIjoiU3VtIn1dLCJwcm9wZW5zaXR5IjowLjUsImFscGhhIjowLjA1LCJldGEiOjAuNzcsInBlcmlvZERheXMiOjEsIndhc2hvdXREYXlzIjowLCJ3aW5kb3dTdGFydCI6IkJlZHRpbWUiLCJ3aW5kb3dFbmQiOiJSaXNpbmcgdGltZSIsIndpbmRvd1N0YXJ0SG91ciI6bnVsbCwid2luZG93U3RhcnRNaW51dGUiOm51bGwsIndpbmRvd0VuZEhvdXIiOm51bGwsIndpbmRvd0VuZE1pbnV0ZSI6bnVsbCwicHVibGljRXhwZXJpbWVudElEIjpudWxsfQ",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiTWFnbmVzaXVtICYgRGVlcCBTbGVlcCIsImh5cG90aGVzaXMiOiJEb2VzIG1hZ25lc2l1bSBnbHljaW5hdGUgYmVmb3JlIGJlZCBpbmNyZWFzZSBkZWVwIHNsZWVwPyIsImludGVydmVudGlvbkRlc2NyaXB0aW9uIjoiNDAwIG1nIG1hZ25lc2l1bSBnbHljaW5hdGUgMzAgbWluIGJlZm9yZSBiZWQiLCJjb250cm9sRGVzY3JpcHRpb24iOiJObyBtYWduZXNpdW0gc3VwcGxlbWVudCIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6ImRlZXBTbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSwic2Vjb25kYXJ5TWV0cmljcyI6W3siaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllckhlYXJ0UmF0ZVZhcmlhYmlsaXR5U0ROTiIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9LHsiaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllclJlc3RpbmdIZWFydFJhdGUiLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiQmVkdGltZSIsIndpbmRvd0VuZCI6IlJpc2luZyB0aW1lIiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiR2x5Y2luZSAmIFNsZWVwIFF1YWxpdHkiLCJoeXBvdGhlc2lzIjoiRG9lcyBnbHljaW5lIGJlZm9yZSBiZWQgaW1wcm92ZSBzbGVlcCBvbnNldCBhbmQgZGVlcCBzbGVlcD8iLCJpbnRlcnZlbnRpb25EZXNjcmlwdGlvbiI6IjMgZyBnbHljaW5lIHBvd2RlciAzMCBtaW4gYmVmb3JlIGJlZCIsImNvbnRyb2xEZXNjcmlwdGlvbiI6Ik5vIGdseWNpbmUiLCJwcmltYXJ5TWV0cmljIjp7ImlkZW50aWZpZXIiOiJkZWVwU2xlZXBEdXJhdGlvbiIsImFnZ3JlZ2F0aW9uIjoiU3VtIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJzbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSx7ImlkZW50aWZpZXIiOiJzbGVlcEVmZmljaWVuY3kiLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiQmVkdGltZSIsIndpbmRvd0VuZCI6IlJpc2luZyB0aW1lIiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiTm8gU2NyZWVucyBCZWZvcmUgQmVkIiwiaHlwb3RoZXNpcyI6IkRvZXMgYXZvaWRpbmcgc2NyZWVucyBmb3IgMSBob3VyIGJlZm9yZSBiZWQgaW1wcm92ZSBzbGVlcD8iLCJpbnRlcnZlbnRpb25EZXNjcmlwdGlvbiI6Ik5vIHBob25lLCBsYXB0b3AsIG9yIFRWIGZvciA2MCBtaW4gYmVmb3JlIGJlZCIsImNvbnRyb2xEZXNjcmlwdGlvbiI6Ik5vcm1hbCBzY3JlZW4gdXNlIHVudGlsIGJlZHRpbWUiLCJwcmltYXJ5TWV0cmljIjp7ImlkZW50aWZpZXIiOiJzbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSwic2Vjb25kYXJ5TWV0cmljcyI6W3siaWRlbnRpZmllciI6ImRlZXBTbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSx7ImlkZW50aWZpZXIiOiJzbGVlcEVmZmljaWVuY3kiLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiQmVkdGltZSIsIndpbmRvd0VuZCI6IlJpc2luZyB0aW1lIiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiQmx1ZSBMaWdodCBCbG9ja2luZyBHbGFzc2VzIiwiaHlwb3RoZXNpcyI6IkRvIGJsdWUgbGlnaHQgYmxvY2tpbmcgZ2xhc3NlcyBhZnRlciBzdW5zZXQgaW1wcm92ZSBzbGVlcD8iLCJpbnRlcnZlbnRpb25EZXNjcmlwdGlvbiI6IldlYXIgYW1iZXItbGVucyBibHVlLWJsb2NraW5nIGdsYXNzZXMgZnJvbSBzdW5zZXQgdW50aWwgYmVkIiwiY29udHJvbERlc2NyaXB0aW9uIjoiTm8gZ2xhc3Nlcywgbm9ybWFsIHNjcmVlbiB1c2UiLCJwcmltYXJ5TWV0cmljIjp7ImlkZW50aWZpZXIiOiJzbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSwic2Vjb25kYXJ5TWV0cmljcyI6W3siaWRlbnRpZmllciI6ImRlZXBTbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSx7ImlkZW50aWZpZXIiOiJzbGVlcEVmZmljaWVuY3kiLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiQmVkdGltZSIsIndpbmRvd0VuZCI6IlJpc2luZyB0aW1lIiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiV2FybSBTaG93ZXIgQmVmb3JlIEJlZCIsImh5cG90aGVzaXMiOiJEb2VzIGEgd2FybSBzaG93ZXIgOTAgbWluIGJlZm9yZSBiZWQgaW1wcm92ZSBzbGVlcCBvbnNldD8iLCJpbnRlcnZlbnRpb25EZXNjcmlwdGlvbiI6Ildhcm0gc2hvd2VyICgxMDRcdTIwMTMxMDhcdTAwYjBGKSA5MCBtaW4gYmVmb3JlIGJlZCIsImNvbnRyb2xEZXNjcmlwdGlvbiI6Ik5vIHByZS1iZWQgc2hvd2VyIiwicHJpbWFyeU1ldHJpYyI6eyJpZGVudGlmaWVyIjoic2xlZXBEdXJhdGlvbiIsImFnZ3JlZ2F0aW9uIjoiU3VtIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJkZWVwU2xlZXBEdXJhdGlvbiIsImFnZ3JlZ2F0aW9uIjoiU3VtIn0seyJpZGVudGlmaWVyIjoic2xlZXBFZmZpY2llbmN5IiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn1dLCJwcm9wZW5zaXR5IjowLjUsImFscGhhIjowLjA1LCJldGEiOjAuNzcsInBlcmlvZERheXMiOjEsIndhc2hvdXREYXlzIjowLCJ3aW5kb3dTdGFydCI6IkJlZHRpbWUiLCJ3aW5kb3dFbmQiOiJSaXNpbmcgdGltZSIsIndpbmRvd1N0YXJ0SG91ciI6bnVsbCwid2luZG93U3RhcnRNaW51dGUiOm51bGwsIndpbmRvd0VuZEhvdXIiOm51bGwsIndpbmRvd0VuZE1pbnV0ZSI6bnVsbCwicHVibGljRXhwZXJpbWVudElEIjpudWxsfQ",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiTGF0ZSBFYXRpbmcgQ3V0b2ZmIiwiaHlwb3RoZXNpcyI6IkRvZXMgc3RvcHBpbmcgZm9vZCAzKyBob3VycyBiZWZvcmUgYmVkIGltcHJvdmUgb3Zlcm5pZ2h0IHJlY292ZXJ5PyIsImludGVydmVudGlvbkRlc2NyaXB0aW9uIjoiTm8gZm9vZCBhZnRlciA3IFBNIiwiY29udHJvbERlc2NyaXB0aW9uIjoiRWF0IG5vcm1hbGx5IHVudGlsIGJlZHRpbWUiLCJwcmltYXJ5TWV0cmljIjp7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJSZXN0aW5nSGVhcnRSYXRlIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJIZWFydFJhdGVWYXJpYWJpbGl0eVNETk4iLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifSx7ImlkZW50aWZpZXIiOiJkZWVwU2xlZXBEdXJhdGlvbiIsImFnZ3JlZ2F0aW9uIjoiU3VtIn1dLCJwcm9wZW5zaXR5IjowLjUsImFscGhhIjowLjA1LCJldGEiOjAuNzcsInBlcmlvZERheXMiOjEsIndhc2hvdXREYXlzIjowLCJ3aW5kb3dTdGFydCI6IkJlZHRpbWUiLCJ3aW5kb3dFbmQiOiJSaXNpbmcgdGltZSIsIndpbmRvd1N0YXJ0SG91ciI6bnVsbCwid2luZG93U3RhcnRNaW51dGUiOm51bGwsIndpbmRvd0VuZEhvdXIiOm51bGwsIndpbmRvd0VuZE1pbnV0ZSI6bnVsbCwicHVibGljRXhwZXJpbWVudElEIjpudWxsfQ",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiVGFydCBDaGVycnkgSnVpY2UgJiBTbGVlcCIsImh5cG90aGVzaXMiOiJEb2VzIHRhcnQgY2hlcnJ5IGp1aWNlIGJlZm9yZSBiZWQgZXh0ZW5kIHNsZWVwIGR1cmF0aW9uPyIsImludGVydmVudGlvbkRlc2NyaXB0aW9uIjoiOCBveiBNb250bW9yZW5jeSB0YXJ0IGNoZXJyeSBqdWljZSAxIGhyIGJlZm9yZSBiZWQiLCJjb250cm9sRGVzY3JpcHRpb24iOiJObyBjaGVycnkganVpY2UiLCJwcmltYXJ5TWV0cmljIjp7ImlkZW50aWZpZXIiOiJzbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSwic2Vjb25kYXJ5TWV0cmljcyI6W3siaWRlbnRpZmllciI6ImRlZXBTbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSx7ImlkZW50aWZpZXIiOiJzbGVlcEVmZmljaWVuY3kiLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiQmVkdGltZSIsIndpbmRvd0VuZCI6IlJpc2luZyB0aW1lIiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiQWxjb2hvbCAmIFNsZWVwIFF1YWxpdHkiLCJoeXBvdGhlc2lzIjoiRG9lcyBhIHNpbmdsZSBldmVuaW5nIGRyaW5rIGltcGFpciBzbGVlcD8iLCJpbnRlcnZlbnRpb25EZXNjcmlwdGlvbiI6Ik9uZSBzdGFuZGFyZCBhbGNvaG9saWMgZHJpbmsgd2l0aCBkaW5uZXIiLCJjb250cm9sRGVzY3JpcHRpb24iOiJBYnN0YWluIGZyb20gYWxjb2hvbCIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6InJlbVNsZWVwRHVyYXRpb24iLCJhZ2dyZWdhdGlvbiI6IlN1bSJ9LCJzZWNvbmRhcnlNZXRyaWNzIjpbeyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVySGVhcnRSYXRlVmFyaWFiaWxpdHlTRE5OIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0seyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVyUmVzdGluZ0hlYXJ0UmF0ZSIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9LHsiaWRlbnRpZmllciI6ImRlZXBTbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiQmVkdGltZSIsIndpbmRvd0VuZCI6IlJpc2luZyB0aW1lIiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiTWVsYXRvbmluIE1pY3JvZG9zZSIsImh5cG90aGVzaXMiOiJEb2VzIDAuMyBtZyBtZWxhdG9uaW4gaW1wcm92ZSBzbGVlcCBvbnNldCB3aXRob3V0IGdyb2dnaW5lc3M_IiwiaW50ZXJ2ZW50aW9uRGVzY3JpcHRpb24iOiIwLjMgbWcgbWVsYXRvbmluIDMwIG1pbiBiZWZvcmUgYmVkIiwiY29udHJvbERlc2NyaXB0aW9uIjoiTm8gbWVsYXRvbmluIiwicHJpbWFyeU1ldHJpYyI6eyJpZGVudGlmaWVyIjoic2xlZXBEdXJhdGlvbiIsImFnZ3JlZ2F0aW9uIjoiU3VtIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJkZWVwU2xlZXBEdXJhdGlvbiIsImFnZ3JlZ2F0aW9uIjoiU3VtIn0seyJpZGVudGlmaWVyIjoic2xlZXBFZmZpY2llbmN5IiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn1dLCJwcm9wZW5zaXR5IjowLjUsImFscGhhIjowLjA1LCJldGEiOjAuNzcsInBlcmlvZERheXMiOjEsIndhc2hvdXREYXlzIjowLCJ3aW5kb3dTdGFydCI6IkJlZHRpbWUiLCJ3aW5kb3dFbmQiOiJSaXNpbmcgdGltZSIsIndpbmRvd1N0YXJ0SG91ciI6bnVsbCwid2luZG93U3RhcnRNaW51dGUiOm51bGwsIndpbmRvd0VuZEhvdXIiOm51bGwsIndpbmRvd0VuZE1pbnV0ZSI6bnVsbCwicHVibGljRXhwZXJpbWVudElEIjpudWxsfQ",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiQ2FyYm9uLVBsYXRlZCBTaG9lcyB2cyBUcmFpbmVycyIsImh5cG90aGVzaXMiOiJEbyBjYXJib24tcGxhdGVkIHJhY2luZyBzaG9lcyBhY3R1YWxseSBtYWtlIHlvdSBmYXN0ZXI_IiwiaW50ZXJ2ZW50aW9uRGVzY3JpcHRpb24iOiJDYXJib24tcGxhdGVkIHJhY2VyIChlLmcuIE5pa2UgVmFwb3JmbHksIEFkaWRhcyBBZGlvcyBQcm8pIiwiY29udHJvbERlc2NyaXB0aW9uIjoiRGFpbHkgdHJhaW5lciAoZS5nLiBBU0lDUyBHZWwgTmltYnVzLCBCcm9va3MgR2hvc3QpIiwicHJpbWFyeU1ldHJpYyI6eyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVyUnVubmluZ1NwZWVkIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJSdW5uaW5nR3JvdW5kQ29udGFjdFRpbWUiLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifSx7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJSdW5uaW5nU3RyaWRlTGVuZ3RoIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn1dLCJwcm9wZW5zaXR5IjowLjUsImFscGhhIjowLjA1LCJldGEiOjAuNzcsInBlcmlvZERheXMiOjEsIndhc2hvdXREYXlzIjowLCJ3aW5kb3dTdGFydCI6IldvcmtvdXQgc3RhcnQiLCJ3aW5kb3dFbmQiOiJXb3Jrb3V0IGVuZCIsIndpbmRvd1N0YXJ0SG91ciI6bnVsbCwid2luZG93U3RhcnRNaW51dGUiOm51bGwsIndpbmRvd0VuZEhvdXIiOm51bGwsIndpbmRvd0VuZE1pbnV0ZSI6bnVsbCwicHVibGljRXhwZXJpbWVudElEIjpudWxsfQ",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiUHJlLVJ1biBDYWZmZWluZSAmIFBhY2UiLCJoeXBvdGhlc2lzIjoiRG9lcyBjYWZmZWluZSBiZWZvcmUgYSBydW4gaW1wcm92ZSB5b3VyIHBhY2U_IiwiaW50ZXJ2ZW50aW9uRGVzY3JpcHRpb24iOiIyMDAgbWcgY2FmZmVpbmUgY2Fwc3VsZSA0NSBtaW4gYmVmb3JlIHJ1bm5pbmciLCJjb250cm9sRGVzY3JpcHRpb24iOiJQbGFjZWJvIGNhcHN1bGUgKG5vIGNhZmZlaW5lKSBiZWZvcmUgcnVubmluZyIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllclJ1bm5pbmdTcGVlZCIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9LCJzZWNvbmRhcnlNZXRyaWNzIjpbeyJpZGVudGlmaWVyIjoid29ya291dER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSx7ImlkZW50aWZpZXIiOiJ3b3Jrb3V0Q2Fsb3JpZXNCdXJuZWQiLCJhZ2dyZWdhdGlvbiI6IlN1bSJ9XSwicHJvcGVuc2l0eSI6MC41LCJhbHBoYSI6MC4wNSwiZXRhIjowLjc3LCJwZXJpb2REYXlzIjoxLCJ3YXNob3V0RGF5cyI6MCwid2luZG93U3RhcnQiOiJXb3Jrb3V0IHN0YXJ0Iiwid2luZG93RW5kIjoiV29ya291dCBlbmQiLCJ3aW5kb3dTdGFydEhvdXIiOm51bGwsIndpbmRvd1N0YXJ0TWludXRlIjpudWxsLCJ3aW5kb3dFbmRIb3VyIjpudWxsLCJ3aW5kb3dFbmRNaW51dGUiOm51bGwsInB1YmxpY0V4cGVyaW1lbnRJRCI6bnVsbH0",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiQmVldHJvb3QgSnVpY2UgJiBSdW5uaW5nIFBhY2UiLCJoeXBvdGhlc2lzIjoiRG9lcyBiZWV0cm9vdCBqdWljZSBiZWZvcmUgYSBydW4gbWFrZSB5b3UgZmFzdGVyPyIsImludGVydmVudGlvbkRlc2NyaXB0aW9uIjoiQ29uY2VudHJhdGVkIGJlZXRyb290IHNob3QgKH40MDAgbWcgbml0cmF0ZSkgMlx1MjAxMzMgaHIgYmVmb3JlIHJ1bm5pbmciLCJjb250cm9sRGVzY3JpcHRpb24iOiJObyBiZWV0cm9vdCBqdWljZSIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllclJ1bm5pbmdTcGVlZCIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9LCJzZWNvbmRhcnlNZXRyaWNzIjpbeyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVySGVhcnRSYXRlIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0seyJpZGVudGlmaWVyIjoid29ya291dER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiV29ya291dCBzdGFydCIsIndpbmRvd0VuZCI6IldvcmtvdXQgZW5kIiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiTXVzaWMgdnMgU2lsZW5jZSBSdW5uaW5nIiwiaHlwb3RoZXNpcyI6IkRvZXMgbGlzdGVuaW5nIHRvIG11c2ljIGltcHJvdmUgcnVubmluZyBwZXJmb3JtYW5jZT8iLCJpbnRlcnZlbnRpb25EZXNjcmlwdGlvbiI6IlVwYmVhdCBwbGF5bGlzdCAoMTIwXHUyMDEzMTQwIEJQTSkgZHVyaW5nIHJ1biIsImNvbnRyb2xEZXNjcmlwdGlvbiI6Ik5vIGhlYWRwaG9uZXMsIHJ1biBpbiBzaWxlbmNlIiwicHJpbWFyeU1ldHJpYyI6eyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVyUnVubmluZ1NwZWVkIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJEaXN0YW5jZVdhbGtpbmdSdW5uaW5nIiwiYWdncmVnYXRpb24iOiJTdW0ifSx7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJIZWFydFJhdGUiLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiV29ya291dCBzdGFydCIsIndpbmRvd0VuZCI6IldvcmtvdXQgZW5kIiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiTmFzYWwgdnMgTW91dGggQnJlYXRoaW5nIiwiaHlwb3RoZXNpcyI6IkRvZXMgbm9zZS1vbmx5IGJyZWF0aGluZyBkdXJpbmcgZWFzeSBydW5zIGNoYW5nZSBoZWFydCByYXRlIG9yIHBhY2U_IiwiaW50ZXJ2ZW50aW9uRGVzY3JpcHRpb24iOiJOYXNhbC1vbmx5IGJyZWF0aGluZyBkdXJpbmcgZWFzeSBydW5zIiwiY29udHJvbERlc2NyaXB0aW9uIjoiTm9ybWFsIG1vdXRoIGJyZWF0aGluZyIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllckhlYXJ0UmF0ZSIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9LCJzZWNvbmRhcnlNZXRyaWNzIjpbeyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVyUnVubmluZ1NwZWVkIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0seyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVyUmVzcGlyYXRvcnlSYXRlIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn1dLCJwcm9wZW5zaXR5IjowLjUsImFscGhhIjowLjA1LCJldGEiOjAuNzcsInBlcmlvZERheXMiOjEsIndhc2hvdXREYXlzIjowLCJ3aW5kb3dTdGFydCI6IldvcmtvdXQgc3RhcnQiLCJ3aW5kb3dFbmQiOiJXb3Jrb3V0IGVuZCIsIndpbmRvd1N0YXJ0SG91ciI6bnVsbCwid2luZG93U3RhcnRNaW51dGUiOm51bGwsIndpbmRvd0VuZEhvdXIiOm51bGwsIndpbmRvd0VuZE1pbnV0ZSI6bnVsbCwicHVibGljRXhwZXJpbWVudElEIjpudWxsfQ",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiRmFzdGVkIHZzIEZlZCBSdW5uaW5nIiwiaHlwb3RoZXNpcyI6IkRvZXMgcnVubmluZyBvbiBhbiBlbXB0eSBzdG9tYWNoIGNoYW5nZSBoZWFydCByYXRlIG9yIGVuZXJneSBidXJuPyIsImludGVydmVudGlvbkRlc2NyaXB0aW9uIjoiTW9ybmluZyBydW4gYWZ0ZXIgMTIrIGhyIG92ZXJuaWdodCBmYXN0IiwiY29udHJvbERlc2NyaXB0aW9uIjoiU2FtZSBydW4gNjAgbWluIGFmdGVyIGEgNDAwIGtjYWwgbWVhbCIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllckhlYXJ0UmF0ZSIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9LCJzZWNvbmRhcnlNZXRyaWNzIjpbeyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVyQWN0aXZlRW5lcmd5QnVybmVkIiwiYWdncmVnYXRpb24iOiJTdW0ifSx7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJSdW5uaW5nU3BlZWQiLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiV29ya291dCBzdGFydCIsIndpbmRvd0VuZCI6IldvcmtvdXQgZW5kIiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiRWxlY3Ryb2x5dGVzIHZzIFdhdGVyIiwiaHlwb3RoZXNpcyI6IkRvZXMgYW4gZWxlY3Ryb2x5dGUgbWl4IGJlZm9yZSBydW5uaW5nIGxvd2VyIGV4ZXJjaXNlIGhlYXJ0IHJhdGU_IiwiaW50ZXJ2ZW50aW9uRGVzY3JpcHRpb24iOiIxIHBhY2tldCBMTU5UICgxMDAwIG1nIHNvZGl1bSkgaW4gMTYgb3ogd2F0ZXIgcHJlLXJ1biIsImNvbnRyb2xEZXNjcmlwdGlvbiI6IjE2IG96IHBsYWluIHdhdGVyIHByZS1ydW4iLCJwcmltYXJ5TWV0cmljIjp7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJIZWFydFJhdGUiLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifSwic2Vjb25kYXJ5TWV0cmljcyI6W3siaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllclJ1bm5pbmdTcGVlZCIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9LHsiaWRlbnRpZmllciI6IndvcmtvdXREdXJhdGlvbiIsImFnZ3JlZ2F0aW9uIjoiU3VtIn1dLCJwcm9wZW5zaXR5IjowLjUsImFscGhhIjowLjA1LCJldGEiOjAuNzcsInBlcmlvZERheXMiOjEsIndhc2hvdXREYXlzIjowLCJ3aW5kb3dTdGFydCI6IldvcmtvdXQgc3RhcnQiLCJ3aW5kb3dFbmQiOiJXb3Jrb3V0IGVuZCIsIndpbmRvd1N0YXJ0SG91ciI6bnVsbCwid2luZG93U3RhcnRNaW51dGUiOm51bGwsIndpbmRvd0VuZEhvdXIiOm51bGwsIndpbmRvd0VuZE1pbnV0ZSI6bnVsbCwicHVibGljRXhwZXJpbWVudElEIjpudWxsfQ",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiU29kaXVtIFByZS1Mb2FkaW5nIiwiaHlwb3RoZXNpcyI6IkRvZXMgc29kaXVtIGJlZm9yZSBleGVyY2lzZSBsb3dlciBoZWFydCByYXRlIGluIGhlYXQ_IiwiaW50ZXJ2ZW50aW9uRGVzY3JpcHRpb24iOiIxNTAwIG1nIHNvZGl1bSBpbiA3NTAgbWwgd2F0ZXIgNjBcdTIwMTM5MCBtaW4gYmVmb3JlIGV4ZXJjaXNlIiwiY29udHJvbERlc2NyaXB0aW9uIjoiNzUwIG1sIHBsYWluIHdhdGVyIDYwXHUyMDEzOTAgbWluIGJlZm9yZSBleGVyY2lzZSIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllckhlYXJ0UmF0ZSIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9LCJzZWNvbmRhcnlNZXRyaWNzIjpbeyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVyUnVubmluZ1NwZWVkIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0seyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVyQWN0aXZlRW5lcmd5QnVybmVkIiwiYWdncmVnYXRpb24iOiJTdW0ifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiV29ya291dCBzdGFydCIsIndpbmRvd0VuZCI6IldvcmtvdXQgZW5kIiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiQ29sZCBQbHVuZ2UgJiBSZWNvdmVyeSIsImh5cG90aGVzaXMiOiJEb2VzIG1vcm5pbmcgY29sZCB3YXRlciBpbW1lcnNpb24gaW1wcm92ZSBIUlYgYW5kIGxvd2VyIHJlc3RpbmcgaGVhcnQgcmF0ZT8iLCJpbnRlcnZlbnRpb25EZXNjcmlwdGlvbiI6IjItbWluIGNvbGQgcGx1bmdlICg1MFx1MjAxMzU5XHUwMGIwRiAvIDEwXHUyMDEzMTVcdTAwYjBDKSB3aXRoaW4gMSBociBvZiB3YWtpbmciLCJjb250cm9sRGVzY3JpcHRpb24iOiJOb3JtYWwgbW9ybmluZyByb3V0aW5lLCBubyBjb2xkIGV4cG9zdXJlIiwicHJpbWFyeU1ldHJpYyI6eyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVySGVhcnRSYXRlVmFyaWFiaWxpdHlTRE5OIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJSZXN0aW5nSGVhcnRSYXRlIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0seyJpZGVudGlmaWVyIjoiZGVlcFNsZWVwRHVyYXRpb24iLCJhZ2dyZWdhdGlvbiI6IlN1bSJ9XSwicHJvcGVuc2l0eSI6MC41LCJhbHBoYSI6MC4wNSwiZXRhIjowLjc3LCJwZXJpb2REYXlzIjoxLCJ3YXNob3V0RGF5cyI6MCwid2luZG93U3RhcnQiOiJNaWRuaWdodCIsIndpbmRvd0VuZCI6Ik1pZG5pZ2h0Iiwid2luZG93U3RhcnRIb3VyIjpudWxsLCJ3aW5kb3dTdGFydE1pbnV0ZSI6bnVsbCwid2luZG93RW5kSG91ciI6bnVsbCwid2luZG93RW5kTWludXRlIjpudWxsLCJwdWJsaWNFeHBlcmltZW50SUQiOm51bGx9",
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
    "category": "Recovery",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiTW9ybmluZyBTdW5saWdodCAmIFNsZWVwIiwiaHlwb3RoZXNpcyI6IkRvZXMgbW9ybmluZyBzdW5saWdodCBleHBvc3VyZSBpbXByb3ZlIHRoYXQgbmlnaHQncyBzbGVlcD8iLCJpbnRlcnZlbnRpb25EZXNjcmlwdGlvbiI6IjEwXHUyMDEzMTUgbWluIG91dGRvb3Igc3VubGlnaHQgd2l0aGluIDEgaHIgb2Ygd2FraW5nIChubyBzdW5nbGFzc2VzKSIsImNvbnRyb2xEZXNjcmlwdGlvbiI6IlN0YXkgaW5kb29ycywgbm9ybWFsIG1vcm5pbmcgcm91dGluZSIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6InNsZWVwRHVyYXRpb24iLCJhZ2dyZWdhdGlvbiI6IlN1bSJ9LCJzZWNvbmRhcnlNZXRyaWNzIjpbeyJpZGVudGlmaWVyIjoiZGVlcFNsZWVwRHVyYXRpb24iLCJhZ2dyZWdhdGlvbiI6IlN1bSJ9LHsiaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllckhlYXJ0UmF0ZVZhcmlhYmlsaXR5U0ROTiIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9XSwicHJvcGVuc2l0eSI6MC41LCJhbHBoYSI6MC4wNSwiZXRhIjowLjc3LCJwZXJpb2REYXlzIjoxLCJ3YXNob3V0RGF5cyI6MCwid2luZG93U3RhcnQiOiJCZWR0aW1lIiwid2luZG93RW5kIjoiUmlzaW5nIHRpbWUiLCJ3aW5kb3dTdGFydEhvdXIiOm51bGwsIndpbmRvd1N0YXJ0TWludXRlIjpudWxsLCJ3aW5kb3dFbmRIb3VyIjpudWxsLCJ3aW5kb3dFbmRNaW51dGUiOm51bGwsInB1YmxpY0V4cGVyaW1lbnRJRCI6bnVsbH0",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiTWVkaXRhdGlvbiAmIEhSViIsImh5cG90aGVzaXMiOiJEb2VzIDEwIG1pbiBvZiBtb3JuaW5nIG1lZGl0YXRpb24gaW1wcm92ZSBoZWFydCByYXRlIHZhcmlhYmlsaXR5PyIsImludGVydmVudGlvbkRlc2NyaXB0aW9uIjoiMTAgbWluIGd1aWRlZCBtZWRpdGF0aW9uIG9yIGJveCBicmVhdGhpbmcgaW4gdGhlIG1vcm5pbmciLCJjb250cm9sRGVzY3JpcHRpb24iOiJObyBtZWRpdGF0aW9uLCBub3JtYWwgbW9ybmluZyByb3V0aW5lIiwicHJpbWFyeU1ldHJpYyI6eyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVySGVhcnRSYXRlVmFyaWFiaWxpdHlTRE5OIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJSZXN0aW5nSGVhcnRSYXRlIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn1dLCJwcm9wZW5zaXR5IjowLjUsImFscGhhIjowLjA1LCJldGEiOjAuNzcsInBlcmlvZERheXMiOjEsIndhc2hvdXREYXlzIjowLCJ3aW5kb3dTdGFydCI6Ik1pZG5pZ2h0Iiwid2luZG93RW5kIjoiTWlkbmlnaHQiLCJ3aW5kb3dTdGFydEhvdXIiOm51bGwsIndpbmRvd1N0YXJ0TWludXRlIjpudWxsLCJ3aW5kb3dFbmRIb3VyIjpudWxsLCJ3aW5kb3dFbmRNaW51dGUiOm51bGwsInB1YmxpY0V4cGVyaW1lbnRJRCI6bnVsbH0",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiUG9zdC1NZWFsIFdhbGtpbmciLCJoeXBvdGhlc2lzIjoiRG9lcyBhIDEwLW1pbiB3YWxrIGFmdGVyIG1lYWxzIGltcHJvdmUgZGFpbHkgYWN0aXZpdHkgYW5kIGhlYXJ0IHJhdGU_IiwiaW50ZXJ2ZW50aW9uRGVzY3JpcHRpb24iOiIxMFx1MjAxMzE1IG1pbiB3YWxrIHdpdGhpbiAzMCBtaW4gb2YgZWF0aW5nIChhZnRlciBlYWNoIG1haW4gbWVhbCkiLCJjb250cm9sRGVzY3JpcHRpb24iOiJTaXQgb3IgcmVzdCBhZnRlciBtZWFscyIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllclN0ZXBDb3VudCIsImFnZ3JlZ2F0aW9uIjoiU3VtIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJXYWxraW5nSGVhcnRSYXRlQXZlcmFnZSIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9LHsiaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllckFjdGl2ZUVuZXJneUJ1cm5lZCIsImFnZ3JlZ2F0aW9uIjoiU3VtIn1dLCJwcm9wZW5zaXR5IjowLjUsImFscGhhIjowLjA1LCJldGEiOjAuNzcsInBlcmlvZERheXMiOjEsIndhc2hvdXREYXlzIjowLCJ3aW5kb3dTdGFydCI6Ik1pZG5pZ2h0Iiwid2luZG93RW5kIjoiTWlkbmlnaHQiLCJ3aW5kb3dTdGFydEhvdXIiOm51bGwsIndpbmRvd1N0YXJ0TWludXRlIjpudWxsLCJ3aW5kb3dFbmRIb3VyIjpudWxsLCJ3aW5kb3dFbmRNaW51dGUiOm51bGwsInB1YmxpY0V4cGVyaW1lbnRJRCI6bnVsbH0",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiQ29udHJhc3QgVGhlcmFweSAmIFJlY292ZXJ5IiwiaHlwb3RoZXNpcyI6IkRvZXMgYWx0ZXJuYXRpbmcgaG90IGFuZCBjb2xkIGFmdGVyIGV4ZXJjaXNlIGltcHJvdmUgb3Zlcm5pZ2h0IHJlY292ZXJ5PyIsImludGVydmVudGlvbkRlc2NyaXB0aW9uIjoiQWx0ZXJuYXRlIDEgbWluIGNvbGQgLyAxIG1pbiBob3QgZm9yIDEyXHUyMDEzMTUgbWluIHRvdGFsIHBvc3Qtd29ya291dCIsImNvbnRyb2xEZXNjcmlwdGlvbiI6Ik5vIGNvbnRyYXN0IHRoZXJhcHkgcG9zdC13b3Jrb3V0IiwicHJpbWFyeU1ldHJpYyI6eyJpZGVudGlmaWVyIjoiSEtRdWFudGl0eVR5cGVJZGVudGlmaWVySGVhcnRSYXRlVmFyaWFiaWxpdHlTRE5OIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJSZXN0aW5nSGVhcnRSYXRlIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn1dLCJwcm9wZW5zaXR5IjowLjUsImFscGhhIjowLjA1LCJldGEiOjAuNzcsInBlcmlvZERheXMiOjEsIndhc2hvdXREYXlzIjowLCJ3aW5kb3dTdGFydCI6Ik1pZG5pZ2h0Iiwid2luZG93RW5kIjoiTWlkbmlnaHQiLCJ3aW5kb3dTdGFydEhvdXIiOm51bGwsIndpbmRvd1N0YXJ0TWludXRlIjpudWxsLCJ3aW5kb3dFbmRIb3VyIjpudWxsLCJ3aW5kb3dFbmRNaW51dGUiOm51bGwsInB1YmxpY0V4cGVyaW1lbnRJRCI6bnVsbH0",
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
    "category": "Supplements",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiTC1UaGVhbmluZSAmIENvZmZlZSIsImh5cG90aGVzaXMiOiJEb2VzIGFkZGluZyBMLXRoZWFuaW5lIHRvIGNvZmZlZSBpbXByb3ZlIGZvY3VzIHdpdGhvdXQgaml0dGVycz8iLCJpbnRlcnZlbnRpb25EZXNjcmlwdGlvbiI6IjIwMCBtZyBMLXRoZWFuaW5lIHdpdGggbW9ybmluZyBjb2ZmZWUiLCJjb250cm9sRGVzY3JpcHRpb24iOiJNb3JuaW5nIGNvZmZlZSBhbG9uZSAobm8gTC10aGVhbmluZSkiLCJwcmltYXJ5TWV0cmljIjp7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJSZXN0aW5nSGVhcnRSYXRlIiwiYWdncmVnYXRpb24iOiJBdmVyYWdlIn0sInNlY29uZGFyeU1ldHJpY3MiOlt7ImlkZW50aWZpZXIiOiJIS1F1YW50aXR5VHlwZUlkZW50aWZpZXJIZWFydFJhdGVWYXJpYWJpbGl0eVNETk4iLCJhZ2dyZWdhdGlvbiI6IkF2ZXJhZ2UifV0sInByb3BlbnNpdHkiOjAuNSwiYWxwaGEiOjAuMDUsImV0YSI6MC43NywicGVyaW9kRGF5cyI6MSwid2FzaG91dERheXMiOjAsIndpbmRvd1N0YXJ0IjoiTWlkbmlnaHQiLCJ3aW5kb3dFbmQiOiJNaWRuaWdodCIsIndpbmRvd1N0YXJ0SG91ciI6bnVsbCwid2luZG93U3RhcnRNaW51dGUiOm51bGwsIndpbmRvd0VuZEhvdXIiOm51bGwsIndpbmRvd0VuZE1pbnV0ZSI6bnVsbCwicHVibGljRXhwZXJpbWVudElEIjpudWxsfQ",
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
    "category": "Supplements",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiQXBpZ2VuaW4gJiBTbGVlcCIsImh5cG90aGVzaXMiOiJEb2VzIGFwaWdlbmluIGJlZm9yZSBiZWQgaW1wcm92ZSBzbGVlcCBvbnNldD8iLCJpbnRlcnZlbnRpb25EZXNjcmlwdGlvbiI6IjUwIG1nIGFwaWdlbmluIDMwXHUyMDEzNjAgbWluIGJlZm9yZSBiZWQiLCJjb250cm9sRGVzY3JpcHRpb24iOiJObyBhcGlnZW5pbiIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6InNsZWVwRHVyYXRpb24iLCJhZ2dyZWdhdGlvbiI6IlN1bSJ9LCJzZWNvbmRhcnlNZXRyaWNzIjpbeyJpZGVudGlmaWVyIjoiZGVlcFNsZWVwRHVyYXRpb24iLCJhZ2dyZWdhdGlvbiI6IlN1bSJ9LHsiaWRlbnRpZmllciI6InNsZWVwRWZmaWNpZW5jeSIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9XSwicHJvcGVuc2l0eSI6MC41LCJhbHBoYSI6MC4wNSwiZXRhIjowLjc3LCJwZXJpb2REYXlzIjoxLCJ3YXNob3V0RGF5cyI6MCwid2luZG93U3RhcnQiOiJCZWR0aW1lIiwid2luZG93RW5kIjoiUmlzaW5nIHRpbWUiLCJ3aW5kb3dTdGFydEhvdXIiOm51bGwsIndpbmRvd1N0YXJ0TWludXRlIjpudWxsLCJ3aW5kb3dFbmRIb3VyIjpudWxsLCJ3aW5kb3dFbmRNaW51dGUiOm51bGwsInB1YmxpY0V4cGVyaW1lbnRJRCI6bnVsbH0",
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
    "category": "Supplements",
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
    "url": "abme://template/eyJ2ZXJzaW9uIjoxLCJuYW1lIjoiSHViZXJtYW4gU2xlZXAgU3RhY2siLCJoeXBvdGhlc2lzIjoiRG9lcyB0aGUgZnVsbCBIdWJlcm1hbiBzbGVlcCBjb2NrdGFpbCBpbXByb3ZlIGRlZXAgc2xlZXA_IiwiaW50ZXJ2ZW50aW9uRGVzY3JpcHRpb24iOiJNZyB0aHJlb25hdGUgKDE0NSBtZykgKyBMLXRoZWFuaW5lICgyMDAgbWcpICsgYXBpZ2VuaW4gKDUwIG1nKSBiZWZvcmUgYmVkIiwiY29udHJvbERlc2NyaXB0aW9uIjoiTm8gc3VwcGxlbWVudHMgYmVmb3JlIGJlZCIsInByaW1hcnlNZXRyaWMiOnsiaWRlbnRpZmllciI6ImRlZXBTbGVlcER1cmF0aW9uIiwiYWdncmVnYXRpb24iOiJTdW0ifSwic2Vjb25kYXJ5TWV0cmljcyI6W3siaWRlbnRpZmllciI6IkhLUXVhbnRpdHlUeXBlSWRlbnRpZmllckhlYXJ0UmF0ZVZhcmlhYmlsaXR5U0ROTiIsImFnZ3JlZ2F0aW9uIjoiQXZlcmFnZSJ9LHsiaWRlbnRpZmllciI6InNsZWVwRHVyYXRpb24iLCJhZ2dyZWdhdGlvbiI6IlN1bSJ9XSwicHJvcGVuc2l0eSI6MC41LCJhbHBoYSI6MC4wNSwiZXRhIjowLjc3LCJwZXJpb2REYXlzIjoxLCJ3YXNob3V0RGF5cyI6MCwid2luZG93U3RhcnQiOiJCZWR0aW1lIiwid2luZG93RW5kIjoiUmlzaW5nIHRpbWUiLCJ3aW5kb3dTdGFydEhvdXIiOm51bGwsIndpbmRvd1N0YXJ0TWludXRlIjpudWxsLCJ3aW5kb3dFbmRIb3VyIjpudWxsLCJ3aW5kb3dFbmRNaW51dGUiOm51bGwsInB1YmxpY0V4cGVyaW1lbnRJRCI6bnVsbH0",
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
