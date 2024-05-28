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
} from "@nestjs/swagger";

type ApiKaretsakaApiType = ApiResponseMetadata["type"];
class ApiForbiddenResponseErrorType {
  @ApiProperty()
  private statusCode: number;
  @ApiProperty()
  private message: string;
}

export function ApiKaretsaka({
  operationId,
  type,
}: {
  operationId: string;
  type: ApiKaretsakaApiType;
}) {
  return applyDecorators(
    ApiOperation({operationId}),
    ApiOkResponse({type}),
    ApiForbiddenResponse({type: ApiForbiddenResponseErrorType}),
    ApiInternalServerErrorResponse({type: ApiForbiddenResponseErrorType}),
    ApiNotFoundResponse({type: ApiForbiddenResponseErrorType}),
    ApiBadRequestResponse({type: ApiForbiddenResponseErrorType})
  );
}
