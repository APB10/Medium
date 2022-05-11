"use strict";
(() => {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(505);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(994);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(137);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Post({ post  }) {
    const { 0: submitted , 1: setSubmitted  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
    const onSubmit = (data)=>{
        fetch(`/api/createComment`, {
            method: `POST`,
            body: JSON.stringify(data)
        }).then(()=>{
            console.log(data);
            setSubmitted(true);
        }).catch((err)=>{
            console.log(err);
            setSubmitted(false);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "h-40 w-full object-cover",
                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__/* .urlFor */ .uH)(post.mainImage).url()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: "mx-auto max-w-3xl p-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mt-10 mb-3 text-3xl",
                        children: post.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mb-2 text-xl font-light text-gray-500",
                        children: post.description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "h-10 w-10 rounded-full",
                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__/* .urlFor */ .uH)(post.author.image).url(),
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-sm font-extralight",
                                children: [
                                    "Blog post by",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-grey-600",
                                        children: post.author.name
                                    }),
                                    " - Published at ",
                                    new Date(post._createdAt).toLocaleString()
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_portable_text__WEBPACK_IMPORTED_MODULE_1___default()), {
                            dataset: "production",
                            projectId: "e36qdxjn",
                            content: post.body,
                            serializers: {
                                h1: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "my-5 text-2xl font-bold",
                                        ...props
                                    })
                                ,
                                h2: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "my-5 text-xl font-bold",
                                        ...props
                                    })
                                ,
                                li: (children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "ml-4 list-disc",
                                        children: children
                                    })
                                ,
                                link: ({ href , children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: href,
                                        className: "text-blue-500 hover:underline",
                                        children: children
                                    })
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: "mx-auto my-5 max-w-lg border border-yellow-500"
            }),
            submitted ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 p-10 text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-3xl font-bold",
                        children: "Thank you for submitting your comment!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Once it has been approved, it will appear below!"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "my-10 mx-auto mb-10 flex max-w-2xl flex-col p-5 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-sm text-yellow-500",
                        children: "Enjoyed this article? "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "text-3xl font-bold",
                        children: "Leave a comment below!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "mt-2 py-3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ...register("_id"),
                        type: "hidden",
                        name: "_id",
                        value: post._id
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "mb-5 block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-700",
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...register("name", {
                                    required: true
                                }),
                                className: "form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-600 focus:ring",
                                placeholder: "John Appleseed",
                                type: "text"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "mb-5 block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-700",
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...register("email", {
                                    required: true
                                }),
                                className: "form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-600 focus:ring",
                                placeholder: "John Appleseed",
                                type: "email"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "mb-5 block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-700",
                                children: "Comment"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                ...register("comment", {
                                    required: true
                                }),
                                className: "form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-600 focus:ring",
                                placeholder: "John Appleseed",
                                rows: 8
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lex-col flex p-5",
                        children: [
                            errors.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-500",
                                children: "- The Name Field is required"
                            }),
                            errors.comment && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-500",
                                children: "- The Comment Field is required"
                            }),
                            errors.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-500",
                                children: "-The Name Email is required"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "submit",
                        className: "focus:shadow-outline cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-yellow-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text4xl",
                        children: "Comments"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "pb-2"
                    }),
                    post.comments.map((comment)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: " pr-1 text-yellow-500",
                                        children: [
                                            comment.name,
                                            ":"
                                        ]
                                    }),
                                    comment.comment
                                ]
                            })
                        }, comment._id)
                    )
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
const getStaticPaths = async ()=>{
    const query = `*[_type == "post"]{
        _id,
       slug{
       current
      }
      }`;
    const posts = await _sanity__WEBPACK_IMPORTED_MODULE_3__/* .sanityClient.fetch */ .i3.fetch(query);
    const paths = posts.map((post)=>({
            params: {
                slug: post.slug.current
            }
        })
    );
    return {
        paths,
        fallback: "blocking"
    };
};
const getStaticProps = async ({ params  })=>{
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author->{
        name,
        image
        },
      "comments": *[
        _type == "comment" &&
        post._ref == ^._id &&
        approved == true],
      description,
      mainImage,
      slug,
      body
        }`;
    const post = await _sanity__WEBPACK_IMPORTED_MODULE_3__/* .sanityClient.fetch */ .i3.fetch(query, {
        slug: params === null || params === void 0 ? void 0 : params.slug
    });
    if (!post) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            post
        },
        revalidate: 60
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 879:
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 89:
/***/ ((module) => {

module.exports = require("react-portable-text");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 137:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [752], () => (__webpack_exec__(608)));
module.exports = __webpack_exports__;

})();