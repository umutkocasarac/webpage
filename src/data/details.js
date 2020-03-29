// These properties will be vailable to all of the templates
// and namespaced under the file name.
// (https://www.11ty.io/docs/data-js/)
//
// eg: {{ details.name }}

module.exports = {


  // Your twitter handle
  twitter: https://twitter.com/umutkocasarac,

  // Your name
  name: Umut,

  // The event we are at
  event: "",

  // The repository to which this site is linked
  repo : process.env.REPOSITORY_URL
    ? process.env.REPOSITORY_URL.replace('git@github.com:','https://github.com/')
    : 'https://github.com/umutkocasarac/kocasarac.com',

  // The site name used in the URL of the Netlify Admin UI
  // (Which we can figure out from the deployed URL)
  sitename: process.env.URL
    ? process.env.URL.split('https://')[1].split('.netlify.com')[0]
    : 'playwith',

  url: process.env.URL

}
