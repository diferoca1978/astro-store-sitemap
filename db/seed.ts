import { db, roles, user } from 'astro:db';
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	const role = [
		{ id: 'admin', name: 'Administrator' },
		{ id: 'user', name: 'SystemUser' }
	]
	const JohnDoe = {
		id: uuidv4(),
		name: 'John Doe',
		email: 'jodoe@email.com',
		password: bcrypt.hashSync('123456'),
		role_id: 'user'
	}
	const JaneDoe = {
		id: uuidv4(),
		name: 'Jane Doe',
		email: 'jadoe@google.com',
		password: bcrypt.hashSync('654321'),
		role_id: 'admin'
	}

	await db.insert(roles).values(role);
	await db.insert(user).values([JohnDoe, JaneDoe])
}