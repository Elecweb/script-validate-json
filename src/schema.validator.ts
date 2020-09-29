/* tslint:disable */
// generated by typescript-json-validator
import { inspect } from "util";
import Ajv = require("ajv");
import InformationTokenSchema from "./schema";
export const ajv = new Ajv({
  allErrors: true,
  coerceTypes: false,
  format: "fast",
  nullable: true,
  unicode: true,
  uniqueItems: true,
  useDefaults: true
});

ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-06.json"));

export { InformationTokenSchema };
export const InformationTokenSchemaSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  defaultProperties: [],
  definitions: {
    BlockchainSchema: {
      defaultProperties: [],
      properties: {
        explorer: {
          format: "url",
          type: "string"
        },
        name: {
          type: "string"
        }
      },
      required: ["explorer", "name"],
      type: "object"
    },
    SocialSchema: {
      defaultProperties: [],
      properties: {
        handle: {
          type: "string"
        },
        name: {
          enum: ["Medium", "Reddit", "Telegram", "Twitter", "Youtube"],
          type: "string"
        },
        url: {
          format: "url",
          type: "string"
        }
      },
      required: ["handle", "name", "url"],
      type: "object"
    },
    TokenomicsSchema: {
      defaultProperties: [],
      properties: {
        circulating_supply_url: {
          format: "url",
          type: "string"
        },
        max_supply_url: {
          format: "url",
          type: "string"
        },
        total_supply_url: {
          format: "url",
          type: "string"
        }
      },
      type: "object"
    }
  },
  properties: {
    blockchains: {
      items: {
        $ref: "#/definitions/BlockchainSchema"
      },
      type: "array"
    },
    coin_api_asset_id: {
      type: "string"
    },
    coingecko_asset_id: {
      type: "string"
    },
    description: {
      maximum: 100,
      minimum: 1,
      type: "string"
    },
    name: {
      type: "string"
    },
    short_description: {
      maximum: 100,
      minimum: 1,
      type: "string"
    },
    socials: {
      items: {
        $ref: "#/definitions/SocialSchema"
      },
      type: "array"
    },
    source_code: {
      format: "url",
      type: "string"
    },
    symbol: {
      type: "string"
    },
    tokenomics: {
      $ref: "#/definitions/TokenomicsSchema"
    },
    website: {
      format: "url",
      type: "string"
    },
    white_paper: {
      format: "url",
      type: "string"
    }
  },
  required: [
    "blockchains",
    "description",
    "name",
    "short_description",
    "socials",
    "symbol",
    "tokenomics",
    "website",
    "white_paper"
  ],
  type: "object"
};
export type ValidateFunction<T> = ((data: unknown) => data is T) &
  Pick<Ajv.ValidateFunction, "errors">;
export const isInformationTokenSchema = ajv.compile(
  InformationTokenSchemaSchema
) as ValidateFunction<InformationTokenSchema>;
export default function validate(value: unknown): InformationTokenSchema {
  if (isInformationTokenSchema(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(
        isInformationTokenSchema.errors!.filter((e: any) => e.keyword !== "if"),
        { dataVar: "InformationTokenSchema" }
      ) +
        "\n\n" +
        inspect(value)
    );
  }
}
