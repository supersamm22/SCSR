import React from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const ContactForm = () => {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">

        {/* Left Panel — Contact Info */}
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48 overflow-hidden">
          {/* Dark background with image overlay */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-full -z-10">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-15"
              aria-hidden="true"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gray-900" style={{ opacity: 0.92 }} />
          </div>

          <div className="relative mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-yellow-500" />
              <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">Contact Us</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Southern Cross Smash Repairs takes pride in reassuring customers and making them feel at ease —
              offering services above and beyond what other repairers will do.
            </p>

            <dl className="mt-10 space-y-5 text-base text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Gregory Hills Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-yellow-500 mt-0.5" />
                </dt>
                <dd>
                  <span className="block text-xs font-bold text-yellow-500 uppercase tracking-wider mb-0.5">
                    Gregory Hills
                  </span>
                  2/37 Rodeo Road, NSW 2557
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Moss Vale Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-yellow-500 mt-0.5" />
                </dt>
                <dd>
                  <span className="block text-xs font-bold text-yellow-500 uppercase tracking-wider mb-0.5">
                    Moss Vale
                  </span>
                  10B McCourt Road, NSW 2577
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Goulburn Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-yellow-500 mt-0.5" />
                </dt>
                <dd>
                  <span className="block text-xs font-bold text-yellow-500 uppercase tracking-wider mb-0.5">
                    Goulburn
                  </span>
                  1/135 Finlay Road, NSW 2580
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-yellow-500 mt-0.5" />
                </dt>
                <dd>
                  <a href="tel:0246481013" className="hover:text-white transition-colors duration-200">
                    (02) 4648 1013
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-yellow-500 mt-0.5" />
                </dt>
                <dd>
                  <a
                    href="mailto:info@southerncrosssmashrepairs.com.au"
                    className="hover:text-white transition-colors duration-200 break-all"
                  >
                    info@southerncrosssmashrepairs.com.au
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right Panel — Form */}
        <form action="#" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
              <p className="mt-2 text-gray-500 text-sm">We&rsquo;ll get back to you within 1 business day.</p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900 mb-2">
                  First name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Last name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone number
                </label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-colors resize-none"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full rounded-lg bg-yellow-500 px-6 py-3.5 text-center text-sm font-bold text-gray-900 shadow-sm hover:bg-yellow-400 active:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 transition-colors cursor-pointer uppercase tracking-widest"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default ContactForm
