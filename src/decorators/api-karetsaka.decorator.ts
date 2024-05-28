import {applyDecorators} from "@nestjs/common";
import {
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponseMetadata,
  ApiProperty,
  ApiBadRequestResponse,
  ApiOperationOptions,
} from "@nestjs/swagger";

type ApiKaretsakaOptions = {
  operationId: string;
  type: ApiResponseMetadata["type"];
  operationOptions?: ApiOperationOptions;
};

class ApiForbiddenResponseErrorType {
  @ApiProperty()
  private statusCode: number;
  @ApiProperty()
  private message: string;
}

export function ApiKaretsaka({
  operationId,
  type,
  operationOptions = {},
}: ApiKaretsakaOptions) {
  return applyDecorators(
    ApiOperation({...operationOptions, operationId}),
    ApiOkResponse({type}),
    ApiForbiddenResponse({type: ApiForbiddenResponseErrorType}),
    ApiInternalServerErrorResponse({type: ApiForbiddenResponseErrorType}),
    ApiNotFoundResponse({type: ApiForbiddenResponseErrorType}),
    ApiBadRequestResponse({type: ApiForbiddenResponseErrorType})
  );
}
