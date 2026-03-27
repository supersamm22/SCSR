import React from 'react'

const stats = [
  { value: '50+', label: 'Years of Experience' },
  { value: '3', label: 'Locations' },
  { value: '100%', label: 'Qualified Tradesmen' },
  { value: '1966', label: 'Est. Campbelltown' },
]

const features = [
  'Fully Qualified Tradesmen',
  'All Insurance Companies',
  'Air-Conditioned Waiting Area',
  'Off-Street Parking Available',
  'Free Quote Service',
  'Lifetime Repair Guarantee',
]

const whyUs = [
  {
    title: 'Quality Guaranteed',
    desc: 'Every repair comes with our lifetime workmanship guarantee. We stand behind every job we do.',
    icon: (
      <svg className="w-7 h-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Expert Team',
    desc: 'Fully qualified tradesmen with decades of combined experience in all aspects of collision repair.',
    icon: (
      <svg className="w-7 h-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'All Insurers Welcome',
    desc: 'We work directly with all major insurance companies, making the claims process stress-free for you.',
    icon: (
      <svg className="w-7 h-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
]

const ContentSection = () => {
  return (
    <section className="bg-white">

      {/* Stats Banner */}
      <div className="bg-gray-900 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <span className="text-4xl font-extrabold text-yellow-500 tabular-nums">{stat.value}</span>
                <span className="mt-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-yellow-500" />
              <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">Our Story</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Campbelltown&rsquo;s Most{' '}
              <span className="text-yellow-500">Trusted</span>{' '}
              Smash Repairer
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We are continually raising the benchmark in regard to quality collision repairs and customer service.
              Our focus is delivering the highest quality repairs in a comfortable, professional environment.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              Southern Cross Smash Repairs has been servicing Campbelltown and surrounds since 1966, with proprietor
              Chris owning the company since 1982. We proudly boast a team of fully qualified tradesmen, apprentices
              and customer service focused office personnel to cater to your needs.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src="https://res.cloudinary.com/dxir1apeg/image/upload/v1774572401/gregoryhills_s2hwbj.png"
                alt="Professional car detailing and repair work"
                className="w-full h-64 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dxir1apeg/image/upload/v1774572264/mossvale_gopcte.jpg"
                alt="Qualified auto technician at work"
                className="w-full h-52 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dxir1apeg/image/upload/v1774572256/Goulburn_gyfccg.jpg"
                alt="Modern auto repair workshop"
                className="w-full h-52 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-yellow-500" />
              <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">Why Choose Us</span>
              <div className="h-px w-10 bg-yellow-500" />
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Expert Repairs. Every Time.</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyUs.map((item) => (
              <div key={item.title} className="flex flex-col p-8 rounded-2xl bg-gray-800 border border-gray-700">
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default ContentSection
