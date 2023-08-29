"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class Guard {
    static extractAndThrowError(errors) {
        if (errors.length > 0) {
            if (errors[0].children && errors[0].children.length > 0) {
                return Guard.extractAndThrowError(errors[0].children[0].children);
            }
            const e = errors[0];
            const key = Object.keys(e.constraints || {})[0];
            const payload = {
                property: e.property,
                error: key ? e.constraints[key] : '',
            };
            return {
                fields: payload,
                errMsg: payload.error,
            };
        }
        else {
            return null;
        }
    }
    static validateAndError(data) {
        const errors = (0, class_validator_1.validateSync)(data, {
            whitelist: true,
        });
        const response = Guard.extractAndThrowError(errors);
        if (response == null) {
            return;
        }
        return { errMsg: response.errMsg };
    }
    static validate(validationClass, props) {
        const validatedProps = (0, class_transformer_1.plainToInstance)(validationClass, props, {
            enableImplicitConversion: true,
        });
        return Guard.validateAndError(validatedProps);
    }
}
exports.Guard = Guard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvbG9naWMvR3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseURBQXNFO0FBQ3RFLHFEQUFnRTtBQUVoRSxNQUFhLEtBQUs7SUFDTixNQUFNLENBQUMsb0JBQW9CLENBQUMsTUFBeUI7UUFDN0QsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2RCxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25FO1lBRUQsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoRCxNQUFNLE9BQU8sR0FBRztnQkFDZCxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7Z0JBQ3BCLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDckMsQ0FBQztZQUVGLE9BQU87Z0JBQ0wsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLO2FBQ3RCLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBUztRQUN0QyxNQUFNLE1BQU0sR0FBRyxJQUFBLDhCQUFZLEVBQUMsSUFBSSxFQUFFO1lBQ2hDLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBRUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQU8sZUFBb0MsRUFBRSxLQUFRO1FBQ2xFLE1BQU0sY0FBYyxHQUFHLElBQUEsbUNBQWUsRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFFO1lBQzdELHdCQUF3QixFQUFFLElBQUk7U0FDL0IsQ0FBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBN0NELHNCQTZDQyJ9