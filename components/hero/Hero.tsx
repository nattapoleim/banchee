import CheckFeatures from '@/components/CheckFeatures'
import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const heroFeatures = [
  'Instant Transfer',
  'Payments worldwide',
  'Saving accounts',
  '100% mobile banking',
]

const Hero = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row p-10">
      <aside
        className="
          w-full flex flex-col items-center text-center gap-7 py-10
          lg:w-1/2 lg:items-start lg:text-start lg:gap-4
        "
      >
        <h1 className="text-5xl md:text-7xl font-medium lg:mb-0">
          Banking <span className="lg:block">starts here.</span>
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor
          incididunt ut labore.
        </p>
        <div className="grid grid-cols-2 gap-y-5 lg:bg-inherit lg:pr-20">
          {heroFeatures.map(feat => (
            <CheckFeatures key={feat} color="light">
              {feat}
            </CheckFeatures>
          ))}
        </div>
        <div className="space-x-5 mt-10">
          <Link href="/signup" className="btn btn-primary">
            Open Account
          </Link>
          <Link href="/compare" className="btn space-x-3">
            Compare Cards <ArrowRight size={18} className="inline-block" />
          </Link>
        </div>
      </aside>
      <aside className="w-full flex items-center justify-center h-[300px] lg:h-[500px] lg:w-1/2 relative">
        <Image
          src="/green-card.svg"
          alt="hero-green-card"
          width="0"
          height="0"
          style={{ width: '25rem', height: 'auto' }}
          priority
          className="
        lg:absolute lg:top-[20%] lg:left-[8rem] lg:rotate-[105deg] 
        rotate-[10deg]
      "
        />
        <Image
          src="/black-card.svg"
          alt="hero-green-card"
          width="0"
          height="0"
          style={{ width: '25rem', height: 'auto' }}
          className="
          absolute lg:top-[27%] lg:left-[5rem] lg:rotate-90 -bottom-2
        "
        />
      </aside>
    </div>
  )
}

export default Hero
