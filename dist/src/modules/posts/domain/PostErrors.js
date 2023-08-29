"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostErrors = void 0;
const Result_1 = require("../../../lib/core/logic/Result");
var PostErrors;
(function (PostErrors) {
    class PostDoesNotExist extends Result_1.Result {
        constructor() {
            super(false, {
                message: `Post does not exist`,
            });
        }
        static create() {
            return new PostDoesNotExist();
        }
    }
    PostErrors.PostDoesNotExist = PostDoesNotExist;
})(PostErrors || (exports.PostErrors = PostErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdEVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Bvc3RzL2RvbWFpbi9Qb3N0RXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF1RDtBQUd2RCxJQUFpQixVQUFVLENBWTFCO0FBWkQsV0FBaUIsVUFBVTtJQUN6QixNQUFhLGdCQUFpQixTQUFRLGVBQW9CO1FBQ3hEO1lBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUscUJBQXFCO2FBQ2YsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7UUFFTSxNQUFNLENBQUMsTUFBTTtZQUNsQixPQUFPLElBQUksZ0JBQWdCLEVBQUUsQ0FBQTtRQUMvQixDQUFDO0tBQ0Y7SUFWWSwyQkFBZ0IsbUJBVTVCLENBQUE7QUFDSCxDQUFDLEVBWmdCLFVBQVUsMEJBQVYsVUFBVSxRQVkxQiJ9