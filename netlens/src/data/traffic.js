export const trafficByHour = [
  { time: "00:00", normal: 420, suspicious: 30, blocked: 8 },
  { time: "03:00", normal: 310, suspicious: 22, blocked: 5 },
  { time: "06:00", normal: 380, suspicious: 40, blocked: 12 },
  { time: "09:00", normal: 920, suspicious: 85, blocked: 24 },
  { time: "12:00", normal: 1180, suspicious: 110, blocked: 31 },
  { time: "15:00", normal: 1340, suspicious: 96, blocked: 28 },
  { time: "18:00", normal: 1050, suspicious: 130, blocked: 40 },
  { time: "21:00", normal: 760, suspicious: 70, blocked: 19 },
];

export const trafficComposition = [
  { name: "Normal Traffic", value: 82, color: "#22C55E" },
  { name: "Suspicious Traffic", value: 13, color: "#F59E0B" },
  { name: "Blocked Attacks", value: 5, color: "#EF4444" },
];

export const attackCategoryBar = [
  { name: "DoS", count: 42 },
  { name: "DDoS", count: 18 },
  { name: "SQLi", count: 27 },
  { name: "Brute Force", count: 63 },
  { name: "Phishing", count: 35 },
  { name: "Port Scan", count: 88 },
  { name: "MITM", count: 12 },
];

export const recentAlerts = [
  { id: 1, ip: "104.28.44.19", type: "Port Scanning", severity: "Low", time: "2 min ago", status: "Monitoring" },
  { id: 2, ip: "185.220.101.4", type: "Brute Force", severity: "High", time: "6 min ago", status: "Blocked" },
  { id: 3, ip: "45.155.205.87", type: "SQL Injection", severity: "Critical", time: "11 min ago", status: "Blocked" },
  { id: 4, ip: "91.243.85.22", type: "DDoS Attempt", severity: "Critical", time: "18 min ago", status: "Blocked" },
  { id: 5, ip: "192.168.1.114", type: "Anomalous Traffic", severity: "Medium", time: "24 min ago", status: "Monitoring" },
  { id: 6, ip: "203.0.113.55", type: "Phishing Callback", severity: "High", time: "31 min ago", status: "Blocked" },
];

const protocols = ["TCP", "UDP", "HTTP", "HTTPS", "ICMP", "DNS"];
const statuses = ["Normal", "Suspicious", "Blocked"];
const threatLevels = ["Low", "Medium", "High", "Critical"];

function randomIp() {
  return `${Math.floor(Math.random() * 223) + 1}.${Math.floor(
    Math.random() * 255
  )}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
}

export function generatePacket(id) {
  const status = statuses[Math.floor(Math.random() * (Math.random() > 0.75 ? statuses.length : 1))];
  const threat =
    status === "Normal" ? "Low" : threatLevels[Math.floor(Math.random() * threatLevels.length)];
  return {
    id,
    ip: randomIp(),
    protocol: protocols[Math.floor(Math.random() * protocols.length)],
    status,
    threat,
    time: new Date().toLocaleTimeString(),
  };
}

export const weeklyAttacks = [
  { day: "Mon", attacks: 62 },
  { day: "Tue", attacks: 48 },
  { day: "Wed", attacks: 91 },
  { day: "Thu", attacks: 74 },
  { day: "Fri", attacks: 103 },
  { day: "Sat", attacks: 55 },
  { day: "Sun", attacks: 39 },
];

export const monthlyAttacks = [
  { month: "Feb", attacks: 980 },
  { month: "Mar", attacks: 1120 },
  { month: "Apr", attacks: 890 },
  { month: "May", attacks: 1340 },
  { month: "Jun", attacks: 1560 },
  { month: "Jul", attacks: 1290 },
];

export const topAttackingIps = [
  { ip: "185.220.101.4", attempts: 342, country: "Unknown (Tor Exit)" },
  { ip: "45.155.205.87", attempts: 287, country: "Netherlands" },
  { ip: "91.243.85.22", attempts: 214, country: "Romania" },
  { ip: "103.94.16.201", attempts: 178, country: "Vietnam" },
  { ip: "203.0.113.55", attempts: 132, country: "Unknown" },
];
