import Header from '@/components/Header'

function About () {
  return (
    <>
      <Header />
      <div className='flex-col flex'>
        <div className='p-8 flex justify-center'>
          <div className='w-[1280px]'>
            <p className='pb-8 text-4xl'>Characters</p>
            <div className='flex items-center'>
              <div>
                <p className='text-3xl'><b>灰妲 DaDa</b></p>
                <p className='text-lg underline'><a href='https://relive-project0.com/portfolio/dada/'>ReLive Project 一期生</a></p>
                <div className='mt-4 space-x-4'>
                  <a href='https://www.twitch.tv/grayda0105'>
                    <i class='fab fa-twitch fa-2x text-foreground' />
                  </a>
                  <a href='https://twitter.com/DadaRelive'>
                    <i class='fab fa-twitter fa-2x text-foreground' />
                  </a>
                  <a href='https://www.facebook.com/ParrotDaRelive'>
                    <i class='fab fa-facebook fa-2x text-foreground' />
                  </a>
                  <a href='https://www.youtube.com/channel/UCx7GU8C3cr7vqp_SbS-8P-w'>
                    <i class='fab fa-youtube fa-2x text-foreground' />
                  </a>
                </div>
              </div>
              <img className='h-[480px] object-contain' src='https://relive-project0.com/wp-content/uploads/2023/08/003-1.png' alt='dada' />
              <img className='h-[480px] object-contain' src='https://relive-project0.com/wp-content/uploads/2023/06/咪姆立繪.png' alt='meemu' />
              <div>
                <p className='text-3xl'><b>咪姆 MeeMu</b></p>
                <p className='text-lg underline'><a href='https://relive-project0.com/portfolio/meemu/'>ReLive Project 二期生</a></p>
                <div className='mt-4 space-x-4'>
                  <a href='https://www.twitch.tv/0_meemu_0'>
                    <i class='fab fa-twitch fa-2x text-foreground' />
                  </a>
                  <a href='https://twitter.com/MeeMuRelive'>
                    <i class='fab fa-twitter fa-2x text-foreground' />
                  </a>
                  <a href='https://www.facebook.com/profile.php?id=100069810225720'>
                    <i class='fab fa-facebook fa-2x text-foreground' />
                  </a>
                  <a href='https://www.youtube.com/channel/UCh2qIv35rb4o7DKsdaXjUCw'>
                    <i class='fab fa-youtube fa-2x text-foreground' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 p-8 flex justify-center'>
          <div>
            <p className='pb-8 text-4xl'>Motivation</p>
            <iframe width='1280' height='720' src='https://www.youtube.com/embed/1w4Ktq3c_Mc?si=W80OdoZUu8-LhCzL' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
