const query = sql`
    select * from book;
`;

const test = await sql()`
  SELECT * FROM users;
`;