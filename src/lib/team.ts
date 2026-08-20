export type TeamMember = {
  id: string;
  initials: string;
  en: string;
  zh: string;
  roleEn: string;
  roleZh: string;
  office?: string;
  phone?: string;
  email?: string;
};

export const team: TeamMember[] = [
  {
    id: "hao",
    initials: "HY",
    en: "Hao Yanan",
    zh: "郝亚楠",
    roleEn: "Postdoctoral Fellow",
    roleZh: "博士后研究员",
    office: "E12-2048",
    phone: "+853 8822 2948",
    email: "yananhao@um.edu.mo",
  },
  {
    id: "luo",
    initials: "LJ",
    en: "Luo Jingfang",
    zh: "骆静方",
    roleEn: "Postdoctoral Fellow",
    roleZh: "博士后研究员",
  },
  {
    id: "li",
    initials: "LC",
    en: "Li Chuhao",
    zh: "李楚豪",
    roleEn: "PhD Student",
    roleZh: "博士生",
    office: "E12-3044",
  },
  {
    id: "wang",
    initials: "WS",
    en: "Wang Shijia",
    zh: "王世佳",
    roleEn: "PhD Student",
    roleZh: "博士生",
  },
  {
    id: "yu",
    initials: "YJ",
    en: "Yu Jiaxin",
    zh: "余嘉鑫",
    roleEn: "PhD Student",
    roleZh: "博士生",
  },
  {
    id: "guo",
    initials: "GM",
    en: "Guo Meng",
    zh: "郭梦",
    roleEn: "PhD Student",
    roleZh: "博士生",
  },
  {
    id: "fu",
    initials: "FJ",
    en: "Fu Jiajing",
    zh: "付家静",
    roleEn: "PhD Student",
    roleZh: "博士生",
  },
  {
    id: "fan",
    initials: "FH",
    en: "Fan Hongzeng",
    zh: "樊洪增",
    roleEn: "Research Assistant",
    roleZh: "研究助理",
  },
];
