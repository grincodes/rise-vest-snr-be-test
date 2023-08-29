"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = void 0;
class Identifier {
    constructor(value) {
        this.value = value;
        this.value = value;
    }
    equals(id) {
        if (id == null || id == undefined) {
            console.log("Identifier Null or Undefined");
            return false;
        }
        // if(!(id instanceof this.constructor)){
        //     console.log('FAlse');
        //     return false
        // }
        return id.toValue() == this.value;
    }
    toString() {
        return String(this.value);
    }
    toValue() {
        return this.value;
    }
}
exports.Identifier = Identifier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29yZS9kb21haW4vSWRlbnRpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFVBQVU7SUFDckIsWUFBb0IsS0FBUTtRQUFSLFVBQUssR0FBTCxLQUFLLENBQUc7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFrQjtRQUN2QixJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLFNBQVMsRUFBRTtZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7WUFFM0MsT0FBTyxLQUFLLENBQUE7U0FDYjtRQUNELHlDQUF5QztRQUN6Qyw0QkFBNEI7UUFDNUIsbUJBQW1CO1FBQ25CLElBQUk7UUFFSixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25DLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7Q0FDRjtBQTFCRCxnQ0EwQkMifQ==