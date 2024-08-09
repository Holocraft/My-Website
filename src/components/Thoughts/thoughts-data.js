export const thoughts = [
  {
    id: "1",
    title: "Old School Javascript",
    date: "8/8/24",
    body: `
    <p>I remember when I first tried writing Javascript. It was the late 1990's and I was creating a geocities website for my gaming clan.
    I learned how to write HTML from a tutorial on tucows.com and wanted to put more interactivity into the site. Javascript was at version
    ES3 at the time. I had a little experience in C++ so learning Javascript was very different in that it wasn't compiled and was used as the
    language of the web.
    </p>

    <p>Back then, you didn't have hundreds of libraries in the ecosystem. It was just Javascript and that's what we had to work with.
    There were a lot of things that you had to think about for certain edge cases. I remember learning about the "defensive semicolon"
    and how you should put that at the start of every JS file. The purpose was for when your JS gets minified and the previous file didn't
    end with a semicolon, this would protect against errors. Especially if you used immediately-invoked function expressions, which would
    act as if it was a continuation of the line in the previous file if not terminated properly with a semicolon.
    There was so much that could go wrong in old school JS.
    </p>

    <p>I do miss those days, though. No extra libraries, no having to learn
    new technologies every month, no need to worry about breaking changes in new versions of libraries when you update. Don't get me wrong,
    todays Javascript is so much better with all of the new functionality and ease of use with npm packages. It's just nice to look
    back sometimes and see how far it's come.</p>
    `,
  },
  {
    id: "2",
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
    id: "3",
    title: "Nostalgic Retro Gaming",
    date: "2/16/22",
    body: `
    <p>I purchased a <a href="https://store.steampowered.com/bundle/21478/FINAL_FANTASY_IVI_Bundle/">bundle</a> in Steam for one of my favorite gaming franchises. Final Fantasy. It comes with FF I thru FF VI. I played some 
    of these games in my childhood and absolutely loved them.</p>

    <p>I played FF I when it came out on the NES in 1990 and was blown away at the game mechanics. I had never played a turn-based combat system
    before so this was all new territory for me. I also played FF IV which I never finished. My all-time favorite Final Fantasy was FF VI.
    Amazing story, new game mechanics, and great characters.</p>

    <p>So needless to say I've been enjoying playing through them again. I finally finished FF IV after 20 years so my sense of accomplishment
    was through the roof. I also still love the pixel style of those games to this day. Highly recommend!</p>
    `,
  },
  {
    id: "4",
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
    id: "5",
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
