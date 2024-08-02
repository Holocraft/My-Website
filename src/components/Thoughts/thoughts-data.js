export const thoughts = [
  {
    id: "1",
    title: "First Impressions with Next.js",
    date: "11/1/22",
    body: `
    <p>It seems everyone is doing SSR (Server-side Rendering) these days so I figured I would give it a try. Next.js is a framework that incorporates
    SSR into your project as well as many other features. Since it's a framework, it also has backend support built-in.
    I have to say, after looking through the docs and trying it out, it's super fast and a joy to work with.
    There's a lot of built-in functionality that comes with it to make the developer experience smooth and easy.</p>

    <p>I especially like the new next/image component that takes care of a lot of extra work behind the scenes. It takes care of image layout shift
    while loading a page so you don't have to hardcode a placeholder image size while the image loads. It also optimizes image files
    to improve web vitals readings. The time to paint is significantly reduced so it makes the UX amazing.</p>

    <p>The next/link component is also really nice. It makes route navigation a breeze. If you need to navigate to another page in your app,
    just use <Link /> and point to a defined route. This is only meant for internal navigation, though.
    If you want to navigate to an external site, you'll still have to use a plain old anchor tag.</p>

    <p>There is a lot more to this great framework but I'll keep this short. Overall, I'm really impressed. I can't wait to see
    what future features Vercel comes up with. Check it out at <span><a href="https://nextjs.org/" target="_blank">Next.js</a></span></p>
    `,
  },
  {
    id: "2",
    title: "Nostalgic Retro Gaming",
    date: "2/16/22",
    body: `
    <p>I purchased a bundle in Steam for one of my favorite gaming franchises. Final Fantasy. It comes with FF I thru FF VI. I played some 
    of these games in my childhood and absolutely loved them.</p>

    <p>I played FF I when it came out on the NES in 1990 and was blown away at the game mechanics. I had never played a turn-based combat system
    before so this was all new territory for me. I also played FF IV which I never finished. My all-time favorite Final Fantasy was FF VI.
    Amazing story, new game mechanics, and great characters.</p>

    <p>So needless to say I've been enjoying playing through them again. I finally finished FF IV after 20 years so my sense of accomplishment
    was through the roof. I also still love the pixel style of those games to this day. Highly recommend!</p>
    `,
  },
  {
    id: "3",
    title: "Six Months Into New Job",
    date: "8/5/21",
    body: `
    <p>I've been working for Inxeption for six months now and am really enjoying my time here. I'm part of the UX team and everyone is amazing.
    This is the first time I've worked in an e-commerce type of company so the challenges are much different than the financial or cyber security
    industry. I really have to think about performance and how it affects load times for a product list.</p>

    <p>It looks like they recently moved from an Ember app to React. I've never used Ember before but it seems a bit slower vs React from what 
    I've read. It seems like more and more companies are moving to React. I'm sure it has something to do with the developer experience
    as well as being more light-weight than other frameworks/libraries.</p>

    <p>So far I've been squashing lots of bugs. There was only one front end engineer in the company so he really appreciates someone
    else sharing the load. I've been implementing some small features for the admin tools app like adding forms for updating customer
    info and some toggles for setting customer permissions.</p>
    `,
  },
  {
    id: "4",
    title: "The State of Interviewing",
    date: "12/12/20",
    body: `
    <p>I've been through a lot of software engineering interviews. They are my archnemesis. My Kryptonite. 
    I can't tell you how many times I've gotten to the technical interview and completely froze up.
    For me, when someone is watching me code during an interview, I become absolutely useless. I get so nervous that I can't function (no pun intended).
    It's like I forgot everything about Javascript and React. I know that I'm proficient, but I just can't recall how to write a 
    <strong>splice</strong> function for example. I've had some companies say that I can't reference any docs or use the internet in general
    for help. I think that's insane. I would venture to guess that a majority of engineers don't remember every single function
    in their respective language.</p>

    <p>There has to be a better way to vet software engineers than hovering over them while they try to figure out a problem.
    I have had a few companies do take-home projects and I excel at those. In fact, it's how I got offers for most of the places I've worked for.
    I can explain everything I did in detail and walk through any questions interviewers have for me. Take-home projects are very rare, though. 
    Not a lot of companies do them. More companies should have take-home projects as an option for people. I feel like they pass up a lot of 
    talented engineers by running them through a leetcode style interview.</p>
    `,
  },
];
