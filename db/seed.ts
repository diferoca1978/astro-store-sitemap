import { db, roles, user, product, productImage } from 'astro:db';
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { seedProducts } from './seed-data';

// https://astro.build/db/seed
export default async function seed() {
	// Clear tables first to avoid unique constraint errors
	await db.delete(productImage);
	await db.delete(product);
	await db.delete(user);
	await db.delete(roles);

	// Insert roles
	const role = [
		{ id: 'admin', name: 'Administrator' },
		{ id: 'user', name: 'SystemUser' }
	]

	//Insert users
	const JohnDoe = {
		id: uuidv4(),
		name: 'John Doe',
		email: 'jhon@email.com',
		password: bcrypt.hashSync('123456'),
		role_id: 'user'
	}
	const JaneDoe = {
		id: uuidv4(),
		name: 'Jane Doe',
		email: 'jane@google.com',
		password: bcrypt.hashSync('654321'),
		role_id: 'admin'
	}

	await db.insert(roles).values(role);
	await db.insert(user).values([JohnDoe, JaneDoe])

	// Insert products and product images
	const queries: any = [];

	seedProducts.forEach((p) => {

		const oneProduct = {
			id: uuidv4(),
			description: p.description,
			gender: p.gender,
			price: p.price,
			sizes: p.sizes.join(','),
			slug: p.slug,
			stock: p.stock,
			tags: p.tags.join(','),
			title: p.title,
			type: p.type,

			user: JohnDoe.id
		}

		queries.push(db.insert(product).values(oneProduct))

		p.images.forEach((img) => {
			const image = {
				id: uuidv4(),
				image: img,
				productId: oneProduct.id
			}

			queries.push(db.insert(productImage).values(image))
		})

	})

	await db.batch(queries)

	console.log('Seeded database');
}