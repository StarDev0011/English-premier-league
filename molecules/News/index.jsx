import { NewsWrapper } from "./styles"

export default function News() {
    return(
        <NewsWrapper>
            <h2>Latest Football News</h2>
            <div className="latest_news">
                <div className="news_item">
                    <h3 className="news_question">
                        Is Gareth Southgate ready to rejuvenate?
                    </h3>
                    <p className="news_answer">
                        For the English national team there are some very talented youngsters, will they get the chance during the 2022 World Cup tournament?
                    </p>
                    <p className="news_date">
                        Posted on 17/11/2022 12:05:12
                    </p>
                </div>
                <div className="news_item">
                    <h3 className="news_question">
                        Does Southgate know his best CB partnership?
                    </h3>
                    <p className="news_answer">
                        Eric Dier, Harry Maguire, John Stones, Cornor Coady and Kyle Walker are a few candidates for the CB places.
                    </p>
                    <p className="news_date">
                        Posted on 15/11/2022 08:55:09
                    </p>
                </div>
            </div>
        </NewsWrapper>
    )
}