import { column, defineDb, defineTable } from 'astro:db';


const user = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
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

const product = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    description: column.text(),
    gender: column.text(),
    price: column.number(),
    sizes: column.text(),
    slug: column.text(),
    stock: column.number(),
    tags: column.text({ unique: true }),
    title: column.text(),
    type: column.text(),

    user: column.text({ references: () => user.columns.id })
  }
})

const productImage = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    image: column.text(),
    productId: column.text({ references: () => product.columns.id })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    user,
    roles,
    product,
    productImage
  }
});

