# Kellegram's Firefox setup
These are my files and guides related to how I setup firefox  
  
My user.js is made using [Arkenfox's user.js](https://github.com/arkenfox/user.js).  
Please read their [wiki](https://github.com/arkenfox/user.js/wiki) for a lot of useful information.  
My setup is designed with usability in mind, most ways of breaking sites were removed/modified. For privacy/less fingerprinting use [Tor](https://www.torproject.org/) or wait for my second user.js with more hardening.

## Adapting to your use
Change this to 0 if video sites like vimeo, etc. break for you. 0 is default.

    user_pref("network.http.referer.XOriginPolicy", 1);


Changelog:

24/03/2021
- Removed deprecated lines (need manual reset, check diffs)
