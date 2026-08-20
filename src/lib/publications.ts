export type PubRole = "first" | "co-first" | "corresponding" | "co-author";
export type PubType = "article" | "review" | "abstract" | "book";

export type Publication = {
  id: string;
  year: number;
  title: string;
  authors: string;
  journal: string;
  volume?: string;
  pages?: string;
  doi?: string;
  pmid?: string;
  url?: string;
  citations?: number;
  role: PubRole;
  type: PubType;
  highlight?: boolean;
  highlightOrder?: number;
};

export const publications: Publication[] = [
  {
    id: "jgg-2026-kras",
    year: 2026,
    title:
      "Evolution of resistance to KRASG12C inhibitor in a non-small cell lung cancer responder",
    authors:
      "Xu J, Wang S, Wang Z, Huang J, Xie C, Zhao T, Niu Y, Cao Y, Ming C, Leung ELH",
    journal: "Journal of Genetics and Genomics",
    doi: "10.1016/j.jgg.2026.07.002",
    url: "https://www.sciencedirect.com/science/article/pii/S1673852726002353?via%3Dihub",
    role: "co-author",
    type: "article",
    highlight: true,
    highlightOrder: 1,
  },
  {
    id: "molpsych-2026-circtau6",
    year: 2026,
    title:
      "MAPT-derived circTau6 induces tau pathogenesis and neurodegeneration by encoding Tau variants",
    authors: "Jiang G, Wang D, Shao L, Mao X, Xiong X, Zhang D, Chen WN, Yuan H, Ming C, Zhao Y",
    journal: "Molecular Psychiatry",
    doi: "10.1038/s41380-026-03764-4",
    pmid: "42477443",
    role: "co-author",
    type: "article",
  },
  {
    id: "ijbs-2026-app",
    year: 2026,
    title:
      "APP deficiency ameliorates FAD presenilin 1 F105C and A246E mutations-induced mitochondrial dysfunction in human cortical neurons",
    authors:
      "Yen YH, Yuan F, Tang D, Luo JF, Ming C, Kang PJ, Su H, Chong CM, Zhang SC",
    journal: "International Journal of Biological Sciences",
    volume: "22(5)",
    pages: "2720-2735",
    doi: "10.7150/ijbs.120062",
    citations: 1,
    role: "co-author",
    type: "article",
  },
  {
    id: "bib-2025-twins",
    year: 2025,
    title:
      "Comprehensive assessment of whole-genome sequencing-based variant calling pipelines in monozygotic twins",
    authors: "Tan C*, Sun W*, Yu J, Fu J, Ming C#, Liu X#",
    journal: "Briefings in Bioinformatics",
    volume: "26(6)",
    pages: "bbaf652",
    doi: "10.1093/bib/bbaf652",
    citations: 2,
    role: "corresponding",
    type: "article",
    highlight: true,
    highlightOrder: 2,
  },
  {
    id: "advsci-2025-gap43",
    year: 2025,
    title:
      "Cryptic splicing of GAP43 mRNA is a novel hallmark of TDP-43-associated ALS and AD",
    authors:
      "Yang M, Wang Q, Kang D, Wang S, Jiang Y, Wang JZ, Ming C, Liu R, Gu J, Wang X",
    journal: "Advanced Science",
    pages: "e12054",
    doi: "10.1002/advs.202412054",
    pmid: "40583130",
    citations: 6,
    role: "co-author",
    type: "article",
  },
  {
    id: "ijbs-2025-atp6v1c1",
    year: 2025,
    title:
      "Integrated thermal proteome and thermal proximity co-aggregation profiling identifies ATP6V1C1 as a novel anti-cancer drug target",
    authors:
      "Zhang S, Li FM, Wang J, Dong Y, Luo JF, Huang XF, Li Y, Zhu GY, Qi SQ, Shen HM, Zhong Q, Ming C, Zeng KW, Yao XJ, Tan CSH, Lu JH",
    journal: "International Journal of Biological Sciences",
    volume: "21(7)",
    pages: "3197-3213",
    doi: "10.7150/ijbs.106843",
    pmid: "40384877",
    citations: 6,
    role: "co-author",
    type: "article",
  },
  {
    id: "gigascience-2025-msc",
    year: 2025,
    title:
      "Unsupervised multiscale clustering of single-cell transcriptomes to identify hierarchical structures of cell subtypes",
    authors: "Song WM, Ming C, Forst CV, Zhang B",
    journal: "GigaScience",
    volume: "14",
    pages: "giaf111",
    doi: "10.1093/gigascience/giaf111",
    pmid: "41066207",
    citations: 3,
    role: "co-author",
    type: "article",
  },
  {
    id: "bmcph-2025-mafld",
    year: 2025,
    title:
      "Multifaceted environmental factors linked to metabolic dysfunction-associated fatty liver disease: an environment-wide association study",
    authors:
      "Dong R, Tian T, Ming C, Zhang R, Xue H, Luo Z, Shen C, Ni Y, Shao J",
    journal: "BMC Public Health",
    volume: "25",
    pages: "709",
    doi: "10.1186/s12889-025-21930-1",
    pmid: "39979906",
    citations: 3,
    role: "co-author",
    type: "article",
  },
  {
    id: "narcancer-2024-tfeb",
    year: 2024,
    title:
      "Integration of transcriptional and epigenetic regulation of TFEB reveals its dual functional roles in Pan-cancer",
    authors: "Luo JF, Wang S, Fu J, Xu P, Shao N, Lu JH, Ming C#",
    journal: "NAR Cancer",
    volume: "6(4)",
    pages: "zcae043",
    doi: "10.1093/narcan/zcae043",
    pmid: "39554489",
    citations: 4,
    role: "corresponding",
    type: "article",
    highlight: true,
    highlightOrder: 3,
  },
  {
    id: "neuron-2024-ptau217",
    year: 2024,
    title:
      "P-tau217 correlates with neurodegeneration in Alzheimer’s disease, and targeting p-tau217 with immunotherapy ameliorates murine tauopathy",
    authors:
      "Zhang D*, Zhang W*, Ming C*, Gao X, Yuan H, Lin X, Mao X, Wang C, Guo X, Du Y, Shao L, Yang R, Lin Z, Wu X, Huang TY, Wang Z, Zhang YW, Xu H, Zhao Y#",
    journal: "Neuron",
    volume: "112(10)",
    pages: "1676-1693.e12",
    doi: "10.1016/j.neuron.2024.02.017",
    pmid: "38513667",
    citations: 77,
    role: "co-first",
    type: "article",
    highlight: true,
    highlightOrder: 4,
  },
  {
    id: "front-aging-2023-cnv",
    year: 2023,
    title:
      "Effects of copy number variations on longevity in late-onset Alzheimer’s disease patients: insights from a causality network analysis",
    authors: "Hao Y, Li C, Wang H, Ming C#",
    journal: "Frontiers in Aging Neuroscience",
    volume: "15",
    pages: "1241412",
    doi: "10.3389/fnagi.2023.1241412",
    pmid: "38020759",
    citations: 3,
    role: "corresponding",
    type: "article",
    highlight: true,
    highlightOrder: 5,
  },
  {
    id: "alzdem-2023-methylomic",
    year: 2023,
    title:
      "Genome-wide methylomic regulation of multiscale gene networks in Alzheimer’s disease",
    authors:
      "Wang E, Wang M, Guo L, Fullard JF, Micallef C, Bendl J, Song WM, Ming C, Huang Y, Li Y, Yu K, Peng J, Bennett DA, De Jager PL, Roussos P, Haroutunian V, Zhang B",
    journal: "Alzheimer’s & Dementia",
    volume: "19(8)",
    pages: "3472-3495",
    doi: "10.1002/alz.12969",
    pmid: "36811307",
    citations: 26,
    role: "co-author",
    type: "article",
  },
  {
    id: "alzdem-2022-cnv",
    year: 2022,
    title:
      "Whole genome sequencing-based copy number variations reveal novel pathways and targets in Alzheimer’s disease",
    authors:
      "Ming C, Wang M, Wang Q, Neff R, Wang E, Shen Q, Reddy JS, Wang X, Allen M, Ertekin-Taner N, De Jager PL, Bennett DA, Haroutunian V, Schadt E, Zhang B#",
    journal: "Alzheimer’s & Dementia",
    volume: "18(10)",
    pages: "1846-1867",
    doi: "10.1002/alz.12507",
    pmid: "34918867",
    citations: 31,
    role: "first",
    type: "article",
    highlight: true,
    highlightOrder: 6,
  },
  {
    id: "mol-neurodeg-2022-sc",
    year: 2022,
    title:
      "Guidelines for bioinformatics of single-cell sequencing data analysis in Alzheimer’s disease: review, recommendation, implementation and application",
    authors:
      "Song WM*, Wang M*, Ming C*, Wang Q*, Zhou X*, Xu P*, Zhang B*",
    journal: "Molecular Neurodegeneration",
    doi: "10.1186/s13024-022-00517-z",
    pmid: "35236372",
    citations: 111,
    role: "co-first",
    type: "review",
    highlight: true,
    highlightOrder: 7,
  },
  {
    id: "alzdem-2022-metabolomics",
    year: 2022,
    title:
      "Integrative metabolomics-genomics approach reveals key metabolic pathways and regulators of Alzheimer’s disease",
    authors:
      "Horgusluoglu-Moloch E, Neff R, Song WM, Wang M, Wang Q, Arnold M, Krumsiek J, Galindo-Prieto B, Ming C, Nho K, Kaddurah-Daouk R, Zhang B",
    journal: "Alzheimer’s & Dementia",
    doi: "10.1002/alz.12468",
    pmid: "34757660",
    citations: 191,
    role: "co-author",
    type: "article",
  },
  {
    id: "sciadv-2021-subtyping",
    year: 2021,
    title:
      "Molecular subtyping of Alzheimer’s disease using RNA sequencing data reveals novel mechanisms and targets",
    authors:
      "Neff RA, Wang M, Vatansever S, Guo L, Ming C, Wang Q, Wang E, Horgusluoglu-Moloch E, Song WM, Li A, Castranio E, TCW J, Ho L, Goate A, Fossati V, Noggle S, Gandy S, Ehrlich ME, Katsel P, Schadt E, Cai D, Brennand KJ, Haroutunian V, Zhang B",
    journal: "Science Advances",
    volume: "7(2)",
    pages: "eabb5398",
    doi: "10.1126/sciadv.abb5398",
    pmid: "33523961",
    citations: 316,
    role: "co-author",
    type: "article",
  },
  {
    id: "neuron-2021-network",
    year: 2021,
    title:
      "Transformative network modeling of multi-omics data reveals detailed circuits, key regulators, and potential therapeutics for Alzheimer’s disease",
    authors:
      "Wang M, Li A, Sekiya M, Beckmann ND, Quan X, Schrode N, Fernando MB, Yu A, Zhu L, Cao J, Lyu L, Horgusluoglu E, Wang Q, Guo L, Wang YS, Neff R, Song WM, Wang E, Shen Q, Zhou X, Ming C, Ho SM, Vatansever S, Schadt E, Brennand KJ, Zhang B",
    journal: "Neuron",
    volume: "109(2)",
    pages: "257-272.e14",
    doi: "10.1016/j.neuron.2020.11.002",
    pmid: "33238137",
    citations: 195,
    role: "co-author",
    type: "article",
  },
  {
    id: "jmv-2021-glucose",
    year: 2021,
    title:
      "Minimized glycemic fluctuation decreases the risk of severe illness and death in patients with COVID-19",
    authors: "Leng Y, Chen M, Dai M, Wu Y, Lei S, Yan K, Shao NY, Xia Z, Liu M",
    journal: "Journal of Medical Virology",
    doi: "10.1002/jmv.26584",
    pmid: "33038012",
    citations: 18,
    role: "co-author",
    type: "article",
  },
  {
    id: "nature-2020-ifitm3",
    year: 2020,
    title: "The innate immunity protein IFITM3 modulates γ-secretase in Alzheimer’s disease",
    authors:
      "Hur JY, Frost GR, Wu X, Crump C, Pan SJ, Wong E, Barros M, Li T, Nie P, Wang JC, TCW J, Guo L, McKenzie A, Ming C, Zhou X, Wang M, Sagi Y, Kim Y, Sadleir K, Trinh I, Rissman R, Vassar R, Zhang B, Johnson D, Masliah E, Goate A, Zhai Y, Renton A, Esposito B",
    journal: "Nature",
    volume: "586(7831)",
    pages: "735-740",
    doi: "10.1038/s41586-020-2681-2",
    pmid: "32879487",
    citations: 430,
    role: "co-author",
    type: "article",
  },
  {
    id: "alzdem-2020-abstract",
    year: 2020,
    title:
      "Functional molecular network models for the genetic risk factors of Alzheimer’s disease: Genetics/omics and systems biology",
    authors: "Ming C, Marcora E, Wang M, Renton AE, Wang E, Goate A, Zhang B",
    journal: "Alzheimer’s & Dementia",
    volume: "16",
    pages: "e046556",
    role: "first",
    type: "abstract",
  },
  {
    id: "cancer-control-2020",
    year: 2020,
    title:
      "Patients with lung cancer have high susceptibility of COVID-19: a retrospective study in Wuhan, China",
    authors: "Dai MY, Chen Z, Leng Y, Wu M, Liu Y, Zhou F, Ming C, Shao N, Liu M",
    journal: "Cancer Control",
    doi: "10.1177/1073274820960467",
    citations: 27,
    role: "co-author",
    type: "article",
  },
  {
    id: "mbe-2019-monkey",
    year: 2019,
    title:
      "The origin and population history of the endangered golden snub-nosed monkey (Rhinopithecus roxellana)",
    authors:
      "Kuang WM, Ming C, Li HP, Wu H, Frantz L, Roos C, Zhang YP, Zhang CL, Jia T, Yang JY, Yu L",
    journal: "Molecular Biology and Evolution",
    volume: "36(3)",
    pages: "487-499",
    doi: "10.1093/molbev/msy220",
    pmid: "30481341",
    citations: 34,
    role: "co-author",
    type: "article",
  },
  {
    id: "scidata-2018-mountsinai",
    year: 2018,
    title:
      "The Mount Sinai cohort of large-scale genomic, transcriptomic and proteomic data in Alzheimer’s disease",
    authors:
      "Wang M, Beckmann ND, Roussos P, Wang E, Zhou X, Wang Q, Ming C, Neff R, Ma W, Fullard JF, Hauberg ME, Bendl J, Peters MA, Logsdon B, Katsel P, Haroutunian V, Schadt E, Zhang B",
    journal: "Scientific Data",
    volume: "5",
    pages: "180185",
    doi: "10.1038/sdata.2018.185",
    pmid: "30204156",
    citations: 528,
    role: "co-author",
    type: "article",
  },
  {
    id: "mbe-2018-rat",
    year: 2018,
    title:
      "Out of southern East Asia of the brown rat revealed by large-scale genome sequencing",
    authors:
      "Zeng L*, Ming C*, Li Y, Su LY, Su YH, Otecko NO, Dalecky A, Donnellan S, Yao YG, Li HP, Wu DD, Zhang YP",
    journal: "Molecular Biology and Evolution",
    volume: "35(1)",
    pages: "149-158",
    doi: "10.1093/molbev/msx276",
    pmid: "29087519",
    citations: 58,
    role: "co-first",
    type: "article",
    highlight: true,
    highlightOrder: 8,
  },
  {
    id: "mbe-2017-domestication",
    year: 2017,
    title:
      "Rapid evolution of genes involved in learning and energy metabolism for domestication of the laboratory rat",
    authors:
      "Zeng L, Ming C, Li Y, Su LY, Su YH, Otecko NO, Liu HQ, Wang MS, Yao YG, Li HP, Wu DD, Zhang YP",
    journal: "Molecular Biology and Evolution",
    volume: "34(12)",
    pages: "3148-3153",
    doi: "10.1093/molbev/msx238",
    pmid: "28961982",
    citations: 23,
    role: "co-author",
    type: "article",
  },
  {
    id: "book-2017-bioinformatics",
    year: 2017,
    title: "Bioinformatics Computing and Software, Chapter 3",
    authors: "Gao F, Ming C, Li H",
    journal: "China Science Publishing & Media Ltd.",
    role: "co-author",
    type: "book",
  },
  {
    id: "pnas-2016-vertebrates",
    year: 2016,
    title:
      "Large numbers of vertebrates began rapid population decline in the late 19th century",
    authors:
      "Li H, Xiang-yu J, Dai G, Gu Z, Ming C, Yang Z, Ryder OA, Li WH, Fu YX, Zhang YP",
    journal: "Proceedings of the National Academy of Sciences",
    volume: "113(49)",
    pages: "14079-14084",
    doi: "10.1073/pnas.1616804113",
    pmid: "27872315",
    citations: 78,
    role: "co-author",
    type: "article",
  },
  {
    id: "g3-2016-fasteprr",
    year: 2016,
    title:
      "New software for the fast estimation of population recombination rates (FastEPRR) in the genomic era",
    authors: "Gao F, Ming C, Hu W, Li H",
    journal: "G3: Genes, Genomes, Genetics",
    volume: "6(6)",
    pages: "1563-1571",
    doi: "10.1534/g3.116.028233",
    pmid: "27172192",
    citations: 174,
    role: "co-author",
    type: "article",
  },
];

export const scholarUrl =
  "https://scholar.google.com/citations?user=ldh8w70AAAAJ&hl=en";

export const citationTotal = 2436;

export const selectedPapers = publications
  .filter((p) => p.highlight)
  .sort((a, b) => (a.highlightOrder ?? 99) - (b.highlightOrder ?? 99));
