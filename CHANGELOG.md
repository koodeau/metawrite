<p align="center">
<img alt="Metawrite" src="static/logo.svg" />
</p>

> Versions `x.x.n` neans some minor changes to package documentation or typings.
> Versions `x.n.x` might include some minor breaking changes.
> Versions `n.x.x` might include some major breaking changes.

### Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [v0.8.1](https://github.com/koodeau/metawrite/compare/v0.8.0...v0.8.1)

- removed Delete from docs and examples [`fa11151`](https://github.com/koodeau/metawrite/commit/fa11151326916d4a4a57fb33998d4bee8ca5f7d1)

#### [v0.8.0](https://github.com/koodeau/metawrite/compare/v0.7.3...v0.8.0)

> 12 June 2022

- updated for sdk v8 [`257aaea`](https://github.com/koodeau/metawrite/commit/257aaea1a2ae238c0c53c0fa7a816d8f2a30ee4b)
- BREAKING CHANGE Removed delete endpoint from the Accounts API [`5307c50`](https://github.com/koodeau/metawrite/commit/5307c503e29f61bc9266199c38f665d0c34e521b)

#### [v0.7.3](https://github.com/koodeau/metawrite/compare/v0.7.2...v0.7.3)

> 21 April 2022

- Fix: type defs and documentation fixed for Document component [`4e8640f`](https://github.com/koodeau/metawrite/commit/4e8640f5e1607a4905b01f02a798b088ba5558d1)

#### [v0.7.2](https://github.com/koodeau/metawrite/compare/v0.7.1...v0.7.2)

> 21 April 2022

- Fix: Document component bug regarding receiving document as argument instead of returning as directive [`284de6f`](https://github.com/koodeau/metawrite/commit/284de6f716c4399b09b09914eea61662d3d4f557)

#### [v0.7.1](https://github.com/koodeau/metawrite/compare/v0.7.0...v0.7.1)

> 31 March 2022

- Fix: updated permission variables to a never object version [`bda881c`](https://github.com/koodeau/metawrite/commit/bda881c53669f526d16db583a611596679a6961f)

#### [v0.7.0](https://github.com/koodeau/metawrite/compare/v0.6.3...v0.7.0)

> 30 March 2022

- Breaking Change: changed File component behaviour and fixes [`0ae47b1`](https://github.com/koodeau/metawrite/commit/0ae47b1bb6aa7d6049a013fc5c990b07dc6ead92)
- Fixed replaced userId with sessionId parameter on MagicURL [`ad0714b`](https://github.com/koodeau/metawrite/commit/ad0714bf642581f8209a4125ab97643ecda4476b)

#### [v0.6.3](https://github.com/koodeau/metawrite/compare/v0.6.2...v0.6.3)

> 9 March 2022

- Fixed: Collection and File components API errors resolved and improved typings. Improved svelte stores [`a388bc5`](https://github.com/koodeau/metawrite/commit/a388bc5431dc7d2004207a7f7d197ba49f47e74b)

#### [v0.6.2](https://github.com/koodeau/metawrite/compare/v0.6.1...v0.6.2)

> 9 March 2022

- Fixed: tsconfig caused error bulding package [`f7f68d3`](https://github.com/koodeau/metawrite/commit/f7f68d381826af7214e227177145c192e5d062b9)

#### [v0.6.1](https://github.com/koodeau/metawrite/compare/v0.6.0...v0.6.1)

> 9 March 2022

- Fixed: removed unnecessary props from required in Collection component [`2e20214`](https://github.com/koodeau/metawrite/commit/2e2021459ab20ca7f2dcc89cdb3a2ac5c5461723)
- Fixed: typings for Document component [`6c4a2bf`](https://github.com/koodeau/metawrite/commit/6c4a2bf6a32ca57ef38eefd063723eeca7339d37)

#### [v0.6.0](https://github.com/koodeau/metawrite/compare/v0.5.3...v0.6.0)

> 9 March 2022

- added support of sdk v7 and server v0.13 Breaking Change [`5b52049`](https://github.com/koodeau/metawrite/commit/5b52049fd6a8da141f846a84f208316eb8a62120)

#### [v0.5.3](https://github.com/koodeau/metawrite/compare/v0.5.2...v0.5.3)

> 28 February 2022

- WIP: Collection component fix [`f72b887`](https://github.com/koodeau/metawrite/commit/f72b887b4b5ac339491e38d0207e38d4235f6143)

#### [v0.5.2](https://github.com/koodeau/metawrite/compare/v0.5.1...v0.5.2)

> 28 February 2022

- add orderTypes prop to Collection component [`b9b73fc`](https://github.com/koodeau/metawrite/commit/b9b73fcff18952674bb5e6fc45e619a105bc04d3)

#### [v0.5.1](https://github.com/koodeau/metawrite/compare/v0.5.0...v0.5.1)

> 23 February 2022

- Fix: document query array [`8f054f2`](https://github.com/koodeau/metawrite/commit/8f054f2ea9958a73f641c142d62437eeba064422)

#### [v0.5.0](https://github.com/koodeau/metawrite/compare/v0.4.1...v0.5.0)

> 23 February 2022

- Breaking Change: fixed Collection query settings. Requres additional code changes if you used optional props [`52eb28c`](https://github.com/koodeau/metawrite/commit/52eb28c1593a76d93760204e2271921e2124beab)

#### [v0.4.1](https://github.com/koodeau/metawrite/compare/v0.4.0...v0.4.1)

> 22 February 2022

- Fix: fixed Realtime props [`24443a1`](https://github.com/koodeau/metawrite/commit/24443a11970474d33ae66abe4e8c800f6ce3017a)
- Fix: added payload directive in Realtime [`5369439`](https://github.com/koodeau/metawrite/commit/536943909db3970c0b70513c9342010f1822014e)

#### [v0.4.0](https://github.com/koodeau/metawrite/compare/v0.3.4...v0.4.0)

> 22 February 2022

- New: Realtime component with new actions. See docs [`812fa1a`](https://github.com/koodeau/metawrite/commit/812fa1aab7e06919333e07b30a2ede9e2d60662c)
- New: added custom Realtime endpoint option for Appwrite init [`b43447c`](https://github.com/koodeau/metawrite/commit/b43447c46b2450e4bfc311aad99957d5c565dfe7)

#### [v0.3.4](https://github.com/koodeau/metawrite/compare/v0.3.3...v0.3.4)

> 22 February 2022

- Fix: added default export for File component [`8180ae9`](https://github.com/koodeau/metawrite/commit/8180ae94684ac7a7d395659529a075dc6172d05c)

#### [v0.3.3](https://github.com/koodeau/metawrite/compare/v0.3.2...v0.3.3)

> 18 February 2022

#### [v0.3.2](https://github.com/koodeau/metawrite/compare/v0.3.1...v0.3.2)

> 18 February 2022

- Update README.md [`ff039ac`](https://github.com/koodeau/metawrite/commit/ff039acc860fe12f428df19b88caf7309737806b)

#### [v0.3.1](https://github.com/koodeau/metawrite/compare/v0.3.0...v0.3.1)

> 18 February 2022

- Create LICENSE [`#2`](https://github.com/koodeau/metawrite/pull/2)
- add LICENSE [`3b8c9ad`](https://github.com/koodeau/metawrite/commit/3b8c9adba525333115dd7127036ae98317ab4a3e)

#### [v0.3.0](https://github.com/koodeau/metawrite/compare/v0.2.6...v0.3.0)

> 17 February 2022

- Fix: added js entrypoint instead of svelte [`58cd1f7`](https://github.com/koodeau/metawrite/commit/58cd1f70f9f1ca40e0d90b8e115adf88523a83d4)

#### [v0.2.6](https://github.com/koodeau/metawrite/compare/v0.2.5...v0.2.6)

> 16 February 2022

- Update: removed unused dependencies [`593ac5f`](https://github.com/koodeau/metawrite/commit/593ac5f3f9571fdb83ee0cf73ea687c438c13539)

#### [v0.2.5](https://github.com/koodeau/metawrite/compare/v0.2.4...v0.2.5)

> 16 February 2022

- Fix: added devDependency cross-fetch ro resolve fetch import [`844558b`](https://github.com/koodeau/metawrite/commit/844558b80f7e7f8b9c8e05a9d34861a5b6da23b9)

#### [v0.2.4](https://github.com/koodeau/metawrite/compare/v0.2.3...v0.2.4)

> 16 February 2022

- Fix: changed index.d.ts exports and tsconfig that affected components documentation [`a11c74e`](https://github.com/koodeau/metawrite/commit/a11c74e4cfa9c1dfbf83b8dae83004f4d35a8714)

#### [v0.2.3](https://github.com/koodeau/metawrite/compare/v0.2.2...v0.2.3)

> 16 February 2022

- Fix: resolved bug with order of Collection create attributes [`cd34465`](https://github.com/koodeau/metawrite/commit/cd3446572cd994933b11c5df016d9d1c954d5a3b)

#### [v0.2.2](https://github.com/koodeau/metawrite/compare/v0.2.1...v0.2.2)

> 16 February 2022

- fixed typo in component that caused errors [`42a15f7`](https://github.com/koodeau/metawrite/commit/42a15f7907bc130e32df610d30d0f6ae4ae67ca5)

#### [v0.2.1](https://github.com/koodeau/metawrite/compare/v0.2.0...v0.2.1)

> 16 February 2022

- Fix: added unique user id to MagicURL and fixed documents creation in Collection component [`7a2b5e5`](https://github.com/koodeau/metawrite/commit/7a2b5e543dc59da121ff654f370fdad87442ae00)
- added missing info to changelog [`2e32805`](https://github.com/koodeau/metawrite/commit/2e3280568b8fae0a499d648e1e6901b9b07f3aaa)

#### [v0.2.0](https://github.com/koodeau/metawrite/compare/v0.1.14...v0.2.0)

> 15 February 2022

- Breaking Change: Modified MagicURL component to be able to create, automatically validate and store user session. Read updated documentation [`2d3c0e1`](https://github.com/koodeau/metawrite/commit/2d3c0e1da732ce3bc2b682620bc89ab4c00655e9)

#### [v0.1.14](https://github.com/koodeau/metawrite/compare/v0.1.13...v0.1.14)

> 15 February 2022

- Fix: wrapped entrypoint into module context [`93edd78`](https://github.com/koodeau/metawrite/commit/93edd786007d9a2f814f5fef0535846705144161)

#### [v0.1.13](https://github.com/koodeau/metawrite/compare/v0.1.12...v0.1.13)

> 15 February 2022

- Fix: resolved unused exports from package.json [`c65ac59`](https://github.com/koodeau/metawrite/commit/c65ac5955b646bf1fd2a8699440c383017bc8fe2)

#### [v0.1.12](https://github.com/koodeau/metawrite/compare/v0.1.11...v0.1.12)

> 14 February 2022

#### [v0.1.11](https://github.com/koodeau/metawrite/compare/v0.1.10...v0.1.11)

> 14 February 2022

- experimental changes [`b720826`](https://github.com/koodeau/metawrite/commit/b720826b9f24898fb9f567b952dcaf76be452331)

#### [v0.1.10](https://github.com/koodeau/metawrite/compare/v0.1.9...v0.1.10)

> 14 February 2022

- Fix: added types to components and resolved warnings [`4840c54`](https://github.com/koodeau/metawrite/commit/4840c543039e888a3198d042c0370211205471f2)

#### [v0.1.9](https://github.com/koodeau/metawrite/compare/v0.1.8...v0.1.9)

> 14 February 2022

- experimentsl fixes for Appwrite [`207e179`](https://github.com/koodeau/metawrite/commit/207e179f98d3374ced550198936711a37222f5ed)

#### [v0.1.8](https://github.com/koodeau/metawrite/compare/v0.1.7...v0.1.8)

> 14 February 2022

- Fix: revert d.ts and improved package.json [`0d4d0b2`](https://github.com/koodeau/metawrite/commit/0d4d0b28b23df28f13eaca8efb8252288d609c25)
- improved workflow [`b68f194`](https://github.com/koodeau/metawrite/commit/b68f194f92001fb5460e459db3d0adb7bbabe67c)

#### [v0.1.7](https://github.com/koodeau/metawrite/compare/v0.1.6...v0.1.7)

> 14 February 2022

- Fix: removed conflicting SDK export [`cc74e1d`](https://github.com/koodeau/metawrite/commit/cc74e1d78ac2214c34482170c1b6b0840935a304)

#### [v0.1.6](https://github.com/koodeau/metawrite/compare/v0.1.5...v0.1.6)

> 14 February 2022

- Fix: corrected type definitions [`a219b4f`](https://github.com/koodeau/metawrite/commit/a219b4fbe9430e672cd73482af984d337a0878de)

#### [v0.1.5](https://github.com/koodeau/metawrite/compare/v0.1.4...v0.1.5)

> 14 February 2022

#### [v0.1.4](https://github.com/koodeau/metawrite/compare/v0.1.3...v0.1.4)

> 14 February 2022

- experimental version [`b87af5c`](https://github.com/koodeau/metawrite/commit/b87af5c7199de46d39b194374f20f90ec508f1ff)

#### [v0.1.3](https://github.com/koodeau/metawrite/compare/v0.1.2...v0.1.3)

> 14 February 2022

- used prettier and fixed npm publish dir [`2076ad3`](https://github.com/koodeau/metawrite/commit/2076ad30009506ce88cd2c81248a78b485fe6af2)

#### [v0.1.2](https://github.com/koodeau/metawrite/compare/v0.1.1...v0.1.2)

> 14 February 2022

- Fix: added file extension for sdk export [`362c88c`](https://github.com/koodeau/metawrite/commit/362c88c180a060bf6fcfb8aa39f450459c31860e)

#### [v0.1.1](https://github.com/koodeau/metawrite/compare/v0.1.0...v0.1.1)

> 14 February 2022

- deleted unused workflow [`e5de6ee`](https://github.com/koodeau/metawrite/commit/e5de6ee77fb94e5bef47694b5b25a1d75ebe4488)
- Fixed: package svelte entrypoint [`54466a1`](https://github.com/koodeau/metawrite/commit/54466a12aa7d4454b502b58a8d759012c2041944)

#### [v0.1.0](https://github.com/koodeau/metawrite/compare/v0.0.4...v0.1.0)

> 14 February 2022

- Release v0.1.0 [`9439a1c`](https://github.com/koodeau/metawrite/commit/9439a1c675f9a0be115dc6af0bd5bcd141064d81)
- Fixed: RecoverPassword component documentation [`6771781`](https://github.com/koodeau/metawrite/commit/67717819582ec3a8903d52debfd717ee86c91bf4)
- Breaking Change: fixed package entry exports. Bug Fix [`2dc563f`](https://github.com/koodeau/metawrite/commit/2dc563fe01bfa947aca3e5cfcd6c5a537570f3c0)

#### [v0.0.4](https://github.com/koodeau/metawrite/compare/v0.0.3...v0.0.4)

> 13 February 2022

- modified workflows [`4fd7dc7`](https://github.com/koodeau/metawrite/commit/4fd7dc7149b9b57a55d89410b5b1f66cb9ba160c)

#### [v0.0.3](https://github.com/koodeau/metawrite/compare/v0.0.2...v0.0.3)

> 13 February 2022

- added templates and workflows [`636797a`](https://github.com/koodeau/metawrite/commit/636797a9c25f9f4ad8658652030f87ef7da69f63)

#### [v0.0.2](https://github.com/koodeau/metawrite/compare/v0.0.1...v0.0.2)

> 13 February 2022

- added badges [`0da0ee4`](https://github.com/koodeau/metawrite/commit/0da0ee47f088252318e5d3bea95e26d2fc5e8f73)
- fixes for readme [`7d71a9a`](https://github.com/koodeau/metawrite/commit/7d71a9a06898e0f5730879cead149ff61edcad81)
- fixes for readme [`7508252`](https://github.com/koodeau/metawrite/commit/75082528db8f1914e53b29cecc3f7f527eeb1381)

#### [v0.0.1](https://github.com/koodeau/metawrite/compare/v0.0.0...v0.0.1)

> 13 February 2022

- corrected tests [`8f4bf3a`](https://github.com/koodeau/metawrite/commit/8f4bf3a92e39910d6c01c09d988a7b01e65135d7)

#### v0.0.0

> 13 February 2022

- fixed node engine and added package-lock for ci [`2ce3506`](https://github.com/koodeau/metawrite/commit/2ce350690efded7e28920c623d048b31953c2c90)
- init [`5da4fdb`](https://github.com/koodeau/metawrite/commit/5da4fdb204c4f425d0e234529398efe0c8565698)
- documented all components [`a6f8874`](https://github.com/koodeau/metawrite/commit/a6f8874804697267bc2c57284f699299824fbb48)
