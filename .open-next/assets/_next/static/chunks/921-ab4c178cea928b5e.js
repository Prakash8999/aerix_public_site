"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [921],
  {
    142: (e, t, s) => {
      s.d(t, { A: () => p });
      var a = s(5155),
        r = s(2115),
        l = s(5229),
        i = s(5299),
        n = s(7003),
        o = s(6170),
        d = s(235),
        c = s(7507),
        m = s(4916),
        u = s(8171);
      let p = (e) => {
        let { isOpen: t, onClose: s } = e,
          { toast: p } = (0, u.dj)(),
          [h, x] = (0, r.useState)(!1),
          [f, g] = (0, r.useState)({
            name: "",
            businessName: "",
            businessType: "",
            email: "",
            phone: "",
            lowSpeed: !1,
            highSpeed: !1,
            honeypot: "",
          }),
          b = async (e) => {
            if (
              (e.preventDefault(),
              f.name.trim().length < 2
                ? (p({
                    title: "Invalid Name",
                    description: "Enter a valid full name",
                  }),
                  !1)
                : f.businessName.trim().length < 2
                  ? (p({
                      title: "Invalid Business Name",
                      description: "Enter a valid business name",
                    }),
                    !1)
                  : f.businessType
                    ? /^\S+@\S+\.\S+$/.test(f.email)
                      ? /^[\+]?[1-9][\d]{9,14}$/.test(f.phone)
                        ? !!f.lowSpeed ||
                          !!f.highSpeed ||
                          (p({
                            title: "Selection Required",
                            description: "Select at least one vehicle category",
                            variant: "destructive",
                          }),
                          !1)
                        : (p({
                            title: "Invalid Phone Number",
                            description: "Enter a valid phone number",
                          }),
                          !1)
                      : (p({
                          title: "Invalid Email",
                          description: "Enter a valid email",
                        }),
                        !1)
                    : (p({
                        title: "Business Type Required",
                        description: "Select a business type",
                      }),
                      !1))
            ) {
              x(!0);
              try {
                let e = {
                    type: "dealership",
                    name: f.name,
                    businessName: f.businessName,
                    businessType: f.businessType,
                    email: f.email,
                    phone: f.phone,
                    lowSpeed: f.lowSpeed,
                    highSpeed: f.highSpeed,
                    honeypot: f.honeypot,
                  },
                  t = await fetch(
                    "".concat("http://localhost:3001", "/api/email/send"),
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(e),
                    },
                  ),
                  a = await t.json();
                if (!t.ok) {
                  (p({
                    title: "Failed",
                    description: a.message || "An error occurred",
                  }),
                    x(!1));
                  return;
                }
                (p({
                  title: "Application Submitted!",
                  description:
                    "We’ve sent a confirmation email. Our team will contact you shortly.",
                }),
                  g({
                    name: "",
                    businessName: "",
                    businessType: "",
                    email: "",
                    phone: "",
                    lowSpeed: !1,
                    highSpeed: !1,
                    honeypot: "",
                  }),
                  s());
              } catch (e) {
                p({
                  title: "Error",
                  description: "Something went wrong. Try again.",
                });
              } finally {
                x(!1);
              }
            }
          };
        return ((0, r.useEffect)(() => {
          let e = (e) => {
            "Escape" === e.key && s();
          };
          if (t) {
            document.addEventListener("keydown", e);
            let t = window.scrollY;
            ((document.body.style.position = "fixed"),
              (document.body.style.top = "-".concat(t, "px")),
              (document.body.style.width = "100%"));
          }
          return () => {
            if ((document.removeEventListener("keydown", e), t)) {
              let e = document.body.style.top;
              ((document.body.style.position = ""),
                (document.body.style.top = ""),
                (document.body.style.width = ""),
                window.scrollTo(0, -1 * parseInt(e || "0")));
            }
          };
        }, [t, s]),
        t)
          ? (0, a.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-hidden",
              children: (0, a.jsxs)("div", {
                className:
                  "glass rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "sticky top-0 glass border-b border-border px-6 py-4 flex items-center justify-between",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-2xl font-bold gradient-text",
                        children: "\uD83D\uDE97 Dealership Application Form",
                      }),
                      (0, a.jsx)("button", {
                        onClick: s,
                        className:
                          "text-muted-foreground hover:text-foreground",
                        children: (0, a.jsx)(l.A, { size: 24 }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("form", {
                    onSubmit: b,
                    className: "p-6 space-y-6",
                    children: [
                      (0, a.jsx)("input", {
                        type: "text",
                        value: f.honeypot,
                        onChange: (e) => g({ ...f, honeypot: e.target.value }),
                        className: "hidden",
                        autoComplete: "off",
                        tabIndex: -1,
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-lg font-semibold",
                            children: "1️⃣ Basic Information",
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)(d.J, {
                                children: "Full Name / Owner's Name",
                              }),
                              (0, a.jsx)(o.p, {
                                placeholder: "e.g., Rahul Sharma",
                                value: f.name,
                                onChange: (e) =>
                                  g({ ...f, name: e.target.value }),
                                required: !0,
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)(d.J, {
                                children: "Business Name / Shop Name",
                              }),
                              (0, a.jsx)(o.p, {
                                placeholder: "e.g., Sharma Motors",
                                value: f.businessName,
                                onChange: (e) =>
                                  g({ ...f, businessName: e.target.value }),
                                required: !0,
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)(d.J, { children: "Business Type" }),
                              (0, a.jsxs)(c.l6, {
                                value: f.businessType,
                                onValueChange: (e) =>
                                  g({ ...f, businessType: e }),
                                required: !0,
                                children: [
                                  (0, a.jsx)(c.bq, {
                                    children: (0, a.jsx)(c.yv, {
                                      placeholder: "Select business type",
                                    }),
                                  }),
                                  (0, a.jsxs)(c.gC, {
                                    children: [
                                      (0, a.jsx)(c.eb, {
                                        value: "ev-showroom",
                                        children: "EV Showroom",
                                      }),
                                      (0, a.jsx)(c.eb, {
                                        value: "multi-brand",
                                        children: "Multi-brand Showroom",
                                      }),
                                      (0, a.jsx)(c.eb, {
                                        value: "service-center",
                                        children: "Service Center",
                                      }),
                                      (0, a.jsx)(c.eb, {
                                        value: "new-business",
                                        children: "New Business",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)(d.J, { children: "Email Address" }),
                              (0, a.jsx)(o.p, {
                                type: "email",
                                placeholder: "e.g., rahulsharma@gmail.com",
                                value: f.email,
                                onChange: (e) =>
                                  g({ ...f, email: e.target.value }),
                                required: !0,
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)(d.J, { children: "Phone Number" }),
                              (0, a.jsx)(o.p, {
                                type: "tel",
                                placeholder: "e.g., +91 98765 43210",
                                value: f.phone,
                                onChange: (e) =>
                                  g({ ...f, phone: e.target.value }),
                                required: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-lg font-semibold",
                            children: "2️⃣ Vehicle Category Selection",
                          }),
                          (0, a.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors",
                                children: [
                                  (0, a.jsx)(m.S, {
                                    checked: f.lowSpeed,
                                    onCheckedChange: (e) =>
                                      g({ ...f, lowSpeed: e }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex-1",
                                    children: [
                                      (0, a.jsx)(d.J, {
                                        className: "font-medium cursor-pointer",
                                        children: "Low-Speed EVs (≤ 25 km/h)",
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children:
                                          "No license or registration required",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors",
                                children: [
                                  (0, a.jsx)(m.S, {
                                    checked: f.highSpeed,
                                    onCheckedChange: (e) =>
                                      g({ ...f, highSpeed: e }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex-1",
                                    children: [
                                      (0, a.jsx)(d.J, {
                                        className: "font-medium cursor-pointer",
                                        children: "High-Speed EVs (≥ 45 km/h)",
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children:
                                          "License and registration required",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "pt-4",
                        children: (0, a.jsx)(n.$, {
                          type: "submit",
                          size: "lg",
                          className: "w-full",
                          disabled: h,
                          children: h
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(i.A, {
                                    className: "mr-2 h-4 w-4 animate-spin",
                                  }),
                                  " Submitting...",
                                ],
                              })
                            : "✅ Apply for Dealership",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : null;
      };
    },
    235: (e, t, s) => {
      s.d(t, { J: () => d });
      var a = s(5155),
        r = s(2115),
        l = s(489),
        i = s(3101),
        n = s(5016);
      let o = (0, i.F)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        ),
        d = r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(l.b, {
            ref: t,
            className: (0, n.cn)(o(), s),
            ...r,
          });
        });
      d.displayName = l.b.displayName;
    },
    1651: (e, t, s) => {
      s.d(t, { A: () => g });
      var a = s(5155),
        r = s(7003),
        l = s(6170),
        i = s(235),
        n = s(7507),
        o = s(2115),
        d = s(7650),
        c = s(5239),
        m = s(8720),
        u = s(5229),
        p = s(5299),
        h = s(5917),
        x = s(5016);
      let f = [
        {
          id: "1",
          name: "Aerix Ninja Mini",
          colors: ["Red", "White", "Grey", "Peacock Blue", "Black"],
          images: {
            Grey: "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_enduro_grey_large.png",
            "Peacock Blue":
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_enduro_blue_large.png",
            White:
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_enduro_white_large.png",
          },
        },
        {
          id: "2",
          name: "Aerix Sharvil",
          colors: ["Red", "White", "Grey", "Peacock Blue", "Black"],
          images: {
            Grey: "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_glide_grey_large.png",
            "Peacock Blue":
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_glide_blue_large.png",
            White:
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_glide_white_large.png",
          },
        },
        {
          id: "3",
          name: "Aerix Wolf 2.0",
          colors: ["Orange", "White", "Grey", "Peacock Blue", "Black"],
          images: {
            Orange:
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_prime_orange_large.png",
            Grey: "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_prime_grey_large.png",
            White:
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_prime_white_large.png",
          },
        },
        {
          id: "4",
          name: "AERIX RANGER",
          colors: ["Grey", "White", "Black", "Peacock Blue"],
          images: {
            Grey: "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_ranger_grey_large.png",
            White:
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_ranger_white_large.png",
            Black:
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_range_black_large.png",
          },
        },
        {
          id: "5",
          name: "Aerix GTR++",
          colors: ["Red", "White", "Grey", "Peacock Blue", "Black"],
          images: {
            Grey: "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_urban_grey_large.png",
            White:
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_urban_white_large.png",
          },
        },
        {
          id: "6",
          name: "Aerix Aurra Pro",
          colors: ["Red", "White", "Grey", "Metallic Gold", "Black"],
          images: {
            White:
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_titan_white_large.png",
            "Metallic Gold":
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_titan_gold_large.png",
          },
        },
        {
          id: "7",
          name: "Aerix Loader",
          colors: ["Black", "White", "Grey"],
          images: {
            Black:
              "https://pub-81175f420062419ca38eb19499a88ee5.r2.dev/images/aerix_volt_black_large.png",
          },
        },
      ];
      function g(e) {
        let {
            open: t,
            onOpenChange: s,
            preSelectedModel: g = "",
            preSelectedColor: b = "",
            isEnquiry: y = !1,
          } = e,
          [v, j] = (0, o.useState)(!1),
          [N, w] = (0, o.useState)({
            name: "",
            phone: "",
            email: "",
            product: g,
            color: b,
            pincode: "",
            whatsappUpdates: !1,
            honeypot: "",
          }),
          [S, k] = (0, o.useState)("");
        ((0, o.useEffect)(() => {
          g && w((e) => ({ ...e, product: g, color: b || e.color }));
        }, [g, b]),
          (0, o.useEffect)(() => {
            let e = f.find((e) => e.name === N.product);
            if (e) {
              let t = e.images[N.color];
              if (t) k(t);
              else {
                let t = Object.keys(e.images)[0];
                t
                  ? (k(e.images[t]), w((e) => ({ ...e, color: t })))
                  : (k(""), w((e) => ({ ...e, color: "" })));
              }
            } else (k(""), w((e) => ({ ...e, color: "" })));
          }, [N.product]),
          (0, o.useEffect)(() => {
            let e = (e) => {
              "Escape" === e.key && s(!1);
            };
            if (t) {
              document.addEventListener("keydown", e);
              let t = window.scrollY;
              ((document.body.style.position = "fixed"),
                (document.body.style.top = "-".concat(t, "px")),
                (document.body.style.width = "100%"));
            }
            return () => {
              if ((document.removeEventListener("keydown", e), t)) {
                let e = document.body.style.top;
                ((document.body.style.position = ""),
                  (document.body.style.top = ""),
                  (document.body.style.width = ""),
                  window.scrollTo(0, -1 * parseInt(e || "0")));
              }
            };
          }, [t, s]));
        let A = async (e) => {
          if (
            (e.preventDefault(),
            N.name.trim().length < 2
              ? (m.oR.error("Please enter a valid name."), !1)
              : /^[\+]?[1-9][\d]{9,14}$/.test(N.phone)
                ? y && "" !== N.email.trim() && !/^\S+@\S+\.\S+$/.test(N.email)
                  ? (m.oR.error("Enter a valid email."), !1)
                  : N.product
                    ? !!/^\d{5,6}$/.test(N.pincode) ||
                      (m.oR.error("Enter a valid pincode."), !1)
                    : (m.oR.error("Please select a vehicle model."), !1)
                : (m.oR.error("Enter a valid phone number."), !1))
          ) {
            j(!0);
            try {
              let e = {
                  type: "testride",
                  name: N.name,
                  phone: N.phone,
                  email: N.email || void 0,
                  product: N.product,
                  color: N.color,
                  pincode: N.pincode,
                  whatsappUpdates: N.whatsappUpdates,
                  isEnquiry: y,
                  honeypot: N.honeypot,
                },
                t = await fetch(
                  "".concat("http://localhost:3001", "/api/email/send"),
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(e),
                  },
                ),
                a = await t.json();
              if (!t.ok)
                return void m.oR.error(a.message || "Something went wrong.");
              (m.oR.success(
                y
                  ? "Thank you! Our team will contact you soon."
                  : "Your test ride request has been submitted!",
              ),
                localStorage.setItem("aerixenergy-interest-submitted", "true"),
                s(!1),
                w({
                  name: "",
                  phone: "",
                  email: "",
                  product: g,
                  color: b,
                  pincode: "",
                  whatsappUpdates: !1,
                  honeypot: "",
                }));
            } catch (e) {
              m.oR.error("Failed to submit. Please try again.");
            } finally {
              j(!1);
            }
          }
        };
        if (!t) return null;
        let E = f.find((e) => e.name === N.product);
        return (0, d.createPortal)(
          (0, a.jsx)("div", {
            className:
              "fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",
            children: (0, a.jsxs)("div", {
              className:
                "bg-white rounded-[40px] w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300",
              children: [
                (0, a.jsxs)("div", {
                  className: "w-full md:w-1/2 flex flex-col h-full bg-white",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center justify-between px-6 py-5 border-b border-gray-100",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("h2", {
                              className: "text-2xl font-bold text-gray-900",
                              children: y ? "Enquire Now" : "Book Test Ride",
                            }),
                            (0, a.jsx)("p", {
                              className: "text-sm text-gray-500 mt-1",
                              children: y
                                ? "Get in touch with our team"
                                : "Experience it before you buy it",
                            }),
                          ],
                        }),
                        (0, a.jsx)("button", {
                          onClick: () => s(!1),
                          className:
                            "p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-900 transition-colors",
                          children: (0, a.jsx)(u.A, { size: 20 }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "p-6 md:p-8 overflow-y-auto flex-1",
                      children: (0, a.jsxs)("form", {
                        onSubmit: A,
                        className: "space-y-5",
                        children: [
                          (0, a.jsx)("input", {
                            type: "text",
                            value: N.honeypot,
                            onChange: (e) =>
                              w({ ...N, honeypot: e.target.value }),
                            className: "hidden",
                            tabIndex: -1,
                            autoComplete: "off",
                          }),
                          (0, a.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, a.jsx)(i.J, {
                                    className: "text-gray-700",
                                    children: "Name",
                                  }),
                                  (0, a.jsx)(l.p, {
                                    placeholder: "Enter your full name",
                                    value: N.name,
                                    onChange: (e) =>
                                      w({ ...N, name: e.target.value }),
                                    className:
                                      "bg-gray-50 border-gray-200 focus:bg-white transition-all duration-300 h-11",
                                    required: !0,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, a.jsx)(i.J, {
                                    className: "text-gray-700",
                                    children: "Phone Number",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className:
                                          "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium",
                                        children: "+91",
                                      }),
                                      (0, a.jsx)(l.p, {
                                        type: "tel",
                                        placeholder: "98765 43210",
                                        value: N.phone,
                                        onChange: (e) =>
                                          w({ ...N, phone: e.target.value }),
                                        className:
                                          "pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-all duration-300 h-11",
                                        required: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, a.jsx)(i.J, {
                                    className: "text-gray-700",
                                    children: "Vehicle Model",
                                  }),
                                  (0, a.jsxs)(n.l6, {
                                    value: N.product,
                                    onValueChange: (e) =>
                                      w({ ...N, product: e }),
                                    required: !0,
                                    children: [
                                      (0, a.jsx)(n.bq, {
                                        className:
                                          "bg-gray-50 border-gray-200 focus:bg-white h-11",
                                        children: (0, a.jsx)(n.yv, {
                                          placeholder: "Select a model",
                                        }),
                                      }),
                                      (0, a.jsx)(n.gC, {
                                        children: f.map((e) =>
                                          (0, a.jsx)(
                                            n.eb,
                                            { value: e.name, children: e.name },
                                            e.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, a.jsx)(i.J, {
                                    className: "text-gray-700",
                                    children: "Pincode",
                                  }),
                                  (0, a.jsx)(l.p, {
                                    placeholder: "Enter your city pincode",
                                    value: N.pincode,
                                    onChange: (e) =>
                                      w({ ...N, pincode: e.target.value }),
                                    className:
                                      "bg-gray-50 border-gray-200 focus:bg-white transition-all duration-300 h-11",
                                    maxLength: 6,
                                    required: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "pt-4",
                            children: [
                              (0, a.jsx)(r.$, {
                                type: "submit",
                                className:
                                  "w-full h-12 text-base font-medium rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300",
                                size: "lg",
                                disabled: v,
                                children: v
                                  ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)(p.A, {
                                          className:
                                            "mr-2 h-5 w-5 animate-spin",
                                        }),
                                        "Submitting Request...",
                                      ],
                                    })
                                  : (0, a.jsx)(a.Fragment, {
                                      children: y
                                        ? "Submit Enquiry"
                                        : "Confirm Test Ride",
                                    }),
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-xs text-center text-gray-400 mt-4",
                                children:
                                  "By clicking submit, you agree to our Terms and Privacy Policy.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "hidden md:flex md:w-1/2 bg-neutral-100 relative items-center justify-center p-8 overflow-hidden",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "relative z-10 w-full flex flex-col items-center",
                      children: [
                        S
                          ? (0, a.jsx)("div", {
                              className: "relative w-full h-[350px]",
                              children: (0, a.jsx)(c.default, {
                                src: S,
                                alt: N.product || "Product",
                                fill: !0,
                                className:
                                  "object-contain drop-shadow-2xl transition-all duration-700 ease-out hover:scale-105 rounded-2xl",
                                priority: !0,
                                quality: 85,
                                sizes: "(max-width: 768px) 0vw, 50vw",
                              }),
                            })
                          : (0, a.jsx)("div", {
                              className:
                                "w-full h-64 flex items-center justify-center text-neutral-400 border-2 border-dashed border-neutral-300 rounded-xl",
                              children: (0, a.jsx)("span", {
                                className: "text-lg font-medium",
                                children: "Select a model to view",
                              }),
                            }),
                        E &&
                          (0, a.jsxs)("div", {
                            className: "mt-8",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-sm font-semibold text-neutral-500 mb-3 text-center uppercase tracking-wider",
                                children: "Available Colors",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "flex flex-wrap justify-center gap-3",
                                children: [...E.colors]
                                  .sort((e, t) => {
                                    let s = !!E.images[e],
                                      a = !!E.images[t];
                                    return s && !a ? -1 : !s && a ? 1 : 0;
                                  })
                                  .map((e) => {
                                    let t = E.images[e],
                                      s = N.color === e;
                                    return (0, a.jsxs)(
                                      "div",
                                      {
                                        className: "group relative",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: (0, x.cn)(
                                              "w-8 h-8 rounded-full shadow-sm border border-black/10 cursor-pointer transition-all duration-300 hover:scale-110 flex items-center justify-center",
                                              s
                                                ? "ring-2 ring-primary ring-offset-2 scale-110"
                                                : "hover:ring-2 hover:ring-primary/50",
                                              t
                                                ? "opacity-100"
                                                : "opacity-40 cursor-not-allowed",
                                            ),
                                            style: {
                                              backgroundColor:
                                                {
                                                  Red: "#EF4444",
                                                  White: "#F9FAFB",
                                                  Grey: "#4B5563",
                                                  "Peacock Blue": "#06b6d4",
                                                  Black: "#000000",
                                                  Orange: "#F97316",
                                                  "Metallic Gold": "#EAB308",
                                                }[e] || "#E5E5E5",
                                            },
                                            onClick: () => {
                                              t &&
                                                (k(t),
                                                w((t) => ({ ...t, color: e })));
                                            },
                                            title: e,
                                            children:
                                              s &&
                                              (0, a.jsx)(h.A, {
                                                className: (0, x.cn)(
                                                  "w-4 h-4",
                                                  [
                                                    "White",
                                                    "Yellow",
                                                    "Gold",
                                                    "Metallic Gold",
                                                    "Orange",
                                                  ].includes(e)
                                                    ? "text-black"
                                                    : "text-white",
                                                ),
                                              }),
                                          }),
                                          (0, a.jsx)("span", {
                                            className:
                                              "absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",
                                            children: e,
                                          }),
                                        ],
                                      },
                                      e,
                                    );
                                  }),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "absolute bottom-6 left-6 z-10",
                      children: [
                        (0, a.jsx)("h3", {
                          className: "text-2xl font-bold text-neutral-900",
                          children: E ? E.name : "Choose Your Ride",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-neutral-500 text-sm mt-1",
                          children: "Experience the future of mobility",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          document.body,
        );
      }
    },
    1725: (e, t, s) => {
      s.d(t, { A: () => h });
      var a = s(5155),
        r = s(2115),
        l = s(63),
        i = s(5239),
        n = s(7003),
        o = s(6497),
        d = s(4114),
        c = s(5229),
        m = s(9540),
        u = s(142),
        p = s(1651);
      let h = (e) => {
        let { forceTransparent: t = !1 } = e,
          [s, h] = (0, r.useState)(!1),
          [x, f] = (0, r.useState)(!1),
          [g, b] = (0, r.useState)(!1),
          [y, v] = (0, r.useState)(!1),
          j = (0, l.usePathname)(),
          N = "/" === j || t,
          w = s || !N;
        (0, r.useEffect)(() => {
          let e = () => {
            let e = N ? window.innerHeight - 80 : 20;
            h(window.scrollY > e);
          };
          return (
            e(),
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, [j, N]);
        let S = [
          { label: "Products", href: "/#products" },
          { label: "Features", href: "/#features" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ];
        return (0, a.jsxs)("header", {
          className:
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent "
              .concat(
                w
                  ? "bg-white/80 backdrop-blur-md border-white/10 py-3 shadow-sm"
                  : "bg-transparent py-2 md:py-6",
                " ",
              )
              .concat(w || x ? "text-foreground" : "text-white"),
          children: [
            (0, a.jsx)("div", {
              className: "container-custom relative z-50",
              children: (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, a.jsxs)("a", {
                    href: "/",
                    className: "flex items-center gap-3 group",
                    children: [
                      (0, a.jsx)("div", {
                        className: "relative h-10 w-10 sm:h-12 sm:w-12",
                        children: (0, a.jsx)(i.default, {
                          src: "/logo.jpg",
                          alt: "Aerix Energy",
                          fill: !0,
                          className:
                            "rounded-full object-cover transition-transform duration-300 group-hover:scale-105",
                          priority: !0,
                          quality: 90,
                          sizes: "(max-width: 640px) 40px, 48px",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "transition-opacity duration-300 ".concat(
                          w || x ? "opacity-100" : "opacity-90",
                        ),
                        children: (0, a.jsx)("span", {
                          className: "text-xl font-bold tracking-tight",
                          children: "Aerix",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("nav", {
                    className: "hidden lg:flex items-center gap-8 ".concat(
                      w ? "text-muted-foreground" : "text-white/80",
                    ),
                    children: S.map((e) =>
                      (0, a.jsx)(
                        "a",
                        {
                          href: e.href,
                          className:
                            "text-sm font-medium hover:text-primary transition-colors",
                          onClick: (t) => {
                            if (
                              "/" !== location.pathname &&
                              e.href.startsWith("/#")
                            );
                            else if (e.href.startsWith("/#")) {
                              t.preventDefault();
                              let s = document.querySelector(
                                e.href.substring(1),
                              );
                              null == s ||
                                s.scrollIntoView({ behavior: "smooth" });
                            }
                          },
                          children: e.label,
                        },
                        e.label,
                      ),
                    ),
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                      (0, a.jsx)(n.$, {
                        size: "sm",
                        onClick: () => v(!0),
                        className:
                          "rounded-full px-6 font-medium transition-all duration-300 ".concat(
                            w || x
                              ? ""
                              : "bg-white text-black hover:bg-white/90",
                          ),
                        children: "Book Test Ride",
                      }),
                      (0, a.jsx)("div", {
                        className: "lg:hidden",
                        children: (0, a.jsx)("button", {
                          className: "p-2 transition-colors",
                          onClick: () => f(!x),
                          "aria-label": "Toggle menu",
                          children: x
                            ? (0, a.jsx)(c.A, { size: 24 })
                            : (0, a.jsx)(m.A, { size: 24 }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)(o.N, {
              children:
                x &&
                (0, a.jsx)(d.P.div, {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "100vh" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  className:
                    "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6",
                  children: (0, a.jsxs)("div", {
                    className: "flex flex-col space-y-6",
                    children: [
                      S.map((e) =>
                        (0, a.jsx)(
                          "a",
                          {
                            href: e.href,
                            className:
                              "text-2xl font-medium text-foreground/80 hover:text-primary",
                            onClick: () => f(!1),
                            children: e.label,
                          },
                          e.label,
                        ),
                      ),
                      (0, a.jsx)("hr", { className: "border-border/50" }),
                      (0, a.jsx)(n.$, {
                        size: "lg",
                        className: "w-full text-lg py-6",
                        onClick: () => {
                          (v(!0), f(!1));
                        },
                        children: "Book Test Ride",
                      }),
                      (0, a.jsx)(n.$, {
                        size: "lg",
                        variant: "outline",
                        className: "w-full text-lg py-6",
                        onClick: () => {
                          (b(!0), f(!1));
                        },
                        children: "Become a Dealer",
                      }),
                    ],
                  }),
                }),
            }),
            (0, a.jsx)(u.A, { isOpen: g, onClose: () => b(!1) }),
            (0, a.jsx)(p.A, { open: y, onOpenChange: v, isEnquiry: !1 }),
          ],
        });
      };
    },
    3397: (e, t, s) => {
      s.d(t, { A: () => N });
      var a = s(5155),
        r = s(3155),
        l = s(7378),
        i = s(7161),
        n = s(64),
        o = s(7333),
        d = s(2115),
        c = s(142),
        m = s(1651),
        u = s(7003),
        p = s(5229);
      let h = (e) => {
        let { isOpen: t, onClose: s } = e;
        return t
          ? ((0, d.useEffect)(() => {
              let e = (e) => {
                "Escape" === e.key && s();
              };
              return (
                document.addEventListener("keydown", e),
                () => {
                  document.removeEventListener("keydown", e);
                }
              );
            }, [s]),
            (0, a.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm",
              children: (0, a.jsxs)("div", {
                className:
                  "glass rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "sticky top-0 glass border-b border-border px-6 py-4 flex items-center justify-between",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-2xl font-bold gradient-text",
                        children: "\uD83C\uDFEA Service Centers",
                      }),
                      (0, a.jsx)("button", {
                        onClick: s,
                        className:
                          "text-muted-foreground hover:text-foreground",
                        children: (0, a.jsx)(p.A, { size: 24 }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "p-6 space-y-6",
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-muted-foreground",
                        children:
                          "Visit our authorized service centers for maintenance, repairs, and support for all Aerix Energy electric vehicles.",
                      }),
                      (0, a.jsx)("div", {
                        className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                        children: [
                          {
                            name: "Aerix Energy Service Center - Mumbai",
                            address:
                              "Office Number 205, Regency Plaza,Shanti Nagar, Nr Waldhuni Bridge,Ulhasnagar Mumbai 421004",
                            phone: "+91 98765 43210",
                            hours: "Mon-Sat: 9:00 AM - 7:00 PM",
                          },
                          {
                            name: "Aerix Energy Service Center - Delhi",
                            address:
                              "456 Electric Avenue, Connaught Place, New Delhi - 110001",
                            phone: "+91 98765 43211",
                            hours: "Mon-Sat: 9:00 AM - 7:00 PM",
                          },
                          {
                            name: "Aerix Energy Service Center - Bangalore",
                            address:
                              "789 Battery Street, Koramangala, Bangalore - 560034",
                            phone: "+91 98765 43212",
                            hours: "Mon-Sat: 9:00 AM - 7:00 PM",
                          },
                        ].map((e, t) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className: "glass p-6 rounded-lg space-y-4",
                              children: [
                                (0, a.jsx)("h3", {
                                  className: "font-semibold text-lg",
                                  children: e.name,
                                }),
                                (0, a.jsxs)("div", {
                                  className: "space-y-2 text-sm",
                                  children: [
                                    (0, a.jsxs)("p", {
                                      className: "text-muted-foreground",
                                      children: [
                                        (0, a.jsx)("strong", {
                                          children: "Address:",
                                        }),
                                        (0, a.jsx)("br", {}),
                                        e.address,
                                      ],
                                    }),
                                    (0, a.jsxs)("p", {
                                      className: "text-muted-foreground",
                                      children: [
                                        (0, a.jsx)("strong", {
                                          children: "Phone:",
                                        }),
                                        " ",
                                        e.phone,
                                      ],
                                    }),
                                    (0, a.jsxs)("p", {
                                      className: "text-muted-foreground",
                                      children: [
                                        (0, a.jsx)("strong", {
                                          children: "Hours:",
                                        }),
                                        " ",
                                        e.hours,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(u.$, {
                                  size: "sm",
                                  className: "w-full",
                                  children: "Get Directions",
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                      (0, a.jsx)("div", {
                        className: "pt-4 border-t border-border",
                        children: (0, a.jsx)("p", {
                          className:
                            "text-sm text-muted-foreground text-center",
                          children:
                            "Service available for all electric bikes and scooters. Walk-ins welcome!",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }))
          : null;
      };
      var x = s(3664),
        f = s(9141),
        g = s(3842);
      let b = (e) => {
        let { isOpen: t, onClose: s } = e;
        return t
          ? ((0, d.useEffect)(() => {
              let e = (e) => {
                "Escape" === e.key && s();
              };
              return (
                document.addEventListener("keydown", e),
                () => {
                  document.removeEventListener("keydown", e);
                }
              );
            }, [s]),
            (0, a.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm",
              children: (0, a.jsxs)("div", {
                className:
                  "glass rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "sticky top-0 glass border-b border-border px-6 py-4 flex items-center justify-between",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-2xl font-bold gradient-text",
                        children: "\uD83D\uDCDE Contact Us",
                      }),
                      (0, a.jsx)("button", {
                        onClick: s,
                        className:
                          "text-muted-foreground hover:text-foreground",
                        children: (0, a.jsx)(p.A, { size: 24 }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "p-6 space-y-6",
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-muted-foreground",
                        children:
                          "Get in touch with our sales and service team for all your Aerix Energy needs.",
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "glass p-6 rounded-lg space-y-4",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, a.jsx)(x.A, {
                                    className: "w-6 h-6 text-primary",
                                  }),
                                  (0, a.jsx)("h3", {
                                    className: "font-semibold text-lg",
                                    children: "Sales & Service",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      (0, a.jsx)(x.A, {
                                        className:
                                          "w-5 h-5 text-muted-foreground",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "text-sm",
                                        children: "Sales@aerixenergy.in",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      (0, a.jsx)(f.A, {
                                        className:
                                          "w-5 h-5 text-muted-foreground",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "text-sm",
                                        children: "+91 7770000597",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "glass p-6 rounded-lg space-y-4",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, a.jsx)(g.A, {
                                    className: "w-6 h-6 text-primary",
                                  }),
                                  (0, a.jsx)("h3", {
                                    className: "font-semibold text-lg",
                                    children: "Service Information",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("p", {
                                className: "text-sm text-muted-foreground",
                                children:
                                  "Service for any electric bike is available here. We provide comprehensive maintenance, repairs, and support for all electric vehicles, not just Aerix Energy models. We also supply high-quality spare parts for all types of e-bikes.",
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium",
                                    children: "Battery Replacement",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium",
                                    children: "Motor Repair",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium",
                                    children: "Software Updates",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium",
                                    children: "General Maintenance",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium",
                                    children:
                                      "Spare Parts for All E-Bike Brands",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "glass p-6 rounded-lg space-y-4",
                            children: [
                              (0, a.jsx)("h3", {
                                className: "font-semibold text-lg",
                                children: "Business Hours",
                              }),
                              (0, a.jsxs)("div", {
                                className: "space-y-2 text-sm",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                      (0, a.jsx)("span", {
                                        children: "Monday - Saturday:",
                                      }),
                                      (0, a.jsx)("span", {
                                        children: "9:00 AM - 7:00 PM",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                      (0, a.jsx)("span", {
                                        children: "Sunday:",
                                      }),
                                      (0, a.jsx)("span", {
                                        children: "10:00 AM - 4:00 PM",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "pt-4 border-t border-border",
                        children: (0, a.jsx)("p", {
                          className:
                            "text-sm text-muted-foreground text-center",
                          children:
                            "We typically respond within 24 hours. For urgent service requests, please call directly.",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }))
          : null;
      };
      var y = s(4679);
      let v = (e) => {
        let { isOpen: t, onClose: s } = e;
        return (0, a.jsx)(y.lG, {
          open: t,
          onOpenChange: s,
          children: (0, a.jsxs)(y.Cf, {
            children: [
              (0, a.jsx)(y.c7, {
                children: (0, a.jsx)(y.L3, {
                  children: "Warranty Information",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "space-y-4 py-2",
                children: [
                  (0, a.jsx)("p", {
                    className: "text-sm text-muted-foreground",
                    children:
                      "We provide the following warranty coverage for our scooters:",
                  }),
                  (0, a.jsxs)("div", {
                    className: "bg-muted/20 p-4 rounded",
                    children: [
                      (0, a.jsx)("p", {
                        className: "font-semibold",
                        children: "Battery Warranty",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-sm",
                        children:
                          "3 years warranty on the lithium battery against manufacturing defects.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "bg-muted/20 p-4 rounded",
                    children: [
                      (0, a.jsx)("p", {
                        className: "font-semibold",
                        children: "Overall Product Warranty",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-sm",
                        children:
                          "1 year warranty on the scooter (parts and labour) from the date of purchase.",
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className: "text-xs text-muted-foreground",
                    children:
                      "Warranty terms and conditions apply. For full details, contact our support or visit a service center.",
                  }),
                ],
              }),
              (0, a.jsx)(y.Es, {
                children: (0, a.jsx)(u.$, { onClick: s, children: "Close" }),
              }),
            ],
          }),
        });
      };
      var j = s(63);
      let N = () => {
        let [e, t] = (0, d.useState)(!1),
          [s, u] = (0, d.useState)(!1),
          [p, x] = (0, d.useState)(!1),
          [f, g] = (0, d.useState)(!1),
          [y, N] = (0, d.useState)(!1),
          w = (0, j.useRouter)(),
          S = [
            {
              title: "Products",
              links: [
                {
                  label: "Aerix Ninja Mini",
                  action: () => w.push("/product/1"),
                },
                { label: "Aerix Sharvil", action: () => w.push("/product/2") },
                { label: "Aerix Wolf 2.0", action: () => w.push("/product/3") },
                { label: "Aerix Ranger", action: () => w.push("/product/4") },
                { label: "Aerix GTR++", action: () => w.push("/product/5") },
              ],
            },
            {
              title: "Support",
              links: [
                {
                  label: "Apply For Dealership",
                  href: "#",
                  action: () => t(!0),
                },
                { label: "Book Test Ride", href: "#", action: () => u(!0) },
                { label: "Service Centers", href: "#", action: () => x(!0) },
                { label: "Contact Us", href: "#", action: () => g(!0) },
                { label: "Warranty", href: "#", action: () => N(!0) },
              ],
            },
          ];
        return (
          r.A,
          l.A,
          i.A,
          n.A,
          o.A,
          (0, a.jsxs)("footer", {
            className: "bg-card border-t border-border",
            children: [
              (0, a.jsxs)("div", {
                className: "container-custom py-12 md:py-16",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "col-span-2 md:col-span-3 lg:col-span-1",
                        children: [
                          (0, a.jsx)("a", {
                            href: "/",
                            className: "text-2xl font-bold gradient-text",
                            children: "Aerix Energy",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-xs text-muted-foreground  mb-4",
                            children: "A unit of Finactics Consultants Pvt Ltd",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-sm text-muted-foreground mb-6",
                            children:
                              "Office Number 205, Regency Plaza,Shanti Nagar, Nr Waldhuni Bridge,Ulhasnagar Mumbai 421004",
                          }),
                        ],
                      }),
                      S.map((e) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            children: [
                              (0, a.jsx)("h3", {
                                className: "font-semibold text-foreground mb-4",
                                children: e.title,
                              }),
                              (0, a.jsx)("ul", {
                                className: "space-y-3",
                                children: e.links.map((e) =>
                                  (0, a.jsx)(
                                    "li",
                                    {
                                      children: (0, a.jsx)("a", {
                                        href: e.href,
                                        onClick: (t) => {
                                          e.action &&
                                            (t.preventDefault(), e.action());
                                        },
                                        className:
                                          "text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer",
                                        children: e.label,
                                      }),
                                    },
                                    e.label,
                                  ),
                                ),
                              }),
                            ],
                          },
                          e.title,
                        ),
                      ),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4",
                    children: [
                      (0, a.jsxs)("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                          "\xa9 ",
                          new Date().getFullYear(),
                          " Aerix Energy. All rights reserved.",
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-xs text-muted-foreground",
                            children: "Accepted Payments:",
                          }),
                          (0, a.jsx)("div", {
                            className: "flex gap-2",
                            children: [
                              "Visa",
                              "Mastercard",
                              "UPI",
                              "Paytm",
                            ].map((e) =>
                              (0, a.jsx)(
                                "div",
                                {
                                  className:
                                    "px-3 py-1 rounded bg-muted/50 text-xs font-medium",
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(c.A, { isOpen: e, onClose: () => t(!1) }),
              (0, a.jsx)(m.A, { open: s, onOpenChange: u, isEnquiry: !0 }),
              (0, a.jsx)(h, { isOpen: p, onClose: () => x(!1) }),
              (0, a.jsx)(b, { isOpen: f, onClose: () => g(!1) }),
              (0, a.jsx)(v, { isOpen: y, onClose: () => N(!1) }),
            ],
          })
        );
      };
    },
    4679: (e, t, s) => {
      s.d(t, {
        Cf: () => m,
        Es: () => p,
        L3: () => h,
        c7: () => u,
        lG: () => o,
        rr: () => x,
      });
      var a = s(5155),
        r = s(2115),
        l = s(9511),
        i = s(5229),
        n = s(5016);
      let o = l.bL;
      l.l9;
      let d = l.ZL;
      l.bm;
      let c = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.hJ, {
          ref: t,
          className: (0, n.cn)(
            "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            s,
          ),
          ...r,
        });
      });
      c.displayName = l.hJ.displayName;
      let m = r.forwardRef((e, t) => {
        let { className: s, children: r, ...o } = e;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(c, {}),
            (0, a.jsxs)(l.UC, {
              ref: t,
              className: (0, n.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                s,
              ),
              ...o,
              children: [
                r,
                (0, a.jsxs)(l.bm, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                  children: [
                    (0, a.jsx)(i.A, { className: "h-4 w-4" }),
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      m.displayName = l.UC.displayName;
      let u = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, n.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t,
          ),
          ...s,
        });
      };
      u.displayName = "DialogHeader";
      let p = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, n.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t,
          ),
          ...s,
        });
      };
      p.displayName = "DialogFooter";
      let h = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.hE, {
          ref: t,
          className: (0, n.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            s,
          ),
          ...r,
        });
      });
      h.displayName = l.hE.displayName;
      let x = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.VY, {
          ref: t,
          className: (0, n.cn)("text-sm text-muted-foreground", s),
          ...r,
        });
      });
      x.displayName = l.VY.displayName;
    },
    4916: (e, t, s) => {
      s.d(t, { S: () => o });
      var a = s(5155),
        r = s(2115),
        l = s(8162),
        i = s(5917),
        n = s(5016);
      let o = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.bL, {
          ref: t,
          className: (0, n.cn)(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            s,
          ),
          ...r,
          children: (0, a.jsx)(l.C1, {
            className: (0, n.cn)(
              "flex items-center justify-center text-current",
            ),
            children: (0, a.jsx)(i.A, { className: "h-4 w-4" }),
          }),
        });
      });
      o.displayName = l.bL.displayName;
    },
    5016: (e, t, s) => {
      s.d(t, { cn: () => l });
      var a = s(2821),
        r = s(5889);
      function l() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.QP)((0, a.$)(t));
      }
    },
    6170: (e, t, s) => {
      s.d(t, { p: () => i });
      var a = s(5155),
        r = s(2115),
        l = s(5016);
      let i = r.forwardRef((e, t) => {
        let { className: s, type: r, ...i } = e;
        return (0, a.jsx)("input", {
          type: r,
          className: (0, l.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            s,
          ),
          ref: t,
          ...i,
        });
      });
      i.displayName = "Input";
    },
    7003: (e, t, s) => {
      s.d(t, { $: () => d });
      var a = s(5155),
        r = s(2115),
        l = s(2467),
        i = s(3101),
        n = s(5016);
      let o = (0, i.F)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-border bg-transparent hover:bg-card hover:border-primary",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent/50 hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        d = r.forwardRef((e, t) => {
          let { className: s, variant: r, size: i, asChild: d = !1, ...c } = e,
            m = d ? l.DX : "button";
          return (0, a.jsx)(m, {
            className: (0, n.cn)(o({ variant: r, size: i, className: s })),
            ref: t,
            ...c,
          });
        });
      d.displayName = "Button";
    },
    7507: (e, t, s) => {
      s.d(t, {
        bq: () => u,
        eb: () => f,
        gC: () => x,
        l6: () => c,
        yv: () => m,
      });
      var a = s(5155),
        r = s(2115),
        l = s(5644),
        i = s(4033),
        n = s(2108),
        o = s(5917),
        d = s(5016);
      let c = l.bL;
      l.YJ;
      let m = l.WT,
        u = r.forwardRef((e, t) => {
          let { className: s, children: r, ...n } = e;
          return (0, a.jsxs)(l.l9, {
            ref: t,
            className: (0, d.cn)(
              "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              s,
            ),
            ...n,
            children: [
              r,
              (0, a.jsx)(l.In, {
                asChild: !0,
                children: (0, a.jsx)(i.A, { className: "h-4 w-4 opacity-50" }),
              }),
            ],
          });
        });
      u.displayName = l.l9.displayName;
      let p = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.PP, {
          ref: t,
          className: (0, d.cn)(
            "flex cursor-default items-center justify-center py-1",
            s,
          ),
          ...r,
          children: (0, a.jsx)(n.A, { className: "h-4 w-4" }),
        });
      });
      p.displayName = l.PP.displayName;
      let h = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.wn, {
          ref: t,
          className: (0, d.cn)(
            "flex cursor-default items-center justify-center py-1",
            s,
          ),
          ...r,
          children: (0, a.jsx)(i.A, { className: "h-4 w-4" }),
        });
      });
      h.displayName = l.wn.displayName;
      let x = r.forwardRef((e, t) => {
        let { className: s, children: r, position: i = "popper", ...n } = e;
        return (0, a.jsx)(l.ZL, {
          children: (0, a.jsxs)(l.UC, {
            ref: t,
            className: (0, d.cn)(
              "relative z-[999999] max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === i &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              s,
            ),
            position: i,
            ...n,
            children: [
              (0, a.jsx)(p, {}),
              (0, a.jsx)(l.LM, {
                className: (0, d.cn)(
                  "p-1",
                  "popper" === i &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
                ),
                children: r,
              }),
              (0, a.jsx)(h, {}),
            ],
          }),
        });
      });
      ((x.displayName = l.UC.displayName),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(l.JU, {
            ref: t,
            className: (0, d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", s),
            ...r,
          });
        }).displayName = l.JU.displayName));
      let f = r.forwardRef((e, t) => {
        let { className: s, children: r, ...i } = e;
        return (0, a.jsxs)(l.q7, {
          ref: t,
          className: (0, d.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
            s,
          ),
          ...i,
          children: [
            (0, a.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, a.jsx)(l.VF, {
                children: (0, a.jsx)(o.A, { className: "h-4 w-4" }),
              }),
            }),
            (0, a.jsx)(l.p4, { children: r }),
          ],
        });
      });
      ((f.displayName = l.q7.displayName),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(l.wv, {
            ref: t,
            className: (0, d.cn)("-mx-1 my-1 h-px bg-muted", s),
            ...r,
          });
        }).displayName = l.wv.displayName));
    },
    8171: (e, t, s) => {
      s.d(t, { dj: () => m });
      var a = s(2115);
      let r = 0,
        l = new Map(),
        i = (e) => {
          if (l.has(e)) return;
          let t = setTimeout(() => {
            (l.delete(e), d({ type: "REMOVE_TOAST", toastId: e }));
          }, 1e6);
          l.set(e, t);
        },
        n = [],
        o = { toasts: [] };
      function d(e) {
        ((o = ((e, t) => {
          switch (t.type) {
            case "ADD_TOAST":
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
            case "UPDATE_TOAST":
              return {
                ...e,
                toasts: e.toasts.map((e) =>
                  e.id === t.toast.id ? { ...e, ...t.toast } : e,
                ),
              };
            case "DISMISS_TOAST": {
              let { toastId: s } = t;
              return (
                s
                  ? i(s)
                  : e.toasts.forEach((e) => {
                      i(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === s || void 0 === s ? { ...e, open: !1 } : e,
                  ),
                }
              );
            }
            case "REMOVE_TOAST":
              if (void 0 === t.toastId) return { ...e, toasts: [] };
              return {
                ...e,
                toasts: e.toasts.filter((e) => e.id !== t.toastId),
              };
          }
        })(o, e)),
          n.forEach((e) => {
            e(o);
          }));
      }
      function c(e) {
        let { ...t } = e,
          s = (r = (r + 1) % Number.MAX_SAFE_INTEGER).toString(),
          a = () => d({ type: "DISMISS_TOAST", toastId: s });
        return (
          d({
            type: "ADD_TOAST",
            toast: {
              ...t,
              id: s,
              open: !0,
              onOpenChange: (e) => {
                e || a();
              },
            },
          }),
          {
            id: s,
            dismiss: a,
            update: (e) => d({ type: "UPDATE_TOAST", toast: { ...e, id: s } }),
          }
        );
      }
      function m() {
        let [e, t] = a.useState(o);
        return (
          a.useEffect(
            () => (
              n.push(t),
              () => {
                let e = n.indexOf(t);
                e > -1 && n.splice(e, 1);
              }
            ),
            [e],
          ),
          {
            ...e,
            toast: c,
            dismiss: (e) => d({ type: "DISMISS_TOAST", toastId: e }),
          }
        );
      }
    },
  },
]);
