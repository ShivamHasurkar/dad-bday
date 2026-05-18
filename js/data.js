/**
 * Timeline wishes — edit each entry when you have real content.
 *
 * Photos & videos: use the `image` field with a path under images/
 * Video + photo (no text): put the video in `image`, a still photo in `image2`, leave `message` empty.
 * Two photos only: set `image` and `image2`, leave `message` empty.
 *   - Photos: images/03-sister-elder.jpg
 *   - Videos: images/wish-from-mom.mp4  (.mp4 works best everywhere)
 * The site auto-detects videos by extension (.mp4, .webm, .mov, .ogg).
 *
 * Set language to "english" or "marathi" for correct font styling.
 *
 * Multi-line messages: wrap the text in backticks (` ... `) so line breaks are kept.
 *
 * Sections: { type: "section", title: "..." } — optional divider: true
 */
const BIRTHDAY = {
  name: "Ravindra Hasurkar",
  age: 61,
  subtitle: "A journey through the people who love you",
  portrait: "images/ravindra.jpg",
};

const TIMELINE = [
  { type: "section", title: "Family" },
  {
    year: 1994,
    label: "Life partner",
    name: "Vaishali",
    relation: "Wife",
    language: "marathi",
    message: "",
    image: "images/03-wife-vaishali.jpg",
    image2: "images/03-wife-vaishali1.jpg",
  },
  {
    year: 1995,
    label: "Our daughter",
    name: "Rutuja",
    relation: "Daughter",
    language: "english",
    message: "",
    driveUrl: "https://drive.google.com/file/d/1umoSlnM3Lut0BiTVijDbZMgtbsRTqkdi/preview",
    image2: "images/rutuja1.jpg",
  },
  {
    year: 1998,
    label: "Our son",
    name: "Shivam",
    relation: "Son",
    language: "english",
    message: "",
    driveUrl: "https://drive.google.com/file/d/1nulL1R1gPcLG2eEQWt8Dpr7sMpHL8Dpr/preview",
    image2: "images/shivam1.JPG",
  },
  {
    year: 2022,
    label: "New chapter",
    name: "Pratik Deshmane",
    relation: "Son-in-law",
    language: "english",
    message: "",
    driveUrl: "https://drive.google.com/file/d/1OXar70DStoXO2D8VGTk45UItPIj6vI42/preview",
    image2: "images/pratik1.jpg",
  },
  {
    type: "section",
    title: "Messages from all your loved ones",
    divider: true,
  },
  {
    year: 1966,
    label: "The beginning",
    name: "Mom & Dad",
    relation: "Parents",
    language: "marathi",
    message: `"चिरंजीव रवी, 
तुझ्या आयुष्यातील अनुभवांचे मोती असेच साठत राहोत, तुला आनंदी आणि आरोग्यदायी जीवन लाभो. 
६१ व्या वाढदिवसाच्या लाख लाख शुभेच्छा! 
आई आणि अण्णांकडून अनेक आशीर्वाद." 🙌🙌
`,
    image: "images/01-parents.JPG",
  },
  {
    year: 1967,
    label: "1967 · 1972",
    name: "Rekha & Rupa",
    relation: "Sisters",
    language: "marathi",
    message: `प्रिय दादा, 
    एकसष्ट वर्षांचा सुंदर प्रवास,
    प्रेम, माया आणि अनुभवांचा सुवास.
    घराचा आधार, प्रेमळ सावली,
    तुमच्यामुळेच उजळली प्रत्येक पायरी.
    
    तुमचे शब्द देतात धैर्य नवे,
    तुमचे प्रेम सदैव मनाला हवे.
    सुख-दुःखात कायम साथ दिलीत,
    आमच्या जीवनाला अर्थ मिळवून दिलात.
    
    देव करो आरोग्य उत्तम राहो,
    आनंदाने प्रत्येक दिवस फुलो.
    दीर्घायुष्य, यश आणि भरभराट लाभो,
    तुमच्या चेहऱ्यावर सदैव हास्य राहो.
    
    तुमचा आम्हाला अभिमान आहे,
    तुमचे प्रेमच आमचे खरे धन आहे.
    ६१ व्या वाढदिवसाच्या लाख लाख शुभेच्छा! 🙏`,
    image: "images/02-sisters-rekha-rupa.jpg",
  },
  {
    year: 1994,
    label: "Family by marriage",
    name: "Sharadchandra & Mahananda Kadam",
    relation: "Parents-in-law",
    language: "marathi",
    message: `प्रिय रवींद्र,
तुम्हाला ६१ व्या वाढदिवसाच्या खूप खूप शुभेच्छा! 🎉
सुरुवातीच्या काळात व्यवसाय उभा करण्यासाठी आणि कुटुंबाला सावरण्यासाठी तुम्ही जो संघर्ष केलात, तो आम्ही अगदी जवळून पाहिला आहे. आज एक यशस्वी व्यावसायिक, एक उत्तम पती आणि एक आदर्श पिता म्हणून तुम्ही जे स्थान निर्माण केलं आहे, त्याचा आम्हाला सार्थ अभिमान वाटतो.
मुलांच्या जडणघडणीत आणि त्यांच्या यशात तुमचा वाटा खूप मोठा आहे. त्यांना दिलेले संस्कार, योग्य मार्गदर्शन आणि तुमचा भक्कम पाठिंबा यामुळेच आज मुले अमेरिकेत जाऊन त्यांचं मास्टर्स (Master's) पूर्ण करू शकली आणि तिथे त्यांनी अत्यंत चांगली नोकरी मिळवली. हे सर्व तुमच्या खंबीरपणाचे आणि दूरदृष्टीचे फळ आहे.
तुम्ही आणि वैशाली नी एकमेकांना ज्या प्रकारे साथ दिली, ते खरोखरच कौतुकास्पद आहे. मग तो व्यवसाय वाढवण्याचा काळ असो किंवा मुलांचं संगोपन करण्याची जबाबदारी असो, तुम्ही दोघांनीही एकमेकांना खंबीर साथ देत प्रत्येक गोष्ट उत्तमरीत्या पार पाडली. तुमचं हे घट्ट नातं, एकमेकांबद्दलचं प्रेम आणि समजूतदारपणा पाहून आमच्या मनाला खूप समाधान मिळतं.
तुमच्या यापुढील आयुष्यात तुम्हाला उत्तम आरोग्य, सुख, शांती आणि दीर्घायुष्य लाभो, हीच ईश्वरचरणी प्रार्थना. पुन्हा एकदा वाढदिवसाच्या मनःपूर्वक शुभेच्छा!`,
    image: "images/04-parents-in-law-kadam.jpg",
  },
  {
    year: 1994,
    label: "Family by marriage",
    name: "Manish Kadam",
    relation: "Brother-in-law",
    language: "english",
    message: `Dear Bhauji,
Wishing you many happy returns of the day on your 61stbirthday, stay blessed with good health & happiness forever. 
Also take this opportunity to wish your better half & my beloved sister for accompanying you in your journey with all the ups and downs to reach this day & date
Past & Present
Mr. R M had started his professional carrier with completing his base studies in electronics & working with global tele systems for fax machines & intercom etc. he was staying alone at ancestral house in Kolhapur, working and travelling long distances on his historic hamara Bajaj & the great legend ambassador. At this moment he invented the fax robot to cater support to his fax machines, from here onwards the spark of entrepreneurship ignited, with continuation of his journey with Global tele systems the changeover from fax-tele pager- mobile business taking charge inspired him for a change and start his own business and departing from Global tele systems With great dedication & devotion he jumped in the mobile Sim card business with IDEA and was a great success story during this tenure he achieved the No 1 position in south Maharashtra and his journey from home to showrooms, also travelled for business visits abroad without failing for completion for any dam given target. With an market overview his vision to expand business initiated him to success story of Samsung Café with authorized service center. With the giant players & changing market scenario also grabbed his vision to depart from the sim business & focus on the Samsung Café, after many successful milestones with Samsung he wished to depart to surrender & lead and encash retired life for self, family, relations & friends.
Personal
Very much dedicated, devoted, caring husband, caring father, maintains healthy relationships with all, dugs to grass roots, health conscious, loves exercising & cycling. Knowledge at all grounds is at par ,shares & guides, stands besides in good & bad times. I also wish to thank him specially & remember the days when i met with accident and without any second thought he was in forefront coordinating for long days till time we were out of hospital ,with no business & office all left out.
Bye Bye
Great Salute & hats off to a great business man, successful family leader, great friend, Once again take this opportunity to wish him happy birthday ,with best & heartful wishes for happy & healthier days forever.`,
    image: "images/05-manish-kadam.jpg",
  },
  {
    year: 1996,
    label: "Family by marriage",
    name: "Anita Kadam",
    relation: "Sister-in-law",
    language: "english",
    message: `Dear Ravi bhau,

Wishing you the happiest 61st birthday!

It is truly wonderful to see the way you balance everything. I have always admired how, despite being so busy and successful with your business, you have never failed to make the family your top priority whenever they needed you. Your welcoming nature makes everyone feel instantly at home.

The way you care for and support all the kids is something I really respect. You have been such a wonderful father, shaping a bright and beautiful future for your own children, also a very loving and caring husband. While also being an incredible pillar of support for the rest of us.

Have a fantastic birthday, filled with all the love, joy, and celebration you deserve!`,
    image: "images/06-anita-kadam.jpg",
  },
  {
    year: 1965,
    label: "Extended family",
    name: "Vijay Bhise",
    relation: "Brother-in-law",
    language: "marathi",
    message: `प्रिय रवी,

तुला ६१ व्या वाढदिवसाच्या मनःपूर्वक शुभेच्छा!

जीवनातील हा सुंदर टप्पा गाठताना, तू मेहनत, धैर्य आणि जिद्दीने उभं केलेलं आयुष्य खरंच कौतुकास्पद आहे. इतरांसारखी नोकरी करण्यापेक्षा स्वतःचा मार्ग तयार करण्यावर तुझा नेहमी विश्वास होता. व्यवसाय आणि टेलिकॉम क्षेत्रातील तुझ्या प्रवासात यश आणि आव्हानं दोन्हीही तू सकारात्मकतेने आणि खंबीरपणे पेललीस.

पण व्यवसायातील यशापेक्षाही, तू आणि वैशाली यांनी घडवलेलं सुंदर कुटुंब हीच तुमची सर्वात मोठी कमाई आहे. शिवम आणि ऋतुजा यांनी चांगलं शिक्षण घेऊन अमेरिकेत स्वतःचं यशस्वी आयुष्य उभारलं, हे पाहून खूप अभिमान वाटतो. त्यांच्या यशामागे तुम्ही दिलेले संस्कार, शिस्त आणि पाठिंबा स्पष्टपणे दिसून येतो.

आज ६१ वर्षांचा टप्पा गाठताना, प्रामाणिकपणे, कष्टाने आणि उत्तम कौटुंबिक मूल्यांसह जगलेलं आयुष्य मागे वळून पाहताना निश्चितच समाधान देणारं आहे.

तुला उत्तम आरोग्य, आनंद, शांतता आणि पुढील आयुष्यात अनेक सुखद क्षण लाभो हीच शुभेच्छा.
`,
    image: "images/07-vijay-bhise.JPG",
  },
  // {
  //   year: 1990,
  //   label: "Extended family",
  //   name: "Mukteshwar Nagmule",
  //   relation: "Brother-in-law",
  //   language: "english",
  //   message: "[English message — Mukteshwar Nagmule]",
  //   image: "images/08-mukteshwar-nagmule.jpg",
  // },
  {
    year: 1994,
    label: "Family by marriage",
    name: "Madhuri & Hemant Panhalkar",
    relation: "Sister-in-law & Brother-in-law",
    language: "marathi",
    message: `रवि भाऊजी तुम्हाला वाढदिवसाच्या हार्दिक शुभेच्छा.

रविंद्र राव म्हणजे सूर्य नावाप्रमाणे तेजस्वी आहे ज्या ठिकाणी जातील तेथे ते त्यांची छाप पाडतातच आणि हसुरकर आडनावा प्रमाणे सर्वांना आपलस करुन उत्साहाने हसुन बोलून आनंद देतात व सगळीकडे आनंद पसरवतात. भाऊजी असे व्यक्ती आहे मुलांबरोबर मुलांसारखे मोठ्यांमध्ये मोठ्यांसारखे वागतात.

पुढील आयुष्य असच आनंदात, भरभराटीत, समृद्धीत जावो.

भाऊजी तुम्हाला परत एकदा वाढदिवसाच्या शुभेच्छा..`,
    image: "images/09-madhuri-hemant-panhalkar.jpg",
  },
  {
    year: 1992,
    label: "Next generation",
    name: "Neha Nagmule",
    relation: "Niece",
    language: "english",
    message: `Happy 61st Birthday Mama. Wishing you Good Health, Happiness & Peaceful Life.
Thank you very Much for Love, Care & Constant Support.
Feeling Grateful.
Always with you Today & Always.`,
    image: "images/neha.jpg",
  },
  {
    year: 1993,
    label: "Next generation",
    name: "Nikhil",
    relation: "Nephew",
    language: "english",
    message: "Happy 61st Birthday Mama! Wishing you a great year ahead and all the best for your upcoming journey.",
    driveUrl: "https://drive.google.com/file/d/1jKJuHCNIOldP14A6vHFlsqEPHCoXTDWz/preview",
  },
  {
    year: 1993,
    label: "1993 · 1999 · 2022",
    name: "Rohit, Harshada & Megha Panhalkar",
    relation: "Nephew & Nieces",
    language: "english",
    message: `Wishing you happy 61st birthday!
You are truly one of those people who connects with everyone so effortlessly, no matter the age.
Your energy, fun nature, love for travelling, trekking, and capturing every little moment make every
memory even more special
You don’t just click photos, you capture happiness
You don’t just enjoy moments, you make moments enjoyable for everyone around you
You don’t just stay active, you spread energy wherever you go!
You don’t just take trips, you create memories people carry forever
You don’t just take trips, you create memories people carry forever
Wishing you lots of good health, adventures, laughter, and happiness always`,
    image: "images/12-rohit-harshada-megha-panhalkar.jpg",
  },
  {
    year: 1997,
    label: "1997 · 2000",
    name: "Akshata & Abhishek Kadam",
    relation: "Niece & Nephew",
    language: "english",
    message: `Happy 61st Birthday, Mama!
It is amazing how you effortlessly balance being a brilliant businessman with being the most supportive and fun-loving person. Your enthusiasm for technology always inspires us, and we absolutely love our chats—whether we are deep diving into the latest in cybersecurity or debating
current affairs. You have always been such a loving and caring presence for everyone around you. We especially admire how incredibly supportive you are towards all the kids in the family.
I also have to thank you for sharing your fantastic taste in music old detective and action movies . They are absolute gold! and recommending those classic.
With all that said, wishing you a very happy birthday great conversations, tech discoveries, and maybe a good mystery film!
With lots of love.`,
    image: "images/15-akshata-abhishek-kadam.JPG",
  },
  {
    year: 2000,
    label: "Next generation",
    name: "Sejal Bhise",
    relation: "Niece",
    language: "english",
    message: `Dear Mama. It's strange to think about you completing 60 because you've somehow always had more energy than the rest of us combined. Thank you for being the kind of person who never just sat on the sidelines. You've always shown up whether it was planning family trips, making everyone laugh, pushing us to do better, or randomly spoiling us for no reason. Somehow every family trip became louder. funnier, and more alive when you were around. But beyond all the fun memories, 1 thing what stays with me the most is the way you've always shown up for people you love. One of the hardest phases of life feels blurry to me now, but one thing I remember clearly is that we never felt alone. You and mami were there every single day, quietly making sure we were okay even when none of us really knew how to be okay. You both carried SO much for us without making it feel heavy, and Ill always hold onto that. You've always pushed us to dream bigger, work harder, and believe we can do more with our lives. I hope 61 brings you more trips, more laughter and amazing health for many years to come.`,
    image: "images/16-sejal-bhise.JPG",
  },
  {
    year: 2005,
    label: "Next generation",
    name: "Manas Bhise",
    relation: "Nephew",
    language: "english",
    message: "Happy 61st Birthday Mama! Wishing you a great year ahead and all the best for your upcoming journey.",
    driveUrl: "https://drive.google.com/file/d/1FhwUFq3Dlmss7JuSZVl8oYKwyIDjq-4Y/preview",
  },
  {
    year: 2022,
    label: "Welcoming new family",
    name: "Rajendra, Tejashree & Chetan Deshmane",
    relation: "Son-in-law's family",
    language: "marathi",
    message: `Happy 61st birthday! May this year bring you endless reasons to smile, relax, and enjoy all the
beautiful moments life has to offer."
I didn’t just gain a brother-in-law when you joined the family, I gained a true friend. Have a fantastic
birthday day!
दादांना 61 वर्षाच्या हार्दिक, हार्दिक शुभेच्छा, तुमचा दिवस आनंदाने आणि तुमचे वर्ष सुखाने भरलेले जावो. वाढदिवसाच्या हार्दिक शुभेच्छा! तुमच्या खास दिवसाच्या प्रत्येक क्षणासाठी तुमच्या चेहऱ्यावर हास्य फुलवत आहे… तुमचा वेळ खूप छान जावो आणि वाढदिवसाच्या खूप खूप शुभेच्छा! तुमचा हा खास दिवस तुमच्या मनातील सर्व इच्छा पूर्ण करो!
अशी ईश्वरचरणी प्रार्थना`,
    image: "images/19-deshmane-family.jpg",
  },
];
