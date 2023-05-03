(function () {
  "use strict";
  var e = {
      518: function (e, a, n) {
        var i = n(242),
          t = n(749),
          r = n(396);
        function o(e, a, n, i, t, o) {
          const s = (0, r.up)("Header"),
            l = (0, r.up)("Hero"),
            c = (0, r.up)("About"),
            d = (0, r.up)("Experience"),
            u = (0, r.up)("Education"),
            m = (0, r.up)("Skills"),
            p = (0, r.up)("Footer"),
            f = (0, r.up)("MobileNav"),
            g = (0, r.up)("ScrollTop");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r.Wm)(s),
                (0, r._)("main", null, [
                  (0, r.Wm)(l),
                  (0, r.Wm)(c),
                  (0, r.Wm)(d),
                  (0, r.Wm)(u),
                  (0, r.Wm)(m),
                ]),
                (0, r.Wm)(p),
                (0, r.Wm)(f),
                (0, r.Wm)(g),
              ],
              64
            )
          );
        }
        var s = n(139);
        const l = { class: "invisible", ref: "description" };
        function c(e, a, n, i, t, o) {
          const c = (0, r.up)("Heading2"),
            d = (0, r.up)("Photo"),
            u = (0, r.up)("ContactList"),
            m = (0, r.up)("NarrowContainer"),
            p = (0, r.up)("Paragraph"),
            f = (0, r.up)("Container"),
            g = (0, r.up)("Section");
          return (
            (0, r.wg)(),
            (0, r.j4)(
              g,
              { id: "about", border: !0 },
              {
                default: (0, r.w5)(() => [
                  (0, r.Wm)(f, null, {
                    default: (0, r.w5)(() => [
                      (0, r.Wm)(
                        c,
                        { class: "mb-12" },
                        {
                          default: (0, r.w5)(() => [
                            (0, r.Uk)((0, s.zw)(e.$t("about.header")), 1),
                          ]),
                          _: 1,
                        }
                      ),
                      (0, r.Wm)(
                        m,
                        { class: "md:flex md:items-center mb-12" },
                        {
                          default: (0, r.w5)(() => [
                            (0, r.Wm)(d, {
                              class: "md:w-1/2 md:pr-6 mb-12 md:mb-0",
                            }),
                            (0, r.Wm)(
                              u,
                              {
                                class: "md:w-1/2 md:pl-6",
                                entities: e.entities,
                              },
                              null,
                              8,
                              ["entities"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      (0, r.Wm)(m, null, {
                        default: (0, r.w5)(() => [
                          (0, r._)(
                            "div",
                            l,
                            [
                              (0, r.Wm)(p, null, {
                                default: (0, r.w5)(() => [
                                  (0, r.Uk)(
                                    (0, s.zw)(e.$t("about.description")),
                                    1
                                  ),
                                ]),
                                _: 1,
                              }),
                            ],
                            512
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }
            )
          );
        }
        var d = n(870);
        const u = { class: "px-6 max-w-5xl mx-auto" };
        function m(e, a, n, i, t, o) {
          return (
            (0, r.wg)(), (0, r.iD)("div", u, [(0, r.WI)(e.$slots, "default")])
          );
        }
        var p = (0, r.aZ)({ name: "Container" }),
          f = n(89);
        const g = (0, f.Z)(p, [["render", m]]);
        var b = g;
        const w = { class: "text-4xl font-bold text-center font-chakra" };
        function k(e, a, n, i, t, o) {
          return (
            (0, r.wg)(), (0, r.iD)("h1", w, [(0, r.WI)(e.$slots, "default")])
          );
        }
        var h = (0, r.aZ)({ name: "Heading1" });
        const y = (0, f.Z)(h, [["render", k]]);
        var v = y;
        const x = {
          class:
            "text-4xl font-bold font-chakra text-secondary flex flex-col justify-center items-center invisible",
          ref: "heading",
        };
        function z(e, a, n, i, t, o) {
          const s = (0, r.up)("FontAwesomeIcon");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              "h2",
              x,
              [
                e.icon
                  ? ((0, r.wg)(),
                    (0, r.j4)(
                      s,
                      { key: 0, icon: e.icon, class: "mb-4" },
                      null,
                      8,
                      ["icon"]
                    ))
                  : (0, r.kq)("", !0),
                (0, r.WI)(e.$slots, "default"),
              ],
              512
            )
          );
        }
        const j = (e, a) => {
          const n = () => {
              if (Array.isArray(e.value))
                for (let a = 0; a < e.value.length; a++) i(e.value[a]);
              else i(e.value);
            },
            i = (e) => {
              e &&
                !e.classList.contains(a) &&
                e.getBoundingClientRect().top + 120 < window.innerHeight &&
                e.classList.add(a);
            };
          (0, r.bv)(() => {
            n(), window.addEventListener("scroll", n);
          }),
            (0, r.Ah)(() => {
              window.removeEventListener("scroll", n);
            });
        };
        var S = (0, r.aZ)({
          name: "Heading2",
          props: { icon: String },
          setup() {
            const e = (0, d.iH)([]);
            return j(e, "animate-scroll-fade"), { heading: e };
          },
        });
        const _ = (0, f.Z)(S, [["render", z]]);
        var W = _;
        function D(e, a, n, i, t, o) {
          return (
            (0, r.wg)(),
            (0, r.iD)(
              "h3",
              {
                class: (0, s.C_)([
                  "text-2xl text-tertiary font-semibold",
                  { invisible: e.animation },
                ]),
                ref: "heading",
              },
              [(0, r.WI)(e.$slots, "default")],
              2
            )
          );
        }
        var H = (0, r.aZ)({
          name: "Heading3",
          props: { animation: { type: Boolean, default: !1 } },
          setup(e) {
            const a = (0, d.iH)([]);
            return e.animation && j(a, "animate-scroll-fade"), { heading: a };
          },
        });
        const Z = (0, f.Z)(H, [["render", D]]);
        var C = Z;
        const I = { class: "text-lg text-secondary font-medium" };
        function A(e, a, n, i, t, o) {
          return (
            (0, r.wg)(), (0, r.iD)("h4", I, [(0, r.WI)(e.$slots, "default")])
          );
        }
        var T = (0, r.aZ)({ name: "Heading4" });
        const L = (0, f.Z)(T, [["render", A]]);
        var F = L;
        const N = { class: "md:w-4/5 lg:w-2/3 md:mx-auto" };
        function P(e, a, n, i, t, o) {
          return (
            (0, r.wg)(), (0, r.iD)("div", N, [(0, r.WI)(e.$slots, "default")])
          );
        }
        var $ = (0, r.aZ)({ name: "NarrowContainer" });
        const E = (0, f.Z)($, [["render", P]]);
        var U = E;
        const B = { class: "block text-grayDark text-sm" };
        function O(e, a, n, i, t, o) {
          return (
            (0, r.wg)(), (0, r.iD)("span", B, [(0, r.WI)(e.$slots, "default")])
          );
        }
        var M = (0, r.aZ)({ name: "Note" });
        const G = (0, f.Z)(M, [["render", O]]);
        var K = G;
        const J = { class: "text-grayDark text-justify" };
        function Y(e, a, n, i, t, o) {
          return (
            (0, r.wg)(), (0, r.iD)("p", J, [(0, r.WI)(e.$slots, "default")])
          );
        }
        var q = (0, r.aZ)({ name: "Paragraph" });
        const Q = (0, f.Z)(q, [["render", Y]]);
        var V = Q;
        function R(e, a, n, i, t, o) {
          return (
            (0, r.wg)(),
            (0, r.iD)(
              "section",
              {
                class: (0, s.C_)([
                  "py-12 border-complementary",
                  { "border-bottom": e.border },
                ]),
              },
              [(0, r.WI)(e.$slots, "default", {}, void 0, !0)],
              2
            )
          );
        }
        var X = (0, r.aZ)({
          name: "Section",
          props: { border: { type: Boolean, default: !1 } },
        });
        const ee = (0, f.Z)(X, [
          ["render", R],
          ["__scopeId", "data-v-e81b3e36"],
        ]);
        var ae = ee;
        const ne = ["href", "aria-label"],
          ie = { class: "mr-0 md:mr-4 text-secondary" };
        function te(e, a, n, i, t, o) {
          const l = (0, r.up)("FontAwesomeIcon");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              "a",
              {
                href: e.contact.url,
                target: "_blank",
                rel: "noopener noreferrer",
                class:
                  "relative flex items-center w-fit md:flex-row-reverse md:ml-auto animate-underline",
                "aria-label": e.contact.aria,
              },
              [
                (0, r.Wm)(
                  l,
                  {
                    icon: e.contact.icon,
                    size: "2x",
                    class: "text-secondary mr-4 md:mr-0 w-7 h-7",
                  },
                  null,
                  8,
                  ["icon"]
                ),
                (0, r._)("span", ie, (0, s.zw)(e.contact.label), 1),
              ],
              8,
              ne
            )
          );
        }
        var re = (0, r.aZ)({
          name: "ContactItem",
          props: { contact: { type: Object } },
        });
        const oe = (0, f.Z)(re, [["render", te]]);
        var se = oe;
        const le = { class: "invisible", ref: "list" };
        function ce(e, a, n, i, t, o) {
          const s = (0, r.up)("ContactItem");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              "div",
              le,
              [
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    e.entities,
                    (e) => (
                      (0, r.wg)(),
                      (0, r.j4)(
                        s,
                        { key: e.id, contact: e, class: "mb-4 last:mb-0" },
                        null,
                        8,
                        ["contact"]
                      )
                    )
                  ),
                  128
                )),
              ],
              512
            )
          );
        }
        var de = (0, r.aZ)({
          name: "ContactList",
          components: { ContactItem: se },
          props: { entities: { type: Array } },
          setup() {
            const e = (0, d.iH)([]);
            return j(e, "animate-scroll-left"), { list: e };
          },
        });
        const ue = (0, f.Z)(de, [["render", ce]]);
        var me = ue;
        const pe = { class: "invisible", ref: "photo" },
          fe = { class: "flex justify-center items-center md:justify-start" },
          ge = ["alt"];
        function be(e, a, n, i, t, o) {
          return (
            (0, r.wg)(),
            (0, r.iD)(
              "div",
              pe,
              [
                (0, r._)("figure", fe, [
                  (0, r._)(
                    "img",
                    {
                      class:
                        "border-complementary border-2 rounded-full w-48 lg:w-56 h-48 lg:h-56 object-cover",
                      src: "/assets/me.webp",
                      alt: e.$t("about.photo"),
                    },
                    null,
                    8,
                    ge
                  ),
                ]),
              ],
              512
            )
          );
        }
        var we = (0, r.aZ)({
          name: "Photo",
          setup() {
            const e = (0, d.iH)([]);
            return j(e, "animate-scroll-right"), { photo: e };
          },
        });
        const ke = (0, f.Z)(we, [["render", be]]);
        var he = ke,
          ye = n(658);
        const ve = () => {
          const { t: e } = (0, ye.QT)(),
            a = (0, r.Fl)(() => [
              {
                href: "#about",
                label: e("navigation.about.label"),
                icon: "fa-solid fa-user",
                aria: e("navigation.about.aria"),
              },
              {
                href: "#experience",
                label: e("navigation.experience.label"),
                icon: "fa-solid fa-briefcase",
                aria: e("navigation.experience.aria"),
              },
              {
                href: "#education",
                label: e("navigation.education.label"),
                icon: "fa-solid fa-graduation-cap",
                aria: e("navigation.education.aria"),
              },
              {
                href: "#skills",
                label: e("navigation.skills.label"),
                icon: "fa-solid fa-code",
                aria: e("navigation.skills.aria"),
              },
            ]),
            n = (0, r.Fl)(() => [
              {
                id: "msc",
                period: e("education.msc.period"),
                heading: e("education.msc.university"),
                note: e("education.msc.faculty"),
                subheading: e("education.msc.field"),
                description: e("education.msc.thesis"),
                technologies: ["Python", "Keras", "Scikit-learn"],
              },
              {
                id: "bsc",
                period: e("education.bsc.period"),
                heading: e("education.bsc.university"),
                note: e("education.bsc.faculty"),
                subheading: e("education.bsc.field"),
                description: e("education.bsc.thesis"),
                technologies: [
                  "Angular",
                  "TypeScript",
                  "Sass",
                  "C#",
                  "Entity Framework",
                  ".NET Core",
                  "MSSQL",
                  "Git",
                ],
              },
            ]),
            i = (0, r.Fl)(() => [
              {
                id: "synergy",
                period: e("experience.synergy.period"),
                heading: e("experience.synergy.company"),
                note: e("experience.synergy.span"),
                subheading: e("experience.synergy.position"),
                description: e("experience.synergy.description"),
                technologies: [
                  "Angular",
                  "TypeScript",
                  "Git",
                  "CSS",
                  "HTML",
                  "Azure DevOps",
                  "Windows",
                ],
              },
              {
                id: "linkfactory",
                period: e("experience.linkfactory.period"),
                heading: e("experience.linkfactory.company"),
                note: e("experience.linkfactory.span"),
                subheading: e("experience.linkfactory.position"),
                description: e("experience.linkfactory.description"),
                technologies: [
                  "Angular",
                  "TypeScript",
                  "Git",
                  "CSS",
                  "HTML",
                  "Sass",
                  "Vue",
                  "JavaScript",
                  "React",
                  "Linux",
                  "Jira",
                ],
              },
              {
                id: "comarch",
                period: e("experience.comarch.period"),
                heading: e("experience.comarch.company"),
                note: e("experience.comarch.span"),
                subheading: e("experience.comarch.position"),
                description: e("experience.comarch.description"),
                technologies: [
                  "JavaScript",
                  "Node.js",
                  "Git",
                  "Microsoft Bot Framework",
                  "Angular",
                  "TypeScript",
                  "Windows",
                  "Jira",
                ],
              },
            ]),
            t = (0, r.Fl)(() => [
              {
                id: "email",
                icon: "fa-solid fa-envelope",
                url: e("contact.email.url"),
                label: e("contact.email.label"),
                aria: e("contact.email.aria"),
              },
              {
                id: "linkedin",
                icon: "fa-brands fa-linkedin",
                url: e("contact.linkedin.url"),
                label: e("contact.linkedin.label"),
                aria: e("contact.linkedin.aria"),
              },
              {
                id: "github",
                icon: "fa-brands fa-github",
                url: e("contact.github.url"),
                label: e("contact.github.label"),
                aria: e("contact.github.aria"),
              },
            ]),
            o = (0, r.Fl)(() => [
              {
                heading: e("skills.frontend.header"),
                subarticles: [
                  {
                    subheading: e("skills.frontend.frameworks"),
                    skills: [
                      {
                        name: "Angular",
                        icon: "fa-brands fa-angular",
                        progress: 100,
                        experience: e("skills.period.years", { number: "3+" }),
                      },
                      {
                        name: "Vue",
                        icon: "fa-brands fa-vuejs",
                        progress: 50,
                        experience: e("skills.period.year", { number: "1+" }),
                      },
                      {
                        name: "React",
                        icon: "fa-brands fa-react",
                        progress: 8.5,
                        experience: e("skills.period.months-alt", {
                          number: "3",
                        }),
                      },
                    ],
                  },
                  {
                    subheading: e("skills.frontend.basics"),
                    skills: [
                      {
                        name: "JavaScript / TypeScript",
                        icon: "fa-brands fa-js",
                        progress: 100,
                        experience: e("skills.period.years", { number: "3+" }),
                      },
                      {
                        name: "HTML",
                        icon: "fa-brands fa-html5",
                        progress: 100,
                        experience: e("skills.period.years", { number: "3+" }),
                      },
                      {
                        name: "CSS",
                        icon: "fa-brands fa-css3-alt",
                        progress: 100,
                        experience: e("skills.period.years", { number: "3+" }),
                      },
                      {
                        name: "Sass",
                        icon: "fa-brands fa-sass",
                        progress: 100,
                        experience: e("skills.period.years", { number: "3+" }),
                      },
                    ],
                  },
                  {
                    subheading: e("skills.frontend.tools"),
                    skills: [
                      {
                        name: "Npm",
                        icon: "fa-brands fa-npm",
                        progress: 100,
                        experience: e("skills.period.years", { number: "3+" }),
                      },
                      {
                        name: "Yarn",
                        icon: "fa-brands fa-yarn",
                        progress: 66.66,
                        experience: e("skills.period.years", { number: "2+" }),
                      },
                    ],
                  },
                ],
              },
              {
                heading: e("skills.other.header"),
                subarticles: [
                  {
                    subheading: e("skills.other.backend"),
                    skills: [
                      {
                        name: "Node.js / Express.js",
                        icon: "fa-brands fa-node-js",
                        progress: 0,
                        experience: "",
                      },
                      {
                        name: "Sequelize.js",
                        icon: "fa-solid fa-code",
                        progress: 0,
                        experience: "",
                      },
                      {
                        name: "C#",
                        icon: "fa-solid fa-code",
                        progress: 0,
                        experience: "",
                      },
                      {
                        name: ".NET Core",
                        icon: "fa-solid fa-code",
                        progress: 0,
                        experience: "",
                      },
                      {
                        name: "Entity Framework",
                        icon: "fa-solid fa-code",
                        progress: 0,
                        experience: "",
                      },
                      {
                        name: "SQL / MySQL",
                        icon: "fa-solid fa-database",
                        progress: 2.75,
                        experience: e("skills.period.month", { number: "1+" }),
                      },
                    ],
                  },
                  {
                    subheading: e("skills.other.tools"),
                    skills: [
                      {
                        name: "Git",
                        icon: "fa-brands fa-git-alt",
                        progress: 100,
                        experience: e("skills.period.years", { number: "3+" }),
                      },
                      {
                        name: "Jira",
                        icon: "fa-brands fa-jira",
                        progress: 100,
                        experience: e("skills.period.years", { number: "3+" }),
                      },
                      {
                        name: "VS Code",
                        icon: "fa-solid fa-code",
                        progress: 100,
                        experience: e("skills.period.years", { number: "3+" }),
                      },
                      {
                        name: "Ubuntu Linux",
                        icon: "fa-brands fa-ubuntu",
                        progress: 85,
                        experience: e("skills.period.years", { number: "2+" }),
                      },
                      {
                        name: "Jenkins",
                        icon: "fa-brands fa-jenkins",
                        progress: 2.75,
                        experience: e("skills.period.month", { number: "<1" }),
                      },
                    ],
                  },
                  {
                    subheading: e("skills.other.hobby"),
                    skills: [
                      {
                        name: "Python",
                        icon: "fa-brands fa-python",
                        progress: 0,
                        experience: "",
                      },
                      {
                        name: "Unity",
                        icon: "fa-brands fa-unity",
                        progress: 0,
                        experience: "",
                      },
                      {
                        name: "Blender 3D",
                        icon: "fa-solid fa-cube",
                        progress: 0,
                        experience: "",
                      },
                    ],
                  },
                ],
              },
            ]);
          return { articles: o, contacts: t, degrees: n, jobs: i, links: a };
        };
        var xe = (0, r.aZ)({
          name: "About",
          components: {
            Container: b,
            Section: ae,
            Heading2: W,
            Paragraph: V,
            Photo: he,
            NarrowContainer: U,
            ContactList: me,
          },
          setup() {
            const { contacts: e } = ve(),
              a = (0, d.iH)([]);
            return j(a, "animate-scroll-top"), { entities: e, description: a };
          },
        });
        const ze = (0, f.Z)(xe, [["render", c]]);
        var je = ze;
        function Se(e, a, n, i, t, o) {
          const l = (0, r.up)("Heading2"),
            c = (0, r.up)("Timeline"),
            d = (0, r.up)("Container"),
            u = (0, r.up)("Section");
          return (
            (0, r.wg)(),
            (0, r.j4)(
              u,
              { id: "education", border: !0 },
              {
                default: (0, r.w5)(() => [
                  (0, r.Wm)(d, null, {
                    default: (0, r.w5)(() => [
                      (0, r.Wm)(
                        l,
                        { icon: "fa-solid fa-graduation-cap", class: "pb-12" },
                        {
                          default: (0, r.w5)(() => [
                            (0, r.Uk)((0, s.zw)(e.$t("education.header")), 1),
                          ]),
                          _: 1,
                        }
                      ),
                      (0, r.Wm)(c, { entities: e.entities }, null, 8, [
                        "entities",
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }
            )
          );
        }
        const _e = (e) => (
            (0, r.dD)("data-v-b5bbc0ac"), (e = e()), (0, r.Cn)(), e
          ),
          We = { class: "relative" },
          De = _e(() =>
            (0, r._)(
              "div",
              {
                class:
                  "aside-dot absolute w-8 h-8 bg-white flex items-center justify-center rounded-xl",
              },
              [(0, r._)("div", { class: "w-4 h-4 bg-tertiary rounded-xl" })],
              -1
            )
          ),
          He = _e(() =>
            (0, r._)(
              "div",
              { class: "aside-line w-1 rounded-md bg-primary h-full" },
              null,
              -1
            )
          ),
          Ze = [De, He];
        function Ce(e, a, n, i, t, o) {
          return (0, r.wg)(), (0, r.iD)("aside", We, Ze);
        }
        var Ie = (0, r.aZ)({ name: "AsideLine" });
        const Ae = (0, f.Z)(Ie, [
          ["render", Ce],
          ["__scopeId", "data-v-b5bbc0ac"],
        ]);
        var Te = Ae;
        const Le = { class: "p-2 block border-complementary border-2 text-sm" };
        function Fe(e, a, n, i, t, o) {
          return (
            (0, r.wg)(), (0, r.iD)("span", Le, [(0, r.WI)(e.$slots, "default")])
          );
        }
        var Ne = (0, r.aZ)({ name: "Block" });
        const Pe = (0, f.Z)(Ne, [["render", Fe]]);
        var $e = Pe;
        const Ee = { key: 0, class: "flex flex-wrap -m-1" };
        function Ue(e, a, n, i, t, o) {
          const l = (0, r.up)("Block");
          return e.items.length
            ? ((0, r.wg)(),
              (0, r.iD)("div", Ee, [
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    e.items,
                    (e) => (
                      (0, r.wg)(),
                      (0, r.j4)(
                        l,
                        { key: e, class: "m-1" },
                        {
                          default: (0, r.w5)(() => [
                            (0, r.Uk)((0, s.zw)(e), 1),
                          ]),
                          _: 2,
                        },
                        1024
                      )
                    )
                  ),
                  128
                )),
              ]))
            : (0, r.kq)("", !0);
        }
        var Be = (0, r.aZ)({
          name: "BlockList",
          components: { Block: $e },
          props: { items: { type: Array, default: () => [] } },
        });
        const Oe = (0, f.Z)(Be, [["render", Ue]]);
        var Me = Oe;
        const Ge = { key: 0, class: "block mb-2" };
        function Ke(e, a, n, i, t, o) {
          const l = (0, r.up)("AsideLine"),
            c = (0, r.up)("Heading3"),
            d = (0, r.up)("Note"),
            u = (0, r.up)("Heading4"),
            m = (0, r.up)("Paragraph"),
            p = (0, r.up)("BlockList");
          return (
            (0, r.wg)(!0),
            (0, r.iD)(
              r.HY,
              null,
              (0, r.Ko)(
                e.entities,
                (e) => (
                  (0, r.wg)(),
                  (0, r.iD)(
                    "article",
                    { class: "mb-10 mt-4 flex", key: e.id },
                    [
                      (0, r.Wm)(l, { class: "mr-6" }),
                      (0, r._)(
                        "div",
                        { ref_for: !0, ref: "periods", class: "invisible" },
                        [
                          e.period
                            ? ((0, r.wg)(),
                              (0, r.iD)("span", Ge, (0, s.zw)(e.period), 1))
                            : (0, r.kq)("", !0),
                          e.heading
                            ? ((0, r.wg)(),
                              (0, r.j4)(
                                c,
                                { key: 1, class: "mb-2" },
                                {
                                  default: (0, r.w5)(() => [
                                    (0, r.Uk)((0, s.zw)(e.heading), 1),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ))
                            : (0, r.kq)("", !0),
                          e.note
                            ? ((0, r.wg)(),
                              (0, r.j4)(
                                d,
                                { key: 2, class: "mb-2" },
                                {
                                  default: (0, r.w5)(() => [
                                    (0, r.Uk)((0, s.zw)(e.note), 1),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ))
                            : (0, r.kq)("", !0),
                          e.subheading
                            ? ((0, r.wg)(),
                              (0, r.j4)(
                                u,
                                { key: 3, class: "mb-2" },
                                {
                                  default: (0, r.w5)(() => [
                                    (0, r.Uk)((0, s.zw)(e.subheading), 1),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ))
                            : (0, r.kq)("", !0),
                          e.description
                            ? ((0, r.wg)(),
                              (0, r.j4)(
                                m,
                                { key: 4, class: "mb-4" },
                                {
                                  default: (0, r.w5)(() => [
                                    (0, r.Uk)((0, s.zw)(e.description), 1),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ))
                            : (0, r.kq)("", !0),
                          (0, r.Wm)(p, { items: e.technologies }, null, 8, [
                            "items",
                          ]),
                        ],
                        512
                      ),
                    ]
                  )
                )
              ),
              128
            )
          );
        }
        var Je = (0, r.aZ)({
          name: "Timeline",
          components: {
            AsideLine: Te,
            BlockList: Me,
            Heading3: C,
            Heading4: F,
            Paragraph: V,
            Note: K,
          },
          props: { entities: { type: Array } },
          setup() {
            const e = (0, d.iH)([]);
            return j(e, "animate-scroll-top"), { periods: e };
          },
        });
        const Ye = (0, f.Z)(Je, [["render", Ke]]);
        var qe = Ye,
          Qe = (0, r.aZ)({
            name: "Education",
            components: {
              Container: b,
              Section: ae,
              Heading2: W,
              Timeline: qe,
            },
            setup() {
              const { degrees: e } = ve();
              return { entities: e };
            },
          });
        const Ve = (0, f.Z)(Qe, [["render", Se]]);
        var Re = Ve;
        function Xe(e, a, n, i, t, o) {
          const l = (0, r.up)("Heading2"),
            c = (0, r.up)("Timeline"),
            d = (0, r.up)("Container"),
            u = (0, r.up)("Section");
          return (
            (0, r.wg)(),
            (0, r.j4)(
              u,
              { id: "experience", border: !0 },
              {
                default: (0, r.w5)(() => [
                  (0, r.Wm)(d, null, {
                    default: (0, r.w5)(() => [
                      (0, r.Wm)(
                        l,
                        { icon: "fa-solid fa-briefcase", class: "pb-12" },
                        {
                          default: (0, r.w5)(() => [
                            (0, r.Uk)((0, s.zw)(e.$t("experience.header")), 1),
                          ]),
                          _: 1,
                        }
                      ),
                      (0, r.Wm)(c, { entities: e.entities }, null, 8, [
                        "entities",
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }
            )
          );
        }
        var ea = (0, r.aZ)({
          name: "Experience",
          components: { Container: b, Section: ae, Heading2: W, Timeline: qe },
          setup() {
            const { jobs: e } = ve();
            return { entities: e };
          },
        });
        const aa = (0, f.Z)(ea, [["render", Xe]]);
        var na = aa;
        const ia = { class: "flex flex-col" },
          ta = { class: "flex justify-center items-center mb-4" },
          ra = {
            class: "text-tertiary text-2xl font-semibold font-chakra mr-2",
          },
          oa = { key: 0, class: "block w-2 h-6 animate-caret-tertiary" },
          sa = { class: "flex items-center" },
          la = { key: 0, class: "block w-2 h-10 animate-caret" },
          ca = {
            key: 0,
            class: "text-lg font-medium text-center animate-fade",
          },
          da = {
            key: 0,
            class:
              "block bg-tertiary hover:bg-opacity-80 duration-500 text-white font-semibold px-8 py-4 rounded-md max-w-xs animate-fade",
            href: "#about",
          },
          ua = { class: "mr-4" };
        function ma(e, a, n, i, t, o) {
          const l = (0, r.up)("Heading1"),
            c = (0, r.up)("NarrowContainer"),
            d = (0, r.up)("FontAwesomeIcon"),
            u = (0, r.up)("Container"),
            m = (0, r.up)("Section");
          return (
            (0, r.wg)(),
            (0, r.j4)(
              m,
              { id: "hero", class: "bg-primary text-complementary flex" },
              {
                default: (0, r.w5)(() => [
                  (0, r.Wm)(
                    u,
                    {
                      class:
                        "flex-1 flex flex-col items-center justify-between mt-4 mb-10 md:my-12 lg:my-16",
                    },
                    {
                      default: (0, r.w5)(() => [
                        (0, r._)("div", ia, [
                          (0, r._)("div", ta, [
                            (0, r._)("span", ra, (0, s.zw)(e.greetingsDest), 1),
                            e.loadingGreetings
                              ? ((0, r.wg)(), (0, r.iD)("span", oa))
                              : (0, r.kq)("", !0),
                          ]),
                          (0, r._)("div", sa, [
                            (0, r.Wm)(
                              l,
                              { class: "font-chakra mr-2" },
                              {
                                default: (0, r.w5)(() => [
                                  (0, r.Uk)((0, s.zw)(e.fullNameDest), 1),
                                ]),
                                _: 1,
                              }
                            ),
                            e.loadingFullName
                              ? ((0, r.wg)(), (0, r.iD)("span", la))
                              : (0, r.kq)("", !0),
                          ]),
                        ]),
                        (0, r.Wm)(
                          c,
                          { class: "my-8 md:my-12" },
                          {
                            default: (0, r.w5)(() => [
                              e.loadingFullName || e.loadingGreetings
                                ? (0, r.kq)("", !0)
                                : ((0, r.wg)(),
                                  (0, r.iD)(
                                    "p",
                                    ca,
                                    (0, s.zw)(e.$t("hero.description")),
                                    1
                                  )),
                            ]),
                            _: 1,
                          }
                        ),
                        e.loadingFullName || e.loadingGreetings
                          ? (0, r.kq)("", !0)
                          : ((0, r.wg)(),
                            (0, r.iD)("a", da, [
                              (0, r._)(
                                "span",
                                ua,
                                (0, s.zw)(e.$t("hero.button")),
                                1
                              ),
                              (0, r.Wm)(d, {
                                icon: "fa-solid fa-chevron-up",
                                rotation: 180,
                              }),
                            ])),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            )
          );
        }
        const pa = () => {
          const e = (0, ye.QT)(),
            a = (0, r.Fl)(() => e.locale.value),
            n = (a) => {
              (e.locale.value = a),
                document.documentElement.setAttribute("lang", a),
                window.localStorage.setItem("locale", a);
            };
          return { changeLocale: n, currentLocale: a };
        };
        var fa = (0, r.aZ)({
          name: "Hero",
          components: {
            Container: b,
            Section: ae,
            Heading1: v,
            NarrowContainer: U,
          },
          setup() {
            const { t: e } = (0, ye.QT)(),
              { currentLocale: a } = pa(),
              n = (0, d.iH)(e("hero.greetings")),
              i = (0, d.iH)(e("hero.fullName")),
              t = (0, d.iH)(""),
              o = (0, d.iH)(""),
              s = (0, d.iH)(!0),
              l = (0, d.iH)(!1),
              c = () => {
                t.value.length < n.value.length
                  ? ((t.value += n.value.charAt(t.value.length)),
                    setTimeout(c, 100))
                  : setTimeout(() => {
                      (s.value = !1), (l.value = !0), u();
                    }, 250);
              },
              u = () => {
                o.value.length < i.value.length
                  ? ((o.value += i.value.charAt(o.value.length)),
                    setTimeout(u, 100))
                  : setTimeout(() => {
                      l.value = !1;
                    }, 250);
              };
            return (
              setTimeout(c, 200),
              (0, r.YP)(
                a,
                () => {
                  (n.value = e("hero.greetings")),
                    (i.value = e("hero.fullName")),
                    (t.value = ""),
                    (o.value = ""),
                    (s.value = !0),
                    (l.value = !1),
                    c();
                },
                { deep: !0 }
              ),
              {
                greetingsDest: t,
                fullNameDest: o,
                loadingGreetings: s,
                loadingFullName: l,
              }
            );
          },
        });
        const ga = (0, f.Z)(fa, [
          ["render", ma],
          ["__scopeId", "data-v-1db8ed3e"],
        ]);
        var ba = ga;
        function wa(e, a, n, i, t, o) {
          const l = (0, r.up)("Heading2"),
            c = (0, r.up)("SkillArticle"),
            d = (0, r.up)("Container"),
            u = (0, r.up)("Section");
          return (
            (0, r.wg)(),
            (0, r.j4)(
              u,
              { id: "skills" },
              {
                default: (0, r.w5)(() => [
                  (0, r.Wm)(d, null, {
                    default: (0, r.w5)(() => [
                      (0, r.Wm)(
                        l,
                        { icon: "fa-solid fa-code", class: "mb-12" },
                        {
                          default: (0, r.w5)(() => [
                            (0, r.Uk)((0, s.zw)(e.$t("skills.header")), 1),
                          ]),
                          _: 1,
                        }
                      ),
                      ((0, r.wg)(!0),
                      (0, r.iD)(
                        r.HY,
                        null,
                        (0, r.Ko)(
                          e.entities,
                          (a, n) => (
                            (0, r.wg)(),
                            (0, r.j4)(
                              c,
                              {
                                key: a.heading,
                                class: (0, s.C_)({
                                  "mb-12": n < e.entities.length - 1,
                                }),
                                article: a,
                              },
                              null,
                              8,
                              ["class", "article"]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }
            )
          );
        }
        const ka = { class: "flex justify-between items-center mb-2" },
          ha = { class: "flex items-center" },
          ya = { key: 1, class: "w-9" },
          va = { class: "text-primary mr-4" };
        function xa(e, a, n, i, t, o) {
          const l = (0, r.up)("FontAwesomeIcon"),
            c = (0, r.up)("Note"),
            d = (0, r.up)("ProgressBar");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", null, [
              (0, r._)("div", ka, [
                (0, r._)("div", ha, [
                  e.skill.icon
                    ? ((0, r.wg)(),
                      (0, r.j4)(
                        l,
                        {
                          key: 0,
                          icon: e.skill.icon,
                          size: "2x",
                          class: "mr-4 w-5 h-5 text-secondary",
                        },
                        null,
                        8,
                        ["icon"]
                      ))
                    : ((0, r.wg)(), (0, r.iD)("span", ya)),
                  (0, r._)("span", va, (0, s.zw)(e.skill.name), 1),
                ]),
                (0, r.Wm)(
                  c,
                  { class: "text-right" },
                  {
                    default: (0, r.w5)(() => [
                      (0, r.Uk)((0, s.zw)(e.skill.experience), 1),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              (0, r.Wm)(d, { progress: e.skill.progress }, null, 8, [
                "progress",
              ]),
            ])
          );
        }
        const za = {
          class: "bg-complementary h-2 w-100 rounded-md overflow-hidden",
        };
        function ja(e, a, n, i, t, o) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", za, [
              (0, r._)(
                "div",
                {
                  class: "bg-secondary h-2 rounded-md",
                  style: (0, s.j5)({ width: `${e.progress}%` }),
                },
                null,
                4
              ),
            ])
          );
        }
        var Sa = (0, r.aZ)({
          name: "ProgressBar",
          props: { progress: { type: Number } },
        });
        const _a = (0, f.Z)(Sa, [["render", ja]]);
        var Wa = _a,
          Da = (0, r.aZ)({
            name: "Skill",
            components: { ProgressBar: Wa, Note: K },
            props: { skill: { type: Object } },
          });
        const Ha = (0, f.Z)(Da, [["render", xa]]);
        var Za = Ha;
        const Ca = { class: "flex flex-wrap justify-center -m-6" };
        function Ia(e, a, n, i, t, o) {
          const l = (0, r.up)("Heading3"),
            c = (0, r.up)("Heading4"),
            d = (0, r.up)("Skill");
          return (
            (0, r.wg)(),
            (0, r.iD)("article", null, [
              (0, r.Wm)(
                l,
                { class: "my-8 md:text-center", animation: !0 },
                {
                  default: (0, r.w5)(() => [
                    (0, r.Uk)((0, s.zw)(e.article.heading), 1),
                  ]),
                  _: 1,
                }
              ),
              (0, r._)("div", Ca, [
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    e.article.subarticles,
                    (e) => (
                      (0, r.wg)(),
                      (0, r.iD)(
                        "div",
                        {
                          key: e.subheading,
                          class: "w-full md:w-1/2 lg:w-1/3",
                        },
                        [
                          (0, r._)(
                            "article",
                            {
                              class: "m-6 invisible",
                              ref_for: !0,
                              ref: "skills",
                            },
                            [
                              (0, r.Wm)(
                                c,
                                { class: "mb-6 md:text-center" },
                                {
                                  default: (0, r.w5)(() => [
                                    (0, r.Uk)((0, s.zw)(e.subheading), 1),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ),
                              ((0, r.wg)(!0),
                              (0, r.iD)(
                                r.HY,
                                null,
                                (0, r.Ko)(
                                  e.skills,
                                  (e) => (
                                    (0, r.wg)(),
                                    (0, r.j4)(
                                      d,
                                      { key: e.name, class: "mb-5", skill: e },
                                      null,
                                      8,
                                      ["skill"]
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            512
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        var Aa = (0, r.aZ)({
          name: "SkillArticle",
          components: { Heading3: C, Heading4: F, Skill: Za },
          props: { article: { type: Object } },
          setup() {
            const e = (0, d.iH)([]);
            return j(e, "animate-scroll-left"), { skills: e };
          },
        });
        const Ta = (0, f.Z)(Aa, [["render", Ia]]);
        var La = Ta,
          Fa = (0, r.aZ)({
            name: "Skills",
            components: {
              Container: b,
              Section: ae,
              Heading2: W,
              SkillArticle: La,
            },
            setup() {
              const { articles: e } = ve();
              return { entities: e };
            },
          });
        const Na = (0, f.Z)(Fa, [["render", wa]]);
        var Pa = Na;
        const $a = { class: "bg-primary" },
          Ea = { class: "flex flex-col text-white mb-12 md:mb-0" },
          Ua = ["href", "aria-label"],
          Ba = { class: "md:flex md:flex-col md:justify-between" },
          Oa = { class: "mb-12 text-white" },
          Ma = ["href", "aria-label"],
          Ga = { class: "mr-0 md:mr-4" },
          Ka = { class: "flex text-white md:justify-end" },
          Ja = ["href", "aria-label"],
          Ya = { class: "hidden" },
          qa = ["href", "aria-label"],
          Qa = { class: "hidden" },
          Va = (0, r._)(
            "div",
            { class: "text-white text-center pb-4 text-sm" },
            [(0, r._)("p", null, "© 2023 Karol Jaskółka")],
            -1
          ),
          Ra = (0, r._)("div", { class: "h-16 lg:h-0 bg-primary" }, null, -1);
        function Xa(e, a, n, i, t, o) {
          const l = (0, r.up)("FontAwesomeIcon"),
            c = (0, r.up)("Section"),
            d = (0, r.up)("Container");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r._)("footer", $a, [
                  (0, r.Wm)(d, null, {
                    default: (0, r.w5)(() => [
                      (0, r.Wm)(
                        c,
                        {
                          class: "md:flex md:justify-between md:items-stretch",
                        },
                        {
                          default: (0, r.w5)(() => [
                            (0, r._)("nav", Ea, [
                              ((0, r.wg)(!0),
                              (0, r.iD)(
                                r.HY,
                                null,
                                (0, r.Ko)(
                                  e.links,
                                  (e) => (
                                    (0, r.wg)(),
                                    (0, r.iD)(
                                      "a",
                                      {
                                        key: e.label,
                                        href: e.href,
                                        class:
                                          "mb-4 last:mb-0 hover:text-gray w-fit flex animate-underline-thin-tertiary",
                                        "aria-label": e.aria,
                                      },
                                      (0, s.zw)(e.label),
                                      9,
                                      Ua
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                            (0, r._)("aside", Ba, [
                              (0, r._)("div", Oa, [
                                (0, r._)(
                                  "a",
                                  {
                                    href: e.$t("contact.email.url"),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    class:
                                      "flex md:flex-row-reverse items-center w-fit hover:text-gray animate-underline-thin-tertiary",
                                    "aria-label": e.$t("contact.email.aria"),
                                  },
                                  [
                                    (0, r.Wm)(l, {
                                      icon: "fa-solid fa-envelope",
                                      class: "mr-4 md:mr-0",
                                    }),
                                    (0, r._)(
                                      "span",
                                      Ga,
                                      (0, s.zw)(e.$t("contact.email.label")),
                                      1
                                    ),
                                  ],
                                  8,
                                  Ma
                                ),
                              ]),
                              (0, r._)("div", Ka, [
                                (0, r._)(
                                  "a",
                                  {
                                    href: e.$t("contact.linkedin.url"),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    class: "hover:text-gray mr-4",
                                    "aria-label": e.$t("contact.linkedin.aria"),
                                  },
                                  [
                                    (0, r.Wm)(l, {
                                      icon: "fa-brands fa-linkedin",
                                      size: "2x",
                                    }),
                                    (0, r._)(
                                      "span",
                                      Ya,
                                      (0, s.zw)(e.$t("contact.linkedin.label")),
                                      1
                                    ),
                                  ],
                                  8,
                                  Ja
                                ),
                                (0, r._)(
                                  "a",
                                  {
                                    href: e.$t("contact.github.url"),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    class: "hover:text-gray",
                                    "aria-label": e.$t("contact.github.aria"),
                                  },
                                  [
                                    (0, r.Wm)(l, {
                                      icon: "fa-brands fa-github",
                                      size: "2x",
                                    }),
                                    (0, r._)(
                                      "span",
                                      Qa,
                                      (0, s.zw)(e.$t("contact.github.label")),
                                      1
                                    ),
                                  ],
                                  8,
                                  qa
                                ),
                              ]),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                      Va,
                    ]),
                    _: 1,
                  }),
                ]),
                Ra,
              ],
              64
            )
          );
        }
        var en = (0, r.aZ)({
          name: "Footer",
          components: { Section: ae, Container: b },
          setup() {
            const { links: e } = ve();
            return { links: e };
          },
        });
        const an = (0, f.Z)(en, [["render", Xa]]);
        var nn = an;
        const tn = { class: "bg-primary text-complementary" },
          rn = (0, r._)(
            "div",
            { class: "font-chakra text-xl sm:text-2xl uppercase" },
            " Karol Jaskółka ",
            -1
          ),
          on = { class: "flex items-center" },
          sn = { class: "hidden lg:flex" },
          ln = ["href", "aria-label"];
        function cn(e, a, n, i, t, o) {
          const l = (0, r.up)("LanguageSwitch"),
            c = (0, r.up)("Container");
          return (
            (0, r.wg)(),
            (0, r.iD)("header", tn, [
              (0, r.Wm)(
                c,
                { class: "py-8 flex justify-between items-center" },
                {
                  default: (0, r.w5)(() => [
                    rn,
                    (0, r._)("div", on, [
                      (0, r._)("nav", sn, [
                        ((0, r.wg)(!0),
                        (0, r.iD)(
                          r.HY,
                          null,
                          (0, r.Ko)(
                            e.links,
                            (e) => (
                              (0, r.wg)(),
                              (0, r.iD)(
                                "a",
                                {
                                  key: e.label,
                                  href: e.href,
                                  "aria-label": e.aria,
                                  class:
                                    "ml-8 first:ml-0 hover:text-gray flex animate-underline-tertiary",
                                },
                                (0, s.zw)(e.label),
                                9,
                                ln
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      (0, r.Wm)(l, { class: "ml-4 md:ml-12" }),
                    ]),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        const dn = { class: "flex" },
          un = ["onClick", "aria-label"];
        function mn(e, a, n, i, t, o) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", dn, [
              ((0, r.wg)(!0),
              (0, r.iD)(
                r.HY,
                null,
                (0, r.Ko)(
                  e.locales,
                  (a) => (
                    (0, r.wg)(),
                    (0, r.iD)(
                      "button",
                      {
                        key: a,
                        onClick: (n) => e.changeLocale(a),
                        class: (0, s.C_)([
                          "ml-6 first:ml-0 uppercase font-medium flex animate-underline-tertiary",
                          { "text-tertiary": e.currentLocale === a },
                        ]),
                        "aria-label": e.$t(`aria.${a}`),
                      },
                      (0, s.zw)(a),
                      11,
                      un
                    )
                  )
                ),
                128
              )),
            ])
          );
        }
        var pn;
        (function (e) {
          (e["EN"] = "en"), (e["PL"] = "pl");
        })(pn || (pn = {}));
        var fn = (0, r.aZ)({
          name: "LanguageSwitch",
          setup() {
            const { changeLocale: e, currentLocale: a } = pa(),
              n = (0, r.Fl)(() => Object.values(pn));
            return { changeLocale: e, locales: n, currentLocale: a };
          },
        });
        const gn = (0, f.Z)(fn, [["render", mn]]);
        var bn = gn,
          wn = (0, r.aZ)({
            name: "Header",
            components: { Container: b, LanguageSwitch: bn },
            setup() {
              const { links: e } = ve();
              return { links: e };
            },
          });
        const kn = (0, f.Z)(wn, [["render", cn]]);
        var hn = kn;
        const yn = {
            key: 0,
            class: "lg:hidden fixed -bottom-1 right-0 left-0 z-30 animate-fade",
          },
          vn = {
            class: "mobile-nav bg-white flex text-secondary rounded-t-md",
          },
          xn = ["href", "aria-label"],
          zn = { class: "hidden" };
        function jn(e, a, n, i, t, o) {
          const l = (0, r.up)("FontAwesomeIcon");
          return e.links.length && !e.hidden
            ? ((0, r.wg)(),
              (0, r.iD)("div", yn, [
                (0, r._)("nav", vn, [
                  ((0, r.wg)(!0),
                  (0, r.iD)(
                    r.HY,
                    null,
                    (0, r.Ko)(
                      e.links,
                      (e) => (
                        (0, r.wg)(),
                        (0, r.iD)(
                          "a",
                          {
                            key: e.label,
                            href: e.href,
                            class:
                              "flex-1 p-5 hover:text-secondary border-complementary flex justify-center",
                            "aria-label": e.aria,
                          },
                          [
                            (0, r.Wm)(
                              l,
                              { class: "w-5 h-5", icon: e.icon },
                              null,
                              8,
                              ["icon"]
                            ),
                            (0, r._)("span", zn, (0, s.zw)(e.label), 1),
                          ],
                          8,
                          xn
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]))
            : (0, r.kq)("", !0);
        }
        const Sn = (e, a) => {
          const n = () => {
            window.scrollY > a ? (e.value = !1) : (e.value = !0);
          };
          (0, r.bv)(() => {
            n(), window.addEventListener("scroll", n);
          }),
            (0, r.Ah)(() => {
              window.removeEventListener("scroll", n);
            });
        };
        var _n = (0, r.aZ)({
          name: "MobileNav",
          setup() {
            const e = (0, d.iH)(!0),
              { links: a } = ve();
            return Sn(e, 120), { links: a, hidden: e };
          },
        });
        const Wn = (0, f.Z)(_n, [
          ["render", jn],
          ["__scopeId", "data-v-15f36a68"],
        ]);
        var Dn = Wn;
        const Hn = ["aria-label"];
        function Zn(e, a, n, i, t, o) {
          const s = (0, r.up)("FontAwesomeIcon");
          return e.hidden
            ? (0, r.kq)("", !0)
            : ((0, r.wg)(),
              (0, r.iD)(
                "button",
                {
                  key: 0,
                  onClick:
                    a[0] || (a[0] = (...a) => e.scrollTop && e.scrollTop(...a)),
                  type: "button",
                  class:
                    "fixed bottom-20 lg:bottom-6 right-6 z-40 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-tertiary hover:bg-opacity-80 duration-500 animate-fade shadow-lg",
                  "aria-label": e.$t("aria.scroll-top"),
                },
                [
                  (0, r.Wm)(s, {
                    icon: "fa solid fa-chevron-up",
                    class: "text-white",
                  }),
                ],
                8,
                Hn
              ));
        }
        var Cn = (0, r.aZ)({
          name: "ScrollTop",
          setup() {
            const e = (0, d.iH)(!0);
            Sn(e, 120);
            const a = () => {
              window.scrollTo(0, 0);
            };
            return { scrollTop: a, hidden: e };
          },
        });
        const In = (0, f.Z)(Cn, [["render", Zn]]);
        var An = In,
          Tn = (0, r.aZ)({
            name: "App",
            components: {
              Footer: nn,
              Header: hn,
              Skills: Pa,
              Education: Re,
              Experience: na,
              About: je,
              MobileNav: Dn,
              ScrollTop: An,
              Hero: ba,
            },
          });
        const Ln = (0, f.Z)(Tn, [["render", o]]);
        var Fn = Ln,
          Nn = JSON.parse(
            '{"navigation":{"about":{"label":"About","aria":"Show section about me"},"experience":{"label":"Experience","aria":"Show section about experience"},"education":{"label":"Education","aria":"Show section about education"},"skills":{"label":"Skills","aria":"Show section about skills"}},"contact":{"email":{"url":"mailto:jaskolka.karol{\'@\'}gmail.com","label":"jaskolka.karol{\'@\'}gmail.com","aria":"Mail to jaskolka.karol{\'@\'}gmail.com"},"github":{"url":"https://github.com/karoljaskolka","label":"github.com/karoljaskolka","aria":"Go to Github account"},"linkedin":{"url":"https://www.linkedin.com/in/karoljaskółka/","label":"linkedin.com/in/karoljaskółka","aria":"Go to Linkedin account"}},"hero":{"greetings":"Hi, I am","fullName":"Karol Jaskółka","description":"Software engineer based in Gorzów Wielkopolski, Poland. I am focused on building the frontend part of websites and web applications with newest and the most trending frameworks.","button":"See more"},"about":{"header":"About","photo":"Photo of myself","description":"Hi, I am Karol. I have been working as a Frontend Developer for over 3 years. Moreover, I am BSc in Computer Science and MSc in Computer Engineering at Wrocław University of Science and Technology. My journey with programming has started over 8 years ago at High School."},"education":{"header":"Education","msc":{"period":"03.2021 - 07.2022","university":"Wrocław University of Science and Technology","faculty":"Faculty of Information and Communcation Technology","field":"Computer Engineering, MSc","thesis":"Thesis: Comparative analysis of classical machine learning methods and deep neural networks for facial expression recognition"},"bsc":{"period":"10.2017 - 01.2021","university":"Wrocław University of Science and Technology","faculty":"Faculty of Electronics","field":"Computer Science, BSc","thesis":"Thesis: Web application supporting project management using Angular framework"}},"experience":{"header":"Experience","synergy":{"period":"03.2023 - now","company":"Synergy Codes","span":"3+ months","position":"Software Developer","description":"Working as a Frontend Developer focused on web applications made with Angular framework."},"linkfactory":{"period":"07.2020 - 02.2023","company":"Linkfactory A/S","span":"2 years 8 months","position":"Frontend Developer","description":"In Linkfactory on daily basis I worked as a member of small team. I gained new experience in the field of website design, software architecture and development processes. For the first year and half, my main task was to build two web applications using Angular framework and afterwards their maintenance and features development. Next, I developed a web application in the Vue.js framework. I had also contact with an application built with the React.js framework. Therefore, I am familiar with any of the three most popular frontend frameworks."},"comarch":{"period":"07.2019 - 09.2019","company":"Comarch S.A.","span":"3 months","position":"Programmer Intern","description":"During internship I worked as a member of intern team. Our goal was to develop chatbot application from scratch using JavaScript language, Microsoft Bot Framework and natural language processing service called LUIS. Next step was to embed a chatbot to the Angular web application. I gained at Comarch my first commercial experience and had contact with the topic of artificial intelligence, which I explored in the following years during my master\'s studies."}},"skills":{"header":"Skills","frontend":{"header":"Frontend","frameworks":"Frameworks","basics":"Basics","tools":"Tools"},"other":{"header":"Other","backend":"Backend","tools":"Tools","hobby":"Hobby"},"period":{"years":"{number} years","year":"{number} year","months":"{number} months","month":"{number} month","months-alt":"{number} months"}},"aria":{"scroll-top":"Scroll to the top","en":"Switch language to english","pl":"Switch language to polish"}}'
          ),
          Pn = JSON.parse(
            '{"navigation":{"about":{"label":"O mnie","aria":"Pokaż sekcję o mnie"},"experience":{"label":"Doświadczenie","aria":"Pokaż sekcję o doświadczeniu"},"education":{"label":"Wykształcenie","aria":"Pokaż sekcję o doświadczeniu"},"skills":{"label":"Umiejętności","aria":"Pokaż sekcję o umiejętnościach"}},"contact":{"email":{"url":"mailto:jaskolka.karol{\'@\'}gmail.com","label":"jaskolka.karol{\'@\'}gmail.com","aria":"Napisz e-mail do jaskolka.karol{\'@\'}gmail.com"},"github":{"url":"https://github.com/karoljaskolka","label":"github.com/karoljaskolka","aria":"Przejdź do konta Github"},"linkedin":{"url":"https://www.linkedin.com/in/karoljaskółka/","label":"linkedin.com/in/karoljaskółka","aria":"Przejdź do konta Linkedin"}},"hero":{"greetings":"Cześć, jestem","fullName":"Karol Jaskółka","description":"Programista z wykształceniem informatycznym z Gorzowa Wielkopolskiego. Zajmuję się tworzeniem stron internetowych oraz aplikacji webowych z wykorzystaniem najnowszych rozwiązań.","button":"Zobacz więcej"},"about":{"header":"O mnie","photo":"Moje zdjęcie","description":"Cześć, jestem Karol. Pracuję jako Frontend Developer od ponad trzech lat. W międzyczasie uzyskałem stopień inżyniera Informatyki oraz magistra Informatyki Technicznej na Politechnice Wrocławskiej. Swoją przygodę z programowaniem rozpocząłem w trakcie nauki w liceum ponad 8 lat temu."},"education":{"header":"Wykształcenie","msc":{"period":"03.2021 - 07.2022","university":"Politechnika Wrocławska","faculty":"Wydział Informatyki i Telekomunikacji","field":"Informatyka Techniczna, Mgr","thesis":"Temat pracy magisterskiej: Analiza porównawcza klasycznych metod uczenia maszynowego i głębokich sieci neuronowych w zadaniu rozponawania emocji na twarzy"},"bsc":{"period":"10.2017 - 01.2021","university":"Politechnika Wrocławska","faculty":"Wydział Elektroniki","field":"Informatyka, Inż.","thesis":"Temat pracy inżynierskiej: Aplikacja webowa wspomagająca zarządzanie projektem z wykorzystaniem frameworka Angular"}},"experience":{"header":"Doświadczenie","synergy":{"period":"03.2023 - obecnie","company":"Synergy Codes","span":"3+ miesiące","position":"Software Developer","description":"Pracuję jako Frontend Developer specjalizujący się w aplikacjach webowych tworzonych we frameworku Angular."},"linkfactory":{"period":"07.2020 - 02.2023","company":"Linkfactory A/S","span":"2 lata 8 miesięcy","position":"Frontend Developer","description":"W Linkfactory na codzień pracowałem w zespole złożonym z kilku osób. Zdobyłem doświadczenie z zakresu projektowania i programowania witryn internetowych. Przez pierwsze półtora roku moim zadaniem było zbudowanie dwóch aplikacji webowych we frameworku Angular oraz ich utrzymanie i rozwój w późniejszym okresie. Następnie, zajmowałem się napisaniem aplikacji we frameworku Vue. Przez krótki okres czasu miałem styczność również z aplikacją zbudowaną przy pomocy frameworka React. Dzięki temu, nie jest mi obca żadna z trzech najpopularniejszych frontend\'owych technologii."},"comarch":{"period":"07.2019 - 09.2019","company":"Comarch S.A.","span":"3 mięsiące","position":"Stażysta programista","description":"W trakcie stażu pracowałem jako członek zespołu stażystów. Naszym zadaniem było zbudowanie aplikacji typu chatbot przy pomocy języka JavaScript, platformy Microsoft Bot Framework oraz usługi przetwarzania języka naturalnego LUIS. Późniejszym krokiem było dodanie chatbota do witryny internetowej napisanej we frameworku Angular. Było to moje pierwsze doświadczenie komercyjne oraz styczność z tematyką sztucznej inteligencji, którą zgłębiłem następnie podczas studiów magisterskich."}},"skills":{"header":"Umiejętności","frontend":{"header":"Frontend","frameworks":"Frameworki","basics":"Podstawy","tools":"Narzędzia"},"other":{"header":"Pozostałe","backend":"Backend","tools":"Narzędzia","hobby":"Hobby"},"period":{"years":"{number} lata","year":"{number} rok","months":"{number} miesięcy","month":"{number} miesiąc","months-alt":"{number} miesiące"}},"aria":{"scroll-top":"Przewiń do góry","en":"Zmień język na angielski","pl":"Zmień język na polski"}}'
          );
        const $n = Object.values(pn),
          En = () => {
            const e = window.localStorage.getItem("locale") || "";
            return $n.includes(e) ? e : pn.PL;
          },
          Un = (0, ye.o)({
            legacy: !1,
            locale: En(),
            fallbackLocale: pn.PL,
            globalInjection: !0,
            messages: { en: Nn, pl: Pn },
          });
        var Bn = Un,
          On = n(494),
          Mn = n(551),
          Gn = n(539);
        On.vI.add(
          Mn.rdb,
          Gn.HXv,
          Gn.mTx,
          Gn.dT$,
          Gn.hGM,
          Mn.IRt,
          Gn.t5N,
          Gn.FU$,
          Mn.Pdy,
          Mn.zhw,
          Gn.Xf_,
          Mn.GJX,
          Mn.UIj,
          Mn.dc_,
          Mn.DTC,
          Mn.D9H,
          Mn.TV_,
          Mn.xDz,
          Mn.Bmx,
          Mn.wn1,
          Mn.pX7,
          Mn.JmK,
          Gn.ILF,
          Mn.Vrw,
          Mn.iEy,
          Mn.QDZ
        ),
          (0, i.ri)(Fn)
            .use(Bn)
            .component("FontAwesomeIcon", t.GN)
            .mount("#app");
      },
    },
    a = {};
  function n(i) {
    var t = a[i];
    if (void 0 !== t) return t.exports;
    var r = (a[i] = { exports: {} });
    return e[i](r, r.exports, n), r.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (a, i, t, r) {
        if (!i) {
          var o = 1 / 0;
          for (d = 0; d < e.length; d++) {
            (i = e[d][0]), (t = e[d][1]), (r = e[d][2]);
            for (var s = !0, l = 0; l < i.length; l++)
              (!1 & r || o >= r) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](i[l]);
              })
                ? i.splice(l--, 1)
                : ((s = !1), r < o && (o = r));
            if (s) {
              e.splice(d--, 1);
              var c = t();
              void 0 !== c && (a = c);
            }
          }
          return a;
        }
        r = r || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
        e[d] = [i, t, r];
      };
    })(),
    (function () {
      n.d = function (e, a) {
        for (var i in a)
          n.o(a, i) &&
            !n.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: a[i] });
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a);
      };
    })(),
    (function () {
      var e = { 143: 0 };
      n.O.j = function (a) {
        return 0 === e[a];
      };
      var a = function (a, i) {
          var t,
            r,
            o = i[0],
            s = i[1],
            l = i[2],
            c = 0;
          if (
            o.some(function (a) {
              return 0 !== e[a];
            })
          ) {
            for (t in s) n.o(s, t) && (n.m[t] = s[t]);
            if (l) var d = l(n);
          }
          for (a && a(i); c < o.length; c++)
            (r = o[c]), n.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return n.O(d);
        },
        i = (self["webpackChunkportfolio"] =
          self["webpackChunkportfolio"] || []);
      i.forEach(a.bind(null, 0)), (i.push = a.bind(null, i.push.bind(i)));
    })();
  var i = n.O(void 0, [998], function () {
    return n(518);
  });
  i = n.O(i);
})();
//# sourceMappingURL=app.41473617.js.map
