import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor() { }

  project = [
    {
      name: 'Stockton Mayor Website',
      imgs: [
        { src: 'assets/Mayor-cms.png' },
        { src: 'assets/Mayor-events.png' },
        { src: 'assets/Mayor-focus.png' },
        { src: 'assets/Mayor-footer.png' },
      ],
      description: 'As part of my internship at Codestack, I am leading the development of a new website for Mayor Lincoln of Stockton, CA. This ambitious project involves building the website from the ground up, along with the development of a robust content management system (CMS) that empowers the mayor\'s team to efficiently edit and manage site content. The CMS is being crafted to offer a seamless and intuitive experience, enabling easy updates to the website\'s information and ensuring that the mayor\'s office can effectively communicate with the public. In addition to the website and CMS, we are implementing a powerful SQL database to store and manage the site\'s data effectively. This will provide a solid foundation for data-driven features and enhance the website\'s overall performance. The development process is an exciting opportunity to showcase our technical expertise and creativity, as we aim to deliver a cutting- edge solution that empowers Mayor Lincoln\'s office to engage with the community effectively.',
    reference: 'StocktonMayorWebsite'
    },
{
  name: 'CORSACRAFT',
    imgs: [
      { src: 'assets/CORSACRAFT1.png' },
      { src: 'assets/CORSACRAFT2.png' },
      { src: 'assets/CORSACRAFT3.png' },
      { src: 'assets/CORSACRAFT4.png' },
    ],
      description: 'CORSACRAFT, my ultimate passion project, perfectly combines my two greatest loves: software engineering and sim-racing. The mission driving this endeavor is to breathe new life into the legendary repository of mods known as Assettoland. Despite its controversial standing within the modding community and the sim-racing world, I hold cherished memories of using Assettoland throughout the years. Now, I am determined to resurrect this invaluable treasure trove, which sadly met its demise in 2021 due to various reasons. My vision for CORSACRAFT goes beyond merely restoring the repository. I aim to empower mod creators by offering them a platform that allows the creation of personalized profiles. These profiles will showcase a user\'s average rating on the mods they have contributed, as well as display download counts and other essential statistics. This will not only honor the hard work and dedication of mod creators but also provide users with a reliable and enriching modding experience. Built on the solid foundation of Angular 16.0.5 and featuring the impressive ngBootstrap, CORSACRAFT is destined to revolutionize the sim-racing modding landscape. By leveraging cutting-edge technologies and implementing user-friendly design principles, this project is poised to make an indelible mark on the sim-racing community. Through CORSACRAFT, I am unwavering in my commitment to preserving the legacy of Assettoland and elevating it to even greater heights. As I pour my heart and soul into this venture, I look forward to creating a platform that fosters creativity, unity, and the sheer thrill of virtual racing. With every line of code and meticulous attention to detail, CORSACRAFT will shine as a beacon of nostalgia and innovation, rekindling the magic of sim-racing for enthusiasts old and new. So join me on this exhilarating journey as we embrace the spirit of CORSACRAFT in all its majesty, breathing life into a dream that will forever transform the sim-racing world. Together, let us honor the past, celebrate the present, and shape an extraordinary future for the modding community and sim-racing enthusiasts worldwide.',
        reference: 'CORSACRAFT'
},
{
  name: 'SuppWorld!',
    imgs: [
      { src: 'assets/SuppWorld1.png' },
      { src: 'assets/SuppWorld2.png' },
      { src: 'assets/SuppWorld3.png' },
    ],
      description: 'This is a description o fmy project that i am working so i can go to ocoved bruh so this is sosfuj',
        reference: 'SuppWorld'
},
{
  name: 'Angular Password Generator',
    imgs: [
      { src: 'assets/' },
      { src: 'assets/' },
      { src: 'assets/' },
    ],
      description: 'This is a description o fmy project that i am working so i can go to ocoved bruh so this is sosfuj',
        reference: 'NgPasswordGenerator'
},
  ]
}
