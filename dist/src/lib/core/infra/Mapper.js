"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
class Mapper {
    // public static toDomain (raw: any): T;
    // public static toDTO (t: T): DTO;
    // public static toPersistence (t: T): any;
    static serializeObj(obj) {
        return JSON.stringify(obj);
    }
    static deserializeObj(data) {
        return JSON.parse(data);
    }
}
exports.Mapper = Mapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL2luZnJhL01hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFzQixNQUFNO0lBQzFCLHdDQUF3QztJQUN4QyxtQ0FBbUM7SUFDbkMsMkNBQTJDO0lBRXBDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBd0I7UUFDakQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFTSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQVk7UUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Q0FDRjtBQVpELHdCQVlDIn0=