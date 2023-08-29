import { AbstractRepo } from "../../../../lib/infra/db/AbstractRepo"
import { Comments } from "../entity/CommentEntity.model"

export class CommentRepo extends AbstractRepo<Comments> {
}
