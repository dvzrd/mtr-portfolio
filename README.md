# Meteor Portfolio App

A portfolio app for artists or photographers built with Meteor using Semantic-UI and Orion CMS

* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Installation

```
git clone git@github.com:withpulp/minimal-agency.git
cd minimal-agency
meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

There are other ways to deploy to your server besides Meteor Up. Here is a [step by step guide from Digital Ocean](http://devo.ps/blog/deploy-your-meteor-apps-on-digital-ocean-in-5-minutes/).

## Structure

### Packages used

* Meteor Core
  * [meteor-platform](https://github.com/meteor/meteor/tree/devel/packages/meteor-platform)
* Collections
 * [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers/)
* UI and UX
  * [fastclick](https://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [fortawesome:fontawesome](https://github.com/MeteorPackaging/Font-Awesome)
  * [natestrauser:animate-css](https://github.com/nate-strauser/meteor-animate-css)
* Development
  * [lauricio:less-autoprefixer](https://github.com/Lauricio/less-autoprefixer)
  * [momentjs:moment](https://github.com/moment/moment/)
  * [msavin:mongol](https://github.com/msavin/Mongol)

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
       common/              # Common components (i.e. header, footer)
       elements/            # Re-usable components
  orion/              # Orion CMS files
    dictionary/         # Orion dictionary definitions
  models/             # Model files, for each Meteor.Collection
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
