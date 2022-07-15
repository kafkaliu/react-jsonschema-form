import React from "react";
import renderer from "react-test-renderer";

import Theme from '../src/Theme';
import ArrayFieldTemplate from "../src/ArrayFieldTemplate";
import DescriptionField from "../src/DescriptionField";
import TitleField from "../src/TitleField";
import { mockSchema, mockSchemaUtils } from "./helpers/createMocks";

describe("ArrayFieldTemplate", () => {
  test("simple", () => {
    const tree = renderer
      .create(
        <ArrayFieldTemplate
          DescriptionField={() => <DescriptionField />}
          TitleField={() => <TitleField />}
          canAdd={true}
          className=""
          disabled={false}
          onAddClick={() => void 0}
          readonly={false}
          required={false}
          schema={mockSchema}
          uiSchema={{}}
          title=""
          formContext={{}}
          formData={{}}
          registry={{ ...Theme, schemaUtils: mockSchemaUtils, formContext: {}, rootSchema: mockSchema }}
          // TODO : isSchema should be fixed here
          // @ts-ignore
          idSchema={{}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});