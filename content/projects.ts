export const WORK_SERVICE_TAGS = [
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-fertilization-weed-control',
  'service-landscaping',
  'service-flower-bed-maintenance',
  'service-yard-cleanup',
  'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal',
  'service-grading',
  'service-snow-removal',
] as const

export type WorkServiceTag = (typeof WORK_SERVICE_TAGS)[number]
export type WorkLocale = 'en' | 'es'

export const WORK_ALT_TEXT = {
  'neighborhood-leaves': { en: 'Neighborhood lawn with fallen leaves gathered near the curb', es: 'Césped de un vecindario con hojas caídas reunidas cerca de la acera' },
  'sod-strips': { en: 'Grass sections being placed beside a front planting bed', es: 'Secciones de césped colocadas junto a un arriate delantero' },
  'snow-plows': { en: 'Two snowplow trucks parked during snowfall', es: 'Dos camionetas con quitanieves estacionadas durante una nevada' },
  'leaf-equipment': { en: 'Fallen leaves beside a trailer and outdoor maintenance equipment', es: 'Hojas caídas junto a un remolque y equipo de mantenimiento exterior' },
  'striped-residential': { en: 'Striped green lawn beside homes and trees', es: 'Césped verde con franjas junto a viviendas y árboles' },
  'striped-commercial': { en: 'Striped green lawn beside a building and paved paths', es: 'Césped verde con franjas junto a un edificio y senderos pavimentados' },
  'mower-lawn': { en: 'Lawn mower on a broad striped lawn', es: 'Cortacésped sobre un césped amplio con franjas' },
  'striped-path': { en: 'Striped lawn beside trees and a curving paved path', es: 'Césped con franjas junto a árboles y un sendero curvo pavimentado' },
  'snow-area': { en: 'Snow-covered outdoor area with snow-clearing equipment', es: 'Área exterior cubierta de nieve con equipo para despejarla' },
  'wood-wall': { en: 'Wooden retaining wall and steps on a wooded slope', es: 'Muro de contención de madera y escalones en una pendiente arbolada' },
  'cleared-backyard': { en: 'Cleared backyard area bordered by trees and fencing', es: 'Área de patio trasero despejada y bordeada por árboles y cercas' },
  'leaf-pile': { en: 'Large pile of fallen leaves beside loading equipment', es: 'Gran montón de hojas caídas junto a equipo de carga' },
  'autumn-backyard': { en: 'Backyard covered with scattered autumn leaves', es: 'Patio trasero cubierto de hojas de otoño dispersas' },
  'backyard-lawn': { en: 'Backyard lawn with mature trees and a play structure', es: 'Césped de patio trasero con árboles maduros y una estructura de juegos' },
  'soil-plugs': { en: 'Hand holding soil plugs in front of a lawn machine', es: 'Mano sosteniendo tapones de tierra frente a una máquina para césped' },
  'wooded-lawn': { en: 'Green lawn bordered by mature trees', es: 'Césped verde bordeado por árboles maduros' },
  'straw-slope': { en: 'Straw-covered outdoor slope beside dense woodland', es: 'Pendiente exterior cubierta de paja junto a una zona arbolada densa' },
  'cleared-slope': { en: 'Cleared soil on a sloped outdoor area', es: 'Tierra despejada en un área exterior inclinada' },
  'striped-industrial': { en: 'Striped lawn beside a long metal-sided building', es: 'Césped con franjas junto a un edificio largo con revestimiento metálico' },
  'straw-island': { en: 'Straw-covered planting area between paved driveways', es: 'Área de plantación cubierta de paja entre entradas pavimentadas' },
  'concrete-patio': { en: 'Concrete patio beside a brick building', es: 'Patio de concreto junto a un edificio de ladrillo' },
  'snow-road': { en: 'Snow-lined road beneath streetlights at night', es: 'Camino bordeado de nieve bajo farolas por la noche' },
  'dense-vegetation': { en: 'Outdoor property area with dense vegetation', es: 'Área exterior de una propiedad con vegetación densa' },
  'overgrown-drive': { en: 'Overgrown vegetation beside a worn concrete driveway', es: 'Vegetación crecida junto a una entrada de concreto desgastada' },
  'aerial-lawn': { en: 'Broad striped lawn viewed from above', es: 'Césped amplio con franjas visto desde arriba' },
  'multi-view-retaining': { en: 'Two views of a wooded yard and retaining wall', es: 'Dos vistas de un patio arbolado y un muro de contención' },
  'multi-view-house': { en: 'Two views of vegetation beside a small house', es: 'Dos vistas de la vegetación junto a una casa pequeña' },
  'multi-view-lawn': { en: 'Two views of lawn coverage in a fenced yard', es: 'Dos vistas de la cobertura de césped en un patio cercado' },
  'multi-view-yard': { en: 'Multiple views of the same outdoor property area', es: 'Varias vistas de la misma área exterior de una propiedad' },
  'snow-plow-truck': { en: 'Truck-mounted snowplow in a snow-covered driveway', es: 'Quitanieves montado en una camioneta sobre una entrada cubierta de nieve' },
  'wood-steps': { en: 'Wooden landscape steps under construction in exposed soil', es: 'Escalones de madera en construcción sobre tierra expuesta' },
  'lawn-machine': { en: 'Outdoor lawn machine on dry grass', es: 'Máquina para césped sobre pasto seco' },
  'sidewalk-lawn': { en: 'Curving sidewalk bordered by green lawn', es: 'Sendero curvo bordeado por césped verde' },
  'front-lawn': { en: 'Front lawn with shrubs beside a home', es: 'Césped delantero con arbustos junto a una vivienda' },
  'block-walls': { en: 'Tiered block retaining walls beside a home', es: 'Muros de contención escalonados de bloques junto a una vivienda' },
  'curb-leaves': { en: 'Fallen leaves gathered in a long row along a curb', es: 'Hojas caídas reunidas en una fila larga junto a la acera' },
  'leaf-covered-yard': { en: 'Backyard with a wide layer of fallen leaves', es: 'Patio trasero con una capa amplia de hojas caídas' },
  'striped-lawn': { en: 'Wide green lawn with visible mowing stripes', es: 'Césped verde amplio con franjas visibles de corte' },
  'dew-grass': { en: 'Close view of green grass with water droplets', es: 'Vista cercana de pasto verde con gotas de agua' },
  'mulch-bed': { en: 'Mulched planting bed around shrubs and trees', es: 'Arriate con mantillo alrededor de arbustos y árboles' },
  'neighborhood-lawn': { en: 'Green lawn and young trees beside neighborhood driveways', es: 'Césped verde y árboles jóvenes junto a entradas de un vecindario' },
  'flag-lawn': { en: 'Striped lawn extending toward a flagpole', es: 'Césped con franjas que se extiende hacia un asta de bandera' },
  'cut-fence-line': { en: 'Cut vegetation along a wooden fence line', es: 'Vegetación cortada a lo largo de una cerca de madera' },
  'mulch-bags': { en: 'Mulched planting bed with stacked material bags nearby', es: 'Arriate con mantillo y bolsas de material apiladas cerca' },
  'leaf-square': { en: 'Square pile of fallen leaves on a lawn', es: 'Montón cuadrado de hojas caídas sobre el césped' },
  'side-yard': { en: 'Narrow green side yard beside a house and fence', es: 'Patio lateral estrecho y verde junto a una casa y una cerca' },
  'aerial-residential': { en: 'Striped lawn and curved path around a long residential building', es: 'Césped con franjas y sendero curvo alrededor de un edificio residencial largo' },
  'striped-parking': { en: 'Striped sloped lawn beside parked vehicles and trees', es: 'Césped inclinado con franjas junto a vehículos estacionados y árboles' },
  'striped-roadside': { en: 'Striped roadside lawn near commercial buildings', es: 'Césped con franjas junto a una carretera y edificios comerciales' },
  'soil-yard': { en: 'Prepared soil areas beneath a tree in a fenced yard', es: 'Áreas de tierra preparada bajo un árbol en un patio cercado' },
  'green-backyard': { en: 'Green backyard lawn bordered by a fence and trees', es: 'Césped verde de patio trasero bordeado por una cerca y árboles' },
  'sod-cart': { en: 'Grass rolls in a garden cart beside prepared soil', es: 'Rollos de césped en una carretilla junto a tierra preparada' },
  'prepared-soil': { en: 'Prepared soil in a fenced backyard', es: 'Tierra preparada en un patio trasero cercado' },
  'damaged-block-wall': { en: 'Loose blocks and hoses beside a damaged retaining wall', es: 'Bloques sueltos y mangueras junto a un muro de contención dañado' },
  'unusable-image': { en: 'Unusable legacy image', es: 'Imagen heredada inutilizable' },
  'damaged-wood-wall': { en: 'Worn wooden retaining wall in a wooded yard', es: 'Muro de contención de madera desgastado en un patio arbolado' },
  'dense-house': { en: 'Dense vegetation covering the side of a small house', es: 'Vegetación densa cubriendo el costado de una casa pequeña' },
  'cleared-house': { en: 'Cleared ground beside the same small house', es: 'Terreno despejado junto a la misma casa pequeña' },
  'sparse-lawn': { en: 'Sparse grass across a fenced yard', es: 'Pasto disperso en un patio cercado' },
  'green-lawn-fence': { en: 'Green grass across the same fenced yard', es: 'Pasto verde en el mismo patio cercado' },
  'overgrown-blue-house': { en: 'Dense vegetation on a slope beside a blue house', es: 'Vegetación densa en una pendiente junto a una casa azul' },
  'cleared-blue-house': { en: 'Cleared slope beside the same blue house', es: 'Pendiente despejada junto a la misma casa azul' },
} as const

export type WorkAltKey = keyof typeof WORK_ALT_TEXT

export type WorkRecord = Readonly<{
  id: string
  src: string
  mediaType: 'image'
  width: number
  height: number
  altKey: WorkAltKey
  serviceTags: readonly WorkServiceTag[]
  verifiedCity: null
  displayOrder: number
  displayEligible: boolean
  homepageEligible: boolean
  imageObjectEligible: false
  provenance: Readonly<{
    source: 'repository-local-gallery' | 'legacy-google-gallery' | 'repository-before-after'
    authorship: 'unverified'
    service: 'unverified'
    city: 'unverified'
    altBasis: 'record-visual-audit-2026-08-31'
    note: string
  }>
  comparison: null | Readonly<{ id: string; side: 'before' | 'after' }>
}>

type RecordInput = Readonly<{
  id: string
  src: string
  width: number
  height: number
  altKey: WorkAltKey
  displayOrder: number
  displayEligible: boolean
  homepageEligible: boolean
  source: WorkRecord['provenance']['source']
  note: string
  comparison?: WorkRecord['comparison']
}>

function record(input: RecordInput): WorkRecord {
  return {
    id: input.id,
    src: input.src,
    mediaType: 'image',
    width: input.width,
    height: input.height,
    altKey: input.altKey,
    serviceTags: [],
    verifiedCity: null,
    displayOrder: input.displayOrder,
    displayEligible: input.displayEligible,
    homepageEligible: input.homepageEligible,
    imageObjectEligible: false,
    provenance: {
      source: input.source,
      authorship: 'unverified',
      service: 'unverified',
      city: 'unverified',
      altBasis: 'record-visual-audit-2026-08-31',
      note: input.note,
    },
    comparison: input.comparison ?? null,
  }
}

export const workRecords = [
  record({ id: 'local-gallery-01', src: '/media/gallery1.webp', width: 1600, height: 1200, altKey: 'striped-residential', displayOrder: 1, homepageEligible: true, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file; no city, customer or service attribution." }),
  record({ id: 'remote-gallery-001', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmT3pOMgcy_dc50gadI1VZaFKQ9ePhx4BLif_ilbSLLRSUJ_6LqdN5XJrSdjm6Cd3s__9Nw79GMdLFZlggXf0kdOVGs_EhAjGCICPxliq1J3kmCXG8Rq9PDVCdeJx_XNsZN0wn7FjA_cnY=s901-k-no", width: 901, height: 676, altKey: 'neighborhood-leaves', displayOrder: 2, homepageEligible: true, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-002', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmLNLuAxknQ-EyYAKDz6ebRkD-wR1b8HD30reGrBX1sebESznLxoeDy2Y_XXSMlVJWlB2ecTw3DGaZNVqvxK26uDJhLzoHY50HkZ2wz_TcKNdSx3xOLbv31nQ3PebAsefJeILYV6g=s773-k-no", width: 773, height: 580, altKey: 'sod-strips', displayOrder: 3, homepageEligible: true, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-003', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmjMvxT2Ogt1lKkQd8oWAP9UPAnHHAe9_y64Yhjo5H62I4LMl-rLaKbuHkGqyLV9Hv7REmYcH1y-6DMmjhniy8H-YjCMthZPqnABBoI6v8Js8vtZuV_pYhpps6qjwZIvoeWd0_q=s773-k-no", width: 773, height: 580, altKey: 'snow-plows', displayOrder: 4, homepageEligible: true, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-004', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkkr81buY4Ul29owZm6LDmIMhLMBMWU3tLKOWza65kbbEIwyReT1VxNNSi5-U39FLM7yRx8GzMrQ8MJ44Osy3q_p7B-Qel7GEsaMG6-MiXt3N5FrFi5RZQORW99U9hcpUT7zrUyo90UcsxC=s812-k-no", width: 609, height: 812, altKey: 'leaf-equipment', displayOrder: 5, homepageEligible: true, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'local-gallery-02', src: '/media/gallery2.webp', width: 1600, height: 1200, altKey: 'striped-commercial', displayOrder: 6, homepageEligible: true, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file; no city, customer or service attribution." }),
  record({ id: 'local-gallery-03', src: '/media/gallery3.webp', width: 1600, height: 1200, altKey: 'striped-commercial', displayOrder: 7, homepageEligible: true, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file; no city, customer or service attribution." }),
  record({ id: 'local-gallery-04', src: '/media/gallery4.webp', width: 1600, height: 994, altKey: 'striped-industrial', displayOrder: 8, homepageEligible: true, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file; no city, customer or service attribution." }),
  record({ id: 'local-gallery-05', src: '/media/gallery5.webp', width: 1600, height: 1200, altKey: 'striped-commercial', displayOrder: 9, homepageEligible: false, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file with embedded capture text; location is intentionally unclaimed." }),
  record({ id: 'local-gallery-06', src: '/media/gallery6.webp', width: 738, height: 553, altKey: 'neighborhood-lawn', displayOrder: 10, homepageEligible: false, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file with an Ankeny capture overlay; city is intentionally not used as a project attribution." }),
  record({ id: 'local-gallery-07', src: '/media/gallery7.webp', width: 1600, height: 1200, altKey: 'soil-yard', displayOrder: 11, homepageEligible: false, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file; paired only through the legacy pair registry and matching scene continuity.", comparison: { id: 'comparison-08', side: 'before' } }),
  record({ id: 'local-gallery-08', src: '/media/gallery8.webp', width: 1600, height: 1200, altKey: 'green-backyard', displayOrder: 12, homepageEligible: false, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file; paired only through the legacy pair registry and matching scene continuity.", comparison: { id: 'comparison-08', side: 'after' } }),
  record({ id: 'local-gallery-09', src: '/media/gallery9.webp', width: 1600, height: 1200, altKey: 'sod-cart', displayOrder: 13, homepageEligible: false, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file; no city, customer or service attribution." }),
  record({ id: 'local-gallery-10', src: '/media/gallery10.webp', width: 1600, height: 1200, altKey: 'green-backyard', displayOrder: 14, homepageEligible: false, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file; no city, customer or service attribution." }),
  record({ id: 'local-gallery-11', src: '/media/gallery11.webp', width: 1600, height: 1200, altKey: 'prepared-soil', displayOrder: 15, homepageEligible: false, displayEligible: true, source: 'repository-local-gallery', note: "Repository-local gallery file; no city, customer or service attribution." }),
  record({ id: 'remote-gallery-005', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkzLPCH9ZzRQVReysuk8qqURS_fiUMaMl-nI6Dk8LwQz_V31aWveR4NfEU4Gor36xSTqaw9fLpB7zppAw0yMrPHrD3KcKfH8PtXuVxdMbJDrqLNIxUyS0T42pQxemna_V8_bkTX2jk81VY=s773-k-no", width: 773, height: 580, altKey: 'striped-residential', displayOrder: 16, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-006', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkv61w8nmiwV5hKe6KsOA-e_b7MW3erkcY6J_tot3xZLpxAncFRRKyWRCONl8fFfOrm2kIWIulY7NTNfZUtAqnkpOviEUh-R12s02aP1U8Sc6JshuiL7ooCdEFdnZi5EPt1BSWZ=s773-k-no", width: 773, height: 580, altKey: 'striped-commercial', displayOrder: 17, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-007', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm6sSTsMzRl8xho9pTa5WV6TKDuk5u13e9jBs8SmG58bkE9cZOjdwT4YXK9dZ9cqvifBg1bZFLrRiOpKz___f4UpPdLuv3oKxIuQxYwrzQdyQkZ-MnG1aWQVBuAWKXyHl-LBvjP=s1031-k-no", width: 1031, height: 580, altKey: 'mower-lawn', displayOrder: 18, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-008', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk6xdsWY7IYRJgP4U_zyZDgegnQl1qvYlBpN_s2FKEdY7NVPgzxhGjvyxtakT8huu7DUmDgr467PEgnk_zr1eKzW3pUXlNuXVtsgb-XhMEX-e9nYyrR2iVaf3xUNdmUEEzddak=s773-k-no", width: 773, height: 580, altKey: 'striped-path', displayOrder: 19, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-009', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlD-B7sdn-OjE7vVEu0YJOFSMWCLVvObzTpmaodTRe93KLQkcDnUvAuViAbGR83Fr2lnEqp2ivESIyFiLBacQPujU5xe2YCYS07UdCWI97hDqXh9_pZld1twLz5EOnLthiVGRUgyXB-u_9S=s920-k-no", width: 920, height: 580, altKey: 'snow-area', displayOrder: 20, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-010', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWldhY4gbS5jggwtogDxQJc1CS3RbP6wG6Em11q2uMEwIcXzKQo4T8-HH0zPk9QeaUJi2hyWMLlDvX_Z-GlZtFOUluK8bj7JgCBlgyWrPuNZ0b2iVd9vQMPeaWSuFiunUki_ufCA=s773-k-no", width: 773, height: 580, altKey: 'wood-wall', displayOrder: 21, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-011', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlWDk8stSXZMzdVb6euxtLOYJXLcWTo7ASVTILPpMCefpBsRH_9Bfu5mPPcH0hNGZpksJpCZ0p-bWdzfatzkUdYCx2WvyLbV-BV8B-uq5zDvww-xvuFsDk5GpRzSDC-a1xbq3BVmQ=s773-k-no", width: 773, height: 580, altKey: 'striped-commercial', displayOrder: 22, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-012', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkx2wzrwEa0fbjwSjII21N_DemW5uOfwV1aWAvZ4PqspPCu8FpE1-4FfEUIoDmLnjIgYCuh9lK3PKsy70HhsYVbnFmnpEekWFbJnFIBGrnWQFO-hLB5N2aIO_diBzUBBPH4n-lyrZLTY_yD=s901-k-no", width: 901, height: 676, altKey: 'cleared-backyard', displayOrder: 23, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-013', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkeT0xjYy46h-VjqvzQQglV4N3I0xjb_95_W5SB_PpavaetXvOe39HQgO1YkWBFMPbdiqo0RBaSK-Viea9glx55E6MAOzqCyZMpuPsrPZFK2C2QnrLxq35gikUXMEbo4IJfydzmB5YMeqkk=s812-k-no", width: 609, height: 812, altKey: 'leaf-pile', displayOrder: 24, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-014', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnmq25fDC9BWXAwXL0mFjA3cnZ9fz8XqW5wNmc6e_YzQLlpHLSqdyovFa_pt1kWmtD1vlovCIT7EdKTnKC72ALlehxJjzYTKED0EA6ncgRDLkoMaeHNx1pyeijka7Xiiw9meH2w=s1354-k-no", width: 1016, height: 1354, altKey: 'autumn-backyard', displayOrder: 25, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-015', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnRiCLbDb6TKd5FFl5lZinqFr-UiSVhyfJ6lB7hciDX0IL8WIhip982her0G3VcwfV3siwZJEfsqySJt8VGd5mrxDSJ19-As38IkGW964wLn9kqViTxOKO79M_W3UBUTaYkZPVZgWx_aHQ=s901-k-no", width: 901, height: 676, altKey: 'backyard-lawn', displayOrder: 26, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-016', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkVY7cfVmtFNP-iMQTmP1XwFeqkoU_gBHzkJUq3A7nJOUNOYrVGXM94zWVUGb9lmvqSGQuX5hh1bnUk4rj9LmcbzUJOMViijJqCcG-JpHsf1E9l3QYRT3P5GWGcu3qg6bWlOhR0-A=s1016-k-no", width: 762, height: 1016, altKey: 'soil-plugs', displayOrder: 27, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-017', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnt8SLELMn5Yi1_PSNzdbHJPPKCbNLgTCBJlIdSLruo4Qcg3ICDS7AmJ2tWZ9bczPebFvzUY54YBVtqVAD59g3DvZ0Til2cT5WNLyP37DRlPEOHphdOdptlapij-nK_Na51gyqZ=s1193-k-no", width: 1193, height: 580, altKey: 'wooded-lawn', displayOrder: 28, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-018', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWncuUAlbtzW4vuetDD9WRelTXOgUAwoGu_XIrhkwwsNo7DAk-QyGCGu7Rz00q1VPtIrY2Jbs3bb8GwIi8uflQq8J3vRfi1boGWbCdDXj4D-vTqR-WATpdqbc9bJ7wkPOC-mDVB5v_F6oc7M=s901-k-no", width: 901, height: 676, altKey: 'straw-slope', displayOrder: 29, homepageEligible: false, displayEligible: false, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; excluded from display because the image visibly contains a specific street-address overlay." }),
  record({ id: 'remote-gallery-019', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkezC-fSbmhANNBlbyOGjkyljLtZ5MEQf-A-qwfeCF4d-GuR7ucK_Ah-BLX7-ucfLokut1fzwDiVqu0uR8A1ehwc_RMjSXkfjtxhZf8rGdGBdVnBs__CnwQ1VbYl7VSRGFVi7jo=s1031-k-no", width: 1031, height: 580, altKey: 'cleared-slope', displayOrder: 30, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-020', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmjTTCKZ5okamudBtQgCWLjZPixCmoS36893lKcXF0YuSMbvV1zQ0p4QkPzOui18ZZHMmn6_dI-TuWHJmGk3HmGmM8BxcwdNwhbZYEfQUwo7stXVHq-tKcYqi9PoL8EMzfB13fSOXiRA3OA=s901-k-no", width: 901, height: 676, altKey: 'striped-industrial', displayOrder: 31, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-021', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkdUpq3ElznFw5i4Kn114_8nV0yFWEo5qLOdYJNQIrw6mS38zYUDK7WfGcj1uxNwRQFgqYxgjTskl-SnqDapwWlKDtxRx7FauD5qFo1Ty0f86E0pAaXW_6UxRJx4Agoh9r6_rdU4C3LMgGj=s901-k-no", width: 901, height: 676, altKey: 'straw-island', displayOrder: 32, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-022', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmCcrbQ7c-IVHxX8yO_IoSN0B3e5Dj0hb3Gv99GKEKJmKvFNFvZu7EuxKDjOrkEt-q6x6egR37ZBADdfF-gdYGxRCkKjvNMi9TknUhEAVI0vW3Df0LIXSR14kcF0nM36Znxp3w=s1192-k-no", width: 1192, height: 580, altKey: 'concrete-patio', displayOrder: 33, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-023', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRcspcq_AQ5bMa2-ApSvwc9AysBuDdm7SB64Dv_oTYDg0Z8zVLd0gjmF8DJPA5w-lXScPUcztQG87Q731PlplF5scKxliUYwv-sBwVntVi1J-46S_VVhMcNwVl1RkeF-WvvuMBlzUspfom=s1354-k-no", width: 1161, height: 1354, altKey: 'snow-road', displayOrder: 34, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-024', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnTH_DNjUKOKU3Yj58K6A9ixvk5bJYqv7gfHxVQggvNAYmxNreeOlm5vSifMduwMMpwLQ3lnX6Mk_lIcYLqAzAdJxT3yK_QklEUYaUKr8wtW7vTrWswYv411mcJGwAvY6CBOJFH_ICgQUMu=s773-k-no", width: 773, height: 580, altKey: 'dense-vegetation', displayOrder: 35, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-025', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmxTP-97R7gDaY1AXHnF-bdTSyDd4g5dyr7KmHW1j_NDk7Yrm5NQIVSQ-JaDlMHp9Y6SaZIllp07UMPseeyMQv7z0cy4in-aEVbZn8aZ8LvsCCNOV4Jfvwg1OxTJmaxH6kyJzq2=s1192-k-no", width: 1192, height: 580, altKey: 'overgrown-drive', displayOrder: 36, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-026', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmeJqna8Hc8MTpVLp87RnC7bFkJZBhs_SLPShEQdVcGrSvEwN5kx8qLdXIMaAkSgjUwhUgNGeNkCW6D37P7orEIa7d5ySpnQhtXkMBVR8UvPa2Q9fbsJyFzj4AGioo7dhf1DBXg=s901-k-no", width: 901, height: 676, altKey: 'aerial-lawn', displayOrder: 37, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-027', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkyIRzl_2DV7-NHZMiDuEEm5bvZQWrjXuvAbB3oO-S1OqJOLJr_2JbWvHgsrOXfxVHIR7DxQmxSvaCD4bTjzJApot9R-e4DNfBHCSUFMf8oqVoBlPkk0BMdNXMUd8U1eG7lfRjyS-mKo1ai=s1016-k-no", width: 762, height: 1016, altKey: 'soil-plugs', displayOrder: 38, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-028', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnbZiM3HvhGy_jIFBUltQQpax35n_cDC3UbQoGUUu-lTt_E9yBMW47LpezQ2qO0XRpO6e1qM9lF-7xU9Dt7ZjG5aQf-yhw494WK_HGaI3VVulCudI2J2JoWehdB8Wrepmx-ZHKZ=s812-k-no", width: 812, height: 812, altKey: 'multi-view-retaining', displayOrder: 39, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-029', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnXRQoPeX09FhlQVHqY_iXkY1GCNp1ONL2-8jq4iVrXdX9mGONM1GifZvBavR2iy4wROgMhuQgMgeAjFERE_OS3_-NgJg7mxYFJJDAVRC0BrqXH_sWmjq-hxTrck0d_c-kUnpA=s901-k-no", width: 901, height: 676, altKey: 'snow-plows', displayOrder: 40, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-030', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnpAQ2yzaRzz-uyIDRwrkua7BNUmJ_diS8n4hRpaE11-lRD3vsYBOCwCZX07_V18NVPEV0aBTrAy7Q70_jeFISKXoJdOtfuSnJeFbMs19XnxKQ1Ygfj1fgPlS8La7lZ0dpQeMxjUA=s812-k-no", width: 812, height: 812, altKey: 'multi-view-house', displayOrder: 41, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-031', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwNhzPlPHJ9o1hxwy7R50edKift1bKVqyIHFut7xAm90ZiBg0a3agieFB4J9bairqYL27CfCRlM9sUggMbvjrIIydcjYHISEfrmry-jMNnfRxoahihGs9nKTJG5zYIVBzGISRe=s676-k-no", width: 676, height: 676, altKey: 'multi-view-lawn', displayOrder: 42, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-032', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlyJ8LCCGwjnyppru2NqoEW0agugeEfBBf6dfrdcbu8lp0ATN_776Sl3xmKND8uWt7qE4w5WCe7Nd8yOImSlyrkCPiHLnUJtXdRKOdpKFfMaRkZG3T6zmbq7Otb8GuL98zWk74j=s1016-k-no", width: 1016, height: 1016, altKey: 'multi-view-yard', displayOrder: 43, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-033', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmcXo9DM4-ot6Z7dLy6abuhBezm5H3GubHieI-1xJzDoayl6XYWP-71N6QdiLhvjAVsauJK9GPJdV76oagdp1AZxFYzEYcFaok9SpA7R5KjCKB-CXTCWNxHPJYLWMAEI-Z45Qc-=s773-k-no", width: 773, height: 580, altKey: 'snow-plow-truck', displayOrder: 44, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-034', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn2dJ3tFHX1fR7sWl_tVX6pELaumn1fWkT5LTj6PB2nq0jxwh_aND1wPC_XGThk9QFfOsoxpYYiQjDxXcnRfT4dGpFaJ4TG4lLTbdsqSRxcKPZfrVTQO2jRAFZx4wMdzNLPprPrbw=s1031-k-no", width: 1031, height: 580, altKey: 'wood-steps', displayOrder: 45, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-035', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFpBnP-KlGxDrAyfT27r81jIuXdfHliNCK2B25HhBiOCRinwWqp-P_SBBfZf0WQ1AoUvD2XHGMobpfTc2oTM4FtPNdQhYqJtWxnpKwoz-CxzBl0i-ZT91kdFlpLoNdOFBFh3k9Dw=s1016-k-no", width: 762, height: 1016, altKey: 'lawn-machine', displayOrder: 46, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-036', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFVYAMoPh9XS7Ibgq9FyEMdzV3afep5iVcBR6nrMFZQUIl1V_QF-tvsYQAASzQ2-Y98Iq1Zfhrp3IM9gQoCSjqHZ2bhhzDFiuQlq1QDajvRWMkI-mzQAYrjvQRQC14EpQzcKo6uQ=s1016-k-no", width: 572, height: 1016, altKey: 'sidewalk-lawn', displayOrder: 47, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-037', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWknAW1TgSwWbm0HolTJWKjDUZsddQ80c3FbWjr7MIqpA8YkYBNPCoPJMC9nZptaAMxgnIXAkc_TG28Ku9mcZmUL3z2KyTHZRKHEl-zdAwu6MTRWIFJ41EaR2xUNKd2A43Y0ojDEUyHk2nXb=s773-k-no", width: 773, height: 580, altKey: 'striped-residential', displayOrder: 48, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-038', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmIyzYDBfZmCpzxiLANdr9yLkePO_kLg0B_9fxNhY3X0StJNEaZmCczR-5dFZ424NoMiTgHwIm4kpWvMiuUgqdNqYz4Zd8oGbxi00jG1bXSrETPuKDItWg-pkXHoRJAmlJODfc21ovMMCDV=s812-k-no", width: 609, height: 812, altKey: 'front-lawn', displayOrder: 49, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-039', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkadBnBH6MDGESzj1iIvCMlFJMMV94dJssBHfVkekS5Ms_4vzWVAE7JgtVX-EBgajT1wmug6zojP2iY5l4BTfWxvIIVcfQ_P3R3Mszm_gQeoRECetebU7vmQa1PettvnWIZ9xHNDfWE7so=s1120-k-no", width: 1120, height: 580, altKey: 'block-walls', displayOrder: 50, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-040', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-qTtbP8YTtgf4lG7CM83tccQNcIA2ucZGfG7Ga_SURB2Tl06Uh1jiEU10YxL8Ib7_Fljzf-o4ySM1K13Xh9xt7DZDtdQu8s6Q2laoX2TcoG9ogcHF3TE_TVj6JDomwq1WS_g=s1354-k-no", width: 1016, height: 1354, altKey: 'curb-leaves', displayOrder: 51, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-041', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm-oApli5-3B3qDkF4JVArKhTwAo2uSMg084nFgZSvLjHpvDMSSwnfPvXIxeXablOh13Pb5JwjjppdGTE_lw4t9kIjfUWz0Yo6G-0tAM0ZEmLVXeC7unQS8zQdcIhyda5g59VLYdg=s812-k-no", width: 609, height: 812, altKey: 'leaf-covered-yard', displayOrder: 52, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-042', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm9s-bvxcxQ_b-G_SydGFKe4BrNnPSsHRuw_o3FJYVqu1B24BYlMMrAf94gpfuk8k0at5y684m-Beww4aYPqDwXLf8bIeAb3BJHX-DB6bGkeQ8T_5WCBzS2ftIj43PhS-l7gKWYgw=s1354-k-no", width: 658, height: 1354, altKey: 'striped-lawn', displayOrder: 53, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-043', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkK-ZZJriwqIvfdHFOyT9-wGcIIP7sEZPkWY1BNGd6-5tFjJvrqBni9c0phar2-lFfnDRlu62Lov6f3FV3J4YWOSNpJIDoRluFVHBovsrrK3cxdestEu_6POD6MtqppBz9aecmB4nxBTa2A=s676-k-no", width: 676, height: 676, altKey: 'multi-view-yard', displayOrder: 54, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-044', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmVfKA_mviRWrp8u6m8aea_S0D3DgCEvkvA4PKp4a3-yj37j_C9q7of2dBJgjfMPJ3CAUQX0Ds8U1QDMcISHCN3dp38it0XxqWwhmvG3L3Dtmq2xEEZAxNIdAnprAGOFr6Otqs51uyYXE0=s812-k-no", width: 609, height: 812, altKey: 'straw-slope', displayOrder: 55, homepageEligible: false, displayEligible: false, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; excluded from display because the image visibly contains a specific street-address overlay." }),
  record({ id: 'remote-gallery-045', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmEZXoN1eXnrArRBSqR-m4dsXqCOa46WpKEBLkboYUsMw6gs-t8FOG9ceIOIn4xmWdhE_JXTzPgCtbFWaSLDITp_n2eECiA3sasXlCx6Sc5nRKZ5GZcuv9Vcja3JJ7XxSTRpWXA3AK_Gss=s1354-k-no", width: 631, height: 1354, altKey: 'multi-view-lawn', displayOrder: 56, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-046', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmMySiDXdWL4WyEcuA6ClvGqYAa0BO1DWA-B-h_WM0YT9pp5r5dIAOjB_q05C8-EJV1tJgbGqfgZbpqHtXDzBZthqERVvwg7xOYD9qsZzUTS3X2AShvrmciUuaNc3OLlk_vsHw=s1354-k-no", width: 1016, height: 1354, altKey: 'curb-leaves', displayOrder: 57, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-047', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlTtqnp92R0ldBjGsp7QPB4eh6VraNyWuxl7Y6RI2iUnAtcqVrspLEqpgA_qMiFP95jONoptMczMrJTZephyLTKM7_vsGlNBotuEXbgCxgXoUJ3xF7Wczfcae4xiv0eammO32B2DA=s870-k-no", width: 870, height: 580, altKey: 'dew-grass', displayOrder: 58, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-048', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlAlbxYW-LqDt5s2LQyr1uEdQzP_FbzdxoA3TWvl4W6uTbX8sjWYF9fynkb0_lnm2RmEhyGTORXstpGD3aMntprLa6a-R8eWTu7ok6LsM4kz84zPMjzYTNWq8ROkwX5lvpGTxWY=s1193-k-no", width: 1193, height: 580, altKey: 'mulch-bed', displayOrder: 59, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-049', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn3HhVgDcC8vryyPEr4I1Ushy6_vDZVXyT9rSNqaphPxOMKMTpPJdBMfZoQR38Zh0B8FWRE827OvQSaAkSuzamiEAVAc2wpGih7sA6dDjcX9zmQUfgusS58-RZNCvapFvuPWGtt=s1031-k-no", width: 1031, height: 580, altKey: 'neighborhood-lawn', displayOrder: 60, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-050', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmmv10J-BJQ9z_A1vqzUUsecHw31yCvmJmrSv34CVoaM8JPOr0s9bteb4EeDRW47cwYzcuW--PCCgol-Y5QDN0nBE4zXn30j-cREXsjYG16FXPJhLylCtdErobZP0slCJCbAkssqg=s1249-k-no", width: 729, height: 1249, altKey: 'flag-lawn', displayOrder: 61, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-051', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmQemSI2n4hHDqVWBtRIRdV3JM9m4ulNq73S5y5SsFcKjTzHCBDyNTm4i9wa41BHHYOGOHY60tNtdZtFsPLd-tF5mtQXs15_aPA1C3t4fFIwDokM_TFTRnO3GZepZPmTSnc1weqmA=s1354-k-no", width: 658, height: 1354, altKey: 'cut-fence-line', displayOrder: 62, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-052', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlgKZ1-4X28IyMHIJKFh0xaLQ3kabxmPKgviPaRNgUI821NMLQotbpkuqeXC10_9ZMTzhO9LNwd4BrY5AFadR5ySK_Wdkwejqf-BHRx55tZcp1V6l_tovlSW3DEeu7Xku8ZRn_Y9Q=s1193-k-no", width: 1193, height: 580, altKey: 'mulch-bags', displayOrder: 63, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-053', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnk_lchQp5s4xsUbHwptSuAFkBeJabifTZczytthFmTlb2BCHL7yRMlXCrrV_OphHz5KJ1_LHKN80L6G4UYr7WiBfakkIgQxzNR9uBhufYXB0XYj2j3MRRVZGX8QwURyIxHnZd0AA=s905-k-no", width: 905, height: 580, altKey: 'leaf-square', displayOrder: 64, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-054', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlka3XXrEWlsHL8_R_7liJxH-TdFmDljtYRTpr184WS88Mx_cUlS3omrOrnm9qgHVJqpZCwE1tfWWVuz3_DIfgw27Vb02TlAZc2cAYIqnycVD_Cya-gevkES3xG0lbdoARx_ogCGg=s773-k-no", width: 773, height: 580, altKey: 'mower-lawn', displayOrder: 65, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-055', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn79E2M4nZg67nzSwBog0J9je8-tdvMFEcL66aXjmeRKYfR1TG6l2X8_oqKVZmibyhqNACEcLzCu92nDcJw67DZr9GpzatUFF-6pHlYNzkF4PLjf8m6XdZoVqVKYiI_ie5a3Egn4w=s1193-k-no", width: 1193, height: 580, altKey: 'side-yard', displayOrder: 66, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-056', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlroUl1WCMkxml4LiHgzY_o6Ln0nqYYu4GW-2ud62vyqKS8tfoEKYm9T6hz5oOjX-lNSkECgY2eNdRCSqtD1D_N3TRNO-rrKezK2aPY4FZGst9SuyZR8E2yNV3noEwOb_6fBEM=s1354-k-no", width: 762, height: 1354, altKey: 'sidewalk-lawn', displayOrder: 67, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-057', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnxtQwvLFrWOIuwY0id_47aKHjLq2V7NgeeAvhsBZNQckw5dIb-gI290ne9zi7ips5J_0N9W8TXWuEnPdn53WAUNIEJ0xKCw2W8GnkHL5P6TEsX_3Oaa6zzFu2Co4CeC_yMz6b9=s773-k-no", width: 773, height: 580, altKey: 'aerial-lawn', displayOrder: 68, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-058', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn3MzNFCkm4D9t-Aq-XgPhlcF2cRqlVtAS5a316jeq6H4MS_6G4AuETLkxgExpLbD1042v0oULfUGOonrVas4EAm3NV8XUmHkpqTYm0sWp_GM8pMwpYl5xukEm_fO8fbGD-9eut=s901-k-no", width: 901, height: 676, altKey: 'aerial-residential', displayOrder: 69, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-059', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-pLseZzZjLEe02ayCvtmqgBAzvGqmODbOCFdJwUDAkbrKXCuJmf6ymhPRWDDl1mMnkm3uvZZCyVpUInCTnLmqo5lOxzhWgTPg5qc1sAxhKbs9Tw7vUTwSIzprViSYwnj4QZ0M=s1016-k-no", width: 762, height: 1016, altKey: 'striped-parking', displayOrder: 70, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-060', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl3bdQoVUpr6Um-dJzcRmanmBK0xtbbNWjf2GDgyf9dCfBCBII5ewRDZTZJ0fzhW04WkPArG3kPCmEugZG2UHTHRuJkqYvgJpkPWiqNDxVnlv8g_nPNW0H3IdZugCBHiCBlUcUYzg=s1031-k-no", width: 1031, height: 580, altKey: 'striped-path', displayOrder: 71, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-061', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlMcVVvFCe3q3VmNyVs-HLAbwetV6LprF1304HZIo2-2CoFl0pb_11Jpcv1gBEpw1tQqrgUl6h4UqSpZ5XW2Np8Axuq9eR7RStlY1nHOWUCKCO-7r1C_cXsfI0sO4DS1hwqveI=s1015-k-no", width: 1015, height: 811, altKey: 'front-lawn', displayOrder: 72, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL with a location overlay; city and project attribution are intentionally unclaimed." }),
  record({ id: 'remote-gallery-062', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnuVddAyLYuaFwEF23LmAFTasqaoRzdS2v6vRH8I9VHjcXOuqvpCtZv1KUNKVSChPmcJNmoAK6qHjwtrfJk0qmRJv9Bvg-UBcxjNBv4jr2GC6hSbsRwH7ENKsAaKkrPOID1PHJR=s1193-k-no", width: 1193, height: 580, altKey: 'aerial-lawn', displayOrder: 73, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-063', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkS-4xriHQOHHRa3KqojOW8P4HFEUBb8AVS0N4I3rncZ2Tqy-Dde0PMCiB5Oho9j1e-ZxVbe5fs1x6q6riBigsEEmHrIVqD0KdTU7m-d33sZmEN2UG27CJjcr3hymoB4tbhm-cdQSWhzjFV=s773-k-no", width: 773, height: 580, altKey: 'striped-lawn', displayOrder: 74, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-064', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnrc5COJwcfNpfhKzrwSjUZ8yima1JWzrVvJWhSJ_X8Y_TEKjaA1i5p-mAb5DgrS3Dj19hpAA4T_tWpRYv2YIUxYLfD4t4LV-hlxciyu88Sz5fSvSHsyd7dBJQzCKM_KG0un7U=s901-k-no", width: 901, height: 676, altKey: 'striped-parking', displayOrder: 75, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-065', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkKT5FohncYPH1lBknv45FTGJ4-q225f9g8Py2KcyhqCsNmrWSW5BRdYCdPIkRXOGXkvT_3-OXg4FUFYdK0hO3j5VjbyiHs1MP9eP_I53Oqi1pTnrIW6LVNtP51W7CMKPRcNuoc=s1125-k-no", width: 1125, height: 580, altKey: 'wooded-lawn', displayOrder: 76, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-066', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnORMGesADVgYvLE-4Z_PQE5JvdEuMlqzfz6kBSG1bFLAlweWe9EqWXMI_DSU3WRBEhLK2N5pNSTktTA4tTUnM4vfi4ljVsw4QG4I_EwZ-Rtw9Fxqn9o1Bni4i4DEwTuCbaHAPRrw=s1193-k-no", width: 1193, height: 580, altKey: 'aerial-lawn', displayOrder: 77, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-067', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmaDiyIA_pLFsaA_SJV_kdgsjVyJrVfNJB6pSce64edJXbHd3-vvu1fGm25N76GyesQmfWdLovu8b-D0L13xIKY41lAO6GdWQ2XpxynhPzu7qOWXWC9Fnh7uUFSSkq_ILk5POaG=s773-k-no", width: 773, height: 580, altKey: 'striped-residential', displayOrder: 78, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'remote-gallery-068', src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm5nBsviS3zu_E8gEFO4j6dTBVjov2VRRP2FYGwu5PyGvv-sZxuNiss7_nWQDiGDATy7dvWTVzB5vRLJFeTbAdczmNUjKGimAoyIfDjfxeGxGoTPKbIzv94HCXvEkOjZkQvghtJ=s1354-k-no", width: 1016, height: 1354, altKey: 'striped-roadside', displayOrder: 79, homepageEligible: false, displayEligible: true, source: 'legacy-google-gallery', note: "Legacy Google-hosted gallery URL; source association does not verify authorship, service, city, customer or result." }),
  record({ id: 'comparison-asset-before-01', src: '/seasons/before-after/before1.webp', width: 726, height: 650, altKey: 'damaged-block-wall', displayOrder: 80, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Repository before/after asset; visually related to another image but not paired because the governed legacy record does not establish this source as the configured before side.", comparison: null }),
  record({ id: 'comparison-asset-before-02', src: '/seasons/before-after/before2.webp', width: 726, height: 650, altKey: 'unusable-image', displayOrder: 81, homepageEligible: false, displayEligible: false, source: 'repository-before-after', note: "Broken configured before asset for legacy pair 2; excluded from display and comparison.", comparison: null }),
  record({ id: 'comparison-asset-after-02', src: '/seasons/before-after/after2.webp', width: 726, height: 650, altKey: 'block-walls', displayOrder: 82, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Former legacy pair 2 after asset; displayed independently because the configured before asset is broken.", comparison: null }),
  record({ id: 'comparison-03-before', src: '/seasons/before-after/before3.webp', width: 798, height: 396, altKey: 'damaged-wood-wall', displayOrder: 83, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Explicit legacy pair registry plus matching scene continuity; service and city remain unverified.", comparison: { id: 'comparison-03', side: 'before' } }),
  record({ id: 'comparison-03-after', src: '/seasons/before-after/after3.webp', width: 798, height: 396, altKey: 'wood-wall', displayOrder: 84, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Explicit legacy pair registry plus matching scene continuity; service and city remain unverified.", comparison: { id: 'comparison-03', side: 'after' } }),
  record({ id: 'comparison-04-before', src: '/seasons/before-after/before4.webp', width: 1448, height: 1086, altKey: 'dense-house', displayOrder: 85, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Explicit legacy pair registry, matching house scene and embedded timestamp order; service and city remain unverified.", comparison: { id: 'comparison-04', side: 'before' } }),
  record({ id: 'comparison-04-after', src: '/seasons/before-after/after4.webp', width: 1448, height: 1086, altKey: 'cleared-house', displayOrder: 86, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Explicit legacy pair registry, matching house scene and embedded timestamp order; service and city remain unverified.", comparison: { id: 'comparison-04', side: 'after' } }),
  record({ id: 'comparison-05-before', src: '/seasons/before-after/before5.webp', width: 986, height: 486, altKey: 'dense-vegetation', displayOrder: 87, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Explicit legacy pair registry plus matching scene continuity; service and city remain unverified.", comparison: { id: 'comparison-05', side: 'before' } }),
  record({ id: 'comparison-05-after', src: '/seasons/before-after/after5.webp', width: 986, height: 486, altKey: 'cleared-backyard', displayOrder: 88, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Explicit legacy pair registry plus matching scene continuity; service and city remain unverified.", comparison: { id: 'comparison-05', side: 'after' } }),
  record({ id: 'comparison-06-before', src: '/seasons/before-after/before6.webp', width: 656, height: 323, altKey: 'sparse-lawn', displayOrder: 89, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Explicit legacy pair registry plus matching scene continuity; service and city remain unverified.", comparison: { id: 'comparison-06', side: 'before' } }),
  record({ id: 'comparison-06-after', src: '/seasons/before-after/after6.webp', width: 656, height: 323, altKey: 'green-lawn-fence', displayOrder: 90, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Explicit legacy pair registry plus matching scene continuity; service and city remain unverified.", comparison: { id: 'comparison-06', side: 'after' } }),
  record({ id: 'comparison-07-before', src: '/seasons/before-after/before7.webp', width: 984, height: 484, altKey: 'overgrown-blue-house', displayOrder: 91, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Explicit legacy pair registry plus matching scene continuity; service and city remain unverified.", comparison: { id: 'comparison-07', side: 'before' } }),
  record({ id: 'comparison-07-after', src: '/seasons/before-after/after7.webp', width: 985, height: 486, altKey: 'cleared-blue-house', displayOrder: 92, homepageEligible: false, displayEligible: true, source: 'repository-before-after', note: "Explicit legacy pair registry plus matching scene continuity; service and city remain unverified.", comparison: { id: 'comparison-07', side: 'after' } }),
] as const satisfies readonly WorkRecord[]

export const workComparisons = [
  { id: 'comparison-03', beforeId: 'comparison-03-before', afterId: 'comparison-03-after', evidence: 'legacy-pair-registry-and-matching-scene' },
  { id: 'comparison-04', beforeId: 'comparison-04-before', afterId: 'comparison-04-after', evidence: 'legacy-pair-registry-matching-scene-and-timestamps' },
  { id: 'comparison-05', beforeId: 'comparison-05-before', afterId: 'comparison-05-after', evidence: 'legacy-pair-registry-and-matching-scene' },
  { id: 'comparison-06', beforeId: 'comparison-06-before', afterId: 'comparison-06-after', evidence: 'legacy-pair-registry-and-matching-scene' },
  { id: 'comparison-07', beforeId: 'comparison-07-before', afterId: 'comparison-07-after', evidence: 'legacy-pair-registry-and-matching-scene' },
  { id: 'comparison-08', beforeId: 'local-gallery-07', afterId: 'local-gallery-08', evidence: 'legacy-pair-registry-and-matching-scene' },
] as const

export const HOME_WORK_LIMIT = 8
export const HOME_COMPARISON_LIMIT = 3
export const OUR_WORK_INITIAL_COUNT = 12
export const WORK_BATCH_SIZE = 12

export type PublicWorkItem = Readonly<{
  id: string
  src: string
  width: number
  height: number
  alt: Readonly<Record<WorkLocale, string>>
}>

export type PublicWorkComparison = Readonly<{
  id: string
  before: PublicWorkItem
  after: PublicWorkItem
}>

export function toPublicWorkItem(work: WorkRecord): PublicWorkItem {
  return {
    id: work.id,
    src: work.src,
    width: work.width,
    height: work.height,
    alt: WORK_ALT_TEXT[work.altKey],
  }
}

export function getHomepageWorkRecords(limit = HOME_WORK_LIMIT) {
  return workRecords
    .filter((work) => work.displayEligible && work.homepageEligible)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .slice(0, limit)
}

export function getOurWorkRecords() {
  return workRecords
    .filter((work) => work.displayEligible)
    .sort((a, b) => a.displayOrder - b.displayOrder)
}

export function getPublicWorkBatch(offset: number, limit = WORK_BATCH_SIZE) {
  return getOurWorkRecords().slice(offset, offset + limit).map(toPublicWorkItem)
}

export function getWorkComparisons(mode: 'home' | 'full'): PublicWorkComparison[] {
  const recordsById = new Map(workRecords.map((work) => [work.id, work]))
  const selected = mode === 'home'
    ? workComparisons.slice(0, HOME_COMPARISON_LIMIT)
    : workComparisons

  return selected.map((comparison) => {
    const before = recordsById.get(comparison.beforeId)
    const after = recordsById.get(comparison.afterId)
    if (!before || !after) throw new Error(`Unresolved comparison: ${comparison.id}`)
    return {
      id: comparison.id,
      before: toPublicWorkItem(before),
      after: toPublicWorkItem(after),
    }
  })
}
