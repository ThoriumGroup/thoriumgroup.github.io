---
layout: page
navbar: About
title: "About Thorium"
toc: true
date: 2014-07-06 09:38
categories: [Thorium, modules]
comments: false
sharing: true
footer: true
---

**Thorium is a curated, upgraded and standardized collection of popular and
useful open source tools for the Foundry's visual effects compositing software, 
[Nuke](http://www.thefoundry.co.uk/nuke/).**

Many of the tools found inside of Thorium have their roots as user
crafted tools on [Nukepedia](http://www.nukepedia.com/). Being driven entirely
by user created content, Nukepedia hosts an incredible variety of tools for 
many different uses. *Thorium is not a replacement for Nukepedia.* But user
created tools have their own disadvantages. Methods of installation vary
wildly, coding isn't always efficient, style standards and documentation is
haphazard at best, and unit/integration testing is universally non-existent.

Thorium aims to fix those problems by taking a fine tooth comb to the tools,
refactoring, upgrading and documenting. [Read about exactly what happens when a
module becomes a Thorium module.](about/modules.html)

**Thorium is the greatest hits of Nukepedia, remastered and upgraded to be 
indistinguishable from built-in Nuke tools.** Thorium aims to provide powerful 
tools in a simple, user friendly package.

## Installation

All of Thorium can be integrated into Nuke in just 4 lines of code:

<div class="row" style="padding-top: 14px;">
  <div class="col-md-6">
``` python init.py
import thorium
thorium.run()
```
  </div>
  <div class="col-md-6">
``` python menu.py
import thorium
thorium.run_gui()
```
  </div>
</div>

This integration can be customized thoroughly through simple arguments. Two of
the most common customizations would be changing the name of the `Thorium`
menu, or turning off a Thorium submodule.

<div class="row" style="padding-top: 14px;">
  <div class="col-md-6">
``` python Change Menu Name
import thorium
thorium.run_gui(menu='BobVFX')
```
  </div>
  <div class="col-md-6">
``` python Turn Off animatedSnap3D
import thorium
thorium.run_gui({'animatedSnap3D': False})
```
  </div>
</div>

More configuration options can be found in the 
[Thorium Docs](docs/thorium.html).

### Getting Thorium

Even getting Thorium is easy. If you have `pip` installed, Thorium can be
added to your Python install with a simple shell command, 
`pip install thorium`.

If you don't have `pip`, you can install it by downloading the latest release
from the [release page](https://github.com/ThoriumGroup/thorium/releases), 
uncompress and enter the directory, then use the shell command 
`python setup.py install` to install Thorium to your Python install. Or, you
can just copy the `thorium` folder from that package into your `.nuke` folder.

Whatever way you choose, you can get Thorium easily into your environment.

## Thorium Specific Tools

While Thorium is primarily a combination of other modules, it also contains 
tools and functionality specific to Thorium. 

Some highlights of Thorium specific functionality are:

- Recursive `allNodes()` function that actually works.
- Functions to help navigate into and out of group nodes.
- A subclass ready 'Gizmo as Group' class, streamlining the setup of 
    complicated tools as python objects, rather than gizmos.
- 1D and 3D LUT setup functions.

For the full list see the [Thorium Docs](docs/thorium.html).

## One Package to Update, Many Modules

Every time a package Thorium contains gets a new release, Thorium gets a new
release. Instead of tracking each sub-module, all users of Thorium have to do
is update Thorium.

Thorium offers a menu item to check for a new release of Thorium. If you
installed via `pip`, upgrading is a breeze: `pip install thorium --upgrade`.

If you installed with `python setup.py install`, just run
`python setup.py install` again in the new version's package folder.

Otherwise, just copy & replace the `thorium` folder.