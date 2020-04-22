const createPortfolioSite = ({ link, img, title, desc1, desc2 }) => {
  return `
    <a href="${link}" class="portfolio-site"
      style="--bg: url(${img})"
    >
      <div class="site-info">
        <h1>${title}</h1>
        <p>${desc1}</p>
        <p>${desc2}</p>
      </div>
    </a>
  `;
};

const sites = [
  {
    link: 'https://taylorbeeston.github.io/Calculator',
    img: 'images/calculator.png',
    title: 'Calculator',
    desc1: 'A simple calculator app built for The Odin Project',
    desc2: 'It is built entirely with vanilla HTML, CSS, and Javascript!'
  },
  {
    link: 'https://taylorbeeston.github.io/RockPaperScissors',
    img: 'images/rps.png',
    title: 'Rock, Paper, Scissors',
    desc1: 'Rock, Paper, Scissors is a super simple web game that I built for The Odin Project!',
    desc2: 'It is built entirely with vanilla HTML, CSS, and Javascript!'
  },
  {
    link: 'https://codepen.io/taylorbeeston/pen/GRRepQx',
    img: 'images/minesweeper.png',
    title: 'Minesweeper',
    desc1:
      'This is the classic game Minesweeper! I used to play this a ton back on Windows XP, so I tried to make it look at least a little bit similar to that version.',
    desc2:
      'It is built using React on CodePen, however, I did do quite a bit of work to it locally, which is why there are JSDoc Coments'
  },
  {
    link: 'https://booksmarts.herokuapp.com',
    img: 'images/booksmarts.png',
    title: 'Booksmarts',
    desc1: 'Booksmarts is a web app that I created to help me keep track of books.',
    desc2:
      'It is built with Rails 6, uses the new Action Text as one of its main attractions, and keeps itself updated using Travis CI and Dependabot'
  },
  {
    link: 'https://taylorbeeston.github.io/EtchASketch',
    img: 'images/etchasketch.png',
    title: 'Etch A Sketch',
    desc1: 'A dead simple "Etch A Sketch" that I built for The Odin Project!',
    desc2: 'It is built entirely with vanilla HTML, CSS, and Javascript!'
  },
  {
    link: 'http://ashleysbrother.com',
    img: 'images/ashleysbrother.jpg',
    title: "Ashley's Brother (Music Site)",
    desc1:
      'Before I was a Developer, I was a Music Producer, and ashleysbrother.com is where I host all of my music!',
    desc2:
      'It is built on Rails 5.2.1 and uses CarrierWave to keep all my music stored in an S3 Bucket. It also cleverly uses Turbolinks to keep music playing throughout navigation of the site.'
  },
  {
    link: 'https://taylorBeeston.github.io/Library',
    img: 'images/library.png',
    title: 'Library',
    desc1: 'A simple Library app built for The Odin Project',
    desc2:
      'It is built entirely with vanilla HTML, CSS, and Javascript, and uses localStorage to keep track of your personal library.'
  },
  {
    link: 'https://godstoolbox.herokuapp.com',
    img: 'images/godstoolbox.png',
    title: "God's Toolbox",
    desc1: "God's Toolbox is a fake E-Commerce website for a fake Non-Profit",
    desc2:
      "It is built on a LAMP Stack, and is 100% vanilla PHP. I made this site as a school project, but I feel that it's complex enough to demonstrate some of my coding practices."
  }
]
  .map(site => createPortfolioSite(site))
  .join('');

export default () => sites;
