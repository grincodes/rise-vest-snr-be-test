## Risevest Snr Be Test


# Code Architecture

Domain Driven Design


# Database Optimization
 - Due to the relationships between the differnt entities and 
   how often data might be read(assumption)
   compared to be reads.
   I Indexed all the foreign keys for more optimized reads.

   The Indexing was done on typeorm on all foriegn keys

# Query Optimization Challenge

 **Query A (My Solution)**: 
 
 `SELECT users.id,users."firstName",posts.title,comments.content,`
  `MAX(comments."createdAt") OVER (PARTITION BY posts."userId") AS latest_comment_created_at`
`FROM users LEFT JOIN posts ON users.id = posts."userId"`
`INNER JOIN comments ON posts.id = comments."postId"`
`ORDER BY (SELECT COUNT(posts.id) FROM posts WHERE posts."userId" = users.id) DESC`
`LIMIT 3;`

**Query B:** 
`SELECT users.id, users.name, posts.title, comments.content`
`FROM users`
`LEFT JOIN posts ON users.id = posts.userId`
`LEFT JOIN comments ON posts.id = comments.postId`
`WHERE comments.createdAt = (SELECT MAX(createdAt) FROM comments WHERE postId = posts.id)`
`ORDER BY (SELECT COUNT(posts.id) FROM posts WHERE posts.userId = users.id) DESC`
`LIMIT 3`;`  

Query A uses a window function to get the latest comment for each user. This window function is applied over a partition, which means that it is only applied to the rows for each user. This can improve performance if there are a lot of comments.

Query B uses a correlated join to get the latest comment for each user. The correlated join is only executed once, regardless of the number of users. However, the correlated join can be less efficient than a window function if there are a lot of comments.

Here is a breakdown of the performance of the two queries:

**Query A:**
The window function is executed once per user.
The LEFT JOIN is executed once.
The ORDER BY is executed once.
The LIMIT is executed once.

**Query B:**
The correlated join is executed once.
The ORDER BY is executed once.
The LIMIT is executed once.

Query A only executes the window function once per user, while Query B executes the correlated join for each row in the comments table. This makes Query A more efficient if there are a lot of comments.

In addition, the window function in Query A can be pushed down to the database, which can further improve performance. The correlated join in Query B cannot be pushed down to the database.

Endpoint for optimized query is on : `{{RiseUrl}}/api/v1/posts/challenge`

