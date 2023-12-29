import './globals.css'
import type { Metadata } from 'next'
import { AppProvider } from "./context";
import { Cabin, Quicksand } from 'next/font/google'
import { CommentModal, LeftSidebar, SidebarModal, TweetModal, Widgets } from './components';

const cabin = Cabin({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cabin' 
})
const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand' 
})

export const metadata: Metadata = {
  title: "NB - Twitter",
  description: 'NB Twitter clone. Project made for learning and self-development.',
  keywords: "NB, NBojan, nbojan, tweet, clone, work, project, development, focus, twitter",
  openGraph: {
    title: 'NB - Twitter',
    description: 'NB Twitter clone. Project made for learning and self-development.',
    url: 'https://nb-instagram.vercel.app/',
    siteName: 'NB - Twitter',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/insta-clone-cb289.appspot.com/o/appImages%2Fthumb.png?alt=media&token=7e9e5088-a05d-44f7-b623-33588845e38c',
        width: 1280,
        height: 642,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'NB - Twitter',
    site: 'NB - Twitter',
    description: 'NB Twitter clone. Project made for learning and self-development.',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/insta-clone-cb289.appspot.com/o/appImages%2Fthumb.png?alt=media&token=7e9e5088-a05d-44f7-b623-33588845e38c',
        width: 1280,
        height: 642,
      },
    ],
    creator: 'NBojan',
    creatorId: 'NBojan',
    card: 'summary'
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cabin.variable} ${quicksand.variable}`}>
      <body className='dark:bg-twitterDark'>
        <AppProvider>
          <main className="container mx-auto xl:max-w-[1280px] min-h-screen flex">
            <LeftSidebar />
            {children}
            <Widgets />
          </main>
          
          <TweetModal />
          <CommentModal />
          <SidebarModal />
        </AppProvider>
      </body>
    </html>
  );
}
