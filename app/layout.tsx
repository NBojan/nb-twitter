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
    url: 'https://nb-twitter.vercel.app/',
    siteName: 'NB - Twitter',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/twitter-clone-bf6ea.appspot.com/o/appImages%2F1.png?alt=media&token=b952531b-93c6-4f39-b02f-32811a68828d',
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
        url: 'https://firebasestorage.googleapis.com/v0/b/twitter-clone-bf6ea.appspot.com/o/appImages%2F1.png?alt=media&token=b952531b-93c6-4f39-b02f-32811a68828d',
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
