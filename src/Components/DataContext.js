import react, { createContext, useState } from "react";


export const Datacontext = createContext();

export const DataProvide = (props)=>{

    const [data, setData] = useState([
        {
            "source": {
                "id": "1",
                "name": "NDTV News"
            },
            
            "author": "Darshan ",
            "title": "Physical fitness is a state of health and well-being and, more specifically,",
            "description": "Fitness is the condition of being physically fit and healthy and involves attributes that include, but are not limited to mental acuity, cardiorespiratory endurance, muscular strength, muscular endurance, body composition, and flexibility",
            "fulldescription": "The 2018 Physical Activity Guidelines for Americans were released by the U.S. Department of Health and Human Services to provide science-based guidance for people ages 3 years and older to improve their health by participating in regular physical activity. These guidelines recommend that all adults should move more and sit less throughout the day to improve health-related quality of life including mental, emotional, and physical health. For substantial health benefits, adults should perform at least 150 to 300 minutes of moderate-intensity, or 75 to 150 minutes per week of vigorous-intensity aerobic physical activity, or an equivalent combination of both spread throughout the week. The recommendation for physical activity to occur in bouts of at least 10 minutes has been eliminated, as new research suggests that bouts of any length contribute to the health benefits linked to the accumulated volume of physical activity",
            "postimg": "",
            
            "urlToImage": "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/man-deadlift-1296x728-header.jpg?w=1155&h=1528",
            "publishedAt": "18 May 2021",
            "content": "Physical fitness is a state of health and well-being and, more specifically,",
            "likes": "11k",
            "category": "Fittness",
            "story":true
        },
        {
            "source": {
                "id": "2",
                "name": "NDTV News"
            },
            "author": "Sai Ram",
            "title": "Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins",
            "description": "Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth  ",
            "fulldescription": "Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.Omnivorous humans are highly adaptable and have adapted to obtain food in many different ecosystems. Historically, humans secured food through two main methods: hunting and gathering and agriculture. As agricultural technologies increased, humans settled into agriculture lifestyles with diets shaped by the agriculture opportunities in their geography. Geographic and cultural differences has led to creation of numerous cuisines and culinary arts, including a wide array of ingredients, herbs, spices, techniques, and dishes. As cultures have mixed through forces like international trade and globalization, ingredients have become more widely available beyond their geographic and cultural origins, creating a cosmopolitan exchange of different food traditions and practices.",
            "postimg": "",
            "urlToImage": "https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg",
            "publishedAt": "05 Jan 1995",
            "likes": "79k",
            "category": "Food",
            "banner":true,
            "story":true
        },
        {
            "source": {
                "id": "3",
                "name": "NDTV News"
            },
            "author": "Sandeep  Shrivastava",
            "title": "Malhotra is a Khatri surname name belonging to Dhai Ghar caste in Indian subcontinent.",
            "description": "Shershaah (transl.Lion King) is a 2021 Indian Hindi-language biographical war film directed by Vishnuvardhan in his Hindi film debut and written by Sandeep Shrivastava.Shershaah (transl.Lion King) is a 2021 Indian Hindi-language biographical war film directed by Vishnuvardhan in his Hindi film debut and written by Sandeep Shrivastava.",
            "fulldescription": "Shershaah (transl.Lion King) is a 2021 Indian Hindi-language biographical war film directed by Vishnuvardhan in his Hindi film debut and written by Sandeep Shrivastava. The film follows the life of Param Vir Chakra-awardee Captain Vikram Batra, from his first posting in the army to his death in the Kargil War. The film stars Sidharth Malhotra as Vikram Batra and Kiara Advani as his girlfriend Dimple Cheema. The film was produced by Dharma Productions and Kaash Entertainment, with Hiroo Yash Johar, Karan Johar, Apoorva Mehta, Shabbir Boxwala, Ajay Shah and Himanshu Gandhi serving as co-producersAnnounced in May 2019, principal photography began in the same month and concluded in January 2020. Initially slated to be released on 3 July 2020 ",
            "postimg": "",
            "urlToImage": "https://images.livemint.com/img/2021/08/11/689x388/Untitled_1628693911474_1628693947268.png",
            "publishedAt": "4 Jan 2020",
            "likes": "355",
            "category": "Bollywood",
            "banner":true,
            "story":true
        },
        {
            "source": {
                "id": "4",
                "name": "NDTV News"
            },
            "author": "Dr Krishna",
            "title": "The heart is a muscular organ about the size of a fist, ",
            "description": "The heart is a muscular organ about the size of a fist, located just behind and slightly left of the breastbone. The heart pumps blood through the network of arteries and veins called the cardiovascular system",
            "fulldescription": "Coronary artery disease: Over the years, cholesterol plaques can narrow the arteries supplying blood to the heart. The narrowed arteries are at higher risk for  complete blockage from a sudden blood clot (this blockage is called a heart attack).Coronary artery disease: Over the years, cholesterol plaques can narrow the arteries supplying blood to the heart. The narrowed arteries are at higher risk for  complete blockage from a sudden blood clot (this blockage is called a heart attack). ",
            "postimg": "https://www.healthcareitnews.com/sites/hitn/files/Global%20healthcare_2.jpg",
            "urlToImage": "https://avenuemail.in/wp-content/uploads/2021/04/2-1.jpg",
            "publishedAt": "3 Jan 2022",
            "likes": "112",
            "category": "Health",
            "banner":true,
            "story":true
        },
        {
            "source": {
                "id": "5",
                "name": "NDTV News"
            },
            "author": "NEWTON",
            "title": "The simplest form of technology is the development and use of basic tools",
            "description": "Technology, the application of scientific knowledge to the practical aims of human life or, as it is sometimes phrased, to the change and manipulation of ...",
            "fulldescription": "Technology has many effects. It has helped develop more advanced economies (including today's global economy) and has allowed the rise of a leisure class. Many technological processes produce unwanted by-products known as pollution and deplete natural resources to the detriment of Earth's environment. Innovations have always influenced the values of a society and raised new questions in the ethics of technology. Examples include the rise of the notion of efficiency in terms of human productivity, and the challenges of bioethics.The simplest form of technology is the development and use of basic tools. The prehistoric invention of shaped stone tools followed by the discovery of how to control fire increased sources of food. The later Neolithic Revolution extended this, and quadrupled the sustenance available from a territory. The invention of the wheel helped humans to travel in and control their environment.",
            "postimg": "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ef3f7eec4f2390006f0c356%2FGUI--Graphical-User-Interface--concept-%2F960x0.jpg%3Ffit%3Dscale",
            "urlToImage": "https://www.investopedia.com/thmb/TID4EokOecUZzUw8N-YpAsj7BAI=/1885x1414/smart/filters:no_upscale()/GettyImages-964033964-ca3290057ccc4024b57e755423572264.jpg",
            "publishedAt": "1 Jan 2022",
            "likes": "87",
            "category": "Technology",
            "banner":false,
            "story":false,
            "foobanne": true
        },
        {
            "source": {
                "id": "6",
                "name": "NDTV News"
            },
            "author": "Anand Kumar",
            "title": "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.",
            "description": "Physical fitness is a state of health and well-being and, more specificallyWe have a piece of good news for Central government employees! According to media reports, Central government employees are all set to receive some extra amount along with their January 2022 salary",
            "fulldescription": "An announcement regarding the same is expected to be made on Republic Day, January 26, 2022. According to a report in Zee Business, the Central government employees are all set to additionally receive Rs 4500 along with their January salary. Employees will be eligible for the same by filling out a voucher. How can Central government employees claim Rs 4,500? Children Education Allowance (CEA) is one of the allowances that the Centre gives its employees. Amid the COVID-19 pandemic, giving an exemption to employees, the Centre is allowing the claim for CEA along with January salary. No official document is required for the same For the unversed, under the 7th Pay Commission, central employees get a CEA of Rs 2250. The schools were closed amid the pandemic, however, the Centre has now allowed its employees to claim CEA without any documents. The government employees are given the allowance for the education of 2 children. Therefore, if an employee has two children, then the employee will receive Rs 4500 in their account. Meanwhile, the Central government employees, who are awaiting Dearness Allowance (DA) arrears that have been stuck for the past 18 months due to the coronavirus pandemic, are all set to receive some good news soon. An announcement in this regard is expected to be made in January 2022",
            "postimg": "",
            "urlToImage": "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg",
            "publishedAt": "5 Jan 2022",
            "likes": "190",
            "category": "Fittness",
            "banner":false,
            "story":false
        },
        {
            "source": {
                "id": "7",
                "name": "NDTV News"
            },
            "author": "Albert Einstein",
            "title": "Brain technology, or self-learning know-how systems, defines a technology that employs latest findings in neuroscience",
            "description": "Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics",
            "fulldescription": "In 1905, a year sometimes described as his annus mirabilis ('miracle year'), Einstein published four groundbreaking papers.[14] These outlined the theory of the photoelectric effect, explained Brownian motion, introduced special relativity, and demonstrated mass-energy equivalence. Einstein thought that the laws of classical mechanics could no longer be reconciled with those of the electromagnetic field, which led him to develop his special theory of relativity. He then extended the theory to gravitational fields; he published a paper on general relativity in 1916, introducing his theory of gravitation. In 1917, he applied the general theory of relativity to model the structure of the universe.[15][16] He continued to deal with problems of statistical mechanics and quantum theory, which led to his explanations of particle theory and the motion of molecules. He also investigated the thermal properties of light and the quantum theory of radiation, which laid the foundation of the photon theory of light..However, for much of the later part of his career, he worked on two ultimately unsuccessful endeavors. First, despite his great contributions to quantum mechanics, he opposed what it evolved into, objecting that nature Second, he attempted to devise a unified field theory by generalizing his geometric theory of gravitation to include electromagnetism. As a result, he became increasingly isolated from the mainstream of modern physics. ",
            "postimg": "",
            "urlToImage": "https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg",
            "publishedAt": "14 March 1879",
            "likes": "567",
            "category": "Technology",
            "banner":false,
            "story":true
        },
        {
            "source": {
                "id": "8",
                "name": "NDTV News"
            },
            "author": "Dr Mohith",
            "title": "WHO's primary role is to direct international health within the United Nations' system and to lead partners in global health responses.",
            "description": "Health, according to the World Health Organization, is a state of complete physical, mental and social well-being and not merely the absence of disease and infirmity.[1] A variety of definitions have been used for different purposes over time. Health can be promoted by encouraging healthful activities, such as regular physical exercise and adequate sleep,[2] and by reducing or avoiding unhealthful activities or situations, such as smoking or excessive stress. Some factors affecting health are due to individual choices, such as whether to engage in a high-risk behavior, while others are due to structural causes, such as whether the society is arranged in a way that makes it easier or harder for people to get necessary healthcare services. Still other factors are beyond both individual and group choices, such as genetic disorders.",
            "fulldescription": "Every year, 3,00,000 employees die in unintended workplace accidents throughout the world. The fact that 14 incidents published in the news in 2021 have already taken the lives of around 42 workers, with nearly 100 injured, demonstrates Indias escalating safety problems. In center nations, such as India, occupational risks are estimated to account for roughly 2.3 percent of lost Disability Adjusted Life Years (DALY). When you consider how many lives are lost each year, it makes you question what can be done to save not just our important employees, but their lives as well. Ziqitza Healthcare Ltd (ZHL) knows that this is where first aid comes in as a life saver. Being trained in first aid may help you give the proper treatment to the patient at the right time, and it s a valuable skill to have at work. Dr. Santosh Datar Medical Director, Ziqitza Healthcare, explains Employee training can be the difference between life and death, but it also shows that company profits come second to employee happiness. Here  s how employees can use first aid to save lives. It helps in the saving of lives. Knowing how to administer first aid can provide your employees the confidence to act quickly in the event of an injury or illness. When administered quickly, CPR (Cardiopulmonary Resuscitation) has been proven to save many lives, thus its a valuable skill to teach your employees. First-aid kits will be properly utilized. Employees should also be aware of what is contained in the first aid kit and how to utilize it efficiently. It also helps if your staff know how to keep their first-aid kits in their homes and cars in good working order. Reduce the amount of workplace accidents. Because your employees are thoroughly taught in the essentials of first aid, they are also aware of the possibility for disasters in the workplace. Training your employees in first aid also makes them more aware of their surroundings, which can help to limit the occurrence of workplace accidents. It will keep your employees safe outside of work also Once your employees are trained in first aid, they are trained for life. Their training can save lives even outside the office. Trained personnel can treat their families, friends and even the general public effectively in times of an emergency. This becomes easier if you conduct refresher courses from time to time. Ziqitza Rajasthan has managed similar first aid training sessions in the past fdgdfg dg",
            "postimg": "https://ichef.bbci.co.uk/news/490/cpsprodpb/F226/production/_122709916_gettyimages-1237588997.jpg",
            "urlToImage": "https://m.economictimes.com/thumb/msid-73074326,width-1200,height-900,resizemode-4,imgsize-80591/health-insurance-getty-imag.jpg",
            "publishedAt": "3 Jan 2022",
            "likes": "3k",
            "category": "Health",
            "banner":true,
            "story":true
        },
        {
            "source": {
                "id": "9",
                "name": "NDTV News"
            },
            "author": "Ameer Khan",
            "title": "Taare Zameen Par ",
            "description": "Taare Zameen Par (transl.Stars on Earth), also known as Like Stars on Earth in English, is a 2007 Indian Hindi-language psychological drama film produced and directed by Aamir Khan. The film stars Khan himself, along with Darsheel Safary",
            "fulldescription": "Taare Zameen Par (transl.Stars on Earth), also known as Like Stars on Earth in English, is a 2007 Indian Hindi-language psychological drama film produced and directed by Aamir Khan. The film stars Khan himself, along with Darsheel Safary Boarding school pupils are typically referred to as Children may be sent for one year to twelve years or more in boarding school, till the age of eighteen. There are several types of boarders depending on the intervals at which they visit their family. Full-term boarders visit their homes at the end of an academic year, semester boarders visit their homes at the end of an academic term, weekly boarders visit their homes at weekends. There are also semi-boarders who attend a boarding school in the school hours for formal instruction and activities but return home by the end of the day. In some cultures, boarders spend the majority of their childhood and adolescent life away from their families. Boarding schools are relatively more prevalent in the United Kingdom (UK), India, China, and",
            "postimg": "",
            "urlToImage": "https://upload.wikimedia.org/wikipedia/en/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png",
            "publishedAt": "22 Dec 2007",
            "likes": "23k",
            "category": "Bollywood",
            "banner":true,
            "story":true
        },
        {
            "source": {
                "id": "10",
                "name": "NDTV News"
            },
            "author": "Burger",
            "title": "Burger King is an American multinational chain of hamburger fast food restaurants.",
            "description": "urger King is an American multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florid-based restaurant chain. ",
            "fulldescription": "Burger King (BK) is an American multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Floridabased restaurant chain. After Insta-Burger King ran into financial difficulties in 1954, its two Miami-based franchisees David Edgerton and James McLamore purchased the company and renamed it  Over the next half-century, the company changed hands four times, with its third set of owners, a partnership of TPG Capital, Bain Capital, and Goldman Sachs Capital Partners, taking it public in 2002. In late 2010, 3G Capital of Brazil acquired a majority stake in the company, in a deal valued at US$3.26 billion. The new owners promptly initiated a restructuring of the company to reverse its fortunes. 3G, along with partner Berkshire Hathaway, eventually merged the company with the Canadian-based doughnut chain Tim Hortons, under the auspices of a new Canadian-based parent company named Restaurant Brands International.",
            "postimg": "https://www.expatica.com/app/uploads/sites/5/2014/05/french-food-1920x1080.jpg",
            "urlToImage": "https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
            "publishedAt": "6 July 2021",
            "likes": "13K",
            "category": "Food",
            "banner":true,
            "story":true
        },
    ])

    return(
        <Datacontext.Provider value={[data,setData]}>
            {props.children}
        </Datacontext.Provider>
    )
}