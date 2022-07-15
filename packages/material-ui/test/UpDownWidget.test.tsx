import React from "react";
import { createSchemaUtils, WidgetProps, RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv6";
import renderer from "react-test-renderer";

import MuiComponentContext from '../src/MuiComponentContext/MuiComponentContext';
import { MaterialUIContext } from '../src/Theme/MaterialUIContext';
import UpDownWidget from "../src/UpDownWidget/UpDownWidget";

export const mockSchema: RJSFSchema = {
  type: "array",
  items: {
    type: "string",
  },
};

export const mockEventHandlers = (): void => void 0;
describe("UpDownWidget", () => {
  test("renders 0 as 0 and not ''", () => {
    const props: WidgetProps = {
      uiSchema: {},
      schema: mockSchema,
      required: true,
      disabled: false,
      readonly: true,
      autofocus: true,
      label: "Some simple label",
      onChange: mockEventHandlers,
      onBlur: mockEventHandlers,
      onFocus: mockEventHandlers,
      multiple: false,
      rawErrors: [""],
      options: {},
      formContext: {},
      id: "_id",
      placeholder: "",
      value: 0,
      registry: {
        fields: {},
        widgets: {},
        formContext: {},
        rootSchema: {},
        schemaUtils: createSchemaUtils(validator, mockSchema),
      }
    };
    const tree = renderer.create((
      <MuiComponentContext.Provider value={MaterialUIContext}>
        <UpDownWidget {...props} />
      </MuiComponentContext.Provider>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});