"use client";

import { useState } from "react";
import { Check, Clock, DollarSign, Target, Users, TrendingUp, Search, ArrowRight, ChevronRight, Layout, Star } from "lucide-react";

export default function ServicesGrid({ activeTab, setActiveTab }) {

  const services = [
    {
      id: "sales-audit",
      icon: Search,
      title: "Sales and Marketing Audit",
      subtitle: "Audit (Find Out Exactly What's Wrong)",
      problem: "Before fixing anything, we need to understand what's broken. Our audit shows you exactly where you're losing money.",
      solution: "You'll know exactly what's broken, why it's broken, and what to fix first.",
      analyzeAreas: [
        { title: "Who should you sell to?", desc: "Are you targeting the right customers?" },
        { title: "Where do leads come from?", desc: "Which channels work, which don't?" },
        { title: "Where do deals die?", desc: "At what stage do you lose most opportunities?" },
        { title: "How good is your team?", desc: "Can they generate leads, qualify, present, handle objections?" },
        { title: "Do reps really qualify?", desc: "Or do they just hope deals will close?" },
        { title: "What are competitors doing?", desc: "What are you missing?" }
      ],
      deliverables: [
        { icon: "📄", title: "20-50 page report", desc: "with clear findings" },
        { icon: "📋", title: "90-day action plan", desc: "with priorities" },
        { icon: "🛣️", title: "Clear roadmap", desc: "of what to fix first" }
      ],
      timeline: "2-3 weeks",
      investment: "Custom Quote",
      result: "Simple Result: You'll know exactly what's broken, why it's broken, and what to fix first.",
      bestFor: "Companies unclear on why growth has stalled or those planning to scale.",
      gradient: "from-orange-500 to-red-500",
      bg: "from-orange-50/80 to-red-50/80",
      accent: "text-orange-600",
      border: "border-orange-200"
    },
    {
      id: "bot-model",
      icon: Target,
      title: "Lead Gen & Qualification",
      subtitle: "BOT Model (Build-Operate-Transfer)",
      problem: "Most sales teams waste time chasing deals that will never close. You need a predictable engine, not just random actions.",
      solution: "We set up your complete B2B lead generation & qualification engine—from generating sales enquiries to delivering high-intent Sales Qualified Leads (SQLs). Built inside your organization using a BOT model: Build, Operate, Transfer.",
      sqlCriteria: ["Approved budget", "Decision-making authority", "Clear need for your solution", "Defined buying timeline"],
      includes: [
        {
          title: "A. MQL Setup — Generating Consistent Sales Enquiries",
          desc: "We establish the full marketing-qualified lead engine to ensure a predictable flow of sales enquiries.",
          items: ["Inbound & outbound lead generation workflows", "Criteria for identifying enquiry-level MQLs", "Tools, automation, and tracking systems"]
        },
        {
          title: "B. SQL Setup — Lead Qualification Framework",
          desc: "Ensure your team speaks only to real buyers. Can be taken as a standalone service.",
          items: ["Simple qualification checklist for your team", "High-impact questions revealing buying intent", "Cost–value templates to justify pricing", "A scoring system to grade each opportunity", "Training for your entire sales team"]
        },
        {
          title: "Overall Outcome",
          items: ["Complete lead generation engine", "Produces both MQLs and high-intent SQLs", "Sales team focuses only on deals with revenue potential"]
        }
      ],
      note: "Note: This qualification framework is built into the lead generation system—but can also be taken as an independent standalone service.",
      timeline: "3-6 months",
      investment: "Custom Quote",
      result: "You get a complete lead generation engine—ensuring your sales team spends time only on deals with real revenue potential.",
      bestFor: "Companies wanting to build an internal asset for long-term growth.",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50/80 to-cyan-50/80",
      accent: "text-blue-600",
      border: "border-blue-200"
    },
    {
      id: "outsourced-model",
      icon: Users,
      title: "Outsourced Model",
      subtitle: "End-to-End Responsibility",
      problem: "In this model, we take end-to-end responsibility for delivering Sales Qualified Leads (SQLs) to your organization.",
      solution: "We build and manage the entire lead generation operation from our premises, ensuring you receive not just sales enquiries but fully verified, high-intent SQLs. Our team handles recruitment, onboarding, training, and project management of all resources.",
      includes: [
        {
          title: "Complete Operation",
          items: ["Recruitment & onboarding", "Training & management", "Project management of all resources"]
        },
        {
          title: "Our Team Will:",
          items: ["1. Generate high-quality sales enquiries", "2. Qualify each enquiry into a Sales Qualified Lead (SQL)", "3. Work closely with your sales team to support conversions"]
        },
        {
          title: "Transparency",
          items: ["Timely performance reports", "Complete operational transparency", "Seamless communication"]
        }
      ],
      timeline: "Ongoing",
      investment: "Custom Quote",
      result: "Our resources work as an extension of your sales team, ensuring alignment, seamless communication, and consistent results.",
      bestFor: "Companies who want results (SQLs) and prefer to outsource the operational heavy lifting.",
      gradient: "from-purple-500 to-indigo-500",
      bg: "from-purple-50/80 to-indigo-50/80",
      accent: "text-purple-600",
      border: "border-purple-200"
    }
  ];

  const activeService = services.find(s => s.id === activeTab) || services[0];
  const ActiveIcon = activeService.icon;

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-50 to-white min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">

          {/* Left Sidebar - Tabs */}
          <div className="w-full lg:w-1/4 flex flex-col gap-3">
            <div className="mb-4 pl-2">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Services</h3>
            </div>
            {services.map((service) => {
              const isActive = activeTab === service.id;
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`
                    group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left relative overflow-hidden
                    ${isActive
                      ? 'bg-white shadow-xl shadow-blue-900/5 scale-105 z-10 border border-blue-100'
                      : 'hover:bg-white/60 hover:shadow-lg border border-transparent hover:border-slate-100 opacity-70 hover:opacity-100'
                    }
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                    ${isActive ? `bg-gradient-to-br ${service.gradient} text-white shadow-lg` : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}
                  `}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <span className={`block text-sm font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                      {service.title}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-medium text-blue-500 animate-fadeIn">
                        View Details
                      </span>
                    )}
                  </div>
                  {isActive && (
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.gradient}`}></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Content Area - Detailed Card */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 h-full relative overflow-hidden animate-fadeIn">

              {/* Top Gradient Bar */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${activeService.gradient}`}></div>

              {/* Header */}
              <div className="flex flex-col md:flex-row gap-6 mb-10 items-start">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeService.gradient} flex items-center justify-center shadow-xl text-white shrink-0`}>
                  <ActiveIcon size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-black text-slate-900">{activeService.title}</h2>
                    <span className={`hidden md:inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200`}>
                      {activeService.subtitle}
                    </span>
                  </div>
                  <p className="text-slate-500 text-lg max-w-2xl">
                    {activeService.id === 'sales-audit' && "Comprehensive analysis to identify revenue leaks."}
                    {activeService.id === 'bot-model' && "Build, Operate, and Transfer your sales engine."}
                    {activeService.id === 'outsourced-model' && "Complete end-to-end sales management."}
                  </p>
                </div>
              </div>

              {/* Problem / Solution Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-red-100 rounded-md text-red-600"><TrendingUp size={16} className="rotate-180" /></div>
                    <h4 className="font-bold text-red-900 text-sm tracking-wide">THE CHALLENGE</h4>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    {activeService.problem}
                  </p>
                </div>
                <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-green-100 rounded-md text-green-600"><Check size={16} /></div>
                    <h4 className="font-bold text-green-900 text-sm tracking-wide">THE SOLUTION</h4>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    {activeService.solution}
                  </p>
                </div>
              </div>

              {/* Dynamic Content Sections */}
              <div className="space-y-8">

                {/* SQL Criteria */}
                {activeService.sqlCriteria && (
                  <div className="mb-8 p-6 rounded-2xl bg-blue-50/30 border border-blue-100">
                    <h4 className="text-sm font-black text-blue-800 mb-4 flex items-center gap-2">
                      <Star size={16} className="fill-blue-800" />
                      WHAT IS A "SALES QUALIFIED LEAD" (SQL)?
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {activeService.sqlCriteria.map((criteria, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span className="text-sm font-semibold text-slate-700">{criteria}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main List (Analyze/Includes) */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Layout size={24} className={activeService.accent} />
                    {activeService.includes ? "What's Included" : activeService.analyzeAreas ? "What We Analyze" : "How It Works"}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {(activeService.includes || activeService.analyzeAreas)?.map((item, i) => (
                      <div key={i} className={`p-5 rounded-xl border bg-white hover:border-blue-300 transition-colors duration-300 shadow-sm hover:shadow-md ${activeService.border}`}>
                        <div className={`text-sm font-bold mb-2 uppercase tracking-tight ${activeService.accent}`}>{item.title}</div>
                        {item.desc && <p className="text-sm text-slate-600 mb-3 italic">{item.desc}</p>}
                        {item.items ? (
                          <ul className="space-y-2">
                            {item.items.map((sub, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                                {sub}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-slate-600">{item.desc}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Note */}
                {activeService.note && (
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-800 text-sm font-medium flex gap-3">
                    <div className="mt-0.5"><Star size={16} /></div>
                    {activeService.note}
                  </div>
                )}

                {/* Deliverables */}
                {activeService.deliverables && (
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">What You Receive</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {activeService.deliverables.map((item, i) => (
                        <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                          <div className="text-3xl mb-2">{item.icon}</div>
                          <div className="font-bold text-slate-900 text-sm mb-1">{item.title}</div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Footer / Meta */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Timeline</span>
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
                      <Clock className="text-blue-500" size={20} />
                      {activeService.timeline}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Investment</span>
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
                      <DollarSign className="text-green-500" size={20} />
                      {activeService.investment}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 md:col-span-1">
                    <a
                      href="https://calendly.com/salessyllabus"
                      target="_blank"
                      className={`
                            flex items-center justify-center gap-2 px-6 py-4 rounded-xl 
                            bg-gradient-to-r ${activeService.gradient} 
                            text-white font-bold shadow-xl shadow-blue-200 hover:shadow-blue-300 
                            hover:-translate-y-1 transition-all duration-300
                          `}
                    >
                      Book Consultation
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 text-xs text-slate-500 bg-slate-50 p-4 rounded-lg">
                  <div className="flex gap-2">
                    <span className="font-bold text-slate-700">RESULT:</span>
                    {activeService.result}
                  </div>
                  <div className="hidden sm:block w-px bg-slate-300"></div>
                  <div className="flex gap-2">
                    <span className="font-bold text-slate-700">BEST FOR:</span>
                    {activeService.bestFor}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
