import Image from 'next/image';

export default function RwandaCollabBanner() {
  return (
    <section className="bg-white border-b border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
          In Collaboration With
        </p>
        <Image
          src="/images/hilltop_alu_combined_sameheight.webp"
          alt="Hilltop Global Group in collaboration with African Leadership University"
          width={360}
          height={64}
          className="h-12 w-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
