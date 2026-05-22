export default function Footer() {
  const year = new Date().getFullYear();
  const nav = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#intelligence" },
    { label: "Use cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Book a demo", href: "#contact" },
  ];
  return (
    <footer className="bg-[#F4F4F1] border-t border-[#E5E5E0] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/conviva-logo.jpg" alt="Conviva.live" className="w-8 h-8 rounded-lg" />
              <span className="text-[17px] font-semibold text-[#1E2D3D] tracking-tight">Conviva.live</span>
            </div>
            <p className="text-sm text-[#3D5166] leading-relaxed max-w-xs">AI-powered guest communication for holiday homes operators. Precise, consistent, and human where it counts.</p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#7A8899] uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (<li key={item.label}><a href={item.href} className="text-sm text-[#3D5166] hover:text-teal-600 transition-colors">{item.label}</a></li>))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-[#7A8899] uppercase tracking-widest mb-4">Contact</p>
            <div className="space-y-2.5">
              <a href="mailto:info@luxoasisadvisory.com" className="block text-sm text-[#3D5166] hover:text-teal-600 transition-colors">info@luxoasisadvisory.com</a>
              <a href="https://conviva.live" className="block text-sm text-[#3D5166] hover:text-teal-600 transition-colors">conviva.live</a>
              <a href="#contact" className="inline-flex items-center gap-2 mt-2 text-sm font-medium bg-teal-600 hover:bg-teal-800 text-white px-4 py-2 rounded-lg transition-all duration-200">Book a demo</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#E5E5E0] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[#7A8899]">Copyright {year} Conviva.live. All rights reserved.</p>
            <div className="flex gap-4 mt-2">
              <a href="/privacy" className="text-xs text-[#7A8899] hover:text-teal-600 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-xs text-[#7A8899] hover:text-teal-600 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#7A8899]">Conviva.live is a product of <span className="text-[#3D5166] font-medium">Lux Oasis Advisory &amp; Services LLC</span></p>
            <a href="https://luxoasisadvisory.com" target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:text-teal-800 transition-colors mt-1 inline-block">luxoasisadvisory.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
