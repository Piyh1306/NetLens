export const attacks = [
  {
    id: "dos",
    name: "DoS Attack",
    short: "Denial of Service",
    risk: "High",
    description:
      "Floods a single target with traffic or requests from one source until it can no longer respond to legitimate users.",
    prevention: [
      "Rate limiting on incoming requests",
      "Traffic filtering at the network edge",
      "Redundant server infrastructure",
    ],
  },
  {
    id: "ddos",
    name: "DDoS Attack",
    short: "Distributed Denial of Service",
    risk: "Critical",
    description:
      "Coordinates thousands of compromised devices to overwhelm a target simultaneously, making mitigation far harder than a single-source DoS.",
    prevention: [
      "Cloud-based DDoS scrubbing services",
      "Anycast network distribution",
      "Traffic anomaly baselining",
    ],
  },
  {
    id: "sql-injection",
    name: "SQL Injection",
    short: "Database exploitation",
    risk: "Critical",
    description:
      "Injects malicious SQL statements into input fields to read, modify, or delete data the application was never meant to expose.",
    prevention: [
      "Parameterized queries / prepared statements",
      "Strict input validation and sanitization",
      "Least-privilege database accounts",
    ],
  },
  {
    id: "brute-force",
    name: "Brute Force",
    short: "Credential guessing",
    risk: "Medium",
    description:
      "Systematically tries username and password combinations until it finds one that grants access to an account or system.",
    prevention: [
      "Account lockout after failed attempts",
      "Multi-factor authentication",
      "CAPTCHA on login forms",
    ],
  },
  {
    id: "phishing",
    name: "Phishing",
    short: "Social engineering",
    risk: "High",
    description:
      "Impersonates a trusted source through email or fake websites to trick users into revealing credentials or installing malware.",
    prevention: [
      "Email filtering and DMARC/SPF/DKIM",
      "Security awareness training",
      "Verified sender indicators",
    ],
  },
  {
    id: "malware",
    name: "Malware",
    short: "Malicious software",
    risk: "High",
    description:
      "Software designed to infiltrate, damage, or gain unauthorized access to a system, ranging from spyware to trojans.",
    prevention: [
      "Endpoint detection and response (EDR)",
      "Regular signature and behavior scanning",
      "Application allow-listing",
    ],
  },
  {
    id: "ransomware",
    name: "Ransomware",
    short: "Data extortion",
    risk: "Critical",
    description:
      "Encrypts a victim's files and demands payment for the decryption key, often spreading laterally across a network first.",
    prevention: [
      "Immutable, offline backups",
      "Network segmentation",
      "Patch management for known exploits",
    ],
  },
  {
    id: "port-scanning",
    name: "Port Scanning",
    short: "Reconnaissance",
    risk: "Low",
    description:
      "Probes a range of ports on a target host to discover open services and identify potential entry points before an attack.",
    prevention: [
      "Firewall rules that close unused ports",
      "Intrusion detection alerts on scan patterns",
      "Port knocking for sensitive services",
    ],
  },
  {
    id: "mitm",
    name: "Man-in-the-Middle",
    short: "Traffic interception",
    risk: "High",
    description:
      "Secretly intercepts and possibly alters communication between two parties who believe they are talking directly to each other.",
    prevention: [
      "End-to-end TLS encryption",
      "Certificate pinning",
      "Avoiding untrusted public Wi-Fi for sensitive tasks",
    ],
  },
  {
    id: "botnet",
    name: "Botnet",
    short: "Compromised device network",
    risk: "Critical",
    description:
      "A network of infected devices controlled remotely by an attacker, commonly used to launch DDoS attacks or send spam at scale.",
    prevention: [
      "Firmware and OS patching on IoT devices",
      "Outbound traffic monitoring for C2 patterns",
      "Default credential rotation",
    ],
  },
];

export const riskColor = {
  Low: "text-secondary border-secondary/40 bg-secondary/10",
  Medium: "text-amber-400 border-amber-400/40 bg-amber-400/10",
  High: "text-danger border-danger/40 bg-danger/10",
  Critical: "text-danger border-danger/60 bg-danger/20",
};
