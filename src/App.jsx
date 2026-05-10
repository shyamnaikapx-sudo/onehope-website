export default function OneHopeSolutionWebsite() {
  const services = [
    {
      id: '01',
      title: 'New Facility Projects',
      color: 'text-blue-800',
      services: ['Cleanroom Design', 'Factory Setup (Pharma, API, Food)', 'HVAC & Validation'],
      promise:
        'We design and build your complete GMP-compliant facility from scratch, ready for approval.',
      icon: '🏭',
    },
    {
      id: '02',
      title: 'Audit & Compliance',
      color: 'text-green-700',
      services: ['GMP Audits', 'US FDA/ISO Gap Analysis', 'Third-Party Audits'],
      promise:
        'We inspect your facility through an auditor’s lens to fix gaps before the real inspection.',
      icon: '📋',
    },
    {
      id: '03',
      title: 'QMS & ISO Certification',
      color: 'text-blue-700',
      services: ['QMS Setup', 'ISO 9001, 22000, FSSC, BRCGS', 'Documentation'],
      promise:
        'We build your quality systems from the ground up to guarantee ISO or GMP certification.',
      icon: '📄',
    },
    {
      id: '04',
      title: 'Regulatory & Dossier',
      color: 'text-green-700',
      services: ['CTD / eCTD', 'Documentation', 'Regulatory Submissions'],
      promise:
        'We prepare every document required for your product approvals and global submissions.',
      icon: '📁',
    },
    {
      id: '05',
      title: 'Validation & Qualification',
      color: 'text-blue-700',
      services: ['Cleanroom Validation', 'Equipment Qualification', 'HVAC Testing'],
      promise:
        'We test and certify that your facility and equipment strictly meet international GMP standards.',
      icon: '🧪',
    },
    {
      id: '06',
      title: 'Training & Support',
      color: 'text-green-700',
      services: ['GMP & SOP Training', 'Staff Readiness', 'Compliance Coaching'],
      promise:
        'We empower your team to handle audits confidently and follow proper procedures.',
      icon: '👨‍🏫',
    },
    {
      id: '07',
      title: 'Ecommerce Services',
      color: 'text-blue-700',
      services: ['Product Listing', 'A+ Content Creation', 'Product Content Writing', 'Ecommerce Marketing'],
      promise:
        'We help you build a strong online presence and grow your sales across platforms.',
      icon: '🛒',
    },
  ];

  const additionalServices = [
    {
      title: 'Food Product & Packaging Development',
      desc: 'We develop innovative, safe and market-ready food products with the right packaging solutions.',
      icon: '🍱',
    },
    {
      title: 'Food Packaging Design',
      desc: 'We create functional, appealing and compliant packaging designs that strengthen your brand.',
      icon: '📦',
    },
    {
      title: 'Food Packaging Regulatory Check',
      desc: 'We ensure your food packaging meets FSSAI, FDA and international regulatory requirements.',
      icon: '✅',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white text-green-700 rounded-2xl p-4 text-3xl font-bold shadow-xl">
                OH
              </div>
              <div>
                <h1 className="text-4xl font-extrabold">ONE HOPE Solution</h1>
                <p className="text-lg text-slate-200">
                  Integrated Cleanroom & Pharma Regulatory Consultancy
                </p>
              </div>
            </div>

            <h2 className="text-5xl font-black leading-tight mb-6">
              Your Partner in GMP Compliance & Regulatory Excellence
            </h2>

            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              End-to-end solutions for Pharma, API, Food & Healthcare industries.
              We help businesses establish compliant facilities, quality systems,
              validation programs and regulatory documentation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all">
                Get Consultation
              </button>
              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition-all">
                View Services
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
              alt="Cleanroom Facility"
              className="rounded-[2rem] shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black text-blue-950 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600">
            Your Needs. Our Expertise. Your Compliance.
          </p>
        </div>

        <div className="grid gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="flex items-center gap-6">
                  <div className="bg-slate-100 h-24 w-24 rounded-full flex items-center justify-center text-5xl shadow-inner">
                    {service.icon}
                  </div>

                  <div>
                    <div className="bg-blue-900 text-white text-sm font-bold px-4 py-2 rounded-xl inline-block mb-3">
                      {service.id}
                    </div>
                    <h3 className={`text-3xl font-extrabold ${service.color}`}>
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">Key Services</h4>
                  <ul className="space-y-3">
                    {service.services.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-700">
                        <span className="text-green-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Our Promise To You
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    “{service.promise}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-green-800 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive support for food, packaging and ecommerce businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
              alt="Quality Compliance"
              className="rounded-[2rem] shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-5xl font-black text-blue-950 mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We are a team of GMP, Regulatory & Quality experts helping businesses
              build world-class facilities, achieve regulatory approvals and maintain
              continuous compliance.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="font-bold text-lg mb-2">Compliance Assured</h4>
                <p className="text-sm text-slate-600">
                  GMP & ISO-focused regulatory excellence.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
                <div className="text-4xl mb-3">⭐</div>
                <h4 className="font-bold text-lg mb-2">Quality Driven</h4>
                <p className="text-sm text-slate-600">
                  Systems built for long-term quality success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-950 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-xl mb-2">Email Us</h3>
              <p>info@onehopesolution.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-bold text-xl mb-2">Website</h3>
              <p>www.onehopesolution.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-xl mb-2">Call Us</h3>
              <p>+91 9740802199</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-bold text-xl mb-2">Industries</h3>
              <p>Pharma • API • Food • Healthcare</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
