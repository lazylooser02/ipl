const IMAGE_BASE_PATH = "images";
const DEFAULT_MEN_IMAGE_URL =
  "https://documents.iplt20.com/ipl/assets/images/Default-Men.png";

// Team colors mapping
const TEAM_COLORS = {
  "CSK": "#fdb913", // Chennai Super Kings - Yellow
  "MI": "#004587",  // Mumbai Indians - Blue
  "RCB": "#ff0000", // Royal Challengers Bangalore - Red
  "GT": "#000000",  // Gujarat Titans - Black
  "SRH": "#ff822d", // Sunrisers Hyderabad - Orange
  "KKR": "#3d2c70", // Kolkata Knight Riders - Purple
  "RR": "#ff0080",  // Rajasthan Royals - Pink
  "PBKS": "#dd1212", // Punjab Kings - Red
  "LSG": "#028444", // Lucknow Super Giants - Green
  "DC": "#000080"   // Delhi Capitals - Blue
};

function playerImageSrc(playerOrName) {
  const name =
    typeof playerOrName === "string" ? playerOrName : playerOrName?.name || "";

  if (playerOrName && typeof playerOrName === "object") {
    if (typeof playerOrName.imageUrl === "string") {
      if (playerOrName.imageUrl.trim() === "") {
        // explicit empty string: use generic IPL default men image
        return DEFAULT_MEN_IMAGE_URL;
      }
      return playerOrName.imageUrl;
    }
  }

  // Fallback: local slug-based image path
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return `${IMAGE_BASE_PATH}/${slug}.jpg`;
}

const teams = [
  {
    code: "CSK",
    name: "Chennai Super Kings",
    titles: [2010, 2011, 2018, 2021, 2023],
    color: "#fdb913",
    players: [
      // Batters & WK-Batters
      { name: "MS Dhoni", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/57.png" },
      { name: "Sanju Samson", role: "WK-Batter", imageUrl: "https://lazylooser02.github.io/ipl/images/sanju.png" },
      { name: "Ruturaj Gaikwad", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/102.png" },
      { name: "Dewald Brevis", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/797.png" },
      { name: "Ayush Mhatre", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3497.png" },
      { name: "Kartik Sharma", role: "WK-Batter", imageUrl: "https://lazylooser02.github.io/ipl/images/kartik-sharma.png" },
      { name: "Sarfaraz Khan", role: "Batter", imageUrl: "https://lazylooser02.github.io/ipl/images/sarf.png" },
      { name: "Urvil Patel", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1486.png" },

      // All-Rounders
      { name: "Anshul Kamboj", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3106.png" },
      { name: "Jamie Overton", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1216.png" },
      { name: "Ramakrishna Ghosh", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3559.png" },
      { name: "Prashant Veer", role: "All-Rounder", imageUrl: "https://lazylooser02.github.io/ipl/images/Prashat-veer.png" },
      { name: "Matthew William Short", role: "All-Rounder", imageUrl: "https://lazylooser02.github.io/ipl/images/short.png" },
      { name: "Aman Khan", role: "All-Rounder", imageUrl: "https://lazylooser02.github.io/ipl/images/aman.png" },
      { name: "Zak Foulkes", role: "All-Rounder", imageUrl: "https://lazylooser02.github.io/ipl/images/zak.png" },
      { name: "Shivam Dube", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/211.png" },

      // Bowlers
      { name: "Khaleel Ahmed", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/8.png" },
      { name: "Noor Ahmad", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/975.png" },
      { name: "Mukesh Choudhary", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/970.png" },
      { name: "Nathan Ellis", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/633.png" },
      { name: "Shreyas Gopal", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/192.png" },
      { name: "Gurjapneet Singh", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2256.png" },
      { name: "Akeal Hosein", role: "Bowler", imageUrl: "https://lazylooser02.github.io/ipl/images/akeal.png" },
      { name: "Matt Henry", role: "Bowler", imageUrl: "https://lazylooser02.github.io/ipl/images/henry.png" },
      { name: "Rahul Chahar", role: "Bowler", imageUrl: "https://lazylooser02.github.io/ipl/images/rahul.png" },
    ],
  },
  {
    code: "SRH",
    name: "Sunrisers Hyderabad",
    titles: [2016],
    color: "#ff822d",
    players: [
      // Batters & WK-Batters
      { name: "Ishan Kishan", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/164.png" },
      { name: "Aniket Verma", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3576.png" },
      { name: "Smaran Ravichandran", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3752.png" },
      {
        name: "Salil Arora",
        role: "WK-Batter",
        imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1494.png",
      },
      {
        name: "Heinrich Klaasen",
        role: "WK-Batter",
        imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/202.png",
      },
      {
        name: "Travis Head",
        role: "Batter",
        imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/37.png",
      },

      // All-Rounders
      { name: "Harshal Patel", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/114.png" },
      { name: "Kamindu Mendis", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/627.png" },
      { name: "Harsh Dubey", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3752.png" },
      { name: "Brydon Carse", role: "All-Rounder", imageUrl: "https://resources.ecb.co.uk/player-photos/test/800x800/3550.png" },
      { name: "Shivang Kumar", role: "All-Rounder", imageUrl: "https://mpleaguet20.com/img/players/bhopal-leopards-2025/shivang-kumar.png" },
      { name: "Krains Fuletra", role: "All-Rounder", imageUrl: "https://anmolkings.com/images/squad/Krains-Fuletra.png" },
      {
        name: "Liam Livingstone",
        role: "All-Rounder",
        imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/183.png",
      },
      { name: "Jack Edwards", role: "All-Rounder", imageUrl: "https://static-files.cricket-australia.pulselive.com/headshots/440/1692-shield.png" },
      { name: "Abhishek Sharma", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/212.png" },
      { name: "Nitish Kumar Reddy", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1944.png" },

      // Bowlers
      { name: "Pat Cummins", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/33.png" },
      { name: "Zeeshan Ansari", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3575.png" },
      { name: "Jaydev Unadkat", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/180.png" },
      { name: "Eshan Malinga", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3339.png" },
      { name: "Sakib Hussain", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2024/3104.png" },
      { name: "Onkar Tarmale", role: "Bowler", imageUrl: "https://d13ir53smqqeyp.cloudfront.net/fc-player-images/189870.png" },
      { name: "Amit Kumar", role: "Bowler", imageUrl: "" },
      { name: "Praful Hinge", role: "Bowler", imageUrl: "" },
      { name: "Shivam Mavi", role: "Bowler", imageUrl: "https://www.lucknowsupergiants.in/static-assets/images/players/66984.png?v=12.76" },
    ],
  },
  // Placeholders for other teams (squads can be filled later)
  {
    code: "MI",
    name: "Mumbai Indians",
    titles: [2013, 2015, 2017, 2019, 2020],
    color: "#004587",
    players: [
      // Batters & WK-Batters
      { name: "Rohit Sharma", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/6.png" },
      { name: "Surya Kumar Yadav", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/174.png" },
      { name: "Robin Minz", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3103.png" },
      { name: "Sherfane Rutherford", role: "Batter", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/67285.png?v=7.23&w=200" },
      { name: "Ryan Rickelton", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/743.png" },
      { name: "Quinton de Kock", role: "WK-Batter", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/28035.png?v=7.23&w=200" },
      { name: "Danish Malewar", role: "Batter", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/89179.png?v=7.23&w=200" },
      { name: "N. Tilak Varma", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/993.png" },

      // All-Rounders
      { name: "Hardik Pandya", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/54.png" },
      { name: "Naman Dhir", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3107.png" },
      { name: "Mitchell Santner", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/75.png" },
      { name: "Raj Angad Bawa", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/781.png" },
      { name: "Atharva Ankolekar", role: "All-Rounder", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/68585.png?v=7.23&w=200" },
      { name: "Mayank Rawat", role: "All-Rounder", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/66974.png?v=7.23&w=200" },
      { name: "Corbin Bosch", role: "All-Rounder", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/63605.png?v=7.23&w=200" },
      { name: "Will Jacks", role: "All-Rounder", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/66927.png?v=7.23&w=200" },
      { name: "Shardul Thakur", role: "All-Rounder", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/63345.png?v=7.23&w=200" },

      // Bowlers
      { name: "Trent Boult", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/66.png" },
      { name: "Mayank Markande", role: "Bowler", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/67126.png?v=7.23&w=200" },
      { name: "Deepak Chahar", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/91.png" },
      { name: "Ashwani Kumar", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3569.png" },
      { name: "Raghu Sharma", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3869.png" },
      { name: "Mohammad Izhar", role: "Bowler", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/137547.png?v=7.23&w=200" },
      { name: "Allah Ghazanfar", role: "Bowler", imageUrl: "https://www.mumbaiindians.com/static-assets/images/players/large/96648.png?v=7.23&w=200" },
      { name: "Jasprit Bumrah", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/9.png" },
    ],
  },
  {
    code: "RCB",
    name: "Royal Challengers Bengaluru",
    titles: [2025],
    color: "#ff0000",
    players: [
      // Batters & WK-Batters
      { name: "Rajat Patidar", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/597.png" },
      { name: "Devdutt Padikkal", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/200.png" },
      { name: "Virat Kohli", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" },
      { name: "Phil Salt", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1220.png" },
      { name: "Jitesh Sharma", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1000.png" },
      { name: "Jordan Cox", role: "WK-Batter", imageUrl: "https://www.royalchallengers.com/s3/files/styles/s/public/2025-12/Cox.png?itok=Rms_b0T_" },

      // All-Rounders
      { name: "Krunal Pandya", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/17.png" },
      { name: "Swapnil Singh", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1483.png" },
      { name: "Tim David", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/636.png" },
      { name: "Romario Shepherd", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/371.png" },
      { name: "Jacob Bethell", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/869.png" },
      { name: "Venkatesh Iyer", role: "All-Rounder", imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Venky.png?itok=e-Iyfd5k" },
      { name: "Satvik Deswal", role: "All-Rounder", imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Satvik.png?itok=-TdTTYbm" },
      { name: "Mangesh Yadav", role: "All-Rounder", imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Mangesh_.png?itok=BIPjVM3U" },
      { name: "Vicky Ostwal", role: "All-Rounder", imageUrl: "https://www.royalchallengers.com/s3/files/styles/s/public/2025-12/Vicky.png?itok=ld3PMIcL" },
      { name: "Vihaan Malhotra", role: "All-Rounder", imageUrl: "https://www.royalchallengers.com/s3/files/styles/s/public/2025-12/Vihaan.png?itok=ld9_bl9y" },
      { name: "Kanishk Chouhan", role: "All-Rounder", imageUrl: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Kanishk.png?itok=o5lC7zXF" },

      // Bowlers
      { name: "Josh Hazlewood", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/36.png" },
      { name: "Rasikh Dar", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/172.png" },
      { name: "Suyash Sharma", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1932.png" },
      { name: "Bhuvneshwar Kumar", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/15.png" },
      { name: "Nuwan Thushara", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/813.png" },
      { name: "Abhinandan Singh", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3574.png" },
      { name: "Jacob Duffy", role: "Bowler", imageUrl: "https://www.royalchallengers.com/s3/files/styles/s/public/2025-12/Duffy.png?itok=JT8Ahn1x" },
      { name: "Yash Dayal", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/978.png" },
    ],
  },
  {
    code: "GT",
    name: "Gujarat Titans",
    titles: [2022],
    color: "#000000",
    players: [
      // Batters & WK-Batters
      { name: "Shubman Gill", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/62.png" },
      { name: "Jos Buttler", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/182.png" },
      { name: "Kumar Kushagra", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3101.png" },
      { name: "Anuj Rawat", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/534.png" },
      { name: "Tom Banton", role: "WK-Batter", imageUrl: "https://www.gujarattitansipl.com/static-assets/images/players/66923.png?v=5.86" },
      { name: "Glenn Phillips", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/635.png" },

      // All-Rounders
      { name: "Nishant Sindhu", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/791.png" },
      { name: "Washington Sundar", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/20.png" },
      { name: "Mohd. Arshad Khan", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/988.png" },
      { name: "Sai Kishore", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/544.png" },
      { name: "Jayant Yadav", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/165.png" },
      { name: "Jason Holder", role: "All-Rounder", imageUrl: "https://www.gujarattitansipl.com/static-assets/images/players/10232.png?v=5.86" },
      { name: "Sai Sudharsan", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/976.png" },
      { name: "Shahrukh Khan", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/590.png" },

      // Bowlers
      { name: "Kagiso Rabada", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/116.png" },
      { name: "Mohammed Siraj", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/63.png" },
      { name: "Prasidh Krishna", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/150.png" },
      { name: "Manav Suthar", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2443.png" },
      { name: "Gurnoor Singh Brar", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1231.png" },
      { name: "Ishant Sharma", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/50.png" },
      { name: "Ashok Sharma", role: "Bowler", imageUrl: "https://www.gujarattitansipl.com/static-assets/images/players/91316.png?v=5.86" },
      { name: "Prithvi Raj Yarra", role: "Bowler", imageUrl: "https://www.gujarattitansipl.com/static-assets/images/players/67706.png?v=5.86" },
      { name: "Luke Wood", role: "Bowler", imageUrl: "https://www.gujarattitansipl.com/static-assets/images/players/64498.png?v=5.86" },
      { name: "Rahul Tewatia", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/120.png" },
      { name: "Rashid Khan", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/218.png" },
    ],
  },
  {
    code: "KKR",
    name: "Kolkata Knight Riders",
    titles: [2012, 2014, 2024],
    color: "#3d2c70",
    players: [
      // Batters & WK-Batters
      { name: "Ajinkya Rahane", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/44.png" },
      { name: "Rinku Singh", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/152.png" },
      { name: "Angkrish Raghuvanshi", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/787.png" },
      { name: "Manish Pandey", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/16.png" },
      { name: "Cameron Green", role: "Batter", imageUrl: "https://www.kkr.in/static-assets/images/players/66870.png?v=111.87" },
      { name: "Finn Allen", role: "WK-Batter", imageUrl: "https://www.kkr.in/static-assets/images/players/66046.png?v=111.87" },
      { name: "Tejasvi Singh", role: "WK-Batter", imageUrl: "https://www.kkr.in/static-assets/images/players/126180.png?v=111.87" },
      { name: "Rahul Tripathi", role: "Batter", imageUrl: "https://www.kkr.in/static-assets/images/players/41229.png?v=111.87" },
      { name: "Tim Seifert", role: "WK-Batter", imageUrl: "https://www.kkr.in/static-assets/images/players/63867.png?v=111.87" },
      { name: "Rovman Powell", role: "Batter", imageUrl: "https://www.kkr.in/static-assets/images/players/65291.png?v=111.87" },

      // All-Rounders
      { name: "Anukul Roy", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/160.png" },
      { name: "Sarthak Ranjan", role: "All-Rounder", imageUrl: "https://www.kkr.in/static-assets/images/players/65945.png?v=111.87" },
      { name: "Daksh Kamra", role: "All-Rounder", imageUrl: "https://www.kkr.in/static-assets/images/players/137799.png?v=111.87" },
      { name: "Rachin Ravindra", role: "All-Rounder", imageUrl: "https://www.kkr.in/static-assets/images/players/66053.png?v=111.87" },
      { name: "Ramandeep Singh", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/991.png" },

      // Bowlers
      { name: "Vaibhav Arora", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/583.png" },
      { name: "Matheesha Pathirana", role: "Bowler", imageUrl: "https://www.kkr.in/static-assets/images/players/73830.png?v=111.87" },
      { name: "Kartik Tyagi", role: "Bowler", imageUrl: "https://www.kkr.in/static-assets/images/players/67735.png?v=111.87" },
      { name: "Prashant Solanki", role: "Bowler", imageUrl: "https://www.kkr.in/static-assets/images/players/72042.png?v=111.87" },
      { name: "Mustafizur Rahman", role: "Bowler", imageUrl: "https://www.kkr.in/static-assets/images/players/63881.png?v=111.87" },
      { name: "Akash Deep", role: "Bowler", imageUrl: "https://www.kkr.in/static-assets/images/players/71447.png?v=111.87" },
      { name: "Harshit Rana", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1013.png" },
      { name: "Umran Malik", role: "Bowler", imageUrl: "https://www.kkr.in/static-assets/images/players/82969.png?v=111.87" },
      { name: "Sunil Narine", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/156.png" },
      { name: "Varun Chakaravarthy", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/140.png" },
    ],
  },
  {
    code: "RR",
    name: "Rajasthan Royals",
    titles: [2008],
    color: "#ff0080",
    players: [
      // Batters & WK-Batters
      { name: "Shubham Dubey", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3112.png" },
      { name: "Vaibhav Suryavanshi", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3498.png" },
      { name: "Donovan Ferreira", role: "WK-Batter", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/23487.png?v=7.44" },
      { name: "Lhuan-dre Pretorius", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2827.png" },
      { name: "Ravi Singh", role: "WK-Batter", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/129333.png?v=7.44" },
      { name: "Aman Rao Perala", role: "Batter", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/88692.png?v=7.44" },
      { name: "Shimron Hetmyer", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/210.png" },
      { name: "Yashasvi Jaiswal", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/533.png" },
      { name: "Dhruv Jurel", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1004.png" },
      { name: "Riyan Parag", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/189.png" },

      // All-Rounders
      { name: "Yudhvir Singh Charak", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/587.png" },
      { name: "Ravindra Jadeja", role: "All-Rounder", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/3850.png?v=7.44" },
      { name: "Sam Curran", role: "All-Rounder", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/65584.png?v=7.44" },

      // Bowlers
      { name: "Jofra Archer", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/181.png" },
      { name: "Tushar Deshpande", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/539.png" },
      { name: "Kwena Maphaka", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/801.png" },
      { name: "Ravi Bishnoi", role: "Bowler", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/71288.png?v=7.44" },
      { name: "Sushant Mishra", role: "Bowler", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/71380.png?v=7.44" },
      { name: "Yash Raj Punja", role: "Bowler", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/100840.png?v=7.44" },
      { name: "Vignesh Puthur", role: "Bowler", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/83549.png?v=7.44" },
      { name: "Brijesh Sharma", role: "Bowler", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/133689.png?v=7.44" },
      { name: "Adam Milne", role: "Bowler", imageUrl: "https://www.rajasthanroyals.com/static-assets/images/players/11933.png?v=7.44" },
      { name: "Kuldeep Sen", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2024/1005.png" },
      { name: "Sandeep Sharma", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2024/220.png" },
      { name: "Nandre Burger", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2024/2806.png" },
    ],
  },
  {
    code: "PBKS",
    name: "Punjab Kings",
    titles: [],
    color: "#dd1212",
    players: [
      // Batters & WK-Batters
      { name: "Shreyas Iyer", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/12.png" },
      { name: "Nehal Wadhera", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1541.png" },
      { name: "Vishnu Vinod", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/581.png" },
      { name: "Harnoor Pannu", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/784.png" },
      { name: "Pyla Avinash", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3573.png" },
      { name: "Prabhsimran Singh", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/137.png" },
      { name: "Shashank Singh", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/191.png" },

      // All-Rounders
      { name: "Marcus Stoinis", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/23.png" },
      { name: "Harpreet Brar", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/130.png" },
      { name: "Marco Jansen", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/586.png" },
      { name: "Azmatullah Omarzai", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1354.png" },
      { name: "Priyansh Arya", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3571.png" },
      { name: "Musheer Khan", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2813.png" },
      { name: "Suryansh Shedge", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2146.png" },
      { name: "Mitch Owen", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3870.png" }, // listed under all-rounders block but role given as Batter
      { name: "Cooper Connolly", role: "All-Rounder", imageUrl: "https://www.punjabkingsipl.in/static-assets/images/players/74410.png?v=6.36" },
      { name: "Ben Dwarshuis", role: "All-Rounder", imageUrl: "https://www.punjabkingsipl.in/static-assets/images/players/64473.png?v=6.36" },

      // Bowlers
      { name: "Arshdeep Singh", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/125.png" },
      { name: "Yuzvendra Chahal", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/10.png" },
      { name: "Vyshak Vijaykumar", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2034.png" },
      { name: "Yash Thakur", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1550.png" },
      { name: "Xavier Bartlett", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3572.png" },
      { name: "Pravin Dubey", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/548.png" },
      { name: "Vishal Nishad", role: "Bowler", imageUrl: "https://www.punjabkingsipl.in/static-assets/images/players/126819.png?v=6.36" },
      { name: "Lockie Ferguson", role: "Bowler", imageUrl: "https://www.punjabkingsipl.in/static-assets/images/players/63719.png?v=6.36" },
    ],
  },
  {
    code: "LSG",
    name: "Lucknow Super Giants",
    titles: [],
    color: "#028444",
    players: [
      // Batters & WK-Batters
      { name: "Rishabh Pant", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/18.png" },
      { name: "Aiden Markram", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/287.png" },
      { name: "Himmat Singh", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/203.png" },
      { name: "Matthew Breetzke", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2805.png" },
      { name: "Mukul Choudhary", role: "WK-Batter", imageUrl: "https://www.lucknowsupergiants.in/static-assets/images/players/99128.png?v=12.82" },
      { name: "Akshat Raghuwanshi", role: "Batter", imageUrl: "https://www.lucknowsupergiants.in/static-assets/images/players/89169.png?v=12.82" },
      { name: "Josh Inglis", role: "WK-Batter", imageUrl: "https://www.lucknowsupergiants.in/static-assets/images/players/65893.png?v=12.82" },
      { name: "Nicholas Pooran", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/136.png" },

      // All-Rounders
      { name: "Mitchell Marsh", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/40.png" },
      { name: "Abdul Samad", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/525.png" },
      { name: "Shahbaz Ahamad", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/523.png" },
      { name: "Arshin Kulkarni", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2788.png" },
      { name: "Wanindu Hasaranga", role: "All-Rounder", imageUrl: "https://www.lucknowsupergiants.in/static-assets/images/players/65027.png?v=12.82" },
      { name: "Ayush Badoni", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/985.png" },

      // Bowlers
      { name: "Mohammad Shami", role: "Bowler", imageUrl: "https://www.lucknowsupergiants.in/static-assets/images/players/28994.png?v=12.82" },
      { name: "Avesh Khan", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/109.png" },
      { name: "M. Siddharth", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/532.png" },
      { name: "Digvesh Singh", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3565.png" },
      { name: "Akash Singh", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/535.png" },
      { name: "Prince Yadav", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1225.png" },
      { name: "Arjun Tendulkar", role: "Bowler", imageUrl: "https://www.lucknowsupergiants.in/static-assets/images/players/69659.png?v=12.82" },
      { name: "Anrich Nortje", role: "Bowler", imageUrl: "https://www.lucknowsupergiants.in/static-assets/images/players/63641.png?v=12.82" },
      { name: "Naman Tiwari", role: "Bowler", imageUrl: "https://www.lucknowsupergiants.in/static-assets/images/players/88633.png?v=12.82" },
      { name: "Mayank Yadav", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2024/987.png" },
      { name: "Mohsin Khan", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2024/541.png" },
    ],
  },
  {
    code: "DC",
    name: "Delhi Capitals",
    titles: [],
    color: "#000080",
    players: [
      // Batters & WK-Batters
      { name: "KL Rahul", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/19.png" },
      { name: "Karun Nair", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/131.png" },
      { name: "David Miller", role: "Batter", imageUrl: "https://www.delhicapitals.in/static-assets/images/players/ipl/5313.png?v=1.83" },
      { name: "Ben Duckett", role: "WK-Batter", imageUrl: "https://www.delhicapitals.in/static-assets/images/players/ipl/63082.png?v=1.83" },
      { name: "Pathum Nissanka", role: "Batter", imageUrl: "https://www.delhicapitals.in/static-assets/images/players/ipl/66368.png?v=1.79" },
      { name: "Sahil Parakh", role: "Batter", imageUrl: "https://www.delhicapitals.in/static-assets/images/players/ipl/114374.png?v=1.83" },
      { name: "Prithvi Shaw", role: "Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2024/51.png" },
      { name: "Abishek Porel", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1580.png" },
      { name: "Tristan Stubbs", role: "WK-Batter", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1017.png" },

      // All-Rounders
      { name: "Axar Patel", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/110.png" },
      { name: "Sameer Rizvi", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1229.png" },
      { name: "Ashutosh Sharma", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3109.png" },
      { name: "Vipraj Nigam", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3560.png" },
      { name: "Ajay Mandal", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1931.png" },
      { name: "Tripurana Vijay", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3563.png" },
      { name: "Madhav Tiwari", role: "All-Rounder", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3561.png" },
      { name: "Auqib Dar", role: "All-Rounder", imageUrl: "https://www.delhicapitals.in/static-assets/images/players/ipl/70172.png?v=1.83" },
      { name: "Nitish Rana", role: "All-Rounder", imageUrl: "https://www.delhicapitals.in/static-assets/images/players/ipl/63649.png?v=1.83" },

      // Bowlers
      { name: "Mitchell Starc", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/31.png" },
      { name: "T. Natarajan", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/224.png" },
      { name: "Mukesh Kumar", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1462.png" },
      { name: "Dushmantha Chameera", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/608.png" },
      { name: "Lungisani Ngidi", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2023/99.png" },
      { name: "Kyle Jamieson", role: "Bowler", imageUrl: "https://www.delhicapitals.in/static-assets/images/players/ipl/63865.png?v=1.83" },
      { name: "Kuldeep Yadav", role: "Bowler", imageUrl: "https://documents.iplt20.com/ipl/IPLHeadshot2025/14.png" },
    ],
  },
];

// Strong XI suggestions per team (can be tweaked)
const strongXIByTeam = {
  CSK: {
    playing: [
      "Ruturaj Gaikwad",
      "Matthew William Short",
      "Dewald Brevis",
      "Sanju Samson",
      "MS Dhoni",
      "Shivam Dube",
      "Jamie Overton",
      "Khaleel Ahmed",
      "Noor Ahmad",
      "Matt Henry",
      "Rahul Chahar",
    ],
    impact: "Nathan Ellis",
  },
  SRH: {
    playing: [
      "Travis Head",
      "Ishan Kishan",
      "Heinrich Klaasen",
      "Abhishek Sharma",
      "Liam Livingstone",
      "Nitish Kumar Reddy",
      "Harshal Patel",
      "Pat Cummins",
      "Shivam Mavi",
      "Zeeshan Ansari",
      "Eshan Malinga",
    ],
    impact: "Brydon Carse",
  },
  DC: {
    playing: [
      "KL Rahul",
      "Prithvi Shaw",
      "David Miller",
      "Ben Duckett",
      "Tristan Stubbs",
      "Axar Patel",
      "Nitish Rana",
      "Mitchell Starc",
      "T. Natarajan",
      "Kuldeep Yadav",
      "Mukesh Kumar",
    ],
    impact: "Pathum Nissanka",
  },
  GT: {
    playing: [
      "Shubman Gill",
      "Jos Buttler",
      "Glenn Phillips",
      "Sai Sudharsan",
      "Shahrukh Khan",
      "Washington Sundar",
      "Jason Holder",
      "Kagiso Rabada",
      "Mohammed Siraj",
      "Rashid Khan",
      "Rahul Tewatia",
    ],
    impact: "Prasidh Krishna",
  },
  KKR: {
    playing: [
      "Ajinkya Rahane",
      "Rinku Singh",
      "Rahul Tripathi",
      "Cameron Green",
      "Tim Seifert",
      "Rachin Ravindra",
      "Ramandeep Singh",
      "Sunil Narine",
      "Varun Chakaravarthy",
      "Matheesha Pathirana",
      "Mustafizur Rahman",
    ],
    impact: "Vaibhav Arora",
  },
  LSG: {
    playing: [
      "Rishabh Pant",
      "Aiden Markram",
      "Nicholas Pooran",
      "Josh Inglis",
      "Himmat Singh",
      "Mitchell Marsh",
      "Wanindu Hasaranga",
      "Mohammad Shami",
      "Avesh Khan",
      "Mayank Yadav",
      "Mohsin Khan",
    ],
    impact: "Abdul Samad",
  },
  MI: {
    playing: [
      "Rohit Sharma",
      "Surya Kumar Yadav",
      "Quinton de Kock",
      "N. Tilak Varma",
      "Ryan Rickelton",
      "Hardik Pandya",
      "Will Jacks",
      "Trent Boult",
      "Jasprit Bumrah",
      "Deepak Chahar",
      "Mayank Markande",
    ],
    impact: "Sherfane Rutherford",
  },
  PBKS: {
    playing: [
      "Shreyas Iyer",
      "Shashank Singh",
      "Prabhsimran Singh",
      "Nehal Wadhera",
      "Vishnu Vinod",
      "Marcus Stoinis",
      "Marco Jansen",
      "Azmatullah Omarzai",
      "Arshdeep Singh",
      "Yuzvendra Chahal",
      "Lockie Ferguson",
    ],
    impact: "Harpreet Brar",
  },
  RR: {
    playing: [
      "Yashasvi Jaiswal",
      "Riyan Parag",
      "Shimron Hetmyer",
      "Dhruv Jurel",
      "Shubham Dubey",
      "Ravindra Jadeja",
      "Sam Curran",
      "Jofra Archer",
      "Ravi Bishnoi",
      "Tushar Deshpande",
      "Nandre Burger",
    ],
    impact: "Yudhvir Singh Charak",
  },
  RCB: {
    playing: [
      "Virat Kohli",
      "Rajat Patidar",
      "Devdutt Padikkal",
      "Phil Salt",
      "Tim David",
      "Krunal Pandya",
      "Venkatesh Iyer",
      "Josh Hazlewood",
      "Bhuvneshwar Kumar",
      "Yash Dayal",
      "Nuwan Thushara",
    ],
    impact: "Romario Shepherd",
  },
};

const STRONG_XI_STORAGE_KEY = "ipl_strong_xi_presets_v1";

let strongPresets = { ...strongXIByTeam };

function loadStrongPresets() {
  try {
    const raw = window.localStorage.getItem(STRONG_XI_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      strongPresets = { ...strongPresets, ...parsed };
    }
  } catch {
    // ignore storage errors
  }
}

function saveStrongPresets() {
  try {
    window.localStorage.setItem(
      STRONG_XI_STORAGE_KEY,
      JSON.stringify(strongPresets)
    );
  } catch {
    // ignore storage errors
  }
}

const globalState = {
  activeTeamCode: "CSK",
  filter: "ALL",
  teamState: {},
};

// initialise team state
teams.forEach((t) => {
  globalState.teamState[t.code] = { playing: [], impact: null };
});

function currentTeam() {
  return teams.find((t) => t.code === globalState.activeTeamCode);
}

function currentPlayers() {
  const t = currentTeam();
  return t ? t.players : [];
}

function currentTeamState() {
  return globalState.teamState[globalState.activeTeamCode];
}

function roleTagClass(role) {
  if (role === "Batter") return "tag-role-bat";
  if (role === "WK-Batter") return "tag-role-wk";
  if (role === "All-Rounder") return "tag-role-ar";
  if (role === "Bowler") return "tag-role-bowl";
  return "";
}

function isInPlaying(name) {
  return currentTeamState().playing.includes(name);
}

function isImpact(name) {
  return currentTeamState().impact === name;
}

function addToPlaying(name) {
  const state = currentTeamState();
  if (isInPlaying(name) || state.playing.length >= 11 || isImpact(name)) return;
  state.playing.push(name);
  renderAll();
}

function setImpact(name) {
  const state = currentTeamState();
  
  // If the player is already the impact player, remove them
  if (state.impact === name) {
    state.impact = null;
  } else {
    // If the player is in the playing XI, remove them from XI and set as impact
    if (isInPlaying(name)) {
      removeFromPlaying(name);
    }
    
    // Set as impact player
    state.impact = name;
  }
  
  renderAll();
}

function removeFromPlaying(name) {
  const state = currentTeamState();
  state.playing = state.playing.filter((p) => p !== name);
  renderAll();
}

function clearPlaying() {
  const state = currentTeamState();
  state.playing = [];
  renderAll();
}

function clearImpact() {
  const state = currentTeamState();
  state.impact = null;
  renderAll();
}

function clearAll() {
  const state = currentTeamState();
  state.playing = [];
  state.impact = null;
  renderAll();
}

function fillStrongXI() {
  const teamCode = globalState.activeTeamCode;
  const preset = strongPresets[teamCode] || strongXIByTeam[teamCode];
  const state = currentTeamState();
  if (preset) {
    state.playing = preset.playing.slice(0, 11);
    state.impact = preset.impact || null;
  } else {
    state.playing = [];
    state.impact = null;
  }
  renderAll();
}

function saveCurrentAsStrongXI() {
  const teamCode = globalState.activeTeamCode;
  const state = currentTeamState();
  if (!state.playing || state.playing.length === 0) {
    alert("Pick at least one player in the Playing XI before saving.");
    return;
  }
  strongPresets[teamCode] = {
    playing: state.playing.slice(),
    impact: state.impact || null,
  };
  saveStrongPresets();
  alert(`Saved current XI as Strong XI for ${teamCode}.`);
}

function setFilter(role) {
  globalState.filter = role;
  renderPlayers();
}

function renderSelections() {
  const playingList = document.getElementById("playingList");
  const playingCount = document.getElementById("playingCount");

  playingList.innerHTML = "";

  const state = currentTeamState();
  const players = currentPlayers();
  const teamCode = globalState.activeTeamCode.toLowerCase();

  playingCount.textContent = `(${state.playing.length} / 11${state.impact ? " + Impact" : ""})`;

  state.playing.forEach((name, idx) => {
    const p = players.find((x) => x.name === name);
    const li = document.createElement("li");
    li.className = `playing-card ${teamCode}`;
    
    // Set player image as background
    const imageUrl = playerImageSrc(p || name);
    
    // Create a fallback mechanism for background images
    const img = new Image();
    img.onload = function() {
      li.style.backgroundImage = `url('${imageUrl}')`;
    };
    img.onerror = function() {
      li.style.backgroundImage = 'none';
    };
    img.src = imageUrl;

    const main = document.createElement("div");
    main.className = "playing-card-main";

    const nameDiv = document.createElement("div");
    nameDiv.className = "playing-card-name";
    nameDiv.textContent = name;

    const indexSpan = document.createElement("div");
    indexSpan.className = "btn tiny ghost";
    indexSpan.textContent = `#${idx + 1}`;

    main.appendChild(nameDiv);
    

    const controls = document.createElement("div");
    controls.className = "playing-card-controls";

    const moveUp = document.createElement("button");
    moveUp.className = "btn tiny ghost";
    moveUp.innerHTML = "↑";
    moveUp.disabled = idx === 0;
    moveUp.onclick = () => {
      const s = currentTeamState();
      if (idx === 0) return;
      const tmp = s.playing[idx - 1];
      s.playing[idx - 1] = s.playing[idx];
      s.playing[idx] = tmp;
      renderAll();
    };

    const moveDown = document.createElement("button");
    moveDown.className = "btn tiny ghost";
    moveDown.innerHTML = "↓";
    moveDown.disabled = idx === state.playing.length - 1;
    moveDown.onclick = () => {
      const s = currentTeamState();
      if (idx === s.playing.length - 1) return;
      const tmp = s.playing[idx + 1];
      s.playing[idx + 1] = s.playing[idx];
      s.playing[idx] = tmp;
      renderAll();
    };

    const btnRemove = document.createElement("button");
    btnRemove.className = "btn tiny ghost";
    btnRemove.textContent = "✕";
    btnRemove.title = "Remove from XI";
    btnRemove.onclick = () => removeFromPlaying(name);

    controls.appendChild(moveUp);
    controls.appendChild(moveDown);
    controls.appendChild(btnRemove);
    controls.appendChild(indexSpan);
    main.appendChild(controls);

    if (isImpact(name)) {
      li.classList.add("impact-player");
      const tag = document.createElement("span");
      tag.className = "tag tag-mini tag-role-wk";
      tag.textContent = "Impact";
      main.appendChild(tag);
    }

    li.appendChild(main);
    playingList.appendChild(li);
  });

  if (state.impact && !state.playing.includes(state.impact)) {
    const p = players.find((x) => x.name === state.impact);
    const li = document.createElement("li");
    li.className = `playing-card ${teamCode} impact-player`;
    
    // Set player image as background
    const imageUrl = playerImageSrc(p || state.impact);
    
    // Create a fallback mechanism for background images
    const img = new Image();
    img.onload = function() {
      li.style.backgroundImage = `url('${imageUrl}')`;
    };
    img.onerror = function() {
      li.style.backgroundImage = 'none';
    };
    img.src = imageUrl;

    const main = document.createElement("div");
    main.className = "playing-card-main";

    const nameDiv = document.createElement("div");
    nameDiv.className = "playing-card-name";
    nameDiv.textContent = state.impact;

    const indexSpan = document.createElement("div");
    indexSpan.className = "btn tiny ghost";
    indexSpan.textContent = "#12";

    main.appendChild(nameDiv);

    const btnRemove = document.createElement("button");
    btnRemove.className = "btn tiny ghost";
    btnRemove.textContent = "X";
    btnRemove.onclick = () => clearImpact();

    const controls = document.createElement("div");
    controls.className = "playing-card-controls";
    controls.appendChild(btnRemove);
    controls.appendChild(indexSpan);

    main.appendChild(controls);

    li.appendChild(main);
    playingList.appendChild(li);
  }
}

function renderPlayers() {
  const container = document.getElementById("playerList");
  container.innerHTML = "";

  const players = currentPlayers();

  const filtered = players.filter((p) =>
    globalState.filter === "ALL" ? true : p.role === globalState.filter
  );

  if (players.length === 0) {
    const msg = document.createElement("div");
    msg.className = "muted";
    msg.textContent = "Squad not added yet for this team.";
    container.appendChild(msg);
    return;
  }

  const state = currentTeamState();
  const teamCode = globalState.activeTeamCode.toLowerCase();

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "player-card";

    const topRow = document.createElement("div");
    topRow.className = "player-top-row";

    const imageBox = document.createElement("div");
    imageBox.className = `player-image-box ${teamCode}`;

    const avatar = document.createElement("img");
    avatar.className = "player-avatar";
    avatar.src = playerImageSrc(p);
    avatar.alt = p.name;
    avatar.onerror = function () {
      this.onerror = null;
      this.src = `${IMAGE_BASE_PATH}/placeholder.png`;
    };
    imageBox.appendChild(avatar);

    const detail = document.createElement("div");
    detail.className = "player-detail";

    const name = document.createElement("div");
    name.className = "player-name";
    name.textContent = p.name;

    const sub = document.createElement("div");
    sub.className = "player-role";

    const tag = document.createElement("span");
    tag.className = `tag ${roleTagClass(p.role)}`;
    tag.textContent = p.role;
    sub.appendChild(tag);

    detail.appendChild(name);
    detail.appendChild(sub);

    const actions = document.createElement("div");
    actions.className = "player-actions";

    const inXI = isInPlaying(p.name);
    const inImpact = isImpact(p.name);

    const statusDot = document.createElement("div");
    statusDot.className = "status-dot";
    if (inXI && inImpact) statusDot.classList.add("both");
    else if (inXI) statusDot.classList.add("in-xi");
    else if (inImpact) statusDot.classList.add("impact");
    actions.appendChild(statusDot);

    const btnXI = document.createElement("button");
    btnXI.className = "btn secondary";
    btnXI.innerHTML = inXI
      ? '<span class="btn-icon">✓</span> In'
      : '<span class="btn-icon">➕</span> XI';
    btnXI.disabled = !inXI && (state.playing.length >= 11 || inImpact);
    btnXI.onclick = () => {
      if (inXI) removeFromPlaying(p.name);
      else if (!inImpact) addToPlaying(p.name);
    };

    const btnImpact = document.createElement("button");
    btnImpact.className = "btn ghost";
    btnImpact.innerHTML = inImpact
      ? '<span class="btn-icon">✕</span> Impact'
      : '<span class="btn-icon">⭐</span> Impact';
    btnImpact.disabled = !inImpact && (state.impact && state.impact !== p.name);
    btnImpact.onclick = () => {
      // If player is in XI, remove from XI and set as impact
      if (inXI) {
        removeFromPlaying(p.name);
      }
      setImpact(p.name);
    };

    actions.appendChild(btnXI);
    actions.appendChild(btnImpact);

    detail.appendChild(actions);

    topRow.appendChild(imageBox);
    topRow.appendChild(detail);

    card.appendChild(topRow);
    container.appendChild(card);
  });
}

function renderSummary() {
  const bar = document.getElementById("summaryBar");
  const state = currentTeamState();
  const players = currentPlayers();
  const total = state.playing.length;
  const impactFilled = !!state.impact;

  const counts = {
    Batter: 0,
    "WK-Batter": 0,
    "All-Rounder": 0,
    Bowler: 0,
  };

  state.playing.forEach((name) => {
    const p = players.find((x) => x.name === name);
    if (p && counts[p.role] !== undefined) counts[p.role] += 1;
  });

  const roleBad =
    counts["All-Rounder"] + counts["Bowler"] < 5 || counts["Bowler"] < 3;

  const spotsLeft = 11 - total;
  const status =
    total === 11 && impactFilled
      ? { text: "Perfect: XI locked with impact!", kind: "ok" }
      : total === 11
      ? { text: "XI ready, choose your impact.", kind: "warn" }
      : spotsLeft > 0
      ? { text: `${spotsLeft} spot(s) left in Playing XI.`, kind: "warn" }
      : { text: "Remove players to get back to 11.", kind: "error" };

  const pillClass =
    status.kind === "ok"
      ? "summary-pill ok"
      : status.kind === "warn"
      ? "summary-pill warn"
      : "summary-pill error";

  const team = currentTeam();
  const titleText =
    team && team.titles && team.titles.length
      ? `Titles: ${team.titles.join(", ")}`
      : "No titles yet";

  bar.innerHTML = `
    <div class="summary-main">
      <span class="${pillClass}">${status.text}</span>
      <span class="summary-pill pill-spot">
        XI: ${total} / 11 · Impact: ${impactFilled ? "1 / 1" : "0 / 1"}
      </span>
      
    </div>
    <div class="summary-roles">
      <span class="summary-role">Batters: ${counts["Batter"]}</span>
      <span class="summary-role">WK-Batters: ${counts["WK-Batter"]}</span>
      <span class="summary-role">All-Rounders: ${counts["All-Rounder"]}</span>
      <span class="summary-role">Bowlers: ${counts["Bowler"]}</span>
      ${
        roleBad
          ? '<span class="summary-role" style="color:#f97316;">Tip: Aim for at least 5 bowling options (3+ front-line bowlers).</span>'
          : ""
      }
    </div>
  `;
}

function renderAll() {
  renderPlayers();
  renderSelections();
  renderSummary();
}

function renderTeamSelector() {
  const container = document.getElementById("teamSelector");
  if (!container) return;
  container.innerHTML = "";

  teams.forEach((team) => {
    const pill = document.createElement("button");
    pill.className = "team-pill";
    if (team.code === globalState.activeTeamCode) {
      pill.classList.add("active");
    }

    const codeSpan = document.createElement("span");
    codeSpan.className = "team-code";
    codeSpan.textContent = team.code;

    const nameSpan = document.createElement("span");
    nameSpan.className = "team-name";
    nameSpan.textContent = team.name;

    const titlesSpan = document.createElement("span");
    titlesSpan.className = "team-titles";
    titlesSpan.textContent =
      team.titles && team.titles.length
        ? `🏆 ${team.titles.join(", ")}`
        : "No titles";

    pill.appendChild(codeSpan);
    pill.appendChild(nameSpan);
    pill.appendChild(titlesSpan);

    pill.onclick = () => {
      globalState.activeTeamCode = team.code;
      renderTeamSelector();
      renderAll();
    };

    container.appendChild(pill);
  });
}

function setupEvents() {
  const roleFilter = document.getElementById("roleFilter");
  roleFilter.addEventListener("change", (e) => setFilter(e.target.value));

  document.getElementById("btnStrongXI").onclick = fillStrongXI;
  document.getElementById("btnSaveStrongXI").onclick = saveCurrentAsStrongXI;
  document.getElementById("btnClearAll").onclick = clearAll;
  document.getElementById("btnClearPlaying").onclick = clearPlaying;
}

document.addEventListener("DOMContentLoaded", () => {
  loadStrongPresets();
  renderTeamSelector();
  setupEvents();
  renderAll();
});


