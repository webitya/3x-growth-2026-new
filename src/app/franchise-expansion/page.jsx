import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Target,
  ShieldCheck,
  Zap,
  TrendingUp,
  Layout,
  Users,
  Settings,
} from "lucide-react";

export const metadata = {
  title: "Franchise / Channel Partner Expansion Services | 3x Growth",
  description:
    "Scale Faster with a Profitable Partner-Led Growth Model. Expanding your business through Franchise or Channel Partners is one of the fastest and most capital-efficient ways to scale.",
};

export default function FranchiseExpansionPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section - Compact & High Impact */}
      <section className="relative bg-slate-900 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              <TrendingUp size={12} />
              Franchise / Partnet Development
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
              Scale Faster with a <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Profitable Partner-Led Growth Model
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Expanding your business through Franchise or Channel Partners is one of the fastest and most capital-efficient ways to scale—when done right.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
              <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                We help businesses design, launch, and manage high-performance partner ecosystems that drive revenue, expand market reach, and maintain profitability for both the brand and its partners.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="#feasibility-check"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-0.5"
              >
                Start 15-Day Feasibility Check
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is & Challenges - Side by Side on Desktop for Compactness */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

            {/* What Is Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="mb-2">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Is Franchise / Channel Partner Expansion?
                </h2>
                <div className="w-12 h-1 bg-blue-600 rounded-full mb-6"></div>
              </div>

              <div className="prose prose-slate bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Franchise and Channel Partner expansion allows your business to grow by enabling independent partners to sell, market, and deliver your products or services under a structured commercial and operational framework.
                </p>
                <p className="text-slate-700 leading-relaxed font-medium">
                  Instead of scaling entirely through internal teams, you leverage partners who invest their own capital, effort, and local market knowledge—while you retain brand control and strategic direction.
                </p>
              </div>
            </div>

            {/* Challenges Column */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-red-100 p-2 rounded-lg text-red-600"><HelpCircle size={24} /></span>
                The Common Challenges in Partner-Led Expansion
              </h2>

              <p className="text-slate-600 mb-6">Many partner programs fail due to:</p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Poorly defined partner economics",
                  "Weak value proposition for partners",
                  "Misaligned roles and responsibilities",
                  "Inadequate onboarding and training",
                  "Lack of ongoing partner support and motivation"
                ].map((challenge, i) => (
                  <div key={i} className={`flex items-start p-3 bg-red-50/50 rounded-lg border border-red-100 ${i === 4 ? 'sm:col-span-2' : ''}`}>
                    <div className="min-w-[6px] h-[6px] rounded-full bg-red-500 mt-2 mr-3"></div>
                    <span className="text-slate-700 text-sm font-medium">{challenge}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 text-white p-4 rounded-lg text-center shadow-lg">
                <p className="font-semibold text-sm md:text-base">
                  Partner expansion is not just about adding partners—it’s about building a repeatable, scalable, and profitable system.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solution & Framework - Unified Dark Section */}
      <section className="py-16 bg-slate-950 text-slate-300 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        <div className="container mx-auto px-4 relative z-10">

          {/* Solution Header */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2 block">Our Solution</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Franchise / Channel Partner Expansion Solution
            </h2>
            <p className="text-slate-400 mb-6 text-sm md:text-base">
              We offer an end-to-end partner development service designed to reduce risk and accelerate growth.
              Our goal is to help you build a high-performance partner ecosystem that drives revenue, expands market reach, and maintains profitability for both the brand and its partners.
            </p>

            {/* 4 Pillars - Compact Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
              {[
                "Financial feasibility and unit economics",
                "Clear partner value proposition",
                "Structured onboarding and enablement",
                "Long-term partner performance and engagement"
              ].map((item, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex flex-col h-full hover:border-blue-500/50 transition-colors">
                  <CheckCircle2 className="text-blue-500 w-5 h-5 mb-2" />
                  <span className="text-xs font-semibold text-white leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-12"></div>

          {/* 3 Phase Framework - Compact Cards */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Our 3-Phase Partner Development Framework</h2>
            <p className="text-slate-500 text-sm">A structured approach to ecosystem success</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Phase 1 */}
            <div className="group bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 p-3 opacity-10 font-black text-6xl text-blue-500 group-hover:opacity-20 transition-opacity">01</div>
              <div className="p-6 pb-0">
                <h3 className="text-lg font-bold text-white mb-1">Partner Proposition Design</h3>
                <p className="text-xs text-blue-400 font-mono mb-4">DESIGN & STRATEGY</p>
                <p className="text-sm text-slate-300 mb-4 border-l-2 border-blue-500 pl-3 italic">
                  We design a partner model that makes commercial and operational sense.
                </p>
              </div>

              <div className="bg-slate-950/50 p-6 pt-2 flex-grow">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">Questions Answered:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Why should a partner work with your brand?",
                    "Revenue sharing or margin structure?",
                    "Roles and responsibilities of both parties?",
                    "Investment required from the partner?",
                    "Sales, marketing, and operational support?",
                    "How will partners be onboarded/managed?",
                    "Internal KPIs/KRAs required?"
                  ].map((q, i) => (
                    <li key={i} className="flex gap-2 text-xs text-slate-400">
                      <span className="text-blue-500/50">•</span> {q}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-3 border-t border-slate-800">
                  <p className="text-xs text-blue-100"><span className="font-bold text-blue-400">Outcome:</span> A compelling, scalable, and clearly documented partner proposition.</p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="group bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-all duration-300 overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 p-3 opacity-10 font-black text-6xl text-purple-500 group-hover:opacity-20 transition-opacity">02</div>
              <div className="p-6 pb-0">
                <h3 className="text-lg font-bold text-white mb-1">Partner Identification & Onboarding</h3>
                <p className="text-xs text-purple-400 font-mono mb-4">SELECTION & ENABLEMENT</p>
                <p className="text-sm text-slate-300 mb-4 border-l-2 border-purple-500 pl-3 italic">
                  Having the right partners is more important than having many partners.
                </p>
              </div>

              <div className="bg-slate-950/50 p-6 pt-2 flex-grow">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">We help you:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Define the ideal partner profile",
                    "Screen and select the right partners",
                    "Design a structured onboarding journey",
                    "Deliver product, sales, and operational training"
                  ].map((q, i) => (
                    <li key={i} className="flex gap-2 text-xs text-slate-400">
                      <span className="text-purple-500/50">•</span> {q}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-3 border-t border-slate-800">
                  <p className="text-xs text-purple-100"><span className="font-bold text-purple-400">Outcome:</span> Partners who are aligned, capable, and ready to execute.</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="group bg-slate-900 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 p-3 opacity-10 font-black text-6xl text-emerald-500 group-hover:opacity-20 transition-opacity">03</div>
              <div className="p-6 pb-0">
                <h3 className="text-lg font-bold text-white mb-1">Partner Management & Growth</h3>
                <p className="text-xs text-emerald-400 font-mono mb-4">GROWTH & SCALE</p>
                <p className="text-sm text-slate-300 mb-4 border-l-2 border-emerald-500 pl-3 italic">
                  Long-term success depends on how well partners are supported and managed.
                </p>
              </div>

              <div className="bg-slate-950/50 p-6 pt-2 flex-grow">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">We assist with:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Partner query and issue management",
                    "Engagement and motivation mechanisms",
                    "Sales and operational support systems",
                    "Performance tracking and improvement plans"
                  ].map((q, i) => (
                    <li key={i} className="flex gap-2 text-xs text-slate-400">
                      <span className="text-emerald-500/50">•</span> {q}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-3 border-t border-slate-800">
                  <p className="text-xs text-emerald-100"><span className="font-bold text-emerald-400">Outcome:</span> Active, motivated partners delivering consistent and scalable growth.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feasibility Check - Compact Split Cards */}
      <section id="feasibility-check" className="py-16 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden bg-white border border-blue-100 flex flex-col md:flex-row">

            {/* Left - Action */}
            <div className="md:w-1/3 bg-blue-600 p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 z-0"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-block bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-6 self-start">
                  RECOMMENDED START
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">15-Day Feasibility Check</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  Before launching or scaling a partner program, we assess readiness to ensure success.
                </p>
                <Link
                  href="/contact"
                  className="mt-auto w-full bg-white text-blue-700 font-bold py-3 px-4 rounded-lg text-center hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Right - Details */}
            <div className="md:w-2/3 p-8">
              <div className="flex flex-col h-full">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Layout className="text-blue-500" size={20} />
                  What We Evaluate:
                </h4>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "Product pricing & margin structure",
                    "Internal cost vs selling price",
                    "Brand positioning & reputation",
                    "Sales process effectiveness",
                    "Delivery & fulfillment capability",
                    "Operational scalability"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Outcome:</p>
                  <div className="space-y-1">
                    {[
                      "Clear Go / No-Go recommendation",
                      "Risk identification",
                      "Improvement roadmap for partner-led expansion"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-800">
                        <CheckCircle2 size={14} className="text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Why Us - Compact Grid */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {/* Ideal For */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Target size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Who This Service Is Ideal For</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Businesses planning franchise expansion",
                  "Companies looking to build channel partner networks",
                  "Brands seeking rapid geographic expansion",
                  "Organizations aiming to reduce cost of growth"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Us */}
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Why Choose Us</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "8+ years of business consulting experience",
                  "Profitability-first & unit economics driven approach",
                  "Strategy plus execution focus",
                  "Structured, proven partner development frameworks",
                  "Reduced risk in franchise and channel expansion"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Zap className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-20 bg-slate-900 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Get Started</h2>
          <p className="text-slate-300 mb-2 text-lg">The first step to successful partner-led growth is clarity.</p>
          <p className="text-slate-400 mb-8 text-sm">Start with our 15-Day Feasibility Check and discover whether your business is ready.</p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl"
          >
            Let’s Build Your Expansion Engine
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="text-blue-200/50 text-xs mt-6 uppercase tracking-widest font-semibold">
            Let’s build a scalable, profitable expansion engine—together.
          </p>
        </div>
      </section>
    </div>
  );
}
