import Link from 'next/link'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

function Home () {
  return (
    <div className='hidden flex-col md:flex'>
      <div className='border-b'>
        <div className='flex h-16 items-center px-4'>
          <nav
            className='flex items-center space-x-4 lg:space-x-6'
          >
            <Link
              href='/examples/dashboard'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Overview
            </Link>
            <Link
              href='/examples/dashboard'
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
              Customers
            </Link>
            <Link
              href='/examples/dashboard'
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
              Products
            </Link>
            <Link
              href='/examples/dashboard'
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
              Settings
            </Link>
          </nav>
          <div className='ml-auto flex items-center space-x-4'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='/avatars/01.png' alt='@shadcn' />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        123
      </div>
    </div>
  )
}

export default Home
