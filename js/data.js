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
    driveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/preview",
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
    message: " चरंजव रवी, ता आयातल अनभवांचे मोत असेच साठत राहोत, तला आनंद आण आरोदाय जवन लाभो. ६१ ा वाढद वसाा लाख लाख शभेा! आई आण अ ांकडन अनेक आश वाद.",
    image: "images/01-parents.jpg",
  },
  {
    year: 1967,
    label: "1967 · 1972",
    name: "Rekha & Rupa",
    relation: "Sisters",
    language: "marathi",
    message: "[मराठी संदेश — रेखा आणि रुपा येथे लिहा]",
    image: "images/02-sisters-rekha-rupa.jpg",
  },
  {
    year: 1994,
    label: "Family by marriage",
    name: "Sharadchandra & Mahananda Kadam",
    relation: "Parents-in-law",
    language: "marathi",
    message: "[मराठी संदेश — शरदचंद्र आणि महानंदा कदम येथे लिहा]",
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
    message: "[मराठी संदेश — विजय भिसे येथे लिहा]",
    image: "images/07-vijay-bhise.jpg",
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
    message: "[मराठी संदेश — माधुरी आणि हेमंत पान्हाळकर येथे लिहा]",
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
It is amazing how you effortlessly balance being a brilliant businessman with being the most
supportive and fun-loving person. Your enthusiasm for technology always inspires us, and we
absolutely love our chats—whether we are deep diving into the latest in cybersecurity or debating
current affairs.
You have always been such a loving and caring presence for everyone around you. We especially
admire how incredibly supportive you are towards all the kids in the family.
I also have to thank you for sharing your fantastic taste in music old detective and action movies . They are absolute gold!
and recommending those classic
With all that said, wishing you a very happy birthday great conversations, tech discoveries, and maybe a good mystery film!
With lots of love.`,
    image: "images/15-akshata-abhishek-kadam.jpg",
  },
  {
    year: 2000,
    label: "Next generation",
    name: "Sejal Bhise",
    relation: "Niece",
    language: "english",
    message: `Dear Mama,
It's strange to think about you completing 60 because you've somehow
always had more energy than the rest of us combined.
Thank you for being the kind of person who never just sat on the
sidelines. You've always shown up whether it was planning family
trips, making everyone laugh, pushing us to do better, or randomly
spoiling us for no reason. Somehow every family trip became louder,
funnier, and more alive when you were around.
But beyond all the fun memories, I think what stays with me the most
is the way you've always shown up for people you love. One of the
hardest phases of life feels blurry to me now, but one thing I remember
clearly is that we never felt alone. You and mami were there every
single day, quietly making sure we were okay even when none of us
really knew how to be okay. You both carried so much for us without
" - it fool heavv. and I'll always hold onto that.`,
    image: "images/16-sejal-bhise.jpg",
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
दादांना 61 व षाा हाद क, हाद क शभेा, तमचा द वस आनंदाने आण तमचे व ष सखाने भरलेले जावो. वाढद वसाा हाद क
शभेा! तमा खास द वसाा ेक णासाठ तमा चेहावर हा फलवत आहे… तमचा वेळ खप छान जावो आण
वाढद वसाा खप खप शभेा! तमचा हा खास द वस तमा मनातल स व इा प ण करो!
अश ईरचरण ा थना`,
    image: "images/19-deshmane-family.jpg",
  },
];
