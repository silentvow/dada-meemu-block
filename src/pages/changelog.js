import Header from '@/components/Header'

function Changelog () {
  return (
    <>
      <Header />
      <div className='flex-col flex'>
        <div className='p-8 flex justify-center'>
          <div className='w-[1280px]'>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-22</h2>
            <ul className='list-disc p-6'>
              <li>feat: adjust extra story content</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-21</h2>
            <ul className='list-disc p-6'>
              <li>feat: add transition between story scene and game</li>
              <li>feat: adjust story chapter 1 content</li>
              <li>feat: adjust fonts</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-19</h2>
            <ul className='list-disc p-6'>
              <li>feat: add language switcher</li>
              <li>fix: window sizing</li>
            </ul>
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

export default Changelog

export async function getStaticProps (context) {
  return {
    props: {
      messages: (await import(`../locales/${context.locale}.json`)).default,
    },
  }
}
