(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{262:function(t,a,s){"use strict";s.r(a);var e=s(28),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"migration-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migration-guide"}},[t._v("#")]),t._v(" Migration guide")]),t._v(" "),s("p",[t._v("Follow this guide to upgrade from one major version to the other.")]),t._v(" "),s("h2",{attrs:{id:"upgrading-from-5-x-to-6-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-from-5-x-to-6-x"}},[t._v("#")]),t._v(" Upgrading from 5.x to 6.x")]),t._v(" "),s("h3",{attrs:{id:"global-seo-features-are-now-disabled-by-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-seo-features-are-now-disabled-by-default"}},[t._v("#")]),t._v(" Global SEO features are now disabled by default")]),t._v(" "),s("p",[t._v("In some cases, having SEO enabled globally caused performance issues and/or conflicted with other plugins. To mitigate these issues, SEO features are now disabled by default.")]),t._v(" "),s("p",[t._v("If you were affected by one of the issues above, we recommend that you read the "),s("a",{attrs:{href:"https://nuxt-community.github.io/nuxt-i18n/seo.html#improving-performance",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improve performances"),s("OutboundLink")],1),t._v(" section to enable SEO only where you need it.")]),t._v(" "),s("p",[t._v("If you'd like to restore the old behaviour, you can reenable SEO features globally by setting the "),s("code",[t._v("seo")]),t._v(" option to "),s("code",[t._v("true")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  seo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"preservestate-can-t-be-set-anymore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preservestate-can-t-be-set-anymore"}},[t._v("#")]),t._v(" preserveState can't be set anymore")]),t._v(" "),s("p",[t._v("It was previously possible to manually set "),s("code",[t._v("preserveState")]),t._v(" on "),s("strong",[t._v("nuxt-i18n")]),t._v("'s store module, which would actually result in unexpected behaviours when using server-side rendering. This option has been removed altogether and the module's "),s("code",[t._v("preserveState")]),t._v(" option is now "),s("a",{attrs:{href:"https://github.com/nuxt-community/nuxt-i18n/blob/05e9d1f80715cc23a545adf4303e49af3ee40ac3/src/plugins/main.js#L77",target:"_blank",rel:"noopener noreferrer"}},[t._v("set automatically"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("If you were using the "),s("code",[t._v("preserveState")]),t._v(" configuration option before, it can be safely removed:")]),t._v(" "),s("div",{staticClass:"language-patch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" {\n   vuex: {\n-    preserveState: true,\n     // other configuration options\n   }\n }\n")])])]),s("h3",{attrs:{id:"store-module-options-have-been-flattened-and-renamed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store-module-options-have-been-flattened-and-renamed"}},[t._v("#")]),t._v(" Store module options have been flattened and renamed")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("vuex")]),t._v(" configuration option used to expose a "),s("code",[t._v("mutations")]),t._v(" property where each mutation could be disabled or renamed. For the sake of simplicity, it isn't possible to rename these mutations anymore, the "),s("code",[t._v("mutations")]),t._v(" property has been dropped to flatten the configuration and each option has been renamed to better reflect what it does.")]),t._v(" "),s("div",{staticClass:"language-patch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" {\n   vuex: {\n-    mutations: {\n-      setLocale: 'SET_LOCALE_MUTATION',\n-      setMessages: 'SET_MESSAGE_MUTATION',\n-      setRouteParams: 'SET_ROUTE_PARAMS_MUTATION'\n-    }\n+    syncLocale: true,\n+    syncMessages: true,\n+    syncRouteParams: true\n   },\n }\n")])])]),s("h2",{attrs:{id:"upgrading-from-4-x-to-5-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-from-4-x-to-5-x"}},[t._v("#")]),t._v(" Upgrading from 4.x to 5.x")]),t._v(" "),s("p",[t._v("Please refer to "),s("a",{attrs:{href:"https://github.com/kazupon/vue-i18n/blob/dev/CHANGELOG.md#800-2018-06-23",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("vue-i18n")]),t._v("'s changelog"),s("OutboundLink")],1),t._v(" for more information on breaking changes in "),s("strong",[t._v("nuxt-i18n 5.x")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"upgrading-from-3-x-to-4-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-from-3-x-to-4-x"}},[t._v("#")]),t._v(" Upgrading from 3.x to 4.x")]),t._v(" "),s("h3",{attrs:{id:"in-component-options-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-component-options-key"}},[t._v("#")]),t._v(" In-component options key")]),t._v(" "),s("p",[t._v("v4.x introduces a single change that requires you to rename the "),s("code",[t._v("i18n")]),t._v(" key to "),s("code",[t._v("nuxtI18n")]),t._v(" in your pages that use in-component configuration, this should prevent conflicts with vue-i18n.")]),t._v(" "),s("p",[s("strong",[t._v("3.x:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pages/about.vue")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  i18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    paths"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a-propos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      en"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about-us'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("4.x:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pages/about.vue")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  nuxtI18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    paths"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a-propos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      en"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about-us'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"upgrading-from-2-x-to-3-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-from-2-x-to-3-x"}},[t._v("#")]),t._v(" Upgrading from 2.x to 3.x")]),t._v(" "),s("h3",{attrs:{id:"custom-routes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-routes"}},[t._v("#")]),t._v(" Custom routes")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("routes")]),t._v(" option has been dropped in favor of in-component configuration, any custom path configuration should be placed in their corresponding page file.")]),t._v(" "),s("p",[s("strong",[t._v("2.x:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      routes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        about"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          fr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a-propos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          en"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about-us'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("3.x:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pages/about.vue")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  i18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    paths"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a-propos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      en"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about-us'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"ignored-paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignored-paths"}},[t._v("#")]),t._v(" Ignored paths")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("ignorePaths")]),t._v(" option has been dropped as well, its behaviour can be reproduces by setting "),s("code",[t._v("i18n")]),t._v(" to "),s("code",[t._v("false")]),t._v(" right in your pages.")]),t._v(" "),s("p",[s("strong",[t._v("2.x:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ignorePaths"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/fr/notlocalized'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("3.x:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pages/fr/notlocalized.vue")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  i18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"noprefixdefaultlocale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noprefixdefaultlocale"}},[t._v("#")]),t._v(" noPrefixDefaultLocale")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("noPrefixDefaultLocale")]),t._v(" has been dropped in favor of "),s("code",[t._v("strategy")]),t._v(" option.")]),t._v(" "),s("p",[s("strong",[t._v("2.x:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      noPrefixDefaultLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("3.x:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefix'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"loadlanguagesasync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loadlanguagesasync"}},[t._v("#")]),t._v(" loadLanguagesAsync")]),t._v(" "),s("p",[s("code",[t._v("loadLanguagesAsync")]),t._v(" option has been renamed to "),s("code",[t._v("lazy")]),t._v(". "),s("code",[t._v("langFile")]),t._v(" option in "),s("code",[t._v("locales")]),t._v(" has been renamed to "),s("code",[t._v("file")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"redirectcookiekey-useredirectcookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirectcookiekey-useredirectcookie"}},[t._v("#")]),t._v(" redirectCookieKey & useRedirectCookie")]),t._v(" "),s("p",[s("code",[t._v("redirectCookieKey")]),t._v(" and "),s("code",[t._v("useRedirectCookie")]),t._v(" have been merged into "),s("code",[t._v("detectBrowserLanguage")]),t._v(" option and renamed to "),s("code",[t._v("cookieKey")]),t._v(" and "),s("code",[t._v("useCookie")]),t._v(" respectively.")]),t._v(" "),s("p",[s("strong",[t._v("2.x:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      detectBrowserLanguage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      redirectCookieKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redirected'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      useRedirectCookie"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("3.x:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      detectBrowserLanguage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cookieKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redirected'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        useCookie"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);