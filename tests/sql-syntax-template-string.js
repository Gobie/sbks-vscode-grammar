// sql variable
let sql = `
	SELECT t1.c1 AS a1, COUNT(t2.cnt), NOW()
	FROM table1 t1
	LEFT JOIN table2 t2 ON (t1.primary_key = t2.primary_key)
	GROUP BY t1.c2
`

// sql variable concat
sql += `SELECT t1.c1 AS a1, COUNT(t2.cnt), NOW()`

// sql comment
const q = /* sql */`
	SELECT t1.c1 AS a1, COUNT(t2.cnt), NOW()
`

// pg-promise functions
someVar.none(`SELECT t1.c1 AS a1`)
someVar.one(`SELECT t1.c1 AS a1`)
someVar.oneOrNone(`SELECT t1.c1 AS a1`)
someVar.many(`SELECT t1.c1 AS a1`)
someVar.manyOrNone(`SELECT t1.c1 AS a1`)
someVar.any(`SELECT t1.c1 AS a1`)

// db-migrate functions
someVar.runSql(`SELECT t1.c1 AS a1`)
