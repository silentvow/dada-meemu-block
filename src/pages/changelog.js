import Header from '@/components/Header'
import { useTranslations } from 'next-intl'

function Changelog () {
  const t = useTranslations('changelog')
  return (
    <>
      <Header />
      <div className='flex-col flex'>
        <div className='p-8 flex justify-center'>
          <div className='w-[1280px]'>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-29</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-29-1')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-28</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-28-1')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-23</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-23-1')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-22</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-22-1')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-21</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-21-1')}</li>
              <li>{t('2023-10-21-2')}</li>
              <li>{t('2023-10-21-3')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-19</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-19-1')}</li>
              <li>{t('2023-10-19-2')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-17</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-17-1')}</li>
              <li>{t('2023-10-17-2')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-16</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-16-1')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-15</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-15-1')}</li>
              <li>{t('2023-10-15-2')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-14</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-14-1')}</li>
              <li>{t('2023-10-14-2')}</li>
              <li>{t('2023-10-14-3')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-11</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-11-1')}</li>
              <li>{t('2023-10-11-2')}</li>
              <li>{t('2023-10-11-3')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-10</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-10-1')}</li>
              <li>{t('2023-10-10-2')}</li>
              <li>{t('2023-10-10-3')}</li>
              <li>{t('2023-10-10-4')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-09</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-09-1')}</li>
              <li>{t('2023-10-09-2')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-08</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-08-1')}</li>
              <li>{t('2023-10-08-2')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-07</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-07-1')}</li>
              <li>{t('2023-10-07-2')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-06</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-06-1')}</li>
              <li>{t('2023-10-06-2')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-05</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-05-1')}</li>
              <li>{t('2023-10-05-2')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-10-04</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-10-04-1')}</li>
              <li>{t('2023-10-04-2')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-09-30</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-09-30-1')}</li>
              <li>{t('2023-09-30-2')}</li>
            </ul>
            <h2 className='text-2xl border-b border-b-foreground'>2023-09-29</h2>
            <ul className='list-disc p-6'>
              <li>{t('2023-09-29-1')}</li>
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
