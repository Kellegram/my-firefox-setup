# Kellegram's Firefox setup
These are my files and guides related to how I setup firefox

## Adapting to your machine

There is a portion in my user.js that you need to change depending on your RAM.


    //Define memory cache capacity(This number is based on 41297 - (41606 / (1 + ((RAM / 1.16) ^ 0.75))) where RAM is in gigabytes and result is in KB)
    user_pref("browser.cache.memory.capacity", 36196);
 
Based on this, if you have 8 gigs of RAM, you would do: 41297 - (41606 / (1 + ((8 / 1.16) ^ 0.75))) = 33380.6866972  
This is taken from ![ArchWiki](https://wiki.archlinux.org/index.php/Firefox/Tweaks#Turn_off_the_disk_cache).
