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
        `
        <p>During my rewarding internship at Codestack, I've embraced a pivotal leadership role tasked with spearheading the development of an entirely novel website for the esteemed Mayor Lincoln of Stockton, CA. This venture transcends the realm of a conventional website creation; it's a profound undertaking aimed at architecting an online platform that authentically mirrors the city's identity while providing an avenue for its leadership to forge genuine connections with the community.</p>

        <h3 class="page-heading">Leveraging Angular's Cutting-Edge Potential</h3>
        <p>At the core of this initiative lies the powerful Angular framework, harnessed in its latest iteration. With this cutting-edge technology, we're poised to construct a digital space that not only meets contemporary expectations but sets new standards for user experience. Angular's advanced capabilities empower us to engineer a responsive, dynamic, and user-centric website that seamlessly adapts to an array of devices and screen sizes.</p>

        <h3 class="page-heading">Empowering Seamless Content Management with Intuitive CMS</h3>
        <p>However, our ambitions delve deeper. A cornerstone of our project entails crafting a robust content management system (CMS) that empowers Mayor Lincoln's dedicated team to efficiently oversee and update the website's content. This CMS is meticulously tailored to offer an intuitive and frictionless interface, ensuring that content updates can be performed seamlessly by individuals regardless of technical prowess. This democratization of content management empowers the mayor's office to communicate transparently and effectively with the public, fostering a strong sense of unity and engagement.</p>

        <h3 class="page-heading">Harmonizing Angular's Prowess with ng-bootstrap's Finesse</h3>
        <p>Angular's latest incarnation harmonizes seamlessly with the elegant ng-bootstrap framework, enhancing both aesthetics and functionality. By integrating ng-bootstrap's contemporary UI components and styling, we're sculpting an interface that's not only user-friendly but also visually captivating. This synergistic fusion guarantees that user interaction with the website isn't just intuitive but also engaging, leaving an indelible mark on visitors.</p>

        <h3 class="page-heading">Fortifying Foundations with a Resilient SQL Database</h3>
        <p>The bedrock of our endeavor is a robust SQL database meticulously designed to store and manage the website's data with efficiency. This structured approach to data management forms the cornerstone of a scalable solution for Mayor Lincoln's digital platform. The database's power lies in its capacity to facilitate data-driven features, anticipate user preferences, and optimize overall performance. This fusion of technology and strategic thinking ensures the website remains agile and responsive, even as it evolves in complexity.</p>

        <h3 class="page-heading">Transcending Code: Breathing Life into Vision</h3>
        <p>As we traverse this developmental odyssey, we're not merely crafting lines of code; we're translating Mayor Lincoln's vision into a tangible digital reality. This project underscores our technical prowess and innovative spirit as we navigate challenges and seize opportunities to deliver a solution that seamlessly aligns with the mayor's aspirations and Stockton's distinct character.</p>

        <h3 class="page-heading">Summiting Excellence: A Fusion of Technology and Purpose</h3>
        <p>In essence, our collaborative endeavor epitomizes the seamless fusion of technology, design, and purpose. By harnessing the latest potential of Angular alongside ng-bootstrap's finesse, we're erecting a bridge between the city's leadership and its residents. Our commitment to excellence and unwavering innovation propels us forward to the zenith of our aspirations: delivering a digital masterpiece that not only redefines web development benchmarks but also empowers Mayor Lincoln's office to establish an unequivocal and profound online presence, forever transforming the way Stockton engages with the world.</p>
        `,
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
      imgs: [
        {
          src: 'https://www.topgear.com/sites/default/files/2021/09/4%20Vauxhall%20Corsa.JPG',
        },
      ],
      description:
        `
        <p>My Angular Password Generator is a cutting-edge password generator application developed using Angular 16.0 and featuring the ng-bootstrap framework. Tired of using the same passwords for multiple accounts and concerned about online security? Look no further! NgPasswordGenerator is designed to be your all-in-one solution for generating strong, unique passwords and securely storing them for easy access.</p>
        
        <h3 class="page-heading">Key Features:</h3>
        <ul>
        <li><span><b>Password Generation:</b></span> Say goodbye to weak and easily guessable passwords. NgPasswordGenerator empowers you to create highly secure passwords with just a few clicks. Customize the length, character types (uppercase, lowercase, numbers, symbols), and complexity to meet the requirements of different platforms.</li>

        <li><span><b>NG Bootstrap Integration:</b></span> Built on the foundation of Angular 16.0, NgPasswordGenerator seamlessly integrates the ng-bootstrap framework, providing a modern and responsive user interface. Enjoy a smooth and intuitive experience across various devices, ensuring usability on both desktop and mobile.</li>
        
        <li><span><b>Password Strength Indicator:</b></span> Never wonder about the strength of your passwords again. NgPasswordGenerator includes a dynamic strength indicator that rates the robustness of the generated passwords. This feature assists you in crafting passwords that meet the highest security standards.</li>

        <li><span><b>Customizable Complexity:</b></span> NgPasswordGenerator features a dynamic complexity slider, allowing you to adjust the strength of generated passwords based on your security preferences. Visual indicators help you craft passwords that align with your desired level of robustness.</li>

        <li><span><b>Platform Compatibility:</b></span> NgPasswordGenerator is optimized for cross-platform usage. Access the app seamlessly on various devices, including desktops, tablets, and smartphones. Generate passwords on the go without compromising security.</li>
        </ul>

        <h3 class="page-heading">NgPasswordGenerator</h3>
        <p>is your go-to solution for generating powerful passwords that enhance your online security. Leveraging Angular 16.0 and ng-bootstrap, this app marries functionality with an elegant user experience. With its focus on generating unique passwords, NgPasswordGenerator empowers you to take charge of your online security while maintaining the utmost convenience. Upgrade your password practices with NgPasswordGenerator and experience the benefits of modern password management.</p>


        `,
      reference: 'NgPasswordGenerator',
      true_reference:'',
    },
  ];
}
