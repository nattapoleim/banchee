import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import React from 'react'

interface CheckFeaturesProps {
  children: React.ReactNode
  color: 'green' | 'light'
}

const CheckFeatures: React.FC<CheckFeaturesProps> = ({ children, color }) => {
  return (
    <div className="flex items-center gap-3">
      <Check
        size={16}
        className={cn(
          'rounded-full size-6 px-1',
          color === 'light'
            ? 'bg-primary-lightGreen text-primary-green'
            : 'bg-primary-green text-primary-lightGreen'
        )}
      />
      {children}
    </div>
  )
}

export default CheckFeatures
