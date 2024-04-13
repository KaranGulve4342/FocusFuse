// // import Link from '@/components/Link'
// // import { PageSEO } from '@/components/SEO'
// // import Tag from '@/components/Tag'
// // import siteMetadata from '@/data/siteMetadata'

// // import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
// // import { InferGetStaticPropsType } from 'next'
// // import { allBlogs } from 'contentlayer/generated'
// // import type { Blog } from 'contentlayer/generated'
// // import { useState } from 'react';
// // import "./index.module.css"

// // {/* <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css"> */}


// // const MAX_DISPLAY = 5

// // export const getStaticProps = async () => {
// //   const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
// //   const posts = allCoreContent(sortedPosts)

// //   return { props: { posts } }
// // }

// // export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {

// // const newSub = (e) => {
// //   e.preventDefault()
// //   console.log("new sub")
// // }


// //   return (
// //     <>
// //      {/* <head>
// //       <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
// //     </head> */}
// //       <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

// //       <div className="relative flex-col justify-center items-center py-20 w-full">



// //       <div className="absolute top-0 xl:left-48">
// //       <svg className='opacity-5 fill-red-500 w-60 h-60' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.95 262.48"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="_8ZU48m.tif" data-name="8ZU48m.tif"><path d="M33.06,134.62c-8.13,0-24,2-33.06,2,.64-8.67.59-16.34,1.92-23.76,1.69-9.42,4.54-18.63,6.83-27.94.76-3.07,2.54-4.59,5.7-5.31,9.87-2.23,19.67-4.79,29.48-7.24a7.91,7.91,0,0,0,4-2.07L16,68.38C41.16,27.15,76.29,2.71,123.94.22,175.84-2.49,215.68,20,245,64.16c-15.93,1.89-30.83.33-45.62,1.34,0,.69,0-.7,0,0,7.33.64,14.64,2.39,22,3.08,7.59.7,15.16,1.47,23.75,2.3-8.32,2.35-15.67,5.26-23.13,7.36.07.47-.07-.48,0,0h30c6.92,16.58,10.94,33.29,11.08,51.43-27,.82-53.68,2.26-80.31,3.07h0l78.7,14.57C257.59,197.6,213.87,255.81,142.69,262,73.41,268,13,218.51,2.7,153.4c21.39-2.77,42.39-6.34,63.41-9.06,0-.52,0,.52,0,0-16.86-1.05-44.28.57-61.5-.39,0-.22,9.79-2.92,9.75-3.14"/></g></g></g></svg>
// //       </div>
// //       <div className="uppercase tracking-normal font-logoFont text-5xl md:text-[60px]  ralative flex justify-center ">
// //         <span className="">the&nbsp;</span>
// //         <span className="text-red-500">samurai</span>
// //         <span className="">nation</span>
// //       </div>

// // <section className="bg-white dark:bg-gray-900">
// //   <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
// //       <div className="mx-auto max-w-screen-md text-center">
// //           <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white text-center">Our Newsletter ≠  Any Others</h2>
// //           <p className="mx-auto max-w-2xl font-semibold text-gray-500 text-center dark:text-gray-400">Join Now .. btw it's free 'cuz u know? we r not selling yogurt here, we just talk.
// //           </p>
// //           <p className="mx-auto text-sm mb-8 max-w-2xl text-gray-500 md:mb-5 text-center dark:text-gray-400">
// //           We will not promise to be regular but when we go out and send it off, we garantee that it will be cool and useful, we mean It's <em>short</em>, <em>visual</em> and above all it's a Nation 😺
          
// //           </p>
// //           <form id="sib-form" method="POST" action="https://bb97d52d.sibforms.com/serve/MUIFAOkQU2xUFvag7EIt460LogLTrl2JF6_jmAwezlLsLTMd7crgueEuX6O1h2jVrP4DD1Q5-KdbM4AHeCh54nQpKS70mGh0VWI6Er7Q0WAlq_rEtDJmNTKbB5UNQqn0_TXrESFiyLCPn8N5SvRDH-jOVq6fsYhbW1-edGPE6pU9kJsQE5-zqJVLdD7x66m5ImyJI5PuojEitkZt">
// //               <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
// //                   <div className="relative w-full">
// //                       <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
// //                       <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
// //                           <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
// //                       </div>
// //                       <input className="outline-none transition-all duration-700 block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-200 rounded-lg sm:rounded-none sm:rounded-l-lg focus:ring-gray-200 focus:bg-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 border-0 dark:focus:bg-gray-800" placeholder="in case.., ur email goes here 😁" type="email"  required                                                                                                                                                id="EMAIL" name="EMAIL" autoComplete="on" data-required="true" 
// //                       />
// //                   </div>
// //                   <div>
// //                       <button onClick={newSub} type="submit" className="transition duration-700 py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
// //                   </div>
// //               </div>
// //               <div className="mx-auto max-w-screen-sm text-sm text-center text-gray-500 newsletter-form-footer dark:text-gray-300">By joining, you agree to join the nation and be one of us 👉 we wrote a&nbsp;
// //               <Link href="/manifesto" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Manifesto</Link> where we agree to some facts.
// //               </div>
// //           </form>
// //       </div>
// //   </div>
// // </section>

// //       </div>
// //     </>
// //   )
// // }

// import Link from '@/components/Link'
// import { PageSEO } from '@/components/SEO'
// import Tag from '@/components/Tag'
// import siteMetadata from '@/data/siteMetadata'

// import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
// import { InferGetStaticPropsType } from 'next'
// import { allBlogs } from 'contentlayer/generated'
// import type { Blog } from 'contentlayer/generated'
// import { useRouter } from 'next/router';
// import "./index.module.css"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import firebase from '../utils/firebase';
// import 'firebase/database';

// const MAX_DISPLAY = 5

// export const getStaticProps = async () => {
//   const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
//   const posts = allCoreContent(sortedPosts)

//   return { props: { posts } }
// }

// export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
//   const router = useRouter();

//   const newSub = async (e) => {
//     e.preventDefault();
//     const email = e.target.elements.EMAIL.value;
//     try {
//       const response = await fetch('/api/subscribe', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });
//       if (response.ok) {
//         console.log('Subscription successful');
//         toast.success('Subscription successful');
//         router.push('/');
//       } else {
//         console.error('Subscription failed');
//         toast.error('Subscription failed');
//       }
//     } catch (error) {
//       console.error('Error subscribing:', error);
//     }
//   }

//   // const newSub = async (e) => {
//   //   e.preventDefault();
//   //   const email = e.target.elements.EMAIL.value;
//   //   try {
//   //     await firebase.database().ref('subscribers').push({
//   //       email: email,
//   //       timestamp: firebase.database.ServerValue.TIMESTAMP
//   //     });
//   //     toast.success('Subscription successful');
//   //     router.push('/');
//   //   } catch (error) {
//   //     console.error('Error subscribing:', error);
//   //     toast.error('Subscription failed');
//   //   }
//   // }

 

//   return (
//     <>
//       <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
//       <ToastContainer />
//       <div className="relative flex-col justify-center items-center py-20 w-full">
//         <section className="bg-white dark:bg-gray-900">
//           <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
//             <div className="mx-auto max-w-screen-md text-center">
//               <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white text-center">Our Newsletter ≠  Any Others</h2>
//               <p className="mx-auto max-w-2xl font-semibold text-gray-500 text-center dark:text-gray-400">Join Now .. btw it's free 'cuz u know? we r not selling yogurt here, we just talk.
//               </p>
//               <p className="mx-auto text-sm mb-8 max-w-2xl text-gray-500 md:mb-5 text-center dark:text-gray-400">
//               We will not promise to be regular but when we go out and send it off, we garantee that it will be cool and useful, we mean It's <em>short</em>, <em>visual</em> and above all it's a Nation 😺
//               </p>
//               <form id="sib-form" onSubmit={newSub} method="POST">
//                   <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
//                       <div className="relative w-full">
//                           <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
//                           <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//                               <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
//                           </div>
//                           <input className="outline-none transition-all duration-700 block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-200 rounded-lg sm:rounded-none sm:rounded-l-lg focus:ring-gray-200 focus:bg-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 border-0 dark:focus:bg-gray-800" placeholder="in case.., ur email goes here 😁" type="email"  required                                                                                                                                                id="EMAIL" name="EMAIL" autoComplete="on" data-required="true" 
//                           />
//                       </div>
//                       <div>
//                           <button type="submit" className="transition duration-700 py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
//                       </div>
//                   </div>
//                   {/* <div className="mx-auto max-w-screen-sm text-sm text-center text-gray-500 newsletter-form-footer dark:text-gray-300">By joining, you agree to join the nation and be one of us 👉 we wrote a&nbsp;
//                   <Link href="/manifesto" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Manifesto</Link> where we agree to some facts.
//                   <Link href="/" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Manifesto</Link> where we agree to some facts.
//                   </div> */}
//               </form>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   )
// }

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import "./index.module.css"
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');

  const handleSubscription = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setEmail('');
        router.push('/');
      } else {
        toast.error(data.error || 'Subscription failed');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      toast.error('Subscription failed');
    }
  };

  return (
    // <div>
    //   <form onSubmit={handleSubscription}>
    //     <input
    //       type="email"
    //       placeholder="Enter your email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //     <button type="submit">Subscribe</button>
    //   </form>
    //   <ToastContainer />
    // </div>
    
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
       <ToastContainer />
       <div className="relative flex-col justify-center items-center py-20 w-full">
         <section className="bg-white dark:bg-gray-900">
           <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
             <div className="mx-auto max-w-screen-md text-center">
               <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white text-center">5 minutes can change your life.</h2>
               <p className="mx-auto max-w-2xl font-semibold text-gray-500 text-center dark:text-gray-400 mb-10">Your Weekly Spark
                  5 minutes can change your life.
                  We provide you with our weekly share of tech-news,quests and inspiring anecdotes from our fellow adventurers.
                  So let's ignite our potential together! 💫
               </p>
               {/* <p className="mx-auto text-sm mb-8 max-w-2xl text-gray-500 md:mb-5 text-center dark:text-gray-400">
               We will not promise to be regular but when we go out and send it off, we garantee that it will be cool and useful, we mean It's <em>short</em>, <em>visual</em> and above all it's a Nation 😺
               </p> */}
               <form onSubmit={handleSubscription}>
                   <div className=  "items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                       <div className="relative w-full">
                           <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                           <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                               <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                           </div>
                           <input className="outline-none transition-all duration-700 block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-200 rounded-lg sm:rounded-none sm:rounded-l-lg focus:ring-gray-200 focus:bg-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 border-0 dark:focus:bg-gray-800" placeholder="in case.., ur email goes here 😁" type="email"  
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required                                                                                                                                                id="EMAIL" name="EMAIL" autoComplete="on" data-required="true" 
                           />
                       </div>
                       <div>
                           <button type="submit" className="transition duration-700 py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                       </div>
                   </div>
                   {/* <div className="mx-auto max-w-screen-sm text-sm text-center text-gray-500 newsletter-form-footer dark:text-gray-300">By joining, you agree to join the nation and be one of us 👉 we wrote a&nbsp; */}
                   {/* <Link href="/" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Manifesto</Link> where we agree to some facts.
                   <Link href="/" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Manifesto</Link> where we agree to some facts.
                   </div> */}
               </form>
             </div>
           </div>
         </section>
       </div>
    </>
    
  );
}