# Kellegram's Firefox setup
These are my files and guides related to how I setup firefox  
  
My user.js is made using [Arkenfox's user.js](https://github.com/arkenfox/user.js).  
Please read their [wiki](https://github.com/arkenfox/user.js/wiki) for a lot of useful information.  
My setup is designed with usability in mind, most ways of breaking sites were removed/modified. For privacy/less fingerprinting use [Tor](https://www.torproject.org/) or wait for my second user.js with more hardening.

## Adapting to your use
Change this to 0 if video sites like vimeo, etc. break for you. 0 is default.

    user_pref("network.http.referer.XOriginPolicy", 1);


## Changelog:

**IMPORTANT: Always reset anything that gets deprecated/removed, as removing something from user.js does not affect its state. User.js is an override file!**

**22.07.2021**
- Made changes as indicated in [arkenfox changelog](https://github.com/arkenfox/user.js/issues/1217)

**22.06.2021**
- Removed as indicated in [arkenfox changelog](https://github.com/arkenfox/user.js/issues/1191)


**21.05.2021**
- Make devtools dark mode

**14/04/2021
- Disable the edit menu for adding bookmarks

**12/04/2021**
- Fixed a typo that prevented the PiP rule from applying
- Added a rule that ensures expected behaviour of context menu when using certain window managers.

**06/04/2021**
- Reset autoplay policy back to default (Need manual reset, check diff)

**24/03/2021**
- Removed deprecated lines (need manual reset, check diffs)
