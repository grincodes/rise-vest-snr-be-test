## Risevest Snr Be Test
k;?1kD/{'mtFii?|

# Code Architecture

Domain Driven Design


# Database Optimization
 - Due to the relationships between the differnt entities and 
   how often data might be read(assumption)
   compared to be reads.
   I Indexed all the foreign keys for more optimized reads.

   The Indexing was done on typeorm on all foriegn keys

# Challenge
Below is a more optimized sql compared to the one that was provide

`SELECT users.id, users.name, posts.title, comments.content`
`FROM users`
`INNER JOIN (`
    `SELECT userID, MAX(createdAt) AS createdAt`
    `FROM comments`
    `GROUP BY userID`
`) AS latestComments ON users.id = latestComments.userID`
`INNER JOIN posts ON posts.userId = users.id`
`ORDER BY latestComments.createdAt DESC`
`LIMIT 3;`

Though i had to rewrite the above sql using typeorrm query builder

