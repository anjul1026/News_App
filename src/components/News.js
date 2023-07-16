import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Caitlin Gilbert, David Ovalle, Hanna Zakharenko",
      title:
        "Alcohol consumption surged during the pandemic — and deaths followed - The Washington Post",
      description:
        "U.S. consumption of alcohol, which had already been increasing for years, accelerated during the pandemic as Americans grappled with stress and isolation.",
      url: "https://www.washingtonpost.com/wellness/2023/07/13/alcohol-consumption-deaths/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PESOAESHEINGBSHSIK4IA5MXAY.jpg&w=1440",
      publishedAt: "2023-07-13T12:43:02Z",
      content:
        "Comment on this story\r\nComment\r\nRhode Island stand-up comedians Kirsten Logan and Frank Gazerro already drank plenty. The husband and wife were literally paid in drinks at nightclubs. Then came the p… [+14883 chars]",
    },
    {
      source: { id: null, name: "Variety" },
      author: "Manori Ravindran",
      title:
        "U.K. Actors Union Equity Readies Guidance for SAG-AFTRA Strike (EXCLUSIVE) - Variety",
      description:
        "U.K. actors union Equity is preparing advice for its members as SAG-AFTRA gets ready to take strike action on Thursday. Variety understands that the union, which has 50,000 members, has agreed a ba…",
      url: "https://variety.com/2023/tv/global/equity-actors-strike-sag-aftra-advice-1235658717/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2023/06/Equity-Sag.jpg?w=1000&h=563&crop=1",
      publishedAt: "2023-07-13T11:28:00Z",
      content:
        "U.K. actors union Equity is preparing advice for its members as SAG-AFTRA gets ready to take strike action on Thursday.\r\nVariety understands that the union, which has 50,000 members, has agreed a bas… [+2843 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Rob Picheta, Zahid Mahmood",
      title:
        "Ukraine will ‘no doubt’ join NATO when war with Russia ends, US defense secretary tells CNN - CNN",
      description:
        "The US secretary of defense told CNN on Thursday he has “no doubt” that Ukraine will become part of NATO after Russia’s war against the country ends, following a two-day summit that was dominated by the question of when Kyiv would join the alliance.",
      url: "https://www.cnn.com/2023/07/13/politics/lloyd-austin-nato-ukraine-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230712152531-03-nato-summit-071223-biden-zelensky.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-07-13T11:26:00Z",
      content:
        "Watch the full interview with Defense Secretary Lloyd Austin at 6 p.m. ET on The Situation Room with Wolf Blitzer.\r\nUS Secretary of Defense Lloyd Austin told CNN on Thursday he has no doubt that Ukra… [+3495 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Olena Harmash",
      title:
        "Russia attacks Kyiv for third night in a row, one killed in south Ukraine - Reuters",
      description:
        "Russia attacked Kyiv for a third successive night, wounding four people, and an elderly woman was killed by Russian shelling in southern Ukraine on Thursday, Ukrainian officials said.",
      url: "https://www.reuters.com/world/europe/falling-debris-drone-attack-hits-kyiv-districts-military-2023-07-12/",
      urlToImage:
        "https://www.reuters.com/resizer/iQ-BZOakAdd-Gymmc8GZUv6s4ng=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IZIIRX6BHFJYBLYKCR7KXSEYPI.jpg",
      publishedAt: "2023-07-13T11:20:00Z",
      content:
        "KYIV, July 13 (Reuters) - Russia attacked Kyiv for a third successive night, wounding four people, and an elderly woman was killed by Russian shelling in southern Ukraine on Thursday, Ukrainian offic… [+2407 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Tim Lister, Uliana Pavlova, Anna Chernova",
      title:
        "Russian general in Ukraine says he was fired after accusing defense ministry of betraying troops - CNN",
      description:
        "A senior Russian general in command of forces in occupied southern Ukraine says he was suddenly dismissed from his post after accusing Moscow’s Defense Ministry leadership of betraying his troops by not providing sufficient support.",
      url: "https://www.cnn.com/2023/07/12/europe/russian-general-treachery-accusations-ukraine-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230712180856-02-ivan-popov-file-071223.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-07-13T11:04:00Z",
      content:
        "A senior Russian general in command of forces in occupied southern Ukraine says he was suddenly dismissed from his post after accusing Moscows Defense Ministry leadership of betraying his troops by n… [+4838 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Abby Turner, Andrew Kaczynski",
      title:
        "Robert F. Kennedy Jr. repeatedly suggested that chemicals in water are impacting sexuality of children - CNN",
      description:
        "Democratic presidential candidate Robert F. Kennedy Jr. has a history of repeatedly sharing unfounded conspiracies that man-made chemicals in the environment could be making children gay or transgender and causing the feminization of boys and masculinization …",
      url: "https://www.cnn.com/2023/07/13/politics/robert-kennedy-jr-chemicals-water-children-frogs/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230622115241-01-robert-kennedy-jr-0620.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-07-13T11:01:00Z",
      content:
        "Democratic presidential candidate Robert F. Kennedy Jr. has a history of repeatedly sharing unfounded conspiracies that man-made chemicals in the environment could be making children gay or transgend… [+6073 chars]",
    },
    {
      source: { id: "ign", name: "IGN" },
      author: "Wesley Yin-Poole",
      title:
        "Microsoft Deal Could Close Soon With Activision Blizzard Set to Leave Stock Exchange - IGN",
      description:
        "Activision Blizzard is set to leave the Nasdaq Stock Market, indicating Microsoft may soon complete its $69 billion buyout of the company.",
      url: "https://www.ign.com/articles/microsoft-deal-could-close-soon-with-activision-blizzard-set-to-leave-stock-exchange",
      urlToImage:
        "https://assets-prd.ignimgs.com/2022/06/09/call-of-duty-modern-warfare-2-how-to-access-open-beta-ign-1654769968772.png?width=1280",
      publishedAt: "2023-07-13T10:59:03Z",
      content:
        "Activision Blizzard is set to leave the Nasdaq Stock Market, indicating Microsoft may soon complete its $69 billion buyout of the company.\r\nThe publisher of Call of Duty, Diablo and Candy Crush is ex… [+2601 chars]",
    },
    {
      source: { id: null, name: "The Athletic" },
      author: "Richard Deitsch and The Athletic Staff",
      title:
        "MLB All-Star Game again draws record-low viewership, per reports: Could we see this coming? - The Athletic",
      description:
        "The game, which saw the National League win for the first time in 11 years, reportedly averaged 7.006 million viewers on Fox.",
      url: "https://theathletic.com/4687223/2023/07/12/mlb-all-star-game-ratings/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/07/12180333/USATSI_21025377-1-scaled.jpg",
      publishedAt: "2023-07-13T10:36:07Z",
      content:
        "Tuesdays 2023 MLB All-Star Game drew record-low viewership for the second straight year, according to multiple reports Wednesday. Heres what you need to know:\r\n<ul><li>The game, which saw the Nationa… [+2549 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Andrew Jeong, Adela Suliman",
      title:
        "Ukraine live briefing: Biden in Finland; Russian general says he was pushed out for criticizing army - The Washington Post",
      description:
        "Ukraine’s president said the NATO summit dispelled any doubts about Kyiv’s future membership in the alliance, after initially criticizing a lack of a timeline.",
      url: "https://www.washingtonpost.com/world/2023/07/13/russia-ukraine-war-news/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DMUZ4CXP4FXNRBKQH36MV22QEQ_size-normalized.jpg&w=1440",
      publishedAt: "2023-07-13T10:10:00Z",
      content:
        "President Biden is in Finland NATOs newest member state for a summit with Nordic leaders. At a meeting with his Finnish counterpart, Sauli Niinistö, in Helsinki, Biden said it took me about three sec… [+6674 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Amelia Lucas",
      title:
        "PepsiCo beats earnings estimates, raises full-year outlook - CNBC",
      description:
        "PepsiCo raised its full-year outlook as it beat earnings and revenue estimates for the second quarter, but higher prices hurt its volume.",
      url: "https://www.cnbc.com/2023/07/13/pepsico-pep-q2-2023-earnings.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107270340-1689171593801-gettyimages-1523507923-PEPSI_EARNS.jpeg?v=1689242933&w=1920&h=1080",
      publishedAt: "2023-07-13T10:08:53Z",
      content:
        "PepsiCo on Thursday reported quarterly earnings and revenue that topped analysts' expectations, despite falling demand for its drinks and food.\r\nThe beverage giant also raised its full-year outlook f… [+2212 chars]",
    },

    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "BRIAN MELLEY",
      title:
        "Kevin Spacey testifies in his own defense in his sexual assault trial at a London court - The Associated Press",
      description:
        "Kevin Spacey says he was crushed when an intimate friend accused him of sexual assault. Spacey testified Thursday in a London court in what could be the most consequential speaking part of his life. Spacey began by discussing how he got involved in the theate…",
      url: "https://apnews.com/article/kevin-spacey-testifies-sexual-assault-trial-london-ae62009c0cfab7bc2b17d53c3674b7c2",
      urlToImage:
        "https://dims.apnews.com/dims4/default/207311f/2147483647/strip/true/crop/2377x1337+0+124/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4c%2Ff4%2F4470bbe7a3421feb40d674eef28d%2Fcb26cd7ff14d41c88c31057fbcc5d33d",
      publishedAt: "2023-07-13T09:37:00Z",
      content:
        "LONDON (AP) Kevin Spacey took a dramatic pause in his testimony Thursday and appeared to almost choke up as he recalled the intimate and somewhat sexual friendship he shared with a man now accusing t… [+4247 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Joe Cash, Ellen Zhang",
      title:
        "China's exports fall most in three years as global economy falters - Reuters",
      description:
        "China's exports fell last month at their fastest pace since the onset three years ago of the COVID-19 pandemic, as an ailing global economy puts mounting pressure on Chinese policymakers for fresh stimulus measures.",
      url: "https://www.reuters.com/markets/asia/chinas-june-exports-fall-124-imports-drop-68-2023-07-13/",
      urlToImage:
        "https://www.reuters.com/resizer/GA4YkUre7QsziBt8qJcDPzPdZSE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/D2ED6ANVGZJNZEMKQBNSFSBSOY.jpg",
      publishedAt: "2023-07-13T09:09:00Z",
      content:
        "BEIJING, July 13 (Reuters) - China's exports fell last month at their fastest pace since the onset three years ago of the COVID-19 pandemic, as an ailing global economy puts mounting pressure on Chin… [+4121 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title:
        "India’s capital faces drinking water shortage after pumps flooded - Al Jazeera English",
      description:
        "The Yamuna river that flows through New Delhi is at its highest level in 45 years after unusually heavy downpours.",
      url: "https://www.aljazeera.com/news/2023/7/13/indias-capital-faces-drinking-water-shortage-after-pumps-flooded",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/07/2023-07-13T005846Z_1639973709_RC2K12AYKODI_RTRMADP_3_ASIA-WEATHER-INDIA-MONSOON-1689234944.jpg?resize=1920%2C1440",
      publishedAt: "2023-07-13T08:43:12Z",
      content:
        "Supplies of drinking water in New Delhi will fall by a quarter on Thursday and Friday because three treatment plants have been flooded, the city government said, as the Yamuna river overflows after i… [+3170 chars]",
    },
    {
      source: { id: null, name: "Daily Beast" },
      author: "Laura Bradley",
      title:
        "'And Just Like That' Episode 5 Recap: Carrie Has a Fling at Halloween - The Daily Beast",
      description:
        "Halfway through its second season, Max’s “Sex and the City” sequel stopped teetering in its Manolos and delivered a nearly perfect episode.",
      url: "https://www.thedailybeast.com/obsessed/and-just-like-that-episode-5-recap-carrie-has-a-fling-at-halloween",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1689200395/230712-and-just-that-ep5-tease_bkwbm8",
      publishedAt: "2023-07-13T07:23:42Z",
      content:
        "Every now and again on Sex and the City, Carrie Bradshaw would meet a certain kind of man. Hed be cute but not devastating, and their chemistry would be undeniable but not quite smoldering. He would … [+7964 chars]",
    },
    {
      source: { id: "espn", name: "ESPN" },
      author: "Kyle Bonagura",
      title:
        "USMNT players fail to impress in Gold Cup loss to Panama - ESPN - ESPN",
      description:
        "With the USMNT's Gold Cup run ending early, there weren't any players who emphatically made a statement that they are ready for a larger role.",
      url: "https://www.espn.com/soccer/story/_/id/38002592/usmnt-players-fail-impress-gold-cup-loss-panama",
      urlToImage:
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0713%2Fr1197281_1296x729_16%2D9.jpg",
      publishedAt: "2023-07-13T06:39:00Z",
      content:
        "SAN DIEGO -- Ever since he was named the interim United States men's national soccer team coach, replacing another interim coach, B.J. Callaghan has been consistent.\r\nThe team's objective at the Gold… [+5535 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Jacob Lev",
      title:
        "LeBron James announces he will return this fall for his 21st NBA season - CNN",
      description:
        "After hinting at a possible retirement following a postseason loss in May, NBA superstar LeBron James has announced he will be returning for another year of play – his 21st NBA season.",
      url: "https://www.cnn.com/2023/07/13/sport/lebron-james-returns-announcement-nba-spt/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230712230506-lebron-james-returns-announcement.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-07-13T06:01:00Z",
      content:
        "After hinting at a possible retirement following a postseason loss in May, NBA superstar LeBron James has announced he will be returning for another year of play his 21st NBA season. \r\nThe leagues al… [+1428 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Mexico vs. Jamaica Highlights | CONCACAF Gold Cup - FOX Soccer",
      description:
        "Mexico and Jamaica go head-to-head in the CONCACAF Gold Cup Semifinal. Mexico overpowered Jamaica securing three goals from Henry Martín (2'),  Luis Chávez (...",
      url: "https://www.youtube.com/watch?v=8asMt4qeInM",
      urlToImage: "https://i.ytimg.com/vi/8asMt4qeInM/maxresdefault.jpg",
      publishedAt: "2023-07-13T05:13:56Z",
      content: null,
    },
  ];

  constructor() {
    super();
    console.log("Hello i'm a constructor form news component");
    this.state = { articles: this.articles, loading: false };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=42fced2612a943abb39e4c44f5a5e003";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonky-Top headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
