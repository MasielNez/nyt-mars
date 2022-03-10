import React from "react";
import ReactDOM from "react-dom";
import Article from "./Article";
import { LanguageProvider } from "../../contexts/languageContext";

it("renders without crashing", () => {
    const div = document.createElement("div");
    const article = {
        title: "Facebook plans to raise $10.6 billion in mega IPO ",
        images: [
            {
                top_image: true,
                url:
                    "https://s1.nyt.com/ios-newsreader/candidates/images/img1.jpg",
                width: 450,
                height: 284
            }
        ],
        body:
            "The eight-year-old social network that began as Mark Zuckerberg's Harvard dorm room project indicated an initial public offering price range of between $28 and $35 a share on Thursday, which would value the company at $77 billion to $96 billion.\n\nThe size of the IPO reflects the company's growth and bullish expectations about its money-making potential as a hub for everything from advertising to commerce.\n\n\"We certainly haven't ever seen a tech IPO on this grandiose a scale,\" said Lise Buyer, a principal with the IPO advisory firm Class V Group.\n\nBuyer, who worked on Google's 2004 IPO, said the question about a company \"that's already this big and that is raising this much money is how many of the glory days of growth are in the past versus how many are ahead.\"\n\nFacebook stands to raise as much as $12 billion at the upper end of its planned range. If an over-allotment or \"greenshoe\" option is triggered, the company could sweep up a maximum of $13.6 billion, according to a Thursday prospectus.\n\nFacebook is only getting about half, or $5.6 billion, of the estimated $10.6 billion that it would raise at the midpoint of its planned IPO range. About $4.9 billon will go to some existing shareholders.\n\nFacebook's stock could begin trading as soon as May 18, according to a road show schedule obtained by Reuters. The offering's price range can be adjusted depending on Wall Street's response during the road show.\n\nInvestors are expected to flock to the highly anticipated IPO, although there have been growing concerns about the social network's longer-term growth and Zuckerberg's majority control.\n\nFacebook will trade at 13 to 16 times the revenue that GreenCrest Capital analyst Max Wolff believes it will generate this year. By comparison, Google, the world's dominant Internet search engine, currently trades at 5.5 to 6 times expected 2012 revenue, he said.\n\nGoogle's valuation was higher when it went public in 2004, though Facebook's IPO valuation is still higher than Google's was back then, Wolff noted.\n\nBut some observers said the rich premium was unlikely to deter investors.\n\n\"People are going to be very comfortable with this valuation,\" said Sam Schwerin of Millennium Technology Value Partners, which owns Facebook shares worth roughly $200 million. The firm is not selling in the IPO.\n\n\"A price range of $28 to $35 will be a relief to some people who are concerned that they may try to take the highest possible price because of high demand,\" he said.\n\n\"The amount being raised is noteworthy. Selling stockholders are raising about $5 billion in the IPO, which is a lot.\"\n\nFacebook executives are due to hit the road on Monday, presenting their investment case to audiences. They will start in New York, go to other major cities such as Chicago and Boston, and end up on Facebook's home turf in Menlo Park, California, according to the schedule.\n\nZuckerberg is expected to participate in the two-week road show, a source has said, although Chief Operating Officer Sheryl Sandberg and Finance Chief David Ebersman will lead the briefings.\n\nTANTALIZING WALL STREET\n\nZuckerberg's involvement in the road show will be key for investors with concerns about Facebook's long-term strategy and money-making potential, said Brian Wieser, an analyst with Pivotal Research Group.\n\nZuckerberg's control of the company -- which was underscored when he orchestrated the $1 billion acquisition of mobile app maker Instagram last month -- means that investors need to \"get comfortable\" with the 27-year-old CEO, said Wieser.\n\nLast week, Facebook reported its first quarter-to-quarter revenue slide in at least two years, a sign that the social network's sizzling growth may be cooling just as it prepares to go public. Some observers have also flagged the company's lack of revenue on mobile devices such as smartphones as an area of concern.\n\nDressed in a gray t-shirt and jeans, the copper-haired Zuckerberg appeared in a 31-minute road show video posted online on Thursday. In the video, Zuckerberg predicted that in five years almost every software app would be integrated with Facebook.\n\nFacebook generated the lion's share of its $3.7 billion in revenue last year from online advertising. It also collects fees when consumers use its special Credits currency to purchase virtual goods in social games such as Zynga's Farmville. The company has said it may expand the use of its payment business beyond games.\n\nFacebook, which plans to list its stock on the Nasdaq under the ticker \"FB\", has long tantalized investors with the prospect of a mega IPO.\n\nAs a private company, shares of Facebook have traded briskly in secondary markets for the past couple of years, as investors sought to get a piece of the fast-growing company ahead of its expected IPO.\n\nThe IPO price range indicated in Facebook's filing on Thursday would value the company a hair below the level it has traded at in the secondary markets in recent months, with some trades valuing the company at slightly more than $100 billion.\n\nBut some investors think Facebook, which touts 900 million users worldwide, is setting itself a fairly conservative target.\n\n\"The price range may be tactical. They will likely walk the range up,\" Schwerin argued.\n\nFacebook plans to sell 337.4 million shares, or 12.3 percent of the company, in the offering. The capital-raising target far outstrips big Internet IPOs that came before it. Google raised just shy of $2 billion in 2004, while last year Groupon tapped investors for $700 million and Zynga raked in $1 billion.\n\nAt the top end of the IPO range, Facebook would rival the market value of Amazon.com and Cisco Systems Inc, which are worth just over $100 billion, and surpass the combined market value of older technology companies Hewlett-Packard Co and Dell Inc.\n\nAmong existing shareholders, the largest seller in the IPO will be venture capital firm Accel Partners, which will make about $1.2 billion assuming the shares sell at the $31.5 mid-point. Zuckerberg is selling the next largest chunk of shares, worth a little under $1 billion.\n\nFacebook said that a \"substantial majority\" of the proceeds from Zuckerberg's stock sale will be used to satisfy taxes he will incur from exercising his options.\n\nIn its prospectus, Facebook said the \"lock-up\" period, during which employees cannot sell shares after the IPO, would range from 151 days to 181 days.\n\nFacebook also added two new underwriters, including online broker E*Trade Securities. The broker caters to retail clients who some have speculated may try to pile into the IPO.\n\n\"No doubt Facebook doesn't want to upset the average mom and pop out there,\" said Craig Huber, research analyst, at independent research firm Huber Research Partners."
    };

    ReactDOM.render(
        <LanguageProvider>
            <Article article={article} />
        </LanguageProvider>,
        div
    );
});
