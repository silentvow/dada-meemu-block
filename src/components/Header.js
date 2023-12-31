import { Coffee, Languages, Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

function Header () {
  const t = useTranslations()
  const { setTheme } = useTheme()
  const router = useRouter()

  const switchToLocale = useCallback((locale) => {
    router.push(router.pathname, router.asPath, { locale })
  }, [router])

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
            {t('header.about')}
          </Link>
          <Link
            href='/changelog'
            className='text-md font-medium transition-colors hover:text-primary'
          >
            {t('header.changelog')}
          </Link>
        </nav>
        <div className='ml-auto flex items-center space-x-4'>
          <DropdownMenu>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='icon'>
                      <Languages className='h-[1.2rem] w-[1.2rem]' />
                      <span className='sr-only'>Change language</span>
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('header.change_language')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem onClick={() => switchToLocale('zh')}>
                中文
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchToLocale('en')}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='icon'>
                      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                      <span className='sr-only'>Change theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('header.change_theme')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
          <Link target='_blank' href='https://www.buymeacoffee.com/peternwolf'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant='ghost' size='icon'>
                    <Coffee className='h-[1.2rem] w-[1.2rem]' />
                    <span className='sr-only'>Buy me a coffee</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('header.buy_me_a_coffee')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Link target='_blank' href='https://github.com/silentvow/dada-meemu-block'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar className='h-8 w-8'>
                    <AvatarImage className='dark:invert' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='github' />
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('header.view_github')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
