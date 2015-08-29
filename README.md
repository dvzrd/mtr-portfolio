# Meteor Portfolio App

A portfolio app for artists or photographers built with Meteor using Semantic-UI and Orion CMS

[DEMO](http://artfolio.meteor.com)

> You can use username: admin // password: admin to login to /admin

* [Roadmap](#roadmap)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [Attributions](#attributions)
* [License](#license)

## Roadmap

* Add tests
* Setup build environment
* ~~Security~~
* ~~Prev / Next for project/post view~~
* lazy load more items in album when scrolling (project view)
* Style fixes for different device widths

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Installation

```
git clone git@github.com:amazingBastard/mtr-portfolio.git
cd mtr-portfolio
meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

There are other ways to deploy to your server besides Meteor Up. Here is a [step by step guide from Digital Ocean](http://devo.ps/blog/deploy-your-meteor-apps-on-digital-ocean-in-5-minutes/).

## Structure

### Packages used

* Meteor Core
  * [meteor-platform](http://github.com/meteor/meteor/tree/devel/packages/meteor-platform)
* Accounts
  * [accounts-password](https://github.com/meteor/meteor/tree/devel/packages/accounts-password)
  * [useraccounts:semantic-ui](https://github.com/meteor-useraccounts/semantic-ui/)
* [Security]
  * [audit-argument-checks](http://github.com/meteor/meteor/tree/devel/packages/audit-argument-checks)
  * [matteodem:easy-security](https://github.com/matteodem/meteor-easy-security/)
* CMS
  * [orionjs:core](https://github.com/orionjs/orion)
  * [orionjs:froala](https://github.com/orionjs/orion)
  * [dvz:orion-semantic-ui](https://github.com/amazingBastard/orion-semantic-ui)
* Routing
  * [kadira:flow-router](https://github.com/kadirahq/flow-router)
  * [meteorhacks:fast-render](https://github.com/meteorhacks/fast-render)
  * [arillo:flow-router-helpers](https://github.com/arillo/meteor-flow-router-helpers/)
  * [zimme:active-route](https://github.com/zimme/meteor-active-route)
* SEO
  * [spiderable](http://github.com/meteor/meteor/tree/devel/packages/spiderable)
  * [tomwasd:flow-router-seo](https://github.com/tomwasd/flow-router-seo)
* UI and UX
  * [fastclick](http://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [semantic:ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS)
  * [natestrauser:animate-css](http://github.com/nate-strauser/meteor-animate-css)
  * [waitingkuo:headroomjs](https://github.com/waitingkuo/meteor-headroomjs)
  * [miro:mailchimp](https://github.com/MiroHibler/meteor-mailchimp)
  * [obvio171:disqus](https://github.com/obvio171/meteor-disqus)
  * [joshowens:shareit](https://github.com/meteorclub/shareit)
* Development
  * [check](http://github.com/meteor/meteor/tree/devel/packages/check)
  * [flemay:less-autoprefixer](http://github.com/flemay/less-autoprefixer)
  * [momentjs:moment](http://github.com/moment/moment/)
  * [msavin:mongol](http://github.com/msavin/Mongol)
  * [meteorhacks:npm](https://github.com/meteorhacks/npm)

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
app/                # Application folder
  client/             # Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
    lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    templates/          # Contains all templates
      layouts/            # Router layouts
      views/              # All the views
      modules/            # UI elements and components (i.e. forms, actions, etc...)
        common/             # Common components (i.e. header, footer)
        elements/           # Re-usable components
  orion/              # Orion CMS files
    collections/        # Collection files, for each orion.Collection
    dictionary/         # Orion dictionary
  packages/           # Packages folder (custom meteor packages, npm)
  private/            # Private files
  public/             # Public files
  router/             # All routes
  server/             # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications
    startup/            # On server startup
  tests/              # All tests
    client/             # client tests
      integration/        # integration tests
      unit/               # unit tests
    server/             # server tests
      integration/        # integration tests
      unit/               # unit tests
environments/       # Environments folder
  build/              # testing environment
  local/              # local environment
  production/         # production environment

```

## License

This project has an MIT License, see the LICENSE.txt for more information.
