import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  constructor() {}

  project = [
    {
      name: 'Stockton Mayor Website',
      imgs: [
        { src: 'https://i.imgur.com/z3DEcHr.png' },
        { src: 'https://i.imgur.com/5gQp202.png' },
        { src: 'https://i.imgur.com/MpBm1PY.png' },
        { src: 'https://i.imgur.com/YT3iMeN.png' },
      ],
      description:
        "As part of my internship at Codestack, I am leading the development of a new website for Mayor Lincoln of Stockton, CA. This ambitious project involves building the website from the ground up, along with the development of a robust content management system (CMS) that empowers the mayor's team to efficiently edit and manage site content. The CMS is being crafted to offer a seamless and intuitive experience, enabling easy updates to the website's information and ensuring that the mayor's office can effectively communicate with the public. In addition to the website and CMS, we are implementing a powerful SQL database to store and manage the site's data effectively. This will provide a solid foundation for data-driven features and enhance the website's overall performance. The development process is an exciting opportunity to showcase our technical expertise and creativity, as we aim to deliver a cutting- edge solution that empowers Mayor Lincoln's office to engage with the community effectively.",
      reference: 'StocktonMayorWebsite',
    },
    {
      name: 'CORSACRAFT',
      imgs: [
        { src: 'https://i.imgur.com/8OksmoP.png' },
        { src: 'https://i.imgur.com/8RqvWLT.png' },
        { src: 'https://i.imgur.com/u1QhfwO.png' },
        { src: 'https://i.imgur.com/LHPNbiT.png' },
      ],
      description: `
      <span class="corsacraft russo-one">CORSACRAFT</span>, my profound passion project, seamlessly merges my two greatest passions: the world of software engineering and the exhilarating realm of racing. This endeavor is a heartfelt endeavor to resurrect and rejuvenate the legendary treasure trove of mods known as Assettoland. Despite its storied history within the modding community and sim-racing enthusiasts, Assettoland faced a decline and eventual closure in 2021 due to various circumstances. This project is my unwavering commitment to breathe new life into this invaluable resource that holds a special place in my heart.
      
      <h3 class="page-heading">Mission</h3>
      <p>At the heart of CORSACRAFT lies a noble mission: to revive the legacy of Assettoland and transcend its previous limitations. My vision encompasses more than just a mere repository restoration; I aim to empower the mod creators who contribute to this ecosystem. By providing a dedicated platform, mod creators can establish personalized profiles that showcase their average mod ratings, download statistics, and other essential insights. This approach honors their dedication and hard work, while simultaneously enhancing the modding experience for users.</p>

      <h3 class="page-heading">Technological Foundation</h3>
      <p><span class="corsacraft russo-one">CORSACRAFT</span> stands on the sturdy foundation of Angular 16.0.5, a powerful and forward-looking technology that empowers seamless user interactions and dynamic content delivery. The project also embraces ngBootstrap, a formidable companion that enhances user experience through sophisticated styling and layout components.</p>

      <h3 class="page-heading">Innovation and Impact</h3>
      <p>
      <span class="corsacraft russo-one">CORSACRAFT</span> is more than just a technical endeavor; it's a revolution poised to transform the landscape of sim-racing modding. This project utilizes cutting-edge technologies and user-centric design principles to offer an enriching experience to the sim-racing community. By reviving Assettoland, <span class="corsacraft russo-one">CORSACRAFT</span> fosters creativity, unity, and a shared passion for virtual racing.
      </p>

      <h3 class="page-heading">Vision and Aspiration</h3>
      <p>As I dedicate countless hours to crafting every line of code and meticulously designing every facet of <span class="corsacraft russo-one">CORSACRAFT</span>, my vision remains crystal clear: to create a platform that stands as a testament to nostalgia and innovation. This venture is an invitation for enthusiasts—both veterans and newcomers—to embark on a journey that transcends the virtual racing experience. With <span class="corsacraft russo-one">CORSACRAFT</span>, I aspire to honor the legacy of Assettoland, celebrate the present, and carve an extraordinary future for the global modding community and sim-racing enthusiasts.</p>

      <h3 class="page-heading">Conculsion</h3>
      <p>CORSACRAFT is an exhilarating journey that unites the spirit of the past, the vibrancy of the present, and the promise of an extraordinary future. This project embodies a dedication to preserving heritage, fostering creativity, and shaping a new narrative in the world of sim-racing. Join me on this exciting voyage as we breathe life into a dream that holds the power to redefine the modding landscape and leave an indelible mark on sim-racing history.</p>

        `,
      reference: 'CORSACRAFT',
      true_reference:
        'https://corsacraftapp-d0jlgpqnq-proharrisonw-gmailcom.vercel.app',
    },
    {
      name: 'SuppWorld!',
      imgs: [
        { src: 'https://i.imgur.com/7QX6Rhb.png' },
        { src: 'https://i.imgur.com/uo6v0c1.png' },
        { src: 'https://i.imgur.com/kTRyWPk.png' },
      ],
      description: `
<p>SuppWorld is a cutting-edge single-page application (SPA) built using Angular 16. The project's core focus is on providing a seamless and engaging user experience through dynamic DOM manipulation for navigation. By utilizing Bootstrap for styling and layout, SuppWorld ensures that users can access various sections of the application with ease, all without the need for traditional Angular routing.
</p>
<h3 class="page-heading">Key Features:</h3>

<ul>
  <li><b>Angular 16:</b> SuppWorld harnesses the power of Angular 16, incorporating the latest features and enhancements to deliver an exceptional user experience.</li>
  <li><b>DOM Manipulation Navigation:</b> Unlike traditional Angular routing, SuppWorld employs DOM manipulation to navigate between different sections of the application. This approach offers a unique and streamlined way for users to explore content effortlessly.</li>
  <li><b>Bootstrap Integration:</b> The application is styled using Bootstrap, resulting in a clean and modern visual design that adapts seamlessly to different screen sizes. This ensures a consistent and user-friendly experience across various devices.</li>
</ul>

<h3 class="page-heading">Project Highlights:</h3>
<p>SuppWorld redefines the way users interact with a single-page application. By focusing on DOM manipulation-based navigation, the project eliminates the need for page reloading and offers a fluid browsing experience. Users can explore the application's diverse sections, such as Home, About, Services, and Contact, all while enjoying smooth transitions and real-time content updates.</p>

<p>Whether users are learning about the company's mission and team through the "About" section, exploring the range of services offered in the "Services" section, or reaching out for inquiries via the "Contact" section, SuppWorld ensures every interaction is intuitive and visually pleasing.</p>

<h3 class="page-heading">Project Vision:</h3>
<p>SuppWorld envisions a future where single-page applications transcend traditional navigation paradigms. By demonstrating the potential of DOM manipulation for seamless user experiences, the project aims to inspire the development of more interactive and efficient web applications. Through its innovative approach and integration of the latest technologies, SuppWorld sets the stage for a new era of web development.</p>

<p>In summary, SuppWorld represents a pioneering leap in single-page application design. By combining the power of Angular 16, the elegance of Bootstrap, and the creativity of DOM manipulation-based navigation, the project redefines user interaction, offering a glimpse into the exciting possibilities of the web's future.</p>
      `,
      reference: 'SuppWorld',
      true_reference: 'thisreference',
    },
    {
      name: 'Angular Password Generator',
      imgs: [{ src: 'assets/' }, { src: 'assets/' }, { src: 'assets/' }],
      description:
        'This is a description o fmy project that i am working so i can go to ocoved bruh so this is sosfuj',
      reference: 'NgPasswordGenerator',
    },
  ];
}
