import { routesById } from '../routes.ts'
import type { PublishedBlogArticle } from '../types.ts'

const route = routesById['article-how-often-to-mow-lawn-iowa']

export const howOftenToMowLawnIowa = {
  "routeId": "article-how-often-to-mow-lawn-iowa",
  "slug": "how-often-to-mow-lawn-iowa",
  path: route.path,
  "status": "published",
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  "secondaryKeywords": [
    "how often should I mow my lawn in Iowa",
    "mowing frequency Iowa",
    "how often to cut grass in Iowa"
  ],
  "excerpt": "Let growth and cutting height guide the next mow. A calendar reminder can prompt a height check; rain, summer slowdown and dormancy can change whether cutting is needed or appropriate.",
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "text": "Mow an Iowa lawn according to how much it has grown and the height you intend to leave after cutting. Iowa State University Extension bases mowing frequency on those two factors and advises removing no more than one-third of the leaf surface in a cut. A weekly reminder can be useful for checking the lawn, but it cannot tell you how much grass is ready to come off.",
          "sourceId": "isu-mowing-frequency"
        }
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "id": "cut-height-and-standing-height",
      "text": "Two heights tell you more than a date"
    },
    {
      "type": "paragraph",
      "content": [
        {
          "text": "First choose a cutting height suited to the grass and conditions. Iowa State’s Kentucky bluegrass guidance uses a higher cut in summer than in spring and fall. That is species-specific guidance: do not treat the example below as a setting for every Iowa lawn, a newly seeded area or a dormant lawn.",
          "sourceId": "isu-summer-height"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "text": "Suppose 3 inches is an appropriate finished height for your lawn. Iowa State’s example calls for mowing when the standing grass reaches 4½ inches: removing 1½ inches leaves 3 inches, and takes off one-third of the starting height. The 3 inches describes what remains after mowing; 4½ inches describes the grass before that cut.",
          "sourceId": "isu-mowing-frequency"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "text": "Use a ruler to compare the standing grass with your chosen height. Recheck as it grows toward the point where the next cut would remove a third. The time between those observations tells you more about the next mowing than repeating last week’s interval.",
          "sourceId": "isu-mowing-frequency"
        }
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "id": "changing-growth-changing-gap",
      "text": "The same lawn can need a different gap"
    },
    {
      "type": "paragraph",
      "content": [
        {
          "text": "Kentucky bluegrass and other cool-season grasses favor the cooler conditions of spring and fall; summer heat and dryness can put them under stress. Watch the actual growth: if the grass reaches the point for another cut sooner, check and mow sooner when conditions permit. If growth slows, the previous interval may be unnecessarily short.",
          "sourceId": "isu-summer-height"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "text": "Summer dormancy means very little growth and less mowing demand.",
          "sourceId": "isu-summer-dormancy"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "text": "Iowa State’s drought guidance says not to mow dormant lawns. Wait rather than carrying an active-growth routine into dormancy. This guide does not diagnose why a lawn has turned brown.",
          "sourceId": "isu-drought-care"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "text": "In fall, continue mowing as growth calls for it until the grass stops growing. Use that change in the lawn to decide when to stop, rather than choosing a universal last-mow date.",
          "sourceId": "isu-fall-growth"
        }
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "id": "growth-and-mowing-opportunity",
      "text": "Ready to cut does not mean ready conditions"
    },
    {
      "type": "paragraph",
      "content": [
        {
          "text": "Rain or dew can delay a needed cut. Iowa State recommends mowing after the grass dries, during cooler morning or evening conditions; midday mowing may add stress. Let the grass dry before acting on the height check.",
          "sourceId": "isu-dry-mowing"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "text": "After a delay, measure again. If returning straight to the chosen height would remove more than one-third, that cut exceeds the removal guideline. The missed mowing does not create permission to take off extra growth all at once.",
          "sourceId": "isu-summer-height"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "text": "For help with the cutting itself, Mo’s offers"
        },
        {
          "text": "Lawn Mowing",
          "href": "/services/lawn-mowing"
        },
        {
          "text": "for residential and commercial properties. Discuss property-specific scope and current availability through a free estimate; the guidance above is not a promised Mo’s schedule."
        }
      ]
    }
  ],
  "sources": [
    {
      "id": "isu-mowing-frequency",
      "title": "How often should I mow my lawn?",
      "publisher": "Iowa State University Extension and Outreach — Yard and Garden",
      "url": "https://yardandgarden.extension.iastate.edu/faq/how-often-should-i-mow-my-lawn",
      "reviewedOn": "2026-09-02",
      "supportedClaimIds": [
        "growth-trigger",
        "removal-example",
        "repeat-observation"
      ],
      "jurisdiction": "Iowa",
      "scope": "Home-lawn growth and cutting-height relationship · numerical example, not a universal setting"
    },
    {
      "id": "isu-summer-height",
      "title": "What is the correct mowing height for a lawn in summer?",
      "publisher": "Iowa State University Extension and Outreach — Yard and Garden",
      "url": "https://yardandgarden.extension.iastate.edu/faq/what-correct-mowing-height-lawn-summer",
      "reviewedOn": "2026-09-02",
      "supportedClaimIds": [
        "height-scope",
        "seasonal-growth",
        "removal-example"
      ],
      "jurisdiction": "Iowa",
      "scope": "Kentucky bluegrass height guidance and cool-season stress context"
    },
    {
      "id": "isu-summer-dormancy",
      "title": "Summer Dormancy in Cool-Season Lawns",
      "publisher": "Iowa State University Extension and Outreach — Yard and Garden",
      "url": "https://yardandgarden.extension.iastate.edu/how-to/summer-dormancy-cool-season-lawns",
      "reviewedOn": "2026-09-02",
      "supportedClaimIds": [
        "seasonal-growth",
        "dormancy-pause"
      ],
      "jurisdiction": "Iowa",
      "scope": "Established cool-season lawns during summer dormancy"
    },
    {
      "id": "isu-drought-care",
      "title": "Watering the Garden & Lawn During Periods of Drought or Water Restrictions",
      "publisher": "Iowa State University Extension and Outreach — Yard and Garden",
      "url": "https://yardandgarden.extension.iastate.edu/how-to/watering-garden-lawn-during-periods-drought-or-water-restrictions",
      "reviewedOn": "2026-09-02",
      "supportedClaimIds": [
        "dormancy-pause"
      ],
      "jurisdiction": "Iowa",
      "scope": "Lawn-care guidance during drought · no local water restriction is asserted"
    },
    {
      "id": "isu-dry-mowing",
      "title": "When is the best time of day to mow the lawn?",
      "publisher": "Iowa State University Extension and Outreach — Yard and Garden",
      "url": "https://yardandgarden.extension.iastate.edu/faq/when-best-time-day-mow-lawn",
      "reviewedOn": "2026-09-02",
      "supportedClaimIds": [
        "dry-opportunity"
      ],
      "jurisdiction": "Iowa",
      "scope": "Dry grass and cooler mowing conditions after rain or dew"
    },
    {
      "id": "isu-fall-growth",
      "title": "When can I stop mowing the lawn in the fall?",
      "publisher": "Iowa State University Extension and Outreach — Yard and Garden",
      "url": "https://yardandgarden.extension.iastate.edu/faq/when-can-i-stop-mowing-lawn-fall",
      "reviewedOn": "2026-09-02",
      "supportedClaimIds": [
        "fall-stop"
      ],
      "jurisdiction": "Iowa",
      "scope": "Cool-season fall growth · calendar and temperature cutoffs omitted"
    }
  ],
  "claimNotes": [
    {
      "id": "growth-trigger",
      "summary": "Growth and cutting height determine frequency.",
      "sourceIds": [
        "isu-mowing-frequency"
      ],
      "reviewNote": "No fixed interval."
    },
    {
      "id": "removal-example",
      "summary": "One-third removal boundary and the conditional 3 / 4½ / 1½-inch example.",
      "sourceIds": [
        "isu-mowing-frequency",
        "isu-summer-height"
      ],
      "reviewNote": "3 inches is an illustration, not a universal prescription; a delay does not relax the limit."
    },
    {
      "id": "height-scope",
      "summary": "Bluegrass height guidance differs between summer and spring/fall.",
      "sourceIds": [
        "isu-summer-height"
      ],
      "reviewNote": "Scoped to Kentucky bluegrass; numeric ranges omitted."
    },
    {
      "id": "seasonal-growth",
      "summary": "Cool-season growth and summer stress can change mowing demand.",
      "sourceIds": [
        "isu-summer-height",
        "isu-summer-dormancy"
      ],
      "reviewNote": "No monthly cadence or forecast."
    },
    {
      "id": "repeat-observation",
      "summary": "Compare actual height again as growth changes.",
      "sourceIds": [
        "isu-mowing-frequency"
      ],
      "reviewNote": "Editorial application of the growth rule; no inspection timetable."
    },
    {
      "id": "dormancy-pause",
      "summary": "Dormant growth is limited and drought guidance advises not mowing dormant lawns.",
      "sourceIds": [
        "isu-summer-dormancy",
        "isu-drought-care"
      ],
      "reviewNote": "No brown-color diagnosis or guaranteed recovery."
    },
    {
      "id": "dry-opportunity",
      "summary": "Dry grass in cooler morning/evening conditions is preferred; midday can add stress.",
      "sourceIds": [
        "isu-dry-mowing"
      ],
      "reviewNote": "No exact hours, wet-grass pathology or safe-weather guarantee."
    },
    {
      "id": "fall-stop",
      "summary": "Fall mowing ends when grass growth stops.",
      "sourceIds": [
        "isu-fall-growth"
      ],
      "reviewNote": "No exact last date or temperature threshold."
    }
  ],
  "editorialReview": {
    "owner": "Task 30 editorial review",
    "reviewedOn": "2026-09-02"
  },
  "showTableOfContents": true,
  "publisher": "organization",
  "relatedServicePaths": [
    "/services/lawn-mowing"
  ],
  "relatedArticlePaths": []
} as const satisfies PublishedBlogArticle
