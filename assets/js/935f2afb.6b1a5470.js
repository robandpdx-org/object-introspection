"use strict";(self.webpackChunkoi_web=self.webpackChunkoi_web||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mysidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Getting Started","href":"/docs/getting-started","docId":"getting-started"},{"type":"category","label":"A Brief Practical Introduction","items":[{"type":"link","label":"A Simple Address Book Example","href":"/docs/addrbook-intro","docId":"addrbook-intro"},{"type":"link","label":"this pointers","href":"/docs/addrbook-this","docId":"addrbook-this"},{"type":"link","label":"Function Arguments","href":"/docs/addrbook-funcargs","docId":"addrbook-funcargs"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Limitations and Constraints","href":"/docs/constraints","docId":"constraints"},{"type":"link","label":"Contributing","href":"/docs/contributing","docId":"contributing"}]},"docs":{"addrbook-funcargs":{"id":"addrbook-funcargs","title":"Function Arguments","description":"We\'ll now look at a simple example of introspecting objects upon entry to a function. Adding a contact to the address book takes 3 string objects passed by reference:","sidebar":"mysidebar"},"addrbook-intro":{"id":"addrbook-intro","title":"A Simple Address Book Example","description":"Let\'s start with a very simple C++ application: an address book. This contrived simple piece of code contains everything we need to take you through the basics of using OI. The code itself can be found in the examples/web/AddrBook directory in the OI GitHub repo.","sidebar":"mysidebar"},"addrbook-this":{"id":"addrbook-this","title":"this pointers","description":"We specify exactly which function and arguments are to be introspected through a probe specification (terminology borrowed from DTrace). It\'s simply a colon delimited tuple that specifies exactly what object we are interested in and where in the code we want to observe it. For example, to introspect the AddressBook object we can measure it at the entry to its DumpContacts() method and the specification would be:","sidebar":"mysidebar"},"constraints":{"id":"constraints","title":"Limitations and Constraints","description":"OI has been initially designed for use within Meta and therefore some of its current implementation may present challenges for you in your environment. We\'d love to hear from you about what you need supporting and how any limitations effect you so please feel free to create issues on GitHub or tell us directly on Matrix or IRC.","sidebar":"mysidebar"},"contributing":{"id":"contributing","title":"Contributing","description":"We welcome contributions from the community! If you\'re looking for an idea then feel free to pick one of the open issues on GitHub. Feel free to drop by the object-introspection chat rooms (Matrix/IRC).","sidebar":"mysidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Dependencies","sidebar":"mysidebar"},"intro":{"id":"intro","title":"Introduction","description":"Object Introspection (shortened to OI and pronounced as in boy) is a memory profiling technology for C++ objects. It provides the ability to dynamically instrument applications to capture the precise memory occupancy of entire object hierarchies including all containers and dynamic allocations. All this with no code modification or recompilation!","sidebar":"mysidebar"}}}')}}]);