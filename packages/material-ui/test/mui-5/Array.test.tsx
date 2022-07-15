import React from 'react';
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv6";
import renderer from "react-test-renderer";

import { MuiForm5 as Form } from "../../src";

describe("array fields", () => {
  test("array", () => {
    const schema: RJSFSchema = {
      type: "array",
      items: {
        type: "string"
      }
    };
    const tree = renderer
      .create(<Form schema={schema} validator={validator} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("fixed array", () => {
    const schema: RJSFSchema = {
      type: "array",
      items: [
        {
          type: "string"
        },
        {
          type: "number"
        }
      ]
    };
    const tree = renderer
      .create(<Form schema={schema} validator={validator} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("checkboxes", () => {
    const schema: RJSFSchema = {
      type: "array",
      items: {
        type: "string",
        enum: ["a", "b", "c"]
      },
      uniqueItems: true
    };
    const tree = renderer
      .create(<Form schema={schema} validator={validator} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("array icons", () => {
    const schema: RJSFSchema = {
      type: "array",
      items: {
        type: "string"
      }
    };
    const tree = renderer
      .create(<Form schema={schema} validator={validator} formData={['a', 'b']} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});