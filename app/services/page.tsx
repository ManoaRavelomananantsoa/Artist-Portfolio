'use client';

import Link from 'next/link';

export default function ServicesPage() {
  const packages = [
    {
      name: 'Basic',
      price: '$20',
      description: 'Perfect for simple character portraits',
      features: [
        '1 character portrait',
        'Simple background',
        'High-resolution (300 DPI)',
        'PNG/JPEG format',
        '1 revision',
        'Delivery: 3-5 days'
      ],
      highlight: false
    },
    {
      name: 'Standard',
      price: '$50',
      description: 'Ideal for detailed character art with background',
      features: [
        '1 detailed character',
        'Custom background',
        'High-resolution (300 DPI)',
        'PNG/JPEG + source file',
        '2 revisions',
        'Delivery: 5-7 days',
        'Process images included'
      ],
      highlight: true
    },
    {
      name: 'Premium',
      price: '$100',
      description: 'Full artwork with complex scene and multiple characters',
      features: [
        'Up to 2 characters',
        'Complex detailed background',
        'High-resolution (300 DPI)',
        'All formats + source file',
        'Unlimited revisions',
        'Delivery: 7-10 days',
        'Full process documentation',
        'Commercial use rights'
      ],
      highlight: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-16">
          <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 hover:text-amber-300 transition-colors mb-8 block">
            ← Back Home
          </Link>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-tighter mb-6">
            <span className="italic font-serif text-amber-300">Services</span>
          </h1>
          <p className="max-w-2xl text-neutral-400 text-lg font-light leading-relaxed">
            Choose the package that best fits your needs. All artwork is created with attention to detail 
            and delivered in high resolution. Custom requests are welcome.
          </p>
        </header>

        {/* Pricing Packages */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative p-8 border ${
                pkg.highlight
                  ? 'border-amber-300 bg-amber-300/5 scale-105'
                  : 'border-white/10 bg-neutral-900/50'
              } transition-all hover:border-amber-300/50`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-300 text-black text-[10px] tracking-[0.3em] uppercase font-bold px-4 py-1">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h2 className="text-white text-2xl font-serif italic mb-2">{pkg.name}</h2>
              <p className="text-neutral-400 text-sm mb-4">{pkg.description}</p>
              <div className="text-amber-300 text-4xl font-display font-bold mb-8">
                {pkg.price}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                    <span className="text-amber-300 mt-0.5">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center text-[10px] tracking-[0.3em] uppercase font-bold py-3 px-6 transition-all ${
                  pkg.highlight
                    ? 'bg-amber-300 text-black hover:bg-amber-200'
                    : 'border border-white/30 text-white hover:bg-white hover:text-black'
                }`}
              >
                Order Now
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 border-t border-white/5 pt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white text-xl font-serif italic mb-4">Custom Requests</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Have a specific project in mind that doesn't fit these packages? 
                Feel free to contact me for a custom quote. I'm open to discussing 
                unique requirements and can tailor my services to your needs.
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl font-serif italic mb-4">What You'll Get</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-amber-300">✦</span>
                  Professional quality artwork created entirely freehand
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300">✦</span>
                  Regular updates throughout the process
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300">✦</span>
                  Friendly communication and quick response
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300">✦</span>
                  Full commercial rights (Premium package)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
