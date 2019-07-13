// index variables with formatters
let sql = `
	SELECT t1.c1 AS a1, COUNT(t2.cnt), NOW(), $1
	FROM table1 t1
	LEFT JOIN table2 t2 USING($2^)
	WHERE t1.a = $3:name
`

// named variables with formatters (parentheses)
let sql = `
	SELECT t1.c1 AS a1, SUM(t2.cnt), NOW(), $(account_id:alias)
	FROM table1 t1
	WHERE t1.a = $(userId) AND t1.users IN ($(myUsers^))
`

// named variables with formatters (curly braces)
let sql = `
	SELECT t1.c1 AS a1, COUNT(t2.cnt), NOW(), \${account_id:alias}
	FROM table1 t1
	WHERE t1.a = \${userId} AND users = ANY(\${myUsers^})
`
