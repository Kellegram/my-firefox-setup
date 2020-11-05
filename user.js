//Enable OpenGL compositor
user_pref("layers.acceleration.force-enabled", true);
//Enable WebRender compositor
user_pref("gfx.webrender.all", true);
//Disable disk cache, not worth it
user_pref("browser.cache.disk.enable", false);
//Ensure memory cache is enabled
user_pref("browser.cache.memory.enable", true);
//Define memory cache capacity(This number is based on 41297 - (41606 / (1 + ((RAM / 1.16) ^ 0.75))) where RAM is in gigabytes and result is in KB)
user_pref("browser.cache.memory.capacity", 36196);
//reduce disk writes by increasing auto save interval for restoring a crashed session(ms)
user_pref("browser.sessionstore.interval", 300000);
//Disable Pocket
user_pref("extensions.pocket.enabled", false);
//Ensure other Pocket stuff is disabled just to be sure
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
//Force system font DPI
user_pref("layout.css.dpi", 0);
//Make firefox urlbar consistent with Windows behaviour
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
user_pref("layout.word_select.stop_at_punctuation", true);
//Make scrolling snappier
user_pref("general.smoothScroll.lines.durationMaxMS", 100);
user_pref("general.smoothScroll.lines.durationMinMS", 100);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.other.durationMaxMS", 100);
user_pref("general.smoothScroll.other.durationMinMS", 100);
user_pref("general.smoothScroll.pages.durationMaxMS", 100);
user_pref("general.smoothScroll.pages.durationMinMS", 100);
user_pref("mousewheel.min_line_scroll_amount", 30);
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", true);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);
//Force enable hardware decoding
user_pref("media.hardware-video-decoding.force-enabled", true);
//"Remove" the annoying fullscreen notice
user_pref("full-screen-api.warning.timeout", 0);
//Add magnet protocol association
user_pref("network.protocol-handler.expose.magnet", false);


//Privacy tweaks go here


//Enable tracking protection
user_pref("privacy.trackingprotection.enabled", true);
//Set common user agent and platform, this one is used by Tor, hence quite common for the purpose
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:52.0) Gecko/20100101 Firefox/52.0 ");
user_pref("general.platform.override", "Win32");
//Prevent WebRTC leak
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.enabled", false); //disables webrtc completely
//Disable HTTP referer
user_pref("network.http.sendRefererHeader", 0);
//Disable Captive portal testing
user_pref("network.captive-portal-service.enabled", false);
//Prevent tracking clicks
user_pref("browser.send_pings", false)
//Disable tracking clipboard events
user_pref("dom.event.clipboardevents.enabled", false)
//Disable telemetry
user_pref("toolkit.telemetry.enabled", false);
//Disable geolocation
user_pref("geo.enabled", false);
//Disable tracking of microphone and camera status
user_pref("media.navigator.enabled", false)
//Enable TRR when possible, fallback to classic when failed
user_pref("network.trr.mode", 2);
//Disable webgl
user_pref("webgl.disabled", true);
//Disable WebAssembly
user_pref("javascript.options.wasm", false);
user_pref("javascript.options.wasm_baselinejit", false);
user_pref("javascript.options.wasm_ionjit", false);
//Disable prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);
//Render IDNs as punycode to help avoid phishing attacks
user_pref("network.IDN_show_punycode", true);
