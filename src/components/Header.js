import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import {
  Avatar,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function Header () {
  const { setTheme } = useTheme()
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <nav
          className='flex items-center space-x-4 lg:space-x-6'
        >
          <Link
            href='/'
            className='text-lg font-medium transition-colors hover:text-primary'
          >
            <Avatar className='h-8 w-8'>
              <AvatarImage src='/apple-touch-icon.png' alt='github' />
            </Avatar>
          </Link>
          <Link
            href='/about'
            className='text-md font-medium transition-colors hover:text-primary'
          >
            About
          </Link>
          <Link
            href='/changelog'
            className='text-md font-medium transition-colors hover:text-primary'
          >
            Changelog
          </Link>
        </nav>
        <div className='ml-auto flex items-center space-x-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                <span className='sr-only'>Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link target='_blank' href='https://github.com/silentvow/dada-meemu-block'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='github' />
            </Avatar>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
