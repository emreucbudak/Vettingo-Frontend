export function CandidateSkillRadar() {
  return (
    <section className="flex h-64 flex-col rounded border border-[#c5c6cd] bg-white p-4">
      <h3 className="mb-2 text-lg font-medium leading-6 text-[#0b1c30]">Yetkinlik Radar Grafiği</h3>
      <div className="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
        <div aria-hidden="true" className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #091426 1px, transparent 0)", backgroundSize: "16px 16px" }} />
        <p className="z-10 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          [Grafik Görselleştirme Alanı]
        </p>
      </div>
    </section>
  );
}
