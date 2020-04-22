# Welcome to My Portfolio Site!

## How does it work?

There are five pages, one of which is simply a link to my resume file. The four HTML pages
are created using a special helper named ```webPage```, which uses the HTMLWebpackPlugin to have
Webpack ultimately create the Webpack files.

### webPage?

The ```webPage``` function simply takes in the resulting filename and an array of js files to 
create the HTML page. It then creates a title of the form 'Taylor Beeston | File', and passes
this information along to HTMLWebpackPlugin telling it to use the ```layout.hbs``` template.

### layout.hbs?

The ```layout.hbs``` template is the main driver of the whole site. It acts as a master template
for all the pages, meaning if I decided to added a picture of a kitty to the ```layout.hbs```
file, that picture of the kitty will appear on every page on the site. This was tricky to get
to work, but it's actually very simple: using a very simple helper (```page.js```), I simply
inserts the contents of a file with the same filename given to the ```webPage``` function
in the ```pages``` directory.

### page.js?

```page.js``` is a dead simple one-liner that I wish I could stuff directly into the
```layout.hbs``` file. it simply ```require```'s the contents of the file 
```../pages/filename.hbs```. This means that to get a resulting ```about.html``` file into
```dist```, there should be a ```pages/about.hbs``` file in ```src```, which will be inserted
into the middle of ```layout.hbs```.

### But what about the navbar?

While it bugs me that I couldn't find a more elegant solution that could decouple ```webPage```
further, I found that the simplest way to get the navbar to highlight the active page was
to simply remove the 'Taylor Beeston | ' from the title tag using vanilla JS. This is done
in the ```navigation.js``` file, which also imports the Resume file into the navbar. In the
future I would like to find a solution that allows the ```layout.hbs``` file to tell the
navbar which page is current.

### What is ```portfolio.js``` and why is ```portfolio.hbs``` so small?

Originally, I was hardcoding in all my Portfolio entries directly into the ```portfolio.hbs```
file. However, this proved to be very error-prone, and really seriously violates keeping my
code DRY. So, I wrote up ```portfolio.js``` to simplify this. This file uses the function
```createPortfolioSite``` to write the HTML for me, and allows me to create an array
of site objects that I ```map``` through and ```join``` together to write my ```portfolio```
HTML for me. The result is a much more maintainable list of portfolio sites.

---

## Why not just use {{framework}}?

As I learned about Webpack more deeply through The Odin Project, I found myself itching to
*just make something* with it, and I thought "What better than my portfolio site?" While I
ultimately could have been much more productive building this site with something like Next.js
or Angular, I found that I gained a huge amount of valuable knowledge about how Webpack works,
what its ecosystem is like, and as a bonus, I got to learn about the wonderful templating
language that is Handlebars!

I don't currently have any plans to switch off of my glued together Webpack framework for
this site. I simply have too much fun building it the hard way!
