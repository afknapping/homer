    $ foreman start

## image link template

    ![]({{site.baseurl}}/content/images/2014/XXXXXXXXX)

----

## Adding content

See the [GitHub Pages](http://jekyllrb.com/docs/github-pages/) and [Data Files](http://jekyllrb.com/docs/datafiles/) sections of the [Jekyll docs](http://jekyllrb.com/docs/home/)

## Local development

- [Sass 3.3](http://sass-lang.com/) [with source maps](https://developer.chrome.com/devtools/docs/css-preprocessors) (as of yet without Compass, but feel to add and configure within [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass))
- [Jade](http://jade-lang.com/)

### Install all the things

*Note:* Ruby version is set to 2.1.2. Please check the docs of your ruby version manager on how to install and use.

    $ npm install gulp --global
    $ npm install
    $ bower install
    $ gem install bundler
    $ bundle install


(We would need to start gulp (to generate the stuffz) and jekyll (to generate the page) seperately but Foreman wraps that for us. See [Using a Procfile to streamline your local development](http://mattstauffer.co/blog/using-a-procfile-to-streamline-your-local-development) for more info.)

