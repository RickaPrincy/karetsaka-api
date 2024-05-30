import {Type, applyDecorators} from "@nestjs/common";
import {ApiQuery} from "@nestjs/swagger";

export type ApiCriteriaType = Type<unknown> | string;

export function ApiCriteria<T>(
  ...keys: {name: string; type: ApiCriteriaType}[]
) {
  const queries = keys.map((key) => {
    return ApiQuery({
      ...key,
      required: false,
    });
  });

  return applyDecorators(...queries);
}
