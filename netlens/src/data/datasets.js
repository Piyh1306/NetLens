export const datasets = [
  {
    name: "CICIDS2017",
    year: 2017,
    records: "2.8M",
    attackTypes: 14,
    source: "Canadian Institute for Cybersecurity",
    description:
      "Realistic, labeled traffic covering brute force, DoS, DDoS, infiltration, botnet, and web attacks over five days.",
  },
  {
    name: "NSL-KDD",
    year: 2009,
    records: "148K",
    attackTypes: 4,
    source: "University of New Brunswick",
    description:
      "A refined version of KDD Cup 99 that removes redundant records for more reliable model evaluation.",
  },
  {
    name: "UNSW-NB15",
    year: 2015,
    records: "2.5M",
    attackTypes: 9,
    source: "Australian Centre for Cyber Security",
    description:
      "A hybrid of real modern traffic and synthesized attack activity, covering fuzzers, backdoors, exploits, and more.",
  },
  {
    name: "KDD Cup 99",
    year: 1999,
    records: "4.9M",
    attackTypes: 4,
    source: "DARPA / MIT Lincoln Lab",
    description:
      "The foundational IDS benchmark dataset, widely used historically despite known redundancy issues.",
  },
];
