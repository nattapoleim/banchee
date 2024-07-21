'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  {
    title: 'Features',
    path: '/features',
  },
  {
    title: 'Compare',
    path: '/compare',
  },
  {
    title: 'Support',
    path: '/support',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [screenWidth, setSreenWidth] = useState(0)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  useEffect(() => {
    setSreenWidth(window.innerWidth)

    const handleResize = () => {
      setSreenWidth(window.innerWidth)
    }

    if (screenWidth >= 768) {
      setIsOpen(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screenWidth])

  return (
    <section className="py-5">
      <nav className="items-center justify-between text-sm flex">
        <Link href="/" className="font-bold text-2xl text-primary-green">
          banchee.
        </Link>
        <div className="space-x-2 ml-16 content-center hidden md:flex">
          {links.map(link => (
            <Link
              key={link.title}
              href={link.path}
              className={`
                border py-2 px-4 rounded-md border-transparent
                hover:bg-primary-muted duration-100
              `}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="space-x-3 hidden md:flex">
          <Link href="/login" className="btn">
            Login
          </Link>
          <Link href="/signup" className="btn btn-primary">
            Open Account
          </Link>
        </div>

        {/* Mobile Menu */}

        <Sheet open={isOpen} onOpenChange={handleOpenChange}>
          <SheetTrigger asChild>
            <button className="flex items-center md:hidden">
              <Menu className="size-10 p-2 hover:bg-primary-muted duration-150" />
            </button>
          </SheetTrigger>
          <SheetContent className="flex items-center justify-start flex-col pt-16 w-1/2 sm:w-2/5">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="font-bold text-2xl text-primary-green">
                  banchee.
                </Link>
              </SheetTitle>
              <SheetDescription className="text-xs">Banking starts here.</SheetDescription>
            </SheetHeader>
            <div className="content-center md:hidden flex flex-col items-center gap-4 mt-8">
              {links.map(link => (
                <Link
                  key={link.title}
                  href={link.path}
                  onClick={() => setIsOpen(prev => !prev)}
                  className={`
                border py-2 px-4 rounded-md border-transparent
                hover:bg-primary-muted duration-100
              `}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </section>
  )
}

export default Navbar
