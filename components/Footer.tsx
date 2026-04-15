export default function Footer() {
  const year = new Date().getFullYear();

  const nav = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#intelligence" },
    { label: "Use cases", href: "#use-cases" },
    { label: "FAQ", href: "#faq" },
    { label: "Book a demo", href: "#contact" },
  ];

  return (
    <footer className="bg-[#F4F4F1] border-t border-[#E5E5E0] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2C4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 7.75a4.5 4.5 0 01-3.75-2.016c.019-1.244 2.5-1.928 3.75-1.928 1.244 0 3.731.684 3.75 1.928A4.5 4.5 0 018 12.25z" fill="white"/>
                </svg>
              </div>
              <span className="text-[17px] font-semibold text-[#1E2D3D] tracking-tight">Conviva.live</span>
            </div>
            <p className="text-sm text-[#3D5166] leading-relaxed max-w-xs">
              AI-powered guest communication for holiday homes operators. Precise, consistent, and human where it counts.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#7A8899] uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-[#3D5166] hover:text-teal-600 transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium text-[#7A8899] uppercase tracking-widest mb-4">Contact</p>
            <div className="space-y-2.5">
              <a href="mailto:info@luxoasisadvisory.com" className="block text-sm text-[#3D5166] hover:text-teal-600 transition-colors">
                info@luxoasisadvisory.com
              </a>
              <a href="https://conviva.live" className="block text-sm text-[#3D5166] hover:text-teal-600 transition-colors">
                conviva.live
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 mt-2 text-sm font-medium bg-teal-600 hover:bg-teal-800 text-white px-4 py-2 rounded-lg transition-all duration-200">
                Book a demo
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5E5E0] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[#7A8899]">© {year} Conviva.live. All rights reserved.</p>
            <div className="flex gap-4 mt-2">
              <a href="/privacy" className="text-xs text-[#7A8899] hover:text-teal-600 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-xs text-[#7A8899] hover:text-teal-600 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#7A8899]">
              Conviva.live is a product of <span className="text-[#3D5166] font-medium">Lux Oasis Advisory &amp; Services LLC</span>
            </p>
            <p className="text-xs text-[#B0B0A8] mt-0.5">Lux Oasis Advisory &amp; Services LLC · All AI products &amp; services</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
