export default page => require(`../pages/${page.replace('.html', '.hbs')}`);
