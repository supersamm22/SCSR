import React from 'react'

const ContentSection = () => {
  return (
    <div> <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">50 Years Experience</h2>
                <p className="mt-6 text-xl/8 text-gray-600">
                  We are continually raising the benchmark in regard to quality collision repairs and customer service. Our focus is delivering the highest quality repairs. Our air-conditioned office has a waiting area with facilities for the comfort and convenience of our clients, off-street parking and telephone available for client use
                </p>
                <p className="mt-6 text-base/7 text-gray-600">
                  Southern Cross Smash Repairs has been servicing Campbelltown and surrounds since 1966, with proprietor Chris owning the company since 1982. Southern Cross Smash Repairs proudly boasts a team of fully qualified tradesmen, apprentices and customer service focused office personnel to cater to your needs.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src="https://firebasestorage.googleapis.com/v0/b/southerncrosssmashrepairs.appspot.com/o/scsr-img6.jpeg?alt=media&token=8fe7002b-28e4-467f-b563-860d0d100090"
                    className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      alt=""
                      src="https://firebasestorage.googleapis.com/v0/b/southerncrosssmashrepairs.appspot.com/o/scsr-img4.jpeg?alt=media&token=85d4a2ad-3a4c-46a5-aa8d-4ab11862cf28"
                      className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="https://firebasestorage.googleapis.com/v0/b/southerncrosssmashrepairs.appspot.com/o/scsr-img2.jpeg?alt=media&token=8ed59230-c496-4ad4-a4a9-d1bb9ab9c0ab"
                      className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="https://firebasestorage.googleapis.com/v0/b/southerncrosssmashrepairs.appspot.com/o/scsr-img1.jpeg?alt=media&token=320bc6bb-a664-4b67-9509-65c17857ffd4"
                      className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
  )
}

export default ContentSection