"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Macro = void 0;
// const ifr = parse("<Iframe url={'https://www3.nhk.or.jp/news/html/20231007/k10014218571000.html'} width='100px' height='100px' sandbox='allow-same-origin' />")
// const componentAsString = ReactDOMServer.renderToString(ifr);
const ifr = 'https://www3.nhk.or.jp/news/html/20231007/k10014218571000.html';
exports.Macro = {
    id: "Macro",
    displayName: "Macro",
    defaultStyle: {
        icon: "comment",
    },
    description: "A comment node for documentation purposes",
    runFnBuilder: (config) => {
        return (inputs, outputs) => {
            config.content = inputs.in.value;
            outputs.out.next(config.content);
        };
    },
    definitionBuilder: (config) => {
        return {
            defaultStyle: {
                cssOverride: {
                    fontSize: "10px",
                    borderRadius: "0",
                    fontFamily: "monospace",
                    minHeight: "40px",
                    padding: "6px 8px",
                    textAlign: "left",
                    fontWeight: "normal",
                    display: "inline-flex",
                    alignItems: "center",
                },
            },
            displayName: config.content,
            description: "Comment node",
            inputs: {
                in: {
                    displayName: "in",
                    description: "in",
                },
            },
            outputs: {
                out: {
                    displayName: "out",
                    description: "out",
                },
            },
        };
    },
    defaultData: {
        content: ifr
    },
    editorConfig: {
        type: "custom",
        editorComponentBundlePath: "../../dist/ui/Macro.js",
    },
};
