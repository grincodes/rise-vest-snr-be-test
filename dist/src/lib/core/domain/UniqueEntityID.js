"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEntityID = void 0;
const uuid_1 = require("uuid");
const Identifier_1 = require("./Identifier");
class UniqueEntityID extends Identifier_1.Identifier {
    static isValidId(id) {
        return (0, uuid_1.validate)(id);
    }
    constructor(id) {
        super(id ? id : (0, uuid_1.v4)());
    }
}
exports.UniqueEntityID = UniqueEntityID;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pcXVlRW50aXR5SUQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvZG9tYWluL1VuaXF1ZUVudGl0eUlELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUEyRDtBQUMzRCw2Q0FBeUM7QUFFekMsTUFBYSxjQUFlLFNBQVEsdUJBQTJCO0lBQ3RELE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBVTtRQUNoQyxPQUFPLElBQUEsZUFBWSxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFDRCxZQUFZLEVBQW9CO1FBQzlCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBQSxTQUFJLEdBQUUsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Q0FDRjtBQVBELHdDQU9DIn0=