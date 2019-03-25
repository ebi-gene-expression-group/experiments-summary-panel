import URI from 'urijs'

const bulkExperiments = [
  {
    experimentType: `MICROARRAY_ANY`,
    experimentAccession: `E-GEOD-40611`,
    experimentDescription: `Transcription profiling by array of parotid tissue from Primary Sjögren’s Syndrome and controls`,
    lastUpdate: `06-03-2019`,
    numberOfAssays: 49,
    numberOfContrasts: 2,
    species: `Homo sapiens`,
    kingdom: `animals`,
    experimentalFactors: [
      `block`,
      `disease`
    ],
    arrayDesigns: [
      `A-AFFY-44`
    ],
    arrayDesignNames: [
      `Affymetrix GeneChip Human Genome U133 Plus 2.0 [HG-U133_Plus_2]`
    ]
  },
  {
    experimentType: `RNASEQ_MRNA_BASELINE`,
    experimentAccession: `E-MTAB-451`,
    experimentDescription: `RNA-Seq of Schistosoma mansoni (flatworms) larva and adult individuals at different life-stages`,
    lastUpdate: `06-10-2018`,
    numberOfAssays: 11,
    numberOfContrasts: 0,
    species: `Schistosoma mansoni`,
    kingdom: `animals`,
    experimentalFactors: [
      `developmental stage`
    ],
    arrayDesigns: [],
    arrayDesignNames: []
  },
  {
    experimentType: `RNASEQ_MRNA_BASELINE`,
    experimentAccession: `E-MTAB-2836`,
    experimentDescription: `RNA-seq of coding RNA from tissue samples of 122 human individuals representing 32 different tissues`,
    lastUpdate: `05-10-2018`,
    numberOfAssays: 200,
    numberOfContrasts: 0,
    species: `Homo sapiens`,
    kingdom: `animals`,
    experimentalFactors: [
      `organism part`
    ],
    arrayDesigns: [],
    arrayDesignNames: []
  },
  {
    experimentType: `RNASEQ_MRNA_BASELINE`,
    experimentAccession: `E-MTAB-4401`,
    experimentDescription: `Transcription profiling by high throughput sequencing of different tissues from Brachypodium distachyon (Bd21 inbred line)`,
    lastUpdate: `05-10-2018`,
    numberOfAssays: 11,
    numberOfContrasts: 0,
    species: `Brachypodium distachyon`,
    kingdom: `plants`,
    experimentalFactors: [
      `organism part`
    ],
    arrayDesigns: [],
    arrayDesignNames: []
  },
  {
    experimentType: `RNASEQ_MRNA_DIFFERENTIAL`,
    experimentAccession: `E-MTAB-1913`,
    experimentDescription: `Salt stress in salt sensitive Oryza sativa Indica group IR29 `,
    lastUpdate: `04-10-2018`,
    numberOfAssays: 30,
    numberOfContrasts: 15,
    species: `Oryza sativa Indica group`,
    kingdom: `plants`,
    experimentalFactors: [
      `growth condition`,
      `time`
    ],
    arrayDesigns: [],
    arrayDesignNames: []
  },
  {
    experimentType: `MICROARRAY_ANY`,
    experimentAccession: `E-MAXD-6`,
    experimentDescription: `Transcription profiling by array of Drosophila larvae after parasitoid attack`,
    lastUpdate: `04-10-2018`,
    numberOfAssays: 89,
    numberOfContrasts: 9,
    species: `Drosophila melanogaster`,
    kingdom: `animals`,
    experimentalFactors: [
      `infect`,
      `time`
    ],
    arrayDesigns: [
      `A-AFFY-17`
    ],
    arrayDesignNames: [
      `Affymetrix GeneChip Drosophila Genome [DrosGenome1]`
    ]
  },
  {
    experimentType: `MICROARRAY_ANY`,
    experimentAccession: `E-MEXP-1810`,
    experimentDescription: `Transcription profiling by array of C. elegans isolates treated with dauer larva-inducing pheromone`,
    lastUpdate: `25-09-2018`,
    numberOfAssays: 12,
    numberOfContrasts: 2,
    species: `Caenorhabditis elegans`,
    kingdom: `animals`,
    experimentalFactors: [
      `compound`,
      `strain`
    ],
    arrayDesigns: [
      `A-AFFY-60`
    ],
    arrayDesignNames: [
      `Affymetrix GeneChip C. elegans Genome Array [Celegans]`
    ]
  },
  {
    experimentType: `MICROARRAY_ANY`,
    experimentAccession: `E-GEOD-43049`,
    experimentDescription: `Caco-2 cells: cultured in conventional vs apical anaerobic conditions`,
    lastUpdate: `25-09-2018`,
    numberOfAssays: 12,
    numberOfContrasts: 1,
    species: `Homo sapiens`,
    kingdom: `animals`,
    experimentalFactors: [
      `growth condition`
    ],
    arrayDesigns: [
      `A-AGIL-28`
    ],
    arrayDesignNames: [
      `Agilent Whole Human Genome Microarray 4x44K 014850 G4112F (85 cols x 532 rows)`
    ]
  }
]

const singleCellExperiments = [
  {
    experimentType: `SINGLE_CELL_RNASEQ_MRNA_BASELINE`,
    experimentAccession: `E-EHCA-2`,
    experimentDescription: `Melanoma infiltration of stromal and immune cells`,
    lastUpdate: `16-11-2018`,
    numberOfAssays: 6638,
    numberOfContrasts: 0,
    species: `Mus musculus`,
    kingdom: `animals`,
    experimentalFactors: [
      `single cell identifier`,
      `sampling site`,
      `time`
    ],
    arrayDesigns: [],
    arrayDesignNames: []
  },
  {
    experimentType: `SINGLE_CELL_RNASEQ_MRNA_BASELINE`,
    experimentAccession: `E-MTAB-5061`,
    experimentDescription: `Single-cell RNA-seq analysis of human pancreas from healthy individuals and type 2 diabetes patients`,
    lastUpdate: `11-10-2018`,
    numberOfAssays: 3514,
    numberOfContrasts: 0,
    species: `Homo sapiens`,
    kingdom: `animals`,
    experimentalFactors: [
      `single cell identifier`,
      `disease`
    ],
    arrayDesigns: [],
    arrayDesignNames: []
  },
  {
    experimentType: `SINGLE_CELL_RNASEQ_MRNA_BASELINE`,
    experimentAccession: `E-GEOD-99058`,
    experimentDescription: `Single cell RNA-seq of mouse brain astrocyte transcriptomes`,
    lastUpdate: `11-10-2018`,
    numberOfAssays: 250,
    numberOfContrasts: 0,
    species: `Mus musculus`,
    kingdom: `animals`,
    experimentalFactors: [
      `single cell identifier`
    ],
    arrayDesigns: [],
    arrayDesignNames: []
  }
]

const buildFeaturedExperimentsCards = (host) => {
  const linkToImage = (imgFileName) =>
    URI(`resources/images/experiments-summary/${imgFileName}.png`, host).toString()
  const linkToExperiment = (accession) =>
    URI(`experiments/${accession}`, host).toString()
  const linkToExperimentSet = (keyword) =>
    URI(`/experiments`, host).search({experimentSet: keyword}).toString()

  return [
    {
      iconType: `image`,
      iconSrc: linkToImage(`encode`),
      description: {
      //   text: ``,
        url: linkToExperimentSet(`ENCODE`)
      },
      content: [
        {
          text: `Human tissues`,
          url: linkToExperiment(`E-MTAB-4344`)
        },
        {
          text: `Human cells`,
          url: linkToExperiment(`E-GEOD-26284`)
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`blueprint`),
      description: {
      //   text: ``,
        url: linkToExperimentSet(`BLUEPRINT`)
      },
      content: [
        {
          text: `Plasma cells of tonsil`,
          url: linkToExperiment(`E-MTAB-4754`)
        },
        {
          text: `Rare types of haemopoetic cells`,
          url: linkToExperiment(`E-MTAB-3819`)
        },
        {
          text: `Common types of haemopoetic cells`,
          url: linkToExperiment(`E-MTAB-3827`)
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`fantom`),
      description: {
      //   text: ``,
        url: linkToExperimentSet(`FANTOM5`)
      },
      content: [
        {
          text: `Mouse cells`,
          url: linkToExperiment(`E-MTAB-3578`)
        },
        {
          text: `Mouse tissues`,
          url: linkToExperiment(`E-MTAB-3579`)
        },
        {
          text: `Human tissues`,
          url: linkToExperiment(`E-MTAB-3358`)
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`human_protein_atlas`),
      description: {
      //   text: ``,
        url: linkToExperiment(`E-PROT-3`)
      },
      content: [
        {
          text: `Human tissues`,
          url: linkToExperiment(`E-PROT-3`)
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`ccle`),
      description: {
      //   text: ``,
        url: linkToExperiment(`E-MTAB-2770`)
      },
      content: [
        {
          text: `Cancer Cell Line Encyclopedia`,
          url: linkToExperiment(`E-MTAB-2770`)
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`hipsci`),
      description: {
      //   text: ``,
        url: linkToExperimentSet(`HipSci`)
      },
      content: [
        {
          text: `Proteomics – Cell lines`,
          url: linkToExperiment(`E-PROT-5`)
        },
        {
          text: `RNA – Cell lines`,
          url: linkToExperiment(`E-MTAB-4748`)
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`gtex`),
      description: {
      //   text: ``,
        url: linkToExperiment(`E-MTAB-5214`)
      },
      content: [
        {
          text: `Human tissues`,
          url: linkToExperiment(`E-MTAB-5214`)
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`pcawg`),
      description: {
      //   text: ``,
        url: linkToExperimentSet(`Pan-Cancer`)
      },
      content: [
        {
          text: `PCAWG by disease`,
          url: linkToExperiment(`E-MTAB-5200`)
        },
        {
          text: `PCAWG by individual`,
          url: linkToExperiment(`E-MTAB-5423`)
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`wtsi_mgh_cancerrxgene`),
      description: {
      //   text: ``,
        url: linkToExperiment(`E-MTAB-3983`)
      },
      content: [
        {
          text: `Genomics of Drug Sensitivity in Cancer Project – Cell lines`,
          url: linkToExperiment(`E-MTAB-3983`)
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`hdbr`),
      description: {
      //   text: ``,
        url: linkToExperiment(`E-MTAB-4840`)
      },
      content: [
        {
          text: `Prenatal brain development`,
          url: linkToExperiment(`E-MTAB-4840`)
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`baseline`),
      description: {
      //   text: ``,
        url: URI(`baseline/experiments`, host).toString()
      },
      content: [
        {
          text: `Baseline experiments`,
          url: URI(`baseline/experiments`, host).toString()
        }
      ]
    },
    {
      iconType: `image`,
      iconSrc: linkToImage(`gramene`),
      description: {
      //   text: ``,
        url: URI(`plant/experiments`, host).toString()
      },
      content: [
        {
          text: `Plant experiments`,
          url: URI(`plant/experiments`, host).toString()
        }
      ]
    }
  ]
}

export { bulkExperiments, singleCellExperiments, buildFeaturedExperimentsCards }
