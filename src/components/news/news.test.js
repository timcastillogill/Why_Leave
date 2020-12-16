import { render, screen } from '@testing-library/react';
import News from './news.js'
const guardian = {
    id: "society/2020/dec/05/ive-grown-into-a-completely-different-person-catching-up-with-gen-z-four-years-on",
    type: "article",
    sectionId: "society",
    sectionName: "Society",
    webPublicationDate: "2020-12-05T10:00:38Z",
    webTitle: "'I've grown into a completely different person': catching up with Gen Z",
    webUrl: "https://www.theguardian.com/society/2020/dec/05/ive-grown-into-a-completely-different-person-catching-up-with-gen-z-four-years-on",
    apiUrl: "[https://content.guardianapis.com/society/2020/dec/05/ive-grown-into-a-completely-different-person-catching-up-with-gen-z-four-years-on](https://content.guardianapis.com/society/2020/dec/05/ive-grown-into-a-completely-different-person-catching-up-with-gen-z-four-years-on)",
    isHosted: false,
    pillarId: "pillar/news",
    pillarName: "News",
    newsHeadline: "In 2016, the Guardian spoke to 16-year-olds across the globe about their hopes and dreams. As they turn 20 in a global pandemic, we tracked them down",
    newsArticle: "Four years ago, Halil felt optimistic for the future. Keen on basketball, chess and football, as well as video games, he was unsure what he was going to study at university.* or my birthday this year, my friends surprised me. They all came over to my family house, and we had cake and then went to one of their houses for a sleepover. They got me a French press coffee maker, and I received about 1,500 lira (£150) from my family. I'm going to save it. It's a bit weird and frustrating to turn 20 at home: I was supposed to start university this year in Ankara. Instead, because of the pandemic, I'm still in Izmir. A few weeks ago was really scary. I was on the balcony, and our house shook a lot. But we are lucky; we were OK. A couple of neighbourhoods were very badly affected."
  };

test("test articles length isn't more than 400 characters long", () => {
  render(<News />);
  const news = new News()
  const newsArticle = news.this.task
  expect(newsArticle.length).toBeLessThan(400);
});
