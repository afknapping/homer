# The Homer

![](_the-homer-inline2.jpg)

A Jekyll template with all the features – so you can opt out the ones you do not need.

## Adding content

See the [GitHub Pages](http://jekyllrb.com/docs/github-pages/) and [Data Files](http://jekyllrb.com/docs/datafiles/) sections of the [Jekyll docs](http://jekyllrb.com/docs/home/)

## Local development

- [Sass](http://sass-lang.com/) ([with source maps](https://developer.chrome.com/devtools/docs/css-preprocessors))
- [Jade](http://jade-lang.com/)

### Install all the things

*Note:* Ruby version is set to 2.1.2. Please check the docs of your ruby version manager on how to install and use.

    $ npm install gulp --global && npm install
    $ gem install bundler && bundle install

### Fire it up

    $ nf start

...which starts Gulp and Jekyll. See [Using a Procfile to streamline your local development](http://mattstauffer.co/blog/using-a-procfile-to-streamline-your-local-development) for more info.

## image link template

    ![]({{site.baseurl}}/content/images/2014/XXXXXXXXX)

