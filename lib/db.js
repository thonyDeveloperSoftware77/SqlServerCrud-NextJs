import sql from 'mssql'

const config = {
  user: 'thony',
  password: 'thony123',
  server: 'DESKTOP-FS78EQ2',
  database: 'usuarios',
  options: {
    encrypt: false // desactiva el cifrado SSL
  }
}

export async function executeQuery(query) {
  const pool = await sql.connect(config)
  const result = await pool.request().query(query)
  return result.recordset
}
