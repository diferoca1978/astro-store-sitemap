import { column, defineDb, defineTable } from 'astro:db';


const user = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    name: column.text(),
    email: column.text({ unique: true }),
    password: column.text(),
    createdAt: column.date({ default: new Date() }),
    role_id: column.text({
      references: () => roles.columns.id
    })
  }
})

const roles = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    user,
    roles
  }
});

