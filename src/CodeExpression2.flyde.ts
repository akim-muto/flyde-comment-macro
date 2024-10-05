import { MacroNode } from "@flyde/core";
import { getVariables } from "./getInlineVariables2";

export interface CodeExpressionConfig2 {
  value: string;
}

export const CodeExpression2: MacroNode<CodeExpressionConfig2> = {
  id: "CodeExpression2",
  displayName: "JS Expression",
  defaultStyle: {
    icon: "code",
  },
  description: "Evaluates a JS expression. Supports dynamic variables",

  runFnBuilder: (config) => {
    return (inputs, outputs, adv) => {
      try {
        const resFn = eval(`(inputs, adv) => (${config.value})`);
        outputs.value.next(resFn(inputs, adv));
      } catch (e) {
        adv.onError(e);
      }
    };
  },
  definitionBuilder: (config) => {
    const inputNames = getVariables(config.value ?? "");
    return {
      defaultStyle: {
        size: "small",
        icon: "code",
      },
      displayName: `${config.value}`,
      description: `Evaluates the expression \`${config.value}\``,
      inputs: Object.fromEntries(inputNames.map((input) => [input, {}]) ?? []),
      outputs: {
        value: {
          displayName: "Value",
          description: "The result of the expression evaluation",
        },
      },
    };
  },
  defaultData: {
    value: "`Hello ${inputs.firstName} ${inputs.lastName}`",
  },
  editorConfig: {
    type: "custom",
    editorComponentBundlePath: "../../dist/ui/CodeExpression2.js",
  },
};
