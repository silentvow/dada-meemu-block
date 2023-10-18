import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function Home () {
  const { setTheme } = useTheme()

  return (
    <>
      <div className='flex-col flex'>
        <div className='border-b'>
          <div className='flex h-16 items-center px-4'>
            <nav
              className='flex items-center space-x-4 lg:space-x-6'
            >
              <Link
                href='/'
                className='text-lg font-medium transition-colors hover:text-primary'
              >
                <b>DaDa &amp; MeeMu&rsquo;s Treasure Hunt</b>
              </Link>
              <Link
                href='/about'
                className='text-md font-medium transition-colors hover:text-primary'
              >
                About
              </Link>
              <Link
                href='/changelog'
                className='text-md font-medium transition-colors text-[gray] cursor-not-allowed'
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
                  <AvatarFallback>GH</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
        <div className='p-8 flex justify-center'>
          <div className='w-[1280px]'>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-17</h2>
            <ul className='list-disc p-6'>
              <li>feat: add suicide function</li>
              <li>feat: adjust score levels</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-16</h2>
            <ul className='list-disc p-6'>
              <li>feat: add changelog page</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-15</h2>
            <ul className='list-disc p-6'>
              <li>feat: add readme and license</li>
              <li>feat: add about page</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-14</h2>
            <ul className='list-disc p-6'>
              <li>feat: add extra story</li>
              <li>feat: update button design</li>
              <li>fix: ball collision issues</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-11</h2>
            <ul className='list-disc p-6'>
              <li>feat: add pause function</li>
              <li>feat: add more drop items</li>
              <li>feat: add analytic libraries</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-10</h2>
            <ul className='list-disc p-6'>
              <li>release: deploy test version</li>
              <li>feat: change images in game</li>
              <li>feat: record local high score</li>
              <li>feat: add favicon and meta tags</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-09</h2>
            <ul className='list-disc p-6'>
              <li>feat: add story scripts</li>
              <li>feat: add game instructions</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-08</h2>
            <ul className='list-disc p-6'>
              <li>feat: submit score</li>
              <li>feat: add ending screen</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-07</h2>
            <ul className='list-disc p-6'>
              <li>feat: add main menu</li>
              <li>feat: add story mode</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-06</h2>
            <ul className='list-disc p-6'>
              <li>feat: add loader</li>
              <li>fix: paddle collision issue</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-05</h2>
            <ul className='list-disc p-6'>
              <li>feat: add text</li>
              <li>fix: ball bounce issue</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-04</h2>
            <ul className='list-disc p-6'>
              <li>feat: make more stage</li>
              <li>feat: add game over screen</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-09-30</h2>
            <ul className='list-disc p-6'>
              <li>feat: make a simple stage with blocks, ball and paddle</li>
              <li>feat: make drop items</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-09-29</h2>
            <ul className='list-disc p-6'>
              <li>feat: create app</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
