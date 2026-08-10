"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal } from "./reveal";

type ReviewCategory =
  | "mixed"
  | "other"
  | "speed"
  | "lawn"
  | "quality"
  | "price"
  | "cleanup"
  | "customer"
  | "communication"
  | "professional"
  | "snow";

type Review = {
  name: string;
  rating: number | null;
  quote: string;
  category: ReviewCategory;
};

type Category = {
  id: ReviewCategory;
  label: string;
};

const CATEGORIES: Category[] = [
  {
    "id": "speed",
    "label": "Speed & Punctuality"
  },
  {
    "id": "lawn",
    "label": "Lawn Mowing & Maintenance"
  },
  {
    "id": "quality",
    "label": "Work Quality & Results"
  },
  {
    "id": "price",
    "label": "Price & Value"
  },
  {
    "id": "cleanup",
    "label": "Yard Cleanup & Additional Services"
  },
  {
    "id": "customer",
    "label": "Customer Service & Friendliness"
  },
  {
    "id": "communication",
    "label": "Responsiveness & Communication"
  },
  {
    "id": "professional",
    "label": "Professionalism & Reliability"
  },
  {
    "id": "snow",
    "label": "Snow Removal"
  },
    {
    "id": "mixed",
    "label": "Mixed"
  },
  {
    "id": "other",
    "label": "Other"
  },
] as Category[];

const REVIEWS: Review[] = [
  {
    "name": "Shahbaz Khan",
    "rating": 5,
    "quote": "Excellent service from Mo's Lawn Care & Snow Removal Services LLC! The team was professional, punctual, and did an amazing job. They paid attention to every detail and made our property look clean and well-maintained. Great communication and fair pricing as well. Highly recommended!",
    "category": "mixed"
  },
  {
    "name": "Jesse T",
    "rating": 5,
    "quote": "Mo was able to come out next day to take care of my mother's lawn. Super professional and incredibly nice. Honestly couldn't have asked for better service. From now on he's my go to guy for lawn care services.\n\nSeriously, he's awesome.",
    "category": "speed"
  },
  {
    "name": "Tasha Palacioz",
    "rating": 5,
    "quote": "Moe did a great job on our yawn! He is very responsive and had the job done within 24 hours of contacting him even when the weather had been spotty. He sent pictures upon completion. He also was willing to take a look at our mower that was currently not working. I highly recommend!",
    "category": "mixed"
  },
  {
    "name": "Erick & Deanna Van Cura",
    "rating": 5,
    "quote": "We have been so happy and satisfied with Mo and his services. He is very reliable and very professional and always does a great job. From mowing and snow removal he is the best. We would highly recommend him.",
    "category": "snow"
  },
  {
    "name": "Lori Stiles",
    "rating": 5,
    "quote": "Mo has had great advice for us with our lawn, patch reseeding tips, and is very generous with his time and availability. He's aerated & mowed for us and is always very personable. I highly recommend.",
    "category": "lawn"
  },
  {
    "name": "Regina Nsanzimana",
    "rating": 5,
    "quote": "Mo’s Lawn Care did an awesome job mowing my lawn! They were incredibly fast, professional, and left everything looking super clean and well-maintained. I really appreciated how quickly they got the job done without cutting any corners. Highly recommend if you’re looking for efficient and reliable lawn care!",
    "category": "mixed"
  },
  {
    "name": "Laith Mazen",
    "rating": 5,
    "quote": "⭐️⭐️⭐️⭐️⭐️\n“Mo’s Lawn Care & Snow Removal Services is simply amazing! Professional, reliable, and always goes the extra mile. My lawn and driveway have never looked better. Highly recommend in Des Moines!",
    "category": "snow"
  },
  {
    "name": "Rick Terrones",
    "rating": 5,
    "quote": "Great service! Mo is very easy to work with. He gets right back to you when you leave a message.  Been with Mo for a few years! Good professional work!",
    "category": "communication"
  },
  {
    "name": "Abigail Beeler",
    "rating": 5,
    "quote": "These guys did an awesome job! I had another company give me a quote and then back out I called these guys on a Friday and they had the job done on Saturday! My yard was very over grown and had a ton of weeds!",
    "category": "cleanup"
  },
  {
    "name": "Jerica Aldred",
    "rating": 5,
    "quote": "Mo saved the day when we had a five foot snow drift in our driveway. He came after hours, and did an amazing job! He was prompt, and efficient. Thanks Mo!",
    "category": "snow"
  },
  {
    "name": "C B",
    "rating": 5,
    "quote": "Mo is THE BEST!  We called him mid-season to assist with a relative's property which we needed assistance maintaining.  He returned our call promptly and quickly accommodated our request.  His prices are highly competitive compared to others we reached out to, and he doesn't force you into additional services you don't want or need.  He has continued to be prompt and courteous, and we have been extremely pleased with his work.  Highly Recommend, A+++.",
    "category": "mixed"
  },
  {
    "name": "Geena Tracy",
    "rating": 5,
    "quote": "These guys were awesome! They were super responsive and got the job done the same day I contacted them :)",
    "category": "communication"
  },
  {
    "name": "Dan Dinnauer",
    "rating": 5,
    "quote": "Mo is the the most amazing person I have meet in a long time! His personality not only his service is ....not only 5 stars if I could give a million I would!\nThis man helped me when I was at my lowest! Even gave me a hug! Gave me faith their are truly still good people out there!!!\nThis company is the best!\n\nMo\nIt's Dan. Thank you Thank you Thank you!\nYou may have just mowed my lawn. However u gave me faith in just people in general!!\n\nThank you!!!!!!\nDan",
    "category": "customer"
  },
  {
    "name": "Tony Dugan",
    "rating": 5,
    "quote": "Mo is awesome!! My landscape beds had gotten out of control with weeds. I needed a fresh start and Mo \"cleared the path\" for me to do this. He was on time with a great price and did impeccable work. Incredibly courteous, as well. I highly recommend him!!",
    "category": "cleanup"
  },
  {
    "name": "Megan Siegner",
    "rating": 5,
    "quote": "Mo was awesome! Very responsive and picked up our yard very fast. Great price too and he was even able to help me with some additional yard service requests. Our yard was a disaster and he is a life saver!",
    "category": "cleanup"
  },
  {
    "name": "Angela Gawtry",
    "rating": 5,
    "quote": "Moe did a great job. Price was right.  Didn't rush with my yard. I offered him the cash first and he said you can pay when im done. That to me is an honest man. Most people would take the cash and rush.  He did a great job. Definitely would recommend him and Definitely will be using him again next year. 5 starts for Mo's lawn care.",
    "category": "mixed"
  },
  {
    "name": "Shannon Hiatt",
    "rating": 5,
    "quote": "Highly recommend Mo’s Lawn Service.  He responded to my request immediately, came by to give me a quote the next day, and completed the work the following day.  He is very friendly and polite.  He is a hard worker and goes the extra mile to make his customers happy!",
    "category": "speed"
  },
  {
    "name": "Saad Ata",
    "rating": 5,
    "quote": "Very good price and great service",
    "category": "price"
  },
  {
    "name": "Rich",
    "rating": 5,
    "quote": "Great guy, timely, friendly and fast! We were buried in snow and he helped with our driveway and alley. He even had someone shoveling by hand to make sure the job got done well. I already asked about some landscaping work we need done in the spring and I know I can count on him!",
    "category": "snow"
  },
  {
    "name": "Kimberly Schmidt Trbovich",
    "rating": 5,
    "quote": "Mo is a great guy awesome service comes out on a moments notice for you 😀 and his partner is very nice does awesome work!  Thank you Mo 😊 …",
    "category": "customer"
  },
  {
    "name": "Ashley O'Connor",
    "rating": 5,
    "quote": "Highly recommend this company! Great service, professional, friendly, and top quality! Beyond impressed with the work that was done in my yard! Thank you to Mo and his team for the great work! ⭐️⭐️⭐️⭐️⭐️",
    "category": "quality"
  },
  {
    "name": "Michelle Y",
    "rating": 5,
    "quote": "Wow! I cannot say enough about how great Mo go has been to work with. He has great communication and my lawn is the best it's looked in a long time. It's rare to get quality, speed, and a great price--and Mo definitely offers all 3.\nI highly recommend calling Mo for lawn care needs!",
    "category": "mixed"
  },
  {
    "name": "Mesha Mazzie",
    "rating": 5,
    "quote": "Mo was FAST and his work is beyond beautiful! We are new homeowners with over a half acre of land and we were having trouble finding someone worth it to cut our lawn. The first company that came out messed the lawn up so bad, parts of it were dead. Mo came over and after just one cut, the lawn looked amazing! He was knowledgeable and explained to my husband and I everything we needed to know about lawn care, especially with us being new homeowners. We will NEVER go anywhere else. We enjoy everything about Mo from his conversation to his down right professionalism.  Google pointed us in the right direction and we are glad to have a true professional taking care of our lawn.",
    "category": "mixed"
  },
  {
    "name": "Jake Brown",
    "rating": 5,
    "quote": "Meet Moe a couple of weeks ago and I am so glad I found him for my lawn needs. He is responsive, on time and listens when I any questions or need service sooner than anticipated. Excellent service and I would recommend him highly to perspective clients.",
    "category": "communication"
  },
  {
    "name": "Karen Slifka",
    "rating": 5,
    "quote": "Great experience with Mo's Lawn Xare! I really appreciated his quick response time.  The job was quoted and completed within 4 days. The quality of work is outstanding and Mo is easy to work with. Highly recommend!",
    "category": "mixed"
  },
  {
    "name": "Kayla O'Conner",
    "rating": 5,
    "quote": "Wow. Wow. Wow. Mo is a yard hero.  He rescued my Airbnb property. He showed up last minute to mow the yard and then came back the next day to haul several loads of yard debris, branches and sticks. He cleaned up our fence line and trimmed trees. He knocked all of the work out in one day and for a great price. If you need a yard hero, let Mo rescue your yard too.",
    "category": "cleanup"
  },
  {
    "name": "Amber Jameson",
    "rating": 5,
    "quote": "Amazing service and stellar communication! I know my lawn is well taken care of and that it will look amazing each time. Trust that this is a great business for your lawn care needs!",
    "category": "communication"
  },
  {
    "name": "El Hadji M Thiandoum",
    "rating": 5,
    "quote": "Very efficient and care about the work quality. Will go the extra mile to for his customers.  Thank you",
    "category": "quality"
  },
  {
    "name": "Emilee Zimmerman",
    "rating": 5,
    "quote": "He did a great job on our yard and for a great price! I called him and he was able to come down within the next couple of days and get it done. Great service.",
    "category": "mixed"
  },
  {
    "name": "Luis Quintanar",
    "rating": 5,
    "quote": "Responded very fast, had very reasonable prices, and made my wife happy with their work!",
    "category": "price"
  },
  {
    "name": "Catie Boyd",
    "rating": 5,
    "quote": "Mo was super responsive and was able to come and take care of my jungle of a yard for a reasonable price and was able to do it within 2 business days of calling him. I chose to use Mo’s because of his ratings on google and he did not disappoint! He was upfront about pricing and his plan for the yard which was amazing. He also went out of his way to help us jump our vehicle in the middle of his mow. We definitely plan to reach out to them for our next landscaping projects as well!! 10/10 recommend using Mo!!",
    "category": "cleanup"
  },
  {
    "name": "Raheem Raheem",
    "rating": 5,
    "quote": "Quality work and an affordable rate. I’d recommend to the a friend, and neighbor. Very knowledgeable and hard working!",
    "category": "price"
  },
  {
    "name": "Courtney Kleese",
    "rating": 5,
    "quote": "Mo does outstanding work! He is trustworthy, efficient, responsive, and above all else he is extremely kind. I will definitely be contacting him again next year for lawn mowing/lawn maintenance!",
    "category": "lawn"
  },
  {
    "name": "gj",
    "rating": 5,
    "quote": "Had the lawn aerated over the weekend. Mo was polite and prompt, getting here  just 20 minutes after I called. He worked hard and did a very thorough job on the yard, and was very reasonably priced. In summary, he was outstanding in every regard and I'd highly recommend him.",
    "category": "speed"
  },
  {
    "name": "Mark McGrew",
    "rating": 5,
    "quote": "I called several lawn care companies to check on aeration services.  Moe was the only one to respond back and did so promptly.  He came to my home at a date and time that fit my schedule and did an excellent job.  I would HIGHLY recommend him for lawn care services. Thanks Moe!",
    "category": "lawn"
  },
  {
    "name": "Semso Suvic",
    "rating": 5,
    "quote": "A great guy. Reasonable prices and quick and efficient! Highly recommended!!",
    "category": "price"
  },
  {
    "name": "Dan McCleary",
    "rating": 5,
    "quote": "I called a service I'd used in the past and they wanted to charge double what they charged  2 years ago .  I called Mo's and got voicemail so I hung up.  He called me back and was aerating my yard within the hour for half the price.  Unbelievable.",
    "category": "lawn"
  },
  {
    "name": "Morgan Wentland",
    "rating": 5,
    "quote": "Mo did a wonderful job on our yard clean up! Very professional, super friendly, and incredibly responsive. We would highly recommend Mo for all lawn care services/needs!",
    "category": "cleanup"
  },
  {
    "name": "James Morris",
    "rating": 5,
    "quote": "Mo was very friendly, professional, and also affordable. I am happy to do business with him in the future. If you live in the area I would recommend you call him first.",
    "category": "mixed"
  },
  {
    "name": "Abby Hendricks",
    "rating": 5,
    "quote": "While relocating for work I had Mo's do my lawn care.  They were great to work with and always checked in to see if I needed anything else done.  I would definitely recommend them to anyone.  You guys were awesome!",
    "category": "other"
  },
  {
    "name": "Zach Ten Haken",
    "rating": 5,
    "quote": "On-time, quality, and professional service! Super positive experience - would use him again in a heartbeat over some other big companies in town!",
    "category": "professional"
  },
  {
    "name": "Kevin Buckman",
    "rating": 5,
    "quote": "I had Mo come out and do my aeration earlier last month. Too many times in the past, my old provider wouldn't have come out until the last week. Now it's too cold to seed, or they would do it when the lawn was too dry. On and on. It wasn't worth the hassle.\n\nMo worked with my schedule and the rain. He made sure I watered it if I wanted to for good coverage. He was on time. He was thorough. Reasonably priced. A breath of fresh air compared to some other lawn/landscaping businesses I've worked with the last few years.",
    "category": "lawn"
  },
  {
    "name": "V1P3R GTS",
    "rating": 5,
    "quote": "Very affordable and excellent communication! I've had a great experience with Mo and it's been a big relief to have quality service that always answers or phones back with haste, ready to take care of any problems I've had with my lawn so far.",
    "category": "communication"
  },
  {
    "name": "Yolanda Jackson",
    "rating": 5,
    "quote": "Mo did an amazing job! He is fast and affordable. I called, he answered, and the job was done completed the next day. Thank you. Yolanda",
    "category": "speed"
  },
  {
    "name": "Dekha Ali",
    "rating": 5,
    "quote": "Mo is extremely professional. He is responsive and always on time. The quality of his services are top notch. I 10/10 recommend.",
    "category": "professional"
  },
  {
    "name": "Tracy Aring",
    "rating": 5,
    "quote": "He was prompt and went straight to mowing, he was very courteous and personable.  Did an awesome job.  I will engage his services again . Highly recommend MO’s Lawn Care service .",
    "category": "mixed"
  },
  {
    "name": "Nate Penner",
    "rating": 5,
    "quote": "Mo is amazing to work with, does great work and is honest and up front with you.",
    "category": "professional"
  },
  {
    "name": "Danielle Russell",
    "rating": 5,
    "quote": "Just had my yard cleaned up and it was great! My yard was a disaster and they cleaned it up quickly and it looks amazing! Definitely recommend and I will use them again!",
    "category": "cleanup"
  },
  {
    "name": "Tyler Neubauer",
    "rating": 5,
    "quote": "Mo is always just a phone call away. He does fantastic work! 100% recommend to anyone in the Des Moines area",
    "category": "other"
  },
  {
    "name": "Yazan Al saadi",
    "rating": 5,
    "quote": "The best service i have ever had, great pricing and awesome customer service.",
    "category": "mixed"
  },
  {
    "name": "Sierra Walton",
    "rating": null,
    "quote": "After trying to find a solution when I felt the work had not been completed, I was yelled at over the phone and no resolutions were made. After trimming was supposed to be included my front yard now looks like a hack job and NO trimming was done whatsoever. My backyard looks uneven with a speed bump track. I do not recommend this company.",
    "category": "lawn"
  },
  {
    "name": "Jennifer Brown",
    "rating": 5,
    "quote": "Mo does an incredible job taking care of my lawn care.  Very dependable!",
    "category": "lawn"
  },
  {
    "name": "Kate Pankey",
    "rating": 5,
    "quote": "Mo is very friendly and responsive, especially via text. His prices are fair, and he doesn't a fantastic job. He cares about the health of your lawn.",
    "category": "communication"
  },
  {
    "name": "Sara Ivers",
    "rating": 5,
    "quote": "Amazing experience! I needed help in a hurry and he delivered excellent service on the same day! Will definitely be contacting for all future lawn needs!!",
    "category": "speed"
  },
  {
    "name": "Matthew Dahms",
    "rating": 5,
    "quote": "He’s a good guy and does a great job. Give him a call.",
    "category": "quality"
  },
  {
    "name": "Raslan Alhariri",
    "rating": 5,
    "quote": "Great service and very nice employees amazing work too",
    "category": "customer"
  },
  {
    "name": "Cindy T",
    "rating": 5,
    "quote": "Mo was quick to respond and get me the quote. The price was great for all the work he did.",
    "category": "price"
  },
  {
    "name": "Jeffrey Monahan",
    "rating": 5,
    "quote": "Mo does outstanding work and the price is right.  If you are looking for great lawn care and other options, Mo is your guy.",
    "category": "quality"
  },
  {
    "name": "travis zolicoffer",
    "rating": 5,
    "quote": "I was truly impressed and will not anybody else cut my grass from now on. I wish could give him 10 stars",
    "category": "lawn"
  },
  {
    "name": "Kristin Aschenbrenner",
    "rating": 5,
    "quote": "I called Mo and he was out the next morning and did an excellent job.",
    "category": "speed"
  },
  {
    "name": "Elizabeth Hoffmann",
    "rating": 5,
    "quote": "Mo helped me out last minute in clearing the snow built up at the entrance of my driveway from the city.  Thank you Mo!!",
    "category": "snow"
  },
  {
    "name": "Raymond Kent",
    "rating": 4,
    "quote": "It took a while to get my lawn mowed, but I'm pleased with the job. I would say that the price was fair.",
    "category": "lawn"
  },
  {
    "name": "Morgan Stanton",
    "rating": 5,
    "quote": "Mo does an absolutely amazing job!",
    "category": "quality"
  },
  {
    "name": "Madeleine Lyons",
    "rating": 5,
    "quote": "He does a great job and is very nice ! Highly recommend Mo!",
    "category": "other"
  },
  {
    "name": "Joe Kroeger",
    "rating": 5,
    "quote": "Came out the day I contacted him (on a Sunday). Did the job fast and well. Good find!",
    "category": "speed"
  },
  {
    "name": "Bara Ghanem",
    "rating": 5,
    "quote": "Wonderful experience with Mo’s lawn care, on time, professional, great service",
    "category": "speed"
  },
  {
    "name": "Cindy Wilson",
    "rating": 5,
    "quote": "He's prices are great and he offered to trim some of my trees for free 👍 …",
    "category": "cleanup"
  },
  {
    "name": "Haverlee Ottley",
    "rating": 5,
    "quote": "Incredibly good hearted company. Great experience. Highly recommend.",
    "category": "customer"
  },
  {
    "name": "Aziz Sharkh",
    "rating": 5,
    "quote": "Great service. Professional and friendly. More than fair pricing . Highly recommended.",
    "category": "mixed"
  },
  {
    "name": "EmAduni",
    "rating": 5,
    "quote": "Perfect lawn work, leaves my yard clean and tidy every time! Amazing prices as well.",
    "category": "cleanup"
  },
  {
    "name": "Haley Montgomery",
    "rating": 5,
    "quote": "Extremely professional, kind, and accommodating! I refuse to use any other lawn care service besides Mo's.",
    "category": "professional"
  },
  {
    "name": "John Meyer",
    "rating": 5,
    "quote": "Excellent, friendly service! Great communication! Thank you!",
    "category": "customer"
  },
  {
    "name": "Tatiana Anderson",
    "rating": 5,
    "quote": "Mo does such an amazing job!",
    "category": "quality"
  },
  {
    "name": "ALI علي",
    "rating": 5,
    "quote": "My place looked like a Haunted house. Let's just say my the lawn needed to be mowed desperately. MO came and changed the whole look. My lawn has never looked better.",
    "category": "lawn"
  },
  {
    "name": "Sam Patterson",
    "rating": 5,
    "quote": "Mo is very personable and gets the job done right the first time!",
    "category": "other"
  },
  {
    "name": "Emily Jay",
    "rating": 5,
    "quote": "Employees are very professional & our yard looks great every time!",
    "category": "professional"
  },
  {
    "name": "Mila&Emma Weaver",
    "rating": 5,
    "quote": "Great prices, professional, job well done, highly recommend",
    "category": "price"
  },
  {
    "name": "Basim Bakri",
    "rating": 5,
    "quote": "I called to try their service & I was very happy with the service the prices and the time frame",
    "category": "mixed"
  },
  {
    "name": "Selina Campos",
    "rating": 5,
    "quote": "Excellent service Mo was professional and fast",
    "category": "speed"
  },
  {
    "name": "Mary Ann Dorsett",
    "rating": 5,
    "quote": "Prompt hard working. Will contact him again.",
    "category": "speed"
  },
  {
    "name": "Idrees Alghraibah",
    "rating": 5,
    "quote": "Great service thaks mo",
    "category": "other"
  },
  {
    "name": "Rachelle Ellis",
    "rating": 5,
    "quote": "He showed up fast and did great job 💯 …",
    "category": "other"
  },
  {
    "name": "Nawras baniata990",
    "rating": 5,
    "quote": "Amazing service each time he came by",
    "category": "other"
  },
  {
    "name": "heather johnson",
    "rating": 5,
    "quote": "Does amazing job and very affordable. Extremely fexlable scheduling.",
    "category": "mixed"
  },
  {
    "name": "Tiffany Misel",
    "rating": 5,
    "quote": "He showed up fast gone the job done in no time and it was perfect ... 5 stars to this guy",
    "category": "speed"
  },
  {
    "name": "Shoroq Az",
    "rating": 5,
    "quote": "Good job",
    "category": "quality"
  },
  {
    "name": "Brandon Howard",
    "rating": 5,
    "quote": "He his very professional he is very affordable",
    "category": "mixed"
  },
  {
    "name": "mahed azzam",
    "rating": 5,
    "quote": "He was professional\nHe did a really nice job",
    "category": "professional"
  },
  {
    "name": "Cassie Kilgore",
    "rating": 5,
    "quote": "Mo was super fast, super friendly, and very courteous.",
    "category": "mixed"
  },
  {
    "name": "Carmen-Shae Howard",
    "rating": 5,
    "quote": "Great job and good price!",
    "category": "price"
  },
  {
    "name": "Mohammad Ahmad Alsheyab",
    "rating": 5,
    "quote": "Great service!",
    "category": "other"
  },
  {
    "name": "Sarah Davis",
    "rating": 5,
    "quote": "Does great work for a reasonable cost!",
    "category": "price"
  },
  {
    "name": "Cierra Hunt",
    "rating": 5,
    "quote": "Great person to help you and does great work!!!!",
    "category": "customer"
  },
  {
    "name": "TW Auto",
    "rating": 5,
    "quote": "Best work in town❤️",
    "category": "quality"
  },
  {
    "name": "Mosab Zyoud",
    "rating": 5,
    "quote": "Good job",
    "category": "other"
  },
  {
    "name": "Kandice Schouten",
    "rating": 5,
    "quote": "He dose fast and clean job ....",
    "category": "mixed"
  },
  {
    "name": "Frank Fazio",
    "rating": 5,
    "quote": "Amazing customer service, so helpful!",
    "category": "customer"
  },
  {
    "name": "Abdull",
    "rating": 5,
    "quote": "Professional and  great price.",
    "category": "price"
  },
  {
    "name": "Heaven Duncan",
    "rating": 5,
    "quote": "Great guy and great prices",
    "category": "other"
  },
  {
    "name": "Jennifer Mills",
    "rating": 5,
    "quote": "Very quick and professional.",
    "category": "mixed"
  },
  {
    "name": "Almin Fejzic",
    "rating": 5,
    "quote": "Great and fas service !",
    "category": "other"
  },
  {
    "name": "Jake Garland",
    "rating": 5,
    "quote": "Fast response, good work",
    "category": "mixed"
  },
  {
    "name": "Shana Plambeck",
    "rating": 5,
    "quote": "Great clean work",
    "category": "quality"
  },
  {
    "name": "kryan10409",
    "rating": 5,
    "quote": "Really tries hard",
    "category": "other"
  },
  {
    "name": "Joe McCargar",
    "rating": 5,
    "quote": "Fantastic company!",
    "category": "other"
  },
  {
    "name": "rafal adil",
    "rating": 5,
    "quote": "Great service",
    "category": "other"
  }
] as Review[];

export function Testimonials() {
  const [activeCategory, setActiveCategory] =
    useState<ReviewCategory>("mixed");
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const categoriesWithCounts = useMemo(
    () =>
      CATEGORIES.map((category) => ({
        ...category,
        count: REVIEWS.filter((review) => review.category === category.id)
          .length,
      })),
    [],
  );

  const activeCategoryData = categoriesWithCounts.find(
    (category) => category.id === activeCategory,
  );

  const filteredReviews = useMemo(
    () => REVIEWS.filter((review) => review.category === activeCategory),
    [activeCategory],
  );

  const go = useCallback(
    (next: number, direction: number) => {
      if (!filteredReviews.length) return;
      setDir(direction);
      setIndex((next + filteredReviews.length) % filteredReviews.length);
    },
    [filteredReviews.length],
  );

  const selectCategory = (category: ReviewCategory) => {
    setActiveCategory(category);
    setIndex(0);
    setDir(1);
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || filteredReviews.length <= 1) return;

    const id = window.setInterval(() => {
      setDir(1);
      setIndex((current) => (current + 1) % filteredReviews.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, [activeCategory, filteredReviews.length]);

  const review = filteredReviews[index];

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#f5faf5] via-white to-[#f8fbf8] py-20 sm:py-28"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full bg-[#3e7a45]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-[#3e7a45]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-[#3e7a45]/15 bg-[#3e7a45]/5 px-4 py-2">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3e7a45]">
                Google Reviews
              </p>
            </div>

            <h2
              id="reviews-heading"
              className="mt-5 text-balance text-3xl font-bold tracking-tight text-[#1d2b1f] sm:text-4xl lg:text-5xl"
            >
              Trusted by homeowners across{" "}
              <span className="text-[#3e7a45]">Des Moines</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Real feedback from customers who trusted Mo&apos;s Lawn Care &
              Snow Removal Services with their properties.
            </p>

            <a
              href="https://www.google.com/maps/place/Mo's+lawn+care+%26+Snow+removal+services+LLC/@41.6726196,-93.5720955,13z/data=!4m18!1m9!3m8!1s0x87ee99e896289b53:0x97b64e4e08676e75!2sMo's+lawn+care+%26+Snow+removal+services+LLC!8m2!3d41.6726196!4d-93.5720955!9m1!1b1!16s%2Fg%2F11h00c8p6r!3m7!1s0x87ee99e896289b53:0x97b64e4e08676e75!8m2!3d41.6726196!4d-93.5720955!9m1!1b1!16s%2Fg%2F11h00c8p6r?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all 160 Google reviews"
              className="group flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
            >
              <span className="font-bold text-[#244729] transition-colors group-hover:text-[#3e7a45]">
                5.0 on Google
              </span>

              <span
                className="hidden text-[#3e7a45]/40 sm:inline"
                aria-hidden="true"
              >
                •
              </span>

              <span className="text-muted-foreground transition-colors group-hover:text-[#3e7a45]">
                160 customer reviews
              </span>
            </a>
          </div>
        </Reveal>
 
        {/* Category filters — keep the category + review count, but not a review grid. */}
        <Reveal className="mt-10">
                 <div
          className="mt-6 flex items-center gap-4 md:hidden"
          aria-label="Swipe horizontally to change the category"
        >
          <span
            aria-hidden="true"
            className="yard-xray__swipe-cue relative h-11 w-[5.5rem] shrink-0 overflow-hidden rounded-full border border-ink/20 bg-ink/[0.035]"
          >
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-[0.6875rem] text-ink/30">
              ‹
            </span>
            <span className="absolute top-1/2 right-3 -translate-y-1/2 text-[0.6875rem] text-ink/30">
              ›
            </span>
            <span className="yard-xray__swipe-thumb absolute top-1/2 left-1/2 grid h-7 w-7 translate-x-[-50%] translate-y-[calc(-50%+8px)] place-items-center rounded-full bg-[color:var(--accent)] text-[0.75rem] text-paper shadow-[0_5px_14px_rgba(18,44,35,0.2)]">
              ↔
            </span>
          </span>
          <span>
            <span className="block font-mono text-[0.6875rem] font-semibold tracking-[0.18em] text-ink uppercase">
              Swipe to explore
            </span>
            <span className="mt-1 block text-[0.75rem] text-ink-soft">
              Drag sideways to change the category
            </span>
          </span>
        </div>
          <div
            className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
            role="tablist"
            aria-label="Review categories"
          >
            {categoriesWithCounts.map((category) => {
              const isActive = category.id === activeCategory;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectCategory(category.id)}
                  className={
                    "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e7a45] focus-visible:ring-offset-2 " +
                    (isActive
                      ? "border-[#3e7a45] bg-[#3e7a45] text-white shadow-sm"
                      : "border-[#3e7a45]/15 bg-white text-[#244729] hover:border-[#3e7a45]/35 hover:bg-[#eef6ef]")
                  }
                >
                  <span>{category.label}</span>
                  <span
                    className={
                      "grid min-w-7 place-items-center rounded-full px-2 py-0.5 text-xs tabular-nums " +
                      (isActive
                        ? "bg-white/15 text-white"
                        : "bg-[#3e7a45]/10 text-[#3e7a45]")
                    }
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-7">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3e7a45]">
              {activeCategoryData?.label}
              {activeCategoryData
                ? ` · ${activeCategoryData.count} reviews`
                : ""}
            </p>
          </div>
        </Reveal>

        {/* Same one-review-at-a-time slider behavior as the original component. */}
        {review && (
          <Reveal className="mt-6">
            <div className="relative overflow-hidden rounded-3xl border border-[#3e7a45]/15 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(62,122,69,0.18)] sm:p-10 lg:p-12">
              {/* Top green accent */}
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#3e7a45] via-[#69a26f] to-[#3e7a45]"
                aria-hidden="true"
              />

              <Quote
                className="pointer-events-none absolute right-6 top-6 size-14 text-[#3e7a45]/10 sm:right-8 sm:top-8 sm:size-16"
                aria-hidden="true"
              />

              <div className="relative min-h-[25rem] sm:min-h-[20rem] lg:min-h-[18rem]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.blockquote
                    key={`${activeCategory}-${index}`}
                    custom={dir}
                    initial={{
                      opacity: 0,
                      x: dir * 40,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: dir * -40,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {review.rating ? (
                      <div
                        className="flex gap-0.5 text-[#3e7a45]"
                        aria-label={`${review.rating} out of 5 stars`}
                      >
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="size-5 fill-current" />
                        ))}
                      </div>
                    ) : (
                      <span className="inline-flex rounded-full bg-[#f3f5f3] px-3 py-1 text-xs font-semibold text-muted-foreground">
                        Rating not listed
                      </span>
                    )}

                    <p className="mt-5 max-w-5xl whitespace-pre-line text-pretty text-lg font-medium leading-relaxed text-[#263329] sm:text-xl lg:text-2xl">
                      &ldquo;{review.quote}&rdquo;
                    </p>

                    <footer className="mt-7">
                      <div className="flex items-center gap-3">
                        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#3e7a45] text-sm font-bold text-white">
                          {review.name.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p className="text-base font-bold text-[#244729]">
                            {review.name}
                          </p>

                          <div className="mt-0.5 flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Google Review</span>
                            <span
                              className="text-[#3e7a45]/40"
                              aria-hidden="true"
                            >
                              •
                            </span>
                            <span>
                              {review.rating
                                ? `${review.rating}-star customer review`
                                : "Rating not listed"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="mt-1 flex items-center justify-between gap-5 border-t border-[#3e7a45]/10 pt-1">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="min-w-[3.75rem] text-sm font-bold tabular-nums text-[#3e7a45]">
                    {String(index + 1).padStart(2, "0")}{" "}
                    <span className="font-medium text-muted-foreground">
                      / {filteredReviews.length}
                    </span>
                  </span>

                  <div
                    className="h-1.5 w-24 overflow-hidden rounded-full bg-[#3e7a45]/10 sm:w-40"
                    aria-hidden="true"
                  >
                    <motion.div
                      className="h-full rounded-full bg-[#3e7a45]"
                      animate={{
                        width: `${((index + 1) / filteredReviews.length) * 100}%`,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </div>
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => go(index - 1, -1)}
                    aria-label="Previous review"
                    className="grid size-11 place-items-center rounded-full border border-[#3e7a45]/25 bg-white text-[#3e7a45] transition-all duration-200 hover:border-[#3e7a45] hover:bg-[#3e7a45] hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e7a45] focus-visible:ring-offset-2"
                  >
                    <ChevronLeft className="size-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => go(index + 1, 1)}
                    aria-label="Next review"
                    className="grid size-11 place-items-center rounded-full bg-[#3e7a45] text-white shadow-sm transition-all duration-200 hover:bg-[#326438] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e7a45] focus-visible:ring-offset-2"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
