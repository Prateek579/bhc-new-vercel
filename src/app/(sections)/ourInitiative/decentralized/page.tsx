'use client';
import Partner from '@/app/components/Partner';
import Image from 'next/image';

export default function Decentralized() {

  return (<>
    <div className="relative overflow-hidden">
      <div className="relative min-h-screen overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#083350_100%)] flex items-center">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url("/icons/hm-1-sl-4-img.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003366]/70 to-transparent" />
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-22 w-full">
          <div className="relative z-10 flex flex-col gap-6 max-w-4xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Montserrat'] leading-tight">
              Mission 2036
              <br />
              <span>Connecting 600K Villages to Smart Healthcare</span>
            </h1>
          </div>
        </div>
      </div>
    </div>


    <div className="bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
          <span className="text-[#18A093]">Decentralized</span>{' '}
          <span className="text-[#003366]">Health Network</span>
        </h2>
        <p className="text-[#555555] text-[18px] text-center sm:text-[22px] md:text-[22px] font-['Montserrat'] font-medium">
          The Decentralized Health Network is our mission to connect India&apos;s most underserved regions with essential healthcare services by 2036. Unlike centralized models that rely on urban hospitals, this network empowers local communities through Smart Healthcare Machines, tele-diagnostics, and real-time consultations — right at the village level. It&apos;s a scalable, tech-driven approach that ensures no region is left behind, bridging the healthcare gap across 600,000+ villages with speed, accuracy, and accessibility.
        </p>
      </div>
    </div>

    {/* Mission 2036 Section */}
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column - Statistics */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8">
              <span className="text-[#18A093]">Mission</span>{' '}
              <span className="text-[#003366]">2036</span>
            </h2>

            {/* TDTCs */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                <Image
                  src="/icons/dc-3-lgo1.png"
                  alt="TDTC Icon"
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2">10k TDTCs (Smart Health Centres)</h3>
                <p className="text-sm sm:text-base font-['Montserrat'] md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">Serving 6500+ sub-divisions with tech-enabled primary care.</p>
              </div>
            </div>

            {/* MTCUs */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                <Image
                  src="/icons/dc-3-lgo2.png"
                  alt="MTCU Icon"
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2">15k MTCUs (Smart Mobile Units)</h3>
                <p className="text-sm sm:text-base md:text-lg font-['Montserrat'] text-gray-600 group-hover:text-white transition-colors duration-300">Reaching remote villages with mobile diagnostics and care.</p>
              </div>
            </div>

            {/* Specialists Network */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                <Image
                  src="/icons/dc-3-lgo1.png"
                  alt="Specialist Icon"
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2 ">50k Specialists Network</h3>
                <p className="text-sm sm:text-base font-['Montserrat'] md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">Providing expert consultations anytime, anywhere.</p>
              </div>
            </div>

            {/* Villages */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                <Image
                  src="/icons/dc-3-lgo3.png"
                  alt="Village Icon"
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2">600k Villages</h3>
                <p className="text-sm sm:text-base font-['Montserrat'] md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">Targeting underserved regions across India for better access.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] mt-6 lg:mt-0">
            <Image
              src="/icons/dc-3-img1.png"
              alt="India Healthcare Network"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Fourth Section - Our Strength and Capacity */}
    <div className="bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="mb-16">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
            <span className="text-[#18A093]">How We&apos;re Redefining</span>{' '}
            <span className="text-[#003366]">Healthcare in India</span>
          </h2>
          <p className="text-[#555555] text-[18px] text-center sm:text-[22px] md:text-[22px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            India&apos;s healthcare system faces deep gaps in accessibility and affordability — especially in rural regions. We&apos;re building a decentralized, tech-driven ecosystem that delivers real-time, community-centered care where it&apos;s needed most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Breaking Geographical Barriers */}
          <div className="bg-white p-8 rounded-lg border-1 border-gray-300 flex flex-col items-center justify-center min-h-[180px] md:min-h-[220px] group hover:bg-[#0E7280] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-full">
              <Image
                src="/icons/abt-3-lgo4.png"
                alt="Academic Icon"
                width={48}
                height={48}
                className="md:h-[60px] md:w-auto"
              />
            </div>
            <h3 className="text-2xl font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] text-[#333333] group-hover:text-white align-middle mb-4 text-center w-full transition-colors duration-300">Breaking Geographical Barriers</h3>
            <p className="text-sm font-['Montserrat'] sm:text-base md:text-lg text-gray-600 group-hover:text-white text-center transition-colors duration-300">
              Smart mobile clinics and tele-consultation hubs bring healthcare to every village — eliminating travel and reducing hospital overload.
            </p>
          </div>

          {/* Card 2 - Technology-Driven Access */}
          <div className="bg-white p-8 rounded-lg border-1 border-gray-300 flex flex-col items-center justify-center min-h-[180px] md:min-h-[220px] group hover:bg-[#0E7280] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-full">
              <Image
                src="/icons/abt-3-lgo2.png"
                alt="Industry Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-2xl font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] text-[#333333] group-hover:text-white align-middle mb-4 text-center w-full transition-colors duration-300">Technology-Driven Access</h3>
            <p className="text-sm font-['Montserrat'] sm:text-base md:text-lg text-gray-600 group-hover:text-white text-center transition-colors duration-300">
              AI-powered diagnostics and real-time consultations make quality healthcare accessible and affordable for all.
            </p>
          </div>

          {/* Card 3 - Community-Centered Care */}
          <div className="bg-white p-8 rounded-lg border-1 border-gray-300 flex flex-col items-center justify-center min-h-[180px] md:min-h-[220px] group hover:bg-[#0E7280] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-full">
              <Image
                src="/icons/abt-3-lgo3.png"
                alt="Hospital Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-2xl font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] text-[#333333] group-hover:text-white align-middle mb-4 text-center w-full transition-colors duration-300">Community-Centered Care</h3>
            <p className="text-sm font-['Montserrat'] sm:text-base md:text-lg text-gray-600 group-hover:text-white text-center transition-colors duration-300">
              Local health workers and community engagement ensure culturally sensitive, accessible care that builds trust and improves outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Fifth Section - Roadmap */}
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
          <span className="text-[#18A093]">How We&apos;re Redefining</span>{' '}
          <span className="text-[#003366]">Decentralized Healthcare Network</span>
        </h2>

        <div className="journeySection">
          <div className="container">
            <h2 className="sectionTitle">Our Journey to 2036</h2>
            <div className="timeline h-[400vh] flex flex-col justify-between">
              {/* Phase 1 */}
              <div className="phase group w-[50%]">
                <div className="border-2  border-[#0E7280] rounded-lg p-1 md:p-4 group-hover:bg-[#0E7280] transition-all duration-300">
                  <div className="phaseHeader border-b-2 border-[#0E7280] group-hover:border-white">
                    <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat] text-[#0E7280] group-hover:text-white mb-2">Phase 1: Foundation (2024 - 2026)</h3>
                  </div>
                  <div className="phaseContent y-2 md:py-4">
                    <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat'] text-gray-700 group-hover:text-white">Building the Foundation</h3>
                    <ul className="text-sm font-['Montserrat'] sm:text-base md:text-lg text-gray-600 group-hover:text-white md:spacing-y-3 pt-4 list-none space-y-2">
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Deploy 100 TDM Centers</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">500+ Free Health Camps</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Launch Phase-1 Software Ecosystem</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">10+ Strategic Hospital Partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="phase group w-[50%]">
                <div className="border-2 border-[#0E7280] rounded-lg p-1 md:p-4 group-hover:bg-[#0E7280] transition-all duration-300">
                  <div className="phaseHeader border-b-2 border-[#0E7280] group-hover:border-white">
                    <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat] text-[#0E7280] group-hover:text-white mb-2">Phase 2: Scale & Strengthen (2026–2029)</h3>
                  </div>
                  <div className="phaseContent y-2 md:py-4">
                    <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat'] text-gray-700 group-hover:text-white">Expanding Our Reach</h3>
                    <ul className="text-sm font-['Montserrat'] sm:text-base md:text-lg text-gray-600 group-hover:text-white md:spacing-y-3 pt-4 list-none space-y-2">
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Expand to 1,000+ Centers</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Train 2,000+ Local Nurses</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Multi-language Platform Integration</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Community Health Dashboards</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="phase group w-[50%]">
                <div className="border-2 border-[#0E7280] rounded-lg p-1   md:p-4 group-hover:bg-[#0E7280] transition-all duration-300">
                  <div className="phaseHeader border-b-2 border-[#0E7280] group-hover:border-white">
                    <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat] text-[#0E7280] group-hover:text-white mb-2">Phase 3: Deep Reach & Integration (2029–2032)</h3>
                  </div>
                  <div className="phaseContent y-2 md:py-4">
                    <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat'] text-gray-700 group-hover:text-white">Deepening Our Impact</h3>
                    <ul className="text-sm font-['Montserrat'] sm:text-base md:text-lg text-gray-600 group-hover:text-white md:spacing-y-3 pt-4 list-none space-y-2">
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">5,000+ Centers in underserved areas</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Public Health System Integration</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Offline-First Mode</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Health Literacy Programs</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Phase 4 */}
              <div className="phase group w-[50%]">
                <div className="border-2 border-[#0E7280] rounded-lg p-1   md:p-4 group-hover:bg-[#0E7280] transition-all duration-300">
                  <div className="phaseHeader border-b-2 border-[#0E7280] group-hover:border-white">
                    <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat] text-[#0E7280] group-hover:text-white mb-2">Phase 4: Full Decentralization (2032–2036)</h3>
                  </div>
                  <div className="phaseContent y-2 md:py-4">
                    <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat'] text-gray-700 group-hover:text-white">Community Ownership</h3>
                    <ul className="text-sm font-['Montserrat'] sm:text-base md:text-lg text-gray-600 group-hover:text-white md:spacing-y-3 pt-4 list-none space-y-2">
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Deploy 10,000+ Centers</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Establish Animacare Public Trust</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">Transition Operations to Communities</li>
                      <li className="flex items-start before:content-[''] before:w-2 before:h-2 before:mt-[0.4em] before:rounded-full before:bg-[#0E7280] before:mr-2 before:flex-shrink-0">&quot;Healthcare Belongs to You&quot; Campaign</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Phase 5 */}
              <div className="timeline-center flex flex-row items-center justify-center z-10">
                <div className="w-[90%] md:w-[50%] bg-[#0E7280] rounded-lg p-4 text-center">
                  <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%]  align-middle capitalize font-['Montserrat] text-white mb-2">Mission Accomplished: 2036</h3>
                  <p className="text-sm font-['Montserrat'] sm:text-base md:text-lg text-white">Healthcare access for 600,000+ villages across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-6 mt-3 bg-white relative overflow-hidden">
        <div className="slide-animation">

          <Image
            src="/icons/dc-5-img.png"
            alt="Phase 3 Icon"
            width={100}
            height={100}
            className="text-[#00A99D]"
          />
        </div>
      </div>
    </div>

    {/*Powered by Government Schemes*/}
    < div className="relative bg-white overflow-hidden" >
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
          <span className="text-[#18A093]">Powered by</span>{' '}
          <span className="text-[#003366]">Government Schemes</span>
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
          <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
            <Image src="/icons/hm-gs-img1.png" alt="Gov. Schemes" width={200} height={200} className='w-20  md:w-45 h-auto object-contain' />
          </div>
          <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
            <Image src="/icons/hm-gs-img2.png" alt="Gov. Schemes" width={200} height={200} className='w-20  md:w-45 h-auto object-contain' />
          </div>
          <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
            <Image src="/icons/hm-gs-img3.png" alt="Gov. Schemes" width={200} height={200} className='w-20  md:w-45 h-auto object-contain' />
          </div>
          <div className="flex  items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
            <Image src="/icons/hm-gs-img4.png" alt="Gov. Schemes" width={200} height={200} className='w-20  md:w-45 h-auto object-contain' />
          </div>
        </div>
      </div>
    </div >
    {/* PARTNER SECTION */}
    <Partner />
  </>
  );
}
