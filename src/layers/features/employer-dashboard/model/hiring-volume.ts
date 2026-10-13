const monthAbbreviations = [
  "Oca", "Şub", "Mar", "Nis", "May", "Haz",
  "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara",
] as const;

export function getMonthAbbreviation(month: number): string {
  return monthAbbreviations[month - 1] ?? "—";
}

export function getHiringVolumeHeight(hireCount: number, scale: number): number {
  return Math.min(100, Math.max(0, hireCount) * 100 / Math.max(100, scale));
}
