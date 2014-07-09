---
layout: page
navbar: About
title: "Thorium Modules"
toc: true
date: 2014-07-08 18:38
categories: [modules]
comments: false
sharing: true
footer: true
---

While Thorium is primarily distributed as an all-in-one solution, each module
that Thorium contains can be downloaded and used independently. To that end,
the first steps that a Thorium upgrade consists of are solely to the module
itself- Thorium integration happens last.

The full list of Thorium modules can be found in the 
[documentation index](/docs).

## Frontend

Frontend changes focus on presenting an easy, consistent experience to the
user, minimizing frustration and decreasing clutter.

### New Features

One of the biggest things that happens to a module is that it's feature set is
examined, and any features that would make a more complete product are added
to round it out. If a tool tracks a card for translation and rotation, Thorium
would add scale tracking so that it's feature set would be 'complete.'

Often this involves additional panel options, sometimes entire settings panels.

### UI Consistency

For modules that add menu items, those menu items are either placed in the 
correct Nuke native menus, or under a new `User` menu, and appropriate 
sub-menus as needed. The `User` menu name can even be given a new name when you
call the `run()` function (see [Nuke Installation](#NukeInstall) below).

### Repackaging and Easy Installation

Each module brought into Thorium is redone as a full Python package, according
to the
[Python Packaging User Guide](python-packaging-user-guide.readthedocs.org/).
Much like the PEP-8 logic above, this lets each module be distributed in a 
consistent package. Because of the repackaging, Thorium modules can be hosted
on the [Python Package Index (PyPI)](https://pypi.python.org/pypi) and 
installed via [pip](https://pypi.python.org/pypi/pip). If pip is not available,
packages can be installed by downloading the module and running
`python setup.py install` from the root package level. Packages can still be
installed and available just to Nuke, and just to the current user via the
traditional method putting the module folder in the user's `.nuke` folder.

``` linenos:false
.
├── LICENSE
├── MANIFEST.in
├── README.rst
├── setup.py
├── tests
│   └── test_viewerSync.py
└── viewerSync
    ├── __init__.py
    └── viewerSync.py
```

### Consistent, Easy Nuke Installation

No matter how complicated the module, Thorium modules are added to Nuke with 
just two lines:

``` python
import module_name
module_name.run()
```

This will add the correct nodes, menu items, callbacks, etc. to Nuke. Because 
of the UI consistency, all un-categorized menu items are added a `User` menu,
and all easily categorized menu items are added to the correct, native Nuke
menus.

### Documentation

Each module gains full module documentation, both internal (backend) and 
external.

Internal documentation consists of full module, function and class docstrings,
as well as liberal in line commenting to help programmers who might not be
familiar with the Nuke API.

External documentation is available here on the Thorium website and as part of
of the package itself. This external documentation contains installation, usage
and API reference (for using those useful functions we refactor out).

Depending on how complicated a module is, documentation can either be in a
`docs/` folder or entirely within the `README`.

## Backend

Backend changes focus on ease of code maintenance and collaboration. All code
in Thorium should be well documented, easy to read and easy to customize
or bug fix. 

### Refactoring

Each module brought into Thorium has its code analyzed, tested and refactored
to be both more efficient and less buggy. Sometimes this is easy, sometimes
this involves practically rewriting the entire tool. Along the way certain
useful bits of code are identified and factored out as functions that might be 
useful to Pipeline and 2d TDs outside of the scope of the module.

### PEP-8 Style Standard

Whatever the style of the module coming in, the style that ends up in Thorium
is always [PEP-8](http://legacy.python.org/dev/peps/pep-0008/). Adhering to a
popular style standard ensures that most people who want to contribute code to
Thorium are already familiar with the style standard, and that all Thorium
modules are styled the same. Being  tools for Nuke, it would make sense to use
Nuke's style standard- if Nuke had one. While many of Nuke's functions are
somewhat consistent, that's not always true. In the end, it's easier to use
and point to PEP-8.

### Testing

Each Thorium module also gains a test suite, filled with both unit tests and
integration tests. Integration tests require a valid Nuke 8 install and license,
as those actually call the Nuke API. Testing is vital to writing and upgrading
code, and often uncovers bugs and regressions that otherwise would have made it
out to the user in the final product.

### Git

Nukepedia is an excellent distribution repository, but it's not a version 
control system, and it's not collaborative. When converting a module as
described above, all previous releases are added as commits on a `master` git
branch, and uploaded to 
[Thorium's GitHub Page](https://github.com/ThoriumGroup) for collaboration.
Thorium Group is an GitHub organization, which let's multiple GitHub users
work on repositories all belonging to the master organization. Even before 
you're in the Thorium Group, it's easy to fork a repo to your user account,
make changes and submit a pull request back to Thorium. The more people working
on Thorium, the larger and stronger Thorium gets.