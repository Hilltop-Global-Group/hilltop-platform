import Image from 'next/image';

interface SplitSectionProps {
  title: string;
  description: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  darkMode?: boolean;
  className?: string;
}

export default function SplitSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  darkMode = true,
  className = '',
}: SplitSectionProps) {
  const bgColor = darkMode ? '#1D3160' : '#ffffff';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const borderColor = darkMode ? 'border-white/30' : 'border-gray-300';

  return (
    <section className={`relative min-h-[600px] ${className}`}>
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Text Section */}
        <div
          className={`flex items-center justify-center p-8 sm:p-12 lg:p-16 ${
            imagePosition === 'left' ? 'order-2' : 'order-1'
          }`}
          style={{ backgroundColor: bgColor }}
        >
          <div className="max-w-xl">
            <div className={`border-2 ${borderColor} p-8 sm:p-10 lg:p-12 rounded-lg backdrop-blur-sm`}>
              <h2 className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 ${textColor}`}>
                {title}
              </h2>
              <div className={`text-base sm:text-lg leading-relaxed ${textColor} opacity-90`}>
                {typeof description === 'string' ? <p>{description}</p> : description}
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`relative min-h-[400px] lg:min-h-[600px] ${
            imagePosition === 'left' ? 'order-1' : 'order-2'
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
        </div>
      </div>

      {/* Dividing Line */}
      <div 
        className={`hidden lg:block absolute top-0 bottom-0 w-px bg-white/20 ${
          imagePosition === 'left' ? 'left-1/2' : 'left-1/2'
        }`}
        style={{ transform: 'translateX(-0.5px)' }}
      />
    </section>
  );
}


